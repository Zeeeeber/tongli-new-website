"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { globalCopy } from "@/i18n/copy";
import {
  getLanguageSwitchHref,
  getLocaleFromPathname,
  localeDirections,
  type Locale,
} from "@/i18n/config";

const languages: Array<{ code: Locale; label: string; shortLabel: string }> = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "es", label: "Español", shortLabel: "ES" },
  { code: "fr", label: "Français", shortLabel: "FR" },
  { code: "ar", label: "العربية", shortLabel: "AR" },
  { code: "ms", label: "Bahasa Melayu", shortLabel: "MS" },
  { code: "id", label: "Bahasa Indonesia", shortLabel: "ID" },
  { code: "pt", label: "Português", shortLabel: "PT" },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentLanguage = languages.find((language) => language.code === locale)!;

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-700 border border-gray-200 rounded-lg hover:border-[#0F6B3A] hover:text-[#0F6B3A] transition-all duration-200 bg-white"
        aria-label={globalCopy[locale].selectLanguage}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span className="text-xs uppercase tracking-wider">{currentLanguage.shortLabel}</span>
        <svg className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          className={`absolute top-full mt-2 w-52 max-h-[70vh] overflow-y-auto bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 ${localeDirections[locale] === "rtl" ? "left-0" : "right-0"}`}
          role="menu"
        >
          {languages.map((language) => {
            const active = language.code === locale;

            return (
              <Link
                key={language.code}
                href={getLanguageSwitchHref(pathname, language.code)}
                hrefLang={language.code}
                lang={language.code}
                dir={localeDirections[language.code]}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${active ? "bg-[#0F6B3A]/5 text-[#0F6B3A] font-semibold" : "text-gray-700 hover:bg-gray-50 hover:text-[#0F6B3A]"}`}
              >
                <span className={`inline-flex items-center justify-center w-7 h-7 text-xs font-bold rounded ${active ? "bg-[#0F6B3A] text-white" : "bg-gray-100 text-gray-600"}`}>
                  {language.shortLabel}
                </span>
                <span>{language.label}</span>
                {active && (
                  <svg className="w-4 h-4 ms-auto text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
