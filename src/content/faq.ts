/** Frequently asked questions. Shown on the home page and the pricing page. */
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "We have more than one brand. Can they all run on one account?",
    a: "Yes, this is what Northstar People was built for. Each brand gets its own sign-in address and its own data. The group owner sees all brands together, and people who work for more than one brand can switch without logging out.",
  },
  {
    q: "We use PeopleStrong today. How hard is it to move?",
    a: "We import your employee list, salary structures, leave balances, this year's salary and TDS so far, and old payslips. Employees keep their history, and tax for the rest of the year is calculated correctly from day one.",
  },
  {
    q: "Which statutory deductions does payroll handle?",
    a: "PF, ESI, Professional Tax and TDS under both the new and old regime. Employees submit tax declarations and proofs in the app, and year-end Form 16 and 24Q (Form 130 and 138 under the new Income-tax Act) come out of payroll. You also get payslips, a bank payout file and a Tally export.",
  },
  {
    q: "How do you stop one person punching in for another?",
    a: "A selfie with every punch, a location check against your office or outlet, and two optional rules your HR head can switch on: one phone per employee, and punching only from the office Wi-Fi. Biometric machines can be connected as well.",
  },
  {
    q: "Is there a mobile app?",
    a: "Yes, for Android and iPhone. Employees sign in to their own brand, punch in with a selfie, apply for leave, download payslips and get notifications.",
  },
  {
    q: "Is our employees' data safe?",
    a: "Each company's data is kept separate, PAN and bank details are stored encrypted, admins must use 2-step login, and every change is recorded. The Security page has the details for your IT team.",
  },
  {
    q: "Are you ISO 27001 or SOC 2 certified?",
    a: "Not yet. The product has a built-in compliance centre that tracks ISO 27001 and SOC 2 controls and collects evidence, which helps you and us prepare for an audit. We will say so here when a certification is complete.",
  },
];
