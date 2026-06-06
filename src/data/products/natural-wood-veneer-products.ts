/**
 * Natural Wood Veneer Products Data
 *
 * This file contains product data for the Natural Wood Veneer category.
 * Data format is compatible with the current local-data transitional structure
 * and can be replaced by WordPress API data in the future.
 */

export interface NaturalWoodVeneerProduct {
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
    veneerSpecies: string;
    cuttingMethod: string;
    grainPattern: string;
    veneerThickness: string;
    sheetSize: string;
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

export interface RelatedProduct {
  name: string;
  code: string;
  species: string;
  cut: string;
  href: string;
  gradient: string;
}

export const naturalWoodVeneerFaqs = [
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

const defaultRelatedProducts = [
  { name: "Quarter Cut Maple Natural Wood Veneer Sheets", href: "/products/natural-wood-veneer/quarter-cut-maple-natural-wood-veneer-sheets" },
  { name: "Crown Cut Black Walnut Natural Wood Veneer Sheets", href: "/products/natural-wood-veneer/crown-cut-black-walnut-natural-wood-veneer-sheets" },
  { name: "Natural Teak Wood Veneer Sheets", href: "/products/natural-wood-veneer/natural-teak-wood-veneer-sheets" },
  { name: "Rift Cut White Oak Natural Wood Veneer Sheets", href: "/products/natural-wood-veneer/rift-cut-white-oak-natural-wood-veneer-sheets" },
] as const;

const defaultCategory = "Natural Wood Veneer";
const defaultSpecs = {
  productType: "Natural Wood Veneer",
  veneerThickness: "0.2mm - 0.6mm / Custom",
  sheetSize: "2500x640mm / Custom",
  moq: "100 sheets",
  leadTime: "10-20 days",
  packaging: "Paper interleaving + wooden crate",
  application: "Furniture, Doors, Cabinets, Wall Panels, Interior Decoration",
} as const;

function buildGallery(slug: string, count: number): string[] {
  return Array.from({ length: count }, (_, index) => `/images/products/natural-wood-veneer/${slug}/image-${String(index + 1).padStart(2, "0")}.jpg`);
}

function buildImageData(slug: string) {
  const imageMap: Record<string, { featuredImage: string; gallery: string[] }> = {
    "quarter-cut-maple-natural-wood-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/quarter-cut-maple-natural-wood-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/quarter-cut-maple-natural-wood-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/quarter-cut-maple-natural-wood-veneer-sheets/image-02.jpg",
        "/images/products/natural-wood-veneer/quarter-cut-maple-natural-wood-veneer-sheets/image-03.jpg",
        "/images/products/natural-wood-veneer/quarter-cut-maple-natural-wood-veneer-sheets/image-04.jpg",
        "/images/products/natural-wood-veneer/quarter-cut-maple-natural-wood-veneer-sheets/image-05.jpg",
        "/images/products/natural-wood-veneer/quarter-cut-maple-natural-wood-veneer-sheets/image-06.jpg",
        "/images/products/natural-wood-veneer/quarter-cut-maple-natural-wood-veneer-sheets/image-07.jpg",
      ],
    },
    "crown-cut-black-walnut-natural-wood-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/crown-cut-black-walnut-natural-wood-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/crown-cut-black-walnut-natural-wood-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/crown-cut-black-walnut-natural-wood-veneer-sheets/image-02.jpg",
        "/images/products/natural-wood-veneer/crown-cut-black-walnut-natural-wood-veneer-sheets/image-03.jpg",
        "/images/products/natural-wood-veneer/crown-cut-black-walnut-natural-wood-veneer-sheets/image-04.jpg",
        "/images/products/natural-wood-veneer/crown-cut-black-walnut-natural-wood-veneer-sheets/image-05.jpg",
        "/images/products/natural-wood-veneer/crown-cut-black-walnut-natural-wood-veneer-sheets/image-06.jpg",
      ],
    },
    "natural-teak-wood-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/natural-teak-wood-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/natural-teak-wood-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/natural-teak-wood-veneer-sheets/image-02.jpg",
        "/images/products/natural-wood-veneer/natural-teak-wood-veneer-sheets/image-03.jpg",
      ],
    },
    "black-walnut-burl-natural-wood-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/black-walnut-burl-natural-wood-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/black-walnut-burl-natural-wood-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/black-walnut-burl-natural-wood-veneer-sheets/image-02.jpg",
        "/images/products/natural-wood-veneer/black-walnut-burl-natural-wood-veneer-sheets/image-03.jpg",
        "/images/products/natural-wood-veneer/black-walnut-burl-natural-wood-veneer-sheets/image-04.jpg",
      ],
    },
    "quarter-sawn-american-black-walnut-natural-wood-veneer": {
      featuredImage: "/images/products/natural-wood-veneer/quarter-sawn-american-black-walnut-natural-wood-veneer/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/quarter-sawn-american-black-walnut-natural-wood-veneer/image-01.jpg",
        "/images/products/natural-wood-veneer/quarter-sawn-american-black-walnut-natural-wood-veneer/image-02.jpg",
        "/images/products/natural-wood-veneer/quarter-sawn-american-black-walnut-natural-wood-veneer/image-03.jpg",
        "/images/products/natural-wood-veneer/quarter-sawn-american-black-walnut-natural-wood-veneer/image-04.jpg",
        "/images/products/natural-wood-veneer/quarter-sawn-american-black-walnut-natural-wood-veneer/image-05.jpg",
        "/images/products/natural-wood-veneer/quarter-sawn-american-black-walnut-natural-wood-veneer/image-06.jpg",
        "/images/products/natural-wood-veneer/quarter-sawn-american-black-walnut-natural-wood-veneer/image-07.jpg",
      ],
    },
    "aaa-birds-eye-maple-natural-wood-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/aaa-birds-eye-maple-natural-wood-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/aaa-birds-eye-maple-natural-wood-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/aaa-birds-eye-maple-natural-wood-veneer-sheets/image-02.jpg",
        "/images/products/natural-wood-veneer/aaa-birds-eye-maple-natural-wood-veneer-sheets/image-03.jpg",
        "/images/products/natural-wood-veneer/aaa-birds-eye-maple-natural-wood-veneer-sheets/image-04.jpg",
        "/images/products/natural-wood-veneer/aaa-birds-eye-maple-natural-wood-veneer-sheets/image-05.jpg",
      ],
    },
    "dyed-natural-wood-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/dyed-natural-wood-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/dyed-natural-wood-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/dyed-natural-wood-veneer-sheets/image-02.jpg",
        "/images/products/natural-wood-veneer/dyed-natural-wood-veneer-sheets/image-03.jpg",
        "/images/products/natural-wood-veneer/dyed-natural-wood-veneer-sheets/image-04.jpg",
        "/images/products/natural-wood-veneer/dyed-natural-wood-veneer-sheets/image-05.jpg",
      ],
    },
    "quarter-cut-dark-walnut-natural-wood-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/quarter-cut-dark-walnut-natural-wood-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/quarter-cut-dark-walnut-natural-wood-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/quarter-cut-dark-walnut-natural-wood-veneer-sheets/image-02.jpg",
        "/images/products/natural-wood-veneer/quarter-cut-dark-walnut-natural-wood-veneer-sheets/image-03.jpg",
        "/images/products/natural-wood-veneer/quarter-cut-dark-walnut-natural-wood-veneer-sheets/image-04.jpg",
        "/images/products/natural-wood-veneer/quarter-cut-dark-walnut-natural-wood-veneer-sheets/image-05.jpg",
        "/images/products/natural-wood-veneer/quarter-cut-dark-walnut-natural-wood-veneer-sheets/image-06.jpg",
      ],
    },
    "crown-cut-flame-maple-natural-wood-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/crown-cut-flame-maple-natural-wood-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/crown-cut-flame-maple-natural-wood-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/crown-cut-flame-maple-natural-wood-veneer-sheets/image-02.jpg",
        "/images/products/natural-wood-veneer/crown-cut-flame-maple-natural-wood-veneer-sheets/image-03.jpg",
        "/images/products/natural-wood-veneer/crown-cut-flame-maple-natural-wood-veneer-sheets/image-04.jpg",
        "/images/products/natural-wood-veneer/crown-cut-flame-maple-natural-wood-veneer-sheets/image-05.jpg",
        "/images/products/natural-wood-veneer/crown-cut-flame-maple-natural-wood-veneer-sheets/image-06.jpg",
      ],
    },
    "natural-burma-teak-wood-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/natural-burma-teak-wood-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/natural-burma-teak-wood-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/natural-burma-teak-wood-veneer-sheets/image-02.jpg",
        "/images/products/natural-wood-veneer/natural-burma-teak-wood-veneer-sheets/image-03.jpg",
        "/images/products/natural-wood-veneer/natural-burma-teak-wood-veneer-sheets/image-04.jpg",
        "/images/products/natural-wood-veneer/natural-burma-teak-wood-veneer-sheets/image-05.jpg",
        "/images/products/natural-wood-veneer/natural-burma-teak-wood-veneer-sheets/image-06.jpg",
        "/images/products/natural-wood-veneer/natural-burma-teak-wood-veneer-sheets/image-07.jpg",
      ],
    },
    "crown-cut-red-oak-natural-wood-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/crown-cut-red-oak-natural-wood-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/crown-cut-red-oak-natural-wood-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/crown-cut-red-oak-natural-wood-veneer-sheets/image-02.jpg",
        "/images/products/natural-wood-veneer/crown-cut-red-oak-natural-wood-veneer-sheets/image-03.jpg",
        "/images/products/natural-wood-veneer/crown-cut-red-oak-natural-wood-veneer-sheets/image-04.jpg",
        "/images/products/natural-wood-veneer/crown-cut-red-oak-natural-wood-veneer-sheets/image-05.jpg",
        "/images/products/natural-wood-veneer/crown-cut-red-oak-natural-wood-veneer-sheets/image-06.jpg",
      ],
    },
    "fumed-oak-natural-wood-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/fumed-oak-natural-wood-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/fumed-oak-natural-wood-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/fumed-oak-natural-wood-veneer-sheets/image-02.jpg",
        "/images/products/natural-wood-veneer/fumed-oak-natural-wood-veneer-sheets/image-03.jpg",
        "/images/products/natural-wood-veneer/fumed-oak-natural-wood-veneer-sheets/image-04.jpg",
        "/images/products/natural-wood-veneer/fumed-oak-natural-wood-veneer-sheets/image-05.jpg",
        "/images/products/natural-wood-veneer/fumed-oak-natural-wood-veneer-sheets/image-06.jpg",
      ],
    },
    "fumed-eucalyptus-natural-wood-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/fumed-eucalyptus-natural-wood-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/fumed-eucalyptus-natural-wood-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/fumed-eucalyptus-natural-wood-veneer-sheets/image-02.jpg",
        "/images/products/natural-wood-veneer/fumed-eucalyptus-natural-wood-veneer-sheets/image-03.jpg",
        "/images/products/natural-wood-veneer/fumed-eucalyptus-natural-wood-veneer-sheets/image-04.jpg",
        "/images/products/natural-wood-veneer/fumed-eucalyptus-natural-wood-veneer-sheets/image-05.jpg",
        "/images/products/natural-wood-veneer/fumed-eucalyptus-natural-wood-veneer-sheets/image-06.jpg",
      ],
    },
    "crown-cut-white-oak-natural-wood-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/crown-cut-white-oak-natural-wood-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/crown-cut-white-oak-natural-wood-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/crown-cut-white-oak-natural-wood-veneer-sheets/image-02.jpg",
        "/images/products/natural-wood-veneer/crown-cut-white-oak-natural-wood-veneer-sheets/image-03.jpg",
        "/images/products/natural-wood-veneer/crown-cut-white-oak-natural-wood-veneer-sheets/image-04.jpg",
        "/images/products/natural-wood-veneer/crown-cut-white-oak-natural-wood-veneer-sheets/image-05.jpg",
      ],
    },
    "mappa-maple-burl-natural-wood-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/mappa-maple-burl-natural-wood-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/mappa-maple-burl-natural-wood-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/mappa-maple-burl-natural-wood-veneer-sheets/image-02.jpg",
        "/images/products/natural-wood-veneer/mappa-maple-burl-natural-wood-veneer-sheets/image-03.jpg",
        "/images/products/natural-wood-veneer/mappa-maple-burl-natural-wood-veneer-sheets/image-04.jpg",
        "/images/products/natural-wood-veneer/mappa-maple-burl-natural-wood-veneer-sheets/image-05.jpg",
        "/images/products/natural-wood-veneer/mappa-maple-burl-natural-wood-veneer-sheets/image-06.jpg",
        "/images/products/natural-wood-veneer/mappa-maple-burl-natural-wood-veneer-sheets/image-07.jpg",
      ],
    },
    "olive-ash-natural-wood-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/olive-ash-natural-wood-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/olive-ash-natural-wood-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/olive-ash-natural-wood-veneer-sheets/image-02.jpg",
        "/images/products/natural-wood-veneer/olive-ash-natural-wood-veneer-sheets/image-03.jpg",
        "/images/products/natural-wood-veneer/olive-ash-natural-wood-veneer-sheets/image-04.jpg",
        "/images/products/natural-wood-veneer/olive-ash-natural-wood-veneer-sheets/image-05.jpg",
      ],
    },
    "mahogany-crotch-burl-natural-wood-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/mahogany-crotch-burl-natural-wood-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/mahogany-crotch-burl-natural-wood-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/mahogany-crotch-burl-natural-wood-veneer-sheets/image-02.jpg",
        "/images/products/natural-wood-veneer/mahogany-crotch-burl-natural-wood-veneer-sheets/image-03.jpg",
        "/images/products/natural-wood-veneer/mahogany-crotch-burl-natural-wood-veneer-sheets/image-04.jpg",
      ],
    },
    "quarter-cut-golden-burma-teak-natural-wood-veneer": {
      featuredImage: "/images/products/natural-wood-veneer/quarter-cut-golden-burma-teak-natural-wood-veneer/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/quarter-cut-golden-burma-teak-natural-wood-veneer/image-01.jpg",
        "/images/products/natural-wood-veneer/quarter-cut-golden-burma-teak-natural-wood-veneer/image-02.jpg",
        "/images/products/natural-wood-veneer/quarter-cut-golden-burma-teak-natural-wood-veneer/image-03.jpg",
        "/images/products/natural-wood-veneer/quarter-cut-golden-burma-teak-natural-wood-veneer/image-04.jpg",
        "/images/products/natural-wood-veneer/quarter-cut-golden-burma-teak-natural-wood-veneer/image-05.jpg",
      ],
    },
    "rift-cut-white-oak-natural-wood-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/rift-cut-white-oak-natural-wood-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/rift-cut-white-oak-natural-wood-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/rift-cut-white-oak-natural-wood-veneer-sheets/image-02.jpg",
        "/images/products/natural-wood-veneer/rift-cut-white-oak-natural-wood-veneer-sheets/image-03.jpg",
        "/images/products/natural-wood-veneer/rift-cut-white-oak-natural-wood-veneer-sheets/image-04.jpg",
      ],
    },
    "smoked-eucalyptus-face-veneer-sheets": {
      featuredImage: "/images/products/natural-wood-veneer/smoked-eucalyptus-face-veneer-sheets/image-01.jpg",
      gallery: [
        "/images/products/natural-wood-veneer/smoked-eucalyptus-face-veneer-sheets/image-01.jpg",
        "/images/products/natural-wood-veneer/smoked-eucalyptus-face-veneer-sheets/image-02.jpg",
      ],
    },
  };

  return imageMap[slug] ?? { featuredImage: "", gallery: [] };
}

