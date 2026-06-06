/**
 * Wood Veneer Panel Products Data
 * 
 * This file contains detailed product data for Wood Veneer Panel detail pages.
 */

export interface WoodVeneerPanelProduct {
  slug: string;
  name: string;
  code: string;
  category: string;
  shortDesc: string;
  tags: string[];
  specs: Record<string, string>;
  seoTitle: string;
  metaDescription: string;
  imageAlt: string;
  overview: string;
  faqs: { q: string; a: string }[];
  relatedProducts: { name: string; href: string }[];
}

export const woodVeneerPanelProducts: Record<string, WoodVeneerPanelProduct> = {
  "white-oak-veneer-plywood": {
    slug: "white-oak-veneer-plywood",
    name: "White Oak Veneer Plywood",
    code: "WVP-WO-001",
    category: "Wood Veneer Panels",
    shortDesc: "White oak veneer plywood with a natural wood surface and stable plywood substrate, suitable for furniture, doors, cabinets and interior wall panel applications.",
    tags: [
      "Wood Veneer Panel",
      "White Oak Veneer Plywood",
      "Veneer Plywood",
      "Natural Wood Surface",
      "Furniture Panel",
      "Door Panel",
      "Cabinet Panel",
      "Wall Panel",
    ],
    specs: {
      productType: "Wood Veneer Panel",
      faceVeneer: "White Oak Veneer",
      substrate: "Plywood / MDF / Custom",
      panelSize: "1220x2440mm / 4x8ft / Custom",
      panelThickness: "3mm - 25mm / Custom",
      veneerThickness: "0.2mm - 0.6mm / Custom",
      surfaceFinish: "Sanded / UV Coated / Open Paint / Closed Paint",
      glueGrade: "E0 / E1 / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Pallet packing / Wooden crate / Export packaging",
      application: "Furniture, Doors, Cabinets, Wall Panels, Interior Decoration",
    },
    seoTitle: "White Oak Veneer Plywood - Natural Wood Surface Panel | Tongli Timber",
    metaDescription: "Premium white oak veneer plywood featuring natural wood grain surface bonded to stable plywood substrate. Ideal for furniture manufacturing, door production, cabinet making and interior wall panel applications. E0 grade adhesive available.",
    imageAlt: "White Oak Veneer Plywood panel with natural wood grain surface",
    overview: `White oak veneer plywood combines the timeless beauty of natural white oak with the structural reliability of a high-quality plywood substrate. This decorative panel solution delivers authentic wood aesthetics while offering superior stability and workability compared to solid wood.

The natural white oak veneer face showcases distinctive grain patterns and warm, inviting tones that enhance any interior space. Each panel features carefully selected veneer with consistent color and grain direction, providing a premium appearance suitable for visible surfaces in furniture, cabinetry, wall paneling, and architectural applications.

The plywood substrate beneath the veneer face ensures dimensional stability, preventing the warping and cracking often associated with solid wood panels. This construction makes our white oak veneer plywood ideal for manufacturing processes involving cutting, routing, drilling, and edge finishing.

Available in various thicknesses from 3mm to 25mm to meet different application requirements. Surface treatment options include sanded ready-to-finish, UV coating for immediate use, and various paint finishes. The E0 grade adhesive system meets international environmental standards for indoor applications, making these panels safe for residential furniture and children's furniture production.

Sample consultation and custom specifications are available for project requirements. Contact our team for technical specifications, pricing, and lead time information.`,
    faqs: [
      {
        q: "What payment terms do you accept?",
        a: "Payment terms: TT in advance (30% of deposit before production and 70% balance before shipment), banktransfer, LC etc. Please note we do EXW/FOB/CNF/CIF/DDU/DDP.",
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
    ],
    relatedProducts: [
      {
        name: "Natural Wood Veneer Sheets",
        href: "/products/natural-wood-veneer",
      },
      {
        name: "Engineered Oak Veneer Panel",
        href: "/products/engineered-wood-veneer/oak-classic",
      },
      {
        name: "Walnut Wood Veneer Plywood",
        href: "/products/wood-veneer-panels",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
};
