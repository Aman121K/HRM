/**
 * Product illustrations built from HTML/CSS/SVG only. They are schematic mock-ups,
 * not screenshots, and contain no customer data or statistics.
 */
import { site } from "@/content/site";
import { Icon } from "./Icon";

export function HeroVisual() {
  return (
    <div
      className="hv"
      role="img"
      aria-label="Illustration of the Northstar People web app: a selfie punch-in card, an approvals inbox and a payroll run with PF, ESI, PT and TDS steps."
    >
      <div className="hv__window">
        <div className="hv__bar">
          <span className="hv__dots"><i /><i /><i /></span>
          <span className="hv__url">
            <Icon name="lock" size={12} /> {site.exampleTenantHost}
          </span>
        </div>
        <div className="hv__body">
          <aside className="hv__side" aria-hidden="true">
            <span className="hv__brand" />
            {["users", "clock", "calendar", "rupee", "inbox", "chart"].map((n, i) => (
              <span key={n} className={`hv__nav ${i === 1 ? "is-on" : ""}`}>
                <Icon name={n as "users"} size={14} />
              </span>
            ))}
          </aside>
          <div className="hv__main">
            <div className="hv__card hv__punch">
              <div className="hv__selfie">
                <svg viewBox="0 0 64 64" aria-hidden="true">
                  <circle cx="32" cy="26" r="11" fill="var(--hv-face)" />
                  <path d="M12 60c2-12 10-18 20-18s18 6 20 18" fill="var(--hv-face)" />
                  <path className="hv__eye" d="M27 25h2M35 25h2" stroke="var(--ink-strong)" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="hv__scan" />
              </div>
              <div>
                <p className="hv__k">Selfie punch</p>
                <p className="hv__v">Blink detected</p>
                <span className="chip chip--ok"><Icon name="pin" size={12} /> Inside office geofence</span>
              </div>
              <span className="hv__btn">Punch in</span>
            </div>

            <div className="hv__card hv__inbox">
              <p className="hv__k">Approvals inbox</p>
              <ul>
                <li><Icon name="calendar" size={14} /> Leave request <span className="chip">Pending</span></li>
                <li><Icon name="file" size={14} /> Expense · receipt attached <span className="chip">Pending</span></li>
                <li><Icon name="briefcase" size={14} /> Job requisition <span className="chip chip--ok">Approved</span></li>
              </ul>
            </div>

            <div className="hv__card hv__payroll">
              <p className="hv__k">Payroll run</p>
              <ol>
                {["PF", "ESI", "PT", "TDS"].map((s) => (
                  <li key={s}><Icon name="check" size={12} strokeWidth={2.5} /> {s}</li>
                ))}
              </ol>
              <div className="hv__outs">
                <span><Icon name="file" size={13} /> Payslips</span>
                <span><Icon name="bank" size={13} /> Bank file</span>
                <span><Icon name="arrow" size={13} /> Tally</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hv__float hv__float--a" aria-hidden="true">
        <Icon name="shield" size={16} /> 2-step verified
      </div>
      <div className="hv__float hv__float--b" aria-hidden="true">
        <span className="hv__swatch" /> Brand A <span className="hv__sep">⇄</span> Brand B
      </div>
    </div>
  );
}

export function TenantVisual() {
  const brands = [
    { name: "Brand A", host: "brand-a.yourdomain", hue: "var(--accent)" },
    { name: "Brand B", host: "brand-b.yourdomain", hue: "var(--accent-2)" },
    { name: "Brand C", host: "brand-c.yourdomain", hue: "var(--accent-3)" },
  ];
  return (
    <div
      className="tv"
      role="img"
      aria-label="Diagram: a parent group view above three brands, each with its own sign-in subdomain and isolated data."
    >
      <div className="tv__group">
        <Icon name="layers" size={18} /> Group view
      </div>
      <svg className="tv__lines" viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M150 0v20M50 20h200M50 20v40M150 20v40M250 20v40" />
      </svg>
      <div className="tv__brands">
        {brands.map((b) => (
          <div key={b.name} className="tv__brand" style={{ ["--hue" as string]: b.hue }}>
            <span className="tv__badge" />
            <strong>{b.name}</strong>
            <span className="tv__host">
              <b>{b.host.split(".")[0]}</b>
              <span>.{b.host.split(".").slice(1).join(".")}</span>
            </span>
            <span className="tv__rls"><Icon name="lock" size={11} /> Isolated</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PhoneVisual() {
  return (
    <div className="pv" role="img" aria-label="Illustration of the Northstar People mobile app showing selfie punch, leave and payslips.">
      <div className="pv__phone pv__phone--back" aria-hidden="true">
        <div className="pv__screen">
          <p className="pv__title">Payslips</p>
          {["October", "September", "August"].map((m) => (
            <div key={m} className="pv__row">
              <Icon name="file" size={14} /> {m}
              <span className="pv__dl">PDF</span>
            </div>
          ))}
          <p className="pv__title pv__title--sm">Leave</p>
          <div className="pv__row"><Icon name="calendar" size={14} /> Apply for leave</div>
        </div>
      </div>
      <div className="pv__phone" aria-hidden="true">
        <div className="pv__notch" />
        <div className="pv__screen">
          <p className="pv__brandline"><span className="pv__swatch" /> Brand A</p>
          <div className="pv__cam">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="42" r="17" fill="var(--hv-face)" />
              <path d="M18 100c3-20 16-30 32-30s29 10 32 30" fill="var(--hv-face)" />
              <path className="hv__eye" d="M43 41h3M54 41h3" stroke="var(--ink-strong)" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span className="pv__ring" />
          </div>
          <p className="pv__hint">Look at the camera</p>
          <span className="pv__punch">Punch in</span>
          <div className="pv__note">
            <Icon name="star" size={12} /> Leave approved
          </div>
        </div>
      </div>
    </div>
  );
}

export function PayrollVisual() {
  const steps = [
    { k: "Attendance & leave", icon: "clock" as const },
    { k: "PF · ESI · PT", icon: "shield" as const },
    { k: "TDS · new & old regime", icon: "rupee" as const },
    { k: "Payslips", icon: "file" as const },
    { k: "Bank payout file", icon: "bank" as const },
    { k: "Tally export", icon: "arrow" as const },
  ];
  return (
    <ol className="flow" aria-label="Payroll flow">
      {steps.map((s, i) => (
        <li key={s.k} className="flow__step" style={{ ["--i" as string]: i }}>
          <span className="flow__icon"><Icon name={s.icon} size={18} /></span>
          <span>{s.k}</span>
        </li>
      ))}
    </ol>
  );
}

export function ChainVisual() {
  return (
    <div className="chain" role="img" aria-label="Diagram: audit log entries linked by hashes, each entry referencing the previous one.">
      {["entry", "entry", "entry", "entry"].map((_, i) => (
        <div key={i} className="chain__block" style={{ ["--i" as string]: i }}>
          <span className="chain__label">Audit entry</span>
          <span className="chain__hash">
            prev <code>{["0000…", "a91f…", "3c07…", "e5d2…"][i]}</code>
          </span>
          <span className="chain__hash">
            hash <code>{["a91f…", "3c07…", "e5d2…", "7b4a…"][i]}</code>
          </span>
        </div>
      ))}
    </div>
  );
}
