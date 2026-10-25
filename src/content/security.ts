/** Security & compliance content for the home page and /security. Keep it factual. */
import type { IconName } from "@/components/Icon";

export type SecurityItem = { icon: IconName; title: string; body: string };

export const securityControls: SecurityItem[] = [
  {
    icon: "key",
    title: "2-step verification",
    body: "Email and password with TOTP-based 2-step verification. Mandatory for every admin.",
  },
  {
    icon: "building",
    title: "Company SSO",
    body: "Let employees sign in with your identity provider over OpenID Connect (OIDC).",
  },
  {
    icon: "lock",
    title: "Encrypted sensitive fields",
    body: "PAN and bank account details are encrypted at rest with AES-256-GCM.",
  },
  {
    icon: "layers",
    title: "Isolated per company",
    body: "Row-level security keeps each company's data apart in the database. Files live in per-company encrypted S3 storage.",
  },
  {
    icon: "chain",
    title: "Tamper-evident audit log",
    body: "Every audit entry is hash-chained to the one before it, so edits or deletions show up.",
  },
  {
    icon: "gauge",
    title: "Rate limiting & strict CSP",
    body: "Requests are rate limited and pages ship with a strict Content Security Policy.",
  },
];

export const complianceCenter: string[] = [
  "Controls mapped for ISO 27001 and SOC 2",
  "Automated checks",
  "Evidence collection",
  "Access reviews",
  "Policy acknowledgements",
  "Auditor pack",
];

export const dpdpTools: string[] = [
  "Employee data export",
  "Correction and erasure requests",
  "Breach register",
];
