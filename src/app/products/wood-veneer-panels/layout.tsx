import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Wood Veneer Panels and Decorative Plywood",
  description:
    "Source natural or engineered wood veneer panels on plywood, MDF and custom cores for furniture, doors, wall panels and commercial interior projects.",
  path: "/products/wood-veneer-panels",
});

export default function WoodVeneerPanelsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
