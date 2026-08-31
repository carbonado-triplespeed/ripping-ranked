"use client";

import { useEffect } from "react";

// Forward incoming attribution params from the ad click through to the
// outbound Card Outpost links, and tag them with a default source when none
// is present. Also fires a Meta "Lead" event on outbound click if the pixel
// is loaded.
const KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
  "ttclid",
  "msclkid",
];

export function TrackingLinks() {
  useEffect(() => {
    const incoming = new URLSearchParams(window.location.search);
    const fwd = new URLSearchParams();
    KEYS.forEach((k) => {
      const v = incoming.get(k);
      if (v) fwd.set(k, v);
    });
    if (!fwd.get("utm_source")) {
      fwd.set("utm_source", "riptier");
      fwd.set("utm_medium", "referral");
    }
    if (!fwd.get("utm_campaign")) fwd.set("utm_campaign", "rankings");

    document
      .querySelectorAll<HTMLAnchorElement>('a[href*="cardoutpost.com"]')
      .forEach((a) => {
        if (a.dataset.tagged) return;
        try {
          const u = new URL(a.href);
          fwd.forEach((v, k) => u.searchParams.set(k, v));
          a.href = u.toString();
          a.dataset.tagged = "1";
          a.addEventListener("click", () => {
            const w = window as unknown as { fbq?: (...args: unknown[]) => void };
            if (typeof w.fbq === "function") w.fbq("track", "Lead");
          });
        } catch {
          // leave the link untouched if it will not parse
        }
      });
  }, []);

  return null;
}
