# -*- coding: utf-8 -*-
"""Build the 3 MDF product entries and patch supporting-boards-products.ts.

The script:
- Reads docs/import/mdf_3_products_data.json
- Discovers which images actually exist in each formal directory
- Emits TypeScript object literals matching the SupportingBoardProduct schema
- Inserts them in-place into src/data/products/supporting-boards-products.ts by
  replacing the existing 3 placeholder objects (preserving the other 4 products)
- Quotes any spec keys containing spaces, and ensures required interface fields
  (productType, veneerSpecies, cuttingMethod, grainPattern, veneerThickness,
  sheetSize, application, moq, leadTime, packaging) are present.
"""

import json
import os
import re

DATA_FILE = r"D:\tongli-new-website\docs\import\mdf_3_products_data.json"
TS_FILE = r"D:\tongli-new-website\src\data\products\supporting-boards-products.ts"
DST_ROOT = r"D:\tongli-new-website\public\images\products\supporting-boards"


def discover_images(slug):
    folder = os.path.join(DST_ROOT, slug)
    if not os.path.isdir(folder):
        return None, []
    files = sorted(
        f for f in os.listdir(folder)
        if f.lower().endswith((".jpg", ".jpeg", ".png", ".webp"))
    )
    if not files:
        return None, []
    featured = f"/images/products/supporting-boards/{slug}/{files[0]}"
    gallery = [f"/images/products/supporting-boards/{slug}/{f}" for f in files]
    return featured, gallery


def js_key(k):
    """Quote keys that contain characters needing it."""
    if re.match(r"^[A-Za-z_$][A-Za-z0-9_$]*$", k):
        return k
    return json.dumps(k, ensure_ascii=False)


def js_str(s):
    if s is None:
        return "null"
    return json.dumps(s, ensure_ascii=False)


def js_str_array(arr):
    if not arr:
        return "[]"
    parts = [f"      {js_str(x)}" for x in arr]
    return "[\n" + ",\n".join(parts) + "\n    ]"


def build_product_entry(data):
    slug = data["slug"]
    featured, gallery = discover_images(slug)
    if not featured:
        raise RuntimeError(f"No images found for {slug} under {DST_ROOT}")

    faqs_lines = []
    for faq in data["faqs"]:
        faqs_lines.append(f"      {{ q: {js_str(faq['question'])}, a: {js_str(faq['answer'])} }}")
    faqs_block = "[\n" + ",\n".join(faqs_lines) + "\n    ]"

    # Build specs - merge JSON specs with required interface fields
    json_specs = data.get("specs", {})
    # Derive interface-compatible defaults from the JSON data
    product_type = json_specs.get("Product Type", data.get("productName", "MDF Board"))
    application = json_specs.get("Application", "Furniture, cabinets and interior use")
    sheet_size = json_specs.get("Standard Size", "1220 x 2440 mm / custom")
    veneer_thickness = json_specs.get("Reference Thickness") or json_specs.get("Common Thickness", "Customizable")

    # Determine a veneerSpecies-like label for the related-product badge
    if data["subCategorySlug"] == "raw-mdf":
        veneer_species = "Raw MDF"
    elif data["subCategorySlug"] == "fireproof-mdf":
        veneer_species = "Fireproof MDF"
    elif data["subCategorySlug"] == "mr-mdf":
        veneer_species = "MR MDF"
    else:
        veneer_species = data["subCategory"]

    specs_lines = []
    # Interface-required camelCase keys first
    specs_lines.append(f"      productType: {js_str(product_type)}")
    specs_lines.append(f"      veneerSpecies: {js_str(veneer_species)}")
    specs_lines.append('      cuttingMethod: "N/A"')
    specs_lines.append('      grainPattern: "Uniform Fibre Surface"')
    specs_lines.append(f"      veneerThickness: {js_str(veneer_thickness)}")
    specs_lines.append(f"      sheetSize: {js_str(sheet_size)}")
    specs_lines.append(f"      application: {js_str(application)}")
    specs_lines.append('      moq: "Discussed per order"')
    specs_lines.append('      leadTime: "Normally about 10 to 25 days, depends on quantity and requirement"')
    specs_lines.append('      packaging: "Wooden frame packaging, in bulk, custom packaging"')
    # Then quote the JSON-supplied spec keys so TypeScript treats them as map<string,string>
    for k, v in json_specs.items():
        specs_lines.append(f"      {js_key(k)}: {js_str(v)}")
    specs_block = "{\n" + ",\n".join(specs_lines) + "\n    }"

    # Build applications array
    apps = data.get("applications", [])
    apps_lines = []
    for a in apps:
        apps_lines.append(f"      {js_str(a)}")
    apps_block = "[\n" + ",\n".join(apps_lines) + "\n    ]" if apps_lines else "[]"

    tags_block = js_str_array(data["tags"])

    return f"""  {{
    slug: {js_str(slug)},
    name: {js_str(data["productName"])},
    seoTitle: {js_str(data["seoTitle"])},
    metaDescription: {js_str(data["metaDescription"])},
    code: "SBP-MDF-{slug.upper().replace('-', '-')[:24]}",
    category: "Supporting Boards",
    subCategory: {js_str(data["subCategory"])},
    subCategorySlug: {js_str(data["subCategorySlug"])},
    shortDesc: {js_str(data["shortDescription"])},
    tags: {tags_block},
    specs: {specs_block},
    imageAlt: {js_str(data["imageAlt"])},
    featuredImage: {js_str(featured)},
    gallery: {js_str_array(gallery)},
    overview: {js_str(data["overview"])},
    applications: {apps_block},
    faqs: {faqs_block},
    relatedProducts: [],
    updatedAt: "2026-07-02",
  }}"""


def main():
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        items = json.load(f)

    new_entries = {it["slug"]: build_product_entry(it) for it in items}

    with open(TS_FILE, "r", encoding="utf-8") as f:
        src = f.read()

    for slug, new_block in new_entries.items():
        pattern = re.compile(
            r"  \{\n    slug: \"" + re.escape(slug) + r"\",[\s\S]*?^\s*updatedAt: \"[^\"]*\",\n  \}",
            re.MULTILINE,
        )
        match = pattern.search(src)
        if not match:
            print(f"  MISS: slug block not found for {slug}")
            continue
        old = match.group(0)
        src = src[: match.start()] + new_block + src[match.end() :]
        print(f"  REPLACED {slug}: {len(old)} -> {len(new_block)} chars")

    with open(TS_FILE, "w", encoding="utf-8") as f:
        f.write(src)
    print("\nWritten:", TS_FILE)


if __name__ == "__main__":
    main()