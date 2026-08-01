import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Wood Veneer Panels for Furniture Manufacturing",
  description:
    "Natural veneer, engineered veneer and veneered panel solutions for furniture factories and custom furniture production.",
  path: "/applications/furniture-manufacturing",
});

export default function FurnitureManufacturingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