function createProduct(input: {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  shortDesc: string;
  tags: string[];
  veneerSpecies: string;
  cuttingMethod: string;
  grainPattern: string;
  imageAlt: string;
  code: string;
  imageCount: number;
  featuredImage?: string;
  gallery?: string[];
  featured?: boolean;
}): NaturalWoodVeneerProduct {
  const imageData = buildImageData(input.slug);

  return {
    slug: input.slug,
    name: input.name,
    seoTitle: input.seoTitle,
    metaDescription: input.metaDescription,
    code: input.code,
    category: defaultCategory,
    shortDesc: input.shortDesc,
    tags: input.tags,
    specs: {
      ...defaultSpecs,
      veneerSpecies: input.veneerSpecies,
      cuttingMethod: input.cuttingMethod,
      grainPattern: input.grainPattern,
    },
    imageAlt: input.imageAlt,
    featuredImage: input.featuredImage ?? imageData.featuredImage,
    gallery: input.gallery ?? imageData.gallery,
    overview: `${input.name} is supplied for overseas furniture manufacturers, door factories, cabinet producers and interior panel buyers who need stable veneer quality and practical specification support.

This product is selected for its ${input.grainPattern.toLowerCase()} appearance and is suitable for decorative surface applications where veneer consistency, natural wood character and reliable supply are important.

Tongli Timber supports sample confirmation, production matching, export packing and customized processing requirements for long-term B2B cooperation.`,
    faqs: [...naturalWoodVeneerFaqs],
    relatedProducts: [...defaultRelatedProducts],
    featured: input.featured ?? false,
    updatedAt: "2026-06-04",
  };
}

