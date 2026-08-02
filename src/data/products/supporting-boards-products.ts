/**
 * Supporting Boards Products Data
 *
 * Placeholder dataset covering 7 supporting-board sub-categories:
 *   - Commercial Plywood
 *   - Basswood Plywood
 *   - Birch Plywood
 *   - Raw MDF
 *   - Fireproof MDF
 *   - MR MDF (Moisture-Resistant MDF)
 *   - Particle Board
 *
 * Each entry carries a `subCategorySlug` so the dynamic route
 * `/products/supporting-boards/[slug]/page.tsx` can dispatch to the right
 * detail template.
 *
 * Real product photography will be added later; image fields are intentionally
 * left empty so the templates render their built-in "image placeholder" fallback.
 */

import { type NaturalWoodVeneerProduct } from "./natural-wood-veneer-products";

export type SupportingBoardSubCategorySlug =
  | "commercial-plywood"
  | "basswood-plywood"
  | "birch-plywood"
  | "raw-mdf"
  | "fireproof-mdf"
  | "mr-mdf"
  | "particle-board";

export interface SupportingBoardProduct
  extends NaturalWoodVeneerProduct {
  subCategory: string;
  subCategorySlug: SupportingBoardSubCategorySlug;
}

const defaultCommonSpecs = {
  moq: "TBD",
  leadTime: "TBD",
  packaging: "TBD",
};

