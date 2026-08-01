import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Request Wood Veneer Samples",
  description:
    "Request wood veneer, veneer panel and decorative surface samples for material evaluation and project selection.",
  path: "/samples",
});

export default function SamplesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
