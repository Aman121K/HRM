import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Book a demo",
  description: "Book a demo of Northstar People or ask us a question.",
  alternates: { canonical: "/contact/" },
};

const expect = [
  "A 30-minute call on Google Meet or Zoom, at a time that suits you",
  "We show attendance, leave and payroll set up for a company like yours",
  "You get a written quote afterwards. No pressure, no long sales cycle",
];

export default function ContactPage() {
  return (
    <section className="section contact">
      <div className="container split split--top">
        <div>
          <p className="kicker">Book a demo</p>
          <h1>Let&apos;s see if Northstar People fits your company</h1>
          <h2 className="contact__sub">What happens next</h2>
          <ol className="contact__steps">
            {expect.map((e) => <li key={e}>{e}</li>)}
          </ol>
          <div className="contact__direct">
            <p>Prefer email?</p>
            <a href={`mailto:${site.salesEmail}`}>{site.salesEmail}</a>
            {site.salesPhone && <a href={`tel:${site.salesPhone.replace(/\s/g, "")}`}>{site.salesPhone}</a>}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
