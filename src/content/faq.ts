/** Frequently asked questions. Shown on the home page and the pricing page. */
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Can we run several companies or brands on one account?",
    a: "Yes. That is what Northstar People is built for. Each company gets its own sign-in subdomain and its data is isolated at the database level with row-level security. The parent group gets a combined view, and people who work across brands can switch between them.",
  },
  {
    q: "We are on PeopleStrong today. How do we move?",
    a: "Northstar People has a switch-over import for PeopleStrong data: employee master, salary structures, leave balances, year-to-date salary and TDS, and past payslips. Your employees keep their history from day one.",
  },
  {
    q: "Which Indian statutory components does payroll cover?",
    a: "PF, ESI, Professional Tax and TDS under both the new and old regimes. Employees submit tax declarations and proofs in the app, and year-end Form 16 / Form 24Q (Form 130 / Form 138 under the Income-tax Act 2025) are generated from payroll. You also get payslips, bank payout files and a Tally export.",
  },
  {
    q: "How do you stop buddy punching?",
    a: "Selfie punch (with a blink liveness check on the web), geofenced office sites, and optional controls that your HR head chooses: one device per employee, and punching only from the office Wi-Fi or IP. Biometric devices that speak ADMS can be connected too.",
  },
  {
    q: "Is Northstar People ISO 27001 or SOC 2 certified?",
    a: "No — and we will not pretend otherwise. Northstar People is ISO 27001 & SOC 2 ready: it includes a Compliance Center with controls, automated checks, evidence collection, access reviews, policy acknowledgements and an auditor pack, to help you prepare for your own audits.",
  },
  {
    q: "Does it help with the DPDP Act 2023?",
    a: "Yes. Employees can export their data and raise correction or erasure requests, and HR keeps a breach register — all inside the product.",
  },
  {
    q: "Is there a mobile app?",
    a: "Yes, for iOS and Android. Employees sign in to their brand, confirm with 2-step verification, punch with a selfie, apply for leave, download payslips and receive notifications.",
  },
  {
    q: "Can we sign in with our company SSO?",
    a: "Yes. Northstar People supports company single sign-on over OpenID Connect (OIDC), as well as email and password with 2-step verification (TOTP), which is mandatory for admins.",
  },
];
