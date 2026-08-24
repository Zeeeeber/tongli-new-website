import type { ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ThreeDWoodPanelsCollectionPage from "@/app/collections/3d-wood-panels/page";
import EngineeredVeneerCollectionPage from "@/app/collections/engineered-veneer/page";
import MelamineBoardCollectionPage from "@/app/collections/melamine-board/page";
import NaturalWoodVeneerCollectionPage from "@/app/collections/natural-wood-veneer/page";
import { createFullSiteMetadata } from "@/i18n/metadata";
import {
  collectionPageSeo,
  collectionSlugs,
  isKeyOf,
  type CollectionSlug,
} from "@/i18n/full-site-routes";
import { nonDefaultLocales, resolveLocalizedLocale } from "@/i18n/server";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

const pages: Record<CollectionSlug, ComponentType> = {
  "3d-wood-panels": ThreeDWoodPanelsCollectionPage,
  "engineered-veneer": EngineeredVeneerCollectionPage,
  "melamine-board": MelamineBoardCollectionPage,
  "natural-wood-veneer": NaturalWoodVeneerCollectionPage,
};

export function generateStaticParams() {
  return nonDefaultLocales.flatMap((locale) =>
    collectionSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const values = await params;
  const locale = await resolveLocalizedLocale(Promise.resolve({ locale: values.locale }));
  if (!isKeyOf(values.slug, collectionPageSeo)) return {};
  return createFullSiteMetadata({
    locale,
    path: `/collections/${values.slug}`,
    ...collectionPageSeo[values.slug],
  });
}

export default async function LocalizedCollectionPage({ params }: PageProps) {
  const { locale: localeValue, slug } = await params;
  await resolveLocalizedLocale(Promise.resolve({ locale: localeValue }));
  if (!isKeyOf(slug, pages)) notFound();
  const Page = pages[slug];
  return <Page />;
}
