# -*- coding: utf-8 -*-
"""Patch supporting-boards-products.ts: fix multi-line overview strings."""

import json
import re

DATA_FILE = r"D:\tongli-new-website\docs\import\mdf_3_products_data.json"
TS_FILE = r"D:\tongli-new-website\src\data\products\supporting-boards-products.ts"


def main():
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        items = json.load(f)
    data_by_slug = {it["slug"]: it for it in items}

    with open(TS_FILE, "r", encoding="utf-8") as f:
        src = f.read()

    # Process slugs in order
    for slug in ["raw-mdf-panel-e1-grade", "fireproof-mdf-flame-retardant", "mr-mdf-moisture-resistant"]:
        data = data_by_slug[slug]
        slug_pat = re.compile(r"    slug: \"" + re.escape(slug) + r"\",")
        sm = slug_pat.search(src)
        if not sm:
            print(f"  MISS slug header for {slug}")
            continue
        # Search from slug header to ~4000 chars ahead
        chunk = src[sm.end(): sm.end() + 4000]
        # Lazy match until we hit `",\n    applications:` OR `",\n    faqs:` (faqs comes after applications normally, but applications might not exist yet)
        # The safest: match until `",` followed by either applications or faqs
        ov_pat = re.compile(r'    overview: "[\s\S]*?(",\n    (?:applications|faqs): )')
        om = ov_pat.search(chunk)
        if not om:
            print(f"  MISS overview block for {slug}")
            continue
        new_overview = json.dumps(data["overview"], ensure_ascii=False)
        start_in_src = sm.end() + om.start()
        end_in_src = sm.end() + om.end()
        src = src[:start_in_src] + "    overview: " + new_overview + ",\n    " + src[end_in_src:]
        print(f"  FIXED overview for {slug}")

    with open(TS_FILE, "w", encoding="utf-8") as f:
        f.write(src)
    print("\nWritten:", TS_FILE)


if __name__ == "__main__":
    main()