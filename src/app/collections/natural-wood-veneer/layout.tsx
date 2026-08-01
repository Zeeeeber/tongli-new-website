import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Natural Wood Veneer Collection",
  description:
    "Browse natural wood veneer styles with authentic hardwood grain, color variation and texture for furniture and interior projects.",
  path: "/collections/natural-wood-veneer",
});

export default function NaturalWoodVeneerCollectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
