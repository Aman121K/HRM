import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHead } from "@/components/PageHead";
import { Shot } from "@/components/Shot";
import { modules } from "@/content/modules";

export const metadata: Metadata = {
  title: "Product",
  description: "Attendance, leave, India payroll, approvals, multi-brand groups, core HR, employee services, hiring and compliance in Northstar People.",
  alternates: { canonical: "/product/" },
};

export default function ProductPage() {
  const withShots = modules.filter((m) => m.image);
  const rest = modules.filter((m) => !m.image);
  return (
    <>
      <PageHead
        kicker="Product"
        title="Everything from the first punch to the last payslip"
        intro="Switch on the modules you need for each brand. Everything shares one employee record, so nothing is typed twice."
      />

      <nav className="jump" aria-label="Modules on this page">
        <div className="container">
          <ul>
            {modules.map((m) => (
              <li key={m.id}><a href={`#${m.id}`}>{m.name}</a></li>
            ))}
          </ul>
        </div>
      </nav>

      {withShots.map((m, i) => (
        <section key={m.id} id={m.id} className={`section feature${i % 2 ? " section--paper" : ""}`}>
          <div className={`container split${i % 2 ? " split--rev" : ""}`}>
            <div>
              <h2>{m.name}</h2>
              <p className="lead">{m.summary}</p>
              <ul className="ticks">
                {m.features.map((f) => (
                  <li key={f}><Icon name="check" size={18} /> {f}</li>
                ))}
              </ul>
            </div>
            <div className="split__visual">
              <Shot src={m.image!} alt={m.alt ?? m.name} />
            </div>
          </div>
        </section>
      ))}

      <section className="section section--paper">
        <div className="container">
          <div className="section__head">
            <h2>And the rest of HR</h2>
          </div>
          <div className="module-list">
            {rest.map((m) => (
              <article key={m.id} id={m.id} className="module">
                <h3>{m.name}</h3>
                <p>{m.summary}</p>
                <ul>
                  {m.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
