import type { Metadata } from "next";
import { defaultSeo, siteConfig } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Wood Veneer Collections for Furniture, Doors & Interiors | Tongli Timber",
  description:
    "Browse Tongli Timber veneer collections including natural wood veneer, engineered veneer and melamine board surfaces for furniture manufacturing and interior decoration.",
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/collections`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Tongli Timber",
    title: "Wood Veneer Collections for Furniture, Doors & Interiors | Tongli Timber",
    description:
      "Browse Tongli Timber veneer collections including natural wood veneer, engineered veneer and melamine board surfaces for furniture manufacturing and interior decoration.",
    url: `${siteConfig.canonicalUrl}/collections`,
    locale: "en_US",
    images: [
      {
        url: defaultSeo.ogImage,
        width: defaultSeo.ogImageWidth,
        height: defaultSeo.ogImageHeight,
        alt: "Tongli Timber wood veneer collections",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wood Veneer Collections for Furniture, Doors & Interiors | Tongli Timber",
    description:
      "Browse Tongli Timber veneer collections including natural wood veneer, engineered veneer and melamine board surfaces for furniture manufacturing and interior decoration.",
    images: [defaultSeo.ogImage],
  },
};

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
