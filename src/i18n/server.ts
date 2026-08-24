import { notFound } from "next/navigation";
import { defaultLocale, isLocale, locales, type Locale } from "./config";

export const nonDefaultLocales = locales.filter(
  (locale): locale is Exclude<Locale, "en"> => locale !== defaultLocale,
);

export const additionalLocales = ["ms", "id", "pt"] as const;

export interface LocalizedPageProps {
  params: Promise<{ locale: string }>;
}

export function generateLocalizedParams() {
  return nonDefaultLocales.map((locale) => ({ locale }));
}

export async function resolveLocalizedLocale(
  params: LocalizedPageProps["params"],
): Promise<Exclude<Locale, "en">> {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "en") {
    notFound();
  }

  return locale;
}
