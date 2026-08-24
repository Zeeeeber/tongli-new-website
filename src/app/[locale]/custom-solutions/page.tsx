import type { Metadata } from "next";
import { CustomSolutionsPageContent } from "@/app/custom-solutions/page";
import { createCorePageMetadata } from "@/i18n/metadata";
import {
  generateLocalizedParams,
  resolveLocalizedLocale,
  type LocalizedPageProps,
} from "@/i18n/server";

export const generateStaticParams = generateLocalizedParams;

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  return createCorePageMetadata("custom-solutions", await resolveLocalizedLocale(params));
}

export default async function LocalizedCustomSolutionsPage({ params }: LocalizedPageProps) {
  return <CustomSolutionsPageContent locale={await resolveLocalizedLocale(params)} />;
}
