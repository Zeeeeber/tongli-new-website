import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Veneer Edge Banding",
  description:
    "Natural and engineered wood veneer edge banding for furniture, cabinets, doors and decorative panels.",
  path: "/products/veneer-edge-banding",
});

export default function VeneerEdgeBandingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
