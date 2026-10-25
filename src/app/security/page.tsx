import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { ChainVisual, TenantVisual } from "@/components/Illustrations";
import { PageHero } from "@/components/PageHero";
import { complianceCenter, dpdpTools, securityControls } from "@/content/security";

export const metadata: Metadata = {
  title: "Security & compliance",
  description:
    "How Northstar People protects employee data: 2-step verification, SSO, AES-256-GCM encryption for PAN and bank details, hash-chained audit log, ISO 27001 & SOC 2 readiness and DPDP Act tools.",
  alternates: { canonical: "/security/" },
};

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security & compliance"
        title={<>Security that is built in, <span className="grad">not bolted on.</span></>}
        lead="Payroll and HR data is personal. Northstar People is designed so each company's data stays its own, sensitive fields stay encrypted and every change leaves a trail."
      />

      <section className="section" aria-labelledby="controls-title">
        <div className="container">
          <div className="section__head reveal">
            <h2 id="controls-title">Protections in the product</h2>
          </div>
          <ul className="sec-grid sec-grid--light" role="list">
            {securityControls.map((s) => (
              <li key={s.title} className="sec-card reveal">
                <span className="sec-card__icon"><Icon name={s.icon} /></span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="iso-title">
        <div className="container split">
          <div className="split__copy reveal">
            <p className="eyebrow">ISO 27001 &amp; SOC 2 ready</p>
            <h2 id="iso-title">A Compliance Center inside your HR system.</h2>
            <p className="lead">
              Northstar People helps you prepare for ISO 27001 and SOC 2 audits by keeping controls, checks and evidence
              in one place.
            </p>
            <ul className="ticks" role="list">
              {complianceCenter.map((c) => (
                <li key={c}><Icon name="check" size={18} /> {c}</li>
              ))}
            </ul>
            <p className="disclaimer">
              Northstar People is not itself certified to ISO 27001 or SOC 2. The Compliance Center is a tool to help
              you prepare for your own audits; certification is granted only by an accredited auditor.
            </p>
          </div>
          <div className="split__visual reveal">
            <ChainVisual />
            <p className="caption">Audit entries are hash-chained, so any edit or deletion breaks the chain.</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="dpdp-title">
        <div className="container split split--rev">
          <div className="split__copy reveal">
            <p className="eyebrow">DPDP Act 2023</p>
            <h2 id="dpdp-title">Privacy rights your employees can actually use.</h2>
            <p className="lead">
              India&apos;s Digital Personal Data Protection Act gives employees rights over their data. Northstar People
              turns those rights into simple workflows.
            </p>
            <ul className="ticks" role="list">
              {dpdpTools.map((c) => (
                <li key={c}><Icon name="check" size={18} /> {c}</li>
              ))}
            </ul>
          </div>
          <div className="split__visual reveal">
            <TenantVisual />
            <p className="caption">Each company&apos;s data is isolated with database row-level security.</p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a security questionnaire?"
        body="Send it over. We will answer it with what the product actually does — no hand-waving."
      />
    </>
  );
}
