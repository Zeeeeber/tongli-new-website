import type { Metadata } from "next";
import { createCorePageMetadata } from "@/i18n/metadata";

export const metadata: Metadata = createCorePageMetadata("applications", "en");

export default function ApplicationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
