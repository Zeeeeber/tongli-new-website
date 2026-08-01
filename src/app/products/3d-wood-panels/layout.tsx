import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "3D Wood Panels",
  description:
    "Decorative carved wood panels with three-dimensional textures for walls, doors, ceilings and furniture surfaces.",
  path: "/products/3d-wood-panels",
});

export default function ThreeDWoodPanelsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
