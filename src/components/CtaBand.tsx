import Link from "next/link";
import { site } from "@/content/site";

/** Closing call to action used at the bottom of most pages. */
export function CtaBand({ title = "See it with your own team's data", body = "A 30-minute walkthrough of attendance, leave and payroll, set up the way your company works." }: { title?: string; body?: string }) {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="cta__actions">
          <Link href="/contact/" className="btn btn--gold btn--lg">Book a demo</Link>
          <a href={`mailto:${site.salesEmail}`} className="cta__mail">or write to {site.salesEmail}</a>
        </div>
      </div>
    </section>
  );
}
