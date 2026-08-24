import type { Metadata } from "next";
import { createCorePageMetadata } from "@/i18n/metadata";

export const metadata: Metadata = createCorePageMetadata("products", "en");

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
