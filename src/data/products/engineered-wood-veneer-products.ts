/**
 * Engineered Wood Veneer Products Data
 *
 * This file contains product data for the Engineered Wood Veneer category.
 * 34 products from engineered_wood_veneer_34_products_data_title_format.json
 */

export interface EngineeredWoodVeneerProduct {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  code: string;
  category: string;
  shortDesc: string;
  tags: string[];
  specs: {
    productType: string;
    pattern: string;
    grainStyle: string;
    colorTone: string;
    veneerThickness: string;
    sheetSize: string;
    backing: string;
    moq: string;
    leadTime: string;
    packaging: string;
    application: string;
  };
  imageAlt: string;
  featuredImage: string;
  gallery: string[];
  overview: string;
  faqs: { q: string; a: string }[];
  relatedProducts: { name: string; href: string }[];
  featured?: boolean;
  updatedAt?: string;
}

export const engineeredWoodVeneerFaqs = [
  {
    q: "What payment terms do you accept?",
    a: "Payment terms: TT in advance (30% of deposit before production and 70% balance before shipment), bank transfer, LC etc. Please note we do EXW/FOB/CNF/CIF/DDU/DDP.",
  },
  {
    q: "What is the average lead time?",
    a: "It depends on the product type and order quantity. Usually we can ship within 7 days for normal orders after receiving full payment. But for large orders, we need about 15 to 20 days.",
  },
  {
    q: "Can you supply the relevant documentation?",
    a: "Yes, we can provide most documentation including Certificate of Origin, Phytosanitary Certificate, Bill of Lading, Commercial Invoice, Packing List, etc.",
  },
  {
    q: "What is your main customer group?",
    a: "Our main customers are fancy plywood wholesalers, furniture factories, door factories, whole-house customization factories, cabinet production enterprises, hotel construction and decoration / real estate decoration, and so on.",
  },
  {
    q: "How can we make a deal easily if I have a specific sample in hand?",
    a: "You send us your sample abroad and tell us your specific requirements. Then we produce a relevant sample according to yours with quotation. And then we send you our sample to your country for your reference and confirmation.",
  },
] as const;

const defaultSpecs = {
  productType: "Engineered Wood Veneer",
  pattern: "Custom",
  grainStyle: "Straight Grain / Wavy Grain",
  colorTone: "Light / Medium / Dark",
  veneerThickness: "Mainly 0.4mm-0.45mm",
  sheetSize: "2450x1270mm / Custom",
  backing: "Loose / Fleece Backed / Paper Backed",
  moq: "200 sheets",
  leadTime: "10-20 days",
  packaging: "Paper interleaving + wooden pallet",
  application: "Furniture, Doors, Cabinets, Wall Panels, Interior Decoration, Commercial Projects",
} as const;

function buildImagePaths(slug: string, imageCount: number): { featuredImage: string; gallery: string[] } {
  const ext = ".png";
  const featuredImage = `/images/products/engineered-wood-veneer/${slug}/image-01${ext}`;
  const gallery: string[] = [];
  for (let i = 1; i <= imageCount; i++) {
    gallery.push(`/images/products/engineered-wood-veneer/${slug}/image-0${i}${ext}`);
  }
  return { featuredImage, gallery };
}

function createProduct(
  data: {
    slug: string;
    productName: string;
    seoTitle: string;
    metaDescription: string;
    shortDescription: string;
    tags: string[];
    imageAlt: string;
    imageCount: number;
    englishFeatureName: string;
    code: string;
    featured?: boolean;
  }
): EngineeredWoodVeneerProduct {
  const { featuredImage, gallery } = buildImagePaths(data.slug, data.imageCount);

  return {
    slug: data.slug,
    name: data.productName,
    seoTitle: data.seoTitle,
    metaDescription: data.metaDescription,
    code: data.code,
    category: "Engineered Wood Veneer",
    shortDesc: data.shortDescription,
    tags: data.tags,
    specs: {
      ...defaultSpecs,
      pattern: data.englishFeatureName,
    },
    imageAlt: data.imageAlt,
    featuredImage,
    gallery,
    overview: `${data.productName} with ${data.englishFeatureName} pattern, supplied by Tongli Timber for overseas furniture manufacturers, door factories, cabinet producers and interior panel buyers who need stable veneer quality, consistent patterns, and reliable supply. Batch-to-batch consistency ideal for large-scale production.`,
    faqs: [...engineeredWoodVeneerFaqs],
    relatedProducts: [],
    featured: data.featured ?? false,
    updatedAt: "2026-06-14",
  };
}

