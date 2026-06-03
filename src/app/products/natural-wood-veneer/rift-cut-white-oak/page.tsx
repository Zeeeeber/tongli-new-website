"use client";

import { NaturalWoodVeneerDetailTemplate } from "@/components/product/NaturalWoodVeneerDetailTemplate";

const product = {
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
};

export default function RiftCutWhiteOakPage() {
  return <NaturalWoodVeneerDetailTemplate product={product} slug="rift-cut-white-oak" />;
}
