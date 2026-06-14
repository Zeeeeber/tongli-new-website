/**
 * Melamine Board Products Data
 *
 * Placeholder product data for MelamineBoardDetailTemplate.
 * This file will be expanded with real products later.
 */

export interface MelamineBoardProduct {
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

export const melamineBoardProducts: MelamineBoardProduct[] = [
  {
    slug: "melamine-faced-board-placeholder",
    name: "Melamine Faced Board | Wood Grain Decorative Panel | China Melamine Board Supplier",
    seoTitle: "Melamine Faced Board | Wood Grain Decorative Panel | China Melamine Board Supplier",
    metaDescription: "Melamine faced board with decorative wood grain surface for furniture, cabinets, wardrobes and interior panels. Custom colors, sizes and substrates available.",
    code: "MLB-001",
    category: "Melamine Board",
    shortDesc: "A placeholder melamine faced board product page for decorative wood grain panels used in furniture, cabinets, wardrobes and interior applications.",
    tags: [
      "Melamine Board",
      "Melamine Faced Board",
      "Melamine MDF Board",
      "Melamine Particle Board",
      "Decorative Melamine Panel",
      "Wood Grain Melamine Board",
      "Melamine Board Supplier",
      "China Melamine Board",
    ],
    specs: {
      productType: "Melamine Board",
      veneerSpecies: "N/A",
      cuttingMethod: "N/A",
      grainPattern: "N/A",
      veneerThickness: "N/A",
      sheetSize: "Custom",
      moq: "TBD",
      leadTime: "TBD",
      packaging: "TBD",
      application: "Furniture, Cabinets, Wardrobes, Interior Panels",
    },
    imageAlt: "Melamine faced board decorative wood grain panel for furniture and interior use",
    featuredImage: "",
    gallery: [],
    overview: "Melamine faced board placeholder product page.",
    faqs: [],
    relatedProducts: [],
    featured: false,
    updatedAt: "2026-06-15",
  },
];

export function getMelamineBoardProductBySlug(slug: string): MelamineBoardProduct | undefined {
  return melamineBoardProducts.find((p) => p.slug === slug);
}

export function getAllMelamineBoardProductSlugs(): string[] {
  return melamineBoardProducts.map((p) => p.slug);
}
