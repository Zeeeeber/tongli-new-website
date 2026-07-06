# 3D Wood Panels Collection Category Mapping Guide

## Goal

Sync the new 3D Wood Panels style images to:

`/collections/3d-wood-panels`

This collection page should work like the other collection pages:

1. Banner
2. Category filter buttons
3. Style image gallery
4. CTA section

For this task, only update the 3D Wood Panels collection style gallery and category filter logic.

## Source Images

The uploaded ZIP contains 32 images:

`1.jpg` to `32.jpg`

These images do not have product model names, so each style has been assigned a new Tongli model code:

`TL-3D-001` to `TL-3D-032`

## Destination Path

Use:

`public/images/collections/3d-wood-panels/`

Copy and rename images using the mapping JSON:

`1.jpg -> TL-3D-001.jpg`
`2.jpg -> TL-3D-002.jpg`
...
`32.jpg -> TL-3D-032.jpg`

Do not rename images in the original raw folder. Only copy/rename into the public destination folder.

## Frontend Display

Each card should display only:

- image
- code
- category

Example:

`TL-3D-001`
`Geometric / Grid`

Do not add styleType.
Do not add displayName.
Do not display descriptive pattern names.

## Filter Categories

Use these buttons:

- All
- Linear / Fluted
- Geometric / Grid
- Wave / Ripple
- Organic Carved

Expected counts:

- All: 32
- Linear / Fluted: 11
- Geometric / Grid: 10
- Wave / Ripple: 7
- Organic Carved: 4

## Mapping Files

Use:

- `docs/import/three_d_wood_panel_collection_category_mapping.json`
- `docs/import/three_d_wood_panel_collection_category_mapping.csv`

## Data Shape

Use this minimal data shape:

```ts
type ThreeDWoodPanelCollectionItem = {
  code: string;
  image: string;
  category: "Linear / Fluted" | "Geometric / Grid" | "Wave / Ripple" | "Organic Carved";
  alt: string;
};
```

Example:

```ts
{
  code: "TL-3D-001",
  image: "/images/collections/3d-wood-panels/TL-3D-001.jpg",
  category: "Geometric / Grid",
  alt: "TL-3D-001 3D wood panel decorative carved wall panel texture"
}
```

## Important Rules

- Do not modify Natural Wood Veneer collection.
- Do not modify Engineered Veneer collection.
- Do not modify Melamine Board collection.
- Do not modify product detail pages.
- Do not modify product data.
- Do not modify Header / Footer.
- Do not modify sitemap / robots.
- Do not add FAQ / Applications / Surface Guide.
- Do not add styleType.
- Do not add displayName.
- Cards must display the TL model code directly.
- These are visual collection styles, not individual product detail pages.

## Build

After changes, run:

`npm run build`

Output the filter counts and whether build passed.
