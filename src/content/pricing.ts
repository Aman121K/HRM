/** Pricing page content. There are no public prices: every plan is "Talk to us". */
export type Plan = { name: string; for: string; points: string[]; highlight?: boolean };

export const plans: Plan[] = [
  {
    name: "Single company",
    for: "One legal entity or brand that wants modern HR and India payroll.",
    points: [
      "Core HR, attendance and leave",
      "India payroll with PF, ESI, PT and TDS",
      "Employee services and hiring",
      "iOS and Android app",
    ],
  },
  {
    name: "Multi-brand group",
    for: "Groups running several companies or brands that need one platform with data kept apart.",
    points: [
      "Everything in Single company",
      "Own sign-in subdomain per company",
      "Database-level isolation per company",
      "Group view and brand switcher",
    ],
    highlight: true,
  },
];

export const pricingFactors: string[] = [
  "How many companies or brands you run",
  "Which modules you switch on",
  "How many employees use the platform",
  "Whether you are moving over from PeopleStrong",
];
