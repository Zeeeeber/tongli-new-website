# Natural Wood Veneer Detail Page Template

## How to Create a New Natural Wood Veneer Product Page

### Step 1: Create the page file

Create a new folder and `page.tsx` in `src/app/products/natural-wood-veneer/`:

```
src/app/products/natural-wood-veneer/your-product-slug/page.tsx
```

### Step 2: Copy the template code

```tsx
"use client";

import { NaturalWoodVeneerDetailTemplate } from "@/components/product/NaturalWoodVeneerDetailTemplate";

const product = {
  name: "Your Product Name",
  code: "NV-XXX-001",
  category: "Natural Wood Veneer",
  shortDesc: "Brief product description (1-2 sentences).",
  tags: ["Natural Wood Veneer", "Species", "Cut Type", "Grade"],
  specs: {
    productType: "Natural Wood Veneer",
    veneerSpecies: "Species Name (Latin)",
    cuttingMethod: "Plain Sawn / Rift Cut / Quarter Sawn",
    grainPattern: "Straight / Cathedral / etc",
    veneerThickness: "0.3mm - 0.6mm",
    sheetSize: "2500x640mm / Custom",
    moq: "100 sheets",
    leadTime: "10-20 days",
    packaging: "Paper interleaving + wooden crate",
    application: "Furniture, Cabinet Doors, Wall Panels, etc",
  },
  overview: "Long product description paragraph.",
};

export default function YourProductPage() {
  return <NaturalWoodVeneerDetailTemplate product={product} slug="your-product-slug" />;
}
```

### Step 3: Only change these 3 things

1. **`product.name`** - Product title
2. **`product.shortDesc`** - Short description
3. **`product.tags`** - Keywords

### Optional: Override Related Products

```tsx
<NaturalWoodVeneerDetailTemplate
  product={product}
  slug="your-product-slug"
  relatedProducts={[
    {
      name: "Another Product",
      code: "NV-XXX-02",
      species: "Oak",
      cut: "Plain Sawn",
      href: "/products/natural-wood-veneer/another-product",
      gradient: "from-[#D4B896] to-[#B8956A]",
    },
    // ... more products
  ]}
/>
```

## Product Data Fields Explained

| Field | Description | Example |
|-------|-------------|---------|
| `name` | Product display name | "Plain Sawn White Oak Natural Wood Veneer" |
| `code` | Unique product code | "NV-CCWO-001" |
| `category` | Product category (keep as "Natural Wood Veneer") | "Natural Wood Veneer" |
| `shortDesc` | 1-2 sentence description shown on the product hero | "Premium plain sawn white oak..." |
| `tags` | Keywords for search and filtering | ["Natural Wood Veneer", "Plain Sawn", "White Oak"] |
| `specs` | Technical specifications | see table below |
| `overview` | Long description (optional, not currently rendered in template) | multi-paragraph text |

## Specs Fields

| Field | Description |
|-------|-------------|
| `productType` | Always "Natural Wood Veneer" |
| `veneerSpecies` | Wood species with Latin name |
| `cuttingMethod` | Plain Sawn / Rift Cut / Quarter Sawn |
| `grainPattern` | Grain pattern description |
| `veneerThickness` | Thickness range |
| `sheetSize` | Available sizes |
| `moq` | Minimum order quantity |
| `leadTime` | Production lead time |
| `packaging` | Packaging method |
| `application` | Common applications |

## Gradient Color Suggestions for Related Products

| Species | Gradient |
|---------|----------|
| White Oak | `from-[#D4B896] to-[#B8956A]` |
| Black Walnut | `from-[#5C4033] to-[#3E2723]` |
| Teak | `from-[#C49A6C] to-[#A67B5B]` |
| Ash | `from-[#E8DCC8] to-[#D4C4A8]` |
| Cherry | `from-[#9B4722] to-[#7A3A1C]` |
| Maple | `from-[#F5E6D3] to-[#E8D5BE]` |
| Sapele | `from-[#C87941] to-[#A65D2E]` |
| Wenge | `from-[#3D2B1F] to-[#1F1410]` |
| Beech | `from-[#E8D4B8] to-[#D4C0A0]` |
| Eucalyptus | `from-[#C8A878] to-[#A89060]` |

## File Structure

```
src/
  app/products/natural-wood-veneer/
    rift-cut-white-oak/page.tsx   ← existing example
    plain-sawn-white-oak/page.tsx  ← copy this pattern
    quarter-sawn-oak/page.tsx      ← copy this pattern
    ...
```

## Notes

- The template handles: breadcrumb, sidebar navigation, product gallery, tags, CTA buttons, FAQ, and all 8 content sections.
- All static content sections (Banner, Real Shots, Application, etc.) use the same images and text for all natural wood veneer products.
- Only the product-specific data (name, description, tags) needs to change per product.
