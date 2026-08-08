"use client";

import { resetAnalyticsConsent } from "@/lib/analytics/google";

export function AnalyticsConsentSettings() {
  return (
    <button
      type="button"
      onClick={resetAnalyticsConsent}
      className="mt-4 inline-flex rounded-full border border-[#0F6B3A] px-5 py-2.5 text-sm font-semibold text-[#0F6B3A] transition-colors hover:bg-[#F1F8F4]"
    >
      Change analytics cookie choice
    </button>
  );
}
