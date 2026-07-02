# Supporting Boards Product Publish Guide — Commercial Plywood / Basswood Plywood / Particle Board

## 0. Result Summary

The uploaded `supporting board.zip` contains **4 products** across **3 Supporting Boards subcategories**:

| Subcategory | Product Count | Action |
|---|---:|---|
| Commercial Plywood | 2 | Update existing placeholder + add 1 new commercial plywood product |
| Basswood Plywood | 1 | Update existing placeholder |
| Particle Board | 1 | Update existing placeholder |

Important: the existing placeholder URLs must not become 404.

## 1. Existing URLs to Keep

Update these existing placeholder products directly:

```txt
/products/supporting-boards/commercial-plywood-bb-grade-4x8
/products/supporting-boards/basswood-plywood-furniture-grade
/products/supporting-boards/particle-board-furniture-grade
```

The zip contains **two Commercial Plywood product folders**. Use the existing commercial plywood URL for the 18mm EV eucalyptus commercial plywood product, and create one additional product for the 15mm cherry veneer commercial plywood product:

```txt
/products/supporting-boards/15mm-cherry-veneer-commercial-plywood-4x8
```

## 2. SEO Product Data

Use the JSON file:

```txt
docs/import/supporting_board_4_products_data.json
```

Do not rewrite product titles, descriptions, tags or slugs.

## 3. Product Mapping

| Source Top Folder | Source Product Folder | Target Slug | Target URL |
|---|---|---|---|
| commercial plywood | Custom China 18Mm Single Slide Ev Eucalyptus E1 E0 Commercial Plywood For Furniture Manufacturer and Supplier _ Tongli Factor | commercial-plywood-bb-grade-4x8 | /products/supporting-boards/commercial-plywood-bb-grade-4x8 |
| commercial plywood | Custom China 15Mm Double Slide Cherry Veneer Plywood Board Sheet 4_8 Inch _ China Supplier Manufacturer and Supplier _ | 15mm-cherry-veneer-commercial-plywood-4x8 | /products/supporting-boards/15mm-cherry-veneer-commercial-plywood-4x8 |
| basswood plywood | Custom China 3mm Basswood Plywood Sheets_ 4&#215;8 for Laser Cutting _ Plywood Manufacturing_ _ Tongli Manufacturer and Supplier _ Tongli Fac | basswood-plywood-furniture-grade | /products/supporting-boards/basswood-plywood-furniture-grade |
| particle board | Custom China Particle Board _ China Manufacturer _ Tongli Manufacturer and Supplier _ Tongli Factory, Manufacturers _ Tongli | particle-board-furniture-grade | /products/supporting-boards/particle-board-furniture-grade |

## 4. Cursor Execution Prompt

