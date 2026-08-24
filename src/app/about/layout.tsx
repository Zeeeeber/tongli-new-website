import type { Metadata } from "next";
import { createCorePageMetadata } from "@/i18n/metadata";

export const metadata: Metadata = createCorePageMetadata("about", "en");

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
