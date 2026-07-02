"""Verification script for the 3 MDF products."""

import os
import re

ROOT = r"D:\tongli-new-website"
DST = os.path.join(ROOT, "public", "images", "products", "supporting-boards")
TS = os.path.join(ROOT, "src", "data", "products", "supporting-boards-products.ts")

SLUGS = ["raw-mdf-panel-e1-grade", "fireproof-mdf-flame-retardant", "mr-mdf-moisture-resistant"]

print("=" * 60)
print("VERIFICATION CHECKLIST")
print("=" * 60)

print("\n[1] Modified files (compared to git status):")
import subprocess
out = subprocess.run(["git", "status", "--short"], cwd=ROOT, capture_output=True, text=True)
print(out.stdout)

print("\n[2] Image folder + files per product:")
for slug in SLUGS:
    d = os.path.join(DST, slug)
    files = sorted(f for f in os.listdir(d) if f.lower().endswith((".jpg", ".jpeg", ".png", ".webp")))
    print(f"  {slug}: {d}")
    print(f"    files ({len(files)}): {', '.join(files)}")

print("\n[3] featuredImage + gallery for each product:")
with open(TS, "r", encoding="utf-8") as f:
    src = f.read()
for slug in SLUGS:
    block_pat = re.compile(
        r"  \{\n    slug: \"" + re.escape(slug) + r"\",[\s\S]*?^\s*updatedAt: \"[^\"]*\",\n  \}",
        re.MULTILINE,
    )
    m = block_pat.search(src)
    block = m.group(0)
    feat = re.search(r'featuredImage: "([^"]+)"', block)
    gal = re.search(r"gallery: \[([\s\S]*?)\]", block)
    gallery_files = re.findall(r'"([^"]+)"', gal.group(1))
    seo = re.search(r'seoTitle: "([^"]+)"', block)
    meta = re.search(r'metaDescription: "([^"]+)"', block)
    shortDesc = re.search(r'shortDesc: "([^"]+)"', block)
    sub = re.search(r'subCategory: "([^"]+)"', block)
    subSlug = re.search(r'subCategorySlug: "([^"]+)"', block)
    print(f"  {slug}:")
    print(f"    subCategory: {sub.group(1) if sub else None}")
    print(f"    subCategorySlug: {subSlug.group(1) if subSlug else None}")
    print(f"    seoTitle: {seo.group(1)[:80] + '...' if seo else None}")
    print(f"    metaDescription: {meta.group(1)[:80] + '...' if meta else None}")
    print(f"    shortDesc: {shortDesc.group(1)[:80] + '...' if shortDesc else None}")
    print(f"    featuredImage: {feat.group(1) if feat else None}")
    print(f"    gallery ({len(gallery_files)}): {gallery_files}")

print("\n[4] Existing URLs preserved:")
for slug in SLUGS:
    found = slug in src
    print(f"  {slug}: {'OK' if found else 'MISSING'}")

print("\n[5] Other Supporting Boards products preserved (7 total expected):")
slugs_in_data = re.findall(r"slug: \"([^\"]+)\"", src)
print(f"  Slugs found: {slugs_in_data}")

print("\n[6] Image file existence check (no broken paths):")
for slug in SLUGS:
    block_pat = re.compile(
        r"  \{\n    slug: \"" + re.escape(slug) + r"\",[\s\S]*?^\s*updatedAt: \"[^\"]*\",\n  \}",
        re.MULTILINE,
    )
    block = block_pat.search(src).group(0)
    paths = re.findall(r'"(/images/products/supporting-boards/' + re.escape(slug) + r'/[^"]+)"', block)
    for p in paths:
        rel = p.lstrip("/")
        full = os.path.join(ROOT, "public", rel)
        exists = os.path.isfile(full)
        size = os.path.getsize(full) if exists else 0
        print(f"  {'OK' if exists else 'MISS'}  {p}  ({size} bytes)")

print("\n[7] Dynamic route /templates wiring check:")
with open(os.path.join(ROOT, "src", "app", "products", "supporting-boards", "[slug]", "page.tsx"), "r", encoding="utf-8") as f:
    rt_src = f.read()
print(f"  generateStaticParams uses getAllSupportingBoardProductSlugs: {'getAllSupportingBoardProductSlugs' in rt_src}")
print(f"  generateMetadata uses seoTitle: {'seoTitle' in rt_src}")
print(f"  generateMetadata uses metaDescription: {'metaDescription' in rt_src}")
print(f"  notFound() called when missing: {'notFound()' in rt_src}")
rt = 'case "raw-mdf":'
print(f"  raw-mdf -> RawMDFDetailTemplate: {rt in rt_src}")
ft = 'case "fireproof-mdf":'
print(f"  fireproof-mdf -> FireproofMDFDetailTemplate: {ft in rt_src}")
mt = 'case "mr-mdf":'
print(f"  mr-mdf -> MRMDFDetailTemplate: {mt in rt_src}")

print("\n[8] Template relatedProducts import check:")
for tmpl in ["RawMDFDetailTemplate.tsx", "FireproofMDFDetailTemplate.tsx", "MRMDFDetailTemplate.tsx"]:
    path = os.path.join(ROOT, "src", "components", "product", tmpl)
    with open(path, "r", encoding="utf-8") as f:
        c = f.read()
    has_import = "supportingBoardsProducts" in c
    has_filter = "p.slug !== slug" in c
    print(f"  {tmpl}: import={has_import}, filter-by-slug={has_filter}")

print("\n[9] /products/supporting-boards listing (no product list rendered, no placeholder text needed):")
with open(os.path.join(ROOT, "src", "app", "products", "supporting-boards", "page.tsx"), "r", encoding="utf-8") as f:
    sp = f.read()
# This page does not render product list — it shows category descriptions.
has_products_import = "supportingBoardsProducts" in sp
print(f"  Lists products: {has_products_import}  (page is descriptive-only — no product list to update)")

print("\n[10] /products page supports supporting boards:")
with open(os.path.join(ROOT, "src", "app", "products", "page.tsx"), "r", encoding="utf-8") as f:
    pp = f.read()
print(f"  Reads supportingBoardsProducts: {'supportingBoardsProducts' in pp}")
print(f"  Maps subCategorySlug -> categoryId: {'p.subCategorySlug as CategoryId' in pp}")
print(f"  Filters out Natural Wood Veneer (N/A — uses supportingBoards only): N/A")

print("\n[11] Built artifacts exist:")
artifacts = os.path.join(ROOT, ".next", "server", "app", "products", "supporting-boards")
if os.path.isdir(artifacts):
    for slug in SLUGS:
        path = os.path.join(artifacts, slug + ".segments")
        ok = os.path.isdir(path)
        print(f"  /products/supporting-boards/{slug}: {'OK' if ok else 'MISSING'}")
else:
    print("  Build artifacts not found — please re-run npm run build")