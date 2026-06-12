import { Metadata } from "next";
import { notFound } from "next/navigation";
import { woodVeneerPanelProducts } from "@/data/products/wood-veneer-panel-products";
import WoodVeneerPanelDetailTemplate from "@/components/product/WoodVeneerPanelDetailTemplate";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.values(woodVeneerPanelProducts)
    .filter((p) => p.featuredImage && p.featuredImage.length > 0)
    .map((product) => ({
      slug: product.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = woodVeneerPanelProducts[slug];

  if (!product) {
    return {
      title: "Product Not Found | Tongli Timber",
    };
  }

  return {
    title: product.seoTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `/products/wood-veneer-panels/${product.slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const product = woodVeneerPanelProducts[slug];

  if (!product) {
    notFound();
  }

  return (
    <WoodVeneerPanelDetailTemplate
      product={product}
      slug={slug}
    />
  );
}
