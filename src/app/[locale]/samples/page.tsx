import type { Metadata } from "next";
import { SamplesPageContent } from "@/app/samples/page";
import { createCorePageMetadata } from "@/i18n/metadata";
import {
  generateLocalizedParams,
  resolveLocalizedLocale,
  type LocalizedPageProps,
} from "@/i18n/server";

export const generateStaticParams = generateLocalizedParams;

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  return createCorePageMetadata("samples", await resolveLocalizedLocale(params));
}

export default async function LocalizedSamplesPage({ params }: LocalizedPageProps) {
  return <SamplesPageContent locale={await resolveLocalizedLocale(params)} />;
}
