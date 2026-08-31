export type Tier = "SS" | "S" | "A" | "B" | "C";

export interface Operator {
  rank: number;
  slug: string;
  tier: Tier;
  name: string;
  logo: string;
  url: string;
  external?: boolean;
  score: number;
  desc: string;
  highlights: string[];
  tags: string[];
  meta: string[];
}

// Rankings are produced by the RipTier scoring model (see Methodology).
// Scores are weighted for a Pokemon-collector audience: buyback rate, grading,
// Pokemon depth, odds transparency and value floor carry the most weight.
export const operators: Operator[] = [
  {
    rank: 1,
    slug: "card-outpost",
    tier: "SS",
    name: "Card Outpost",
    logo: "CO",
    url: "https://cardoutpost.com",
    external: true,
    score: 9.6,
    desc: "Pokémon-only break site · every card PSA-graded",
    highlights: [
      "100% buyback at market value on any card",
      "Live odds published per pack tier",
      "Real graded slab shipped, or sell back instantly",
    ],
    tags: ["Pokémon"],
    meta: ["100% buyback", "All PSA"],
  },
  {
    rank: 2,
    slug: "boxed",
    tier: "S",
    name: "Boxed",
    logo: "BX",
    url: "#",
    score: 8.9,
    desc: "Multi-TCG break site · provably fair · US fulfilment",
    highlights: [
      "Provably fair system you can verify",
      "Double-sleeved cards, 4.4/5 on Trustpilot",
      "Pokémon, One Piece and Magic packs",
    ],
    tags: ["Pokémon", "One Piece", "Magic"],
    meta: ["~90% buyback", "Graded"],
  },
  {
    rank: 3,
    slug: "gotya",
    tier: "S",
    name: "Gotya",
    logo: "GO",
    url: "#",
    score: 8.6,
    desc: "Pokémon-focused · pool-backed odds",
    highlights: [
      "Odds published per pack with vault inventory behind them",
      "One real graded card per pack",
      "Ship it, sell it, or take 90% back",
    ],
    tags: ["Pokémon"],
    meta: ["~90% buyback", "Graded"],
  },
  {
    rank: 4,
    slug: "courtyard",
    tier: "A",
    name: "Courtyard",
    logo: "CY",
    url: "#",
    score: 8.0,
    desc: "Vaulted multi-category · free insured storage",
    highlights: [
      "Free vaulting, insured at full market value",
      "Cash payouts or ship the card",
      "Sports, Pokémon, comics and more",
    ],
    tags: ["Pokémon", "Sports", "Comics"],
    meta: ["~85% buyback", "Graded"],
  },
  {
    rank: 5,
    slug: "phygitals",
    tier: "A",
    name: "Phygitals",
    logo: "PH",
    url: "#",
    score: 7.6,
    desc: "Commit-reveal fairness · US-based vaults",
    highlights: [
      "Provably fair commit-reveal you can check",
      "PSA, Fanatics and Alt vaults, all US-based",
      "Withdraw to bank in 1 to 3 days",
    ],
    tags: ["Pokémon", "One Piece", "Sports"],
    meta: ["~85% buyback", "PSA / Alt"],
  },
  {
    rank: 6,
    slug: "pullbox",
    tier: "B",
    name: "Pullbox",
    logo: "PB",
    url: "#",
    score: 7.2,
    desc: "Multi-TCG · battles and live community chat",
    highlights: [
      "Head-to-head pack battles",
      "Active live chat, public odds",
      "Pokémon, Lorcana, Magic and One Piece",
    ],
    tags: ["Pokémon", "Lorcana", "Magic"],
    meta: ["~88% buyback", "Graded"],
  },
  {
    rank: 7,
    slug: "packdraw",
    tier: "B",
    name: "PackDraw",
    logo: "PD",
    url: "#",
    score: 6.7,
    desc: "Established digital pack opening",
    highlights: [
      "Large review volume, mixed reception",
      "Digital pack opening across TCGs",
      "Cash payouts",
    ],
    tags: ["Pokémon", "Sports"],
    meta: ["~85% buyback", "Mixed"],
  },
  {
    rank: 8,
    slug: "packz",
    tier: "C",
    name: "Packz",
    logo: "PZ",
    url: "#",
    score: 5.4,
    desc: "Sports and Pokémon · early-stage",
    highlights: [
      "Open packs, win cards, cash out",
      "Tier pricing from $25 to $1,000",
      "Small review base so far",
    ],
    tags: ["Pokémon", "Sports"],
    meta: ["~80% buyback", "Mixed"],
  },
];
