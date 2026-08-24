export const locales = ["en", "es", "fr", "ar", "ms", "id", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  es: "ltr",
  fr: "ltr",
  ar: "rtl",
  ms: "ltr",
  id: "ltr",
  pt: "ltr",
};

export const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
  ar: "ar_SA",
  ms: "ms_MY",
  id: "id_ID",
  pt: "pt_PT",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return firstSegment && isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] && isLocale(segments[0])) {
    segments.shift();
  }

  return segments.length === 0 ? "/" : `/${segments.join("/")}`;
}

export function localizePath(path: string, locale: Locale): string {
  const normalizedPath = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;

  if (locale === defaultLocale) {
    return normalizedPath;
  }

  return normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`;
}

export function getSiteLink(path: string, locale: Locale): string {
  return localizeHref(path, locale);
}

export function localizeHref(href: string, locale: Locale): string {
  if (
    !href.startsWith("/") ||
    href.startsWith("//") ||
    href.startsWith("/api/") ||
    href.startsWith("/_next/")
  ) {
    return href;
  }

  const match = href.match(/^([^?#]*)(.*)$/);
  const path = match?.[1] || "/";
  const suffix = match?.[2] || "";
  return `${localizePath(stripLocaleFromPathname(path || "/"), locale)}${suffix}`;
}

export function getLanguageSwitchHref(
  pathname: string,
  targetLocale: Locale,
): string {
  const contentPath = stripLocaleFromPathname(pathname);
  return localizePath(contentPath, targetLocale);
}
