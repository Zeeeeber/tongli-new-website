import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getAllProductSlugs,
} from "@/data/products/natural-wood-veneer-products";
import { NaturalWoodVeneerDetailTemplate } from "@/components/product/NaturalWoodVeneerDetailTemplate";

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
  const metadataTitle = /\|\s*Tongli Timber\s*$/i.test(title)
    ? title
    : `${title} | Tongli Timber`;
  const description = product.metaDescription || product.shortDesc;
  const productUrl = `/products/natural-wood-veneer/${product.slug}`;

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
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description,
    },
  };
}

export default async function NaturalWoodVeneerProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <NaturalWoodVeneerDetailTemplate
      product={product}
      slug={slug}
    />
  );
}
