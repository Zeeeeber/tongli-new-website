/**
 * Natural Wood Veneer Products Data
 * 
 * This file contains product data for the Natural Wood Veneer category.
 * Data format is compatible with WordPress REST API response structure.
 * 
 * Future: Replace with WordPress API fetch when CMS is integrated.
 */

export interface NaturalWoodVeneerProduct {
  slug: string;
  name: string;
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
  overview: string;
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

/**
 * Natural Wood Veneer Products
 */
export const naturalWoodVeneerProducts: NaturalWoodVeneerProduct[] = [
  {
    slug: "rift-cut-white-oak",
    name: "Rift Cut White Oak Natural Wood Veneer",
    code: "NV-RCWO-001",
    category: "Natural Wood Veneer",
    shortDesc: "Premium rift cut white oak natural wood veneer with straight, tight grain patterns. Ideal for furniture, cabinet doors, architectural panels and high-end interior decoration.",
    tags: ["Natural Wood Veneer", "Rift Cut", "White Oak", "Architectural Grade"],
    specs: {
      productType: "Natural Wood Veneer",
      veneerSpecies: "White Oak (Quercus alba)",
      cuttingMethod: "Rift Cut",
      grainPattern: "Straight, tight parallel grain",
      veneerThickness: "0.3mm - 0.6mm",
      sheetSize: "2500×640mm / 2800×640mm / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Paper interleaving + wooden crate",
      application: "Furniture, Cabinet Doors, Wall Panels, Architectural Details",
    },
    overview: `This premium rift cut white oak natural wood veneer features straight, tight grain lines that create a refined and consistent appearance across large surface areas. The rift cutting method produces narrower and more uniform grain patterns compared to plain sawn veneer, making it particularly suitable for contemporary and minimalist design styles.

White oak is known for its excellent durability, attractive light golden-brown color and subtle ray fleck that becomes more visible under certain lighting conditions. Our rift cut white oak veneer is carefully sliced from sustainably sourced logs, sorted by grain consistency and thickness, then bundled and packaged to maintain flatness during transport.

This veneer is widely used in high-end furniture manufacturing, luxury cabinet production, architectural wall panels, door faces, and other interior decoration applications where consistent grain patterns and premium quality are required.`,
    featured: true,
    updatedAt: "2026-05-01",
  },
  {
    slug: "plain-sawn-white-oak",
    name: "Plain Sawn White Oak Natural Wood Veneer",
    code: "NV-CCWO-001",
    category: "Natural Wood Veneer",
    shortDesc: "Classic plain sawn white oak veneer with beautiful cathedral grain patterns. Perfect for traditional and contemporary furniture designs.",
    tags: ["Natural Wood Veneer", "Plain Sawn", "White Oak", "Cathedral Grain"],
    specs: {
      productType: "Natural Wood Veneer",
      veneerSpecies: "White Oak (Quercus alba)",
      cuttingMethod: "Plain Sawn (Flat Cut)",
      grainPattern: "Cathedral and straight grain mix",
      veneerThickness: "0.3mm - 0.6mm",
      sheetSize: "2500×640mm / 2800×640mm / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Paper interleaving + wooden crate",
      application: "Furniture, Cabinet Doors, Wall Panels, Interior Decoration",
    },
    overview: `This classic plain sawn white oak natural wood veneer displays the characteristic cathedral or V-shaped grain patterns that are highly valued in traditional woodworking. The plain cutting method maximizes yield from each log while producing visually distinctive patterns.

White oak combines excellent durability with an attractive light to medium golden-brown color that darkens beautifully with age. The prominent grain patterns add character and warmth to any application.`,
    featured: false,
    updatedAt: "2026-05-01",
  },
  {
    slug: "american-walnut",
    name: "American Walnut Natural Wood Veneer",
    code: "NV-WAL-001",
    category: "Natural Wood Veneer",
    shortDesc: "Rich American black walnut veneer with dark chocolate tones. Premium choice for luxury furniture and high-end interiors.",
    tags: ["Natural Wood Veneer", "Black Walnut", "American Walnut", "Premium Grade"],
    specs: {
      productType: "Natural Wood Veneer",
      veneerSpecies: "American Black Walnut (Juglans nigra)",
      cuttingMethod: "Plain Sawn / Rift Cut",
      grainPattern: "Straight to irregular grain",
      veneerThickness: "0.3mm - 0.6mm",
      sheetSize: "2500×640mm / 2800×640mm / Custom",
      moq: "100 sheets",
      leadTime: "15-25 days",
      packaging: "Paper interleaving + wooden crate",
      application: "High-end Furniture, Luxury Interiors, Cabinetry, Wall Panels",
    },
    overview: `American black walnut is one of the most prized hardwoods in the world, known for its rich chocolate-brown color with subtle purple undertones. Our walnut veneer is carefully selected to showcase the natural beauty of this exceptional wood species.

The grain patterns range from straight to figured, with occasional burls and swirls that add unique character. Walnut develops a beautiful patina over time, becoming richer and more distinguished with age.`,
    featured: true,
    updatedAt: "2026-05-01",
  },
  {
    slug: "teak",
    name: "Teak Natural Wood Veneer",
    code: "NV-TEK-001",
    category: "Natural Wood Veneer",
    shortDesc: "Durable teak veneer with natural golden color and straight grain. Excellent for indoor and semi-outdoor applications.",
    tags: ["Natural Wood Veneer", "Teak", "Golden Color", "Durable"],
    specs: {
      productType: "Natural Wood Veneer",
      veneerSpecies: "Teak (Tectona grandis)",
      cuttingMethod: "Plain Sawn / Rift Cut",
      grainPattern: "Straight to slightly interlocked",
      veneerThickness: "0.3mm - 0.6mm",
      sheetSize: "2500×640mm / 2800×640mm / Custom",
      moq: "100 sheets",
      leadTime: "15-25 days",
      packaging: "Paper interleaving + wooden crate",
      application: "Furniture, Doors, Wall Panels, Marine Interiors",
    },
    overview: `Teak is renowned worldwide for its exceptional durability and natural beauty. The wood contains natural oils that provide resistance to moisture, insects, and decay, making it one of the most valuable hardwood species.

Our teak veneer showcases the species' characteristic golden-brown color that weathers to an attractive silver-gray if left unfinished outdoors. The grain is typically straight, though it can be wavy, and the texture is even and coarse.`,
    featured: false,
    updatedAt: "2026-05-01",
  },
  {
    slug: "smoked-oak",
    name: "Smoked Oak Natural Wood Veneer",
    code: "NV-SMO-001",
    category: "Natural Wood Veneer",
    shortDesc: "Thermo-treated smoked oak veneer with rich dark tones. Fuming process creates uniform color throughout the wood.",
    tags: ["Natural Wood Veneer", "Smoked Oak", "Dark Oak", "Thermo Treated"],
    specs: {
      productType: "Natural Wood Veneer",
      veneerSpecies: "European Oak (Quercus robur)",
      cuttingMethod: "Plain Sawn / Rift Cut",
      grainPattern: "Straight to medium grain",
      veneerThickness: "0.3mm - 0.6mm",
      sheetSize: "2500×640mm / 2800×640mm / Custom",
      moq: "100 sheets",
      leadTime: "15-25 days",
      packaging: "Paper interleaving + wooden crate",
      application: "Furniture, Wall Panels, Doors, Luxury Interiors",
    },
    overview: `Smoked oak undergoes a special fuming or thermo-treatment process that reacts with the natural tannins in the wood, creating deep, rich brown tones that penetrate throughout the veneer thickness. Unlike stained wood, the smoked color is permanent and will not fade.

This treatment produces consistent color variation across different pieces, making it easier to achieve uniform appearance in large installations.`,
    featured: true,
    updatedAt: "2026-05-01",
  },
  {
    slug: "cherry",
    name: "American Cherry Natural Wood Veneer",
    code: "NV-CHR-001",
    category: "Natural Wood Veneer",
    shortDesc: "Warm American cherry veneer that deepens to rich red-brown tones. Popular in traditional and craftsman style furniture.",
    tags: ["Natural Wood Veneer", "Cherry", "American Cherry", "Warm Tones"],
    specs: {
      productType: "Natural Wood Veneer",
      veneerSpecies: "American Cherry (Prunus serotina)",
      cuttingMethod: "Plain Sawn",
      grainPattern: "Straight to figured grain",
      veneerThickness: "0.3mm - 0.6mm",
      sheetSize: "2500×640mm / 2800×640mm / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Paper interleaving + wooden crate",
      application: "Furniture, Cabinetry, Interior Millwork, Wall Panels",
    },
    overview: `American cherry is prized for its warm, reddish-brown color that deepens beautifully with age and exposure to light. The wood has a fine, uniform texture with a natural luster that requires minimal finishing.

Cherry is one of the most cooperative species to work with, machining cleanly and accepting stains and finishes exceptionally well.`,
    featured: false,
    updatedAt: "2026-05-01",
  },
  {
    slug: "ash",
    name: "White Ash Natural Wood Veneer",
    code: "NV-ASH-001",
    category: "Natural Wood Veneer",
    shortDesc: "Light colored ash veneer with bold grain patterns. Excellent strength-to-weight ratio for structural applications.",
    tags: ["Natural Wood Veneer", "White Ash", "Light Color", "Strong Grain"],
    specs: {
      productType: "Natural Wood Veneer",
      veneerSpecies: "White Ash (Fraxinus americana)",
      cuttingMethod: "Plain Sawn / Rift Cut",
      grainPattern: "Bold straight grain",
      veneerThickness: "0.3mm - 0.6mm",
      sheetSize: "2500×640mm / 2800×640mm / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Paper interleaving + wooden crate",
      application: "Furniture, Cabinetry, Sports Equipment, Architectural Panels",
    },
    overview: `White ash features a light cream to pale yellow color with bold, distinctive grain patterns that create dramatic visual effects. The wood is known for its excellent strength properties and shock resistance.

Ash is increasingly valued as a substitute for oak when a lighter color palette is desired.`,
    featured: false,
    updatedAt: "2026-05-01",
  },
  {
    slug: "maple",
    name: "Hard Maple Natural Wood Veneer",
    code: "NV-MAP-001",
    category: "Natural Wood Veneer",
    shortDesc: "Light, uniform maple veneer with subtle grain. Ideal for contemporary designs and painted or stained finishes.",
    tags: ["Natural Wood Veneer", "Maple", "Hard Maple", "Light Color"],
    specs: {
      productType: "Natural Wood Veneer",
      veneerSpecies: "Hard Maple (Acer saccharum)",
      cuttingMethod: "Plain Sawn / Rift Cut",
      grainPattern: "Fine, uniform grain",
      veneerThickness: "0.3mm - 0.6mm",
      sheetSize: "2500×640mm / 2800×640mm / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Paper interleaving + wooden crate",
      application: "Furniture, Cabinetry, Countertops, Architectural Panels",
    },
    overview: `Hard maple features a creamy white to light reddish-brown color with a fine, uniform texture. The subtle grain patterns make it ideal for contemporary designs and applications where a clean, consistent appearance is desired.

Maple is extremely durable and takes stain and finish well, though it can be challenging with some dark stains due to its closed grain.`,
    featured: false,
    updatedAt: "2026-05-01",
  },
];

/**
 * Related products for Natural Wood Veneer category
 */
export const naturalWoodVeneerRelatedProducts: RelatedProduct[] = [
  {
    name: "Plain Sawn White Oak",
    code: "NV-CCWO-01",
    species: "White Oak",
    cut: "Plain Sawn",
    href: "/products/natural-wood-veneer/plain-sawn-white-oak",
    gradient: "from-[#D4B896] to-[#B8956A]",
  },
  {
    name: "American Walnut",
    code: "NV-WAL-01",
    species: "Walnut",
    cut: "Plain Sawn",
    href: "/products/natural-wood-veneer/american-walnut",
    gradient: "from-[#5C4033] to-[#3D2914]",
  },
  {
    name: "Engineered White Oak",
    code: "EV-CCWO-01",
    species: "White Oak",
    cut: "Engineered",
    href: "/products/engineered-wood-veneer/oak-classic",
    gradient: "from-[#D4C4B0] to-[#B8A48C]",
  },
  {
    name: "White Oak Veneer Panel",
    code: "VP-WO-01",
    species: "White Oak",
    cut: "Veneer on Plywood",
    href: "/products/wood-veneer-panels/white-oak-veneer-plywood",
    gradient: "from-[#C8A97E] to-[#A68B5E]",
  },
];

/**
 * Default FAQ items for Natural Wood Veneer category
 */
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
];

/**
 * Get product by slug
 */
export function getProductBySlug(slug: string): NaturalWoodVeneerProduct | undefined {
  return naturalWoodVeneerProducts.find((p) => p.slug === slug);
}

/**
 * Get featured products
 */
export function getFeaturedProducts(): NaturalWoodVeneerProduct[] {
  return naturalWoodVeneerProducts.filter((p) => p.featured);
}

/**
 * Get all product slugs (for sitemap generation)
 */
export function getAllProductSlugs(): string[] {
  return naturalWoodVeneerProducts.map((p) => p.slug);
}
