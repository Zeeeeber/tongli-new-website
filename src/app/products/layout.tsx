import type { Metadata } from "next";
import { defaultSeo, siteConfig } from "@/lib/seo/site";

const title = "Wood Veneer Panels & Decorative Boards | Tongli Timber";
const description =
  "Source wood veneer panels, natural and engineered veneer, edge banding, melamine boards and substrates for furniture, doors and commercial interiors.";

export const metadata: Metadata = {
  title,
  description,
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
    title,
    description,
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
    title,
    description,
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
