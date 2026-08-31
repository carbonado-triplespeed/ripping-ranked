import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { operators, getOperator } from "@/data/operators";
import { criteria } from "@/data/rubric";

export function generateStaticParams() {
  return operators.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const op = getOperator(slug);
  if (!op) return { title: "Review" };
  return {
    title: `${op.name} review`,
    description: `${op.name} scored ${op.score.toFixed(1)}/10 and ranks #${op.rank} of ${operators.length} on RipTier. ${op.desc}.`,
  };
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const op = getOperator(slug);
  if (!op) notFound();

  const lead = op.rank === 1;
  const external = op.external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <>
      <SiteNav />
      <div className="page wrap">
        <div className="crumb">
          <a href="/">Rankings</a> / <a href="/reviews">Reviews</a> / {op.name}
        </div>

        <div className={`rev-hero${lead ? " lead" : ""}`}>
          <span className="rev-logo">
            <Image src={op.logo} alt={`${op.name} logo`} width={64} height={64} />
          </span>
          <div className="rev-id">
            <div className="rev-nm">
              <span className={`tier t-${op.tier}`}>{op.tier}</span>
              <h1>{op.name}</h1>
              <span className="rank">
                RANK #{op.rank} OF {operators.length}
              </span>
            </div>
            <p className="desc">{op.desc}</p>
          </div>
          <div className={`rev-score${lead ? " lead" : ""}`}>
            <div className="num">
              {op.score.toFixed(1)}
              <small>/10</small>
            </div>
            <div className="of">RipTier score</div>
          </div>
        </div>

        <div className="rev-grid">
          <div className="rev-verdict">
            <h2>Our verdict</h2>
            <p>{op.verdict}</p>
            <div className="rev-visit">
              <a className={`btn-lg${lead ? " gold" : ""}`} href={op.url} {...external}>
                {op.external ? `Visit ${op.name}` : `More on ${op.name}`}
              </a>
            </div>

            <h2 style={{ marginTop: 34 }}>Scorecard</h2>
            <div className="scorecard">
              {criteria.map((c) => (
                <div className="sc-row" key={c.id}>
                  <span className="sl">{c.label}</span>
                  <span className={`sc-bar${lead ? " gold" : ""}`}>
                    <i style={{ width: `${op.scores[c.id]}%` }} />
                  </span>
                  <span className="sv">{op.scores[c.id]}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="card">
              <h3>What we liked</h3>
              <ul className="pc pro">
                {op.pros.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>What to watch</h3>
              <ul className="pc con">
                {op.cons.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="method" style={{ marginTop: 30 }}>
          Scored by the RipTier model across eight collector criteria.{" "}
          <a href="/methodology">See how we score</a>.
        </p>
      </div>
      <SiteFooter />
    </>
  );
}
