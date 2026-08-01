import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Wood Veneer Panels and Decorative Plywood",
  description:
    "Natural and engineered wood veneer panels on plywood, MDF and custom substrates for furniture, doors and interiors.",
  path: "/products/wood-veneer-panels",
});

export default function WoodVeneerPanelsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
