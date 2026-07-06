# Melamine Board Collection Category Mapping Guide

## Goal

Optimize `/collections/melamine-board` as a clean collection gallery page using visual category filters.

The user has placed all melamine board collection images in:

`public/images/collections/melamine-board`

Use the provided mapping files:

- `docs/import/melamine_board_collection_category_mapping.json`
- `docs/import/melamine_board_collection_category_mapping.csv`

## Category Summary

Total images: 275

- All: 275
- Light Wood: 62
- Warm Wood: 60
- Dark Wood: 92
- Grey Wood: 26
- Fabric / Solid: 26
- Stone / Marble: 9

## Filter Buttons

Use these category buttons:

1. All
2. Light Wood
3. Warm Wood
4. Dark Wood
5. Grey Wood
6. Fabric / Solid
7. Stone / Marble

## Display Rules

Each card should show only:

1. Image
2. Original model code, for example `B003`, `TLC-AGKSL`, `C1157`
3. Category label

Do not use styleType.
Do not use displayName.
Do not rename model codes.
Do not show file extensions in card titles.

## Data Shape

Each item can use this shape:

```ts
type MelamineCollectionItem = {
  code: string;
  image: string;
  category:
    | "Light Wood"
    | "Warm Wood"
    | "Dark Wood"
    | "Grey Wood"
    | "Fabric / Solid"
    | "Stone / Marble";
};
```

## Important Notes

- These categories are visual browsing categories for customers.
- `Stone / Marble` means a stone-look or marble-look decorative melamine surface.
- `Fabric / Solid` includes fabric texture, plain color, and low-grain solid decorative surfaces.
- Do not describe these as real stone, real marble, real fabric, or natural wood.
- This is melamine decorative surface collection data, not product detail data.

## Required Checks

After implementation, verify:

1. All images in `public/images/collections/melamine-board` are matched by file basename.
2. Mapping items with missing images are reported.
3. Images without mapping are reported.
4. Filter counts match the summary above, unless the local image folder differs.
5. The page builds successfully with `npm run build`.
