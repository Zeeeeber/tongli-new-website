import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "3D Wood Panel Collection",
  description:
    "Browse carved 3D decorative wood panel patterns, grooves, waves and textured surfaces for interior projects.",
  path: "/collections/3d-wood-panels",
});

export default function ThreeDWoodPanelCollectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
