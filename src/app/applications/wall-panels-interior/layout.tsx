import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Wood Veneer Wall Panels for Interior Projects",
  description:
    "Natural and engineered wood veneer panel solutions for feature walls, ceilings and architectural interiors.",
  path: "/applications/wall-panels-interior",
});

export default function WallPanelsInteriorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
