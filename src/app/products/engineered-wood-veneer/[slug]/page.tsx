import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getAllProductSlugs,
} from "@/data/products/engineered-wood-veneer-products";
import { EngineeredWoodVeneerDetailTemplate } from "@/components/product/EngineeredWoodVeneerDetailTemplate";
import { ProductBreadcrumbJsonLd } from "@/components/seo/ProductBreadcrumbJsonLd";
import { defaultSeo } from "@/lib/seo/site";
import { withSiteName } from "@/lib/seo/metadata";

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
  const metadataTitle = withSiteName(title);
  const description = product.metaDescription || product.shortDesc;
  const productUrl = `/products/engineered-wood-veneer/${product.slug}`;
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

export default async function EngineeredWoodVeneerProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductBreadcrumbJsonLd
        categoryName="Engineered Wood Veneer"
        categoryPath="/products/engineered-wood-veneer"
        productName={product.name}
        productPath={`/products/engineered-wood-veneer/${slug}`}
      />
      <EngineeredWoodVeneerDetailTemplate
        product={product}
        slug={slug}
      />
    </>
  );
}
