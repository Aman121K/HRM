/**
 * Product modules for /product and the footer. Keep claims factual: only list features the product ships.
 */
export type Module = {
  id: string;
  name: string;
  summary: string;
  features: string[];
  /** Optional screenshot from public/screens/. */
  image?: string;
  alt?: string;
};

export const modules: Module[] = [
  {
    id: "attendance",
    name: "Attendance & shifts",
    summary: "Punches from the web, the mobile app and biometric machines in one record, with a selfie and location check.",
    features: [
      "Selfie punch, with a blink check on the web",
      "Office and outlet geofences",
      "Shifts, rosters and shift-swap requests",
      "Biometric machines (ZKTeco / eSSL over ADMS)",
      "One phone per employee and office Wi-Fi rules, if HR switches them on",
      "Missed-punch regularisation",
    ],
    image: "/screens/attendance.webp",
    alt: "Attendance screen with today's punch and recent days",
  },
  {
    id: "leave",
    name: "Leave",
    summary: "Policies per company, balances people can see, and approvals that take seconds.",
    features: ["Leave types and policies per company", "Live balances", "Team calendar and holiday list", "Apply and approve on mobile"],
    image: "/screens/leave.webp",
    alt: "Leave balances, calendar and upcoming holidays",
  },
  {
    id: "payroll",
    name: "India payroll",
    summary: "Monthly payroll with Indian statutory deductions, payslips and year-end tax forms.",
    features: [
      "PF, ESI and Professional Tax",
      "TDS under the new and old regime",
      "Payslips for every employee",
      "Bank payout file and Tally export",
      "Tax declarations and proofs in the app",
      "Form 16 / 24Q (Form 130 / 138 under the Income-tax Act 2025)",
      "Maker-checker approval before payroll is published",
    ],
    image: "/screens/payroll.webp",
    alt: "Employee payroll view with payslips and tax projection",
  },
  {
    id: "approvals",
    name: "Approvals",
    summary: "One inbox for managers: leave, expenses, travel, assets, shift swaps, letters, hiring and exits.",
    features: ["Everything waiting on you in one list", "Overdue requests flagged", "Approve, send back or reject", "Reminders before things slip"],
    image: "/screens/approvals.webp",
    alt: "Manager approvals inbox",
  },
  {
    id: "group",
    name: "Multi-brand group",
    summary: "Run several companies or brands from one account, each with its own sign-in and its own data.",
    features: [
      "Own sign-in address per brand (brand.yourdomain)",
      "Group dashboard for owners",
      "Brand switcher for people who work across brands",
      "Modules switched on or off per brand",
    ],
    image: "/screens/group.webp",
    alt: "Group dashboard with each brand side by side",
  },
  {
    id: "core-hr",
    name: "Core HR",
    summary: "One employee record from offer letter to exit.",
    features: [
      "Employee master and org structure",
      "Onboarding checklists",
      "Documents and HR letters",
      "Exit and full-and-final workflow",
      "Import from PeopleStrong: employees, salaries, leave balances, YTD salary and TDS, old payslips",
    ],
  },
  {
    id: "employee-services",
    name: "Employee services",
    summary: "The everyday things employees ask HR for, in the same app as their payslip.",
    features: ["HR helpdesk", "Expenses with a photo of the receipt", "Travel requests", "Company assets", "Learning courses", "Surveys and polls", "Recognition", "KPIs"],
  },
  {
    id: "hiring",
    name: "Hiring",
    summary: "Job requisitions and candidates, handed over to onboarding without re-typing.",
    features: ["Job requisitions with approval", "Candidate tracking"],
  },
  {
    id: "reports",
    name: "Reports & automation",
    summary: "Live dashboards, reports and reminders that run on their own.",
    features: ["Dashboards and analytics", "Scheduled reminders (approvals, documents, birthdays, anniversaries)", "Push notifications"],
  },
  {
    id: "compliance",
    name: "Security & compliance",
    summary: "Tools that help you meet the DPDP Act and prepare for ISO 27001 / SOC 2 audits.",
    features: ["Compliance centre with ISO 27001 and SOC 2 controls", "Access reviews and policy acknowledgements", "Employee data download, correction and deletion requests", "Breach register"],
  },
];
