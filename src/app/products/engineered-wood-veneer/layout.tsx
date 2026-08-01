import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Engineered Wood Veneer",
  description:
    "Reconstituted wood veneer with consistent patterns, stable colors and uniform textures for repeatable production.",
  path: "/products/engineered-wood-veneer",
});

export default function EngineeredWoodVeneerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
