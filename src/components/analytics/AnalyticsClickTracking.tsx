"use client";

import { useEffect } from "react";
import { sendAnalyticsEvent } from "@/lib/analytics/google";

const SAMPLE_REQUEST_PATTERN = /request\s+(a\s+)?(board\s+)?sample/i;

function getPageType(pathname: string): string {
  if (pathname.startsWith("/products/")) return "product";
  if (pathname.startsWith("/resources/")) return "resource";
  if (pathname.startsWith("/applications/")) return "application";
  if (pathname === "/contact") return "contact";
  return "other";
}

export function AnalyticsClickTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const actionableElement = event.target.closest("a, button");
      if (!actionableElement) return;

      const pathname = window.location.pathname;
      const parameters = {
        page_path: pathname,
        page_type: getPageType(pathname),
      };

      if (actionableElement instanceof HTMLAnchorElement) {
        const href = actionableElement.getAttribute("href")?.toLowerCase() ?? "";

        if (href.startsWith("mailto:")) {
          sendAnalyticsEvent("contact_email_click", parameters);
          return;
        }

        if (href.startsWith("tel:")) {
          sendAnalyticsEvent("contact_phone_click", parameters);
          return;
        }

        if (href.includes("wa.me/") || href.includes("whatsapp.com/")) {
          sendAnalyticsEvent("contact_whatsapp_click", parameters);
          return;
        }
      }

      const label = actionableElement.textContent?.trim() ?? "";
      if (SAMPLE_REQUEST_PATTERN.test(label)) {
        sendAnalyticsEvent("sample_request_click", parameters);
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
