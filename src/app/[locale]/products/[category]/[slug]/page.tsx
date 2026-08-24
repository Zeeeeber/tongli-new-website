import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ProductBreadcrumbJsonLd } from "@/components/seo/ProductBreadcrumbJsonLd";
import { EngineeredWoodVeneerDetailTemplate } from "@/components/product/EngineeredWoodVeneerDetailTemplate";
import { MelamineBoardDetailTemplate } from "@/components/product/MelamineBoardDetailTemplate";
import { NaturalWoodVeneerDetailTemplate } from "@/components/product/NaturalWoodVeneerDetailTemplate";
import { ThreeDWoodPanelsDetailTemplate } from "@/components/product/ThreeDWoodPanelsDetailTemplate";
import { VeneerEdgeBandingDetailTemplate } from "@/components/product/VeneerEdgeBandingDetailTemplate";
import WoodVeneerPanelDetailTemplate from "@/components/product/WoodVeneerPanelDetailTemplate";
import { BasswoodPlywoodDetailTemplate } from "@/components/product/BasswoodPlywoodDetailTemplate";
import { BirchPlywoodDetailTemplate } from "@/components/product/BirchPlywoodDetailTemplate";
import { CommercialPlywoodDetailTemplate } from "@/components/product/CommercialPlywoodDetailTemplate";
import { FireproofMDFDetailTemplate } from "@/components/product/FireproofMDFDetailTemplate";
import { MRMDFDetailTemplate } from "@/components/product/MRMDFDetailTemplate";
import { ParticleBoardDetailTemplate } from "@/components/product/ParticleBoardDetailTemplate";
import { RawMDFDetailTemplate } from "@/components/product/RawMDFDetailTemplate";
import {
  engineeredWoodVeneerProducts,
  getProductBySlug as getEngineeredProduct,
} from "@/data/products/engineered-wood-veneer-products";
import {
  getMelamineBoardProductBySlug,
  melamineBoardProducts,
} from "@/data/products/melamine-board-products";
import {
  getProductBySlug as getNaturalProduct,
  naturalWoodVeneerProducts,
  type NaturalWoodVeneerProduct,
} from "@/data/products/natural-wood-veneer-products";
import {
  getSupportingBoardProductBySlug,
  supportingBoardsProducts,
  type SupportingBoardSubCategorySlug,
} from "@/data/products/supporting-boards-products";
import {
  getThreeDWoodPanelsProductBySlug,
  threeDWoodPanelsProducts,
} from "@/data/products/three-d-wood-panels-products";
import {
  getVeneerEdgeBandingProductBySlug,
  veneerEdgeBandingProducts,
} from "@/data/products/veneer-edge-banding-products";
import { woodVeneerPanelProducts } from "@/data/products/wood-veneer-panel-products";
import { localizePath } from "@/i18n/config";
import { createFullSiteMetadata } from "@/i18n/metadata";
import {
  isKeyOf,
  productCategorySeo,
  type ProductCategorySlug,
} from "@/i18n/full-site-routes";
import { translateFullSiteText } from "@/i18n/full-site-text";
import { nonDefaultLocales, resolveLocalizedLocale } from "@/i18n/server";

type PageProps = {
  params: Promise<{ locale: string; category: string; slug: string }>;
};

type ProductSeoRecord = {
  slug: string;
  name: string;
  featuredImage?: string;
  shortDesc?: string;
  shortDescription?: string;
  metaDescription?: string;
  seoTitle?: string;
};

const productsByCategory = {
  "3d-wood-panels": threeDWoodPanelsProducts,
  "engineered-wood-veneer": engineeredWoodVeneerProducts,
  "melamine-board": melamineBoardProducts,
  "natural-wood-veneer": naturalWoodVeneerProducts,
  "supporting-boards": supportingBoardsProducts,
  "veneer-edge-banding": veneerEdgeBandingProducts,
  "wood-veneer-panels": Object.values(woodVeneerPanelProducts).filter(
    (product) => product.featuredImage.length > 0,
  ),
} as const;

function getProduct(category: ProductCategorySlug, slug: string): ProductSeoRecord | undefined {
  switch (category) {
    case "3d-wood-panels":
      return getThreeDWoodPanelsProductBySlug(slug);
    case "engineered-wood-veneer":
      return getEngineeredProduct(slug);
    case "melamine-board":
      return getMelamineBoardProductBySlug(slug);
    case "natural-wood-veneer":
      return getNaturalProduct(slug);
    case "supporting-boards":
      return getSupportingBoardProductBySlug(slug);
    case "veneer-edge-banding":
      return getVeneerEdgeBandingProductBySlug(slug);
    case "wood-veneer-panels":
      return woodVeneerPanelProducts[slug];
  }
}

