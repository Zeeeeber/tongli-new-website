import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Wood Veneer Panels for Door Production",
  description:
    "Wood veneer panels, engineered veneer and matching materials for interior door and decorative door production.",
  path: "/applications/door-production",
});

export default function DoorProductionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
