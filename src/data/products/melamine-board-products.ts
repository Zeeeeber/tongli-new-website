/**
 * Melamine Board Products Data
 * Source: docs/import/melamine_board_5_products_data.json
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
    coreMaterial: string;
    surface: string;
    size: string;
    finish: string;
    application: string;
    moq?: string;
    leadTime?: string;
    packaging?: string;
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
    slug: "melamine-plywood-4x8-laminated-decorative-panel",
    name: "Melamine Plywood 4x8 | Laminated Decorative Panel | China Melamine Plywood Supplier",
    seoTitle: "Melamine Plywood 4x8 | Laminated Decorative Panel | China Melamine Plywood Supplier",
    metaDescription: "Melamine plywood 4x8 with laminated decorative surface for cabinets, wardrobes, furniture and interior panels. Custom colors and sizes available.",
    code: "MLB-PLY-001",
    category: "Melamine Board",
    shortDesc: "Laminated melamine plywood with a decorative surface for furniture, cabinets, wardrobes and interior panel applications.",
    tags: [
      "Melamine Plywood",
      "Melamine Plywood 4x8",
      "White Melamine Plywood",
      "Black Melamine Plywood",
      "Laminated Melamine Plywood",
      "Decorative Plywood",
      "Melamine Board Supplier",
      "China Melamine Plywood",
    ],
    specs: {
      productType: "Melamine plywood",
      coreMaterial: "Plywood",
      surface: "Melamine decorative laminated surface",
      size: "Standard and custom sizes available",
      finish: "White, black, wood grain and custom decorative finishes available",
      application: "Cabinets, wardrobes, furniture and interior panels",
    },
    imageAlt: "Melamine Plywood 4x8 | Laminated Decorative Panel | China Melamine Plywood Supplier for furniture and interior panel manufacturing",
    featuredImage: "/images/products/melamine-board/melamine-plywood-4x8-laminated-decorative-panel/image-01.png",
    gallery: [
      "/images/products/melamine-board/melamine-plywood-4x8-laminated-decorative-panel/image-01.png",
      "/images/products/melamine-board/melamine-plywood-4x8-laminated-decorative-panel/image-02.png",
      "/images/products/melamine-board/melamine-plywood-4x8-laminated-decorative-panel/image-03.png",
      "/images/products/melamine-board/melamine-plywood-4x8-laminated-decorative-panel/image-04.png",
      "/images/products/melamine-board/melamine-plywood-4x8-laminated-decorative-panel/image-05.png",
      "/images/products/melamine-board/melamine-plywood-4x8-laminated-decorative-panel/image-06.png",
    ],
    overview: "Laminated melamine plywood with a decorative surface for furniture, cabinets, wardrobes and interior panel applications.",
    faqs: [
      {
        q: "What is melamine plywood used for?",
        a: "Melamine plywood is commonly used for cabinets, wardrobes, shelves, furniture panels and interior decorative panels.",
      },
      {
        q: "Can the surface color be customized?",
        a: "Yes. White, black, wood grain and other decorative melamine finishes can be customized according to project requirements.",
      },
    ],
    relatedProducts: [],
    featured: true,
    updatedAt: "2026-06-17",
  },
  {
    slug: "melamine-mdf-panel-raw-mdf-core",
    name: "Melamine MDF Panel | Raw MDF Core | China Melamine MDF Board Factory",
    seoTitle: "Melamine MDF Panel | Raw MDF Core | China Melamine MDF Board Factory",
    metaDescription: "Melamine MDF panel with raw MDF core and decorative surface for cabinets, shelves, wardrobes and furniture manufacturing. Custom colors available.",
    code: "MLB-MDF-001",
    category: "Melamine Board",
    shortDesc: "Melamine MDF board made with a raw MDF core and decorative surface for furniture, cabinets, shelves and interior use.",
    tags: [
      "Melamine MDF",
      "Melamine MDF Panel",
      "Melamine MDF Board",
      "White Melamine MDF",
      "Black Melamine MDF",
      "Melamine And MDF Board",
      "MDF Core Board",
      "China Melamine Board",
    ],
    specs: {
      productType: "Melamine MDF panel",
      coreMaterial: "Raw MDF",
      surface: "Melamine decorative surface",
      size: "Standard and custom sizes available",
      finish: "White, black, wood grain and custom decorative finishes available",
      application: "Furniture, cabinets, shelves and interior panels",
    },
    imageAlt: "Melamine MDF Panel | Raw MDF Core | China Melamine MDF Board Factory for furniture and interior panel manufacturing",
    featuredImage: "/images/products/melamine-board/melamine-mdf-panel-raw-mdf-core/image-01.png",
    gallery: [
      "/images/products/melamine-board/melamine-mdf-panel-raw-mdf-core/image-01.png",
      "/images/products/melamine-board/melamine-mdf-panel-raw-mdf-core/image-02.jpg",
      "/images/products/melamine-board/melamine-mdf-panel-raw-mdf-core/image-03.png",
      "/images/products/melamine-board/melamine-mdf-panel-raw-mdf-core/image-04.jpg",
      "/images/products/melamine-board/melamine-mdf-panel-raw-mdf-core/image-05.png",
    ],
    overview: "Melamine MDF board made with a raw MDF core and decorative surface for furniture, cabinets, shelves and interior use.",
    faqs: [
      {
        q: "What is melamine MDF used for?",
        a: "Melamine MDF is used for furniture, cabinets, shelves, wardrobes and decorative interior boards.",
      },
      {
        q: "Is melamine MDF suitable for cabinet panels?",
        a: "Yes. Melamine MDF is a common material for cabinet doors, carcasses, shelves and furniture components.",
      },
    ],
    relatedProducts: [],
    featured: false,
    updatedAt: "2026-06-17",
  },
  {
    slug: "mr-melamine-mdf-board-moisture-resistant-core",
    name: "MR Melamine MDF Board | Moisture-Resistant Core | Melamine MDF Panel Supplier",
    seoTitle: "MR Melamine MDF Board | Moisture-Resistant Core | Melamine MDF Panel Supplier",
    metaDescription: "MR melamine MDF board with moisture-resistant core for cabinets, wardrobes, bathroom furniture and interior panels in humid areas.",
    code: "MLB-MDF-MR-001",
    category: "Melamine Board",
    shortDesc: "Moisture-resistant melamine MDF board for cabinet, wardrobe, bathroom furniture and interior panel manufacturing.",
    tags: [
      "MR Melamine MDF",
      "Moisture Resistant Melamine MDF",
      "Melamine MDF Board",
      "18mm Melamine MDF",
      "18mm White Melamine MDF",
      "White Melamine MDF Board",
      "Melamine MDF Panel",
      "Melamine Board Supplier",
    ],
    specs: {
      productType: "MR melamine MDF board",
      coreMaterial: "Moisture-resistant MDF",
      surface: "Melamine decorative surface",
      size: "Standard and custom sizes available",
      finish: "White, black, wood grain and custom decorative finishes available",
      application: "Cabinets, wardrobes, furniture and humid-area interior panels",
    },
    imageAlt: "MR Melamine MDF Board | Moisture-Resistant Core | Melamine MDF Panel Supplier for furniture and interior panel manufacturing",
    featuredImage: "/images/products/melamine-board/mr-melamine-mdf-board-moisture-resistant-core/image-01.png",
    gallery: [
      "/images/products/melamine-board/mr-melamine-mdf-board-moisture-resistant-core/image-01.png",
      "/images/products/melamine-board/mr-melamine-mdf-board-moisture-resistant-core/image-02.png",
      "/images/products/melamine-board/mr-melamine-mdf-board-moisture-resistant-core/image-03.png",
      "/images/products/melamine-board/mr-melamine-mdf-board-moisture-resistant-core/image-04.png",
      "/images/products/melamine-board/mr-melamine-mdf-board-moisture-resistant-core/image-05.png",
      "/images/products/melamine-board/mr-melamine-mdf-board-moisture-resistant-core/image-06.png",
    ],
    overview: "Moisture-resistant melamine MDF board for cabinet, wardrobe, bathroom furniture and interior panel manufacturing.",
    faqs: [
      {
        q: "What does MR melamine MDF mean?",
        a: "MR melamine MDF refers to melamine faced MDF with a moisture-resistant MDF core for furniture and interior panel use.",
      },
      {
        q: "Where can MR melamine MDF be used?",
        a: "It is suitable for kitchen cabinets, bathroom cabinets, wardrobes and interior areas where better moisture resistance is required.",
      },
    ],
    relatedProducts: [],
    featured: false,
    updatedAt: "2026-06-17",
  },
  {
    slug: "melamine-particle-board-sheet-decorative-cabinet-panel",
    name: "Melamine Particle Board Sheet | Decorative Cabinet Panel | China Melamine Board Supplier",
    seoTitle: "Melamine Particle Board Sheet | Decorative Cabinet Panel | China Melamine Board Supplier",
    metaDescription: "Melamine particle board sheet with decorative surface for cabinets, wardrobes, shelves and cost-efficient furniture manufacturing.",
    code: "MLB-PB-001",
    category: "Melamine Board",
    shortDesc: "Decorative melamine particle board sheet for cabinet panels, wardrobes, shelves and furniture production.",
    tags: [
      "Melamine Particle Board",
      "Melamine Particle Board Sheet",
      "White Melamine Particle Board",
      "Black Melamine Particle Board",
      "Wood Grain Melamine Particle Board",
      "16mm Melamine Particle Board",
      "Melamine Particle Board Cabinets",
      "China Melamine Board",
    ],
    specs: {
      productType: "Melamine particle board",
      coreMaterial: "Particle board",
      surface: "Melamine decorative surface",
      size: "Standard and custom sizes available",
      finish: "White, black, wood grain and custom decorative finishes available",
      application: "Cabinets, wardrobes, shelves and furniture panels",
    },
    imageAlt: "Melamine Particle Board Sheet | Decorative Cabinet Panel | China Melamine Board Supplier for furniture and interior panel manufacturing",
    featuredImage: "/images/products/melamine-board/melamine-particle-board-sheet-decorative-cabinet-panel/image-01.png",
    gallery: [
      "/images/products/melamine-board/melamine-particle-board-sheet-decorative-cabinet-panel/image-01.png",
      "/images/products/melamine-board/melamine-particle-board-sheet-decorative-cabinet-panel/image-02.png",
      "/images/products/melamine-board/melamine-particle-board-sheet-decorative-cabinet-panel/image-03.png",
      "/images/products/melamine-board/melamine-particle-board-sheet-decorative-cabinet-panel/image-04.png",
      "/images/products/melamine-board/melamine-particle-board-sheet-decorative-cabinet-panel/image-05.png",
    ],
    overview: "Decorative melamine particle board sheet for cabinet panels, wardrobes, shelves and furniture production.",
    faqs: [
      {
        q: "What is melamine particle board used for?",
        a: "Melamine particle board is widely used for cabinets, wardrobes, shelves, flat-pack furniture and decorative panels.",
      },
      {
        q: "Can melamine particle board be made in wood grain finish?",
        a: "Yes. Wood grain, white, black and other decorative melamine finishes can be customized.",
      },
    ],
    relatedProducts: [],
    featured: false,
    updatedAt: "2026-06-17",
  },
  {
    slug: "mr-melamine-particle-board-moisture-resistant-panel",
    name: "MR Melamine Particle Board | Moisture-Resistant Cabinet Panel | Custom Size Melamine Board",
    seoTitle: "MR Melamine Particle Board | Moisture-Resistant Cabinet Panel | Custom Size Melamine Board",
    metaDescription: "MR melamine particle board with moisture-resistant core for cabinets, wardrobes and furniture panels. Custom sizes and decorative finishes available.",
    code: "MLB-PB-MR-001",
    category: "Melamine Board",
    shortDesc: "Moisture-resistant melamine particle board for cabinet panels, wardrobes and furniture manufacturing in humid-use applications.",
    tags: [
      "MR Melamine Particle Board",
      "Moisture Resistant Melamine Particle Board",
      "Melamine Particle Board",
      "Custom Size White Melamine Particle Board",
      "Wood Grain Melamine Particle Board",
      "Melamine Particle Board Cabinets",
      "Melamine Board Supplier",
      "China Melamine Board",
    ],
    specs: {
      productType: "MR melamine particle board",
      coreMaterial: "Moisture-resistant particle board",
      surface: "Melamine decorative surface",
      size: "Standard and custom sizes available",
      finish: "White, black, wood grain and custom decorative finishes available",
      application: "Cabinets, wardrobes, furniture and humid-area interior panels",
    },
    imageAlt: "MR Melamine Particle Board | Moisture-Resistant Cabinet Panel | Custom Size Melamine Board for furniture and interior panel manufacturing",
    featuredImage: "/images/products/melamine-board/mr-melamine-particle-board-moisture-resistant-panel/image-01.png",
    gallery: [
      "/images/products/melamine-board/mr-melamine-particle-board-moisture-resistant-panel/image-01.png",
      "/images/products/melamine-board/mr-melamine-particle-board-moisture-resistant-panel/image-02.png",
      "/images/products/melamine-board/mr-melamine-particle-board-moisture-resistant-panel/image-03.png",
      "/images/products/melamine-board/mr-melamine-particle-board-moisture-resistant-panel/image-04.png",
      "/images/products/melamine-board/mr-melamine-particle-board-moisture-resistant-panel/image-05.png",
      "/images/products/melamine-board/mr-melamine-particle-board-moisture-resistant-panel/image-06.png",
      "/images/products/melamine-board/mr-melamine-particle-board-moisture-resistant-panel/image-07.png",
    ],
    overview: "Moisture-resistant melamine particle board for cabinet panels, wardrobes and furniture manufacturing in humid-use applications.",
    faqs: [
      {
        q: "What is MR melamine particle board?",
        a: "MR melamine particle board is a melamine faced board with a moisture-resistant particle board core.",
      },
      {
        q: "Is MR melamine particle board suitable for cabinets?",
        a: "Yes. It is suitable for cabinet panels, wardrobes and furniture applications that need better moisture resistance.",
      },
    ],
    relatedProducts: [],
    featured: false,
    updatedAt: "2026-06-17",
  },
];

export function getMelamineBoardProductBySlug(slug: string): MelamineBoardProduct | undefined {
  return melamineBoardProducts.find((p) => p.slug === slug);
}

export function getAllMelamineBoardProductSlugs(): string[] {
  return melamineBoardProducts.map((p) => p.slug);
}
