import type { ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CabinetsWardrobesPage from "@/app/applications/cabinets-wardrobes/page";
import DoorProductionPage from "@/app/applications/door-production/page";
import FurnitureManufacturingPage from "@/app/applications/furniture-manufacturing/page";
import HotelCommercialPage from "@/app/applications/hotel-commercial/page";
import WallPanelsInteriorPage from "@/app/applications/wall-panels-interior/page";
import WholeHouseCustomizationPage from "@/app/applications/whole-house-customization/page";
import { createFullSiteMetadata } from "@/i18n/metadata";
import {
  applicationPageSeo,
  applicationSlugs,
  isKeyOf,
  type ApplicationSlug,
} from "@/i18n/full-site-routes";
import { nonDefaultLocales, resolveLocalizedLocale } from "@/i18n/server";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

const pages: Record<ApplicationSlug, ComponentType> = {
  "cabinets-wardrobes": CabinetsWardrobesPage,
  "door-production": DoorProductionPage,
  "furniture-manufacturing": FurnitureManufacturingPage,
  "hotel-commercial": HotelCommercialPage,
  "wall-panels-interior": WallPanelsInteriorPage,
  "whole-house-customization": WholeHouseCustomizationPage,
};

export function generateStaticParams() {
  return nonDefaultLocales.flatMap((locale) =>
    applicationSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const values = await params;
  const locale = await resolveLocalizedLocale(Promise.resolve({ locale: values.locale }));
  if (!isKeyOf(values.slug, applicationPageSeo)) return {};
  const seo = applicationPageSeo[values.slug];
  return createFullSiteMetadata({
    locale,
    path: `/applications/${values.slug}`,
    ...seo,
  });
}

export default async function LocalizedApplicationPage({ params }: PageProps) {
  const { locale: localeValue, slug } = await params;
  await resolveLocalizedLocale(Promise.resolve({ locale: localeValue }));
  if (!isKeyOf(slug, pages)) notFound();
  const Page = pages[slug];
  return <Page />;
}
