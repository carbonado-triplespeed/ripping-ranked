import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "RipTier — 2026 rip-site rankings";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  let mark: string | null = null;
  try {
    const buf = await readFile(join(process.cwd(), "public", "brand", "riptier-mark.png"));
    mark = `data:image/png;base64,${buf.toString("base64")}`;
  } catch {
    mark = null;
  }

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
          {mark && <img src={mark} width={58} height={58} />}
          <div style={{ display: "flex", fontSize: "34px", fontWeight: 700, color: "#E9EBF1", letterSpacing: "1px" }}>
            RipTier
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex", fontSize: "26px", color: "#37C7B8", letterSpacing: "3px", textTransform: "uppercase" }}>
            The 2026 rip-site rankings
          </div>
          <div style={{ display: "flex", fontSize: "76px", fontWeight: 700, color: "#E9EBF1", lineHeight: 1.05, maxWidth: "980px" }}>
            Every Pokémon rip site, ranked.
          </div>
          <div style={{ display: "flex", fontSize: "30px", color: "#98A0B2", marginTop: "6px" }}>
            8 sites scored on what actually comes back.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div style={{ display: "flex", background: "#E8B93E", color: "#241A00", fontWeight: 700, fontSize: "24px", padding: "8px 16px", borderRadius: "8px" }}>
            SS
          </div>
          <div style={{ display: "flex", fontSize: "24px", color: "#646B7E" }}>
            Independent · scored across eight criteria · re-checked weekly
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
