import type { Metadata } from "next";
import { defaultSeo, siteConfig } from "@/lib/seo/site";
import { contactCopy } from "./copy";
import { corePagePaths, coreSeoCopy, type CorePageKey } from "./core-page-copy";
import { localizePath, openGraphLocales, type Locale } from "./config";
import { translateFullSiteText } from "./full-site-text";
import {
  indexableLocalesForPath,
  isLocalizedPathIndexable,
} from "./seo-policy";

function absoluteUrl(path: string): string {
  return path === "/" ? siteConfig.canonicalUrl : `${siteConfig.canonicalUrl}${path}`;
}

export function createLanguageAlternates(path: string) {
  const indexableLocales = indexableLocalesForPath(path);

  if (indexableLocales.length <= 1) {
    return undefined;
  }

  return {
    ...Object.fromEntries(
      indexableLocales.map((language) => [
        language,
        absoluteUrl(localizePath(path, language)),
      ]),
    ),
    "x-default": absoluteUrl(path),
  };
}

export function createFullSiteMetadata({
  locale,
  path,
  title,
  description,
  image = defaultSeo.ogImage,
  type = "website",
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const localizedTitle = translateFullSiteText(locale, title);
  const localizedDescription = translateFullSiteText(locale, description);
  const canonicalPath = localizePath(path, locale);
  const canonicalUrl = absoluteUrl(canonicalPath);
  const languages = createLanguageAlternates(path);
  const indexable = isLocalizedPathIndexable(path, locale);
  const indexableLocales = indexableLocalesForPath(path);

  return {
    title: localizedTitle,
    description: localizedDescription,
    alternates: {
      canonical: canonicalUrl,
      ...(indexable ? { languages } : {}),
    },
    robots: {
      index: indexable,
      follow: true,
      googleBot: { index: indexable, follow: true },
    },
    openGraph: {
      type,
      siteName: siteConfig.name,
      title: localizedTitle,
      description: localizedDescription,
      url: canonicalUrl,
      locale: openGraphLocales[locale],
      alternateLocale: indexableLocales
        .filter((language) => language !== locale)
        .map((language) => openGraphLocales[language]),
      images: [{
        url: image,
        width: defaultSeo.ogImageWidth,
        height: defaultSeo.ogImageHeight,
        alt: localizedTitle,
      }],
    },
    twitter: {
      card: defaultSeo.twitterCard,
      title: localizedTitle,
      description: localizedDescription,
      images: [image],
    },
  };
}

export function createContactMetadata(locale: Locale): Metadata {
  const copy = contactCopy[locale];
  const canonicalPath = localizePath("/contact", locale);
  const canonicalUrl = absoluteUrl(canonicalPath);
  const indexable = isLocalizedPathIndexable("/contact", locale);
  const languages = createLanguageAlternates("/contact");
  const indexableLocales = indexableLocalesForPath("/contact");

  return {
    title: copy.seoTitle,
    description: copy.seoDescription,
    alternates: {
      canonical: canonicalUrl,
      ...(languages ? { languages } : {}),
    },
    robots: {
      index: indexable,
      follow: true,
      googleBot: { index: indexable, follow: true },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: copy.seoTitle,
      description: copy.seoDescription,
      url: canonicalUrl,
      locale: openGraphLocales[locale],
      alternateLocale: indexableLocales
        .filter((language) => language !== locale)
        .map((language) => openGraphLocales[language]),
      images: [
        {
          url: defaultSeo.ogImage,
          width: defaultSeo.ogImageWidth,
          height: defaultSeo.ogImageHeight,
          alt: "Tongli Timber",
        },
      ],
    },
    twitter: {
      card: defaultSeo.twitterCard,
      title: copy.seoTitle,
      description: copy.seoDescription,
      images: [defaultSeo.ogImage],
    },
  };
}

export function createCorePageMetadata(page: CorePageKey, locale: Locale): Metadata {
  const copy = coreSeoCopy[locale][page];
  const path = corePagePaths[page];
  const canonicalUrl = absoluteUrl(localizePath(path, locale));
  const indexable = isLocalizedPathIndexable(path, locale);
  const languages = createLanguageAlternates(path);
  const indexableLocales = indexableLocalesForPath(path);

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: canonicalUrl,
      ...(indexable && languages ? { languages } : {}),
    },
    robots: {
      index: indexable,
      follow: true,
      googleBot: { index: indexable, follow: true },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: copy.title,
      description: copy.description,
      url: canonicalUrl,
      locale: openGraphLocales[locale],
      alternateLocale: indexableLocales
        .filter((language) => language !== locale)
        .map((language) => openGraphLocales[language]),
      images: [{
        url: defaultSeo.ogImage,
        width: defaultSeo.ogImageWidth,
        height: defaultSeo.ogImageHeight,
        alt: "Tongli Timber",
      }],
    },
    twitter: {
      card: defaultSeo.twitterCard,
      title: copy.title,
      description: copy.description,
      images: [defaultSeo.ogImage],
    },
  };
}
