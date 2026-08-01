import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Decorative Panels for Cabinets and Wardrobes",
  description:
    "Wood veneer panels and decorative board solutions for cabinet, wardrobe and custom storage manufacturing.",
  path: "/applications/cabinets-wardrobes",
});

export default function CabinetsWardrobesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
