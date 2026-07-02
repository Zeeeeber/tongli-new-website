# Engineered Wood Veneer Detail Page Template

## How to Create a New Engineered Wood Veneer Product Page

### Step 1: Create the page file

Create a new folder and `page.tsx` in `src/app/products/engineered-wood-veneer/`:

```
src/app/products/engineered-wood-veneer/your-product-slug/page.tsx
```

### Step 2: Copy the template code

```tsx
"use client";

import { EngineeredWoodVeneerDetailTemplate } from "@/components/product/EngineeredWoodVeneerDetailTemplate";

const product = {
  name: "Your Product Name",
  code: "TLE-XXX",
  category: "Engineered Wood Veneer",
  shortDesc: "Brief product description (1-2 sentences).",
  tags: ["Engineered Wood Veneer", "Species", "Pattern", "Grain Style"],
  specs: {
    productType: "Engineered Wood Veneer",
    pattern: "Pattern Name",
    grainStyle: "Straight Grain / Wavy Grain",
    colorTone: "Light / Medium / Dark",
    veneerThickness: "Mainly 0.4mm-0.45mm",
    sheetSize: "2450×1270mm / Custom",
    backing: "Loose / Fleece Backed / Paper Backed",
    moq: "200 sheets",
    leadTime: "10-20 days",
    packaging: "Paper interleaving + wooden pallet",
    application: "Furniture, Doors, Cabinets, Wall Panels, Interior Decoration, Commercial Projects",
  },
  overview: "Long product description paragraph.",
};

export default function YourProductPage() {
  return <EngineeredWoodVeneerDetailTemplate product={product} slug="your-product-slug" />;
}
```

### Step 3: Only change these 3 things

1. **`product.name`** - Product display name
2. **`product.shortDesc`** - Short description (1-2 sentences)
3. **`product.tags`** - Keywords for search and filtering

### Optional: Override Related Products

```tsx
<EngineeredWoodVeneerDetailTemplate
  product={product}
  slug="your-product-slug"
  relatedProducts={[
    {
      name: "Another Product",
      pattern: "Pattern Name",
      tone: "Light",
      href: "/products/engineered-wood-veneer/another-product",
      gradient: "from-[#C8A97E] to-[#A68B5E]",
    },
    // ... more products
  ]}
/>
```

## Product Data Fields Explained

| Field | Description | Example |
|-------|-------------|---------|
| `name` | Product display name | "Oak Classic Engineered Wood Veneer" |
| `code` | Unique product code | "TLE-001" |
| `category` | Product category (keep as "Engineered Wood Veneer") | "Engineered Wood Veneer" |
| `shortDesc` | 1-2 sentence description shown on the product hero | "Premium reconstituted oak veneer with consistent straight grain..." |
| `tags` | Keywords for search and filtering | ["Engineered Wood Veneer", "Oak Veneer", "Reconstituted Veneer"] |
| `specs` | Technical specifications | see table below |
| `overview` | Long description (optional) | multi-paragraph text |

## Specs Fields

| Field | Description |
|-------|-------------|
| `productType` | Always "Engineered Wood Veneer" |
| `pattern` | Pattern name (e.g., "Oak Classic", "Walnut Elite") |
| `grainStyle` | Straight Grain / Wavy Grain |
| `colorTone` | Light / Medium / Dark |
| `veneerThickness` | Mainly 0.4mm-0.45mm |
| `sheetSize` | 2450×1270mm / Custom |
| `backing` | Loose / Fleece Backed / Paper Backed |
| `moq` | 200 sheets |
| `leadTime` | 10-20 days |
| `packaging` | Paper interleaving + wooden pallet |
| `application` | Furniture, Doors, Cabinets, Wall Panels, etc. |

## Gradient Color Suggestions for Related Products

| Pattern | Gradient |
|---------|----------|
| Oak Classic | `from-[#C8A97E] to-[#A68B5E]` |
| Walnut Elite | `from-[#5C4033] to-[#3D2914]` |
| Oak Modern | `from-[#B88A5A] to-[#8F6842]` |
| Ash Contemporary | `from-[#D4C4A8] to-[#B8A88C]` |
| Maple Fresh | `from-[#F5E6D3] to-[#E8D5BE]` |
| Cherry Premium | `from-[#9B4722] to-[#7A3A1C]` |
| Ebony Dark | `from-[#2D2D2D] to-[#1A1A1A]` |
| Teak Natural | `from-[#C49A6C] to-[#A67B5B]` |

