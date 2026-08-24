"use client";

import Link from "@/components/i18n/LocalizedLink";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, localeDirections } from "@/i18n/config";
import { globalCopy } from "@/i18n/copy";
import { saveAnalyticsConsent } from "@/lib/analytics/google";

export function AnalyticsConsentBanner() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = globalCopy[locale].cookieConsent;

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-live="polite"
      aria-label={copy.ariaLabel}
      lang={locale}
      dir={localeDirections[locale]}
      className="fixed inset-x-0 bottom-0 z-[100] bg-white shadow-[0_-24px_60px_-20px_rgba(15,107,58,0.35)] ring-1 ring-black/5"
    >
      {/* Brand top accent — Tongli Timber gold signature */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#c8a45a] via-[#e6c98a] to-[#c8a45a]" />

      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-5 md:flex-row md:items-center md:justify-between md:gap-8 md:px-8 md:py-6">
        <div className="flex items-start gap-4">
          {/* Brand shield icon */}
          <div className="hidden md:flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F1F8F4] ring-1 ring-[#0F6B3A]/15">
            <svg
              className="h-5 w-5 text-[#0F6B3A]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 2.5l8 3v6.2c0 4.6-3.2 8.7-8 9.8-4.8-1.1-8-5.2-8-9.8V5.5l8-3z" />
              <path d="M8.5 12.2l2.6 2.6 4.4-4.6" />
            </svg>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-[#0F6B3A]/8 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#0F6B3A]">
                Tongli Timber
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#c8a45a]">
                {copy.notice}
              </span>
            </div>

            <h2 className="mt-1.5 text-[17px] font-semibold leading-snug text-[#1F2621]">
              {copy.title}
            </h2>

            <p className="mt-1 max-w-2xl text-sm leading-6 text-[#5b6470]">
              {copy.description} {copy.detailsPrefix}{" "}
              <Link
                href="/privacy"
                className="font-semibold text-[#0F6B3A] underline-offset-2 hover:text-[#124B34] hover:underline"
              >
                {copy.privacyPolicy}
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="flex shrink-0 gap-2.5 md:flex-col md:gap-2.5 lg:flex-row">
          <button
            type="button"
            onClick={() => saveAnalyticsConsent("denied")}
            className="flex-1 rounded-full border border-[#0F6B3A] px-5 py-2.5 text-sm font-semibold text-[#0F6B3A] transition-colors hover:bg-[#F1F8F4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6B3A]/40 md:flex-none md:px-6"
          >
            {copy.decline}
          </button>
          <button
            type="button"
            onClick={() => saveAnalyticsConsent("granted")}
            className="flex-1 rounded-full bg-[#0F6B3A] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#124B34] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6B3A]/40 md:flex-none md:px-6"
          >
            {copy.accept}
          </button>
        </div>
      </div>
    </aside>
  );
}
