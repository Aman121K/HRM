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
          <Logo />
          <p>{site.tagline}</p>
          <a className="footer__mail" href={`mailto:${site.salesEmail}`}>
            {site.salesEmail}
          </a>
        </div>

        <nav aria-label="Product modules" className="footer__col">
          <h2>Product</h2>
          <ul>
            {modules.slice(0, 7).map((m) => (
              <li key={m.id}>
                <Link href={`/product/#${m.id}`}>{m.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="footer__col">
          <h2>Company</h2>
          <ul>
            <li><Link href="/product/">All modules</Link></li>
            <li><Link href="/security/">Security &amp; compliance</Link></li>
            <li><Link href="/clients/">Clients</Link></li>
            <li><Link href="/pricing/">Pricing</Link></li>
            <li><Link href="/contact/">Contact</Link></li>
          </ul>
        </nav>

        <div className="footer__col">
          <h2>Get started</h2>
          <ul>
            <li><Link href="/contact/#demo">Book a demo</Link></li>
            <li><a href={site.signInUrl}>Sign in</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {year} {site.name}. All rights reserved.</p>
        <p>Made for Indian businesses.</p>
      </div>
    </footer>
  );
}
