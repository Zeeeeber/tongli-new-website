import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Tongli Timber | Wood Veneer & Decorative Panel Supplier",
  description:
    "Contact Tongli Timber for wood veneer panels, natural veneer, engineered veneer, 3D wood panels and decorative plywood sourcing, samples and B2B project inquiries.",
  alternates: {
    canonical: "https://tlveneer.com/contact",
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
    url: "https://tlveneer.com/contact",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tongli Timber | Wood Veneer & Decorative Panel Supplier",
    description:
      "Contact Tongli Timber for wood veneer panels, natural veneer, engineered veneer, 3D wood panels and decorative plywood sourcing, samples and B2B project inquiries.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
