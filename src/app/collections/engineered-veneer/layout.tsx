import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Engineered Wood Veneer Collection",
  description:
    "Browse reconstituted wood veneer patterns with consistent colors and textures for furniture, cabinetry and architectural projects.",
  path: "/collections/engineered-veneer",
});

export default function EngineeredVeneerCollectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