```txt
Please read:

docs/import/supporting_board_4_products_data.json
docs/import/supporting_board_4_products_seo_cursor_guide.md

Goal:
Publish 4 Supporting Boards products under these subcategories:
1. Commercial Plywood
2. Basswood Plywood
3. Particle Board

Important:
- These are Supporting Boards subcategory products.
- Keep existing placeholder URLs and update them instead of deleting them.
- Do not create new slugs for existing placeholder products.
- Do not let existing placeholder URLs become 404.
- Strictly use the JSON SEO data. Do not rewrite product titles, meta descriptions, tags or slugs.

Original image directory:

C:\Users\Administrator\Desktop\网站合集图\产品发布\supporting baord

If this Windows path cannot be accessed, ask me to copy the images to:

_import/supporting-board-raw/

Final image directory:

public/images/products/supporting-boards/

==================================================
1. Image Organization
==================================================

Use sourceFolder / oldFolderName from JSON to match the original folders.

Create these target folders:

public/images/products/supporting-boards/commercial-plywood-bb-grade-4x8/
public/images/products/supporting-boards/15mm-cherry-veneer-commercial-plywood-4x8/
public/images/products/supporting-boards/basswood-plywood-furniture-grade/
public/images/products/supporting-boards/particle-board-furniture-grade/

Image naming rules:

1. If a file name contains (1), （1）, or １, use it as image-01.
2. If multiple files could be image-01, prefer the one with the product-name pattern and (1), not a generic existing image-01 unless no numbered image exists.
3. Other images should be sorted by natural numeric order and named image-02, image-03, image-04...
4. Preserve the real extension. Do not force jpg to png or png to jpg.
5. Do not delete original images.
6. Do not compress images.
7. Do not convert to webp.
8. If a target folder already contains .gitkeep, it can remain or be removed safely.

==================================================
2. Product Data
==================================================

Update:

src/data/products/supporting-boards-products.ts

Use the 4 products from:

docs/import/supporting_board_4_products_data.json

Existing placeholder products to update:

commercial-plywood-bb-grade-4x8
basswood-plywood-furniture-grade
particle-board-furniture-grade

New product to add:

15mm-cherry-veneer-commercial-plywood-4x8

Do not add duplicate products for the same slug.

All products must use:

category: "Supporting Boards"
categorySlug: "supporting-boards"

Subcategory mapping:

commercial-plywood-bb-grade-4x8:
subCategory: "Commercial Plywood"
subCategorySlug: "commercial-plywood"

15mm-cherry-veneer-commercial-plywood-4x8:
subCategory: "Commercial Plywood"
subCategorySlug: "commercial-plywood"

basswood-plywood-furniture-grade:
subCategory: "Basswood Plywood"
subCategorySlug: "basswood-plywood"

particle-board-furniture-grade:
subCategory: "Particle Board"
subCategorySlug: "particle-board"

Use JSON fields for:
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
specs
applications
overview
faqs

featuredImage:
Use image-01 in the corresponding target folder with the real extension.

gallery:
Generate from real images in the target folder only.
Do not write image paths that do not exist.

Do not write false certificates.
Do not write fake testing reports.
Do not overstate E0/E1, waterproof, marine or fireproof claims.
Use conservative wording already provided in JSON.

==================================================
3. Dynamic Route Check
==================================================

Check:

src/app/products/supporting-boards/[slug]/page.tsx

Requirements:

1. These URLs must generate successfully:

/products/supporting-boards/commercial-plywood-bb-grade-4x8
/products/supporting-boards/15mm-cherry-veneer-commercial-plywood-4x8
/products/supporting-boards/basswood-plywood-furniture-grade
/products/supporting-boards/particle-board-furniture-grade

2. commercial-plywood-bb-grade-4x8 uses CommercialPlywoodDetailTemplate.
3. 15mm-cherry-veneer-commercial-plywood-4x8 uses CommercialPlywoodDetailTemplate.
4. basswood-plywood-furniture-grade uses BasswoodPlywoodDetailTemplate.
5. particle-board-furniture-grade uses ParticleBoardDetailTemplate.
6. generateStaticParams includes all 4 slugs.
7. generateMetadata uses seoTitle and metaDescription.
8. If slug does not exist, use notFound().

Do not create:

/products/commercial-plywood/...
/products/basswood-plywood/...
/products/particle-board/...

Only use the existing Supporting Boards URL structure.

==================================================
4. Page Sync
==================================================

Sync:

1. /products/supporting-boards
- If it has a product grid, show these 4 products as official products.
- Do not display placeholder text for these products.

2. /products
- If Products main page reads supportingBoardsProducts, make sure these products show as official products.
- Do not duplicate products.

3. Related Products
- Supporting Boards products can show other Supporting Boards products.
- Do not show Natural Wood Veneer products as related products for these pages.

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
5. Final Check
==================================================

Run:

npm run build

Output:

1. Which files were changed
2. Whether only these 4 Supporting Boards products were updated/added
3. Whether existing placeholder URLs were preserved
4. Image folder for each product
5. featuredImage path for each product
6. gallery image count for each product
7. Whether all 4 URLs can generate
8. Whether each product uses the correct Supporting Boards detail template
9. Whether there is any broken image risk
10. Whether npm run build passed

Do not run git add .
Wait for confirmation before white-list commit.
```

## 5. SEO Product Titles

| Slug | SEO Title |
|---|---|
| commercial-plywood-bb-grade-4x8 | 18mm Commercial Plywood \| EV Eucalyptus Furniture Panel \| China Plywood Supplier |
| 15mm-cherry-veneer-commercial-plywood-4x8 | 15mm Cherry Veneer Plywood 4x8 \| Commercial Furniture Board \| China Plywood Supplier |
| basswood-plywood-furniture-grade | 3mm Basswood Plywood Sheets 4x8 \| Laser Cutting Panel \| China Plywood Supplier |
| particle-board-furniture-grade | Particle Board Sheet \| Furniture Grade Cabinet Panel \| China Particle Board Supplier |

## 6. Keyword Notes

Use natural, buyer-intent keywords such as:

- Commercial Plywood
- 18mm Commercial Plywood
- Cherry Veneer Plywood
- Plywood 4x8
- Furniture Plywood
- Basswood Plywood
- 3mm Basswood Plywood
- Laser Cutting Plywood
- Particle Board Sheet
- Furniture Grade Particle Board
- Cabinet Particle Board
- China Plywood Supplier
- China Particle Board Supplier

Avoid:
- false certification claims
- unverified marine plywood claims
- waterproof claims where not supported
- PVC / plastic keywords
