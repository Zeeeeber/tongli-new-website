import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getAllProductSlugs,
} from "@/data/products/engineered-wood-veneer-products";
import { EngineeredWoodVeneerDetailTemplate } from "@/components/product/EngineeredWoodVeneerDetailTemplate";

interface PageProps {
  params: Promise<{ slug: string }>;
}

type ProductWithOptionalSeo = ReturnType<typeof getProductBySlug> & {
  seoTitle?: string;
  metaDescription?: string;
};

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug) as ProductWithOptionalSeo | undefined;

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const title = product.seoTitle || product.name;
  const description = product.metaDescription || product.shortDesc;
  const productUrl = `/products/engineered-wood-veneer/${product.slug}`;

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

export default async function EngineeredWoodVeneerProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <EngineeredWoodVeneerDetailTemplate
      product={product}
      slug={slug}
    />
  );
}
