"use client";

import type { ReactNode } from "react";
import { translateFullSiteText } from "./full-site-text";
import { useSiteLocale } from "./site-locale-context";

export function useFullSiteTranslator() {
  const locale = useSiteLocale();
  return (source: string) => translateFullSiteText(locale, source);
}

export default function LocalizedText({ children }: { children: ReactNode }) {
  const locale = useSiteLocale();

  if (typeof children !== "string") return children;
  return translateFullSiteText(locale, children);
}
