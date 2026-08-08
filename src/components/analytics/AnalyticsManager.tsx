"use client";

import { useEffect, useSyncExternalStore } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { AnalyticsClickTracking } from "@/components/analytics/AnalyticsClickTracking";
import { AnalyticsConsentBanner } from "@/components/analytics/AnalyticsConsentBanner";
import {
  applyAnalyticsConsent,
  getAnalyticsConsentServerSnapshot,
  getAnalyticsConsentSnapshot,
  isProductionAnalyticsHost,
  subscribeToAnalyticsConsent,
} from "@/lib/analytics/google";

export interface AnalyticsManagerProps {
  measurementId: string;
}

export function AnalyticsManager({ measurementId }: AnalyticsManagerProps) {
  const consent = useSyncExternalStore(
    subscribeToAnalyticsConsent,
    getAnalyticsConsentSnapshot,
    getAnalyticsConsentServerSnapshot,
  );

  useEffect(() => {
    if (consent === "granted" || consent === "denied") {
      applyAnalyticsConsent(consent);
    }
  }, [consent]);

  const shouldLoadAnalytics = consent === "granted" && isProductionAnalyticsHost();

  return (
    <>
      {shouldLoadAnalytics ? (
        <>
          <GoogleAnalytics gaId={measurementId} />
          <AnalyticsClickTracking />
        </>
      ) : null}
      {consent === "unset" ? <AnalyticsConsentBanner /> : null}
    </>
  );
}
