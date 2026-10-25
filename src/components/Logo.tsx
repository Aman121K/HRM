import { site } from "@/content/site";

/** Northstar People wordmark: a four-point star + name. Pure SVG/CSS. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={`logo ${className ?? ""}`}>
      <svg className="logo__mark" viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--accent)" />
            <stop offset="1" stopColor="var(--accent-2)" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="var(--ink-strong)" />
        <path d="M16 5.5 18.4 13.6 26.5 16 18.4 18.4 16 26.5 13.6 18.4 5.5 16 13.6 13.6Z" fill="url(#logo-g)" />
      </svg>
      <span className="logo__text">
        {site.shortName}
        <span className="logo__light"> People</span>
      </span>
    </span>
  );
}
