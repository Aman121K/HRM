import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { PageHead } from "@/components/PageHead";
import { faqs } from "@/content/faq";
import { plans, pricingFactors } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Northstar People pricing for single companies and multi-brand groups.",
  alternates: { canonical: "/pricing/" },
};

export default function PricingPage() {
  return (
    <>
      <PageHead
        kicker="Pricing"
        title="A quote that fits your company"
        intro="Pricing depends on how many people and brands you have and which modules you use. Tell us a little about your company and we'll send a clear quote, with no setup surprises."
      />

      <section className="section">
        <div className="container">
          <div className="plans">
            {plans.map((p) => (
              <article key={p.name} className={`plan${p.highlight ? " plan--highlight" : ""}`}>
                <h2>{p.name}</h2>
                <p className="plan__for">{p.for}</p>
                <ul className="ticks">
                  {p.points.map((x) => <li key={x}><Icon name="check" size={18} /> {x}</li>)}
                </ul>
                <Link href="/contact/" className={`btn btn--lg btn--block ${p.highlight ? "btn--primary" : "btn--outline"}`}>Get a quote</Link>
              </article>
            ))}
          </div>
          <div className="factors">
            <h2>What the price depends on</h2>
            <ul>
              {pricingFactors.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container split split--top">
          <h2>Questions</h2>
          <Faq items={faqs} />
        </div>
      </section>
    </>
  );
}
