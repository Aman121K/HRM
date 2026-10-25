import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHead } from "@/components/PageHead";
import { complianceCenter, dpdpTools, securityPlain, securityTechnical } from "@/content/security";

export const metadata: Metadata = {
  title: "Security",
  description: "How Northstar People protects employee data: separate data per company, encrypted PAN and bank details, 2-step login, audit trail, DPDP tools and an ISO 27001 / SOC 2 compliance centre.",
  alternates: { canonical: "/security/" },
};

export default function SecurityPage() {
  return (
    <>
      <PageHead
        kicker="Security"
        title="How we look after your employees' data"
        intro="An HR system holds salaries, PAN, bank accounts and ID documents. Here is how Northstar People protects them, first in plain words and then in detail for your IT team."
      />

      <section className="section">
        <div className="container">
          <ul className="plain-list plain-list--grid">
            {securityPlain.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="section__head">
            <h2>For your IT and security team</h2>
          </div>
          <dl className="spec">
            {securityTechnical.map((t) => (
              <div key={t.area}>
                <dt>{t.area}</dt>
                <dd>{t.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container split split--top">
          <div>
            <h2>DPDP Act 2023</h2>
            <p className="lead">The Digital Personal Data Protection Act gives employees rights over their data. These tools are built in.</p>
            <ul className="ticks">
              {dpdpTools.map((t) => <li key={t}><Icon name="check" size={18} /> {t}</li>)}
            </ul>
          </div>
          <div>
            <h2>ISO 27001 and SOC 2</h2>
            <p className="lead">
              Northstar People is <strong>not certified yet</strong>. It includes a compliance centre that tracks the controls these
              standards ask for and collects evidence automatically, which helps you and us prepare for an audit.
            </p>
            <ul className="ticks">
              {complianceCenter.map((t) => <li key={t}><Icon name="check" size={18} /> {t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand title="Need a security questionnaire filled in?" body="Send it to us. We answer vendor security questionnaires as part of every evaluation." />
    </>
  );
}