export const engineeredWoodVeneerProducts: EngineeredWoodVeneerProduct[] = [
  createProduct({
    slug: "3d-sawtooth-texture-engineered-wood-veneer",
    productName: "Recon Wood Face Veneer Sheets | 3D Sawtooth | China Wood Veneer Suppliers",
    seoTitle: "Recon Wood Face Veneer Sheets | 3D Sawtooth | China Wood Veneer Suppliers",
    metaDescription: "3D Sawtooth recon wood face veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "3D Sawtooth recon wood face veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Recon Wood Face Veneer", "3D Sawtooth Veneer", "Recon Veneer Texture", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer"],
    imageAlt: "3D Sawtooth recon wood face veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "3D Sawtooth",
    code: "EWV-001",
    featured: true,
  }),
  createProduct({
    slug: "cloud-maple-reconstituted-wood-veneer",
    productName: "Reconstituted Maple Veneer Sheets | Cloud Maple | Reconstituted Veneer Suppliers",
    seoTitle: "Reconstituted Maple Veneer Sheets | Cloud Maple | Reconstituted Veneer Suppliers",
    metaDescription: "Cloud Maple reconstituted maple veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Cloud Maple reconstituted maple veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Reconstituted Maple Veneer", "Maple Recon Veneer", "Recon Veneer Sheet", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Cloud Maple Veneer"],
    imageAlt: "Cloud Maple reconstituted maple veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Cloud Maple",
    code: "EWV-002",
    featured: true,
  }),
  createProduct({
    slug: "mountain-elm-engineered-wood-veneer",
    productName: "Engineered Wood Veneer Sheets | Mountain Elm | Engineered Veneer Factory",
    seoTitle: "Engineered Wood Veneer Sheets | Mountain Elm | Engineered Veneer Factory",
    metaDescription: "Mountain Elm engineered wood veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Mountain Elm engineered wood veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Engineered Wood Veneer", "Recon Wood Veneer", "Recon Veneer Finish", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Mountain Elm Veneer"],
    imageAlt: "Mountain Elm engineered wood veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Mountain Elm",
    code: "EWV-003",
    featured: true,
  }),
  createProduct({
    slug: "gemini-wood-983n-recon-wood-veneer",
    productName: "Recon Wood Veneer Sheets | Gemini Wood 983N | Recon Veneer China",
    seoTitle: "Recon Wood Veneer Sheets | Gemini Wood 983N | Recon Veneer China",
    metaDescription: "Gemini Wood 983N recon wood veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Gemini Wood 983N recon wood veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Recon Wood Veneer", "Recon Veneer Sheet", "Engineered Veneer China", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Gemini Wood 983N Veneer"],
    imageAlt: "Gemini Wood 983N recon wood veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Gemini Wood 983N",
    code: "EWV-004",
    featured: true,
  }),
  createProduct({
    slug: "earth-tone-engineered-reconstituted-veneer",
    productName: "Engineered Reconstituted Veneer Sheets | Earth Tone | Engineered Veneer Factory",
    seoTitle: "Engineered Reconstituted Veneer Sheets | Earth Tone | Engineered Veneer Factory",
    metaDescription: "Earth Tone engineered reconstituted veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Earth Tone engineered reconstituted veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Engineered Reconstituted Veneer", "Recon Veneer Texture", "Reconstituted Veneer Sheets", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Earth Tone Veneer"],
    imageAlt: "Earth Tone engineered reconstituted veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Earth Tone",
    code: "EWV-005",
    featured: false,
  }),
  createProduct({
    slug: "dyed-walnut-1482n-recon-veneer",
    productName: "Recon Walnut Veneer Sheets | Dyed Walnut 1482N | Recon Veneer Suppliers",
    seoTitle: "Recon Walnut Veneer Sheets | Dyed Walnut 1482N | Recon Veneer Suppliers",
    metaDescription: "Dyed Walnut 1482N recon walnut veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Dyed Walnut 1482N recon walnut veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Recon Walnut Veneer", "Walnut Recon Veneer", "Dyed Recon Veneer", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Dyed Walnut 1482N Veneer"],
    imageAlt: "Dyed Walnut 1482N recon walnut veneer sheets texture and finish",
    imageCount: 6,
    englishFeatureName: "Dyed Walnut 1482N",
    code: "EWV-006",
    featured: false,
  }),
  createProduct({
    slug: "van-gogh-pattern-7222-engineered-veneer",
    productName: "Engineered Wood Veneer Sheets | Van Gogh Pattern 7222 | China Wood Veneer Suppliers",
    seoTitle: "Engineered Wood Veneer Sheets | Van Gogh Pattern 7222 | China Wood Veneer Suppliers",
    metaDescription: "Van Gogh Pattern 7222 engineered wood veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels.",
    shortDescription: "Van Gogh Pattern 7222 engineered wood veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Engineered Wood Veneer", "Recon Veneer Texture", "Decorative Recon Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Van Gogh Pattern 7222 Veneer"],
    imageAlt: "Van Gogh Pattern 7222 engineered wood veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Van Gogh Pattern 7222",
    code: "EWV-007",
    featured: false,
  }),
  createProduct({
    slug: "oak-3436-reconstituted-wood-veneer",
    productName: "Reconstituted Oak Veneer Sheets | Oak 3436 | Reconstituted Veneer Suppliers",
    seoTitle: "Reconstituted Oak Veneer Sheets | Oak 3436 | Reconstituted Veneer Suppliers",
    metaDescription: "Oak 3436 reconstituted oak veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Oak 3436 reconstituted oak veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Reconstituted Oak Veneer", "Oak Recon Veneer", "Recon Veneer Oak", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Oak 3436 Veneer"],
    imageAlt: "Oak 3436 reconstituted oak veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Oak 3436",
    code: "EWV-008",
    featured: false,
  }),
  createProduct({
    slug: "oak-7411-recon-veneer",
    productName: "Recon Veneer Oak Sheets | Oak 7411 | Recon Veneer China",
    seoTitle: "Recon Veneer Oak Sheets | Oak 7411 | Recon Veneer China",
    metaDescription: "Oak 7411 recon veneer oak sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and commercial interiors.",
    shortDescription: "Oak 7411 recon veneer oak sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Recon Veneer Oak", "Oak Recon Veneer", "Reconstituted Oak Veneer", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Oak 7411 Veneer"],
    imageAlt: "Oak 7411 recon veneer oak sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Oak 7411",
    code: "EWV-009",
    featured: false,
  }),
  createProduct({
    slug: "oak-7462-engineered-wood-veneer",
    productName: "Engineered Wood Veneer Sheets | Oak 7462 | Engineered Veneer Factory",
    seoTitle: "Engineered Wood Veneer Sheets | Oak 7462 | Engineered Veneer Factory",
    metaDescription: "Oak 7462 engineered wood veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and commercial.",
    shortDescription: "Oak 7462 engineered wood veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Engineered Wood Veneer", "Recon Veneer Oak", "Oak Recon Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Oak 7462 Veneer"],
    imageAlt: "Oak 7462 engineered wood veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Oak 7462",
    code: "EWV-010",
    featured: false,
  }),
  createProduct({
    slug: "european-walnut-3235-recon-wood-veneer",
    productName: "Walnut Recon Veneer Sheets | European Walnut 3235 | Recon Veneer Suppliers",
    seoTitle: "Walnut Recon Veneer Sheets | European Walnut 3235 | Recon Veneer Suppliers",
    metaDescription: "European Walnut 3235 walnut recon veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "European Walnut 3235 walnut recon veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Walnut Recon Veneer", "Recon Walnut Veneer", "Recon Wood Veneer", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "European Walnut 3235 Veneer"],
    imageAlt: "European Walnut 3235 walnut recon veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "European Walnut 3235",
    code: "EWV-011",
    featured: false,
  }),
  createProduct({
    slug: "washed-oak-7355-c-reconstituted-veneer",
    productName: "Bleached Reconstituted Veneer Oak Sheets | Washed Oak 7355-C | China Wood Veneer Suppliers",
    seoTitle: "Bleached Reconstituted Veneer Oak Sheets | Washed Oak 7355-C | China Wood Veneer Suppliers",
    metaDescription: "Washed Oak 7355-C bleached reconstituted veneer oak sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall.",
    shortDescription: "Washed Oak 7355-C bleached reconstituted veneer oak sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Bleached Reconstituted Veneer Oak", "White Oak Recon Veneer", "Reconstituted Oak Veneer", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Washed Oak 7355-C Veneer"],
    imageAlt: "Washed Oak 7355-C bleached reconstituted veneer oak sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Washed Oak 7355-C",
    code: "EWV-012",
    featured: false,
  }),
  createProduct({
    slug: "washed-rosewood-7358-engineered-veneer",
    productName: "Reconstituted Rosewood Veneer Sheets | Washed Rosewood 7358 | Reconstituted Veneer Suppliers",
    seoTitle: "Reconstituted Rosewood Veneer Sheets | Washed Rosewood 7358 | Reconstituted Veneer Suppliers",
    metaDescription: "Washed Rosewood 7358 reconstituted rosewood veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall.",
    shortDescription: "Washed Rosewood 7358 reconstituted rosewood veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Reconstituted Rosewood Veneer", "Recon Wood Veneer", "Engineered Veneer Sheet", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Washed Rosewood 7358 Veneer"],
    imageAlt: "Washed Rosewood 7358 reconstituted rosewood veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Washed Rosewood 7358",
    code: "EWV-013",
    featured: false,
  }),
  createProduct({
    slug: "washed-rosewood-7442-recon-veneer",
    productName: "Recon Wood Veneer Sheets | Washed Rosewood 7442 | Recon Veneer China",
    seoTitle: "Recon Wood Veneer Sheets | Washed Rosewood 7442 | Recon Veneer China",
    metaDescription: "Washed Rosewood 7442 recon wood veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Washed Rosewood 7442 recon wood veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Recon Wood Veneer", "Reconstituted Rosewood Veneer", "Recon Veneer Finish", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Washed Rosewood 7442 Veneer"],
    imageAlt: "Washed Rosewood 7442 recon wood veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Washed Rosewood 7442",
    code: "EWV-014",
    featured: false,
  }),
  createProduct({
    slug: "lagoon-garden-engineered-reconstituted-veneer",
    productName: "Engineered Reconstituted Veneer Sheets | Lagoon Garden | Engineered Veneer China",
    seoTitle: "Engineered Reconstituted Veneer Sheets | Lagoon Garden | Engineered Veneer China",
    metaDescription: "Lagoon Garden engineered reconstituted veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels.",
    shortDescription: "Lagoon Garden engineered reconstituted veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Engineered Reconstituted Veneer", "Recon Veneer Texture", "Reconstituted Veneer Sheets", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Lagoon Garden Veneer"],
    imageAlt: "Lagoon Garden engineered reconstituted veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Lagoon Garden",
    code: "EWV-015",
    featured: false,
  }),
  createProduct({
    slug: "gray-arrow-grain-3998-recon-veneer",
    productName: "Recon Veneer Texture Sheets | Gray Arrow Grain 3998 | Recon Veneer Suppliers",
    seoTitle: "Recon Veneer Texture Sheets | Gray Arrow Grain 3998 | Recon Veneer Suppliers",
    metaDescription: "Gray Arrow Grain 3998 recon veneer texture sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Gray Arrow Grain 3998 recon veneer texture sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Recon Veneer Texture", "Recon Veneer Finish", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Gray Arrow Grain 3998 Veneer"],
    imageAlt: "Gray Arrow Grain 3998 recon veneer texture sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Gray Arrow Grain 3998",
    code: "EWV-016",
    featured: false,
  }),
  createProduct({
    slug: "smoked-oak-7216-reconstituted-wood-veneer",
    productName: "Reconstituted Oak Veneer Sheets | Smoked Oak 7216 | Reconstituted Veneer Suppliers",
    seoTitle: "Reconstituted Oak Veneer Sheets | Smoked Oak 7216 | Reconstituted Veneer Suppliers",
    metaDescription: "Smoked Oak 7216 reconstituted oak veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Smoked Oak 7216 reconstituted oak veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Reconstituted Oak Veneer", "Recon Veneer Oak", "Oak Recon Veneer", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Smoked Oak 7216 Veneer"],
    imageAlt: "Smoked Oak 7216 reconstituted oak veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Smoked Oak 7216",
    code: "EWV-017",
    featured: false,
  }),
  createProduct({
    slug: "walnut-3356-recon-veneer",
    productName: "Walnut Recon Veneer Sheets | Walnut 3356 | China Wood Veneer Suppliers",
    seoTitle: "Walnut Recon Veneer Sheets | Walnut 3356 | China Wood Veneer Suppliers",
    metaDescription: "Walnut 3356 walnut recon veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and commercial.",
    shortDescription: "Walnut 3356 walnut recon veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Walnut Recon Veneer", "Recon Walnut Veneer", "Recon Wood Veneer", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Walnut 3356 Veneer"],
    imageAlt: "Walnut 3356 walnut recon veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Walnut 3356",
    code: "EWV-018",
    featured: false,
  }),
  createProduct({
    slug: "walnut-3356c-reconstituted-veneer",
    productName: "Reconstituted Walnut Veneer Sheets | Walnut 3356C | Reconstituted Veneer Suppliers",
    seoTitle: "Reconstituted Walnut Veneer Sheets | Walnut 3356C | Reconstituted Veneer Suppliers",
    metaDescription: "Walnut 3356C reconstituted walnut veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Walnut 3356C reconstituted walnut veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Recon Walnut Veneer", "Walnut Recon Veneer", "Reconstituted Veneer Sheets", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Reconstituted Walnut Veneer", "Walnut 3356C Veneer"],
    imageAlt: "Walnut 3356C reconstituted walnut veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Walnut 3356C",
    code: "EWV-019",
    featured: false,
  }),
  createProduct({
    slug: "walnut-k6372c-engineered-wood-veneer",
    productName: "Recon Walnut Veneer Sheets | Walnut K6372C | Recon Veneer China",
    seoTitle: "Recon Walnut Veneer Sheets | Walnut K6372C | Recon Veneer China",
    metaDescription: "Walnut K6372C recon walnut veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Walnut K6372C recon walnut veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Recon Walnut Veneer", "Walnut Recon Veneer", "Recon Veneer Sheet", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Walnut K6372C Veneer"],
    imageAlt: "Walnut K6372C recon walnut veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Walnut K6372C",
    code: "EWV-020",
    featured: false,
  }),
  createProduct({
    slug: "brown-arrow-grain-3996-recon-veneer",
    productName: "Recon Veneer Texture Sheets | Brown Arrow Grain 3996 | Recon Veneer Suppliers",
    seoTitle: "Recon Veneer Texture Sheets | Brown Arrow Grain 3996 | Recon Veneer Suppliers",
    metaDescription: "Brown Arrow Grain 3996 recon veneer texture sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Brown Arrow Grain 3996 recon veneer texture sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Recon Veneer Texture", "Recon Veneer Finish", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Brown Arrow Grain 3996 Veneer"],
    imageAlt: "Brown Arrow Grain 3996 recon veneer texture sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Brown Arrow Grain 3996",
    code: "EWV-021",
    featured: false,
  }),
  createProduct({
    slug: "golden-silk-ash-k6353-reconstituted-veneer",
    productName: "Reconstituted Ash Veneer Sheets | Golden Silk Ash K6353 | Reconstituted Veneer Suppliers",
    seoTitle: "Reconstituted Ash Veneer Sheets | Golden Silk Ash K6353 | Reconstituted Veneer Suppliers",
    metaDescription: "Golden Silk Ash K6353 reconstituted ash veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels.",
    shortDescription: "Golden Silk Ash K6353 reconstituted ash veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Reconstituted Ash Veneer", "Recon Ash Veneer", "Engineered Wood Veneer Sheets", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Golden Silk Ash K6353 Veneer"],
    imageAlt: "Golden Silk Ash K6353 reconstituted ash veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Golden Silk Ash K6353",
    code: "EWV-022",
    featured: false,
  }),
  createProduct({
    slug: "golden-teak-k6001-recon-veneer",
    productName: "Recon Teak Veneer Sheets | Golden Teak K6001 | Recon Veneer China",
    seoTitle: "Recon Teak Veneer Sheets | Golden Teak K6001 | Recon Veneer China",
    metaDescription: "Golden Teak K6001 recon teak veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Golden Teak K6001 recon teak veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Recon Teak Veneer", "Reconstituted Teak Veneer", "Recon Wood Veneer", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Golden Teak K6001 Veneer"],
    imageAlt: "Golden Teak K6001 recon teak veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Golden Teak K6001",
    code: "EWV-023",
    featured: false,
  }),
  createProduct({
    slug: "silver-silk-wood-3402-engineered-veneer",
    productName: "Engineered Wood Veneer Sheets | Silver Silk Wood 3402 | Engineered Veneer Factory",
    seoTitle: "Engineered Wood Veneer Sheets | Silver Silk Wood 3402 | Engineered Veneer Factory",
    metaDescription: "Silver Silk Wood 3402 engineered wood veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels.",
    shortDescription: "Silver Silk Wood 3402 engineered wood veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Engineered Wood Veneer Sheets", "Recon Wood Veneer", "Recon Veneer Finish", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Silver Silk Wood 3402 Veneer"],
    imageAlt: "Silver Silk Wood 3402 engineered wood veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Silver Silk Wood 3402",
    code: "EWV-024",
    featured: false,
  }),
  createProduct({
    slug: "silver-silk-ash-3643-recon-veneer",
    productName: "Recon Ash Veneer Sheets | Silver Silk Ash 3643 | Recon Veneer Suppliers",
    seoTitle: "Recon Ash Veneer Sheets | Silver Silk Ash 3643 | Recon Veneer Suppliers",
    metaDescription: "Silver Silk Ash 3643 recon ash veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Silver Silk Ash 3643 recon ash veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Recon Ash Veneer", "Reconstituted Ash Veneer", "Recon Face Veneer", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Silver Silk Ash 3643 Veneer"],
    imageAlt: "Silver Silk Ash 3643 recon ash veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Silver Silk Ash 3643",
    code: "EWV-025",
    featured: false,
  }),
  createProduct({
    slug: "silver-silk-ash-3645-reconstituted-veneer",
    productName: "Reconstituted Ash Veneer Sheets | Silver Silk Ash 3645 | Reconstituted Veneer Suppliers",
    seoTitle: "Reconstituted Ash Veneer Sheets | Silver Silk Ash 3645 | Reconstituted Veneer Suppliers",
    metaDescription: "Silver Silk Ash 3645 reconstituted ash veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels.",
    shortDescription: "Silver Silk Ash 3645 reconstituted ash veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Reconstituted Ash Veneer", "Recon Ash Veneer", "Engineered Wood Veneer Sheets", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Silver Silk Ash 3645 Veneer"],
    imageAlt: "Silver Silk Ash 3645 reconstituted ash veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Silver Silk Ash 3645",
    code: "EWV-026",
    featured: false,
  }),
  createProduct({
    slug: "silver-silk-ash-6307-engineered-wood-veneer",
    productName: "Engineered Wood Veneer Sheets | Silver Silk Ash 6307 | Engineered Veneer China",
    seoTitle: "Engineered Wood Veneer Sheets | Silver Silk Ash 6307 | Engineered Veneer China",
    metaDescription: "Silver Silk Ash 6307 engineered wood veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Silver Silk Ash 6307 engineered wood veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Engineered Wood Veneer Sheets", "Recon Ash Veneer", "Reconstituted Ash Veneer", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Silver Silk Ash 6307 Veneer"],
    imageAlt: "Silver Silk Ash 6307 engineered wood veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Silver Silk Ash 6307",
    code: "EWV-027",
    featured: false,
  }),
  createProduct({
    slug: "silver-silk-ash-6334-recon-face-veneer",
    productName: "Recon Face Veneer Sheets | Silver Silk Ash 6334 | Recon Veneer China",
    seoTitle: "Recon Face Veneer Sheets | Silver Silk Ash 6334 | Recon Veneer China",
    metaDescription: "Silver Silk Ash 6334 recon face veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Silver Silk Ash 6334 recon face veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Recon Face Veneer", "White Recon Face Veneer", "Recon Ash Veneer", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Silver Silk Ash 6334 Veneer"],
    imageAlt: "Silver Silk Ash 6334 recon face veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Silver Silk Ash 6334",
    code: "EWV-028",
    featured: false,
  }),
  createProduct({
    slug: "silver-pearwood-3113-engineered-veneer",
    productName: "Engineered Wood Veneer Sheets | Silver Pearwood 3113 | China Wood Veneer Suppliers",
    seoTitle: "Engineered Wood Veneer Sheets | Silver Pearwood 3113 | China Wood Veneer Suppliers",
    metaDescription: "Silver Pearwood 3113 engineered wood veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Silver Pearwood 3113 engineered wood veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Engineered Wood Veneer Sheets", "Recon Wood Veneer", "Recon Veneer Finish", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Silver Pearwood 3113 Veneer"],
    imageAlt: "Silver Pearwood 3113 engineered wood veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Silver Pearwood 3113",
    code: "EWV-029",
    featured: false,
  }),
  createProduct({
    slug: "silver-sandalwood-3269-recon-veneer",
    productName: "Recon Wood Veneer Sheets | Silver Sandalwood 3269 | Recon Veneer Suppliers",
    seoTitle: "Recon Wood Veneer Sheets | Silver Sandalwood 3269 | Recon Veneer Suppliers",
    metaDescription: "Silver Sandalwood 3269 recon wood veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and.",
    shortDescription: "Silver Sandalwood 3269 recon wood veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Recon Wood Veneer", "Engineered Veneer Sheet", "Recon Veneer Finish", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Silver Sandalwood 3269 Veneer"],
    imageAlt: "Silver Sandalwood 3269 recon wood veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Silver Sandalwood 3269",
    code: "EWV-030",
    featured: false,
  }),
  createProduct({
    slug: "custom-gold-ring-pattern-engineered-wood-veneer",
    productName: "Engineered Burl Wood Veneer Sheets | Custom Gold Ring Pattern | Engineered Veneer Factory",
    seoTitle: "Engineered Burl Wood Veneer Sheets | Custom Gold Ring Pattern | Engineered Veneer Factory",
    metaDescription: "Custom Gold Ring Pattern engineered burl wood veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall.",
    shortDescription: "Custom Gold Ring Pattern engineered burl wood veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Engineered Burl Wood Veneer", "Recon Burl Veneer", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Custom Gold Ring Pattern Veneer"],
    imageAlt: "Custom Gold Ring Pattern engineered burl wood veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Custom Gold Ring Pattern",
    code: "EWV-031",
    featured: false,
  }),
  createProduct({
    slug: "custom-silver-ring-pattern-recon-veneer",
    productName: "Recon Burl Veneer Sheets | Custom Silver Ring Pattern | Recon Veneer Suppliers",
    seoTitle: "Recon Burl Veneer Sheets | Custom Silver Ring Pattern | Recon Veneer Suppliers",
    metaDescription: "Custom Silver Ring Pattern recon burl veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels.",
    shortDescription: "Custom Silver Ring Pattern recon burl veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Recon Burl Veneer", "Engineered Burl Veneer", "Recon Wood Veneer", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Custom Silver Ring Pattern Veneer"],
    imageAlt: "Custom Silver Ring Pattern recon burl veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Custom Silver Ring Pattern",
    code: "EWV-032",
    featured: false,
  }),
  createProduct({
    slug: "yellow-salang-3308-reconstituted-veneer",
    productName: "Reconstituted Timber Veneer Sheets | Yellow Salang 3308 | Reconstituted Veneer Suppliers",
    seoTitle: "Reconstituted Timber Veneer Sheets | Yellow Salang 3308 | Reconstituted Veneer Suppliers",
    metaDescription: "Yellow Salang 3308 reconstituted timber veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels.",
    shortDescription: "Yellow Salang 3308 reconstituted timber veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Reconstituted Timber Veneer", "Recon Wood Veneer", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Yellow Salang 3308 Veneer"],
    imageAlt: "Yellow Salang 3308 reconstituted timber veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Yellow Salang 3308",
    code: "EWV-033",
    featured: false,
  }),
  createProduct({
    slug: "ebony-3810-engineered-wood-veneer",
    productName: "Recon Ebony Veneer Sheets | Ebony 3810 | Recon Veneer China",
    seoTitle: "Recon Ebony Veneer Sheets | Ebony 3810 | Recon Veneer China",
    metaDescription: "Ebony 3810 recon ebony veneer sheets with consistent engineered grain and decorative recon veneer finish for furniture, doors, wall panels and commercial.",
    shortDescription: "Ebony 3810 recon ebony veneer sheets for furniture, door, cabinet and interior surface applications.",
    tags: ["Recon Ebony Veneer", "Engineered Ebony Veneer", "Reconstituted Ebony Veneer", "Engineered Wood Veneer", "Reconstituted Veneer", "Recon Veneer", "Reconstituted Wood Veneer", "Ebony 3810 Veneer"],
    imageAlt: "Ebony 3810 recon ebony veneer sheets texture and finish",
    imageCount: 7,
    englishFeatureName: "Ebony 3810",
    code: "EWV-034",
    featured: false,
  }),
];

export function getProductBySlug(slug: string): EngineeredWoodVeneerProduct | undefined {
  return engineeredWoodVeneerProducts.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): EngineeredWoodVeneerProduct[] {
  return engineeredWoodVeneerProducts.filter((p) => p.featured);
}

export function getAllProductSlugs(): string[] {
  return engineeredWoodVeneerProducts.map((p) => p.slug);
}
