/**
 * Metadata Generator
 * Reusable functions for creating Next.js metadata configurations
 */

import { Metadata } from "next";
import { siteConfig, defaultSeo } from "./site";
import { locales, localizePath } from "@/i18n/config";
import { isLocalizedPathIndexable } from "@/i18n/seo-policy";

/**
 * Helper function to convert relative URL to absolute URL
 */
function toAbsoluteUrl(url: string): string {
  // If already absolute, return as-is
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  // Ensure path starts with /
  const path = url.startsWith('/') ? url : `/${url}`;
  return `${siteConfig.canonicalUrl}${path}`;
}

function routePath(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return new URL(url).pathname || "/";
  }
  return url.startsWith("/") ? url : `/${url}`;
}

function languageAlternates(pathOrUrl: string) {
  const path = routePath(pathOrUrl);

  if (!isLocalizedPathIndexable(path)) {
    return undefined;
  }

  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, toAbsoluteUrl(localizePath(path, locale))]),
    ),
    "x-default": toAbsoluteUrl(path),
  };
}

/** Add the site name once, even when imported SEO titles already include it. */
export function withSiteName(title: string): string {
  const normalizedTitle = title.trim();
  const suffix = `| ${siteConfig.name}`;

  return normalizedTitle.toLowerCase().endsWith(suffix.toLowerCase())
    ? normalizedTitle
    : `${normalizedTitle} ${suffix}`;
}

/**
 * Base metadata options
 */
interface BaseMetadataOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

/**
 * Page metadata options (for static pages)
 */
interface PageMetadataOptions extends BaseMetadataOptions {
  section?: string;
  /** Relative path like "/resources" - auto-generates canonical */
  path: string;
}

/**
 * Product metadata options
 */
interface ProductMetadataOptions extends BaseMetadataOptions {
  productName: string;
  productDescription: string;
  productCategory?: string;
  productImage?: string;
  productUrl?: string;
  brand?: string;
}

/**
 * Article metadata options
 */
interface ArticleMetadataOptions extends BaseMetadataOptions {
  articleTitle: string;
  articleDescription: string;
  articleImage?: string;
  articleUrl?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  category?: string;
}

/**
 * Create page metadata
 * Used for static pages like Home, About, Contact, etc.
 */
export function createPageMetadata(options: PageMetadataOptions): Metadata {
  const {
    title,
    description = defaultSeo.description,
    canonical,
    noIndex = false,
    noFollow = false,
    path,
  } = options;

  const fullTitle = title ? withSiteName(title) : defaultSeo.title;

  const canonicalUrl = toAbsoluteUrl(canonical || path);

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates(canonical || path),
    },
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      locale: siteConfig.locale,
      url: canonicalUrl,
      images: [
        {
          url: defaultSeo.ogImage,
          width: defaultSeo.ogImageWidth,
          height: defaultSeo.ogImageHeight,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: defaultSeo.twitterCard,
      title: fullTitle,
      description,
      images: [defaultSeo.ogImage],
    },
  };
}

/**
 * Create product metadata
 * Used for product detail pages
 */
export function createProductMetadata(options: ProductMetadataOptions): Metadata {
  const {
    productName,
    productDescription,
    productImage,
    productUrl,
    canonical,
    noIndex = false,
    noFollow = false,
  } = options;

  const title = withSiteName(productName);

  // Determine URL: productUrl or canonical, converted to absolute
  let url: string;
  if (productUrl) {
    url = toAbsoluteUrl(productUrl);
  } else if (canonical) {
    url = toAbsoluteUrl(canonical);
  } else {
    url = siteConfig.canonicalUrl;
  }

  return {
    title,
    description: productDescription,
    alternates: {
      canonical: canonical ? toAbsoluteUrl(canonical) : url,
      languages: languageAlternates(canonical || productUrl || "/"),
    },
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description: productDescription,
      locale: siteConfig.locale,
      url,
      images: [
        {
          url: productImage || defaultSeo.ogImage,
          width: defaultSeo.ogImageWidth,
          height: defaultSeo.ogImageHeight,
          alt: productName,
        },
      ],
    },
    twitter: {
      card: defaultSeo.twitterCard,
      title,
      description: productDescription,
      images: [productImage || defaultSeo.ogImage],
    },
  };
}

