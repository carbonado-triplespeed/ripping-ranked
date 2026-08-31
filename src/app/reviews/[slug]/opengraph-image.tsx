import { ImageResponse } from "next/og";
import { operators, getOperator } from "@/data/operators";

export const alt = "RipTier review";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return operators.map((o) => ({ slug: o.slug }));
}

const tierColor: Record<string, { bg: string; fg: string }> = {
  SS: { bg: "#E8B93E", fg: "#241A00" },
  S: { bg: "#37C7B8", fg: "#04211E" },
  A: { bg: "#6E86B8", fg: "#0A0C11" },
  B: { bg: "#55627E", fg: "#E9EBF1" },
  C: { bg: "#4A5060", fg: "#E9EBF1" },
};

export default async function ReviewOpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const op = getOperator(slug);
  const accent = op?.tier === "SS" ? "#E8B93E" : "#37C7B8";
  const tc = tierColor[op?.tier ?? "S"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0C11",
          padding: "70px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              background: "#37C7B8",
              color: "#04211E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            R
          </div>
          <div style={{ display: "flex", fontSize: "28px", fontWeight: 700, color: "#E9EBF1" }}>
            RipTier
          </div>
          <div style={{ display: "flex", fontSize: "20px", color: "#646B7E", marginLeft: "6px" }}>
            review
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: tc.bg,
                color: tc.fg,
                fontSize: "34px",
                fontWeight: 700,
                padding: "6px 18px",
                borderRadius: "10px",
              }}
            >
              {op?.tier ?? "S"}
            </div>
            <div style={{ display: "flex", fontSize: "72px", fontWeight: 700, color: "#E9EBF1" }}>
              {op?.name ?? "RipTier"}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: "28px", color: "#98A0B2", maxWidth: "900px" }}>
            {op?.desc ?? ""}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "baseline", color: accent }}>
            <div style={{ display: "flex", fontSize: "96px", fontWeight: 700, lineHeight: 1 }}>
              {op ? op.score.toFixed(1) : "—"}
            </div>
            <div style={{ display: "flex", fontSize: "34px", color: "#646B7E", marginLeft: "8px" }}>
              /10
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", paddingBottom: "12px" }}>
            <div style={{ display: "flex", fontSize: "22px", color: "#646B7E", letterSpacing: "2px", textTransform: "uppercase" }}>
              RipTier score
            </div>
            <div style={{ display: "flex", fontSize: "28px", color: "#E9EBF1" }}>
              {op ? `Rank #${op.rank} of ${operators.length}` : ""}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