## Detail Page Sections

The Engineered WoodVeneerDetailTemplate includes these sections (in order):

1. **01. Product Hero** - Breadcrumb, product title, tags, contact CTA
2. **02. Product Gallery** - Main image gallery with thumbnails
3. **03. Product Specifications** - Key specs in card format (Pattern, Grain Style, Color Tone, Thickness, Size, Backing, MOQ, Lead Time)
4. **04. Banner** - "Engineered Wood Veneer Manufacturer" image section
5. **05. Real Shots** - "Engineered Wood Veneer Real Shots" image section
6. **06. Application** - "Engineered Wood Veneer Application" image section
7. **07. Company Profile** - About Tongli Timber section
8. **08. Customer Feedback** - Testimonials section
9. **09. Certifications** - Certifications section
10. **10. Packaging** - Packaging options section
11. **11. Detailed Specifications** - Full specification table
12. **12. Applications** - Application icons grid
13. **13. Quality & Packaging** - Quality control points
14. **14. FAQ** - Accordion FAQ section
15. **15. Related Products** - 4 related product cards

## Detail Page Images

Images are located in:

```
public/images/products/products_engineered wood veneer_detail page/
```

| File | Description |
|------|-------------|
| 1.Banner_engineered wood veneer manufacturer.jpg | Manufacturer banner |
| 2.engineered wood veneer real shots.jpg | Product real shots |
| 3.engineered wood veneer application.jpg | Application showcase |
| 5.engineered wood veneer_Company Profile.jpg | Company profile section |
| 6.engineered wood veneer_custom feedback.jpg | Customer feedback section |
| 7.engineered wood veneer_Certification.jpg | Certifications section |
| 8.engineered wood veneer packaging.jpg | Packaging options |

## File Structure

```
src/
  app/products/engineered-wood-veneer/
    oak-classic/page.tsx         ← existing example
    walnut-elite/page.tsx        ← copy this pattern
    oak-modern/page.tsx          ← copy this pattern
    ...
```

## Notes

- The template handles: breadcrumb, sidebar navigation, product gallery, tags, CTA buttons, FAQ, and all content sections.
- All static content sections (Banner, Real Shots, Application, etc.) use the same images and text for all engineered wood veneer products.
- Only the product-specific data (name, description, tags, pattern, grain style, color tone) needs to change per product.
- The template automatically generates related products based on shared tags and pattern/grain style matches.

## Detailed Specifications (Static Content)

The following fields are rendered statically in the detail page template (not from product data):

| Field | Value |
|-------|-------|
| Brand Name | Tongli |
| Product Name | Reconstituted Veneer, Engineered Veneer, Artificial Veneer, Man-Made Veneer, Composite Wood Veneer, Recon Wood Veneer, Recomposed Veneer, Synthetic Wood Veneer |
| Length | 2.5-3.2M |
| Width | Mainly 650mm |
| Thickness | Mainly 0.4mm-0.45mm |
| Usage | Interior Walls, Ceilings, Furniture, Cabinet Doors, Wardrobes, Doors, Partitions, Hotel Decoration, Office Decoration, Home Decoration, Background Walls, Display Shelves, Decorative Lines, Commercial Space Decoration, Villa Decoration, Shopping Mall Decoration |
| Kinds Of Export Packing | Palletized Packaging, Stretch Film Wrapping, Cardboard Box Packaging |
| Delivery Time | Normally About 5 To 7 Days, It Depends On Quantity And Requirement |
| Main Customer Group | Wholesalers, Furniture Factories, Door Factories, Whole-House Customization Factories, Cabinet Factories, Hotel Construction And Decoration Projects, Real Estate Decoration Projects |
| Payment Term | 30% by TT as deposit of order, 70% by TT before loading or 70% by irrevocable LC at sight |
