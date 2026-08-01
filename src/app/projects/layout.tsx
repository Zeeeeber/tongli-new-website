import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Wood Veneer Project Gallery",
  description:
    "Explore wood veneer and decorative panel applications across furniture, hospitality and commercial interior projects.",
  path: "/projects",
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
