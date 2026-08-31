import { compositeScore, deriveTier, type Scores, type Tier } from "./rubric";

interface OperatorInput {
  slug: string;
  name: string;
  logo: string; // path under /public
  url: string;
  external?: boolean;
  desc: string;
  highlights: string[];
  tags: string[];
  meta: string[];
  scores: Scores;
  verdict: string;
  pros: string[];
  cons: string[];
}

export interface Operator extends OperatorInput {
  rank: number;
  score: number;
  tier: Tier;
}

const INPUT: OperatorInput[] = [
  {
    slug: "card-outpost",
    name: "Card Outpost",
    logo: "/logos/card-outpost.png",
    url: "https://cardoutpost.com",
    external: true,
    desc: "Pokémon-only break site · every card PSA-graded",
    highlights: [
      "100% buyback at market value on any card",
      "Live odds published per pack tier",
      "Real graded slab shipped, or sell back instantly",
    ],
    tags: ["Pokémon"],
    meta: ["100% buyback", "All PSA"],
    scores: { buyback: 100, grading: 100, pokemon: 100, odds: 92, floor: 100, payout: 82, shipping: 74, trust: 90 },
    verdict:
      "Card Outpost is the strongest pick for a Pokémon collector. It is the only site on our list that scores top marks on buyback, grading and Pokémon depth at the same time. Every card is PSA-graded, unwanted pulls sell back at the full market value, and the odds sit in front of you before you spend. It gives up a little ground on shipping cost and withdrawal minimums, but nothing else in the field returns more to a Pokémon-first collector.",
    pros: [
      "100% buyback at market value, the highest on our list",
      "Every card is PSA-graded and shipped as a real slab",
      "Live odds published per pack tier",
      "A guaranteed value floor on every pack",
    ],
    cons: [
      "Flat shipping fee per card",
      "Withdrawals need ID verification and a small minimum",
      "Pokémon only, so no other TCGs",
    ],
  },
  {
    slug: "boxed",
    name: "Boxed",
    logo: "/logos/boxed.jpg",
    url: "https://boxed.gg",
    external: true,
    desc: "Multi-TCG break site · provably fair · US fulfilment",
    highlights: [
      "Provably fair system you can verify",
      "Double-sleeved cards, 4.4/5 on Trustpilot",
      "Pokémon, One Piece and Magic packs",
    ],
    tags: ["Pokémon", "One Piece", "Magic"],
    meta: ["~90% buyback", "Graded"],
    scores: { buyback: 90, grading: 85, pokemon: 80, odds: 88, floor: 60, payout: 85, shipping: 88, trust: 92 },
    verdict:
      "Boxed is the best of the multi-TCG sites and a genuine runner-up. A provably fair system, a strong Trustpilot record and careful shipping put it near the top. It ranks behind Card Outpost mainly on Pokémon depth and the lack of a guaranteed value floor, but for collectors who want One Piece and Magic alongside Pokémon it is the one to beat.",
    pros: [
      "Provably fair system you can verify",
      "Strong 4.4/5 Trustpilot record",
      "Double-sleeved, well-protected shipping",
      "Wide catalogue across Pokémon, One Piece and Magic",
    ],
    cons: ["No guaranteed value floor per pack", "Pokémon is one of several lines, not the focus"],
  },
  {
    slug: "gotya",
    name: "Gotya",
    logo: "/logos/gotya.jpg",
    url: "/reviews/gotya",
    desc: "Pokémon-focused · pool-backed odds",
    highlights: [
      "Odds published per pack with vault inventory behind them",
      "One real graded card per pack",
      "Ship it, sell it, or take 90% back",
    ],
    tags: ["Pokémon"],
    meta: ["~90% buyback", "Graded"],
    scores: { buyback: 90, grading: 82, pokemon: 88, odds: 84, floor: 70, payout: 80, shipping: 78, trust: 74 },
    verdict:
      "Gotya is a Pokémon-first site that gets the fundamentals right. Odds are published per pack with the vault inventory behind them, and buyback sits at around 90%. It falls just behind Boxed on track record and grading consistency, but for a Pokémon-only collector it is a strong, straightforward option.",
    pros: [
      "Pokémon-focused catalogue",
      "Around 90% instant buyback",
      "Odds published per pack, backed by vault inventory",
    ],
    cons: ["Smaller track record than the leaders", "No stated value floor on every pack"],
  },
  {
    slug: "courtyard",
    name: "Courtyard",
    logo: "/logos/courtyard.jpg",
    url: "https://courtyard.io",
    external: true,
    desc: "Vaulted multi-category · free insured storage",
    highlights: [
      "Free vaulting, insured at full market value",
      "Cash payouts or ship the card",
      "Sports, Pokémon, comics and more",
    ],
    tags: ["Pokémon", "Sports", "Comics"],
    meta: ["~85% buyback", "Graded"],
    scores: { buyback: 85, grading: 80, pokemon: 62, odds: 70, floor: 55, payout: 84, shipping: 82, trust: 78 },
    verdict:
      "Courtyard is a solid vaulted marketplace with free insured storage and cash payouts. Its reach across sports, Pokémon, comics and watches suits mixed collectors, but that breadth is also why it lands mid-table for a Pokémon audience: the Pokémon catalogue is shallower than the specialists, and there is no guaranteed value floor.",
    pros: [
      "Free vaulting, insured at full market value",
      "Cash payouts or ship the card",
      "Broad multi-category catalogue",
    ],
    cons: ["Pokémon depth is thinner than the specialists", "No guaranteed value floor", "Mixed reviews on withdrawals"],
  },
  {
    slug: "phygitals",
    name: "Phygitals",
    logo: "/logos/phygitals.jpg",
    url: "/reviews/phygitals",
    desc: "Commit-reveal fairness · US-based vaults",
    highlights: [
      "Provably fair commit-reveal you can check",
      "PSA, Fanatics and Alt vaults, all US-based",
      "Withdraw to bank in 1 to 3 days",
    ],
    tags: ["Pokémon", "One Piece", "Sports"],
    meta: ["~85% buyback", "PSA / Alt"],
    scores: { buyback: 85, grading: 82, pokemon: 55, odds: 86, floor: 45, payout: 80, shipping: 80, trust: 68 },
    verdict:
      "Phygitals leans on a provably fair commit-reveal system and US-based vaults, and it pays out fast to your bank. It is a dependable, crypto-friendly option, but a shallow Pokémon catalogue and no value floor keep it in the middle of the pack for a Pokémon-first collector.",
    pros: [
      "Provably fair commit-reveal you can check",
      "US-based PSA, Fanatics and Alt vaults",
      "Fast bank withdrawals, 1 to 3 days",
    ],
    cons: ["Thin Pokémon catalogue", "No guaranteed value floor", "Crypto-first payouts will not suit everyone"],
  },
  {
    slug: "pullbox",
    name: "Pullbox",
    logo: "/logos/pullbox.jpg",
    url: "https://pullbox.gg",
    external: true,
    desc: "Multi-TCG · battles and live community chat",
    highlights: [
      "Head-to-head pack battles",
      "Active live chat, public odds",
      "Pokémon, Lorcana, Magic and One Piece",
    ],
    tags: ["Pokémon", "Lorcana", "Magic"],
    meta: ["~88% buyback", "Graded"],
    scores: { buyback: 86, grading: 76, pokemon: 68, odds: 72, floor: 40, payout: 78, shipping: 70, trust: 66 },
    verdict:
      "Pullbox is built around community: head-to-head pack battles and an active live chat. It is fun and the buyback is reasonable, but odds transparency and Pokémon depth are weaker than the leaders and the track record is still small. A decent pick if the social side matters most to you.",
    pros: ["Head-to-head pack battles", "Active live community chat", "Reasonable buyback around 88%"],
    cons: ["Smaller track record", "Odds and value floor are weaker", "Pokémon is one of several lines"],
  },
  {
    slug: "packdraw",
    name: "PackDraw",
    logo: "/logos/packdraw.jpg",
    url: "https://packdraw.com",
    external: true,
    desc: "Established digital pack opening",
    highlights: [
      "Large review volume, mixed reception",
      "Digital pack opening across TCGs",
      "Cash payouts",
    ],
    tags: ["Pokémon", "Sports"],
    meta: ["~85% buyback", "Mixed"],
    scores: { buyback: 85, grading: 65, pokemon: 66, odds: 60, floor: 42, payout: 78, shipping: 72, trust: 74 },
    verdict:
      "PackDraw is an established name with a large review volume, but reception is mixed and grading is inconsistent. It covers the basics of digital pack opening without standing out on any of the metrics that protect value, which lands it near the bottom for a Pokémon collector.",
    pros: ["Established, large review volume", "Straightforward digital pack opening"],
    cons: ["Mixed reviews and inconsistent grading", "No value floor", "Limited odds transparency"],
  },
  {
    slug: "packz",
    name: "Packz",
    logo: "/logos/packz.jpg",
    url: "https://packz.io",
    external: true,
    desc: "Sports and Pokémon · early-stage",
    highlights: [
      "Open packs, win cards, cash out",
      "Tier pricing from $25 to $1,000",
      "Small review base so far",
    ],
    tags: ["Pokémon", "Sports"],
    meta: ["~80% buyback", "Mixed"],
    scores: { buyback: 78, grading: 55, pokemon: 60, odds: 50, floor: 35, payout: 70, shipping: 58, trust: 40 },
    verdict:
      "Packz is early-stage and it shows. Instant cashout is a plus, but a small review base, inconsistent grading and thin transparency make it the riskiest option on our list. Worth watching as it matures, but not where we would send a Pokémon collector today.",
    pros: ["Instant cashout", "Tier pricing from $25 to $1,000"],
    cons: ["Small, unproven review base", "Inconsistent grading", "Weak odds transparency and no value floor"],
  },
];

export const operators: Operator[] = INPUT.map((o) => {
  const score = compositeScore(o.scores);
  return { ...o, score, tier: deriveTier(score), rank: 0 };
})
  .sort((a, b) => b.score - a.score)
  .map((o, i) => ({ ...o, rank: i + 1 }));

export function getOperator(slug: string): Operator | undefined {
  return operators.find((o) => o.slug === slug);
}
