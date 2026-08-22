"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const LANGUAGES = [
  { code: "en", label: "English", flag: "EN", href: "/contact" },
  { code: "es", label: "Español", flag: "ES", href: "/es/contact" },
  { code: "fr", label: "Français", flag: "FR", href: "/fr/contact" },
  { code: "ar", label: "العربية", flag: "AR", href: "/ar/contact" },
] as const;

type LangCode = "en" | "es" | "fr" | "ar";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Determine current language from pathname
  const getCurrentLang = (): LangCode => {
    if (pathname.startsWith("/ar/contact")) return "ar";
    if (pathname.startsWith("/fr/contact")) return "fr";
    if (pathname.startsWith("/es/contact")) return "es";
    return "en";
  };

  // Generate href for a language, with fallback for non-contact pages
  const getHref = (code: LangCode): string => {
    if (code === "en") {
      // From any multilingual page, English goes to /contact
      if (pathname.startsWith("/es") || pathname.startsWith("/fr") || pathname.startsWith("/ar")) {
        return "/contact";
      }
      return "/contact";
    }
    // For non-contact multilingual pages, go to /es, /fr, /ar root pages
    const isContactPage =
      pathname.startsWith("/es/contact") ||
      pathname.startsWith("/fr/contact") ||
      pathname.startsWith("/ar/contact");
    if (!isContactPage) {
      return `/${code}`;
    }
    // From English pages, contact goes to /es/contact etc.
    return `/${code}/contact`;
  };

  const currentLang = getCurrentLang();
  const currentLangData = LANGUAGES.find((l) => l.code === currentLang)!;

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-700 border border-gray-200 rounded-lg hover:border-[#0F6B3A] hover:text-[#0F6B3A] transition-all duration-200 bg-white"
        aria-label="Select language"
        aria-expanded={open}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span className="text-xs uppercase tracking-wider">{currentLangData.flag}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
          {LANGUAGES.map((lang) => {
            const href = getHref(lang.code);
            const isActive = lang.code === currentLang;
            return (
              <Link
                key={lang.code}
                href={href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-[#0F6B3A]/5 text-[#0F6B3A] font-semibold"
                    : "text-gray-700 hover:bg-gray-50 hover:text-[#0F6B3A]"
                }`}
              >
                <span
                  className={`inline-flex items-center justify-center w-7 h-7 text-xs font-bold rounded ${
                    isActive
                      ? "bg-[#0F6B3A] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {lang.flag}
                </span>
                <span>{lang.label}</span>
                {isActive && (
                  <svg
                    className="w-4 h-4 ml-auto text-[#0F6B3A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
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
