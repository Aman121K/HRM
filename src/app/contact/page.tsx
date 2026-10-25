import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & book a demo",
  description: "Book a demo of Northstar People or ask us a question.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Book a demo. <span className="grad">See it with your setup.</span></>}
        lead="Tell us a little about your companies and how you run HR and payroll today. We will reply to set up a walkthrough."
      />
      <section className="section section--flush-top" id="demo" aria-label="Contact form">
        <div className="container contact">
          <ContactForm />
          <aside className="contact__side">
            <h2>What to expect</h2>
            <ol className="steps">
              <li><span>1</span> We reply to understand your companies, payroll and attendance setup.</li>
              <li><span>2</span> A walkthrough of the modules that matter to you.</li>
              <li><span>3</span> A clear quote, and a plan for switching over.</li>
            </ol>
            <div className="contact__mail">
              <Icon name="mail" size={20} />
              <div>
                <p>Prefer email?</p>
                <a href={`mailto:${site.salesEmail}`}>{site.salesEmail}</a>
              </div>
            </div>
            <div className="contact__mail">
              <Icon name="key" size={20} />
              <div>
                <p>Already a customer?</p>
                <a href={site.signInUrl}>Sign in to Northstar People</a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
