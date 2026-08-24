import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/site";
import { articles } from "@/data/resources/articles";
import { woodVeneerPanelProducts } from "@/data/products/wood-veneer-panel-products";
import { naturalWoodVeneerProducts } from "@/data/products/natural-wood-veneer-products";
import { engineeredWoodVeneerProducts } from "@/data/products/engineered-wood-veneer-products";
import { threeDWoodPanelsProducts } from "@/data/products/three-d-wood-panels-products";
import { veneerEdgeBandingProducts } from "@/data/products/veneer-edge-banding-products";
import { melamineBoardProducts } from "@/data/products/melamine-board-products";
import { supportingBoardsProducts } from "@/data/products/supporting-boards-products";
import { locales, localizePath } from "@/i18n/config";

type ProductSitemapSource = {
  slug: string;
  updatedAt?: string;
};

const staticPaths = [
  "/",
  "/products",
  "/collections",
  "/applications",
  "/applications/cabinets-wardrobes",
  "/applications/door-production",
  "/applications/furniture-manufacturing",
  "/applications/hotel-commercial",
  "/applications/wall-panels-interior",
  "/applications/whole-house-customization",
  "/custom-solutions",
  "/about",
  "/projects",
  "/resources",
  "/contact",
  "/products/wood-veneer-panels",
  "/products/natural-wood-veneer",
  "/products/engineered-wood-veneer",
  "/products/3d-wood-panels",
  "/products/veneer-edge-banding",
  "/products/melamine-board",
  "/products/supporting-boards",
  "/collections/natural-wood-veneer",
  "/collections/engineered-veneer",
  "/collections/3d-wood-panels",
  "/collections/melamine-board",
  "/resources/category/product-news",
  "/resources/category/industry-news",
  "/resources/category/company-news",
  "/samples",
  "/privacy",
  "/terms",
] as const;

const seoUpdateDate = "2026-08-17";

const staticPathLastModified = new Map<string, string>([
  ["/", seoUpdateDate],
  ["/products", seoUpdateDate],
  ["/products/wood-veneer-panels", seoUpdateDate],
  ["/products/natural-wood-veneer", seoUpdateDate],
  ["/products/veneer-edge-banding", seoUpdateDate],
  ["/products/supporting-boards", seoUpdateDate],
  ["/contact", "2026-08-24"],
]);

function absoluteUrl(path: string): string {
  return path === "/"
    ? siteConfig.canonicalUrl
    : `${siteConfig.canonicalUrl}${path}`;
}

function localizedSitemapEntries(
  path: string,
  lastModified?: string | Date,
): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, absoluteUrl(localizePath(path, locale))]),
  );

  return locales.map((locale) => ({
    url: absoluteUrl(localizePath(path, locale)),
    ...(lastModified ? { lastModified } : {}),
    alternates: {
      languages: {
        ...languages,
        "x-default": absoluteUrl(path),
      },
    },
  }));
}

function productEntries(
  categoryPath: string,
  products: readonly ProductSitemapSource[],
): MetadataRoute.Sitemap {
  return products.flatMap((product) =>
    localizedSitemapEntries(
      `${categoryPath}/${product.slug}`,
      product.updatedAt,
    ),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPaths.flatMap((path) =>
    localizedSitemapEntries(path, staticPathLastModified.get(path)),
  );

  const articleEntries = articles.flatMap((article) =>
    localizedSitemapEntries(
      `/resources/${article.slug}`,
      article.updatedAt || new Date(article.date),
    ),
  );

  const productDetailEntries = [
    ...productEntries(
      "/products/wood-veneer-panels",
      Object.values(woodVeneerPanelProducts).filter(
        (product) => product.featuredImage.length > 0,
      ),
    ),
    ...productEntries(
      "/products/natural-wood-veneer",
      naturalWoodVeneerProducts,
    ),
    ...productEntries(
      "/products/engineered-wood-veneer",
      engineeredWoodVeneerProducts,
    ),
    ...productEntries(
      "/products/3d-wood-panels",
      threeDWoodPanelsProducts,
    ),
    ...productEntries(
      "/products/veneer-edge-banding",
      veneerEdgeBandingProducts,
    ),
    ...productEntries(
      "/products/melamine-board",
      melamineBoardProducts,
    ),
    ...productEntries(
      "/products/supporting-boards",
      supportingBoardsProducts,
    ),
  ];

  return [...staticEntries, ...articleEntries, ...productDetailEntries];
}
