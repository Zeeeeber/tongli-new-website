import type { Metadata } from "next";
import { ProductsPageContent } from "@/app/products/page";
import { createCorePageMetadata } from "@/i18n/metadata";
import {
  generateLocalizedParams,
  resolveLocalizedLocale,
  type LocalizedPageProps,
} from "@/i18n/server";

export const generateStaticParams = generateLocalizedParams;

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  return createCorePageMetadata("products", await resolveLocalizedLocale(params));
}

export default async function LocalizedProductsPage({ params }: LocalizedPageProps) {
  return <ProductsPageContent locale={await resolveLocalizedLocale(params)} />;
}
