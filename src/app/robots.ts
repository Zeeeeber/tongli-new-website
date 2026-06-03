/**
 * Robots.txt Generator
 * Controls search engine crawler access
 * 
 * Usage: Automatically served at /robots.txt by Next.js App Router
 */

import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Disallow admin and private paths
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/private/",
        ],
      },
    ],
    sitemap: `${siteConfig.canonicalUrl}/sitemap.xml`,
    host: siteConfig.url,
  };
}