export const supportingBoardsProducts: SupportingBoardProduct[] = [
  {
    slug: "commercial-plywood-bb-grade-4x8",
    name: "18mm EV Eucalyptus Commercial Plywood",
    productName: "18mm Commercial Plywood | EV Eucalyptus Furniture Panel | China Plywood Supplier",
    h1Title: "18mm Commercial Plywood | EV Eucalyptus Furniture Panel | China Plywood Supplier",
    seoTitle: "18mm Commercial Plywood | EV Eucalyptus Furniture Panel | China Plywood Supplier",
    metaDescription:
      "18mm EV eucalyptus commercial plywood for furniture, cabinets, doors and interior panels. E0/E1 glue options, custom sizes and export packing available.",
    code: "SBP-CP-18EV-001",
    category: "Supporting Boards",
    categorySlug: "supporting-boards",
    subCategory: "Commercial Plywood",
    subCategorySlug: "commercial-plywood",
    shortDescription:
      "18mm EV eucalyptus commercial plywood panel for furniture, cabinets, doors and interior manufacturing, with custom size, grade and packing options.",
    shortDesc:
      "18mm EV eucalyptus commercial plywood panel for furniture, cabinets, doors and interior manufacturing, with custom size, grade and packing options.",
    tags: [
      "Commercial Plywood",
      "18mm Commercial Plywood",
      "Eucalyptus Plywood",
      "EV Plywood",
      "Furniture Plywood",
      "Cabinet Plywood",
      "E0 E1 Plywood",
      "Plywood Board Sheet",
      "China Plywood Supplier",
      "Export Plywood",
    ],
    specs: {
      productType: "Commercial Plywood",
      veneerSpecies: "EV Eucalyptus",
      cuttingMethod: "Rotary Cut",
      grainPattern: "Mixed Natural Grain",
      veneerThickness: "18 mm",
      sheetSize: "4x8 ft / 1220 x 2440 mm, subject to order confirmation",
      moq: "Discussed per order",
      leadTime: "Normally about 10 to 25 days, depends on quantity and requirement",
      packaging:
        "Wooden frame packaging, in bulk, custom packaging, export pallet",
      application:
        "Furniture, cabinets, doors, partitions and interior panels",
      face: "EV eucalyptus veneer or custom face veneer",
      core: "Poplar, eucalyptus, combi or custom core by order",
      glue: "E0 / E1 or custom glue option by order requirement",
      customization:
        "Thickness, size, face veneer, core, glue type and packing",
    },
    imageAlt:
      "18mm EV eucalyptus commercial plywood sheet for furniture and cabinet manufacturing",
    featuredImage:
      "/images/products/supporting-boards/commercial-plywood-bb-grade-4x8/image-01.jpg",
    gallery: [
      "/images/products/supporting-boards/commercial-plywood-bb-grade-4x8/image-01.jpg",
      "/images/products/supporting-boards/commercial-plywood-bb-grade-4x8/image-02.jpg",
      "/images/products/supporting-boards/commercial-plywood-bb-grade-4x8/image-03.jpg",
      "/images/products/supporting-boards/commercial-plywood-bb-grade-4x8/image-04.jpg",
      "/images/products/supporting-boards/commercial-plywood-bb-grade-4x8/image-05.jpg",
    ],
    overview:
      "This 18mm EV eucalyptus commercial plywood is designed for furniture, cabinets, doors and interior panel manufacturing. It offers a practical balance of surface appearance, board stability and cost efficiency for B2B buyers who need consistent plywood sheets in standard or customized specifications.",
    applications: [
      "Furniture manufacturing",
      "Cabinet and wardrobe panels",
      "Door and interior panel production",
      "Commercial interior projects",
      "Wholesale plywood distribution",
    ],
    faqs: [
      {
        q: "What is commercial plywood used for?",
        a: "Commercial plywood is widely used for furniture, cabinets, doors, partitions, packaging and interior panels where a stable and cost-effective wood-based sheet is required.",
      },
      {
        q: "Is 18mm commercial plywood suitable for furniture?",
        a: "Yes. 18mm plywood is commonly used for furniture panels, cabinets, wardrobes and other applications that need good panel strength and screw-holding performance.",
      },
      {
        q: "Can the face veneer and core be customized?",
        a: "Yes. Face veneer, core material, thickness, glue type, sanding and packing can be customized according to project or wholesale requirements.",
      },
      {
        q: "What size is this plywood sheet?",
        a: "The common size is 4x8 ft, also known as 1220 x 2440 mm. Other sizes can be discussed depending on order requirements.",
      },
    ],
    relatedProducts: [],
    updatedAt: "2026-07-02",
  },
  {
    slug: "15mm-cherry-veneer-commercial-plywood-4x8",
    name: "15mm Cherry Veneer Commercial Plywood 4x8",
    productName:
      "15mm Cherry Veneer Plywood 4x8 | Commercial Furniture Board | China Plywood Supplier",
    h1Title:
      "15mm Cherry Veneer Plywood 4x8 | Commercial Furniture Board | China Plywood Supplier",
    seoTitle:
      "15mm Cherry Veneer Plywood 4x8 | Commercial Furniture Board | China Plywood Supplier",
    metaDescription:
      "15mm cherry veneer plywood 4x8 sheet for furniture, cabinets, doors and interior decorative panels. Custom core, thickness and export packing available.",
    code: "SBP-CP-15CV-001",
    category: "Supporting Boards",
    categorySlug: "supporting-boards",
    subCategory: "Commercial Plywood",
    subCategorySlug: "commercial-plywood",
    shortDescription:
      "15mm cherry veneer plywood 4x8 sheet for furniture, cabinets, doors and decorative interior panel applications.",
    shortDesc:
      "15mm cherry veneer plywood 4x8 sheet for furniture, cabinets, doors and decorative interior panel applications.",
    tags: [
      "Cherry Veneer Plywood",
      "15mm Plywood",
      "Commercial Plywood",
      "Plywood 4x8",
      "Furniture Plywood",
      "Decorative Plywood",
      "Plywood Board Sheet",
      "Cabinet Plywood",
      "China Plywood Supplier",
      "Veneer Plywood",
    ],
    specs: {
      productType: "Cherry Veneer Commercial Plywood",
      veneerSpecies: "Cherry Veneer",
      cuttingMethod: "Plain Slice / Rotary",
      grainPattern: "Cherry Wood Grain",
      veneerThickness: "15 mm",
      sheetSize: "4x8 ft / 1220 x 2440 mm, subject to order confirmation",
      moq: "Discussed per order",
      leadTime: "Normally about 10 to 25 days, depends on quantity and requirement",
      packaging:
        "Wooden frame packaging, in bulk, custom packaging, export pallet",
      application:
        "Furniture, cabinets, doors and decorative interior panels",
      face: "Cherry veneer face or custom decorative veneer",
      core: "Poplar, eucalyptus, combi or custom plywood core",
      customization:
        "Thickness, size, face veneer, grade, core and packing",
    },
    imageAlt:
      "15mm cherry veneer plywood 4x8 commercial board sheet for furniture and interior panels",
    featuredImage:
      "/images/products/supporting-boards/15mm-cherry-veneer-commercial-plywood-4x8/image-01.jpg",
    gallery: [
      "/images/products/supporting-boards/15mm-cherry-veneer-commercial-plywood-4x8/image-01.jpg",
      "/images/products/supporting-boards/15mm-cherry-veneer-commercial-plywood-4x8/image-02.jpg",
      "/images/products/supporting-boards/15mm-cherry-veneer-commercial-plywood-4x8/image-03.jpg",
      "/images/products/supporting-boards/15mm-cherry-veneer-commercial-plywood-4x8/image-04.jpg",
      "/images/products/supporting-boards/15mm-cherry-veneer-commercial-plywood-4x8/image-05.jpg",
    ],
    overview:
      "This 15mm cherry veneer plywood 4x8 sheet combines a decorative veneer surface with a commercial plywood structure, making it suitable for furniture, cabinet, door and interior panel applications where appearance and board stability are both important.",
    applications: [
      "Furniture manufacturing",
      "Cabinet and wardrobe panels",
      "Decorative plywood panels",
      "Interior wall and door applications",
      "Wholesale plywood supply",
    ],
    faqs: [
      {
        q: "What is cherry veneer plywood used for?",
        a: "Cherry veneer plywood is used for furniture, cabinets, doors, wall panels and decorative interior applications where a warm wood appearance is required.",
      },
      {
        q: "Is this plywood available in 4x8 size?",
        a: "Yes. The common size is 4x8 ft or 1220 x 2440 mm. Other dimensions can be discussed according to project requirements.",
      },
      {
        q: "Can the core or face veneer be customized?",
        a: "Yes. Core material, face veneer, thickness, grade and packing can be customized for furniture factories, wholesalers and project buyers.",
      },
    ],
    relatedProducts: [],
    updatedAt: "2026-07-02",
  },
  {
    slug: "basswood-plywood-furniture-grade",
    name: "3mm Basswood Plywood Sheets 4x8",
    productName:
      "3mm Basswood Plywood Sheets 4x8 | Laser Cutting Panel | China Plywood Supplier",
    h1Title:
      "3mm Basswood Plywood Sheets 4x8 | Laser Cutting Panel | China Plywood Supplier",
    seoTitle:
      "3mm Basswood Plywood Sheets 4x8 | Laser Cutting Panel | China Plywood Supplier",
    metaDescription:
      "3mm basswood plywood sheets 4x8 for laser cutting, crafts, models, furniture parts and lightweight panels. Smooth surface and custom packing available.",
    code: "SBP-BWP-3MM-001",
    category: "Supporting Boards",
    categorySlug: "supporting-boards",
    subCategory: "Basswood Plywood",
    subCategorySlug: "basswood-plywood",
    shortDescription:
      "Lightweight 3mm basswood plywood sheets for laser cutting, crafts, models, furniture parts and decorative panel applications.",
    shortDesc:
      "Lightweight 3mm basswood plywood sheets for laser cutting, crafts, models, furniture parts and decorative panel applications.",
    tags: [
      "Basswood Plywood",
      "3mm Basswood Plywood",
      "Basswood Plywood Sheets",
      "Basswood Plywood 4x8",
      "Laser Cutting Plywood",
      "Craft Plywood",
      "Model Plywood",
      "Lightweight Plywood",
      "China Plywood Supplier",
      "Plywood Sheet",
    ],
    specs: {
      productType: "Basswood Plywood",
      veneerSpecies: "Basswood",
      cuttingMethod: "Plain Slice / Rotary Cut",
      grainPattern: "Light and Even Grain",
      veneerThickness: "3 mm",
      sheetSize: "4x8 ft / 1220 x 2440 mm, subject to order confirmation",
      moq: "Discussed per order",
      leadTime: "Normally about 10 to 25 days, depends on quantity and requirement",
      packaging:
        "Wooden frame packaging, in bulk, custom packaging, export pallet",
      application:
        "Laser cutting, crafts, models, light furniture parts and decorative panels",
      surface: "Smooth basswood face for cutting and craft use",
      customization:
        "Thickness, size, grade, glue type, sanding and packing",
    },
    imageAlt:
      "3mm basswood plywood sheets 4x8 for laser cutting and craft panel applications",
    featuredImage:
      "/images/products/supporting-boards/basswood-plywood-furniture-grade/image-01.jpg",
    gallery: [
      "/images/products/supporting-boards/basswood-plywood-furniture-grade/image-01.jpg",
      "/images/products/supporting-boards/basswood-plywood-furniture-grade/image-02.jpg",
      "/images/products/supporting-boards/basswood-plywood-furniture-grade/image-03.jpg",
      "/images/products/supporting-boards/basswood-plywood-furniture-grade/image-04.jpg",
    ],
    overview:
      "This 3mm basswood plywood sheet is a lightweight panel option for laser cutting, crafts, model making and decorative applications. Its smooth surface and easy processing make it suitable for buyers who need consistent thin plywood sheets for manufacturing or wholesale supply.",
    applications: [
      "Laser cutting projects",
      "Craft and model making",
      "Decorative panels",
      "Light furniture parts",
      "Educational and DIY material supply",
    ],
    faqs: [
      {
        q: "Is 3mm basswood plywood good for laser cutting?",
        a: "Yes. 3mm basswood plywood is commonly used for laser cutting, model making, crafts and lightweight decorative parts when the proper grade and glue are selected.",
      },
      {
        q: "What is basswood plywood used for?",
        a: "Basswood plywood is used for crafts, models, laser-cut panels, light furniture parts, educational materials and decorative projects.",
      },
      {
        q: "Can you supply custom sizes or thicknesses?",
        a: "Yes. Size, thickness, grade, sanding and packing can be customized according to buyer requirements.",
      },
    ],
    relatedProducts: [],
    updatedAt: "2026-07-02",
  },
  {
    slug: "birch-plywood-bb-cp-grade-4x8",
    name: "3/4 Inch Birch Plywood 4x8 | BB/CP Grade Sheet | China Plywood Supplier",
    seoTitle:
      "3/4 Inch Birch Plywood 4x8 | BB/CP Grade Sheet | China Plywood Supplier",
    metaDescription:
      "3/4 inch birch plywood 4x8 sheet with BB/CP grade face for furniture, cabinets, doors, packaging and interior panel applications. Custom sizes available.",
    code: "SBP-BP-BBCP-001",
    category: "Supporting Boards",
    subCategory: "Birch Plywood",
    subCategorySlug: "birch-plywood",
    shortDesc:
      "BB/CP grade 3/4 inch birch plywood 4x8 sheet for furniture, cabinets, doors, packaging and interior panel manufacturing.",
    tags: [
      "Birch Plywood",
      "3/4 Inch Birch Plywood",
      "Birch Plywood 4x8",
      "BB CP Birch Plywood",
      "Baltic Birch Plywood",
      "Birch Plywood Sheet",
      "Furniture Grade Birch Plywood",
      "Cabinet Birch Plywood",
      "Full Birch Plywood",
      "China Plywood Supplier",
    ],
    specs: {
      productType: "Birch Plywood",
      veneerSpecies: "Birch",
      cuttingMethod: "Plain Slice / Rotary",
      grainPattern: "Tight and Uniform Birch Grain",
      veneerThickness: "Customizable",
      sheetSize: "1220×2440mm (4x8 ft) / custom",
      application:
        "Furniture, cabinets, doors, packaging and interior panel applications",
      ...defaultCommonSpecs,
    },
    imageAlt:
      "3/4 inch birch plywood 4x8 BB CP grade sheet for furniture and cabinet manufacturing",
    featuredImage:
      "/images/products/supporting-boards/birch-plywood-bb-cp-grade-4x8/image-01.jpg",
    gallery: [
      "/images/products/supporting-boards/birch-plywood-bb-cp-grade-4x8/image-01.jpg",
      "/images/products/supporting-boards/birch-plywood-bb-cp-grade-4x8/image-02.jpg",
      "/images/products/supporting-boards/birch-plywood-bb-cp-grade-4x8/image-03.jpg",
      "/images/products/supporting-boards/birch-plywood-bb-cp-grade-4x8/image-04.jpg",
      "/images/products/supporting-boards/birch-plywood-bb-cp-grade-4x8/image-05.jpg",
      "/images/products/supporting-boards/birch-plywood-bb-cp-grade-4x8/image-06.jpg",
    ],
    overview: "",
    faqs: [],
    relatedProducts: [],
    updatedAt: "2026-07-02",
  },
  {
    slug: "raw-mdf-panel-e1-grade",
    name: "Raw MDF Board 18mm | Plain Fibreboard Panel | China MDF Board Supplier",
    seoTitle: "Raw MDF Board 18mm | Plain Fibreboard Panel | China MDF Board Supplier",
    metaDescription: "Raw MDF board 18mm in 1220x2440mm sheets for furniture, cabinets, doors and interior panels. Plain fibreboard with custom size options.",
    code: "SBP-MDF-RAW-MDF-PANEL-E1-GRADE",
    category: "Supporting Boards",
    subCategory: "Raw MDF",
    subCategorySlug: "raw-mdf",
    shortDesc: "Plain raw MDF board in 18mm 1220x2440mm sheet format for furniture, cabinets, doors and interior panel manufacturing.",
    tags: [
      "Raw MDF Board",
      "MDF Board 18mm",
      "Plain MDF Board",
      "MDF Fibreboard",
      "1220x2440 MDF Board",
      "MDF Board for Furniture",
      "MDF Board for Cabinets",
      "MDF Panel Supplier",
      "China MDF Board Supplier"
    ],
    specs: {
      productType: "Raw MDF Board",
      veneerSpecies: "Raw MDF",
      cuttingMethod: "N/A",
      grainPattern: "Uniform Fibre Surface",
      veneerThickness: "18 mm",
      sheetSize: "1220 x 2440 mm / 4 x 8 ft",
      application: "Furniture, cabinets, doors, wall panels and interior substrates",
      moq: "Discussed per order",
      leadTime: "Normally about 10 to 25 days, depends on quantity and requirement",
      packaging: "Wooden frame packaging, in bulk, custom packaging"
    },

    imageAlt: "18mm raw MDF board 1220x2440mm plain fibreboard panel for furniture and cabinets",
    featuredImage: "/images/products/supporting-boards/raw-mdf-panel-e1-grade/image-00.jpg",
    gallery: [
      "/images/products/supporting-boards/raw-mdf-panel-e1-grade/image-00.jpg",
      "/images/products/supporting-boards/raw-mdf-panel-e1-grade/image-01.jpg",
      "/images/products/supporting-boards/raw-mdf-panel-e1-grade/image-02.jpg",
      "/images/products/supporting-boards/raw-mdf-panel-e1-grade/image-03.jpg",
      "/images/products/supporting-boards/raw-mdf-panel-e1-grade/image-04.jpg",
      "/images/products/supporting-boards/raw-mdf-panel-e1-grade/image-05.jpg"
    ],
    overview: "Raw MDF board is a plain medium density fibreboard panel used as a stable substrate for furniture, cabinets, doors, wall panels and interior manufacturing. The 18mm 1220x2440mm format is widely used by workshops and panel distributors for cutting, laminating, veneering and decorative surface processing.",
    faqs: [
      { q: "What is raw MDF board used for?", a: "Raw MDF board is commonly used as a substrate for furniture, cabinets, doors, wall panels and decorative surface processing such as veneering, laminating or painting." },
      { q: "What size is this raw MDF panel?", a: "The reference size is 1220 x 2440 mm, also known as 4 x 8 ft. Other sizes and thicknesses can be discussed according to project requirements." },
      { q: "Is 18mm MDF suitable for cabinets?", a: "Yes. 18mm MDF is widely used for cabinet bodies, wardrobe panels and furniture components where a smooth and stable board surface is required." },
      { q: "Can raw MDF be laminated or veneered?", a: "Yes. Raw MDF can be used as a base board for melamine, wood veneer, paint, PVC-free decorative surfaces and other panel finishing processes." },
      { q: "Can you supply custom MDF board specifications?", a: "Yes. Thickness, board size, density, sanding quality and packing can be arranged based on order requirements." }
    ],
    relatedProducts: [],
    updatedAt: "2026-07-02",
  },
  {
    slug: "fireproof-mdf-flame-retardant",
    name: "Fireproof MDF Board | Flame-Retardant Panel | China Fire Rated MDF Supplier",
    seoTitle: "Fireproof MDF Board | Flame-Retardant Panel | China Fire Rated MDF Supplier",
    metaDescription: "Fireproof MDF board for furniture, doors, wall panels and commercial interiors. Flame-retardant MDF sheets with custom sizes and thickness options.",
    code: "SBP-MDF-FIREPROOF-MDF-FLAME-RETA",
    category: "Supporting Boards",
    subCategory: "Fireproof MDF",
    subCategorySlug: "fireproof-mdf",
    shortDesc: "Flame-retardant MDF board for furniture, doors, wall panels and commercial interior panel applications requiring improved fire performance.",
    tags: [
      "Fireproof MDF Board",
      "Fire Rated MDF",
      "Flame Retardant MDF",
      "FR MDF Board",
      "Fire Resistant MDF Board",
      "MDF Board for Doors",
      "MDF Wall Panel",
      "Fireproof MDF Supplier",
      "China Fire Rated MDF"
    ],
    specs: {
      productType: "Fireproof MDF Board / Flame-Retardant MDF",
      veneerSpecies: "Fireproof MDF",
      cuttingMethod: "N/A",
      grainPattern: "Uniform Fibre Surface",
      veneerThickness: "Custom thickness available, including 12 mm, 16 mm, 18 mm or project-specific options",
      sheetSize: "1220 x 2440 mm / custom",
      application: "Doors, furniture, wall panels and commercial interiors",
      moq: "Discussed per order",
      leadTime: "Normally about 10 to 25 days, depends on quantity and requirement",
      packaging: "Wooden frame packaging, in bulk, custom packaging"
    },

    imageAlt: "fireproof MDF board flame retardant MDF panel for doors wall panels and commercial interiors",
    featuredImage: "/images/products/supporting-boards/fireproof-mdf-flame-retardant/image-00.jpg",
    gallery: [
      "/images/products/supporting-boards/fireproof-mdf-flame-retardant/image-00.jpg",
      "/images/products/supporting-boards/fireproof-mdf-flame-retardant/image-01.jpg",
      "/images/products/supporting-boards/fireproof-mdf-flame-retardant/image-02.jpg",
      "/images/products/supporting-boards/fireproof-mdf-flame-retardant/image-03.jpg",
      "/images/products/supporting-boards/fireproof-mdf-flame-retardant/image-04.jpg",
      "/images/products/supporting-boards/fireproof-mdf-flame-retardant/image-05.jpg",
      "/images/products/supporting-boards/fireproof-mdf-flame-retardant/image-06.jpg"
    ],
    overview: "Fireproof MDF board is designed for furniture, door, wall panel and commercial interior applications where improved fire-retardant performance is required. It can be used as a substrate for decorative panels and interior components, with size, thickness and packing options adjusted to order needs.",
    faqs: [
      { q: "What is fireproof MDF board?", a: "Fireproof MDF, also called flame-retardant MDF or FR MDF, is an MDF panel made for applications requiring improved fire-retardant performance compared with standard MDF." },
      { q: "Where is fire rated MDF commonly used?", a: "It is commonly used for doors, partitions, wall panels, furniture, display fixtures and commercial interior projects where fire performance is part of the specification." },
      { q: "Can fireproof MDF be customized?", a: "Yes. Thickness, size, surface processing and packing can be discussed according to the order and project requirements." },
      { q: "Can you provide fire performance information?", a: "Fire performance should be confirmed based on the requested standard, product specification and available test documents for the order." },
      { q: "Can fireproof MDF be used as a decorative panel substrate?", a: "Yes. It can be used as a substrate for decorative finishes, laminated panels, veneer panels and other interior components when the surface process is suitable." }
    ],
    relatedProducts: [],
    updatedAt: "2026-07-02",
  },
  {
    slug: "mr-mdf-moisture-resistant",
    name: "MR MDF Board 18mm | Moisture-Resistant Green Panel | China MDF Supplier",
    seoTitle: "MR MDF Board 18mm | Moisture-Resistant Green Panel | China MDF Supplier",
    metaDescription: "MR MDF board in green moisture-resistant panel options for cabinets, wardrobes, furniture and interior applications. 12mm, 16mm and 18mm available.",
    code: "SBP-MDF-MR-MDF-MOISTURE-RESISTAN",
    category: "Supporting Boards",
    subCategory: "MR MDF",
    subCategorySlug: "mr-mdf",
    shortDesc: "Moisture-resistant MR MDF board for cabinets, wardrobes, furniture and interior panel applications, with 12mm, 16mm and 18mm options.",
    tags: [
      "MR MDF Board",
      "Moisture Resistant MDF",
      "HMR MDF Board",
      "Green MDF Board",
      "18mm MR MDF",
      "12mm MDF Board",
      "16mm MDF Board",
      "MDF Board for Cabinets",
      "China MDF Supplier"
    ],
    specs: {
      productType: "MR MDF Board / Moisture-Resistant MDF",
      veneerSpecies: "MR MDF",
      cuttingMethod: "N/A",
      grainPattern: "Uniform Fibre Surface",
      veneerThickness: "12 mm, 16 mm, 18 mm or custom thickness",
      sheetSize: "1220 x 2440 mm / custom",
      application: "Cabinets, wardrobes, furniture and interior panels",
      moq: "Discussed per order",
      leadTime: "Normally about 10 to 25 days, depends on quantity and requirement",
      packaging: "Wooden frame packaging, in bulk, custom packaging"
    },

    imageAlt: "green moisture-resistant MR MDF board 12mm 16mm 18mm panel for cabinets and furniture",
    featuredImage: "/images/products/supporting-boards/mr-mdf-moisture-resistant/image-00.jpg",
    gallery: [
      "/images/products/supporting-boards/mr-mdf-moisture-resistant/image-00.jpg",
      "/images/products/supporting-boards/mr-mdf-moisture-resistant/image-01.jpg",
      "/images/products/supporting-boards/mr-mdf-moisture-resistant/image-02.jpg",
      "/images/products/supporting-boards/mr-mdf-moisture-resistant/image-03.jpg",
      "/images/products/supporting-boards/mr-mdf-moisture-resistant/image-04.jpg",
      "/images/products/supporting-boards/mr-mdf-moisture-resistant/image-05.jpg"
    ],
    overview: "MR MDF board, also known as moisture-resistant MDF or HMR MDF, is used for cabinets, wardrobes, furniture and interior panels in environments where improved moisture resistance is needed. Green MR MDF panels are commonly requested in 12mm, 16mm and 18mm thicknesses for B2B furniture and interior projects.",
    faqs: [
      { q: "What is MR MDF board?", a: "MR MDF stands for moisture-resistant MDF. It is designed to offer improved resistance to humidity compared with standard MDF, depending on board grade and application conditions." },
      { q: "Is MR MDF waterproof?", a: "MR MDF is moisture-resistant, not fully waterproof. It is suitable for humid indoor applications when the correct grade, edge sealing and surface finish are used." },
      { q: "What thicknesses are available for MR MDF?", a: "Common requested thicknesses include 12mm, 16mm and 18mm. Other thicknesses can be discussed based on order requirements." },
      { q: "Can MR MDF be used for cabinets?", a: "Yes. MR MDF is commonly used for cabinets, wardrobes and furniture panels, especially where better moisture resistance is required compared with standard MDF." },
      { q: "Can you supply custom MR MDF panels?", a: "Yes. Size, thickness, density, surface processing and packing can be customized according to project or wholesale needs." }
    ],
    relatedProducts: [],
    updatedAt: "2026-07-02",
  },
  {
    slug: "particle-board-furniture-grade",
    name: "Furniture Grade Particle Board",
    productName:
      "Particle Board Sheet | Furniture Grade Cabinet Panel | China Particle Board Supplier",
    h1Title:
      "Particle Board Sheet | Furniture Grade Cabinet Panel | China Particle Board Supplier",
    seoTitle:
      "Particle Board Sheet | Furniture Grade Cabinet Panel | China Particle Board Supplier",
    metaDescription:
      "Furniture grade particle board sheet for cabinets, wardrobes, shelves and interior panels. Custom thickness, size, surface finish and packing available.",
    code: "SBP-PB-FG-001",
    category: "Supporting Boards",
    categorySlug: "supporting-boards",
    subCategory: "Particle Board",
    subCategorySlug: "particle-board",
    shortDescription:
      "Furniture grade particle board sheet for cabinets, wardrobes, shelves, interior panels and cost-effective board manufacturing.",
    shortDesc:
      "Furniture grade particle board sheet for cabinets, wardrobes, shelves, interior panels and cost-effective board manufacturing.",
    tags: [
      "Particle Board",
      "Particle Board Sheet",
      "Furniture Grade Particle Board",
      "Cabinet Particle Board",
      "Particle Board Panel",
      "Wood Particle Board",
      "Custom Size Particle Board",
      "Interior Panel Board",
      "China Particle Board Supplier",
      "Board Manufacturer",
    ],
    specs: {
      productType: "Particle Board",
      veneerSpecies: "N/A",
      cuttingMethod: "N/A",
      grainPattern: "Uniform Particle Surface",
      veneerThickness: "Custom thickness available by order",
      sheetSize: "1220 x 2440 mm or custom size by order",
      moq: "Discussed per order",
      leadTime: "Normally about 10 to 25 days, depends on quantity and requirement",
      packaging:
        "Wooden frame packaging, in bulk, custom packaging, export pallet",
      application:
        "Cabinets, wardrobes, shelves, furniture parts and interior panels",
      surface:
        "Raw board or custom laminated surface by project requirement",
      customization: "Thickness, size, density, surface finish and packing",
    },
    imageAlt:
      "furniture grade particle board sheet for cabinet wardrobe and interior panel manufacturing",
    featuredImage:
      "/images/products/supporting-boards/particle-board-furniture-grade/image-01.jpg",
    gallery: [
      "/images/products/supporting-boards/particle-board-furniture-grade/image-01.jpg",
      "/images/products/supporting-boards/particle-board-furniture-grade/image-02.jpg",
      "/images/products/supporting-boards/particle-board-furniture-grade/image-03.jpg",
      "/images/products/supporting-boards/particle-board-furniture-grade/image-04.jpg",
    ],
    overview:
      "This furniture grade particle board sheet is designed for cabinet, wardrobe, shelf, furniture and interior panel applications. It offers a cost-effective substrate option for manufacturers and wholesalers who need stable wood-based panels in customizable specifications.",
    applications: [
      "Cabinet and wardrobe manufacturing",
      "Furniture components",
      "Shelving and storage panels",
      "Interior panel applications",
      "Wholesale board supply",
    ],
    faqs: [
      {
        q: "What is particle board used for?",
        a: "Particle board is commonly used for cabinets, wardrobes, shelves, furniture components and interior panels where a cost-effective wood-based board is required.",
      },
      {
        q: "Is particle board suitable for cabinets?",
        a: "Yes. Furniture grade particle board is often used for cabinet and wardrobe components, especially when combined with melamine, veneer or other decorative surfaces.",
      },
      {
        q: "Can particle board be customized?",
        a: "Yes. Thickness, size, density, surface finish and packing can be customized according to manufacturing or project requirements.",
      },
    ],
    relatedProducts: [],
    updatedAt: "2026-07-02",
  },
];

export function getSupportingBoardProductBySlug(
  slug: string,
): SupportingBoardProduct | undefined {
  return supportingBoardsProducts.find((p) => p.slug === slug);
}

export function getAllSupportingBoardProductSlugs(): string[] {
  return supportingBoardsProducts.map((p) => p.slug);
}

export function getSupportingBoardRelatedProducts(
  currentSlug: string,
  limit: number = 4,
): SupportingBoardProduct[] {
  const current = supportingBoardsProducts.find((p) => p.slug === currentSlug);
  const currentSubCategorySlug = current?.subCategorySlug;
  const sameSubCategory = currentSubCategorySlug
    ? supportingBoardsProducts.filter(
        (p) => p.subCategorySlug === currentSubCategorySlug && p.slug !== currentSlug,
      )
    : [];
  const otherSubCategory = supportingBoardsProducts.filter(
    (p) => p.subCategorySlug !== currentSubCategorySlug && p.slug !== currentSlug,
  );
  return [...sameSubCategory, ...otherSubCategory].slice(0, limit);
}
