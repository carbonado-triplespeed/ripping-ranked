import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { criteria, tierBands } from "@/data/rubric";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "How RipTier scores and ranks digital trading-card pack-opening sites: eight weighted criteria, transparent tier bands, re-checked weekly.",
};

export default function MethodologyPage() {
  return (
    <>
      <SiteNav />
      <div className="page wrap">
        <div className="crumb">
          <a href="/">Rankings</a> / Methodology
        </div>
        <h1>How we score every rip site</h1>
        <p className="lede">
          Every site on RipTier is scored the same way, on the same eight
          criteria, using information the site makes public. No opinion, no paid
          placement, and the same rules for the site at the top as the one at the
          bottom.
        </p>

        <div className="prose">
          <p>
            Our readers collect Pokémon, so the rubric is weighted for a Pokémon
            collector. We put the most weight on the things that decide whether
            you actually keep value: what a site pays you back for a card you do
            not want, whether the cards are graded, and how deep the Pokémon
            catalogue runs. Fun features matter, but they do not protect your
            money, so they carry less weight.
          </p>
          <h2>The eight criteria</h2>
          <p>
            Each site is scored from 0 to 100 on every criterion. The scores are
            combined using the weights below to give a single figure out of 10.
          </p>
        </div>

        <div className="weights">
          {criteria.map((c) => (
            <div className="wt" key={c.id}>
              <span className="wl">{c.label}</span>
              <span className="wb">{c.blurb}</span>
              <span className="wv">{c.weight}%</span>
              <span className="wt-bar">
                <i style={{ width: `${c.weight * 4}%` }} />
              </span>
            </div>
          ))}
        </div>

        <div className="prose">
          <h2>Tiers are score bands</h2>
          <p>
            The letter grade is not a judgement call. It is a fixed band, so an
            <strong> S</strong> always means the same thing whichever site earns
            it.
          </p>
        </div>
        <div className="bands">
          {tierBands.map((b) => (
            <div className="band" key={b.tier}>
              <span className={`tier t-${b.tier}`}>{b.tier}</span>
              <span className="bt">
                {b.label} · {b.min > 0 ? `${b.min.toFixed(1)}+` : "below 6.0"}
              </span>
            </div>
          ))}
        </div>

        <div className="prose">
          <h2>How we keep it current</h2>
          <p>
            Pack pricing, buyback rates and odds change, so we re-check every
            site weekly and update its scores when the facts move. If a site
            improves what it pays back or starts publishing its odds, its score
            goes up. If it quietly walks something back, the score goes down.
          </p>
          <p>
            Scores are based on publicly available site information and are for
            information only. They are not financial or purchasing advice.
          </p>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
