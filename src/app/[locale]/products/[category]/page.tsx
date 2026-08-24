import type { ComponentType } from "react";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import ThreeDWoodPanelsPage from "@/app/products/3d-wood-panels/page";
import EngineeredWoodVeneerPage from "@/app/products/engineered-wood-veneer/page";
import MelamineBoardPage from "@/app/products/melamine-board/page";
import NaturalWoodVeneerPage from "@/app/products/natural-wood-veneer/page";
import SupportingBoardsPage from "@/app/products/supporting-boards/page";
import VeneerEdgeBandingPage from "@/app/products/veneer-edge-banding/page";
import WoodVeneerPanelsPage from "@/app/products/wood-veneer-panels/page";
import { localizePath } from "@/i18n/config";
import { createFullSiteMetadata } from "@/i18n/metadata";
import {
  isKeyOf,
  productCategorySeo,
  productCategorySlugs,
  type ProductCategorySlug,
} from "@/i18n/full-site-routes";
import { nonDefaultLocales, resolveLocalizedLocale } from "@/i18n/server";

type PageProps = { params: Promise<{ locale: string; category: string }> };

const pages: Record<ProductCategorySlug, ComponentType> = {
  "3d-wood-panels": ThreeDWoodPanelsPage,
  "engineered-wood-veneer": EngineeredWoodVeneerPage,
  "melamine-board": MelamineBoardPage,
  "natural-wood-veneer": NaturalWoodVeneerPage,
  "supporting-boards": SupportingBoardsPage,
  "veneer-edge-banding": VeneerEdgeBandingPage,
  "wood-veneer-panels": WoodVeneerPanelsPage,
};

export function generateStaticParams() {
  return nonDefaultLocales.flatMap((locale) =>
    productCategorySlugs.map((category) => ({ locale, category })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const values = await params;
  const locale = await resolveLocalizedLocale(Promise.resolve({ locale: values.locale }));
  if (!isKeyOf(values.category, productCategorySeo)) return {};
  return createFullSiteMetadata({
    locale,
    path: `/products/${values.category}`,
    ...productCategorySeo[values.category],
  });
}

export default async function LocalizedProductCategoryPage({ params }: PageProps) {
  const { locale: localeValue, category } = await params;
  const locale = await resolveLocalizedLocale(Promise.resolve({ locale: localeValue }));

  if (category === "edge-banding") {
    redirect(localizePath("/products/veneer-edge-banding", locale));
  }
  if (!isKeyOf(category, pages)) notFound();
  const Page = pages[category];
  return <Page />;
}
