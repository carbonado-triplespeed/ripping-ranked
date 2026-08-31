import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { OperatorCard } from "@/components/OperatorCard";
import { OperatorRundown } from "@/components/OperatorRundown";
import { Faq } from "@/components/Faq";
import { operators } from "@/data/operators";
import { LAST_UPDATED, faqs } from "@/data/site";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SiteNav />

      <header className="hero wrap">
        <span className="eyebrow">The 2026 rip-site rankings</span>
        <h1>
          Every Pokémon rip site, <em>ranked</em>.
        </h1>
        <p className="lede">
          We scored the 8 biggest digital pack-opening sites across eight
          collector criteria: buyback rate, card grading, odds transparency,
          value floor and more. Here are the rankings.
        </p>
        <div className="stat-row mono">
          <div>
            <b>8</b>
            <span>Sites ranked</span>
          </div>
          <div>
            <b>8</b>
            <span>Criteria scored</span>
          </div>
          <div>
            <b>Weekly</b>
            <span>Re-checked</span>
          </div>
        </div>
      </header>

      <main className="rankings wrap">
        <div className="rank-head">
          <h2>The 2026 ranking</h2>
          <span className="note mono">Updated {LAST_UPDATED} · scored out of 10</span>
        </div>
        <div className="list">
          {operators.map((op) => (
            <OperatorCard key={op.slug} op={op} />
          ))}
        </div>
        <p className="method">
          Scored by the RipTier model across eight collector criteria and
          re-checked weekly. <a href="/methodology">Read the full methodology</a>.
        </p>

        <section className="rundown" aria-label="Full reviews">
          <div className="rundown-intro">
            <h2>The reviews, in full</h2>
            <p>
              Digital pack-opening has gone from a novelty to a crowded market,
              and the sites are nowhere near equal. We worked through the eight
              biggest one by one, checking the things that decide whether you
              actually keep value: what each pays back for a card you do not
              want, whether the cards are graded, whether the odds are ever shown,
              and what real users say once the novelty wears off.
            </p>
            <p>
              Here is the full write-up on every site, best to worst, with what
              it was like to use and where it falls short.
            </p>
          </div>
          {operators.map((op) => (
            <OperatorRundown key={op.slug} op={op} />
          ))}
        </section>

        <Faq />
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
