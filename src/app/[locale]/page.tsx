import type { Metadata } from "next";
import { HomePageContent } from "@/app/page";
import { createCorePageMetadata } from "@/i18n/metadata";
import {
  additionalLocales,
  resolveLocalizedLocale,
  type LocalizedPageProps,
} from "@/i18n/server";

export function generateStaticParams() {
  return additionalLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalizedPageProps): Promise<Metadata> {
  const locale = await resolveLocalizedLocale(params);
  return createCorePageMetadata("home", locale);
}

export default async function AdditionalLocaleHomePage({
  params,
}: LocalizedPageProps) {
  const locale = await resolveLocalizedLocale(params);
  return <HomePageContent locale={locale} />;
}
