import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Wood Materials for Hotel and Commercial Interiors",
  description:
    "Wood veneer and decorative panel solutions for hotel, retail, office and other commercial interior projects.",
  path: "/applications/hotel-commercial",
});

export default function HotelCommercialLayout({ children }: { children: React.ReactNode }) {
  return children;
}
