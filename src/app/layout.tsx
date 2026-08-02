import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { JsonLd } from "@/components/seo/JsonLd";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/seo/schema";
import { defaultSeo, siteConfig } from "@/lib/seo/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalUrl),
  title: "Tongli Timber | Wood Veneer Panels & Decorative Plywood Manufacturer",
  description:
    "Tongli Timber manufactures natural and engineered wood veneer, veneer panels, 3D wood panels and decorative plywood for furniture and commercial interiors.",
  alternates: {
    canonical: siteConfig.canonicalUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon.png", type: "image/png" },
      { url: "/favicon/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/favicon/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon/apple-icon.png",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Tongli Timber",
    title: "Tongli Timber | Wood Veneer Panels & Decorative Plywood Manufacturer",
    description:
      "Tongli Timber manufactures natural and engineered wood veneer, veneer panels, 3D wood panels and decorative plywood for furniture and commercial interiors.",
    url: siteConfig.canonicalUrl,
    locale: "en_US",
    images: [
      {
        url: defaultSeo.ogImage,
        width: defaultSeo.ogImageWidth,
        height: defaultSeo.ogImageHeight,
        alt: "Tongli Timber wood veneer panels and decorative plywood",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tongli Timber | Wood Veneer Panels & Decorative Plywood Manufacturer",
    description:
      "Tongli Timber manufactures natural and engineered wood veneer, veneer panels, 3D wood panels and decorative plywood for furniture and commercial interiors.",
    images: [defaultSeo.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body>
        <JsonLd data={[getOrganizationSchema(), getWebSiteSchema()]} />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
