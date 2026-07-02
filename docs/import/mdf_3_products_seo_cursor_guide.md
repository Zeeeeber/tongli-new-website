# MDF Supporting Boards Product SEO & Cursor Publishing Guide

Generated for Tongli Timber MDF product publishing.

## Important URL rule

These 3 products must update the existing placeholder/template URLs under Supporting Boards. Do **not** create new slugs and do **not** delete the old placeholder URLs.

| Subcategory | Existing slug to update | SEO title / H1 | Meta description | Tags |
|---|---|---|---|---|
| Raw MDF | `raw-mdf-panel-e1-grade` | Raw MDF Board 18mm | Plain Fibreboard Panel | China MDF Board Supplier | Raw MDF board 18mm in 1220x2440mm sheets for furniture, cabinets, doors and interior panels. Plain fibreboard with custom size options. | Raw MDF Board, MDF Board 18mm, Plain MDF Board, MDF Fibreboard, 1220x2440 MDF Board, MDF Board for Furniture, MDF Board for Cabinets, MDF Panel Supplier, China MDF Board Supplier |
| Fireproof MDF | `fireproof-mdf-flame-retardant` | Fireproof MDF Board | Flame-Retardant Panel | China Fire Rated MDF Supplier | Fireproof MDF board for furniture, doors, wall panels and commercial interiors. Flame-retardant MDF sheets with custom sizes and thickness options. | Fireproof MDF Board, Fire Rated MDF, Flame Retardant MDF, FR MDF Board, Fire Resistant MDF Board, MDF Board for Doors, MDF Wall Panel, Fireproof MDF Supplier, China Fire Rated MDF |
| MR MDF | `mr-mdf-moisture-resistant` | MR MDF Board 18mm | Moisture-Resistant Green Panel | China MDF Supplier | MR MDF board in green moisture-resistant panel options for cabinets, wardrobes, furniture and interior applications. 12mm, 16mm and 18mm available. | MR MDF Board, Moisture Resistant MDF, HMR MDF Board, Green MDF Board, 18mm MR MDF, 12mm MDF Board, 16mm MDF Board, MDF Board for Cabinets, China MDF Supplier |

## Source image directory

`C:\Users\Administrator\Desktop\网站合集图\产品发布\mdf`

If Cursor cannot read the Windows path, copy the images to:

`_import/mdf-raw/`

## Formal image directories

- `public/images/products/supporting-boards/raw-mdf-panel-e1-grade/`
- `public/images/products/supporting-boards/fireproof-mdf-flame-retardant/`
- `public/images/products/supporting-boards/mr-mdf-moisture-resistant/`

## Image sorting rule

1. Use image whose name contains `Featured Image (1)` as `image-01` when available.
2. Otherwise use image whose name contains `(1)`, `（1）`, or `１` as `image-01`.
3. Ignore generic `1.jpg` as featured unless there is no numbered/featured file.
4. Rename remaining images naturally as `image-02`, `image-03`, etc.
5. Keep real file extension; do not force jpg/png conversion.

## Cursor publishing prompt

