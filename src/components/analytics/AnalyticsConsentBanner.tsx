"use client";

import Link from "next/link";
import { saveAnalyticsConsent } from "@/lib/analytics/google";

export function AnalyticsConsentBanner() {
  return (
    <aside
      aria-label="Analytics cookie preferences"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-2xl border border-[#E5E1D8] bg-white p-5 shadow-2xl md:flex md:items-center md:justify-between md:gap-6"
    >
      <div>
        <h2 className="text-base font-semibold text-[#1F2621]">Analytics cookies</h2>
        <p className="mt-1 text-sm leading-6 text-[#6b7280]">
          With your permission, we use Google Analytics to understand website traffic and improve our product information. We do not send your contact details or message content to Google. Read our{" "}
          <Link href="/privacy" className="font-medium text-[#0F6B3A] hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
      <div className="mt-4 flex shrink-0 gap-3 md:mt-0">
        <button
          type="button"
          onClick={() => saveAnalyticsConsent("denied")}
          className="rounded-full border border-[#0F6B3A] px-5 py-2.5 text-sm font-semibold text-[#0F6B3A] transition-colors hover:bg-[#F1F8F4]"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => saveAnalyticsConsent("granted")}
          className="rounded-full bg-[#0F6B3A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#124B34]"
        >
          Accept
        </button>
      </div>
    </aside>
  );
}
