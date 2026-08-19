import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Plywood, MDF & Furniture Board Substrates",
  description:
    "Source commercial plywood, raw MDF, fire rated MDF, moisture-resistant MDF and particle board substrates for furniture, doors and interior panel production.",
  path: "/products/supporting-boards",
});

export default function SupportingBoardsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
