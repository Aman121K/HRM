/**
 * Product modules. Shown on the home page (summary cards) and on /product (full detail).
 * Keep claims factual: only list features the product actually ships.
 */
import type { IconName } from "@/components/Icon";

export type Module = {
  id: string;
  name: string;
  icon: IconName;
  /** One line used on cards. */
  tagline: string;
  /** Short paragraph used on /product. */
  summary: string;
  features: string[];
  /** Show on the home page grid. */
  featured?: boolean;
};

export const modules: Module[] = [
  {
    id: "multi-company",
    name: "Multi-brand platform",
    icon: "layers",
    tagline: "Every brand in your group on one platform, with data kept apart.",
    summary:
      "Run several companies or brands from a single Northstar People account. Each company gets its own sign-in address and its data is isolated at the database level, while the parent group still gets a combined view.",
    features: [
      "Own sign-in subdomain for every company (company.yourdomain)",
      "Data isolated per company with database row-level security",
      "Group view for the parent organisation",
      "Brand switcher for people who work across companies",
      "Files stored per company in encrypted storage",
    ],
    featured: true,
  },
  {
    id: "core-hr",
    name: "Core HR",
    icon: "users",
    tagline: "One employee record, from offer letter to exit.",
    summary:
      "A clean employee master with onboarding, documents, letters and exits in one place, plus an import path that brings your history across when you switch from PeopleStrong.",
    features: [
      "Employee master and organisation data",
      "Onboarding and exit workflows",
      "Employee documents and letters",
      "PeopleStrong switch-over import: employee master, salary, leave balances, YTD salary and TDS, past payslips",
    ],
    featured: true,
  },
  {
    id: "attendance",
    name: "Attendance",
    icon: "clock",
    tagline: "Punches you can trust — on web, on mobile and on biometric devices.",
    summary:
      "Employees punch in from the browser or the mobile app with a selfie, inside the office geofence. Shifts, rosters and biometric devices sit in the same module, and HR decides how strict anti-buddy-punching should be.",
    features: [
      "Web and mobile punch with selfie",
      "Blink liveness check on web selfie punch",
      "Geofenced office sites",
      "Shifts and rosters",
      "Biometric device integration (ADMS)",
      "Anti-buddy-punching: one device per employee, office Wi-Fi / IP restriction — chosen by the HR head",
    ],
    featured: true,
  },
  {
    id: "leave",
    name: "Leave",
    icon: "calendar",
    tagline: "Policies, balances and approvals without spreadsheets.",
    summary:
      "Configure leave policies per company, keep balances accurate and let managers approve from the same inbox they use for everything else.",
    features: ["Leave policies", "Leave balances", "Applications from web and mobile", "Manager approvals"],
    featured: true,
  },
  {
    id: "payroll",
    name: "India payroll",
    icon: "rupee",
    tagline: "PF, ESI, PT and TDS — calculated, filed and paid out.",
    summary:
      "Payroll built for Indian statutory rules: provident fund, ESI, professional tax and TDS under both regimes, with payslips, bank payout files, Tally export and year-end tax forms.",
    features: [
      "Provident Fund (PF) and ESI",
      "Professional Tax (PT)",
      "TDS under the new and old tax regimes",
      "Payslips for every employee",
      "Bank payout files",
      "Tally export",
      "Employee tax declarations and proof submission",
      "Form 16 / Form 24Q — now Form 130 / Form 138 under the Income-tax Act 2025",
    ],
    featured: true,
  },
  {
    id: "employee-services",
    name: "Employee services",
    icon: "sparkle",
    tagline: "Helpdesk, assets, expenses, learning and recognition in one app.",
    summary:
      "Everything employees ask HR for, in the same place they check their payslip — from raising a helpdesk ticket to claiming an expense with a photo of the receipt.",
    features: [
      "HR helpdesk",
      "Asset management",
      "Expenses with receipt capture",
      "Travel requests",
      "Learning (LMS)",
      "Surveys and polls",
      "Recognition",
      "KPIs",
    ],
    featured: true,
  },
  {
    id: "hiring",
    name: "Hiring",
    icon: "briefcase",
    tagline: "From job requisition to candidate, then straight into onboarding.",
    summary: "Raise job requisitions, track candidates and hand new joiners over to onboarding without re-typing their details.",
    features: ["Job requisitions", "Candidate tracking"],
  },
  {
    id: "workflow",
    name: "Approvals & insights",
    icon: "inbox",
    tagline: "One approvals inbox, live dashboards and reminders that run themselves.",
    summary:
      "Managers approve leave, expenses, requisitions and more from a single inbox. Dashboards stay live, reports are a click away, and automations nudge people before things slip.",
    features: [
      "One approvals inbox",
      "Live dashboards",
      "Analytics and reports",
      "Automations and reminders",
      "Push notifications",
    ],
  },
  {
    id: "mobile",
    name: "Mobile app",
    icon: "phone",
    tagline: "iOS and Android app for every employee.",
    summary:
      "A native app for iOS and Android. Employees sign in to their own brand, confirm with 2-step verification and handle day-to-day HR from their phone.",
    features: [
      "Brand sign-in",
      "2-step verification",
      "Punch with selfie",
      "Leave",
      "Payslips",
      "Notifications",
    ],
  },
  {
    id: "compliance",
    name: "Security & compliance",
    icon: "shield",
    tagline: "ISO 27001 & SOC 2 ready, with DPDP Act tools built in.",
    summary:
      "A Compliance Center that helps you prepare for ISO 27001 and SOC 2 audits, and practical tools for India's Digital Personal Data Protection Act 2023.",
    features: [
      "ISO 27001 & SOC 2 Compliance Center: controls, automated checks, evidence",
      "Access reviews and policy acknowledgements",
      "Auditor pack",
      "DPDP Act 2023: employee data export, correction and erasure requests, breach register",
    ],
  },
];
