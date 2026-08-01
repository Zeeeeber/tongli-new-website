import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Plywood, MDF and Supporting Boards",
  description:
    "Commercial plywood, birch plywood, basswood plywood, MDF and particle board substrates for furniture and interior production.",
  path: "/products/supporting-boards",
});

export default function SupportingBoardsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
