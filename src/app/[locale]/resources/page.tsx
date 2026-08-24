import type { Metadata } from "next";
import { ResourcesPageContent } from "@/app/resources/page";
import { createCorePageMetadata } from "@/i18n/metadata";
import {
  generateLocalizedParams,
  resolveLocalizedLocale,
  type LocalizedPageProps,
} from "@/i18n/server";

export const generateStaticParams = generateLocalizedParams;

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  return createCorePageMetadata("resources", await resolveLocalizedLocale(params));
}

export default async function LocalizedResourcesPage({ params }: LocalizedPageProps) {
  return <ResourcesPageContent locale={await resolveLocalizedLocale(params)} />;
}
