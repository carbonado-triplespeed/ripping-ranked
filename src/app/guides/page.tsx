import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Plain-English guides to ripping smarter: buyback rates, PSA grading, published odds and what they mean for your money.",
};

export default function GuidesPage() {
  return (
    <>
      <SiteNav />
      <div className="page wrap">
        <div className="crumb">
          <a href="/">Rankings</a> / Guides
        </div>
        <h1>Guides</h1>
        <p className="lede">
          Short, plain guides to the things that actually decide how much value
          you keep when you rip. No jargon, no filler.
        </p>
        <div className="guide-list">
          {guides.map((g) => (
            <a className="guide-card" key={g.slug} href={`/guides/${g.slug}`}>
              <div className="gmeta">
                {g.minutes} min read · Updated {g.updated}
              </div>
              <h3>{g.title}</h3>
              <p>{g.excerpt}</p>
              <span className="more">Read the guide</span>
            </a>
          ))}
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
