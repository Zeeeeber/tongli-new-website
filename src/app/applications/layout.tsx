import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Wood Veneer Applications",
  description:
    "Explore wood veneer, decorative panel and supporting board solutions for furniture, doors, cabinets, hotels and interior projects.",
  path: "/applications",
});

export default function ApplicationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