export function generateStaticParams() {
  return nonDefaultLocales.flatMap((locale) =>
    Object.entries(productsByCategory).flatMap(([category, products]) =>
      products.map((product) => ({ locale, category, slug: product.slug })),
    ),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const values = await params;
  const locale = await resolveLocalizedLocale(Promise.resolve({ locale: values.locale }));
  if (!isKeyOf(values.category, productCategorySeo)) return {};
  const product = getProduct(values.category, values.slug);
  if (!product) return {};

  return createFullSiteMetadata({
    locale,
    path: `/products/${values.category}/${product.slug}`,
    title: product.seoTitle || product.name,
    description:
      product.metaDescription ||
      product.shortDesc ||
      product.shortDescription ||
      productCategorySeo[values.category].description,
    image: product.featuredImage,
  });
}

function renderSupportingBoard(
  subCategory: SupportingBoardSubCategorySlug,
  product: NaturalWoodVeneerProduct,
  slug: string,
) {
  switch (subCategory) {
    case "commercial-plywood":
      return <CommercialPlywoodDetailTemplate product={product} slug={slug} />;
    case "basswood-plywood":
      return <BasswoodPlywoodDetailTemplate product={product} slug={slug} />;
    case "birch-plywood":
      return <BirchPlywoodDetailTemplate product={product} slug={slug} />;
    case "raw-mdf":
      return <RawMDFDetailTemplate product={product} slug={slug} />;
    case "fireproof-mdf":
      return <FireproofMDFDetailTemplate product={product} slug={slug} />;
    case "mr-mdf":
      return <MRMDFDetailTemplate product={product} slug={slug} />;
    case "particle-board":
      return <ParticleBoardDetailTemplate product={product} slug={slug} />;
  }
}

export default async function LocalizedProductDetailPage({ params }: PageProps) {
  const values = await params;
  const locale = await resolveLocalizedLocale(Promise.resolve({ locale: values.locale }));

  if (
    (values.category === "3d-wood-panels" && values.slug === "wave-pattern") ||
    (values.category === "natural-wood-veneer" && values.slug === "natural-wood-veneer")
  ) {
    redirect(localizePath(`/products/${values.category}`, locale));
  }

  if (!isKeyOf(values.category, productCategorySeo)) notFound();
  const product = getProduct(values.category, values.slug);
  if (!product) notFound();

  const categoryPath = `/products/${values.category}`;
  const productPath = `${categoryPath}/${values.slug}`;
  const categoryName = translateFullSiteText(
    locale,
    productCategorySeo[values.category].title,
  );
  const productName = translateFullSiteText(locale, product.name);

  let detail;
  switch (values.category) {
    case "3d-wood-panels":
      detail = <ThreeDWoodPanelsDetailTemplate product={product as NaturalWoodVeneerProduct} slug={values.slug} />;
      break;
    case "engineered-wood-veneer":
      detail = <EngineeredWoodVeneerDetailTemplate product={getEngineeredProduct(values.slug)!} slug={values.slug} />;
      break;
    case "melamine-board":
      detail = <MelamineBoardDetailTemplate product={product as NaturalWoodVeneerProduct} slug={values.slug} />;
      break;
    case "natural-wood-veneer":
      detail = <NaturalWoodVeneerDetailTemplate product={getNaturalProduct(values.slug)!} slug={values.slug} />;
      break;
    case "supporting-boards": {
      const supportingProduct = getSupportingBoardProductBySlug(values.slug)!;
      detail = renderSupportingBoard(
        supportingProduct.subCategorySlug,
        supportingProduct as unknown as NaturalWoodVeneerProduct,
        values.slug,
      );
      break;
    }
    case "veneer-edge-banding":
      detail = <VeneerEdgeBandingDetailTemplate product={product as NaturalWoodVeneerProduct} slug={values.slug} />;
      break;
    case "wood-veneer-panels":
      detail = <WoodVeneerPanelDetailTemplate product={woodVeneerPanelProducts[values.slug]} slug={values.slug} />;
      break;
  }

  return (
    <>
      <ProductBreadcrumbJsonLd
        categoryName={categoryName}
        categoryPath={localizePath(categoryPath, locale)}
        productName={productName}
        productPath={localizePath(productPath, locale)}
      />
      {detail}
    </>
  );
}
