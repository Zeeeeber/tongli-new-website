import type { Metadata } from "next";
import { ApplicationsPageContent } from "@/app/applications/page";
import { createCorePageMetadata } from "@/i18n/metadata";
import {
  generateLocalizedParams,
  resolveLocalizedLocale,
  type LocalizedPageProps,
} from "@/i18n/server";

export const generateStaticParams = generateLocalizedParams;

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  return createCorePageMetadata("applications", await resolveLocalizedLocale(params));
}

export default async function LocalizedApplicationsPage({ params }: LocalizedPageProps) {
  return <ApplicationsPageContent locale={await resolveLocalizedLocale(params)} />;
}
