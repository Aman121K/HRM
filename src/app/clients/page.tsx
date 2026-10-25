import type { Metadata } from "next";
import { ClientGrid } from "@/components/ClientGrid";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Clients",
  description: "Companies that run their HR on Northstar People.",
  alternates: { canonical: "/clients/" },
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title={<>Trusted by teams who <span className="grad">care about their people.</span></>}
        lead="From coffee roasters to technology teams, these businesses run their HR on Northstar People."
      />
      <section className="section section--flush-top" aria-label="Client list">
        <div className="container">
          <ClientGrid />
        </div>
      </section>
      <CtaBand title="Want your team on this list?" />
    </>
  );
}
