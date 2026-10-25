import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { modules } from "@/content/modules";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Every Northstar People module: multi-brand platform, core HR, attendance, leave, India payroll, employee services, hiring, approvals, mobile app and compliance.",
  alternates: { canonical: "/product/" },
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title={<>One platform. <span className="grad">Every HR module.</span></>}
        lead="Northstar People covers the full employee lifecycle for Indian businesses — and lets a group run several companies side by side."
      >
        <nav className="jump" aria-label="Jump to module">
          {modules.map((m) => (
            <a key={m.id} href={`#${m.id}`}>
              {m.name}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="section" aria-label="Modules">
        <div className="container mod-list">
          {modules.map((m, i) => (
            <article key={m.id} id={m.id} className="mod-detail reveal" aria-labelledby={`${m.id}-t`}>
              <div className="mod-detail__head">
                <span className="mod-detail__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="module__icon"><Icon name={m.icon} /></span>
                <h2 id={`${m.id}-t`}>{m.name}</h2>
                <p className="mod-detail__tag">{m.tagline}</p>
              </div>
              <div className="mod-detail__body">
                <p>{m.summary}</p>
                <ul className="ticks" role="list">
                  {m.features.map((f) => (
                    <li key={f}><Icon name="check" size={18} /> {f}</li>
                  ))}
                </ul>
                {m.id === "compliance" && (
                  <Link href="/security/" className="text-link">
                    Read about security &amp; compliance <Icon name="arrow" size={16} />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
