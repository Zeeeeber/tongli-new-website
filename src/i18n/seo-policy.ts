import { defaultLocale, locales, type Locale } from "./config";

/**
 * Localized URLs that are ready to be indexed.
 *
 * Spanish, French and Arabic core pages have purpose-written body copy. The
 * catalogue and resource listings still expose untranslated product/article
 * content, so they stay accessible but out of search indexes for now.
 */
const reviewedCorePaths = new Set([
  "/",
  "/about",
  "/applications",
  "/collections",
  "/contact",
  "/custom-solutions",
  "/projects",
  "/samples",
]);

const reviewedCoreLocales = new Set<Locale>(["es", "fr", "ar"]);

/**
 * Malay, Indonesian and Portuguese currently have human-reviewed homepage and
 * contact copy only. Expand this set as complete pages receive editorial QA.
 */
const reviewedAdditionalLocalePaths = new Set(["/", "/contact"]);

function normalizePath(path: string): string {
  const pathname = path.split(/[?#]/, 1)[0] || "/";
  if (pathname === "/") return pathname;
  return `/${pathname.replace(/^\/+|\/+$/g, "")}`;
}

export function isLocalizedPathIndexable(
  path: string,
  locale?: Locale,
): boolean {
  const normalizedPath = normalizePath(path);

  if (!locale) {
    return locales.some(
      (candidate) =>
        candidate !== defaultLocale &&
        isLocalizedPathIndexable(normalizedPath, candidate),
    );
  }

  if (locale === defaultLocale) return true;
  if (reviewedCoreLocales.has(locale)) {
    return reviewedCorePaths.has(normalizedPath);
  }

  return reviewedAdditionalLocalePaths.has(normalizedPath);
}

export function indexableLocalesForPath(path: string): Locale[] {
  return locales.filter((locale) => isLocalizedPathIndexable(path, locale));
}
