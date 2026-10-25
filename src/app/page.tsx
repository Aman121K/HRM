import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { Phone, Shot } from "@/components/Shot";
import { Tour } from "@/components/Tour";
import { clients } from "@/content/clients";
import { faqs } from "@/content/faq";
import { securityPlain } from "@/content/security";

const roles = [
  {
    who: "Employees",
    title: "Everything on their phone",
    points: ["Punch in with a selfie", "Check leave balance and apply", "Download payslips and Form 16", "Raise a helpdesk ticket or expense"],
  },
  {
    who: "Managers",
    title: "One place to say yes or no",
    points: ["Leave, expenses, shift swaps and more in one inbox", "See who is in today", "Overdue requests are flagged", "Approve from the phone"],
  },
  {
    who: "HR & finance",
    title: "Payroll without the spreadsheet",
    points: ["Attendance and leave flow straight into payroll", "PF, ESI, PT and TDS worked out", "Bank file, Tally export and payslips", "Reports for every brand"],
  },
];

const steps = [
  { title: "Send us your data", body: "An export from PeopleStrong or your spreadsheets: employees, salary structures and leave balances." },
  { title: "We set it up with you", body: "Brands, locations, leave rules and salary components configured the way you work today." },
  { title: "Check one payroll side by side", body: "Run a month in Northstar People next to your current system and compare every payslip." },
  { title: "Go live", body: "Employees get their sign-in link and the app. Their history and this year's tax come with them." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero__copy">
            <div>
              <p className="kicker">HR and payroll software for Indian businesses</p>
              <h1>Attendance, leave and payroll for every brand you run.</h1>
            </div>
            <div>
              <p className="lead">
                Staff punch in from their phone, managers approve from one inbox, and HR runs payroll with PF, ESI, PT
                and TDS already worked out. Each brand gets its own login and keeps its own data.
              </p>
              <div className="hero__actions">
                <Link href="/contact/" className="btn btn--primary btn--lg">Book a demo</Link>
                <Link href="#tour" className="btn btn--outline btn--lg">See the product</Link>
              </div>
            </div>
          </div>
          <div className="hero__visual">
            <Shot src="/screens/home.webp" alt="Northstar People employee home: attendance card with punch-in button, quick actions and leave balance" priority />
            <Phone src="/screens/m-home.webp" alt="The same home screen on a phone" className="hero__phone" />
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="customers" aria-labelledby="customers-title">
        <div className="container customers__inner">
          <h2 id="customers-title">Running HR and payroll for</h2>
          <ul>
            {clients.map((c) => (
              <li key={c.name}>
                <strong>{c.name}</strong>
                <span>{c.category}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Roles */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2>One system that each person actually uses</h2>
            <p className="lead">Most HR software is built for HR alone. Northstar People is built so that employees and managers do their part too.</p>
          </div>
          <div className="roles">
            {roles.map((r) => (
              <article key={r.who} className="role">
                <p className="role__who">{r.who}</p>
                <h3>{r.title}</h3>
                <ul className="ticks">
                  {r.points.map((p) => (
                    <li key={p}><Icon name="check" size={18} /> {p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tour */}
      <section className="section section--paper" id="tour">
        <div className="container">
          <div className="section__head">
            <h2>Have a look around</h2>
            <p className="lead">These are real screens from the app, with demo data.</p>
          </div>
          <Tour />
        </div>
      </section>

      {/* Payroll */}
      <section className="section section--ink">
        <div className="container split">
          <div>
            <p className="kicker kicker--light">India payroll</p>
            <h2>Built around Indian statutory rules, not adapted to them</h2>
            <p className="lead">
              Professional Tax changes by state, TDS depends on the regime each employee picks, and PF has its own ceilings.
              Northstar People handles these every month so your team only checks and approves.
            </p>
            <dl className="facts">
              <div><dt>Deductions</dt><dd>PF, ESI, Professional Tax, TDS (new and old regime)</dd></div>
              <div><dt>Every month</dt><dd>Payslips, bank payout file, Tally export</dd></div>
              <div><dt>Year end</dt><dd>Tax declarations and proofs, Form 16 / 24Q (now Form 130 / 138)</dd></div>
              <div><dt>Controls</dt><dd>Maker-checker approval before anything is published</dd></div>
            </dl>
          </div>
          <div className="split__visual">
            <Phone src="/screens/m-payroll.webp" alt="Payroll screen on a phone showing net pay and year-to-date totals" className="phone--lg" />
          </div>
        </div>
      </section>

      {/* Switching */}
      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2>Moving from PeopleStrong or spreadsheets</h2>
            <p className="lead">Switching mid-year is fine. Employees keep their history and the rest of the year&apos;s tax is calculated correctly.</p>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="steps__n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Security */}
      <section className="section section--paper">
        <div className="container split split--top">
          <div>
            <h2>Salary and PAN details deserve proper care</h2>
            <p className="lead">The short version, in plain words. Your IT team can find the technical details on the security page.</p>
            <p><Link href="/security/" className="link">Security details <Icon name="arrow" size={16} /></Link></p>
          </div>
          <ul className="plain-list">
            {securityPlain.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container split split--top">
          <div>
            <h2>Questions we often hear</h2>
            <p className="lead">Something else on your mind? <Link href="/contact/" className="link">Ask us directly</Link>.</p>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
