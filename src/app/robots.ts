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
        // Keep private or non-content routes out of crawl queues. Next.js
        // assets stay crawlable so search engines can render every page.
        disallow: ["/api/", "/admin/", "/private/"],
      },
    ],
    sitemap: `${siteConfig.canonicalUrl}/sitemap.xml`,
    host: siteConfig.url,
  };
}
