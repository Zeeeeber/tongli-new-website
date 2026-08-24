import { Metadata } from "next";
import { ResourcesPageContent } from "@/components/resources/ResourcesPageContent";
import { createCorePageMetadata } from "@/i18n/metadata";

export const metadata: Metadata = createCorePageMetadata("resources", "en");

export default function ResourcesPage() {
  return <ResourcesPageContent locale="en" />;
}
