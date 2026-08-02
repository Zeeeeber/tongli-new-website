import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getMelamineBoardProductBySlug,
  getAllMelamineBoardProductSlugs,
} from "@/data/products/melamine-board-products";
import { MelamineBoardDetailTemplate } from "@/components/product/MelamineBoardDetailTemplate";
import { ProductBreadcrumbJsonLd } from "@/components/seo/ProductBreadcrumbJsonLd";
import { type NaturalWoodVeneerProduct } from "@/data/products/natural-wood-veneer-products";
import { defaultSeo } from "@/lib/seo/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

type ProductWithOptionalSeo = ReturnType<typeof getMelamineBoardProductBySlug> & {
  seoTitle?: string;
  metaDescription?: string;
};

export async function generateStaticParams() {
  return getAllMelamineBoardProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getMelamineBoardProductBySlug(slug) as ProductWithOptionalSeo | undefined;

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const title = product.seoTitle || product.name;
  const description = product.metaDescription || product.shortDesc;
  const productUrl = `/products/melamine-board/${product.slug}`;
  const socialImage = product.featuredImage || defaultSeo.ogImage;

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
      images: [{ url: socialImage, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Tongli Timber`,
      description,
      images: [socialImage],
    },
  };
}

export default async function MelamineBoardProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getMelamineBoardProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductBreadcrumbJsonLd
        categoryName="Melamine Board"
        categoryPath="/products/melamine-board"
        productName={product.name}
        productPath={`/products/melamine-board/${slug}`}
      />
      <MelamineBoardDetailTemplate
        product={product as unknown as NaturalWoodVeneerProduct}
        slug={slug}
      />
    </>
  );
}
