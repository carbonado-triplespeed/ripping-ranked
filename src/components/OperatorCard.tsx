import Image from "next/image";
import type { Operator } from "@/data/operators";

export function OperatorCard({ op }: { op: Operator }) {
  const lead = op.rank === 1;
  const external = op.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <article className={`op${lead ? " lead" : ""}`}>
      <div className="op-rank">{String(op.rank).padStart(2, "0")}</div>
      <div className="op-logo">
        <Image src={op.logo} alt={`${op.name} logo`} width={46} height={46} />
      </div>
      <div className="op-main">
        <div className="op-nm">
          <span className={`tier t-${op.tier}`}>{op.tier}</span>
          <h3>{op.name}</h3>
        </div>
        <p className="op-desc">{op.desc}</p>
        <ul className="op-hi">
          {op.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <div className="op-tags">
          {op.tags.map((t) => (
            <span className="tag-pill" key={t}>{t}</span>
          ))}
        </div>
      </div>
      <div className="op-rail">
        <div className="op-score">
          {op.score.toFixed(1)}
          <small>/10</small>
        </div>
        <div className="op-bar">
          <i style={{ width: `${op.score * 10}%` }} />
        </div>
        <div className="op-meta">{op.meta.join(" · ")}</div>
        <div className="op-cta">
          <a className="btn btn-review" href={`/reviews/${op.slug}`}>Review</a>
          <a className="btn btn-visit" href={op.url} {...external}>Visit site</a>
        </div>
      </div>
    </article>
  );
}