/**
 * Create article metadata
 * Used for blog posts and news articles
 */
export function createArticleMetadata(options: ArticleMetadataOptions): Metadata {
  const {
    articleTitle,
    articleDescription,
    articleImage,
    articleUrl,
    author = siteConfig.name,
    publishedDate,
    modifiedDate,
    category,
    canonical,
    noIndex = false,
    noFollow = false,
  } = options;

  const title = withSiteName(articleTitle);

  // Determine URL: articleUrl or canonical, converted to absolute
  let url: string;
  if (articleUrl) {
    url = toAbsoluteUrl(articleUrl);
  } else if (canonical) {
    url = toAbsoluteUrl(canonical);
  } else {
    url = siteConfig.canonicalUrl;
  }

  return {
    title,
    description: articleDescription,
    alternates: {
      canonical: canonical ? toAbsoluteUrl(canonical) : url,
      languages: languageAlternates(canonical || articleUrl || "/"),
    },
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
      },
    },
    openGraph: {
      type: "article",
      siteName: siteConfig.name,
      title,
      description: articleDescription,
      locale: siteConfig.locale,
      url,
      images: [
        {
          url: articleImage || defaultSeo.ogImage,
          width: defaultSeo.ogImageWidth,
          height: defaultSeo.ogImageHeight,
          alt: articleTitle,
        },
      ],
      authors: [author],
      publishedTime: publishedDate,
      modifiedTime: modifiedDate,
      section: category,
    },
    twitter: {
      card: defaultSeo.twitterCard,
      title,
      description: articleDescription,
      images: [articleImage || defaultSeo.ogImage],
    },
  };
}

/**
 * Create category metadata
 * Used for category listing pages
 */
export function createCategoryMetadata(
  categoryName: string,
  categoryDescription: string,
  categoryUrl: string,
  options?: {
    noIndex?: boolean;
    parentCategory?: string;
  }
): Metadata {
  const { noIndex = false, parentCategory } = options || {};

  const title = withSiteName(
    parentCategory ? `${categoryName} | ${parentCategory}` : categoryName,
  );

  const canonicalUrl = toAbsoluteUrl(categoryUrl);

  return {
    title,
    description: categoryDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates(categoryUrl),
    },
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true,
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description: categoryDescription,
      locale: siteConfig.locale,
      url: canonicalUrl,
      images: [
        {
          url: defaultSeo.ogImage,
          width: defaultSeo.ogImageWidth,
          height: defaultSeo.ogImageHeight,
          alt: categoryName,
        },
      ],
    },
    twitter: {
      card: defaultSeo.twitterCard,
      title,
      description: categoryDescription,
      images: [defaultSeo.ogImage],
    },
  };
}

/**
 * Create home page metadata
 */
export function createHomeMetadata(): Metadata {
  return {
    title: siteConfig.name,
    description: defaultSeo.description,
    alternates: {
      canonical: siteConfig.canonicalUrl,
      languages: languageAlternates("/"),
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
      siteName: siteConfig.name,
      title: defaultSeo.title,
      description: defaultSeo.description,
      locale: siteConfig.locale,
      url: siteConfig.canonicalUrl,
      images: [
        {
          url: defaultSeo.ogImage,
          width: defaultSeo.ogImageWidth,
          height: defaultSeo.ogImageHeight,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: defaultSeo.twitterCard,
      title: defaultSeo.title,
      description: defaultSeo.description,
      images: [defaultSeo.ogImage],
    },
  };
}
