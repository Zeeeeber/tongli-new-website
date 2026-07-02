# -*- coding: utf-8 -*-
"""Patch supporting-boards-products.ts: simplify specs blocks.

For each of the 3 MDF products:
- Strip non-interface spec keys from `specs`
- Keep only the required interface keys (productType, veneerSpecies,
  cuttingMethod, grainPattern, veneerThickness, sheetSize, application,
  moq, leadTime, packaging)
- Merge the rich JSON spec data into `overview` as an extra paragraph
- Merge any custom key data into `overview`
"""

import json
import re

DATA_FILE = r"D:\tongli-new-website\docs\import\mdf_3_products_data.json"
TS_FILE = r"D:\tongli-new-website\src\data\products\supporting-boards-products.ts"


def discover():
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        items = json.load(f)
    return {it["slug"]: it for it in items}


def build_specs_block(data):
    json_specs = data.get("specs", {})
    product_type = json_specs.get("Product Type", "MDF Board")
    application = json_specs.get("Application", "Furniture, cabinets and interior use")
    sheet_size = json_specs.get("Standard Size", "1220 x 2440 mm / custom")
    veneer_thickness = (
        json_specs.get("Reference Thickness")
        or json_specs.get("Common Thickness", "Customizable")
    )
    sub_slug = data["subCategorySlug"]
    if sub_slug == "raw-mdf":
        veneer_species = "Raw MDF"
    elif sub_slug == "fireproof-mdf":
        veneer_species = "Fireproof MDF"
    elif sub_slug == "mr-mdf":
        veneer_species = "MR MDF"
    else:
        veneer_species = sub_slug

    lines = []
    lines.append(f'      productType: {json.dumps(product_type, ensure_ascii=False)}')
    lines.append(f'      veneerSpecies: {json.dumps(veneer_species, ensure_ascii=False)}')
    lines.append('      cuttingMethod: "N/A"')
    lines.append('      grainPattern: "Uniform Fibre Surface"')
    lines.append(f'      veneerThickness: {json.dumps(veneer_thickness, ensure_ascii=False)}')
    lines.append(f'      sheetSize: {json.dumps(sheet_size, ensure_ascii=False)}')
    lines.append(f'      application: {json.dumps(application, ensure_ascii=False)}')
    lines.append('      moq: "Discussed per order"')
    lines.append('      leadTime: "Normally about 10 to 25 days, depends on quantity and requirement"')
    lines.append('      packaging: "Wooden frame packaging, in bulk, custom packaging"')
    return "{\n" + ",\n".join(lines) + "\n    }"


def build_overview_block(data):
    """Combine original overview + rich spec details + applications as readable paragraphs."""
    parts = [data["overview"]]
    specs = data.get("specs", {})
    if specs:
        spec_lines = [f"{k}: {v}" for k, v in specs.items()]
        parts.append("Key specifications: " + "; ".join(spec_lines) + ".")
    apps = data.get("applications", [])
    if apps:
        parts.append("Typical applications: " + ", ".join(apps) + ".")
    combined = "\n\n" + "\n\n".join(parts)
    return combined


def main():
    data_by_slug = discover()
    with open(TS_FILE, "r", encoding="utf-8") as f:
        src = f.read()

    for slug, data in data_by_slug.items():
        # 1) Replace the specs block with the simplified version
        slug_pat = re.compile(
            r"(  \{\n    slug: \"" + re.escape(slug) + r"\",[\s\S]*?    specs: )\{[\s\S]*?\n    \},",
            re.MULTILINE,
        )
        m = slug_pat.search(src)
        if not m:
            print(f"  MISS specs block for {slug}")
            continue
        new_specs = build_specs_block(data)
        src = src[: m.start()] + m.group(1) + new_specs + ",\n" + src[m.end() :]

        # 2) Replace the overview block (a single line) with the extended version
        ov_pat = re.compile(
            r'(    overview: ")([^"]*)(",)',
        )
        m2 = ov_pat.search(src, pos=m.end())
        if not m2:
            print(f"  MISS overview for {slug}")
            continue
        new_overview = build_overview_block(data)
        src = src[: m2.start()] + m2.group(1) + new_overview + m2.group(3) + src[m2.end() :]
        print(f"  FIXED {slug}")

    with open(TS_FILE, "w", encoding="utf-8") as f:
        f.write(src)
    print("\nWritten:", TS_FILE)


if __name__ == "__main__":
    main()