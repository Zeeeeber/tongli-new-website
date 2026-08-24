import type { Metadata } from "next";
import PrivacyPage from "@/app/privacy/page";
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
    path: "/privacy",
    ...legalPageSeo.privacy,
  });
}

export default async function LocalizedPrivacyPage({ params }: LocalizedPageProps) {
  await resolveLocalizedLocale(params);
  return <PrivacyPage />;
}
