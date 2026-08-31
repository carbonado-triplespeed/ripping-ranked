import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { operators } from "@/data/operators";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "In-depth reviews of every digital trading-card pack-opening site we rank, scored across eight collector criteria.",
};

export default function ReviewsPage() {
  return (
    <>
      <SiteNav />
      <div className="page wrap">
        <div className="crumb">
          <a href="/">Rankings</a> / Reviews
        </div>
        <h1>Rip site reviews</h1>
        <p className="lede">
          The full write-up behind every ranking. Each review breaks down the
          score criterion by criterion, with the pros and cons we found.
        </p>
        <div className="mini-list">
          {operators.map((op) => (
            <a className="mini-row" key={op.slug} href={`/reviews/${op.slug}`}>
              <span className="mr-rank">{String(op.rank).padStart(2, "0")}</span>
              <span className="mini-logo">
                <Image src={op.logo} alt={`${op.name} logo`} width={46} height={46} />
              </span>
              <span>
                <b>
                  <span className={`tier t-${op.tier}`} style={{ marginRight: 9 }}>
                    {op.tier}
                  </span>
                  {op.name}
                </b>
                <div className="mr-desc">{op.desc}</div>
              </span>
              <span className="mr-score">{op.score.toFixed(1)}</span>
            </a>
          ))}
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
