import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How RipTier collects, uses and protects information when you use the site.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <div className="page wrap">
        <div className="crumb">
          <a href="/">Rankings</a> / Privacy Policy
        </div>
        <h1>Privacy Policy</h1>
        <div className="article-meta" style={{ marginTop: 16 }}>
          <span>Last updated 31 August 2026</span>
        </div>
        <div className="prose">
          <p>
            This policy explains what information the RipTier website (the
            &ldquo;Site&rdquo;) collects, how we use it, and the choices you have.
            By using the Site you agree to this policy.
          </p>

          <h2>Information we collect</h2>
          <p>
            <strong>Information you give us.</strong> If you email us, we receive
            your email address and whatever you choose to include in your message.
          </p>
          <p>
            <strong>Information collected automatically.</strong> When you visit
            the Site, we and our service providers may collect standard technical
            data such as your IP address, device and browser type, the pages you
            view, and how you arrived at the Site. This is collected through
            cookies and similar technologies.
          </p>

          <h2>Cookies and similar technologies</h2>
          <p>
            Cookies are small files stored on your device. We use essential
            cookies to make the Site work, analytics cookies to understand how the
            Site is used, and advertising cookies as described below. You can
            control cookies through your browser settings, though some parts of
            the Site may not work as well if you disable them.
          </p>

          <h2>Analytics</h2>
          <p>
            We use analytics services to understand traffic and improve the Site,
            such as which pages are popular and where visitors come from. This data
            is used in aggregate and helps us decide what to work on.
          </p>

          <h2>Advertising</h2>
          <p>
            We promote the Site through online advertising. We and our advertising
            partners, which may include platforms such as Meta (Facebook and
            Instagram) and other ad networks, may use cookies, pixels and similar
            technologies to measure how our ads perform and to show relevant ads to
            people who have visited the Site. These technologies may collect
            information about your visit and your device. You can usually control
            ad personalisation in the settings of the relevant advertising
            platform.
          </p>

          <h2>How we use information</h2>
          <p>
            We use the information we collect to operate and improve the Site, to
            respond to messages you send us, to measure and improve our
            advertising, and to keep the Site secure and prevent abuse.
          </p>

          <h2>How we share information</h2>
          <p>
            We do not sell your personal information. We share information with
            service providers who help us run the Site, our analytics providers,
            and our advertising partners as described above. We may also disclose
            information where required by law.
          </p>

          <h2>Your rights</h2>
          <p>
            Depending on where you live, you may have the right to access, correct
            or delete the personal information we hold about you, and to object to
            or limit certain uses, including targeted advertising. To make a
            request, contact us at{" "}
            <a href="mailto:hello@riptier.gg">hello@riptier.gg</a>.
          </p>

          <h2>Data retention and security</h2>
          <p>
            We keep information only for as long as we need it for the purposes
            described here, and we take reasonable measures to protect it. No
            method of transmission or storage is completely secure, so we cannot
            guarantee absolute security.
          </p>

          <h2>Children</h2>
          <p>
            The Site is intended for adults aged 18 and over and is not directed to
            children. We do not knowingly collect information from anyone under 18.
          </p>

          <h2>International visitors</h2>
          <p>
            The Site may be operated from, and information may be processed in,
            countries other than the one you live in. Where required, we take steps
            to protect information transferred across borders.
          </p>

          <h2>Changes</h2>
          <p>
            We may update this policy from time to time. The current version will
            always be posted on this page, with the date it was last updated.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href="mailto:hello@riptier.gg">hello@riptier.gg</a>.
          </p>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
