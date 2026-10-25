"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname === href.replace(/\/$/, "");

  return (
    <header className={`header${open ? " header--open" : ""}`}>
      <div className="container header__inner">
        <Link href="/" className="header__brand" aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        <nav id="primary-nav" className="header__nav" aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="header__actions">
            <a href={site.signInUrl} className="header__signin">Sign in</a>
            <Link href="/contact/" className="btn btn--primary">Book a demo</Link>
          </div>
        </nav>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </div>
    </header>
  );
}
