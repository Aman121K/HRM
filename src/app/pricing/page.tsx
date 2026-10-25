import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/content/faq";
import { plans, pricingFactors } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Northstar People pricing is tailored to your group. Talk to us for a plan.",
  alternates: { canonical: "/pricing/" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>Talk to us. <span className="grad">We will fit the plan to you.</span></>}
        lead="Every group is shaped differently, so we do not publish a rate card. Tell us what you run and we will come back with a clear quote."
      />

      <section className="section section--flush-top" aria-label="Plans">
        <div className="container plans">
          {plans.map((p) => (
            <article key={p.name} className={`plan reveal ${p.highlight ? "plan--hi" : ""}`}>
              {p.highlight && <span className="plan__tag">Built for groups</span>}
              <h2>{p.name}</h2>
              <p className="plan__for">{p.for}</p>
              <p className="plan__price">Talk to us</p>
              <ul className="ticks" role="list">
                {p.points.map((x) => (
                  <li key={x}><Icon name="check" size={18} /> {x}</li>
                ))}
              </ul>
              <Link href="/contact/#demo" className={`btn btn--lg ${p.highlight ? "btn--primary" : "btn--ghost"}`}>
                Get a quote
              </Link>
            </article>
          ))}
          <aside className="factors reveal" aria-labelledby="factors-title">
            <h2 id="factors-title">What shapes your quote</h2>
            <ul className="ticks" role="list">
              {pricingFactors.map((f) => (
                <li key={f}><Icon name="check" size={18} /> {f}</li>
              ))}
            </ul>
            <p className="note">Invoices are GST-compliant.</p>
          </aside>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="pfaq-title">
        <div className="container faq-wrap">
          <div className="section__head section__head--left">
            <p className="eyebrow">FAQ</p>
            <h2 id="pfaq-title">Before you ask</h2>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
