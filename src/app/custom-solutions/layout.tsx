import type { Metadata } from "next";
import { createCorePageMetadata } from "@/i18n/metadata";

export const metadata: Metadata = createCorePageMetadata("custom-solutions", "en");

export default function CustomSolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
