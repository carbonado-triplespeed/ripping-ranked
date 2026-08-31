"use client";

import { useState } from "react";
import { faqs } from "@/data/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="faq" aria-label="Frequently asked questions">
      <h2>Questions, answered</h2>
      <div className="faq-list">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div className={`faq-item${isOpen ? " open" : ""}`} key={f.q}>
              <button
                className="faq-q"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{f.q}</span>
                <span className="faq-mark" aria-hidden="true">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              {isOpen && <p className="faq-a">{f.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
