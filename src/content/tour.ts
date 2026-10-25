/**
 * Product tour on the home page and screenshots on /product.
 * Screenshots live in public/screens/ and are real captures of the Northstar People app with demo data.
 * To refresh them, capture the app at 1440×900 (desktop) or 390×844 (mobile) and save as WebP.
 */
export type TourStop = {
  id: string;
  tab: string;
  title: string;
  body: string;
  points: string[];
  image: string;
  alt: string;
};

export const tour: TourStop[] = [
  {
    id: "attendance",
    tab: "Attendance",
    title: "Punch in from the outlet, not from home",
    body: "Staff punch in from the web or the mobile app with a selfie. The location is checked against your office or outlet, and anything unusual goes to the manager to review.",
    points: [
      "Selfie punch with a blink check on the web",
      "Office and outlet locations (geofences)",
      "Biometric machines (ZKTeco / eSSL) feed the same record",
      "HR head can lock punching to one phone per person or to office Wi-Fi",
    ],
    image: "/screens/attendance.webp",
    alt: "Attendance screen showing today's punch status, hours worked and days flagged outside the geofence",
  },
  {
    id: "leave",
    tab: "Leave",
    title: "Leave balances people can actually see",
    body: "Employees check their balance and apply in two taps. Managers see who is away before they approve, and holidays are already on the calendar.",
    points: [
      "Leave types and policies per company",
      "Balances update the moment leave is approved",
      "Team calendar and holiday list",
      "Missed punch? Employees request a regularisation",
    ],
    image: "/screens/leave.webp",
    alt: "Leave screen with earned, casual and sick leave balances, a monthly calendar and upcoming holidays",
  },
  {
    id: "approvals",
    tab: "Approvals",
    title: "One inbox for everything waiting on a manager",
    body: "Leave, expenses, shift swaps, asset requests and exits all land in one list, oldest first. Managers approve, send back or reject without opening five different screens.",
    points: [
      "Every request type in one place",
      "Overdue items are flagged",
      "Approve from the phone too",
      "Every decision is recorded with who and when",
    ],
    image: "/screens/approvals.webp",
    alt: "Approvals inbox listing expense, asset, shift and exit requests awaiting the manager",
  },
  {
    id: "payroll",
    tab: "Payroll",
    title: "Payroll with PF, ESI, PT and TDS worked out",
    body: "Salaries are calculated from attendance and leave. Employees see their payslips, year-to-date totals and how much tax will be deducted for the rest of the year.",
    points: [
      "New and old tax regime",
      "Payslips, bank payout file and Tally export",
      "Tax declarations and proofs submitted in the app",
      "Form 16 / 24Q (now Form 130 / 138)",
    ],
    image: "/screens/payroll.webp",
    alt: "Payroll screen with year-to-date net pay, gross, tax deducted, provident fund, payslips chart and tax projection",
  },
  {
    id: "group",
    tab: "Group view",
    title: "Every brand side by side",
    body: "Owners of a group see headcount, attendance, pending approvals and payroll for each brand on one page. Each brand's data still stays in its own separate space.",
    points: [
      "Separate sign-in address for each brand",
      "Switch between brands without logging out",
      "Group totals for the owner",
      "Add a new brand in minutes",
    ],
    image: "/screens/group.webp",
    alt: "Group dashboard showing people, attendance, approvals and payroll for Blue Tokai, Got Tea, Programmingglore and Suchali's",
  },
];
