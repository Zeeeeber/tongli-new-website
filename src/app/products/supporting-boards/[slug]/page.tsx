import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getSupportingBoardProductBySlug,
  getAllSupportingBoardProductSlugs,
} from "@/data/products/supporting-boards-products";
import { BasswoodPlywoodDetailTemplate } from "@/components/product/BasswoodPlywoodDetailTemplate";
import { BirchPlywoodDetailTemplate } from "@/components/product/BirchPlywoodDetailTemplate";
import { CommercialPlywoodDetailTemplate } from "@/components/product/CommercialPlywoodDetailTemplate";
import { FireproofMDFDetailTemplate } from "@/components/product/FireproofMDFDetailTemplate";
import { MRMDFDetailTemplate } from "@/components/product/MRMDFDetailTemplate";
import { ParticleBoardDetailTemplate } from "@/components/product/ParticleBoardDetailTemplate";
import { RawMDFDetailTemplate } from "@/components/product/RawMDFDetailTemplate";
import { type NaturalWoodVeneerProduct } from "@/data/products/natural-wood-veneer-products";
import { type SupportingBoardSubCategorySlug } from "@/data/products/supporting-boards-products";
import { ProductBreadcrumbJsonLd } from "@/components/seo/ProductBreadcrumbJsonLd";
import { defaultSeo } from "@/lib/seo/site";
import { withSiteName } from "@/lib/seo/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

type ProductWithOptionalSeo = ReturnType<
  typeof getSupportingBoardProductBySlug
> & {
  seoTitle?: string;
  metaDescription?: string;
};

export async function generateStaticParams() {
  return getAllSupportingBoardProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getSupportingBoardProductBySlug(slug) as
    | ProductWithOptionalSeo
    | undefined;

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const title = product.seoTitle || product.name;
  const metadataTitle = withSiteName(title);
  const description = product.metaDescription || product.shortDesc;
  const productUrl = `/products/supporting-boards/${product.slug}`;
  const socialImage = product.featuredImage || defaultSeo.ogImage;

  return {
    title: metadataTitle,
    description,
    alternates: {
      canonical: productUrl,
    },
    openGraph: {
      title: metadataTitle,
      description,
      url: productUrl,
      type: "website",
      images: [{ url: socialImage, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description,
      images: [socialImage],
    },
  };
}

function renderTemplateForSubCategory(
  subCategorySlug: SupportingBoardSubCategorySlug,
  product: NaturalWoodVeneerProduct,
  slug: string,
) {
  switch (subCategorySlug) {
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
    default: {
      const _exhaustiveCheck: never = subCategorySlug;
      return _exhaustiveCheck;
    }
  }
}

export default async function SupportingBoardsProductDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const product = getSupportingBoardProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductBreadcrumbJsonLd
        categoryName="Supporting Boards"
        categoryPath="/products/supporting-boards"
        productName={product.name}
        productPath={`/products/supporting-boards/${slug}`}
      />
      {renderTemplateForSubCategory(
        product.subCategorySlug,
        product as unknown as NaturalWoodVeneerProduct,
        slug,
      )}
    </>
  );
}
