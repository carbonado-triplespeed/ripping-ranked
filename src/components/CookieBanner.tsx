"use client";

import { useEffect, useState } from "react";

const KEY = "riptier_consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      // storage unavailable; do not block the page
    }
  }, []);

  function choose(value: "accepted" | "declined") {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      // ignore
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="cookie" role="dialog" aria-label="Cookie notice">
      <p>
        We use cookies to understand traffic and to measure our advertising. See
        our <a href="/privacy">privacy policy</a> for details.
      </p>
      <div className="cookie-actions">
        <button className="ck ck-ghost" onClick={() => choose("declined")}>
          Decline
        </button>
        <button className="ck ck-solid" onClick={() => choose("accepted")}>
          Accept
        </button>
      </div>
    </div>
  );
}