export const naturalWoodVeneerProducts: NaturalWoodVeneerProduct[] = [
  createProduct({
    slug: "quarter-cut-maple-natural-wood-veneer-sheets",
    name: "Quarter Cut Maple Natural Wood Veneer Sheets",
    seoTitle: "Quarter Cut Maple Natural Wood Veneer Sheets | Tongli Timber",
    metaDescription: "Quarter cut maple natural wood veneer sheets with clean grain for furniture, cabinets, doors and decorative panel applications.",
    shortDesc: "Quarter cut maple natural wood veneer sheets with clean grain for furniture, cabinets, doors and decorative panel applications.",
    tags: ["Natural Wood Veneer", "Maple Veneer", "Quarter Cut Veneer", "Wood Veneer Sheets", "Furniture Veneer", "Cabinet Veneer", "Door Veneer"],
    veneerSpecies: "Maple",
    cuttingMethod: "Quarter Cut",
    grainPattern: "Straight / Fine Grain",
    imageAlt: "Quarter Cut Maple Natural Wood Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-001",
    imageCount: 7,
    featured: true,
  }),
  createProduct({
    slug: "crown-cut-black-walnut-natural-wood-veneer-sheets",
    name: "Crown Cut Black Walnut Natural Wood Veneer Sheets",
    seoTitle: "Crown Cut Black Walnut Natural Wood Veneer Sheets | Tongli Timber",
    metaDescription: "Crown cut black walnut natural wood veneer sheets with rich color and decorative grain for furniture, doors and wall panels.",
    shortDesc: "Crown cut black walnut natural wood veneer sheets with rich color and decorative grain for furniture, doors and wall panels.",
    tags: ["Natural Wood Veneer", "Black Walnut Veneer", "Crown Cut Veneer", "Wood Veneer Sheets", "Furniture Veneer", "Wall Panel Veneer", "Door Veneer"],
    veneerSpecies: "Black Walnut",
    cuttingMethod: "Crown Cut",
    grainPattern: "Crown / Cathedral Grain",
    imageAlt: "Crown Cut Black Walnut Natural Wood Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-002",
    imageCount: 6,
    featured: true,
  }),
  createProduct({
    slug: "natural-teak-wood-veneer-sheets",
    name: "Natural Teak Wood Veneer Sheets",
    seoTitle: "Natural Teak Wood Veneer Sheets for Furniture & Panels",
    metaDescription: "Natural teak wood veneer sheets with warm golden-brown tone for furniture, plywood, doors, cabinets and interior decoration.",
    shortDesc: "Natural teak wood veneer sheets with warm golden-brown tone for furniture, plywood, doors, cabinets and interior decoration.",
    tags: ["Natural Wood Veneer", "Teak Veneer", "Wood Veneer Sheets", "Furniture Veneer", "Door Veneer", "Cabinet Veneer", "Decorative Veneer"],
    veneerSpecies: "Teak",
    cuttingMethod: "Natural Cut / Custom",
    grainPattern: "Straight / Natural Teak Grain",
    imageAlt: "Natural Teak Wood Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-003",
    imageCount: 3,
  }),
  createProduct({
    slug: "black-walnut-burl-natural-wood-veneer-sheets",
    name: "Black Walnut Burl Natural Wood Veneer Sheets",
    seoTitle: "Black Walnut Burl Natural Wood Veneer Sheets | Tongli Timber",
    metaDescription: "Black walnut burl veneer sheets with decorative figured grain for premium furniture, doors, feature panels and interior projects.",
    shortDesc: "Black walnut burl veneer sheets with decorative figured grain for premium furniture, doors, feature panels and interior projects.",
    tags: ["Natural Wood Veneer", "Black Walnut Burl Veneer", "Burl Veneer", "Figured Veneer", "Furniture Veneer", "Door Veneer", "Decorative Veneer"],
    veneerSpecies: "Black Walnut Burl",
    cuttingMethod: "Burl Cut",
    grainPattern: "Burl / Figured Grain",
    imageAlt: "Black Walnut Burl Natural Wood Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-004",
    imageCount: 4,
  }),
  createProduct({
    slug: "quarter-sawn-american-black-walnut-natural-wood-veneer",
    name: "Quarter Sawn American Black Walnut Natural Wood Veneer",
    seoTitle: "Quarter Sawn American Black Walnut Natural Wood Veneer",
    metaDescription: "Quarter sawn American black walnut veneer with refined straight grain for furniture, cabinets, doors and decorative panels.",
    shortDesc: "Quarter sawn American black walnut veneer with refined straight grain for furniture, cabinets, doors and decorative panels.",
    tags: ["Natural Wood Veneer", "American Black Walnut Veneer", "Quarter Sawn Veneer", "Wood Veneer Sheets", "Furniture Veneer", "Cabinet Veneer", "Panel Veneer"],
    veneerSpecies: "American Black Walnut",
    cuttingMethod: "Quarter Sawn",
    grainPattern: "Straight Grain",
    imageAlt: "Quarter Sawn American Black Walnut Natural Wood Veneer for furniture, doors and decorative panels",
    code: "NV-NWV-005",
    imageCount: 7,
    featured: true,
  }),
  createProduct({
    slug: "aaa-birds-eye-maple-natural-wood-veneer-sheets",
    name: "AAA Birds Eye Maple Natural Wood Veneer Sheets",
    seoTitle: "AAA Birds Eye Maple Natural Wood Veneer Sheets",
    metaDescription: "AAA birds eye maple veneer sheets with distinctive figured grain for luxury furniture, doors, cabinets and decorative surfaces.",
    shortDesc: "AAA birds eye maple veneer sheets with distinctive figured grain for luxury furniture, doors, cabinets and decorative surfaces.",
    tags: ["Natural Wood Veneer", "Birds Eye Maple Veneer", "Maple Veneer", "Figured Veneer", "AAA Grade Veneer", "Furniture Veneer", "Decorative Veneer"],
    veneerSpecies: "Birds Eye Maple",
    cuttingMethod: "Figured Cut",
    grainPattern: "Birds Eye Figure",
    imageAlt: "AAA Birds Eye Maple Natural Wood Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-006",
    imageCount: 5,
  }),
  createProduct({
    slug: "dyed-natural-wood-veneer-sheets",
    name: "Dyed Natural Wood Veneer Sheets",
    seoTitle: "Dyed Natural Wood Veneer Sheets for Decorative Panels",
    metaDescription: "Dyed natural wood veneer sheets in customizable colors for furniture, doors, cabinets, wall panels and decorative interiors.",
    shortDesc: "Dyed natural wood veneer sheets in customizable colors for furniture, doors, cabinets, wall panels and decorative interiors.",
    tags: ["Natural Wood Veneer", "Dyed Veneer", "Colored Wood Veneer", "Decorative Veneer", "Furniture Veneer", "Door Veneer", "Wall Panel Veneer"],
    veneerSpecies: "Natural Veneer / Custom",
    cuttingMethod: "Custom",
    grainPattern: "Depends on Veneer Species",
    imageAlt: "Dyed Natural Wood Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-007",
    imageCount: 5,
  }),
  createProduct({
    slug: "quarter-cut-dark-walnut-natural-wood-veneer-sheets",
    name: "Quarter Cut Dark Walnut Natural Wood Veneer Sheets",
    seoTitle: "Quarter Cut Dark Walnut Natural Wood Veneer Sheets",
    metaDescription: "Quarter cut dark walnut natural wood veneer sheets with deep color and straight grain for furniture and interior panels.",
    shortDesc: "Quarter cut dark walnut natural wood veneer sheets with deep color and straight grain for furniture and interior panels.",
    tags: ["Natural Wood Veneer", "Dark Walnut Veneer", "Quarter Cut Veneer", "Wood Veneer Sheets", "Furniture Veneer", "Cabinet Veneer", "Interior Panel Veneer"],
    veneerSpecies: "Dark Walnut",
    cuttingMethod: "Quarter Cut",
    grainPattern: "Straight Grain",
    imageAlt: "Quarter Cut Dark Walnut Natural Wood Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-008",
    imageCount: 6,
  }),
  createProduct({
    slug: "crown-cut-flame-maple-natural-wood-veneer-sheets",
    name: "Crown Cut Flame Maple Natural Wood Veneer Sheets",
    seoTitle: "Crown Cut Flame Maple Natural Wood Veneer Sheets",
    metaDescription: "Crown cut flame maple veneer sheets with figured grain for high-end furniture, doors, cabinets and decorative wood surfaces.",
    shortDesc: "Crown cut flame maple veneer sheets with figured grain for high-end furniture, doors, cabinets and decorative wood surfaces.",
    tags: ["Natural Wood Veneer", "Flame Maple Veneer", "Crown Cut Veneer", "Figured Veneer", "Furniture Veneer", "Door Veneer", "Decorative Veneer"],
    veneerSpecies: "Flame Maple",
    cuttingMethod: "Crown Cut",
    grainPattern: "Flame / Figured Grain",
    imageAlt: "Crown Cut Flame Maple Natural Wood Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-009",
    imageCount: 6,
  }),
  createProduct({
    slug: "natural-burma-teak-wood-veneer-sheets",
    name: "Natural Burma Teak Wood Veneer Sheets",
    seoTitle: "Natural Burma Teak Wood Veneer Sheets | Tongli Timber",
    metaDescription: "Natural Burma teak veneer sheets with classic teak color and grain for furniture, doors, plywood and interior applications.",
    shortDesc: "Natural Burma teak veneer sheets with classic teak color and grain for furniture, doors, plywood and interior applications.",
    tags: ["Natural Wood Veneer", "Burma Teak Veneer", "Teak Veneer", "Wood Veneer Sheets", "Furniture Veneer", "Door Veneer", "Decorative Veneer"],
    veneerSpecies: "Burma Teak",
    cuttingMethod: "Natural Cut / Custom",
    grainPattern: "Straight / Natural Teak Grain",
    imageAlt: "Natural Burma Teak Wood Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-010",
    imageCount: 7,
  }),
  createProduct({
    slug: "crown-cut-red-oak-natural-wood-veneer-sheets",
    name: "Crown Cut Red Oak Natural Wood Veneer Sheets",
    seoTitle: "Crown Cut Red Oak Natural Wood Veneer Sheets",
    metaDescription: "Crown cut red oak natural wood veneer sheets with strong cathedral grain for furniture, doors, cabinets and wall panels.",
    shortDesc: "Crown cut red oak natural wood veneer sheets with strong cathedral grain for furniture, doors, cabinets and wall panels.",
    tags: ["Natural Wood Veneer", "Red Oak Veneer", "Crown Cut Veneer", "Wood Veneer Sheets", "Furniture Veneer", "Door Veneer", "Wall Panel Veneer"],
    veneerSpecies: "Red Oak",
    cuttingMethod: "Crown Cut",
    grainPattern: "Crown / Cathedral Grain",
    imageAlt: "Crown Cut Red Oak Natural Wood Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-011",
    imageCount: 6,
    featured: true,
  }),
  createProduct({
    slug: "fumed-oak-natural-wood-veneer-sheets",
    name: "Fumed Oak Natural Wood Veneer Sheets",
    seoTitle: "Fumed Oak Natural Wood Veneer Sheets | Smoked Oak Veneer",
    metaDescription: "Fumed oak natural wood veneer sheets with smoked color tone for furniture, doors, wall panels and premium interior surfaces.",
    shortDesc: "Fumed oak natural wood veneer sheets with smoked color tone for furniture, doors, wall panels and premium interior surfaces.",
    tags: ["Natural Wood Veneer", "Fumed Oak Veneer", "Smoked Oak Veneer", "Oak Veneer", "Wood Veneer Sheets", "Furniture Veneer", "Wall Panel Veneer"],
    veneerSpecies: "Oak",
    cuttingMethod: "Smoked / Fumed",
    grainPattern: "Natural Oak Grain",
    imageAlt: "Fumed Oak Natural Wood Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-012",
    imageCount: 6,
  }),
  createProduct({
    slug: "fumed-eucalyptus-natural-wood-veneer-sheets",
    name: "Fumed Eucalyptus Natural Wood Veneer Sheets",
    seoTitle: "Fumed Eucalyptus Natural Wood Veneer Sheets",
    metaDescription: "Fumed eucalyptus veneer sheets with smoky color variation for furniture, cabinets, wall panels and decorative wood surfaces.",
    shortDesc: "Fumed eucalyptus veneer sheets with smoky color variation for furniture, cabinets, wall panels and decorative wood surfaces.",
    tags: ["Natural Wood Veneer", "Fumed Eucalyptus Veneer", "Smoked Eucalyptus Veneer", "Eucalyptus Veneer", "Wood Veneer Sheets", "Furniture Veneer", "Decorative Veneer"],
    veneerSpecies: "Eucalyptus",
    cuttingMethod: "Smoked / Fumed",
    grainPattern: "Natural Eucalyptus Grain",
    imageAlt: "Fumed Eucalyptus Natural Wood Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-013",
    imageCount: 6,
  }),
  createProduct({
    slug: "crown-cut-white-oak-natural-wood-veneer-sheets",
    name: "Crown Cut White Oak Natural Wood Veneer Sheets",
    seoTitle: "Crown Cut White Oak Natural Wood Veneer Sheets",
    metaDescription: "Crown cut white oak veneer sheets with natural cathedral grain for furniture, doors, cabinets and decorative wall panels.",
    shortDesc: "Crown cut white oak veneer sheets with natural cathedral grain for furniture, doors, cabinets and decorative wall panels.",
    tags: ["Natural Wood Veneer", "White Oak Veneer", "Crown Cut Veneer", "Wood Veneer Sheets", "Furniture Veneer", "Door Veneer", "Wall Panel Veneer"],
    veneerSpecies: "White Oak",
    cuttingMethod: "Crown Cut",
    grainPattern: "Crown / Cathedral Grain",
    imageAlt: "Crown Cut White Oak Natural Wood Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-014",
    imageCount: 5,
  }),
  createProduct({
    slug: "mappa-maple-burl-natural-wood-veneer-sheets",
    name: "Mappa Maple Burl Natural Wood Veneer Sheets",
    seoTitle: "Mappa Maple Burl Natural Wood Veneer Sheets",
    metaDescription: "Mappa maple burl veneer sheets with decorative figured grain for hotel interiors, furniture, doors and premium wall panels.",
    shortDesc: "Mappa maple burl veneer sheets with decorative figured grain for hotel interiors, furniture, doors and premium wall panels.",
    tags: ["Natural Wood Veneer", "Mappa Maple Burl Veneer", "Maple Burl Veneer", "Burl Veneer", "Figured Veneer", "Hotel Interior Veneer", "Decorative Veneer"],
    veneerSpecies: "Mappa Maple Burl",
    cuttingMethod: "Burl Cut",
    grainPattern: "Burl / Figured Grain",
    imageAlt: "Mappa Maple Burl Natural Wood Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-015",
    imageCount: 7,
  }),
  createProduct({
    slug: "olive-ash-natural-wood-veneer-sheets",
    name: "Olive Ash Natural Wood Veneer Sheets",
    seoTitle: "Olive Ash Natural Wood Veneer Sheets | Tongli Timber",
    metaDescription: "Olive ash natural wood veneer sheets with unique light-dark grain for furniture, cabinets, doors and decorative panels.",
    shortDesc: "Olive ash natural wood veneer sheets with unique light-dark grain for furniture, cabinets, doors and decorative panels.",
    tags: ["Natural Wood Veneer", "Olive Ash Veneer", "Ash Veneer", "Wood Veneer Sheets", "Furniture Veneer", "Cabinet Veneer", "Decorative Veneer"],
    veneerSpecies: "Olive Ash",
    cuttingMethod: "Natural Cut / Custom",
    grainPattern: "Figured / Olive Ash Grain",
    imageAlt: "Olive Ash Natural Wood Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-016",
    imageCount: 5,
  }),
  createProduct({
    slug: "mahogany-crotch-burl-natural-wood-veneer-sheets",
    name: "Mahogany Crotch Burl Natural Wood Veneer Sheets",
    seoTitle: "Mahogany Crotch Burl Natural Wood Veneer Sheets",
    metaDescription: "Mahogany crotch burl veneer sheets with dramatic figured grain for door skins, furniture, panels and decorative interiors.",
    shortDesc: "Mahogany crotch burl veneer sheets with dramatic figured grain for door skins, furniture, panels and decorative interiors.",
    tags: ["Natural Wood Veneer", "Mahogany Veneer", "Crotch Burl Veneer", "Figured Veneer", "Door Skin Veneer", "Furniture Veneer", "Decorative Veneer"],
    veneerSpecies: "Mahogany Crotch Burl",
    cuttingMethod: "Crotch / Burl Cut",
    grainPattern: "Crotch Burl Figure",
    imageAlt: "Mahogany Crotch Burl Natural Wood Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-017",
    imageCount: 4,
  }),
  createProduct({
    slug: "quarter-cut-golden-burma-teak-natural-wood-veneer",
    name: "Quarter Cut Golden Burma Teak Natural Wood Veneer",
    seoTitle: "Quarter Cut Golden Burma Teak Natural Wood Veneer",
    metaDescription: "Quarter cut golden Burma teak veneer with straight grain and warm tone for furniture, doors, cabinets and decorative panels.",
    shortDesc: "Quarter cut golden Burma teak veneer with straight grain and warm tone for furniture, doors, cabinets and decorative panels.",
    tags: ["Natural Wood Veneer", "Golden Burma Teak Veneer", "Teak Veneer", "Quarter Cut Veneer", "Wood Veneer Sheets", "Furniture Veneer", "Door Veneer"],
    veneerSpecies: "Golden Burma Teak",
    cuttingMethod: "Quarter Cut",
    grainPattern: "Straight Teak Grain",
    imageAlt: "Quarter Cut Golden Burma Teak Natural Wood Veneer for furniture, doors and decorative panels",
    code: "NV-NWV-018",
    imageCount: 5,
  }),
  createProduct({
    slug: "rift-cut-white-oak-natural-wood-veneer-sheets",
    name: "Rift Cut White Oak Natural Wood Veneer Sheets",
    seoTitle: "Rift Cut White Oak Natural Wood Veneer Sheets",
    metaDescription: "Rift cut white oak natural wood veneer sheets with clean straight grain for furniture, doors, cabinets and wall panels.",
    shortDesc: "Rift cut white oak natural wood veneer sheets with clean straight grain for furniture, doors, cabinets and wall panels.",
    tags: ["Natural Wood Veneer", "White Oak Veneer", "Rift Cut Veneer", "Wood Veneer Sheets", "Furniture Veneer", "Door Veneer", "Wall Panel Veneer"],
    veneerSpecies: "White Oak",
    cuttingMethod: "Rift Cut",
    grainPattern: "Straight Grain",
    imageAlt: "Rift Cut White Oak Natural Wood Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-019",
    imageCount: 4,
    featured: true,
  }),
  createProduct({
    slug: "smoked-eucalyptus-face-veneer-sheets",
    name: "Smoked Eucalyptus Face Veneer Sheets",
    seoTitle: "Smoked Eucalyptus Face Veneer Sheets | Tongli Timber",
    metaDescription: "Smoked eucalyptus face veneer sheets with rich smoky tone for veneer plywood, furniture, cabinets and interior panels.",
    shortDesc: "Smoked eucalyptus face veneer sheets with rich smoky tone for veneer plywood, furniture, cabinets and interior panels.",
    tags: ["Natural Wood Veneer", "Smoked Eucalyptus Veneer", "Face Veneer", "Eucalyptus Veneer", "Veneer Plywood", "Furniture Veneer", "Decorative Veneer"],
    veneerSpecies: "Eucalyptus",
    cuttingMethod: "Smoked / Fumed",
    grainPattern: "Natural Eucalyptus Grain",
    imageAlt: "Smoked Eucalyptus Face Veneer Sheets for furniture, doors and decorative panels",
    code: "NV-NWV-020",
    imageCount: 2,
  }),
];

