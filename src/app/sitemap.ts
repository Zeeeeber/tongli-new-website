/**
 * Dynamic Sitemap Generator
 * Generates sitemap.xml for all public pages
 * 
 * Usage: Automatically served at /sitemap.xml by Next.js App Router
 */

import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/site";
import { articles } from "@/data/resources/articles";
import { naturalWoodVeneerProducts } from "@/data/products/natural-wood-veneer-products";

/**
 * Static pages that should always be included
 */
const staticPages: MetadataRoute.Sitemap = [
  // Homepage
  {
    url: siteConfig.canonicalUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  },
  // Main pages
  {
    url: `${siteConfig.canonicalUrl}/products`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    url: `${siteConfig.canonicalUrl}/collections`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${siteConfig.canonicalUrl}/applications`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${siteConfig.canonicalUrl}/custom-solutions`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${siteConfig.canonicalUrl}/about`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${siteConfig.canonicalUrl}/projects`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${siteConfig.canonicalUrl}/resources`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${siteConfig.canonicalUrl}/contact`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  // Product category pages
  {
    url: `${siteConfig.canonicalUrl}/products/wood-veneer-panels`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${siteConfig.canonicalUrl}/products/natural-wood-veneer`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${siteConfig.canonicalUrl}/products/engineered-wood-veneer`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${siteConfig.canonicalUrl}/products/3d-wood-panels`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${siteConfig.canonicalUrl}/products/veneer-edge-banding`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: `${siteConfig.canonicalUrl}/products/melamine-board`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: `${siteConfig.canonicalUrl}/products/supporting-boards`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  // Collection pages
  {
    url: `${siteConfig.canonicalUrl}/collections/natural-wood-veneer`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: `${siteConfig.canonicalUrl}/collections/engineered-veneer`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  {
    url: `${siteConfig.canonicalUrl}/collections/melamine-board`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  // Resource category pages
  {
    url: `${siteConfig.canonicalUrl}/resources/category/product-news`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    url: `${siteConfig.canonicalUrl}/resources/category/industry-news`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    url: `${siteConfig.canonicalUrl}/resources/category/company-news`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  },
  // Utility pages
  {
    url: `${siteConfig.canonicalUrl}/samples`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    url: `${siteConfig.canonicalUrl}/privacy`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `${siteConfig.canonicalUrl}/terms`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

/**
 * Generate resource article URLs from local data
 * Note: Currently using local data. Future: Replace with WordPress API fetch.
 */
function generateResourceUrls(): MetadataRoute.Sitemap {
  return articles.map((article) => ({
    url: `${siteConfig.canonicalUrl}/resources/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));
}

/**
 * Generate Natural Wood Veneer product URLs from local data
 * Note: Currently using local data. Future: Replace with WordPress API fetch.
 */
function generateNaturalWoodVeneerProductUrls(): MetadataRoute.Sitemap {
  return naturalWoodVeneerProducts.map((product) => ({
    url: `${siteConfig.canonicalUrl}/products/natural-wood-veneer/${product.slug}`,
    lastModified: product.updatedAt ? new Date(product.updatedAt) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  /**
   * Future: Add dynamic routes from WordPress CMS
   * 
   * Example:
   * const products = await fetchProducts();
   * const productUrls = products.map(product => ({
   *   url: `${siteConfig.canonicalUrl}/products/${product.category}/${product.slug}`,
   *   lastModified: new Date(product.updatedAt),
   *   changeFrequency: "weekly" as const,
   *   priority: 0.8,
   * }));
   * 
   * return [...staticPages, ...productUrls];
   */

  const resourceUrls = generateResourceUrls();
  const productUrls = generateNaturalWoodVeneerProductUrls();

  return [
    ...staticPages,
    ...resourceUrls,
    ...productUrls,
  ];
}
