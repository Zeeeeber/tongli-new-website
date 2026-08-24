import type { Metadata } from "next";
import TermsPage from "@/app/terms/page";
import { createFullSiteMetadata } from "@/i18n/metadata";
import { legalPageSeo } from "@/i18n/full-site-routes";
import {
  generateLocalizedParams,
  resolveLocalizedLocale,
  type LocalizedPageProps,
} from "@/i18n/server";

export const generateStaticParams = generateLocalizedParams;

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  return createFullSiteMetadata({
    locale: await resolveLocalizedLocale(params),
    path: "/terms",
    ...legalPageSeo.terms,
  });
}

export default async function LocalizedTermsPage({ params }: LocalizedPageProps) {
  await resolveLocalizedLocale(params);
  return <TermsPage />;
}
