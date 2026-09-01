import Image from "next/image";
import type { Operator } from "@/data/operators";
import { experiences } from "@/data/experiences";
import { TrackedVisitLink } from "./TrackedVisitLink";

export function OperatorRundown({ op }: { op: Operator }) {
  const lead = op.rank === 1;
  const experience = experiences[op.slug];
  return (
    <article className={`rd${lead ? " lead" : ""}`}>
      <div className="rd-head">
        <span className="rd-rank">{String(op.rank).padStart(2, "0")}</span>
        <span className="rd-logo">
          <Image src={op.logo} alt={`${op.name} logo`} width={52} height={52} />
        </span>
        <div className="rd-id">
          <div className="rd-nm">
            <span className={`tier t-${op.tier}`}>{op.tier}</span>
            <h3>{op.name}</h3>
          </div>
          <div className="rd-desc">{op.desc}</div>
        </div>
        <div className="rd-score">
          <b>{op.score.toFixed(1)}</b>
          <small>/10</small>
        </div>
      </div>

      {experience && <p className="rd-exp">{experience}</p>}

      <div className="rd-pc">
        <div>
          <h4>What we liked</h4>
          <ul className="pc pro">
            {op.pros.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>What to watch</h4>
          <ul className="pc con">
            {op.cons.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rd-cta">
        <TrackedVisitLink
          className="btn btn-visit"
          href={op.url}
          external={op.external}
          funnel={op.slug === "card-outpost"}
        >
          Visit {op.name}
        </TrackedVisitLink>
        <a className="btn btn-review" href={`/reviews/${op.slug}`}>
          Read the full review
        </a>
      </div>
    </article>
  );
}
