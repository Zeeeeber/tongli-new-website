/**
 * Metadata Generator
 * Reusable functions for creating Next.js metadata configurations
 */

import { Metadata } from "next";
import { siteConfig, defaultSeo } from "./site";

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
  path?: string;
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
    section,
    path,
  } = options;

  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : defaultSeo.title;

  // Determine canonical URL:
  // 1. Explicit canonical takes priority
  // 2. Path parameter generates absolute URL
  // 3. Fallback to homepage ONLY if it's the homepage
  let canonicalUrl: string;
  if (canonical) {
    canonicalUrl = toAbsoluteUrl(canonical);
  } else if (path) {
    canonicalUrl = toAbsoluteUrl(path);
  } else {
    // Only use homepage as fallback when it's actually the homepage
    // (when title is undefined or matches homepage title)
    canonicalUrl = siteConfig.canonicalUrl;
  }

  return {
    title: title || siteConfig.name,
    description,
    alternates: {
      canonical: canonicalUrl,
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
    productCategory,
    productImage,
    productUrl,
    brand = siteConfig.name,
    canonical,
    noIndex = false,
    noFollow = false,
  } = options;

  const title = `${productName} | ${siteConfig.name}`;

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

  const title = `${articleTitle} | ${siteConfig.name}`;

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

  const title = parentCategory
    ? `${categoryName} | ${parentCategory} | ${siteConfig.name}`
    : `${categoryName} | ${siteConfig.name}`;

  const canonicalUrl = toAbsoluteUrl(categoryUrl);

  return {
    title,
    description: categoryDescription,
    alternates: {
      canonical: canonicalUrl,
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
