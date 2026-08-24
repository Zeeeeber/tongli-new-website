import type { ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CompanyNewsPage from "@/app/resources/category/company-news/page";
import IndustryNewsPage from "@/app/resources/category/industry-news/page";
import ProductNewsPage from "@/app/resources/category/product-news/page";
import { createFullSiteMetadata } from "@/i18n/metadata";
import {
  isKeyOf,
  resourceCategorySeo,
  resourceCategorySlugs,
  type ResourceCategorySlug,
} from "@/i18n/full-site-routes";
import { nonDefaultLocales, resolveLocalizedLocale } from "@/i18n/server";

type PageProps = { params: Promise<{ locale: string; category: string }> };

const pages: Record<ResourceCategorySlug, ComponentType> = {
  "company-news": CompanyNewsPage,
  "industry-news": IndustryNewsPage,
  "product-news": ProductNewsPage,
};

export function generateStaticParams() {
  return nonDefaultLocales.flatMap((locale) =>
    resourceCategorySlugs.map((category) => ({ locale, category })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const values = await params;
  const locale = await resolveLocalizedLocale(Promise.resolve({ locale: values.locale }));
  if (!isKeyOf(values.category, resourceCategorySeo)) return {};
  return createFullSiteMetadata({
    locale,
    path: `/resources/category/${values.category}`,
    ...resourceCategorySeo[values.category],
  });
}

export default async function LocalizedResourceCategoryPage({ params }: PageProps) {
  const { locale: localeValue, category } = await params;
  await resolveLocalizedLocale(Promise.resolve({ locale: localeValue }));
  if (!isKeyOf(category, pages)) notFound();
  const Page = pages[category];
  return <Page />;
}