export const naturalWoodVeneerRelatedProducts: RelatedProduct[] = [
  {
    name: "Quarter Cut Maple",
    code: "NV-NWV-001",
    species: "Maple",
    cut: "Quarter Cut",
    href: "/products/natural-wood-veneer/quarter-cut-maple-natural-wood-veneer-sheets",
    gradient: "from-[#D4B896] to-[#B8956A]",
  },
  {
    name: "Crown Cut Black Walnut",
    code: "NV-NWV-002",
    species: "Black Walnut",
    cut: "Crown Cut",
    href: "/products/natural-wood-veneer/crown-cut-black-walnut-natural-wood-veneer-sheets",
    gradient: "from-[#5C4033] to-[#3D2914]",
  },
  {
    name: "Natural Burma Teak",
    code: "NV-NWV-010",
    species: "Burma Teak",
    cut: "Natural Cut",
    href: "/products/natural-wood-veneer/natural-burma-teak-wood-veneer-sheets",
    gradient: "from-[#B88A5A] to-[#8F6842]",
  },
  {
    name: "Rift Cut White Oak",
    code: "NV-NWV-019",
    species: "White Oak",
    cut: "Rift Cut",
    href: "/products/natural-wood-veneer/rift-cut-white-oak-natural-wood-veneer-sheets",
    gradient: "from-[#C8A97E] to-[#A68B5E]",
  },
];

export function getProductBySlug(slug: string): NaturalWoodVeneerProduct | undefined {
  return naturalWoodVeneerProducts.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): NaturalWoodVeneerProduct[] {
  return naturalWoodVeneerProducts.filter((p) => p.featured);
}

export function getAllProductSlugs(): string[] {
  return naturalWoodVeneerProducts.map((p) => p.slug);
}

