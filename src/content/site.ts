/**
 * Site-wide settings. Edit these values; no layout code needs to change.
 */
export const site = {
  name: "Northstar People",
  shortName: "Northstar",
  tagline: "The HR platform for Indian businesses that run more than one brand.",
  description:
    "Northstar People is an HRMS for Indian companies and multi-brand groups: core HR, attendance with selfie punch, leave, India payroll with PF, ESI, PT and TDS, employee services, hiring and a built-in ISO 27001 & SOC 2 readiness centre.",

  /**
   * TODO(owner): replace with the real public URL of this website once the domain is decided.
   * Used for canonical URLs, Open Graph tags and sitemap.xml.
   */
  url: "https://www.northstarpeople.example",

  /**
   * TODO(owner): replace with a real, monitored inbox.
   * The contact / "Book a demo" form does NOT send data to any server. It opens the
   * visitor's own email app (a mailto: link) addressed to this address.
   */
  salesEmail: "sales@northstarpeople.example",

  /** TODO(owner): replace with the real HRM app sign-in URL (e.g. https://app.yourdomain/login). */
  signInUrl: "https://app.example.com/login",

  /** Example of a per-company sign-in address shown in illustrations. */
  exampleTenantHost: "yourcompany.yourdomain",
} as const;

export const nav = [
  { href: "/product/", label: "Product" },
  { href: "/security/", label: "Security" },
  { href: "/clients/", label: "Clients" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/contact/", label: "Contact" },
] as const;
