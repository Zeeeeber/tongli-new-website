import generatedText from "./generated-full-site-text.json";
import { translateArabicTechnicalTitle } from "./arabic-technical-fallback";
import type { Locale } from "./config";
import { translateCoreText } from "./core-text";

type TranslationTable = Record<Exclude<Locale, "en">, Record<string, string>>;

const translations = generatedText as TranslationTable;

function normalizeSource(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

export function translateFullSiteText(locale: Locale, source: string): string {
  if (locale === "en") return source;

  const normalized = normalizeSource(source);
  if (!normalized) return source;

  const curated = translateCoreText(locale, normalized);
  const translated =
    curated !== normalized ? curated : translations[locale]?.[normalized];

  if (!translated) return source;

  const finalTranslation =
    locale === "ar"
      ? translateArabicTechnicalTitle(normalized, translated)
      : translated;

  const leadingWhitespace = /^\s/.test(source) ? " " : "";
  const trailingWhitespace = /\s$/.test(source) ? " " : "";
  return `${leadingWhitespace}${finalTranslation}${trailingWhitespace}`;
}
