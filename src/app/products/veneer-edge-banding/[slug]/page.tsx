import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getVeneerEdgeBandingProductBySlug,
  getAllVeneerEdgeBandingProductSlugs,
} from "@/data/products/veneer-edge-banding-products";
import { VeneerEdgeBandingDetailTemplate } from "@/components/product/VeneerEdgeBandingDetailTemplate";
import { type NaturalWoodVeneerProduct } from "@/data/products/natural-wood-veneer-products";

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
  const description = product.metaDescription || product.shortDesc;
  const productUrl = `/products/veneer-edge-banding/${product.slug}`;

  return {
    title: `${title} | Tongli Timber`,
    description,
    alternates: {
      canonical: productUrl,
    },
    openGraph: {
      title: `${title} | Tongli Timber`,
      description,
      url: productUrl,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Tongli Timber`,
      description,
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
    <VeneerEdgeBandingDetailTemplate
      product={product as unknown as NaturalWoodVeneerProduct}
      slug={slug}
    />
  );
}
