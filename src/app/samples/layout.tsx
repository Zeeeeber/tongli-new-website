import type { Metadata } from "next";
import { createCorePageMetadata } from "@/i18n/metadata";

export const metadata: Metadata = createCorePageMetadata("samples", "en");

export default function SamplesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
