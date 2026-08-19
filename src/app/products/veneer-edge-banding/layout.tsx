import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Natural Wood Veneer Edge Banding",
  description:
    "Source natural and engineered veneer edge banding for furniture, cabinets, doors and panels, with custom widths, backing, finish and roll lengths.",
  path: "/products/veneer-edge-banding",
});

export default function VeneerEdgeBandingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
