import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About",
  description:
    "RipTier is an independent ranking of digital trading-card pack-opening sites, built for Pokémon collectors.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <div className="page wrap">
        <div className="crumb">
          <a href="/">Rankings</a> / About
        </div>
        <h1>About RipTier</h1>
        <p className="lede">
          We are collectors who got tired of guessing. RipTier ranks the digital
          pack-opening sites the same way, on the same criteria, so you can see
          at a glance which ones are worth your money.
        </p>
        <div className="prose">
          <h2>Why we built it</h2>
          <p>
            Ripping packs online has gone from a curiosity to a crowded market in
            a couple of years. Dozens of sites, wildly different buyback rates,
            grading you can and cannot trust, and odds that some sites publish and
            others bury. There was no straight comparison anywhere, so we made
            one.
          </p>
          <h2>How we work</h2>
          <p>
            Every site is scored on the same eight criteria, weighted for a
            Pokémon collector, using information the sites make public. We
            re-check the field weekly and move scores when the facts move. The
            same rules apply to the site at the top and the site at the bottom.
            You can read the full rubric on our{" "}
            <a href="/methodology">methodology page</a>.
          </p>
          <h2>Who it is for</h2>
          <p>
            Pokémon collectors first. That focus is deliberate. It is why we
            weight Pokémon depth and graded slabs so heavily, and why a site built
            for sports cards or a dozen other lines will not top our list even if
            it is a fine site in its own right.
          </p>
          <p>
            Found something we got wrong, or a site we should be tracking? We want
            to hear it. Reach us on our <a href="/contact">contact page</a>.
          </p>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
