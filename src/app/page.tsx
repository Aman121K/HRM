import Link from "next/link";
import { ClientGrid } from "@/components/ClientGrid";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { HeroVisual, PayrollVisual, PhoneVisual, TenantVisual } from "@/components/Illustrations";
import { clients } from "@/content/clients";
import { faqs } from "@/content/faq";
import { modules } from "@/content/modules";
import { complianceCenter, securityControls } from "@/content/security";

export default function HomePage() {
  const mobile = modules.find((m) => m.id === "mobile")!;
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="hero__sky" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--pill">
              <Icon name="star" size={14} /> HRMS &amp; India payroll
            </p>
            <h1>
              HR for every brand you run. <span className="grad">One platform.</span>
            </h1>
            <p className="lead">
              Northstar People brings core HR, selfie attendance, leave, India payroll and employee services together
              — with each company in your group on its own sign-in and its data kept apart.
            </p>
            <div className="hero__ctas">
              <Link href="/contact/#demo" className="btn btn--primary btn--lg">
                Book a demo <Icon name="arrow" size={18} />
              </Link>
              <Link href="/product/" className="btn btn--ghost btn--lg">
                Explore the product
              </Link>
            </div>
            <ul className="hero__points" role="list">
              <li><Icon name="check" size={16} /> PF, ESI, PT &amp; TDS</li>
              <li><Icon name="check" size={16} /> iOS &amp; Android app</li>
              <li><Icon name="check" size={16} /> ISO 27001 &amp; SOC 2 ready</li>
            </ul>
          </div>
          <div className="hero__visual">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ---------- Trusted by strip ---------- */}
      <section className="strip" aria-label="Trusted by">
        <div className="container strip__inner">
          <p className="strip__label">Trusted by</p>
          <ul role="list">
            {clients.map((c) => (
              <li key={c.name}>{c.name}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Multi-brand ---------- */}
      <section className="section" aria-labelledby="multi-title">
        <div className="container split">
          <div className="split__copy reveal">
            <p className="eyebrow">Built for groups</p>
            <h2 id="multi-title">Many companies. One login each. Zero data overlap.</h2>
            <p className="lead">
              Every company in your group gets its own sign-in subdomain. Row-level security in the database keeps each
              company&apos;s data apart, while the parent gets a group view and people who work across brands can switch
              in a click.
            </p>
            <ul className="ticks" role="list">
              <li><Icon name="check" size={18} /> Own subdomain per company</li>
              <li><Icon name="check" size={18} /> Database-level isolation</li>
              <li><Icon name="check" size={18} /> Group view &amp; brand switcher</li>
              <li><Icon name="check" size={18} /> Per-company encrypted file storage</li>
            </ul>
          </div>
          <div className="split__visual reveal">
            <TenantVisual />
          </div>
        </div>
      </section>

      {/* ---------- Modules ---------- */}
      <section className="section section--alt" aria-labelledby="modules-title">
        <div className="container">
          <div className="section__head reveal">
            <p className="eyebrow">The platform</p>
            <h2 id="modules-title">Everything HR runs on, in one place.</h2>
            <p className="lead">From the first offer letter to the last payslip — and every approval in between.</p>
          </div>
          <ul className="modules" role="list">
            {modules.map((m, i) => (
              <li key={m.id} className="module reveal" style={{ ["--i" as string]: i % 3 }}>
                <Link href={`/product/#${m.id}`} className="module__link">
                  <span className="module__icon"><Icon name={m.icon} /></span>
                  <h3>{m.name}</h3>
                  <p>{m.tagline}</p>
                  <span className="module__more">
                    Learn more <Icon name="arrow" size={16} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- India payroll ---------- */}
      <section className="section" aria-labelledby="payroll-title">
        <div className="container split split--rev">
          <div className="split__copy reveal">
            <p className="eyebrow">India payroll &amp; compliance</p>
            <h2 id="payroll-title">Statutory payroll, done the Indian way.</h2>
            <p className="lead">
              PF, ESI, Professional Tax and TDS under both the new and old regimes — calculated from attendance and
              leave, then out the door as payslips, bank payout files and a Tally export.
            </p>
            <div className="callout">
              <Icon name="file" size={20} />
              <p>
                <strong>Year-end, sorted.</strong> Employees submit tax declarations and proofs in the app. Form 16 / Form
                24Q are generated from payroll — now <strong>Form 130 / Form 138</strong> under the Income-tax Act 2025.
              </p>
            </div>
          </div>
          <div className="split__visual reveal">
            <PayrollVisual />
          </div>
        </div>
      </section>

      {/* ---------- Security ---------- */}
      <section className="section section--dark" aria-labelledby="sec-title">
        <div className="container">
          <div className="section__head reveal">
            <p className="eyebrow eyebrow--on-dark">Security &amp; trust</p>
            <h2 id="sec-title">Employee data deserves better than a spreadsheet.</h2>
            <p className="lead">
              Salaries, PAN and bank details are the most sensitive data you hold. Northstar People treats them that way.
            </p>
          </div>
          <ul className="sec-grid" role="list">
            {securityControls.map((s) => (
              <li key={s.title} className="sec-card reveal">
                <span className="sec-card__icon"><Icon name={s.icon} /></span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ul>
          <div className="ready reveal">
            <div>
              <h3>ISO 27001 &amp; SOC 2 ready</h3>
              <p>
                A built-in Compliance Center helps you prepare for audits — plus DPDP Act 2023 tools for data export,
                correction and erasure requests and a breach register.
              </p>
            </div>
            <ul className="pills" role="list">
              {complianceCenter.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <Link href="/security/" className="btn btn--on-dark">
              Security in detail <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Mobile ---------- */}
      <section className="section" aria-labelledby="mobile-title">
        <div className="container split">
          <div className="split__copy reveal">
            <p className="eyebrow">Mobile app</p>
            <h2 id="mobile-title">HR in every pocket — on iOS and Android.</h2>
            <p className="lead">{mobile.summary}</p>
            <ul className="ticks ticks--2" role="list">
              {mobile.features.map((f) => (
                <li key={f}><Icon name="check" size={18} /> {f}</li>
              ))}
            </ul>
            <p className="note">
              <Icon name="wifi" size={16} /> Anti-buddy-punching: one device per employee and office Wi-Fi / IP rules —
              your HR head decides.
            </p>
          </div>
          <div className="split__visual reveal">
            <PhoneVisual />
          </div>
        </div>
      </section>

      {/* ---------- Switch-over ---------- */}
      <section className="section section--tight" aria-labelledby="switch-title">
        <div className="container">
          <div className="switch reveal">
            <div>
              <p className="eyebrow">Moving from PeopleStrong?</p>
              <h2 id="switch-title">Bring your history with you.</h2>
            </div>
            <ul className="pills pills--light" role="list">
              {["Employee master", "Salary", "Leave balances", "YTD salary & TDS", "Past payslips"].map((x) => (
                <li key={x}><Icon name="check" size={14} /> {x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Clients ---------- */}
      <section className="section" aria-labelledby="clients-title">
        <div className="container">
          <div className="section__head reveal">
            <p className="eyebrow">Clients</p>
            <h2 id="clients-title">Trusted by teams who care about their people.</h2>
          </div>
          <ClientGrid />
        </div>
      </section>

      {/* ---------- Pricing teaser ---------- */}
      <section className="section section--alt" aria-labelledby="price-title">
        <div className="container teaser reveal">
          <div>
            <p className="eyebrow">Pricing</p>
            <h2 id="price-title">Priced around your group, not a rate card.</h2>
            <p className="lead">
              One company or a whole group of brands, a few modules or all of them — tell us what you run and we will put together a
              plan that fits.
            </p>
          </div>
          <div className="teaser__actions">
            <Link href="/pricing/" className="btn btn--primary btn--lg">
              Talk to us <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section" aria-labelledby="faq-title">
        <div className="container faq-wrap">
          <div className="section__head section__head--left reveal">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title">Questions HR teams ask us.</h2>
            <p className="lead">
              Something else on your mind? <Link href="/contact/">Get in touch</Link>.
            </p>
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
