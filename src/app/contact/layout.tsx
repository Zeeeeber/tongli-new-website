import type { Metadata } from "next";
import { defaultSeo, siteConfig } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Contact Tongli Timber | Wood Veneer & Decorative Panel Supplier",
  description:
    "Contact Tongli Timber for wood veneer panels, natural veneer, engineered veneer, 3D wood panels and decorative plywood sourcing, samples and B2B project inquiries.",
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/contact`,
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
    title: "Contact Tongli Timber | Wood Veneer & Decorative Panel Supplier",
    description:
      "Contact Tongli Timber for wood veneer panels, natural veneer, engineered veneer, 3D wood panels and decorative plywood sourcing, samples and B2B project inquiries.",
    url: `${siteConfig.canonicalUrl}/contact`,
    locale: "en_US",
    images: [
      {
        url: defaultSeo.ogImage,
        width: defaultSeo.ogImageWidth,
        height: defaultSeo.ogImageHeight,
        alt: "Contact Tongli Timber",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tongli Timber | Wood Veneer & Decorative Panel Supplier",
    description:
      "Contact Tongli Timber for wood veneer panels, natural veneer, engineered veneer, 3D wood panels and decorative plywood sourcing, samples and B2B project inquiries.",
    images: [defaultSeo.ogImage],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
