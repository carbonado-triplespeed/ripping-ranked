export interface Block {
  type: "p" | "h2";
  text: string;
}

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  updated: string;
  body: Block[];
}

export const guides: Guide[] = [
  {
    slug: "buyback-rate-explained",
    title: "Buyback rate is the number that matters most",
    excerpt:
      "Most of the money you spend on a rip site is decided by one figure. Here is why buyback deserves the top weight.",
    minutes: 4,
    updated: "31 August 2026",
    body: [
      {
        type: "p",
        text: "When people compare rip sites they look at pack prices and the big headline pulls. Both matter less than you think. The figure that quietly decides how much money you keep is the buyback rate.",
      },
      {
        type: "p",
        text: "Buyback is the share of a card's market value a site pays you when you sell it back. Pull a card you do not want, and the buyback rate is what turns it back into money. On most sites you will sell back far more cards than you keep, so this one number touches almost every rip you make.",
      },
      { type: "h2", text: "Why a few points matter more than they look" },
      {
        type: "p",
        text: "The gap between 100% and 85% buyback sounds small. Across a run of packs it is not. Sell back $1,000 of cards at 85% and you have lost $150 to the spread alone, before you count the packs that came in under cost. At 100% that $150 stays in your pocket.",
      },
      {
        type: "p",
        text: "This is why we give buyback the heaviest weight in our rankings. A site can have a slick app and a huge catalogue, but if it pays you back poorly, it is quietly the most expensive place to rip.",
      },
      { type: "h2", text: "What to check before you buy" },
      {
        type: "p",
        text: "Read the buyback rate on the site itself, not a review. Check whether it applies to every card or only some tiers. Check whether you are paid in cash you can withdraw or in credit you can only spend on more packs. A high buyback paid in locked credit is not the same as cash, and we score those differently.",
      },
      {
        type: "p",
        text: "Simply put, before you look at anything else on a rip site, find the buyback rate. It tells you more about the real cost of ripping there than the pack price ever will.",
      },
    ],
  },
  {
    slug: "psa-grading-explained",
    title: "PSA grading on rip sites, explained",
    excerpt:
      "Graded, raw, mixed: what those words mean for the card that actually lands in your hands.",
    minutes: 5,
    updated: "31 August 2026",
    body: [
      {
        type: "p",
        text: "Every rip site talks about cards, but not every site is handing you the same thing. The difference comes down to grading, and it changes both what your pull is worth and how sure you can be that it is real.",
      },
      { type: "h2", text: "What a grade actually is" },
      {
        type: "p",
        text: "A graded card has been sent to a third-party company, checked for authenticity and condition, given a number from 1 to 10, and sealed in a tamper-evident case. PSA is the most recognised of these graders for Pokémon. A PSA 10 is not just a nice card, it is a card whose condition has been verified and locked in by someone with no stake in the sale.",
      },
      {
        type: "p",
        text: "A raw card is ungraded. It might be mint, it might be played, and you are trusting the site's own description. A mixed catalogue is exactly what it sounds like: some cards graded, some not.",
      },
      { type: "h2", text: "Why it changes the value" },
      {
        type: "p",
        text: "Grading sets the price. The same card can be worth a few pounds raw and many times that as a PSA 10. When a site ships you a graded slab, the market value it quoted is anchored to something real and checkable. When it ships you a raw card, the value is softer, and the resale is on you.",
      },
      {
        type: "p",
        text: "It also protects you. A sealed, graded slab is hard to fake and easy to verify. It is the closest thing to a guarantee that the card in your hands is the card you were promised.",
      },
      { type: "h2", text: "How we weight it" },
      {
        type: "p",
        text: "We score an all-graded site above a mixed one, and a mixed one above raw. For a collector chasing value, all-PSA is the safer ground, which is why the sites that grade everything sit higher in our rankings.",
      },
    ],
  },
  {
    slug: "reading-pull-odds",
    title: "How to read published pull odds",
    excerpt:
      "Odds you can see beat odds you have to trust. A short guide to what good transparency looks like.",
    minutes: 4,
    updated: "31 August 2026",
    body: [
      {
        type: "p",
        text: "The best thing a rip site can do to earn your trust is show you the odds before you spend. The worst thing it can do is hide them. Between those two there is a lot of grey, so here is how to tell real transparency from the appearance of it.",
      },
      { type: "h2", text: "Published beats implied" },
      {
        type: "p",
        text: "Some sites publish the exact chance of each pull tier on every pack. Others show a vague band, or nothing at all, and ask you to trust that it is fair. Published odds let you judge a pack before you buy it. That is the standard we score against.",
      },
      { type: "h2", text: "Provably fair, and what it means" },
      {
        type: "p",
        text: "A few sites go further with a provably fair system. In plain terms, the outcome is committed in advance in a way you can check afterwards, so the site cannot change your result once you have paid. It is not a promise of good odds, it is a promise that the odds you were shown are the odds you got. When a site offers it and you can actually verify it, that is worth something.",
      },
      { type: "h2", text: "The questions to ask" },
      {
        type: "p",
        text: "Are the odds on the pack, or buried in a help article? Do they cover every tier, or only the rare ones? Can you check a result after the rip, or only take the site's word? A site that answers all three well has little to hide, and we rank it accordingly.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
