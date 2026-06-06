import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

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
  metadataBase: new URL("https://tlveneer.com"),
  title: "Tongli Timber | Wood Veneer Panels & Decorative Plywood Manufacturer",
  description:
    "Tongli Timber manufactures natural wood veneer, wood veneer panels, engineered veneer, 3D wood panels and decorative plywood for furniture, doors, hotels and commercial interiors.",
  alternates: {
    canonical: "https://tlveneer.com/",
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
    title: "Tongli Timber | Wood Veneer Panels & Decorative Plywood Manufacturer",
    description:
      "Tongli Timber manufactures natural wood veneer, wood veneer panels, engineered veneer, 3D wood panels and decorative plywood for furniture, doors, hotels and commercial interiors.",
    url: "https://tlveneer.com/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tongli Timber | Wood Veneer Panels & Decorative Plywood Manufacturer",
    description:
      "Tongli Timber manufactures natural wood veneer, wood veneer panels, engineered veneer, 3D wood panels and decorative plywood for furniture, doors, hotels and commercial interiors.",
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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
