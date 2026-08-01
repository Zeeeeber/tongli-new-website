import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Melamine Boards and Decorative Panels",
  description:
    "Melamine-faced plywood, MDF and particle board for cabinets, wardrobes, furniture and interior panels.",
  path: "/products/melamine-board",
});

export default function MelamineBoardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
