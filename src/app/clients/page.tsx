import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHead } from "@/components/PageHead";
import { Shot } from "@/components/Shot";
import { clients } from "@/content/clients";

export const metadata: Metadata = {
  title: "Customers",
  description: "Companies that run their HR and payroll on Northstar People.",
  alternates: { canonical: "/clients/" },
};

export default function ClientsPage() {
  return (
    <>
      <PageHead
        kicker="Customers"
        title="Who runs on Northstar People"
        intro="Coffee and tea brands with outlet staff on shifts, a bakery, and a software team. Each one uses the same product, set up its own way."
      />

      <section className="section">
        <div className="container">
          <ul className="client-cards">
            {clients.map((c) => (
              <li key={c.name}>
                {c.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.logo} alt={c.name} height={40} />
                ) : (
                  <strong>{c.name}</strong>
                )}
                <span>{c.category}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container split">
          <div>
            <h2>Several brands, one login each</h2>
            <p className="lead">
              When one owner runs several brands, each brand still signs in at its own address and manages its own
              people and payroll. The owner sees every brand side by side, and no brand can see another&apos;s data.
            </p>
            <p><Link href="/product/#group" className="link">How multi-brand groups work</Link></p>
          </div>
          <div className="split__visual">
            <Shot src="/screens/group.webp" alt="Group dashboard with each brand's people, approvals and payroll" />
          </div>
        </div>
      </section>

      <CtaBand title="Want to be next?" body="Tell us how many brands and employees you have, and we'll show you the setup." />
    </>
  );
}