```text
Please read:

docs/import/mdf_3_products_data.json
docs/import/mdf_3_products_seo_cursor_guide.md

Task:
Publish 3 MDF products under Supporting Boards by updating the existing placeholder/template product URLs.

Products:
1. Raw MDF → /products/supporting-boards/raw-mdf-panel-e1-grade
2. Fireproof MDF → /products/supporting-boards/fireproof-mdf-flame-retardant
3. MR MDF → /products/supporting-boards/mr-mdf-moisture-resistant

Do not create new slugs.
Do not delete these existing URLs.
Do not let any of these existing URLs become 404.

Original image directory:
C:\Users\Administrator\Desktop\网站合集图\产品发布\mdf

If this path is not readable, ask me to copy the image folders to:
_import/mdf-raw/

Formal image directory:
public/images/products/supporting-boards/

==================================================
1. Identify source folders
==================================================

Match these source folders:

Raw MDF:
China Factory Wholesale 1220_2440mm 18mm Plain MDF Fibreboards For Furniture Manufacturer and Supplier _ Tongli

Fireproof MDF:
Custom China Flame Retardant First-Class Grade Fireproof Mdf Board _ Fire Rated Mdf Manufacturer and Supplier _ Tongli Factory, Manufacturers _ Tongli

MR MDF:
Custom China Waterproof Moisture Resistant Green Hmr Mdf Board _ 12Mm 16Mm 18Mm Manufacturer and Supplier _ Tongli Factory, Manufacturers _ Tongli

Ignore platform words, supplier words, factory words and location words from old folder names when writing product content. Use only the SEO data from JSON.

==================================================
2. Organize images
==================================================

Create or update these folders:

public/images/products/supporting-boards/raw-mdf-panel-e1-grade/
public/images/products/supporting-boards/fireproof-mdf-flame-retardant/
public/images/products/supporting-boards/mr-mdf-moisture-resistant/

Rules:
1. Copy images from the matched source folder.
2. Do not delete original images.
3. Do not compress images.
4. Do not convert webp.
5. Keep real file extension.
6. If a file contains "Featured Image (1)", use it as image-01.
7. Otherwise, a file containing "(1)", "（1）", or "１" should become image-01.
8. Generic "1.jpg" should not be preferred as image-01 unless no numbered/featured image exists.
9. Rename remaining images as image-02, image-03, etc. by natural order.
10. Remove or ignore .gitkeep in folders if real images exist.

==================================================
3. Update product data
==================================================

Use or update:

src/data/products/supporting-boards-products.ts

Find the 3 existing placeholder products by slug:

raw-mdf-panel-e1-grade
fireproof-mdf-flame-retardant
mr-mdf-moisture-resistant

Update these existing products with the SEO data from:
docs/import/mdf_3_products_data.json

Do not create duplicate MDF products.

Each product must keep:

category: "Supporting Boards"
categorySlug: "supporting-boards"

Subcategory mapping:
raw-mdf-panel-e1-grade:
subCategory: "Raw MDF"
subCategorySlug: "raw-mdf"

fireproof-mdf-flame-retardant:
subCategory: "Fireproof MDF"
subCategorySlug: "fireproof-mdf"

mr-mdf-moisture-resistant:
subCategory: "MR MDF"
subCategorySlug: "mr-mdf"

Update fields:
slug
name
productName
h1Title
seoTitle
metaDescription
shortDescription
shortDesc
tags
imageAlt
featuredImage
gallery
specs
applications
overview
faqs

featuredImage:
Use image-01 from the corresponding formal image folder.

gallery:
Generate from real existing image files only. Do not write non-existent paths.

Do not write fake certificates.
Do not write fake test reports.
Do not overstate "waterproof" for MR MDF. Use moisture-resistant, not fully waterproof.
For fireproof MDF, mention fire performance is subject to required specification/testing standard.

==================================================
4. Dynamic route
==================================================

Check:

src/app/products/supporting-boards/[slug]/page.tsx

Requirements:
1. The 3 URLs must generate:
   /products/supporting-boards/raw-mdf-panel-e1-grade
   /products/supporting-boards/fireproof-mdf-flame-retardant
   /products/supporting-boards/mr-mdf-moisture-resistant

2. raw-mdf-panel-e1-grade must use RawMDFDetailTemplate.
3. fireproof-mdf-flame-retardant must use FireproofMDFDetailTemplate.
4. mr-mdf-moisture-resistant must use MRMDFDetailTemplate.
5. generateStaticParams includes all 3 slugs.
6. generateMetadata uses seoTitle and metaDescription.
7. slug not found returns notFound().

Do not create:
- /products/raw-mdf/...
- /products/fireproof-mdf/...
- /products/mr-mdf/...

Only use the existing Supporting Boards URL structure.

==================================================
5. Sync pages
==================================================

Sync if current project already supports it:

1. /products/supporting-boards
   - show these 3 MDF products as formal products
   - do not show old placeholder text for these 3 products

2. /products
   - if Products page reads supportingBoardsProducts, ensure these 3 products display correctly
   - avoid duplicates

3. Related Products
   - for these MDF products, use Supporting Boards formal products if available
   - do not show Natural Wood Veneer products as related products

Do not modify:
Natural Wood Veneer
Wood Veneer Panels
Engineered Wood Veneer
Melamine Board
3D Wood Panels
Veneer Edge Banding
Header / Footer
Home / About / Contact
sitemap / robots
global SEO settings
form functions
overall detail page design

==================================================
6. Build and report
==================================================

Run:

npm run build

Then output:
1. modified files
2. whether only these 3 MDF products were updated
3. whether existing URLs were preserved
4. image folder path for each product
5. featuredImage for each product
6. gallery image count for each product
7. whether all 3 URLs can generate
8. whether each product uses the correct MDF template
9. whether any broken image risk exists
10. whether npm run build passed

Do not run git add .
After build passes, wait for my confirmation before whitelist commit.
```
