# -*- coding: utf-8 -*-
"""Post-process the already-patched supporting-boards-products.ts.

Fix the `specs` block for the 3 MDF products so that:
1. JSON-supplied spec keys (with spaces) are quoted as string literals.
2. The required interface keys (productType, veneerSpecies, cuttingMethod,
   grainPattern, veneerThickness, sheetSize, application, moq, leadTime,
   packaging) are added as a derivation from the JSON spec values.
"""

import json
import re

DATA_FILE = r"D:\tongli-new-website\docs\import\mdf_3_products_data.json"
TS_FILE = r"D:\tongli-new-website\src\data\products\supporting-boards-products.ts"


def discover_json_specs():
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        items = json.load(f)
    return {it["slug"]: it["specs"] for it in items}, {it["slug"]: it["subCategorySlug"] for it in items}


def quote_key(k):
    if re.match(r"^[A-Za-z_$][A-Za-z0-9_$]*$", k):
        return k
    return json.dumps(k, ensure_ascii=False)


def build_specs_block(json_specs, sub_slug):
    product_type = json_specs.get("Product Type", "MDF Board")
    application = json_specs.get("Application", "Furniture, cabinets and interior use")
    sheet_size = json_specs.get("Standard Size", "1220 x 2440 mm / custom")
    veneer_thickness = json_specs.get("Reference Thickness") or json_specs.get("Common Thickness", "Customizable")
    if sub_slug == "raw-mdf":
        veneer_species = "Raw MDF"
    elif sub_slug == "fireproof-mdf":
        veneer_species = "Fireproof MDF"
    elif sub_slug == "mr-mdf":
        veneer_species = "MR MDF"
    else:
        veneer_species = sub_slug

    lines = []
    lines.append(f"      productType: {json.dumps(product_type, ensure_ascii=False)}")
    lines.append(f"      veneerSpecies: {json.dumps(veneer_species, ensure_ascii=False)}")
    lines.append('      cuttingMethod: "N/A"')
    lines.append('      grainPattern: "Uniform Fibre Surface"')
    lines.append(f"      veneerThickness: {json.dumps(veneer_thickness, ensure_ascii=False)}")
    lines.append(f"      sheetSize: {json.dumps(sheet_size, ensure_ascii=False)}")
    lines.append(f"      application: {json.dumps(application, ensure_ascii=False)}")
    lines.append('      moq: "Discussed per order"')
    lines.append('      leadTime: "Normally about 10 to 25 days, depends on quantity and requirement"')
    lines.append('      packaging: "Wooden frame packaging, in bulk, custom packaging"')
    for k, v in json_specs.items():
        lines.append(f"      {quote_key(k)}: {json.dumps(v, ensure_ascii=False)}")
    return "{\n" + ",\n".join(lines) + "\n    }"


def main():
    json_specs, sub_slugs = discover_json_specs()

    with open(TS_FILE, "r", encoding="utf-8") as f:
        src = f.read()

    for slug, specs in json_specs.items():
        sub_slug = sub_slugs[slug]
        new_block = build_specs_block(specs, sub_slug)
        # Replace specs: { ... } block immediately after the slug-matching entry.
        # We find the product block by slug, then locate `specs: {` within it.
        slug_pat = re.compile(r"(  \{\n    slug: \"" + re.escape(slug) + r"\",[\s\S]*?    specs: )\{[\s\S]*?\n    \},", re.MULTILINE)
        m = slug_pat.search(src)
        if not m:
            print(f"  MISS specs block for {slug}")
            continue
        src = src[: m.start()] + m.group(1) + new_block + ",\n" + src[m.end() :]
        print(f"  FIXED specs block for {slug}")

    with open(TS_FILE, "w", encoding="utf-8") as f:
        f.write(src)
    print("\nWritten:", TS_FILE)


if __name__ == "__main__":
    main()