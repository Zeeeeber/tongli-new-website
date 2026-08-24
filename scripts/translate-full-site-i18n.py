from __future__ import annotations

import html
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import sys

import argostranslate.translate


LANGUAGES = ("es", "fr", "ar", "ms", "id", "pt")
LETTER_PATTERN = re.compile(r"[A-Za-z]{2}")


class TranslatingHtmlParser(HTMLParser):
    def __init__(self, translate):
        super().__init__(convert_charrefs=False)
        self.translate = translate
        self.parts: list[str] = []

    def handle_starttag(self, tag, attrs):
        self.parts.append(self.get_starttag_text())

    def handle_startendtag(self, tag, attrs):
        self.parts.append(self.get_starttag_text())

    def handle_endtag(self, tag):
        self.parts.append(f"</{tag}>")

    def handle_data(self, data):
        if LETTER_PATTERN.search(data):
            leading = " " if data[:1].isspace() else ""
            trailing = " " if data[-1:].isspace() else ""
            translated = self.translate(" ".join(data.split()))
            self.parts.append(f"{leading}{html.escape(translated)}{trailing}")
        else:
            self.parts.append(data)

    def handle_entityref(self, name):
        self.parts.append(f"&{name};")

    def handle_charref(self, name):
        self.parts.append(f"&#{name};")

    def handle_comment(self, data):
        self.parts.append(f"<!--{data}-->")


def translate_html(source: str, translate) -> str:
    parser = TranslatingHtmlParser(translate)
    parser.feed(source)
    parser.close()
    return "".join(parser.parts)


def build_batches(phrases: list[str], character_budget: int = 10000):
    batch: list[str] = []
    size = 0
    for phrase in phrases:
        estimated = len(phrase) + 16
        if batch and size + estimated > character_budget:
            yield batch
            batch = []
            size = 0
        batch.append(phrase)
        size += estimated
    if batch:
        yield batch


def translate_batch(batch: list[str], translator) -> dict[str, str]:
    payload = "\n".join(f"TL{index} {phrase}" for index, phrase in enumerate(batch))
    translated_payload = translator.translate(payload)
    matches = list(re.finditer(r"(?:^|\n)\s*TL(\d+)\s+", translated_payload))
    translated: dict[str, str] = {}

    for match_index, match in enumerate(matches):
        item_index = int(match.group(1))
        if item_index >= len(batch):
            continue
        start = match.end()
        end = (
            matches[match_index + 1].start()
            if match_index + 1 < len(matches)
            else len(translated_payload)
        )
        translated[batch[item_index]] = translated_payload[start:end].strip()

    return translated


def is_contaminated_translation(source: str, value: str) -> bool:
    if re.search(r"\bTL\d+\b", value):
        return True
    if "<" not in source and "\n" in value:
        return True
    if len(value) > max(500, len(source) * 4 + 120):
        return True
    if any(
        fragment in value and fragment not in source
        for fragment in ("group-hover:", "text-[#", "border-[#")
    ):
        return True
    return False


def main() -> int:
    if len(sys.argv) < 3:
        print("Usage: translate-full-site-i18n.py source.json output.json [language ...]")
        return 2

    source_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2])
    phrases: list[str] = json.loads(source_path.read_text(encoding="utf-8"))
    requested_languages = tuple(sys.argv[3:]) or LANGUAGES
    unknown_languages = set(requested_languages) - set(LANGUAGES)
    if unknown_languages:
        print(f"Unsupported languages: {sorted(unknown_languages)}")
        return 2

    if output_path.exists():
        translations = json.loads(output_path.read_text(encoding="utf-8"))
    else:
        translations = {language: {} for language in LANGUAGES}

    for language in requested_languages:
        table: dict[str, str] = translations.setdefault(language, {})
        contaminated = [
            source
            for source, value in table.items()
            if is_contaminated_translation(source, value)
        ]
        for source in contaminated:
            del table[source]
        if contaminated:
            print(
                f"{language}: removed {len(contaminated)} contaminated batch translations",
                flush=True,
            )
        missing = [phrase for phrase in phrases if phrase not in table]
        print(f"{language}: translating {len(missing)} new phrases", flush=True)
        if not missing:
            continue

        translator = argostranslate.translate.get_translation_from_codes(
            "en", language
        )

        cache: dict[str, str] = {}

        def translate_plain(value: str) -> str:
            if value not in cache:
                candidate = translator.translate(value)
                cache[value] = (
                    value
                    if is_contaminated_translation(value, candidate)
                    else candidate
                )
            return cache[value]

        plain_missing = [phrase for phrase in missing if not ("<" in phrase and ">" in phrase)]
        processed = 0

        batches = (
            ([phrase] for phrase in plain_missing)
            if len(plain_missing) <= 500
            else build_batches(plain_missing)
        )
        for batch in batches:
            if len(batch) == 1:
                phrase = batch[0]
                table[phrase] = translate_plain(phrase)
                processed += 1
                if processed % 25 == 0 or processed == len(plain_missing):
                    output_path.write_text(
                        json.dumps(translations, ensure_ascii=False, indent=2),
                        encoding="utf-8",
                    )
                    print(f"{language}: {processed}/{len(missing)} complete", flush=True)
                continue

            try:
                batch_translations = translate_batch(batch, translator)
            except Exception as error:
                print(
                    f"{language}: batch translation failed, retrying individually: {error}",
                    flush=True,
                )
                batch_translations = {}

            for phrase in batch:
                table[phrase] = batch_translations.get(phrase) or translate_plain(phrase)
            processed += len(batch)
            output_path.write_text(
                json.dumps(translations, ensure_ascii=False, indent=2),
                encoding="utf-8",
            )
            print(f"{language}: {processed}/{len(missing)} complete", flush=True)

        html_phrases = [phrase for phrase in missing if "<" in phrase and ">" in phrase]
        for phrase in html_phrases:
            try:
                table[phrase] = translate_html(phrase, translate_plain)
            except Exception as error:
                print(f"{language}: kept source after HTML translation error: {error}", flush=True)
                table[phrase] = phrase
            processed += 1
            output_path.write_text(
                json.dumps(translations, ensure_ascii=False, indent=2),
                encoding="utf-8",
            )
            print(f"{language}: {processed}/{len(missing)} complete", flush=True)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
