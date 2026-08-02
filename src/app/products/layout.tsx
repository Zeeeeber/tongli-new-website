import type { Metadata } from "next";
import { defaultSeo, siteConfig } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Wood Veneer Panels, Natural Veneer & Decorative Board Products | Tongli Timber",
  description:
    "Explore Tongli Timber veneer panels, natural and engineered veneer, 3D wood panels, melamine boards and substrates for B2B furniture and interior projects.",
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/products`,
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
    title: "Wood Veneer Panels, Natural Veneer & Decorative Board Products | Tongli Timber",
    description:
      "Explore Tongli Timber veneer panels, natural and engineered veneer, 3D wood panels, melamine boards and substrates for B2B furniture and interior projects.",
    url: `${siteConfig.canonicalUrl}/products`,
    locale: "en_US",
    images: [
      {
        url: defaultSeo.ogImage,
        width: defaultSeo.ogImageWidth,
        height: defaultSeo.ogImageHeight,
        alt: "Tongli Timber wood veneer and decorative panel products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wood Veneer Panels, Natural Veneer & Decorative Board Products | Tongli Timber",
    description:
      "Explore Tongli Timber veneer panels, natural and engineered veneer, 3D wood panels, melamine boards and substrates for B2B furniture and interior projects.",
    images: [defaultSeo.ogImage],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
