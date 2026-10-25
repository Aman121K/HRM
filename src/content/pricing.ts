/** Pricing page content. There are no public prices: every plan is quoted. */
export type Plan = { name: string; for: string; points: string[]; highlight?: boolean };

export const plans: Plan[] = [
  {
    name: "Single company",
    for: "One company or brand that wants attendance, leave and payroll in one place.",
    points: [
      "Attendance, leave and core HR",
      "India payroll with PF, ESI, PT and TDS",
      "Approvals, expenses and helpdesk",
      "Android and iPhone app for every employee",
      "Help moving your data across",
    ],
  },
  {
    name: "Multi-brand group",
    for: "Groups running several brands or companies that want one system with each brand kept separate.",
    points: [
      "Everything in Single company, for every brand",
      "Separate sign-in address per brand",
      "Group dashboard for owners",
      "Brand switcher for shared staff",
      "Modules switched on per brand",
    ],
    highlight: true,
  },
];

export const pricingFactors: string[] = [
  "Number of employees",
  "Number of brands or companies",
  "Which modules you switch on",
  "Whether we move your data from PeopleStrong or spreadsheets",
];
