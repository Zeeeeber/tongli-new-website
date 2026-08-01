import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Materials for Whole House Customization",
  description:
    "Coordinated wood veneer, decorative panel and supporting board materials for whole-house custom interiors.",
  path: "/applications/whole-house-customization",
});

export default function WholeHouseCustomizationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
