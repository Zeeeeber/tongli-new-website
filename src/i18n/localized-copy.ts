import type { Locale } from "./config";
import { translateFullSiteText } from "./full-site-text";

export type ExistingLocale = "en" | "es" | "fr" | "ar";

export const additionalLocales = ["ms", "id", "pt"] as const satisfies readonly Locale[];

function translateCopyValue<T>(value: T, locale: Locale): T {
  if (typeof value === "string") {
    return translateFullSiteText(locale, value) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => translateCopyValue(item, locale)) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [
        key,
        translateCopyValue(item, locale),
      ]),
    ) as T;
  }

  return value;
}

export function expandLocalizedCopy<T>(
  existing: Record<ExistingLocale, T>,
): Record<Locale, T> {
  return {
    ...existing,
    ms: translateCopyValue(existing.en, "ms"),
    id: translateCopyValue(existing.en, "id"),
    pt: translateCopyValue(existing.en, "pt"),
  };
}
