"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a single analytics event on mount (Plausible + GA4 if present).
 * Used for problem_page_view / answer_reveal on detail pages.
 */
export function Track({
  event,
  props,
}: {
  event: string;
  props?: Record<string, string>;
}) {
  useEffect(() => {
    try {
      window.plausible?.(event, { props });
      if (typeof window.gtag === "function") {
        window.gtag("event", event, props);
      }
    } catch {
      // analytics must never break the page
    }
  }, [event, props]);

  return null;
}
