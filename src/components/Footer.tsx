import Link from "next/link";
import { modules } from "@/content/modules";
import { site } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo onDark />
          <p>{site.tagline}</p>
          <p className="footer__contact">
            <a href={`mailto:${site.salesEmail}`}>{site.salesEmail}</a>
            {site.salesPhone && <a href={`tel:${site.salesPhone.replace(/\s/g, "")}`}>{site.salesPhone}</a>}
          </p>
        </div>

        <nav aria-label="Product" className="footer__col">
          <h2>Product</h2>
          <ul>
            {modules.slice(0, 6).map((m) => (
              <li key={m.id}><Link href={`/product/#${m.id}`}>{m.name}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="footer__col">
          <h2>Company</h2>
          <ul>
            <li><Link href="/clients/">Customers</Link></li>
            <li><Link href="/security/">Security</Link></li>
            <li><Link href="/pricing/">Pricing</Link></li>
            <li><Link href="/contact/">Contact</Link></li>
          </ul>
        </nav>

        <div className="footer__col">
          <h2>Already a customer?</h2>
          <ul>
            <li><a href={site.signInUrl}>Sign in</a></li>
            <li><Link href="/contact/">Get help</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {year} {site.name}</p>
        <p>Made in India, for Indian payroll.</p>
      </div>
    </footer>
  );
}
