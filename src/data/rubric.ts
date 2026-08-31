export type Tier = "SS" | "S" | "A" | "B" | "C";

export interface Criterion {
  id: string;
  label: string;
  weight: number; // percentage points, sums to 100
  blurb: string;
}

// The RipTier rubric. Weighted for a Pokemon-collector audience: the things
// that protect the value of what you pull carry the most weight.
export const criteria: Criterion[] = [
  {
    id: "buyback",
    label: "Buyback rate",
    weight: 18,
    blurb:
      "The share of a card's market value the site pays when you sell it back. Higher means less value lost on the cards you do not want to keep.",
  },
  {
    id: "grading",
    label: "Card grading",
    weight: 16,
    blurb:
      "Whether cards are professionally graded and slabbed. An all-PSA site scores highest; mixed or raw cards score lower.",
  },
  {
    id: "pokemon",
    label: "Pokémon depth",
    weight: 15,
    blurb:
      "How deep the Pokémon catalogue runs. We weight this heavily because our readers collect Pokémon first.",
  },
  {
    id: "odds",
    label: "Odds transparency",
    weight: 14,
    blurb:
      "Whether pull odds are published before you buy, and whether they can be independently verified.",
  },
  {
    id: "floor",
    label: "Value floor",
    weight: 12,
    blurb:
      "Whether every pack guarantees a minimum card value, so a pull is never worth nothing.",
  },
  {
    id: "payout",
    label: "Payout options",
    weight: 10,
    blurb:
      "How you get paid, the withdrawal minimum, and how quickly the money actually lands.",
  },
  {
    id: "shipping",
    label: "Shipping",
    weight: 8,
    blurb:
      "Cost, speed and protection when you ship a real card to your door.",
  },
  {
    id: "trust",
    label: "Track record",
    weight: 7,
    blurb:
      "Review scores, total paid out and community size, as evidence the site pays what it promises.",
  },
];

export type Scores = Record<string, number>; // criterion id -> 0..100

export function compositeScore(scores: Scores): number {
  const total = criteria.reduce((sum, c) => sum + (scores[c.id] ?? 0) * c.weight, 0);
  return Math.round((total / 100 / 10) * 10) / 10; // 0..10, one decimal
}

// Tiers are score bands, so a tier always means the same thing.
export const tierBands: { tier: Tier; min: number; label: string }[] = [
  { tier: "SS", min: 9.0, label: "Elite" },
  { tier: "S", min: 8.0, label: "Great" },
  { tier: "A", min: 7.0, label: "Solid" },
  { tier: "B", min: 6.0, label: "Fair" },
  { tier: "C", min: 0, label: "Risky" },
];

export function deriveTier(score: number): Tier {
  return (tierBands.find((b) => score >= b.min) ?? tierBands[tierBands.length - 1]).tier;
}
