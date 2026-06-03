/**
 * Product Details Data
 * 
 * This file contains detailed product data for product detail pages.
 * Each product has its own section with specs, FAQs, related products, etc.
 */

export interface ProductDetailData {
  slug: string;
  name: string;
  code: string;
  category: string;
  shortDesc: string;
  tags: string[];
  specs: Record<string, string>;
  overview: string;
  accentColor: string;
  faqs: { q: string; a: string }[];
  relatedProducts: { name: string; href: string }[];
}

/**
 * Wood Veneer Panel Products
 */
export const woodVeneerPanelProducts: Record<string, ProductDetailData> = {
  "white-oak-veneer-plywood": {
    slug: "white-oak-veneer-plywood",
    name: "White Oak Wood Veneer Plywood",
    code: "WVP-WO-001",
    category: "Wood Veneer Panels",
    shortDesc: "Premium white oak veneer laminated onto high-quality birch plywood substrate. Perfect for furniture, cabinets, doors, and interior wall paneling applications.",
    tags: ["Wood Veneer Panel", "White Oak", "Birch Plywood", "E0 Grade"],
    specs: {
      faceVeneer: "White Oak (Natural)",
      substrate: "Birch Plywood",
      panelSize: "1220×2440mm",
      panelThickness: "18mm",
      veneerThickness: "0.5mm",
      surfaceFinish: "Sanded Smooth",
      glueGrade: "E0 (CARB P2)",
      moq: "50 sheets",
      leadTime: "15-25 days",
    },
    overview: `This premium wood veneer plywood combines the natural beauty of white oak with the structural reliability of birch plywood substrate. Each panel features a carefully selected white oak veneer face with consistent grain patterns and warm, inviting tones that enhance any interior space.

The 0.5mm veneer thickness provides an excellent balance between material efficiency and authentic wood feel, making it ideal for visible surfaces in furniture manufacturing, cabinet production, interior wall paneling, and architectural applications. The E0 grade adhesive system ensures minimal formaldehyde emissions, meeting international environmental standards for indoor applications.

Our wood veneer panels are manufactured with strict quality control procedures including color and grain matching, moisture content verification, and surface inspection before shipment. Available in various thicknesses from 12mm to 25mm, and can be customized with different surface finishes including sanded, UV lacquer, or raw for your specific finishing requirements.`,
    accentColor: "#0F6B3A",
    faqs: [
      { q: "What payment terms do you accept?", a: "Payment terms: TT in advance (30% of deposit before production and 70% balance before shipment), bank transfer, LC etc. Please note we do EXW/FOB/CNF/CIF/DDU/DDP." },
      { q: "What is the average lead time?", a: "It depends on the product type and order quantity. Usually we can ship within 7 days for normal orders after receiving full payment. But for large orders, we need about 15 to 20 days." },
      { q: "Can you supply the relevant documentation?", a: "Yes, we can provide most documentation including Certificate of Origin, Phytosanitary Certificate, Bill of Lading, Commercial Invoice, Packing List, etc." },
      { q: "What is your main customer group?", a: "Our main customers are fancy plywood wholesalers, furniture factories, door factories, whole-house customization factories, cabinet production enterprises, hotel construction and decoration / real estate decoration, and so on." },
      { q: "How can we make a deal easily if I have a specific sample in hand?", a: "You send us your sample abroad and tell us your specific requirements. Then we produce a relevant sample according to yours with quotation. And then we send you our sample to your country for your reference and confirmation." },
    ],
    relatedProducts: [
      { name: "Natural Wood Veneer Sheets", href: "/products/natural-wood-veneer" },
      { name: "Engineered Oak Veneer Panel", href: "/products/engineered-wood-veneer" },
      { name: "Walnut Wood Veneer Plywood", href: "/products/wood-veneer-panels/walnut-veneer-plywood" },
      { name: "Veneer Edge Banding", href: "/products/veneer-edge-banding" },
    ],
  },
};

/**
 * Engineered Wood Veneer Products
 */
