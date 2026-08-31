"use client";

import { useEffect } from "react";

const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "1423458099520025";

// Loads the Meta (Facebook) pixel and fires PageView. Does not load if the
// visitor has explicitly declined cookies, or if no pixel id is configured.
export function FacebookPixel() {
  useEffect(() => {
    if (!PIXEL_ID) return;
    try {
      if (localStorage.getItem("riptier_consent") === "declined") return;
    } catch {
      // storage unavailable; proceed
    }

    /* eslint-disable @typescript-eslint/no-explicit-any, prefer-rest-params */
    const w = window as any;
    if (w.fbq) {
      w.fbq("track", "PageView");
      return;
    }
    const n: any = (w.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    });
    if (!w._fbq) w._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];

    const t = document.createElement("script");
    t.async = true;
    t.src = "https://connect.facebook.net/en_US/fbevents.js";
    const s = document.getElementsByTagName("script")[0];
    if (s.parentNode) s.parentNode.insertBefore(t, s);

    w.fbq("init", PIXEL_ID);
    w.fbq("track", "PageView");
    /* eslint-enable @typescript-eslint/no-explicit-any, prefer-rest-params */
  }, []);

  return null;
}
