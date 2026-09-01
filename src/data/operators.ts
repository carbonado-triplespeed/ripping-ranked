import { compositeScore, deriveTier, type Scores, type Tier } from "./rubric";

interface OperatorInput {
  slug: string;
  name: string;
  logo: string;
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
    slug: "courtyard",
    name: "Courtyard",
    logo: "/logos/courtyard.jpg",
    url: "https://courtyard.io",
    external: true,
    desc: "Vaulted marketplace · free insured storage · cash payouts",
    highlights: [
      "Free vaulting, insured at full market value",
      "Cash payouts, or ship the graded card",
      "Deep catalogue across Pokémon, sports and comics",
    ],
    tags: ["Pokémon", "Sports", "Comics"],
    meta: ["~92% buyback", "Graded"],
    scores: { buyback: 92, grading: 88, pokemon: 84, odds: 88, floor: 84, payout: 92, shipping: 90, trust: 96 },
    verdict:
      "Courtyard is the strongest all-round marketplace on our list and a close second overall. Free insured vaulting, fast cash payouts and well-handled shipping make it one of the safest places to hold value, and its buyback and grading are dependable. It sits behind Card Outpost only because Pokémon, while well stocked, is one of several categories it runs rather than its whole focus.",
    pros: [
      "Free vaulting, insured at full market value",
      "Fast cash payouts or ship the card",
      "Dependable buyback and grading",
      "Deep, well-run catalogue",
    ],
    cons: ["Pokémon is one of several categories", "No fixed value floor per pack"],
  },
  {
    slug: "collectors-crypt",
    name: "Collectors Crypt",
    logo: "/logos/collectors-crypt.png",
    url: "https://collectorcrypt.com",
    external: true,
    desc: "Vaulted graded cards · provably fair · strong buyback",
    highlights: [
      "Graded cards with published pull odds",
      "Provably fair, and well reviewed",
      "Strong buyback, paid out reliably",
    ],
    tags: ["Pokémon", "Sports"],
    meta: ["~90% buyback", "Graded"],
    scores: { buyback: 90, grading: 90, pokemon: 84, odds: 90, floor: 80, payout: 86, shipping: 84, trust: 90 },
    verdict:
      "Collectors Crypt has quietly become one of the more trusted vaulted sites, with graded cards, published odds and a strong buyback. Payouts run through crypto, which is the main thing to be comfortable with, but the fairness and the numbers behind it are among the best we checked, which is why it lands just outside the top two.",
    pros: ["Graded cards with published odds", "Provably fair and well reviewed", "Strong, reliable buyback"],
    cons: ["Crypto-first payouts", "Pokémon shares space with other lines"],
  },
  {
    slug: "trove",
    name: "Trove",
    logo: "/logos/trove.png",
    url: "https://trove.com",
    external: true,
    desc: "Cash · PSA-verified · withdraw to bank, PayPal or Venmo",
    highlights: [
      "PSA-verified cards, plain-dollar pricing",
      "Withdraw to debit, ACH, PayPal or Venmo",
      "Tiered buyback up to 90%",
    ],
    tags: ["Pokémon", "Sports"],
    meta: ["up to 90% buyback", "PSA-verified"],
    scores: { buyback: 88, grading: 86, pokemon: 80, odds: 84, floor: 80, payout: 90, shipping: 86, trust: 88 },
    verdict:
      "Trove keeps things refreshingly simple: plain-dollar pricing, PSA-verified cards, and withdrawals to debit, ACH, PayPal or Venmo. Buyback is tiered up to 90 percent and the whole flow is easy to follow. A strong, no-nonsense pick that only just misses the top three on Pokémon depth.",
    pros: ["PSA-verified cards", "Withdraw to debit, ACH, PayPal or Venmo", "Plain-dollar pricing, no tokens"],
    cons: ["Buyback is tiered rather than flat", "Pokémon is not the sole focus"],
  },
  {
    slug: "pullbox",
    name: "Pullbox",
    logo: "/logos/pullbox.jpg",
    url: "https://pullbox.gg",
    external: true,
    desc: "Multi-TCG · pack battles and a busy community",
    highlights: [
      "Head-to-head pack battles",
      "Active live chat, cards graded",
      "Strong buyback around 88%",
    ],
    tags: ["Pokémon", "Lorcana", "Magic"],
    meta: ["~88% buyback", "Graded"],
    scores: { buyback: 88, grading: 82, pokemon: 82, odds: 84, floor: 68, payout: 84, shipping: 80, trust: 84 },
    verdict:
      "Pullbox pairs a genuinely fun experience with solid fundamentals. Pack battles and a busy live chat make it the most social site here, buyback is strong and cards are graded. The odds could be clearer, but it earns its place near the top.",
    pros: ["Pack battles and an active community", "Strong buyback around 88%", "Cards are graded"],
    cons: ["Odds less detailed than the leaders", "No fixed value floor"],
  },
  {
    slug: "boxed",
    name: "Boxed",
    logo: "/logos/boxed.jpg",
    url: "https://boxed.gg",
    external: true,
    desc: "Multi-TCG · provably fair · double-sleeved shipping",
    highlights: [
      "Provably fair system you can verify",
      "Double-sleeved cards, 4.4/5 on Trustpilot",
      "Pokémon, One Piece and Magic packs",
    ],
    tags: ["Pokémon", "One Piece", "Magic"],
    meta: ["~88% buyback", "Graded"],
    scores: { buyback: 88, grading: 85, pokemon: 74, odds: 82, floor: 55, payout: 84, shipping: 86, trust: 86 },
    verdict:
      "Boxed is a well-run, established multi-TCG site with a provably fair system and careful, double-sleeved shipping. It is a dependable choice, especially if you want One Piece and Magic alongside Pokémon. It sits mid-pack here because the sites above it either pay back a little more or focus harder on Pokémon.",
    pros: [
      "Provably fair system you can verify",
      "Double-sleeved, well-protected shipping",
      "Strong 4.4/5 Trustpilot record",
    ],
    cons: ["No guaranteed value floor", "Pokémon is one of several lines", "Middle of the pack on buyback here"],
  },
  {
    slug: "gotya",
    name: "Gotya",
    logo: "/logos/gotya.jpg",
    url: "https://gotya.gg",
    external: true,
    desc: "Pokémon-focused · published odds",
    highlights: [
      "Odds published per pack",
      "One real graded card per pack",
      "Around 90% buyback",
    ],
    tags: ["Pokémon"],
    meta: ["~90% buyback", "Graded"],
    scores: { buyback: 86, grading: 78, pokemon: 80, odds: 76, floor: 60, payout: 76, shipping: 74, trust: 70 },
    verdict:
      "Gotya is a tidy, Pokémon-first site with published odds and roughly 90 percent buyback. The basics are all here. It just does not yet have the payout options, shipping polish or track record of the sites above it, which keeps it in the middle.",
    pros: ["Pokémon-focused catalogue", "Published odds per pack", "Around 90% buyback"],
    cons: ["Fewer payout options than the leaders", "Smaller track record"],
  },
  {
    slug: "phygitals",
    name: "Phygitals",
    logo: "/logos/phygitals.jpg",
    url: "https://phygitals.com",
    external: true,
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
      "Packz is early-stage and it shows. Instant cash-out is a plus, but a small review base, inconsistent grading and thin transparency make it the riskiest option on our list. Worth watching as it matures, but not where we would put real money today.",
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
