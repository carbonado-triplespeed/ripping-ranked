import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern your use of the RipTier website.",
};

export default function TermsPage() {
  return (
    <>
      <SiteNav />
      <div className="page wrap">
        <div className="crumb">
          <a href="/">Rankings</a> / Terms of Use
        </div>
        <h1>Terms of Use</h1>
        <div className="article-meta" style={{ marginTop: 16 }}>
          <span>Last updated 31 August 2026</span>
        </div>
        <div className="prose">
          <p>
            These Terms of Use govern your access to and use of the RipTier
            website (the &ldquo;Site&rdquo;). By using the Site you agree to these
            terms. If you do not agree, please do not use the Site.
          </p>

          <h2>What RipTier is</h2>
          <p>
            RipTier publishes independent rankings, reviews and guides about
            third-party digital pack-opening websites. We are an information and
            comparison service. We do not sell packs, open packs, hold funds or
            operate any pack-opening service ourselves.
          </p>

          <h2>Not advice</h2>
          <p>
            Everything on the Site is provided for general information only. It is
            not financial, investment, legal or purchasing advice, and it is not a
            recommendation to buy from, or spend money on, any site we cover.
            Digital pack purchases carry risk and are not investments. You are
            responsible for your own decisions, and you should do your own
            research before spending anything.
          </p>

          <h2>Third-party sites</h2>
          <p>
            The Site links to third-party websites we do not own or control. We
            are not responsible for their content, pricing, odds, payouts,
            availability or practices, and a link is not an endorsement. Your use
            of any third-party site is governed by that site&rsquo;s own terms and
            policies, not ours.
          </p>

          <h2>Accuracy and scoring</h2>
          <p>
            Our scores and rankings are our own assessment, based on information
            that was publicly available at the time. The market changes, and sites
            change what they offer, so information on the Site may be out of date
            or incomplete. We make no warranty that anything on the Site is
            accurate, current or complete, and rankings may change at any time.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The RipTier name, the Site design and our written content are our
            property and may not be copied or reused without permission. All
            third-party names, trademarks and logos are the property of their
            respective owners and are used on the Site for identification and
            comparison purposes only.
          </p>

          <h2>Acceptable use</h2>
          <p>
            You agree not to misuse the Site, including by attempting to disrupt
            it, scrape it at scale, or use its content in a way that is unlawful
            or infringes the rights of others.
          </p>

          <h2>Disclaimer of warranties</h2>
          <p>
            The Site is provided on an &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; basis, without warranties of any kind, whether
            express or implied, to the fullest extent permitted by law.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, RipTier will not be liable for
            any loss or damage arising from your use of the Site or your reliance
            on anything published on it, including any dealings you have with a
            third-party site you found through us.
          </p>

          <h2>Age</h2>
          <p>
            The Site is intended for adults aged 18 and over. Do not use it if you
            are under 18.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms from time to time. The current version will
            always be posted on this page, with the date it was last updated.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <a href="mailto:hello@riptier.gg">hello@riptier.gg</a>.
          </p>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
