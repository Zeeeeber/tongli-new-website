import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getThreeDWoodPanelsProductBySlug,
  getAllThreeDWoodPanelsProductSlugs,
} from "@/data/products/three-d-wood-panels-products";
import { ThreeDWoodPanelsDetailTemplate } from "@/components/product/ThreeDWoodPanelsDetailTemplate";
import { ProductBreadcrumbJsonLd } from "@/components/seo/ProductBreadcrumbJsonLd";
import { type NaturalWoodVeneerProduct } from "@/data/products/natural-wood-veneer-products";
import { defaultSeo } from "@/lib/seo/site";
import { withSiteName } from "@/lib/seo/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

type ProductWithOptionalSeo = ReturnType<
  typeof getThreeDWoodPanelsProductBySlug
> & {
  seoTitle?: string;
  metaDescription?: string;
};

export async function generateStaticParams() {
  return getAllThreeDWoodPanelsProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getThreeDWoodPanelsProductBySlug(slug) as
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
  const productUrl = `/products/3d-wood-panels/${product.slug}`;
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

export default async function ThreeDWoodPanelsProductDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const product = getThreeDWoodPanelsProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductBreadcrumbJsonLd
        categoryName="3D Wood Panels"
        categoryPath="/products/3d-wood-panels"
        productName={product.name}
        productPath={`/products/3d-wood-panels/${slug}`}
      />
      <ThreeDWoodPanelsDetailTemplate
        product={product as unknown as NaturalWoodVeneerProduct}
        slug={slug}
      />
    </>
  );
}
