import type { Metadata } from "next";
import { createCorePageMetadata } from "@/i18n/metadata";

export const metadata: Metadata = createCorePageMetadata("projects", "en");

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
