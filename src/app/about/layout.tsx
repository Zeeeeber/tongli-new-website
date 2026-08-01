import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "About Tongli Timber | Wood Veneer & Decorative Plywood Factory Since 1999",
  description:
    "Learn about Tongli Timber, a wood veneer and decorative plywood manufacturer established in 1999, serving furniture, door, hotel and commercial interior clients worldwide.",
  alternates: {
    canonical: `${siteConfig.canonicalUrl}/about`,
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
    title: "About Tongli Timber | Wood Veneer & Decorative Plywood Factory Since 1999",
    description:
      "Learn about Tongli Timber, a wood veneer and decorative plywood manufacturer established in 1999, serving furniture, door, hotel and commercial interior clients worldwide.",
    url: `${siteConfig.canonicalUrl}/about`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tongli Timber | Wood Veneer & Decorative Plywood Factory Since 1999",
    description:
      "Learn about Tongli Timber, a wood veneer and decorative plywood manufacturer established in 1999, serving furniture, door, hotel and commercial interior clients worldwide.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
