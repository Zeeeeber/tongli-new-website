import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Melamine Board Collection",
  description:
    "Browse wood grain, solid color, fabric-look and stone-look melamine surfaces for furniture and cabinetry.",
  path: "/collections/melamine-board",
});

export default function MelamineBoardCollectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
