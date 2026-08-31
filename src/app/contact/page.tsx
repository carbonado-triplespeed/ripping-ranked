import type { Metadata } from "next";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the RipTier team: general enquiries, corrections and feedback.",
};

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <div className="page wrap">
        <div className="crumb">
          <a href="/">Rankings</a> / Contact
        </div>
        <h1>Contact us</h1>
        <p className="lede">
          Questions, corrections or a site we should be tracking? Send it over.
          We read everything and reply as quickly as we can.
        </p>
        <div className="contact-methods">
          <div className="cm">
            <span className="cl">General enquiries</span>
            <a href="mailto:hello@riptiers.com">hello@riptiers.com</a>
            <p>For anything about the site, the rankings or working with us.</p>
          </div>
          <div className="cm">
            <span className="cl">Corrections</span>
            <a href="mailto:corrections@riptiers.com">corrections@riptiers.com</a>
            <p>
              If we have a fact wrong about a site, tell us and we will check it
              and update the score.
            </p>
          </div>
        </div>
        <div className="prose">
          <p>
            RipTier is intended for adults aged 18 and over. Please do not send us
            personal or financial details by email.
          </p>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
