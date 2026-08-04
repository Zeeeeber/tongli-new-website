import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getVeneerEdgeBandingProductBySlug,
  getAllVeneerEdgeBandingProductSlugs,
} from "@/data/products/veneer-edge-banding-products";
import { VeneerEdgeBandingDetailTemplate } from "@/components/product/VeneerEdgeBandingDetailTemplate";
import { ProductBreadcrumbJsonLd } from "@/components/seo/ProductBreadcrumbJsonLd";
import { type NaturalWoodVeneerProduct } from "@/data/products/natural-wood-veneer-products";
import { defaultSeo } from "@/lib/seo/site";
import { withSiteName } from "@/lib/seo/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

type ProductWithOptionalSeo = ReturnType<
  typeof getVeneerEdgeBandingProductBySlug
> & {
  seoTitle?: string;
  metaDescription?: string;
};

export async function generateStaticParams() {
  return getAllVeneerEdgeBandingProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getVeneerEdgeBandingProductBySlug(slug) as
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
  const productUrl = `/products/veneer-edge-banding/${product.slug}`;
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

export default async function VeneerEdgeBandingProductDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const product = getVeneerEdgeBandingProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductBreadcrumbJsonLd
        categoryName="Veneer Edge Banding"
        categoryPath="/products/veneer-edge-banding"
        productName={product.name}
        productPath={`/products/veneer-edge-banding/${slug}`}
      />
      <VeneerEdgeBandingDetailTemplate
        product={product as unknown as NaturalWoodVeneerProduct}
        slug={slug}
      />
    </>
  );
}
