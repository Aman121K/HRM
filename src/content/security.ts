/** Security & compliance content for the home page and /security. Keep it factual. */

/** Plain-language points for HR and business owners. */
export const securityPlain: { title: string; body: string }[] = [
  {
    title: "Each company's data stays separate",
    body: "Brands in the same group never see each other's people, salaries or files. The database itself enforces this, not just the screens.",
  },
  {
    title: "PAN and bank details are encrypted",
    body: "The most sensitive fields are stored encrypted, so they are unreadable even to someone who gets a copy of the database.",
  },
  {
    title: "2-step login for admins",
    body: "Anyone who can see salaries or change settings must confirm their login with an authenticator app. Company single sign-on is supported too.",
  },
  {
    title: "Every change is recorded",
    body: "Who changed what, and when, is kept in a log that cannot be quietly edited or deleted.",
  },
];

/** Technical details for the customer's IT / security team. */
export const securityTechnical: { area: string; detail: string }[] = [
  { area: "Tenant isolation", detail: "PostgreSQL row-level security per company; the application connects with a least-privilege role that cannot bypass it." },
  { area: "Encryption", detail: "TLS in transit. PAN, UAN, ESI and bank account numbers encrypted at field level with AES-256-GCM. Files in per-company folders in encrypted S3 storage." },
  { area: "Sign-in", detail: "Email and password with TOTP 2-step verification (mandatory for admin roles), or company SSO over OpenID Connect. Short-lived access tokens with rotating refresh tokens." },
  { area: "Audit trail", detail: "Append-only, hash-chained audit log: each entry is linked to the one before it, so edits or deletions are detectable." },
  { area: "Application hardening", detail: "Rate limiting, strict Content Security Policy, role- and brand-based access checks on every API call." },
  { area: "Attendance integrity", detail: "Selfie punch, geofences, optional device binding and office network restriction, chosen by the HR head." },
];

export const complianceCenter: string[] = [
  "ISO 27001 and SOC 2 controls mapped in the product",
  "Automated checks that collect evidence",
  "Quarterly access reviews",
  "Policy acknowledgements by employees",
  "Auditor pack export",
];

export const dpdpTools: string[] = [
  "Employees can download their own data",
  "Correction and deletion requests with tracking",
  "Breach register for HR and IT",
];