export const engineeredWoodVeneerProducts: Record<string, ProductDetailData> = {
  "oak-classic": {
    slug: "oak-classic",
    name: "Oak Classic Engineered Wood Veneer",
    code: "TLE-001",
    category: "Engineered Wood Veneer",
    shortDesc: "Premium reconstituted oak veneer with consistent straight grain pattern. Color-stable and batch-uniform, perfect for large-scale furniture and cabinet production.",
    tags: ["Engineered", "Oak", "Reconstituted", "Color Stable"],
    specs: {
      pattern: "Oak Classic",
      colorTone: "Light",
      grainStyle: "Straight Grain",
      thickness: "0.5mm",
      size: "2450×1270mm",
      backing: "Fleece Backed (Optional)",
      moq: "200 sheets (~500 sqm)",
      packaging: "Paper interleaved, wooden pallet",
    },
    overview: `This Oak Classic engineered wood veneer features the timeless appeal of natural oak with the consistency and predictability that modern manufacturing requires. Each sheet is produced from carefully selected wood species through a process of dyeing, slicing, and reassembling to create a beautiful, uniform grain pattern.

The reconstituted manufacturing process ensures that every sheet matches precisely, eliminating the natural variations found in natural wood veneer. This consistency is particularly valuable for large-scale production runs where multiple sheets must align perfectly across doors, cabinet panels, or wall installations.

Engineered veneer offers significant advantages for furniture manufacturers, door producers, and commercial interior projects. Beyond consistency, it provides longer sheet lengths without joint lines, stable color reproduction batch after batch, and the flexibility to create custom patterns and tones that may not exist in nature.`,
    accentColor: "#0F6B3A",
    faqs: [
      { q: "What is the difference between engineered and natural veneer?", a: "Engineered veneer (reconstituted veneer) is manufactured from fast-growing wood species that are dyed, sliced, and reassembled to create consistent patterns. Natural veneer is sliced directly from real wood logs. Engineered veneer offers superior batch-to-batch consistency, longer sheet lengths, and more design flexibility." },
      { q: "How many patterns does your engineered veneer collection offer?", a: "We offer 300+ patterns in various wood species, colors, and grain styles. New patterns are developed regularly to meet market trends and customer requirements." },
      { q: "What backing options are available?", a: "Standard options include loose (unbacked), fleece backed, paper backed, and wood backed. Fleece backing provides flexibility for curved surfaces, while paper backing offers dimensional stability for flat panel applications." },
      { q: "Can I get custom patterns or colors?", a: "Yes, we offer custom pattern development and color matching for bulk orders. Contact our team with your reference samples, color specifications, or design concept for a custom quote." },
    ],
    relatedProducts: [
      { name: "Walnut Elite Engineered", href: "/products/engineered-wood-veneer/walnut-elite" },
      { name: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
      { name: "Engineered Oak Panel", href: "/products/engineered-wood-veneer/oak-engineered-panel" },
      { name: "Veneer Edge Banding", href: "/products/veneer-edge-banding" },
    ],
  },
};

/**
 * 3D Wood Panel Products
 */
export const threeDWoodPanelProducts: Record<string, ProductDetailData> = {
  "wave-pattern": {
    slug: "wave-pattern",
    name: "Wave Pattern 3D Wood Panel",
    code: "3D-WP-001",
    category: "3D Wood Panels",
    shortDesc: "Artistically carved solid wood panel featuring distinctive wave texture. Adds depth and visual interest to walls, doors, ceilings, and furniture surfaces.",
    tags: ["3D Panel", "Wave Pattern", "Solid Wood", "Decorative"],
    specs: {
      material: "Paulownia / Poplar Core",
      pattern: "Wave",
      panelSize: "1220×2440mm",
      panelThickness: "15mm",
      surface: "Sand smooth, ready to finish",
      finishRequired: "Paint, stain, or clear coat",
      installation: "Tongue & Groove / Adhesive + Nails",
      moq: "20 panels",
      packaging: "Carton + Pallet",
    },
    overview: `This Wave Pattern 3D wood panel showcases the elegant flow of ocean-inspired waves carved into solid wood. The distinctive three-dimensional texture creates dynamic visual depth that transforms ordinary walls and ceilings into stunning focal points.

Perfect for interior feature walls in residential and commercial spaces, hotel lobbies, restaurant interiors, and retail environments. The panel's design not only adds aesthetic value but also provides acoustic benefits by breaking up sound waves.

Manufactured from lightweight yet sturdy paulownia wood, these panels are easy to handle and install. The tongue and groove system ensures seamless panel-to-panel alignment, while the sand-smooth surface is ready for your choice of paint, stain, or clear coat finish.

Each panel is crafted with precision to ensure consistent depth and pattern repeat across multiple panels, allowing for uniform installations across large surfaces.`,
    accentColor: "#4C8A68",
    faqs: [
      { q: "What materials are used in 3D wood panels?", a: "Our 3D wood panels are made from paulownia wood with poplar core construction. Paulownia is chosen for its lightweight yet sturdy properties, excellent workability, and beautiful grain patterns. The combination provides panels that are easy to handle while maintaining structural integrity." },
      { q: "How are panels installed?", a: "Panels feature a tongue and groove system for seamless alignment. Installation involves applying construction adhesive to the wall or ceiling, then securing panels with finishing nails. Detailed installation guides are provided with each order. Professional installation is recommended for best results." },
      { q: "Can panels be used in bathrooms or wet areas?", a: "Standard 3D panels are recommended for interior dry areas only. For moisture-prone areas, additional sealing treatment is required. We recommend marine-grade finish or alternative materials for areas with direct water exposure." },
      { q: "What finish options work best?", a: "Panels accept paint, stain, and clear coats well due to the sand-smooth surface. Water-based finishes are recommended for environmental compliance. Clear lacquer preserves the natural wood appearance, while paint allows bold color statements." },
    ],
    relatedProducts: [
      { name: "Bamboo Weave Panel", href: "/products/3d-wood-panels/bamboo-weave" },
      { name: "Diamond Pattern Panel", href: "/products/3d-wood-panels/diamond-pattern" },
      { name: "Linear Slat Panel", href: "/products/3d-wood-panels/linear-slat" },
      { name: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
    ],
  },
};

/**
 * Get product by slug from all categories
 */
export function getProductDetailBySlug(
  category: string,
  slug: string
): ProductDetailData | undefined {
  switch (category) {
    case "wood-veneer-panels":
      return woodVeneerPanelProducts[slug];
    case "engineered-wood-veneer":
      return engineeredWoodVeneerProducts[slug];
    case "3d-wood-panels":
      return threeDWoodPanelProducts[slug];
    default:
      return undefined;
  }
}
