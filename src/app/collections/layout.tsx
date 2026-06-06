import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wood Veneer Collections for Furniture, Doors & Interiors | Tongli Timber",
  description:
    "Browse Tongli Timber veneer collections including natural wood veneer, engineered veneer and melamine board surfaces for furniture manufacturing and interior decoration.",
  alternates: {
    canonical: "https://tlveneer.com/collections",
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
    url: "https://tlveneer.com/collections",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wood Veneer Collections for Furniture, Doors & Interiors | Tongli Timber",
    description:
      "Browse Tongli Timber veneer collections including natural wood veneer, engineered veneer and melamine board surfaces for furniture manufacturing and interior decoration.",
  },
};

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
