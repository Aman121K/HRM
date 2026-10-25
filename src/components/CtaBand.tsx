import Link from "next/link";
import { Icon } from "./Icon";

export function CtaBand({
  title = "See Northstar People with your own policies.",
  body = "Tell us how your companies, payroll and attendance work today. We will walk you through the product using your setup.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section section--tight" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta reveal">
          <div className="cta__stars" aria-hidden="true" />
          <div className="cta__copy">
            <h2 id="cta-title">{title}</h2>
            <p>{body}</p>
          </div>
          <div className="cta__actions">
            <Link href="/contact/#demo" className="btn btn--primary btn--lg">
              Book a demo <Icon name="arrow" size={18} />
            </Link>
            <Link href="/pricing/" className="btn btn--on-dark btn--lg">
              Talk to us about pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
