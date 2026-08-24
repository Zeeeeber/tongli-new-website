import type { Metadata } from "next";
import ContactPageContent from "@/components/contact/ContactPageContent";
import { createContactMetadata } from "@/i18n/metadata";
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
  return createContactMetadata(locale);
}

export default async function AdditionalLocaleContactPage({
  params,
}: LocalizedPageProps) {
  const locale = await resolveLocalizedLocale(params);
  return <ContactPageContent locale={locale} />;
}
