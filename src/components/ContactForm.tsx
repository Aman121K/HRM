"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

/**
 * "Book a demo" form.
 *
 * TODO(owner): this form does NOT send data to any server. On submit it builds a mailto:
 * link to `site.salesEmail` (src/content/site.ts) and opens the visitor's email app.
 * To capture leads directly, replace `handleSubmit` with a POST to your CRM / form
 * service and add a privacy notice next to the button.
 */
const sizes = ["Under 50", "50–200", "200–1,000", "More than 1,000"];

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const subject = `Demo request: ${get("company")}`;
    const body = [
      `Name: ${get("name")}`,
      `Work email: ${get("email")}`,
      `Phone: ${get("phone") || "-"}`,
      `Company: ${get("company")}`,
      `Employees: ${get("size") || "-"}`,
      `Brands / companies: ${get("brands") || "-"}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${site.salesEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__row">
        <label>
          <span>Your name</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span>Company</span>
          <input name="company" required autoComplete="organization" />
        </label>
      </div>
      <div className="form__row">
        <label>
          <span>Work email</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          <span>Phone <em>optional</em></span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" />
        </label>
      </div>
      <div className="form__row">
        <label>
          <span>Number of employees</span>
          <select name="size" defaultValue="" required>
            <option value="" disabled>Choose one</option>
            {sizes.map((s) => <option key={s}>{s}</option>)}
          </select>
        </label>
        <label>
          <span>How many brands? <em>optional</em></span>
          <input name="brands" inputMode="numeric" placeholder="e.g. 3" />
        </label>
      </div>
      <label>
        <span>What would you like to see? <em>optional</em></span>
        <textarea name="message" rows={4} placeholder="e.g. payroll for 3 brands, moving from PeopleStrong in April" />
      </label>
      <button type="submit" className="btn btn--primary btn--lg btn--block">Request a demo</button>
      <p className="form__note">This opens your email app with the details filled in. Nothing is stored on this website.</p>
      <p className="form__status" role="status" aria-live="polite">
        {opened && (
          <>Your email app should be open. If nothing happened, write to <a href={`mailto:${site.salesEmail}`}>{site.salesEmail}</a>.</>
        )}
      </p>
    </form>
  );
}
