import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Wood Veneer Panels, Natural Veneer & Decorative Board Products | Tongli Timber",
  description:
    "Explore Tongli Timber wood veneer panels, natural wood veneer, engineered veneer, 3D wood panels, melamine boards and supporting boards for B2B furniture, door and interior projects.",
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
      "Explore Tongli Timber wood veneer panels, natural wood veneer, engineered veneer, 3D wood panels, melamine boards and supporting boards for B2B furniture, door and interior projects.",
    url: `${siteConfig.canonicalUrl}/products`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wood Veneer Panels, Natural Veneer & Decorative Board Products | Tongli Timber",
    description:
      "Explore Tongli Timber wood veneer panels, natural wood veneer, engineered veneer, 3D wood panels, melamine boards and supporting boards for B2B furniture, door and interior projects.",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
