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
  featuredImage: string;
  gallery: string[];
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
    featuredImage: "",
    gallery: [],
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
  "birds-eye-maple-veneer-plywood": {
    slug: "birds-eye-maple-veneer-plywood",
    name: "Bird's Eye Maple Veneer Plywood",
    code: "WVP-BE-001",
    category: "Wood Veneer Panels",
    shortDesc: "Bird's eye maple veneer plywood with distinctive figure for furniture, cabinet doors, wall panels and high-end interior decoration.",
    tags: [
      "Bird's Eye Maple Veneer",
      "Maple Veneer Plywood",
      "Decorative Plywood",
      "Wood Veneer Panel",
      "Veneered Plywood",
      "Furniture Plywood",
      "Cabinet Panel",
    ],
    specs: {
      productType: "Wood Veneer Panel",
      faceVeneer: "Bird's Eye Maple Veneer",
      substrate: "Plywood / MDF / Custom",
      panelSize: "1220x2440mm / 4x8ft / Custom",
      panelThickness: "3mm - 25mm / Custom",
      veneerThickness: "0.2mm - 0.6mm / Custom",
      surfaceFinish: "Sanded / UV Coated / Open Paint / Closed Paint",
      glueGrade: "E0 / E1 / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Pallet packing / Wooden crate / Export packaging",
      application: "Furniture, Cabinet Doors, Wall Panels, High-end Interior Decoration",
    },
    seoTitle: "Bird's Eye Maple Veneer Plywood | Decorative Wood Veneer Panel",
    metaDescription: "Bird's eye maple veneer plywood with distinctive figure for furniture, cabinet doors, wall panels and high-end interior decoration.",
    featuredImage: "/images/products/wood-veneer-panels/birds-eye-maple-veneer-plywood/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/birds-eye-maple-veneer-plywood/image-01.jpg",
      "/images/products/wood-veneer-panels/birds-eye-maple-veneer-plywood/image-02.jpg",
      "/images/products/wood-veneer-panels/birds-eye-maple-veneer-plywood/image-03.jpg",
      "/images/products/wood-veneer-panels/birds-eye-maple-veneer-plywood/image-04.jpg",
    ],
    imageAlt: "Bird's Eye Maple Veneer Plywood panel with distinctive bird's eye figure",
    overview: `Bird's eye maple veneer plywood features one of nature's most distinctive and eye-catching wood figures. The small, swirling eye-like patterns created by irregular grain growth make this veneer highly prized for premium furniture, cabinet doors, and decorative wall panels.

This decorative plywood combines the unique beauty of bird's eye maple with the stability and workability of quality substrates. The figure is most pronounced in the heartwood and develops its characteristic pattern when the veneer is sliced at specific angles.

Each panel showcases carefully selected bird's eye maple veneer with consistent figure distribution. The natural light tones of the maple provide an elegant canvas that complements both modern and traditional interior design styles.

Suitable for high-end furniture manufacturing, luxury cabinet production, feature wall panels, and interior architectural details. The distinctive figure makes each piece unique while maintaining overall visual harmony.`,
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
        name: "White Oak Veneer Plywood",
        href: "/products/wood-veneer-panels/white-oak-veneer-plywood",
      },
      {
        name: "Engineered Wood Veneer",
        href: "/products/engineered-wood-veneer",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
  "4mm-sapele-mahogany-quarter-cut-veneer-plywood-4x8": {
    slug: "4mm-sapele-mahogany-quarter-cut-veneer-plywood-4x8",
    name: "4mm Sapele and Mahogany Quarter Cut Veneer Plywood 4x8",
    code: "WVP-SM-001",
    category: "Wood Veneer Panels",
    shortDesc: "4mm sapele and mahogany quarter cut veneer plywood in 4x8 size for doors, furniture panels, cabinets and decorative interiors.",
    tags: [
      "Sapele Veneer Plywood",
      "Mahogany Veneer Plywood",
      "Quarter Cut Veneer",
      "4mm Plywood",
      "4x8 Plywood",
      "Decorative Plywood",
      "Door Panel",
    ],
    specs: {
      productType: "Wood Veneer Panel",
      faceVeneer: "Sapele / Mahogany Veneer",
      substrate: "Plywood / MDF / Custom",
      panelSize: "1220x2440mm / 4x8ft / Custom",
      panelThickness: "4mm",
      veneerThickness: "0.2mm - 0.6mm / Custom",
      surfaceFinish: "Sanded / UV Coated / Open Paint / Closed Paint",
      glueGrade: "E0 / E1 / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Pallet packing / Wooden crate / Export packaging",
      application: "Doors, Furniture Panels, Cabinets, Decorative Interiors",
    },
    seoTitle: "4mm Sapele and Mahogany Quarter Cut Veneer Plywood 4x8",
    metaDescription: "4mm sapele and mahogany quarter cut veneer plywood in 4x8 size for doors, furniture panels, cabinets and decorative interiors.",
    featuredImage: "/images/products/wood-veneer-panels/4mm-sapele-mahogany-quarter-cut-veneer-plywood-4x8/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/4mm-sapele-mahogany-quarter-cut-veneer-plywood-4x8/image-01.jpg",
      "/images/products/wood-veneer-panels/4mm-sapele-mahogany-quarter-cut-veneer-plywood-4x8/image-02.jpg",
      "/images/products/wood-veneer-panels/4mm-sapele-mahogany-quarter-cut-veneer-plywood-4x8/image-03.jpg",
      "/images/products/wood-veneer-panels/4mm-sapele-mahogany-quarter-cut-veneer-plywood-4x8/image-04.jpg",
    ],
    imageAlt: "4mm Sapele and Mahogany Quarter Cut Veneer Plywood 4x8",
    overview: `4mm sapele and mahogany quarter cut veneer plywood offers a slender profile ideal for specific applications requiring thin panels. The quarter cut processing reveals the distinctive ribbon-like stripe pattern characteristic of sapele and mahogany species.

This thin veneer panel is perfect for applications where weight and flexibility are considerations, such as door skins, furniture back panels, drawer bottoms, and cabinet interior components. The 4mm thickness provides sufficient rigidity while allowing for easier machining and bending when required.

The warm reddish-brown tones of sapele and mahogany create rich, luxurious appearances suitable for both traditional and contemporary designs. Quarter cutting produces consistent straight grain lines that add visual sophistication to any installation.`,
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
        name: "Teak Veneer Plywood",
        href: "/products/wood-veneer-panels/teak-veneer-plywood",
      },
      {
        name: "Engineered Wood Veneer",
        href: "/products/engineered-wood-veneer",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
  "american-cherry-veneer-plywood": {
    slug: "american-cherry-veneer-plywood",
    name: "American Cherry Veneer Plywood",
    code: "WVP-AC-001",
    category: "Wood Veneer Panels",
    shortDesc: "American cherry veneer plywood with warm natural grain for furniture, cabinets, doors, millwork and interior decorative panels.",
    tags: [
      "American Cherry Plywood",
      "Cherry Veneer Plywood",
      "Wood Veneer Panel",
      "Decorative Plywood",
      "Veneered Plywood",
      "Furniture Plywood",
      "Interior Panels",
    ],
    specs: {
      productType: "Wood Veneer Panel",
      faceVeneer: "American Cherry Veneer",
      substrate: "Plywood / MDF / Custom",
      panelSize: "1220x2440mm / 4x8ft / Custom",
      panelThickness: "3mm - 25mm / Custom",
      veneerThickness: "0.2mm - 0.6mm / Custom",
      surfaceFinish: "Sanded / UV Coated / Open Paint / Closed Paint",
      glueGrade: "E0 / E1 / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Pallet packing / Wooden crate / Export packaging",
      application: "Furniture, Cabinets, Doors, Millwork, Interior Decorative Panels",
    },
    seoTitle: "American Cherry Veneer Plywood | Decorative Veneered Panel",
    metaDescription: "American cherry veneer plywood with warm natural grain for furniture, cabinets, doors, millwork and interior decorative panels.",
    featuredImage: "/images/products/wood-veneer-panels/american-cherry-veneer-plywood/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/american-cherry-veneer-plywood/image-01.jpg",
      "/images/products/wood-veneer-panels/american-cherry-veneer-plywood/image-02.jpg",
      "/images/products/wood-veneer-panels/american-cherry-veneer-plywood/image-03.jpg",
      "/images/products/wood-veneer-panels/american-cherry-veneer-plywood/image-04.jpg",
    ],
    imageAlt: "American Cherry Veneer Plywood panel with warm natural grain",
    overview: `American cherry veneer plywood showcases one of North America's most beloved hardwoods. The warm reddish-brown tones deepen naturally over time, developing a rich patina that enhances with age. This characteristic makes cherry a favorite for furniture that ages gracefully.

The natural grain of American cherry features subtle figuring with occasional dark streaks and gum pockets that add character without overwhelming the overall appearance. When properly finished, the wood exhibits a soft luster that feels warm to the touch.

This veneer plywood is ideal for fine furniture, kitchen cabinets, architectural millwork, and interior decorative panels. The wood machines cleanly, takes finishes well, and responds beautifully to both natural and stained finishes.`,
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
        name: "White Oak Veneer Plywood",
        href: "/products/wood-veneer-panels/white-oak-veneer-plywood",
      },
      {
        name: "Walnut Wood Veneer Plywood",
        href: "/products/wood-veneer-panels/quarter-cut-black-walnut-veneer-plywood-3-4-4x8",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
  "crown-cut-american-walnut-veneer-plywood-mdf-panel": {
    slug: "crown-cut-american-walnut-veneer-plywood-mdf-panel",
    name: "Crown Cut American Walnut Veneer Plywood and MDF Panel",
    code: "WVP-AW-001",
    category: "Wood Veneer Panels",
    shortDesc: "Crown cut American walnut veneer panel for plywood or MDF substrates, suitable for furniture, doors, cabinets and interior wall panels.",
    tags: [
      "American Walnut Veneer",
      "Walnut Veneer Plywood",
      "Walnut Veneered MDF",
      "Crown Cut Veneer",
      "Wood Veneer Panel",
      "Furniture Panel",
      "Cabinet Panel",
    ],
    specs: {
      productType: "Wood Veneer Panel",
      faceVeneer: "American Walnut Veneer",
      substrate: "Plywood / MDF / Custom",
      panelSize: "1220x2440mm / 4x8ft / Custom",
      panelThickness: "3mm - 25mm / Custom",
      veneerThickness: "0.2mm - 0.6mm / Custom",
      surfaceFinish: "Sanded / UV Coated / Open Paint / Closed Paint",
      glueGrade: "E0 / E1 / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Pallet packing / Wooden crate / Export packaging",
      application: "Furniture, Doors, Cabinets, Interior Wall Panels",
    },
    seoTitle: "Crown Cut American Walnut Veneer Plywood and MDF Panel",
    metaDescription: "Crown cut American walnut veneer panel for plywood or MDF substrates, suitable for furniture, doors, cabinets and interior wall panels.",
    featuredImage: "/images/products/wood-veneer-panels/crown-cut-american-walnut-veneer-plywood-mdf-panel/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/crown-cut-american-walnut-veneer-plywood-mdf-panel/image-01.jpg",
      "/images/products/wood-veneer-panels/crown-cut-american-walnut-veneer-plywood-mdf-panel/image-02.jpg",
      "/images/products/wood-veneer-panels/crown-cut-american-walnut-veneer-plywood-mdf-panel/image-03.jpg",
    ],
    imageAlt: "Crown Cut American Walnut Veneer Plywood and MDF Panel",
    overview: `Crown cut American walnut veneer plywood features the prestigious hardwood known for its rich chocolate-brown tones and attractive grain patterns. Crown cutting produces the characteristic cathedral or arch-shaped figure in the growth rings, creating visually striking patterns across the panel surface.

American walnut is prized in fine furniture and cabinet making for its workability, durability, and timeless aesthetic. The wood finishes to a smooth surface that highlights its natural beauty whether left natural or stained.

This veneer panel is available with either plywood or MDF core, allowing selection based on weight requirements, machining needs, and cost considerations. MDF core provides exceptional smooth and stable surface ideal for painting or clear finishing, while plywood core offers superior strength and screw-holding capacity.`,
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
        name: "Quarter Cut Black Walnut Veneer Plywood",
        href: "/products/wood-veneer-panels/quarter-cut-black-walnut-veneer-plywood-3-4-4x8",
      },
      {
        name: "White Oak Veneer Plywood",
        href: "/products/wood-veneer-panels/white-oak-veneer-plywood",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
  "quarter-cut-white-ash-veneer-plywood-2440x1220mm": {
    slug: "quarter-cut-white-ash-veneer-plywood-2440x1220mm",
    name: "Quarter Cut White Ash Veneer Plywood 2440x1220mm",
    code: "WVP-WA-001",
    category: "Wood Veneer Panels",
    shortDesc: "Quarter cut white ash veneer plywood in 2440x1220mm size with straight grain for furniture, doors, cabinets and wall panels.",
    tags: [
      "White Ash Veneer Plywood",
      "Ash Veneered Plywood",
      "Quarter Cut Ash Veneer",
      "2440x1220 Plywood",
      "Wood Veneer Panel",
      "Furniture Plywood",
      "Door Panel",
    ],
    specs: {
      productType: "Wood Veneer Panel",
      faceVeneer: "White Ash Veneer",
      substrate: "Plywood / MDF / Custom",
      panelSize: "2440x1220mm / 4x8ft / Custom",
      panelThickness: "3mm - 25mm / Custom",
      veneerThickness: "0.2mm - 0.6mm / Custom",
      surfaceFinish: "Sanded / UV Coated / Open Paint / Closed Paint",
      glueGrade: "E0 / E1 / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Pallet packing / Wooden crate / Export packaging",
      application: "Furniture, Doors, Cabinets, Wall Panels",
    },
    seoTitle: "Quarter Cut White Ash Veneer Plywood 2440x1220mm",
    metaDescription: "Quarter cut white ash veneer plywood in 2440x1220mm size with straight grain for furniture, doors, cabinets and wall panels.",
    featuredImage: "/images/products/wood-veneer-panels/quarter-cut-white-ash-veneer-plywood-2440x1220mm/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/quarter-cut-white-ash-veneer-plywood-2440x1220mm/image-01.jpg",
      "/images/products/wood-veneer-panels/quarter-cut-white-ash-veneer-plywood-2440x1220mm/image-02.jpg",
      "/images/products/wood-veneer-panels/quarter-cut-white-ash-veneer-plywood-2440x1220mm/image-03.jpg",
      "/images/products/wood-veneer-panels/quarter-cut-white-ash-veneer-plywood-2440x1220mm/image-04.jpg",
    ],
    imageAlt: "Quarter Cut White Ash Veneer Plywood 2440x1220mm",
    overview: `Quarter cut white ash veneer plywood displays the characteristic straight grain pattern produced when veneer is sliced perpendicular to the growth rings. White ash is valued for its light color, pronounced grain, and excellent working properties.

The pale cream to light brown tones of white ash provide a clean, modern appearance that accepts stains and finishes readily. Quarter cutting emphasizes the wood's subtle figuring while producing the distinctive parallel grain lines prized in contemporary design.

White ash veneer plywood is widely used in furniture manufacturing, kitchen cabinets, interior doors, and wall paneling. The wood's excellent bending strength and shock resistance make it suitable for applications requiring durability and visual appeal.`,
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
        name: "White Oak Veneer Plywood",
        href: "/products/wood-veneer-panels/white-oak-veneer-plywood",
      },
      {
        name: "Engineered Wood Veneer",
        href: "/products/engineered-wood-veneer",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
  "quarter-cut-black-walnut-veneer-plywood-3-4-4x8": {
    slug: "quarter-cut-black-walnut-veneer-plywood-3-4-4x8",
    name: "Quarter Cut Black Walnut Veneer Plywood 3/4 4x8",
    code: "WVP-BW-001",
    category: "Wood Veneer Panels",
    shortDesc: "Quarter cut black walnut veneer plywood in 3/4 inch 4x8 size for furniture, cabinetry, doors and premium interior panels.",
    tags: [
      "Black Walnut Plywood",
      "Walnut Veneer Plywood",
      "Quarter Cut Walnut",
      "3/4 Plywood",
      "4x8 Plywood",
      "Decorative Plywood",
      "Furniture Panel",
    ],
    specs: {
      productType: "Wood Veneer Panel",
      faceVeneer: "Black Walnut Veneer",
      substrate: "Plywood / MDF / Custom",
      panelSize: "1220x2440mm / 4x8ft / Custom",
      panelThickness: "3/4 inch (18mm)",
      veneerThickness: "0.2mm - 0.6mm / Custom",
      surfaceFinish: "Sanded / UV Coated / Open Paint / Closed Paint",
      glueGrade: "E0 / E1 / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Pallet packing / Wooden crate / Export packaging",
      application: "Furniture, Cabinetry, Doors, Premium Interior Panels",
    },
    seoTitle: "Quarter Cut Black Walnut Veneer Plywood 3/4 4x8",
    metaDescription: "Quarter cut black walnut veneer plywood in 3/4 inch 4x8 size for furniture, cabinetry, doors and premium interior panels.",
    featuredImage: "/images/products/wood-veneer-panels/quarter-cut-black-walnut-veneer-plywood-3-4-4x8/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/quarter-cut-black-walnut-veneer-plywood-3-4-4x8/image-01.jpg",
      "/images/products/wood-veneer-panels/quarter-cut-black-walnut-veneer-plywood-3-4-4x8/image-02.jpg",
      "/images/products/wood-veneer-panels/quarter-cut-black-walnut-veneer-plywood-3-4-4x8/image-03.jpg",
      "/images/products/wood-veneer-panels/quarter-cut-black-walnut-veneer-plywood-3-4-4x8/image-04.jpg",
      "/images/products/wood-veneer-panels/quarter-cut-black-walnut-veneer-plywood-3-4-4x8/image-05.jpg",
      "/images/products/wood-veneer-panels/quarter-cut-black-walnut-veneer-plywood-3-4-4x8/image-06.jpg",
    ],
    imageAlt: "Quarter Cut Black Walnut Veneer Plywood 3/4 4x8",
    overview: `Quarter cut black walnut veneer plywood in 3/4 inch thickness represents the gold standard in American hardwood veneers. The rich dark brown heartwood with subtle purple undertones creates furniture and architectural elements of exceptional beauty and value.

Quarter cutting black walnut reveals the wood's dramatic figuring with tight, straight grain patterns and occasional burl figure. This cutting method produces the distinctive stripe pattern that distinguishes premium walnut installations.

The 3/4 inch thickness provides substantial substance for tabletops, cabinet doors, and architectural panels where visual weight and permanence are desired. This thickness eliminates the need for additional substrate while providing excellent stability and screw-holding capacity.`,
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
        name: "Crown Cut American Walnut Veneer Plywood",
        href: "/products/wood-veneer-panels/crown-cut-american-walnut-veneer-plywood-mdf-panel",
      },
      {
        name: "White Oak Veneer Plywood",
        href: "/products/wood-veneer-panels/white-oak-veneer-plywood",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
  "brazilian-rosewood-veneer-plywood": {
    slug: "brazilian-rosewood-veneer-plywood",
    name: "Brazilian Rosewood Veneer Plywood",
    code: "WVP-BR-001",
    category: "Wood Veneer Panels",
    shortDesc: "Brazilian rosewood veneer plywood for decorative furniture, doors, cabinets and interior wall panel applications.",
    tags: [
      "Brazilian Rosewood Plywood",
      "Rosewood Veneer Plywood",
      "Decorative Plywood",
      "Wood Veneer Panel",
      "Veneered Plywood",
      "Furniture Plywood",
      "Interior Panels",
    ],
    specs: {
      productType: "Wood Veneer Panel",
      faceVeneer: "Brazilian Rosewood Veneer",
      substrate: "Plywood / MDF / Custom",
      panelSize: "1220x2440mm / 4x8ft / Custom",
      panelThickness: "3mm - 25mm / Custom",
      veneerThickness: "0.2mm - 0.6mm / Custom",
      surfaceFinish: "Sanded / UV Coated / Open Paint / Closed Paint",
      glueGrade: "E0 / E1 / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Pallet packing / Wooden crate / Export packaging",
      application: "Decorative Furniture, Doors, Cabinets, Interior Wall Panels",
    },
    seoTitle: "Brazilian Rosewood Veneer Plywood | Decorative Veneered Panel",
    metaDescription: "Brazilian rosewood veneer plywood for decorative furniture, doors, cabinets and interior wall panel applications.",
    featuredImage: "/images/products/wood-veneer-panels/brazilian-rosewood-veneer-plywood/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/brazilian-rosewood-veneer-plywood/image-01.jpg",
      "/images/products/wood-veneer-panels/brazilian-rosewood-veneer-plywood/image-02.jpg",
      "/images/products/wood-veneer-panels/brazilian-rosewood-veneer-plywood/image-03.jpg",
      "/images/products/wood-veneer-panels/brazilian-rosewood-veneer-plywood/image-04.jpg",
      "/images/products/wood-veneer-panels/brazilian-rosewood-veneer-plywood/image-05.jpg",
    ],
    imageAlt: "Brazilian Rosewood Veneer Plywood panel",
    overview: `Brazilian rosewood veneer plywood showcases one of the world's most celebrated exotic hardwoods. Known for its rich brown coloring with dramatic black and golden grain patterns, Brazilian rosewood creates furniture and interiors of exceptional visual impact.

The wood's natural oils provide excellent durability and resistance to moisture, making it suitable for both decorative and functional applications. The distinctive fragrance of rosewood adds sensory dimension to any space.

Note: Legal species documentation and export compliance documentation will be confirmed before publishing this product. Customers should verify import regulations in their destination country.`,
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
        name: "Teak Veneer Plywood",
        href: "/products/wood-veneer-panels/teak-veneer-plywood",
      },
      {
        name: "Engineered Wood Veneer",
        href: "/products/engineered-wood-veneer",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
  "4mm-quarter-cut-chinese-ash-veneer-plywood": {
    slug: "4mm-quarter-cut-chinese-ash-veneer-plywood",
    name: "4mm Quarter Cut Chinese Ash Veneer Plywood",
    code: "WVP-CA-001",
    category: "Wood Veneer Panels",
    shortDesc: "4mm quarter cut Chinese ash veneer plywood with straight grain for furniture, cabinets, doors and decorative interior panels.",
    tags: [
      "Chinese Ash Veneer Plywood",
      "Ash Veneer Plywood",
      "Quarter Cut Veneer",
      "4mm Plywood",
      "Decorative Plywood",
      "Wood Veneer Panel",
      "Furniture Plywood",
    ],
    specs: {
      productType: "Wood Veneer Panel",
      faceVeneer: "Chinese Ash Veneer",
      substrate: "Plywood / MDF / Custom",
      panelSize: "1220x2440mm / 4x8ft / Custom",
      panelThickness: "4mm",
      veneerThickness: "0.2mm - 0.6mm / Custom",
      surfaceFinish: "Sanded / UV Coated / Open Paint / Closed Paint",
      glueGrade: "E0 / E1 / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Pallet packing / Wooden crate / Export packaging",
      application: "Furniture, Cabinets, Doors, Decorative Interior Panels",
    },
    seoTitle: "4mm Quarter Cut Chinese Ash Veneer Plywood",
    metaDescription: "4mm quarter cut Chinese ash veneer plywood with straight grain for furniture, cabinets, doors and decorative interior panels.",
    featuredImage: "/images/products/wood-veneer-panels/4mm-quarter-cut-chinese-ash-veneer-plywood/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/4mm-quarter-cut-chinese-ash-veneer-plywood/image-01.jpg",
      "/images/products/wood-veneer-panels/4mm-quarter-cut-chinese-ash-veneer-plywood/image-02.jpg",
      "/images/products/wood-veneer-panels/4mm-quarter-cut-chinese-ash-veneer-plywood/image-03.jpg",
      "/images/products/wood-veneer-panels/4mm-quarter-cut-chinese-ash-veneer-plywood/image-04.jpg",
      "/images/products/wood-veneer-panels/4mm-quarter-cut-chinese-ash-veneer-plywood/image-05.jpg",
    ],
    imageAlt: "4mm Quarter Cut Chinese Ash Veneer Plywood",
    overview: `4mm quarter cut Chinese ash veneer plywood offers the distinctive characteristics of ash wood in a thin profile suitable for specialized applications. Chinese ash provides excellent yield from each log while maintaining the attractive grain patterns ash wood is known for.

The quarter cut processing reveals the subtle figuring and consistent grain lines that make ash veneer popular in contemporary furniture and interior design. The light coloration provides excellent versatility for staining or finishing in various tones.

This thin 4mm panel is ideal for applications requiring flexibility or weight reduction, such as furniture back panels, drawer components, and architectural details where thickness must be minimized.`,
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
        name: "White Ash Veneer Plywood",
        href: "/products/wood-veneer-panels/quarter-cut-white-ash-veneer-plywood-2440x1220mm",
      },
      {
        name: "Engineered Wood Veneer",
        href: "/products/engineered-wood-veneer",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
  "chinese-ash-veneer-faced-fancy-plywood-4x8-3-2mm": {
    slug: "chinese-ash-veneer-faced-fancy-plywood-4x8-3-2mm",
    name: "Chinese Ash Veneer Faced Fancy Plywood 4x8 3.2mm",
    code: "WVP-CF-001",
    category: "Wood Veneer Panels",
    shortDesc: "Chinese ash veneer faced fancy plywood in 4x8 3.2mm size for furniture, doors, cabinets and decorative panel manufacturing.",
    tags: [
      "Chinese Ash Fancy Plywood",
      "Veneer Faced Plywood",
      "Ash Veneer Plywood",
      "3.2mm Plywood",
      "4x8 Plywood",
      "Decorative Plywood",
      "Wood Veneer Panel",
    ],
    specs: {
      productType: "Wood Veneer Panel",
      faceVeneer: "Chinese Ash Veneer",
      substrate: "Plywood / MDF / Custom",
      panelSize: "1220x2440mm / 4x8ft / Custom",
      panelThickness: "3.2mm",
      veneerThickness: "0.2mm - 0.6mm / Custom",
      surfaceFinish: "Sanded / UV Coated / Open Paint / Closed Paint",
      glueGrade: "E0 / E1 / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Pallet packing / Wooden crate / Export packaging",
      application: "Furniture, Doors, Cabinets, Decorative Panel Manufacturing",
    },
    seoTitle: "Chinese Ash Veneer Faced Fancy Plywood 4x8 3.2mm",
    metaDescription: "Chinese ash veneer faced fancy plywood in 4x8 3.2mm size for furniture, doors, cabinets and decorative panel manufacturing.",
    featuredImage: "/images/products/wood-veneer-panels/chinese-ash-veneer-faced-fancy-plywood-4x8-3-2mm/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/chinese-ash-veneer-faced-fancy-plywood-4x8-3-2mm/image-01.jpg",
      "/images/products/wood-veneer-panels/chinese-ash-veneer-faced-fancy-plywood-4x8-3-2mm/image-02.jpg",
      "/images/products/wood-veneer-panels/chinese-ash-veneer-faced-fancy-plywood-4x8-3-2mm/image-03.jpg",
      "/images/products/wood-veneer-panels/chinese-ash-veneer-faced-fancy-plywood-4x8-3-2mm/image-04.jpg",
      "/images/products/wood-veneer-panels/chinese-ash-veneer-faced-fancy-plywood-4x8-3-2mm/image-05.jpg",
    ],
    imageAlt: "Chinese Ash Veneer Faced Fancy Plywood 4x8 3.2mm",
    overview: `Chinese ash veneer faced fancy plywood combines the natural beauty of ash wood with the structural benefits of quality plywood core. The 3.2mm thickness provides a balance between durability and workability suitable for a wide range of applications.

Fancy plywood refers to decorative plywood manufactured to high standards with carefully selected veneer faces matched for color and grain consistency. Each panel undergoes quality inspection to ensure the veneer is free from defects and properly bonded.

This product is particularly suitable for visible applications where both structural integrity and aesthetic appeal are important, including furniture components, door panels, cabinet parts, and decorative architectural elements.`,
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
        name: "White Ash Veneer Plywood",
        href: "/products/wood-veneer-panels/quarter-cut-white-ash-veneer-plywood-2440x1220mm",
      },
      {
        name: "Engineered Wood Veneer",
        href: "/products/engineered-wood-veneer",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
  "elm-veneer-plywood": {
    slug: "elm-veneer-plywood",
    name: "Elm Veneer Plywood",
    code: "WVP-EL-001",
    category: "Wood Veneer Panels",
    shortDesc: "Elm veneer plywood with natural grain for furniture, doors, cabinets, wall panels and decorative interior applications.",
    tags: [
      "Elm Veneer Plywood",
      "Elm Wood Veneer Panel",
      "Decorative Plywood",
      "Veneered Plywood",
      "Furniture Plywood",
      "Door Panel",
      "Interior Panels",
    ],
    specs: {
      productType: "Wood Veneer Panel",
      faceVeneer: "Elm Veneer",
      substrate: "Plywood / MDF / Custom",
      panelSize: "1220x2440mm / 4x8ft / Custom",
      panelThickness: "3mm - 25mm / Custom",
      veneerThickness: "0.2mm - 0.6mm / Custom",
      surfaceFinish: "Sanded / UV Coated / Open Paint / Closed Paint",
      glueGrade: "E0 / E1 / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Pallet packing / Wooden crate / Export packaging",
      application: "Furniture, Doors, Cabinets, Wall Panels, Decorative Interior Applications",
    },
    seoTitle: "Elm Veneer Plywood | Decorative Wood Veneer Panel",
    metaDescription: "Elm veneer plywood with natural grain for furniture, doors, cabinets, wall panels and decorative interior applications.",
    featuredImage: "/images/products/wood-veneer-panels/elm-veneer-plywood/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/elm-veneer-plywood/image-01.jpg",
      "/images/products/wood-veneer-panels/elm-veneer-plywood/image-02.jpg",
      "/images/products/wood-veneer-panels/elm-veneer-plywood/image-03.jpg",
      "/images/products/wood-veneer-panels/elm-veneer-plywood/image-04.jpg",
    ],
    imageAlt: "Elm Veneer Plywood panel with natural grain",
    overview: `Elm veneer plywood features the distinctive interlocked grain pattern that makes elm wood uniquely attractive. The swirling, interlocking fibers create fascinating figure variations that catch the light differently as viewing angles change.

Elm has been prized for furniture making for centuries, particularly in Dutch and Japanese traditions. The wood's workability and beautiful grain make it suitable for both contemporary and traditional designs.

This veneer plywood brings the natural beauty of elm to a stable, workable panel format suitable for furniture manufacturing, interior millwork, decorative panels, and architectural applications where visual impact is desired.`,
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
        name: "White Oak Veneer Plywood",
        href: "/products/wood-veneer-panels/white-oak-veneer-plywood",
      },
      {
        name: "Engineered Wood Veneer",
        href: "/products/engineered-wood-veneer",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
  "engineered-white-oak-veneer-plywood-panel": {
    slug: "engineered-white-oak-veneer-plywood-panel",
    name: "Engineered White Oak Veneer Plywood Panel",
    code: "WVP-EW-001",
    category: "Wood Veneer Panels",
    shortDesc: "Engineered white oak veneer plywood panel for furniture, cabinets, doors and consistent decorative interior surfaces.",
    tags: [
      "Engineered White Oak Veneer",
      "White Oak Veneer Plywood",
      "Engineered Veneer Panel",
      "Wood Veneer Panel",
      "Decorative Plywood",
      "Furniture Panel",
      "Door Panel",
    ],
    specs: {
      productType: "Wood Veneer Panel",
      faceVeneer: "Engineered White Oak Veneer",
      substrate: "Plywood / MDF / Custom",
      panelSize: "1220x2440mm / 4x8ft / Custom",
      panelThickness: "3mm - 25mm / Custom",
      veneerThickness: "0.2mm - 0.6mm / Custom",
      surfaceFinish: "Sanded / UV Coated / Open Paint / Closed Paint",
      glueGrade: "E0 / E1 / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Pallet packing / Wooden crate / Export packaging",
      application: "Furniture, Cabinets, Doors, Consistent Decorative Interior Surfaces",
    },
    seoTitle: "Engineered White Oak Veneer Plywood Panel",
    metaDescription: "Engineered white oak veneer plywood panel for furniture, cabinets, doors and consistent decorative interior surfaces.",
    featuredImage: "/images/products/wood-veneer-panels/engineered-white-oak-veneer-plywood-panel/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/engineered-white-oak-veneer-plywood-panel/image-01.jpg",
      "/images/products/wood-veneer-panels/engineered-white-oak-veneer-plywood-panel/image-02.jpg",
      "/images/products/wood-veneer-panels/engineered-white-oak-veneer-plywood-panel/image-03.jpg",
    ],
    imageAlt: "Engineered White Oak Veneer Plywood Panel",
    overview: `Engineered white oak veneer plywood panel combines the timeless appeal of white oak with the consistency advantages of engineered veneer technology. Unlike natural veneer with its inherent variations, engineered veneer offers precise color matching and grain consistency across all panels in a project.

The manufacturing process allows for longer sheet lengths without joints, consistent color batch after batch, and the ability to create custom patterns and tones. This makes engineered white oak ideal for large-scale projects where visual uniformity is essential.

This panel provides the aesthetic of premium white oak with practical benefits including reduced waste from matching, easier quality control, and predictable results throughout the production process.`,
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
        name: "Engineered Wood Veneer",
        href: "/products/engineered-wood-veneer",
      },
      {
        name: "White Oak Veneer Plywood",
        href: "/products/wood-veneer-panels/white-oak-veneer-plywood",
      },
      {
        name: "Natural Wood Veneer Sheets",
        href: "/products/natural-wood-veneer",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
  "prefinished-textured-dyed-white-oak-veneer-plywood": {
    slug: "prefinished-textured-dyed-white-oak-veneer-plywood",
    name: "Prefinished Textured Dyed White Oak Veneer Plywood",
    code: "WVP-PD-001",
    category: "Wood Veneer Panels",
    shortDesc: "Prefinished textured dyed white oak veneer plywood for decorative furniture, wall panels, cabinets, doors and interior projects.",
    tags: [
      "Prefinished Veneer Plywood",
      "Dyed White Oak Veneer",
      "Textured Veneer Plywood",
      "White Oak Veneer Plywood",
      "Decorative Plywood",
      "Wood Veneer Panel",
      "Interior Panels",
    ],
    specs: {
      productType: "Wood Veneer Panel",
      faceVeneer: "Dyed White Oak Veneer",
      substrate: "Plywood / MDF / Custom",
      panelSize: "1220x2440mm / 4x8ft / Custom",
      panelThickness: "3mm - 25mm / Custom",
      veneerThickness: "0.2mm - 0.6mm / Custom",
      surfaceFinish: "Prefinished - Textured / UV Coated",
      glueGrade: "E0 / E1 / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Pallet packing / Wooden crate / Export packaging",
      application: "Decorative Furniture, Wall Panels, Cabinets, Doors, Interior Projects",
    },
    seoTitle: "Prefinished Textured Dyed White Oak Veneer Plywood",
    metaDescription: "Prefinished textured dyed white oak veneer plywood for decorative furniture, wall panels, cabinets, doors and interior projects.",
    featuredImage: "/images/products/wood-veneer-panels/prefinished-textured-dyed-white-oak-veneer-plywood/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/prefinished-textured-dyed-white-oak-veneer-plywood/image-01.jpg",
      "/images/products/wood-veneer-panels/prefinished-textured-dyed-white-oak-veneer-plywood/image-02.jpg",
      "/images/products/wood-veneer-panels/prefinished-textured-dyed-white-oak-veneer-plywood/image-03.jpg",
      "/images/products/wood-veneer-panels/prefinished-textured-dyed-white-oak-veneer-plywood/image-04.jpg",
      "/images/products/wood-veneer-panels/prefinished-textured-dyed-white-oak-veneer-plywood/image-05.jpg",
      "/images/products/wood-veneer-panels/prefinished-textured-dyed-white-oak-veneer-plywood/image-06.jpg",
    ],
    imageAlt: "Prefinished Textured Dyed White Oak Veneer Plywood",
    overview: `Prefinished textured dyed white oak veneer plywood represents the ultimate in ready-to-install wood panel products. This innovative product combines three value-added features: dyeing for consistent color, texturing for enhanced visual depth, and prefinishing for immediate use.

The dyeing process allows white oak's attractive grain structure to be enhanced with consistent color tones that would be difficult or impossible to achieve with stains on natural veneer. Colors are batch-controlled for perfect consistency across multiple panels.

Texturing adds tactile and visual depth that catches light and creates visual interest. The prefinished surface eliminates on-site finishing work, reducing installation time and avoiding finish-related quality issues.`,
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
        name: "White Oak Veneer Plywood",
        href: "/products/wood-veneer-panels/white-oak-veneer-plywood",
      },
      {
        name: "Engineered Wood Veneer",
        href: "/products/engineered-wood-veneer",
      },
      {
        name: "Natural Wood Veneer Sheets",
        href: "/products/natural-wood-veneer",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
  "quarter-cut-red-oak-veneer-plywood-mdf-panel": {
    slug: "quarter-cut-red-oak-veneer-plywood-mdf-panel",
    name: "Quarter Cut Red Oak Veneer Plywood and MDF Panel",
    code: "WVP-RO-001",
    category: "Wood Veneer Panels",
    shortDesc: "Quarter cut red oak veneer panel for plywood or MDF substrates, used in furniture, cabinets, doors and decorative interiors.",
    tags: [
      "Red Oak Veneer Plywood",
      "Red Oak Veneered MDF",
      "Quarter Cut Oak Veneer",
      "Oak Veneer Panel",
      "Wood Veneer Panel",
      "Furniture Panel",
      "Cabinet Panel",
    ],
    specs: {
      productType: "Wood Veneer Panel",
      faceVeneer: "Red Oak Veneer",
      substrate: "Plywood / MDF / Custom",
      panelSize: "1220x2440mm / 4x8ft / Custom",
      panelThickness: "3mm - 25mm / Custom",
      veneerThickness: "0.2mm - 0.6mm / Custom",
      surfaceFinish: "Sanded / UV Coated / Open Paint / Closed Paint",
      glueGrade: "E0 / E1 / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Pallet packing / Wooden crate / Export packaging",
      application: "Furniture, Cabinets, Doors, Decorative Interiors",
    },
    seoTitle: "Quarter Cut Red Oak Veneer Plywood and MDF Panel",
    metaDescription: "Quarter cut red oak veneer panel for plywood or MDF substrates, used in furniture, cabinets, doors and decorative interiors.",
    featuredImage: "/images/products/wood-veneer-panels/quarter-cut-red-oak-veneer-plywood-mdf-panel/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/quarter-cut-red-oak-veneer-plywood-mdf-panel/image-01.jpg",
      "/images/products/wood-veneer-panels/quarter-cut-red-oak-veneer-plywood-mdf-panel/image-02.jpg",
      "/images/products/wood-veneer-panels/quarter-cut-red-oak-veneer-plywood-mdf-panel/image-03.jpg",
    ],
    imageAlt: "Quarter Cut Red Oak Veneer Plywood and MDF Panel",
    overview: `Quarter cut red oak veneer plywood showcases one of North America's most widely used hardwoods. Red oak is valued for its warm reddish tones, prominent grain pattern, and excellent workability. Quarter cutting emphasizes the wood's subtle figuring while producing distinctive stripe patterns.

Available with either plywood or MDF core, this panel offers flexibility to match specific project requirements. Plywood core provides superior strength and dimensional stability, while MDF core offers an exceptionally smooth surface ideal for painting or when uniform thickness is critical.

Red oak veneer plywood is extensively used in furniture manufacturing, kitchen cabinets, architectural millwork, and interior applications where the warm, traditional appearance of oak is desired.`,
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
        name: "White Oak Veneer Plywood",
        href: "/products/wood-veneer-panels/white-oak-veneer-plywood",
      },
      {
        name: "Natural Wood Veneer Sheets",
        href: "/products/natural-wood-veneer",
      },
      {
        name: "Engineered Wood Veneer",
        href: "/products/engineered-wood-veneer",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
  "teak-veneer-plywood": {
    slug: "teak-veneer-plywood",
    name: "Teak Veneer Plywood",
    code: "WVP-TK-001",
    category: "Wood Veneer Panels",
    shortDesc: "Teak veneer plywood for furniture, doors, cabinets, wall panels and decorative interior panel applications.",
    tags: [
      "Teak Veneer Plywood",
      "Teak Fancy Plywood",
      "Decorative Plywood",
      "Wood Veneer Panel",
      "Veneered Plywood",
      "Furniture Plywood",
      "Door Panel",
    ],
    specs: {
      productType: "Wood Veneer Panel",
      faceVeneer: "Teak Veneer",
      substrate: "Plywood / MDF / Custom",
      panelSize: "1220x2440mm / 4x8ft / Custom",
      panelThickness: "3mm - 25mm / Custom",
      veneerThickness: "0.2mm - 0.6mm / Custom",
      surfaceFinish: "Sanded / UV Coated / Open Paint / Closed Paint",
      glueGrade: "E0 / E1 / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Pallet packing / Wooden crate / Export packaging",
      application: "Furniture, Doors, Cabinets, Wall Panels, Decorative Interior Panels",
    },
    seoTitle: "Teak Veneer Plywood | Fancy Decorative Plywood Panel",
    metaDescription: "Teak veneer plywood for furniture, doors, cabinets, wall panels and decorative interior panel applications.",
    featuredImage: "/images/products/wood-veneer-panels/teak-veneer-plywood/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/teak-veneer-plywood/image-01.jpg",
      "/images/products/wood-veneer-panels/teak-veneer-plywood/image-02.jpg",
      "/images/products/wood-veneer-panels/teak-veneer-plywood/image-03.jpg",
    ],
    imageAlt: "Teak Veneer Plywood panel",
    overview: `Teak veneer plywood features one of the world's most prized tropical hardwoods. Teak is renowned for its exceptional durability, natural oils that provide moisture resistance, and beautiful golden-brown coloring that darkens with age.

The distinctive straight grain of teak, occasionally interlocked, creates panels of sophisticated elegance. Teak's natural oils make it highly resistant to moisture, insects, and fungal attack, extending the life of finished products.

This veneer plywood is ideal for both interior and certain exterior applications where teak's combination of beauty and durability is desired. Popular uses include fine furniture, architectural panels, marine interiors, and decorative wall treatments.`,
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
        name: "Crown Cut Teak Veneer Ply Board",
        href: "/products/wood-veneer-panels/crown-cut-teak-veneer-ply-board",
      },
      {
        name: "Natural Wood Veneer Sheets",
        href: "/products/natural-wood-veneer",
      },
      {
        name: "Engineered Wood Veneer",
        href: "/products/engineered-wood-veneer",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
  "crown-cut-teak-veneer-ply-board": {
    slug: "crown-cut-teak-veneer-ply-board",
    name: "Crown Cut Teak Veneer Ply Board",
    code: "WVP-CT-001",
    category: "Wood Veneer Panels",
    shortDesc: "Crown cut teak veneer ply board with decorative grain for furniture, cabinets, doors and interior wall panel applications.",
    tags: [
      "Teak Veneer Ply Board",
      "Crown Cut Teak Veneer",
      "Teak Veneer Panel",
      "Teak Plywood",
      "Decorative Plywood",
      "Furniture Panel",
      "Door Panel",
    ],
    specs: {
      productType: "Wood Veneer Panel",
      faceVeneer: "Teak Veneer",
      substrate: "Plywood / MDF / Custom",
      panelSize: "1220x2440mm / 4x8ft / Custom",
      panelThickness: "3mm - 25mm / Custom",
      veneerThickness: "0.2mm - 0.6mm / Custom",
      surfaceFinish: "Sanded / UV Coated / Open Paint / Closed Paint",
      glueGrade: "E0 / E1 / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Pallet packing / Wooden crate / Export packaging",
      application: "Furniture, Cabinets, Doors, Interior Wall Panel Applications",
    },
    seoTitle: "Crown Cut Teak Veneer Ply Board | Teak Veneer Panel",
    metaDescription: "Crown cut teak veneer ply board with decorative grain for furniture, cabinets, doors and interior wall panel applications.",
    featuredImage: "/images/products/wood-veneer-panels/crown-cut-teak-veneer-ply-board/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/crown-cut-teak-veneer-ply-board/image-01.jpg",
      "/images/products/wood-veneer-panels/crown-cut-teak-veneer-ply-board/image-02.jpg",
      "/images/products/wood-veneer-panels/crown-cut-teak-veneer-ply-board/image-03.jpg",
      "/images/products/wood-veneer-panels/crown-cut-teak-veneer-ply-board/image-04.jpg",
      "/images/products/wood-veneer-panels/crown-cut-teak-veneer-ply-board/image-05.jpg",
      "/images/products/wood-veneer-panels/crown-cut-teak-veneer-ply-board/image-06.jpg",
    ],
    imageAlt: "Crown Cut Teak Veneer Ply Board",
    overview: `Crown cut teak veneer ply board displays the characteristic cathedral or arch-shaped grain pattern produced when veneer is sliced tangentially to the growth rings. This cutting method reveals teak's most decorative figure while maintaining the wood's exceptional durability characteristics.

The warm golden-brown base color with darker brown streaks creates panels of natural elegance suitable for luxury interiors. Teak's natural oils provide inherent protection that enhances the wood's beauty over time.

This ply board is designed for applications where teak's distinctive appearance is the primary consideration, including feature walls, architectural panels, high-end furniture, and decorative millwork.`,
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
        name: "Teak Veneer Plywood",
        href: "/products/wood-veneer-panels/teak-veneer-plywood",
      },
      {
        name: "Natural Wood Veneer Sheets",
        href: "/products/natural-wood-veneer",
      },
      {
        name: "Decorative Teak Wood Veneer Wall Panels",
        href: "/products/wood-veneer-panels/decorative-teak-wood-veneer-wall-panels",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
  "crown-cut-white-oak-veneer-plywood": {
    slug: "crown-cut-white-oak-veneer-plywood",
    name: "Crown Cut White Oak Veneer Plywood",
    code: "WVP-CW-001",
    category: "Wood Veneer Panels",
    shortDesc: "Crown cut white oak veneer plywood with natural cathedral grain for furniture, cabinets, doors and decorative wall panels.",
    tags: [
      "White Oak Veneer Plywood",
      "Crown Cut White Oak",
      "Oak Veneer Plywood",
      "Decorative Plywood",
      "Wood Veneer Panel",
      "Furniture Plywood",
      "Cabinet Panel",
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
      application: "Furniture, Cabinets, Doors, Decorative Wall Panels",
    },
    seoTitle: "Crown Cut White Oak Veneer Plywood",
    metaDescription: "Crown cut white oak veneer plywood with natural cathedral grain for furniture, cabinets, doors and decorative wall panels.",
    featuredImage: "/images/products/wood-veneer-panels/crown-cut-white-oak-veneer-plywood/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/crown-cut-white-oak-veneer-plywood/image-01.jpg",
      "/images/products/wood-veneer-panels/crown-cut-white-oak-veneer-plywood/image-02.jpg",
      "/images/products/wood-veneer-panels/crown-cut-white-oak-veneer-plywood/image-03.jpg",
      "/images/products/wood-veneer-panels/crown-cut-white-oak-veneer-plywood/image-04.jpg",
      "/images/products/wood-veneer-panels/crown-cut-white-oak-veneer-plywood/image-05.jpg",
    ],
    imageAlt: "Crown Cut White Oak Veneer Plywood panel with natural cathedral grain",
    overview: `Crown cut white oak veneer plywood showcases the classic cathedral grain pattern that has made oak the most recognized hardwood in woodworking. The distinctive V-shaped figures in the growth rings create panels of timeless elegance.

White oak's light grayish-brown heartwood complements both natural and stained finishes, offering versatility for various design aesthetics from rustic to contemporary. The wood's excellent working properties make it a woodworker's favorite.

This veneer plywood is ideal for furniture, kitchen cabinets, interior doors, architectural millwork, and decorative wall paneling where oak's traditional beauty is desired.`,
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
        name: "White Oak Veneer Plywood",
        href: "/products/wood-veneer-panels/white-oak-veneer-plywood",
      },
      {
        name: "Quarter Cut White Oak Veneer Plywood",
        href: "/products/wood-veneer-panels/quarter-cut-white-oak-veneer-plywood",
      },
      {
        name: "Natural Wood Veneer Sheets",
        href: "/products/natural-wood-veneer",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
  "quarter-cut-white-oak-veneer-plywood": {
    slug: "quarter-cut-white-oak-veneer-plywood",
    name: "Quarter Cut White Oak Veneer Plywood",
    code: "WVP-QW-001",
    category: "Wood Veneer Panels",
    shortDesc: "Quarter cut white oak veneer plywood with straight grain for furniture, doors, cabinets and architectural interior panels.",
    tags: [
      "White Oak Veneer Plywood",
      "Quarter Cut White Oak",
      "Oak Veneer Panel",
      "Decorative Plywood",
      "Wood Veneer Panel",
      "Furniture Plywood",
      "Door Panel",
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
      application: "Furniture, Doors, Cabinets, Architectural Interior Panels",
    },
    seoTitle: "Quarter Cut White Oak Veneer Plywood | Wood Veneer Panel",
    metaDescription: "Quarter cut white oak veneer plywood with straight grain for furniture, doors, cabinets and architectural interior panels.",
    featuredImage: "/images/products/wood-veneer-panels/quarter-cut-white-oak-veneer-plywood/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/quarter-cut-white-oak-veneer-plywood/image-01.jpg",
      "/images/products/wood-veneer-panels/quarter-cut-white-oak-veneer-plywood/image-02.jpg",
      "/images/products/wood-veneer-panels/quarter-cut-white-oak-veneer-plywood/image-03.jpg",
      "/images/products/wood-veneer-panels/quarter-cut-white-oak-veneer-plywood/image-04.jpg",
      "/images/products/wood-veneer-panels/quarter-cut-white-oak-veneer-plywood/image-05.jpg",
      "/images/products/wood-veneer-panels/quarter-cut-white-oak-veneer-plywood/image-06.jpg",
    ],
    imageAlt: "Quarter Cut White Oak Veneer Plywood panel with straight grain",
    overview: `Quarter cut white oak veneer plywood displays the distinctive straight grain pattern and subtle figuring produced when veneer is sliced perpendicular to the growth rings. This cutting method reveals the medullary rays as stunning flecks that add visual interest to the panel surface.

White oak's light coloring provides an excellent base for both clear finishes that showcase the wood's natural beauty and darker stains that create contemporary looks. The wood's excellent durability and workability make it a versatile choice for various applications.

This veneer plywood is particularly valued in modern and minimalist design contexts where the clean, consistent grain pattern of quarter-sawn white oak is desired.`,
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
        name: "White Oak Veneer Plywood",
        href: "/products/wood-veneer-panels/white-oak-veneer-plywood",
      },
      {
        name: "Crown Cut White Oak Veneer Plywood",
        href: "/products/wood-veneer-panels/crown-cut-white-oak-veneer-plywood",
      },
      {
        name: "Natural Wood Veneer Sheets",
        href: "/products/natural-wood-veneer",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
  "decorative-teak-wood-veneer-wall-panels": {
    slug: "decorative-teak-wood-veneer-wall-panels",
    name: "Decorative Teak Wood Veneer Wall Panels",
    code: "WVP-DT-001",
    category: "Wood Veneer Panels",
    shortDesc: "Decorative teak wood veneer wall panels for furniture, feature walls, doors, commercial interiors and hotel projects.",
    tags: [
      "Teak Wood Wall Panels",
      "Decorative Wood Wall Panels",
      "Teak Veneer Panel",
      "Wood Veneer Wall Panel",
      "Interior Wall Panels",
      "Hotel Wall Panels",
      "Decorative Panels",
    ],
    specs: {
      productType: "Decorative Wall Panel",
      faceVeneer: "Teak Veneer",
      substrate: "Plywood / MDF / Custom",
      panelSize: "1220x2440mm / 4x8ft / Custom",
      panelThickness: "3mm - 25mm / Custom",
      veneerThickness: "0.2mm - 0.6mm / Custom",
      surfaceFinish: "Sanded / UV Coated / Open Paint / Closed Paint",
      glueGrade: "E0 / E1 / Custom",
      moq: "100 sheets",
      leadTime: "10-20 days",
      packaging: "Pallet packing / Wooden crate / Export packaging",
      application: "Furniture, Feature Walls, Doors, Commercial Interiors, Hotel Projects",
    },
    seoTitle: "Decorative Teak Wood Veneer Wall Panels",
    metaDescription: "Decorative teak wood veneer wall panels for furniture, feature walls, doors, commercial interiors and hotel projects.",
    featuredImage: "/images/products/wood-veneer-panels/decorative-teak-wood-veneer-wall-panels/image-01.jpg",
    gallery: [
      "/images/products/wood-veneer-panels/decorative-teak-wood-veneer-wall-panels/image-01.jpg",
      "/images/products/wood-veneer-panels/decorative-teak-wood-veneer-wall-panels/image-02.jpg",
      "/images/products/wood-veneer-panels/decorative-teak-wood-veneer-wall-panels/image-03.jpg",
      "/images/products/wood-veneer-panels/decorative-teak-wood-veneer-wall-panels/image-04.jpg",
    ],
    imageAlt: "Decorative Teak Wood Veneer Wall Panels",
    overview: `Decorative teak wood veneer wall panels bring the warmth and sophistication of tropical hardwood to interior wall applications. These panels combine teak's renowned durability and beauty with panel construction that simplifies installation.

The natural golden-brown tones of teak create warm, inviting spaces whether used as full wall coverings or accent panels. Teak's subtle grain patterns provide visual interest without overwhelming other design elements.

These wall panels are designed for both residential and commercial applications, including hotel lobbies, executive offices, retail spaces, and luxury residential interiors where the enduring elegance of teak is desired.`,
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
        name: "Crown Cut Teak Veneer Ply Board",
        href: "/products/wood-veneer-panels/crown-cut-teak-veneer-ply-board",
      },
      {
        name: "Teak Veneer Plywood",
        href: "/products/wood-veneer-panels/teak-veneer-plywood",
      },
      {
        name: "Natural Wood Veneer Sheets",
        href: "/products/natural-wood-veneer",
      },
      {
        name: "Veneer Edge Banding",
        href: "/products/veneer-edge-banding",
      },
    ],
  },
};
