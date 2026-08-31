import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { OperatorCard } from "@/components/OperatorCard";
import { operators } from "@/data/operators";

export default function Home() {
  return (
    <>
      <SiteNav />

      <header className="hero wrap">
        <span className="eyebrow">The 2026 rip-site rankings</span>
        <h1>
          Every Pokémon rip site, ranked on <em>what actually comes back</em>.
        </h1>
        <p className="lede">
          We scored the 8 biggest digital pack-opening sites across eight
          collector criteria: buyback rate, card grading, odds transparency,
          value floor and more. Here is how they rank, best to worst.
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
          <span className="note mono">8 sites · scored out of 10</span>
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
      </main>

      <SiteFooter />
    </>
  );
}
