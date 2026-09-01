"use client";

import { useEffect } from "react";

// Forwards incoming attribution params from the ad click through to every
// outbound operator link (any anchor marked data-outbound), and tags a
// default source when none is present. The Meta funnel event lives on the
// Card Outpost link itself (see TrackedVisitLink), not here.
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
      .querySelectorAll<HTMLAnchorElement>("a[data-outbound]")
      .forEach((a) => {
        if (a.dataset.tagged) return;
        try {
          const u = new URL(a.href);
          fwd.forEach((v, k) => u.searchParams.set(k, v));
          a.href = u.toString();
          a.dataset.tagged = "1";
        } catch {
          // leave the link untouched if it will not parse
        }
      });
  }, []);

  return null;
}
