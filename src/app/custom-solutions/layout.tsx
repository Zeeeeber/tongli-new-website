import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Custom Wood Veneer and Panel Solutions",
  description:
    "Custom veneer matching, panel construction, surface finishing and material solutions for furniture and interior projects.",
  path: "/custom-solutions",
});

export default function CustomSolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
