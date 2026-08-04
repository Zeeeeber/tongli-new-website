import { Metadata } from "next";
import { notFound } from "next/navigation";
import { woodVeneerPanelProducts } from "@/data/products/wood-veneer-panel-products";
import WoodVeneerPanelDetailTemplate from "@/components/product/WoodVeneerPanelDetailTemplate";
import { ProductBreadcrumbJsonLd } from "@/components/seo/ProductBreadcrumbJsonLd";
import { defaultSeo, siteConfig } from "@/lib/seo/site";
import { withSiteName } from "@/lib/seo/metadata";

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

  const productUrl = `/products/wood-veneer-panels/${product.slug}`;
  const socialImage = product.featuredImage || defaultSeo.ogImage;
  const metadataTitle = withSiteName(product.seoTitle);

  return {
    title: metadataTitle,
    description: product.metaDescription,
    alternates: {
      canonical: productUrl,
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: metadataTitle,
      description: product.metaDescription,
      locale: siteConfig.locale,
      url: productUrl,
      images: [{ url: socialImage, alt: product.name }],
    },
    twitter: {
      card: defaultSeo.twitterCard,
      title: metadataTitle,
      description: product.metaDescription,
      images: [socialImage],
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
    <>
      <ProductBreadcrumbJsonLd
        categoryName="Wood Veneer Panels"
        categoryPath="/products/wood-veneer-panels"
        productName={product.name}
        productPath={`/products/wood-veneer-panels/${slug}`}
      />
      <WoodVeneerPanelDetailTemplate
        product={product}
        slug={slug}
      />
    </>
  );
}
