import type { Metadata } from "next";
import { AboutPageContent } from "@/app/about/page";
import { createCorePageMetadata } from "@/i18n/metadata";
import {
  generateLocalizedParams,
  resolveLocalizedLocale,
  type LocalizedPageProps,
} from "@/i18n/server";

export const generateStaticParams = generateLocalizedParams;

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  return createCorePageMetadata("about", await resolveLocalizedLocale(params));
}

export default async function LocalizedAboutPage({ params }: LocalizedPageProps) {
  return <AboutPageContent locale={await resolveLocalizedLocale(params)} />;
}
