/**
 * Site-wide settings. Edit these values; no layout code needs to change.
 */
export const site = {
  name: "Northstar People",
  tagline: "HR, attendance and payroll software for Indian businesses — built for groups that run more than one brand.",
  description:
    "Northstar People is HR software for Indian companies and multi-brand groups: selfie attendance, leave, approvals, and payroll with PF, ESI, PT and TDS worked out, plus an iOS and Android app for every employee.",

  /**
   * TODO(owner): replace with the real public URL of this website once the domain is decided.
   * Used for canonical URLs and sitemap.xml.
   */
  url: "https://www.northstarpeople.example",

  /**
   * TODO(owner): replace with a real, monitored inbox.
   * The "Book a demo" form does NOT send data to any server. It opens the visitor's own
   * email app (a mailto: link) addressed to this address.
   */
  salesEmail: "sales@northstarpeople.example",

  /** TODO(owner): optional sales phone / WhatsApp number, e.g. "+91 98xxx xxxxx". Leave empty to hide it. */
  salesPhone: "" as string,

  /** TODO(owner): replace with the real HRM app sign-in URL (e.g. https://app.yourdomain/login). */
  signInUrl: "https://app.example.com/login",
} as const;

export const nav = [
  { href: "/product/", label: "Product" },
  { href: "/security/", label: "Security" },
  { href: "/clients/", label: "Customers" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/contact/", label: "Contact" },
] as const;
