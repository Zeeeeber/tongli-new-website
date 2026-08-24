"use client";

import { createContext, type ReactNode, useContext } from "react";
import { defaultLocale, type Locale } from "./config";

const SiteLocaleContext = createContext<Locale>(defaultLocale);

export function SiteLocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <SiteLocaleContext.Provider value={locale}>
      {children}
    </SiteLocaleContext.Provider>
  );
}

export function useSiteLocale(): Locale {
  return useContext(SiteLocaleContext);
}
