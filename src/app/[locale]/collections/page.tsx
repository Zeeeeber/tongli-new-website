import type { Metadata } from "next";
import { CollectionsPageContent } from "@/app/collections/page";
import { createCorePageMetadata } from "@/i18n/metadata";
import {
  generateLocalizedParams,
  resolveLocalizedLocale,
  type LocalizedPageProps,
} from "@/i18n/server";

export const generateStaticParams = generateLocalizedParams;

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  return createCorePageMetadata("collections", await resolveLocalizedLocale(params));
}

export default async function LocalizedCollectionsPage({ params }: LocalizedPageProps) {
  return <CollectionsPageContent locale={await resolveLocalizedLocale(params)} />;
}
