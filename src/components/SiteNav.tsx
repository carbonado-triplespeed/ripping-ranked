"use client";

import { useState } from "react";

const links = [
  { href: "/", label: "Rankings" },
  { href: "/reviews", label: "Reviews" },
  { href: "/methodology", label: "Methodology" },
  { href: "/guides", label: "Guides" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-in">
        <a className="brand" href="/">
          <span className="mark">R</span> RipTier
        </a>
        <div className={`nav-links${open ? " open" : ""}`} id="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
        <span className="nav-tag">UPDATED WEEKLY</span>
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            {open ? (
              <>
                <line x1="3" y1="3" x2="15" y2="15" stroke="currentColor" strokeWidth="1.8" />
                <line x1="15" y1="3" x2="3" y2="15" stroke="currentColor" strokeWidth="1.8" />
              </>
            ) : (
              <>
                <line x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.8" />
                <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.8" />
                <line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.8" />
              </>
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}
