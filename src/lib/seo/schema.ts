/**
 * Schema Generator
 * Structured data (JSON-LD) templates for SEO
 * Following Google's Rich Results guidelines
 */

import { companyConfig, configuredSocialLinks, siteConfig } from "./site";

/**
 * Base schema type
 */
export interface SchemaConfig {
  baseUrl?: string;
}

/**
 * Breadcrumb item for schema
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Product schema config
 */
export interface ProductSchemaConfig {
  name: string;
  description: string;
  image?: string;
  sku?: string;
  brand?: string;
  category?: string;
  price?: string;
  priceCurrency?: string;
  availability?: string;
  url?: string;
}

/**
 * Article schema config
 */
export interface ArticleSchemaConfig {
  headline: string;
  description: string;
  image?: string;
  author?: string;
  publisher?: string;
  publishedDate?: string;
  modifiedDate?: string;
  url?: string;
}

/**
 * Organization Schema
 */
export function getOrganizationSchema(config?: SchemaConfig): object {
  const baseUrl = config?.baseUrl || siteConfig.canonicalUrl;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    name: companyConfig.name,
    alternateName: siteConfig.name,
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.png`,
      width: 800,
      height: 800,
    },
    description: siteConfig.description,
    foundingDate: companyConfig.established.toString(),
    address: {
      "@type": "PostalAddress",
      streetAddress: companyConfig.address.street,
      addressLocality: companyConfig.address.city,
      addressRegion: companyConfig.address.province,
      postalCode: companyConfig.address.postalCode,
      addressCountry: companyConfig.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyConfig.phone,
      email: companyConfig.email,
      contactType: "sales",
      availableLanguage: ["English", "Chinese"],
    },
    sameAs: configuredSocialLinks,
  };
}

/**
 * WebSite Schema
 */
export function getWebSiteSchema(config?: SchemaConfig): object {
  const baseUrl = config?.baseUrl || siteConfig.canonicalUrl;

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
  };
}

/**
 * Organization Schema (JSON-LD string for head)
 */
export function getOrganizationSchemaScript(config?: SchemaConfig): string {
  return JSON.stringify(getOrganizationSchema(config));
}

/**
 * WebSite Schema (JSON-LD string for head)
 */
export function getWebSiteSchemaScript(config?: SchemaConfig): string {
  return JSON.stringify(getWebSiteSchema(config));
}

/**
 * BreadcrumbList Schema
 */
export function getBreadcrumbSchema(
  items: BreadcrumbItem[],
  config?: SchemaConfig
): object {
  const baseUrl = config?.baseUrl || siteConfig.canonicalUrl;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

/**
 * BreadcrumbList Schema (JSON-LD string)
 */
export function getBreadcrumbSchemaScript(
  items: BreadcrumbItem[],
  config?: SchemaConfig
): string {
  return JSON.stringify(getBreadcrumbSchema(items, config));
}

/**
 * Product Schema
 */
export function getProductSchema(
  product: ProductSchemaConfig,
  config?: SchemaConfig
): object {
  const baseUrl = config?.baseUrl || siteConfig.canonicalUrl;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image ? [product.image] : undefined,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: product.brand || siteConfig.name,
    },
    category: product.category,
    url: product.url || `${baseUrl}/products`,
    offers: product.price
      ? {
          "@type": "Offer",
          price: product.price,
          priceCurrency: product.priceCurrency || "USD",
          availability: product.availability || "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: companyConfig.name,
          },
        }
      : undefined,
    aggregateRating:
      undefined, // Add if reviews are available
  };
}

/**
 * Product Schema (JSON-LD string)
 */
export function getProductSchemaScript(
  product: ProductSchemaConfig,
  config?: SchemaConfig
): string {
  return JSON.stringify(getProductSchema(product, config));
}

/**
 * Article Schema (BlogPosting)
 */
export function getArticleSchema(
  article: ArticleSchemaConfig,
  config?: SchemaConfig
): object {
  const baseUrl = config?.baseUrl || siteConfig.canonicalUrl;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    image: article.image ? [article.image] : undefined,
    author: {
      "@type": "Organization",
      name: article.author || siteConfig.name,
      url: baseUrl,
    },
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url || baseUrl,
    },
    url: article.url || baseUrl,
  };
}

/**
 * Article Schema (JSON-LD string)
 */
export function getArticleSchemaScript(
  article: ArticleSchemaConfig,
  config?: SchemaConfig
): string {
  return JSON.stringify(getArticleSchema(article, config));
}

/**
 * FAQPage Schema
 */
export function getFaqSchema(
  faqs: { question: string; answer: string }[],
  config?: SchemaConfig
): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * FAQPage Schema (JSON-LD string)
 */
export function getFaqSchemaScript(
  faqs: { question: string; answer: string }[],
  config?: SchemaConfig
): string {
  return JSON.stringify(getFaqSchema(faqs, config));
}

/**
 * LocalBusiness Schema (for About/Contact pages)
 */
export function getLocalBusinessSchema(config?: SchemaConfig): object {
  const baseUrl = config?.baseUrl || siteConfig.canonicalUrl;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#business`,
    name: companyConfig.name,
    description: siteConfig.description,
    url: baseUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyConfig.address.street,
      addressLocality: companyConfig.address.city,
      addressRegion: companyConfig.address.province,
      postalCode: companyConfig.address.postalCode,
      addressCountry: companyConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.95,
      longitude: 113.85,
    },
    telephone: companyConfig.phone,
    email: companyConfig.email,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:30",
        closes: "18:00",
      },
    ],
    sameAs: configuredSocialLinks,
  };
}

/**
 * LocalBusiness Schema (JSON-LD string)
 */
export function getLocalBusinessSchemaScript(config?: SchemaConfig): string {
  return JSON.stringify(getLocalBusinessSchema(config));
}

/**
 * Generate multiple schema scripts as an array
 */
export function generateSchemaScripts(
  schemas: string[]
): { id: string; script: string }[] {
  return schemas.map((script, index) => ({
    id: `schema-${index}`,
    script,
  }));
}
