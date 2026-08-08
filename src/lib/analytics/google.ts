export const GA_MEASUREMENT_ID = "G-HYG517SRVS";
export const ANALYTICS_CONSENT_STORAGE_KEY = "tongli_analytics_consent_v1";
export const ANALYTICS_CONSENT_CHANGE_EVENT = "tongli:analytics-consent-change";

export type AnalyticsConsent = "granted" | "denied";
export type AnalyticsConsentSnapshot = AnalyticsConsent | "unset" | "loading";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function isProductionAnalyticsHost(): boolean {
  if (typeof window === "undefined") return false;
  return ["tlveneer.com", "www.tlveneer.com"].includes(window.location.hostname);
}

export function getAnalyticsConsentSnapshot(): AnalyticsConsentSnapshot {
  if (typeof window === "undefined") return "loading";

  try {
    const storedValue = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
    return storedValue === "granted" || storedValue === "denied"
      ? storedValue
      : "unset";
  } catch {
    return "unset";
  }
}

export function getAnalyticsConsentServerSnapshot(): AnalyticsConsentSnapshot {
  return "loading";
}

export function subscribeToAnalyticsConsent(callback: () => void): () => void {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === ANALYTICS_CONSENT_STORAGE_KEY) callback();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(ANALYTICS_CONSENT_CHANGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(ANALYTICS_CONSENT_CHANGE_EVENT, callback);
  };
}

export function applyAnalyticsConsent(consent: AnalyticsConsent): void {
  window.gtag?.("consent", "update", {
    analytics_storage: consent,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

function clearGoogleAnalyticsCookies(): void {
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter((name): name is string => Boolean(name?.startsWith("_ga")));

  for (const cookieName of cookieNames) {
    document.cookie = `${cookieName}=; Max-Age=0; Path=/; SameSite=Lax`;
    document.cookie = `${cookieName}=; Max-Age=0; Path=/; Domain=.tlveneer.com; SameSite=Lax`;
  }
}

export function saveAnalyticsConsent(consent: AnalyticsConsent): void {
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, consent);
  } catch {
    // Consent still applies to the current page if storage is unavailable.
  }

  applyAnalyticsConsent(consent);
  if (consent === "denied") clearGoogleAnalyticsCookies();
  window.dispatchEvent(new Event(ANALYTICS_CONSENT_CHANGE_EVENT));
}

export function resetAnalyticsConsent(): void {
  try {
    window.localStorage.removeItem(ANALYTICS_CONSENT_STORAGE_KEY);
  } catch {
    // The consent banner can still reopen for the current page.
  }

  applyAnalyticsConsent("denied");
  clearGoogleAnalyticsCookies();
  window.dispatchEvent(new Event(ANALYTICS_CONSENT_CHANGE_EVENT));
}

export function sendAnalyticsEvent(
  eventName: string,
  parameters: Record<string, string>,
): void {
  if (!isProductionAnalyticsHost()) return;
  if (getAnalyticsConsentSnapshot() !== "granted") return;
  window.gtag?.("event", eventName, parameters);
}
