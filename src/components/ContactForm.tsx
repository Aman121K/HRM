"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { Icon } from "./Icon";

/**
 * Contact / "Book a demo" form.
 *
 * TODO(owner): this form does NOT send data to any server. On submit it builds a mailto:
 * link to `site.salesEmail` (src/content/site.ts) and opens the visitor's email app.
 * To capture leads directly, replace `handleSubmit` with a POST to your CRM / form
 * service (e.g. a serverless function) and update the privacy note below.
 */
const sizes = ["Under 50", "50–200", "200–1,000", "1,000+"];
const interests = ["Multi-brand setup", "India payroll", "Attendance", "Switching from PeopleStrong", "Security & compliance"];

export function ContactForm() {
  const [opened, setOpened] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const picked = data.getAll("interest").map(String);

    const subject = `Demo request — ${get("company") || get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Work email: ${get("email")}`,
      `Company: ${get("company")}`,
      `Companies / brands in group: ${get("brands") || "—"}`,
      `Team size: ${get("size") || "—"}`,
      `Interested in: ${picked.length ? picked.join(", ") : "—"}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${site.salesEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate={false}>
      <h2>Book a demo</h2>
      <div className="form__row">
        <label>
          <span>Your name</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span>Work email</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
      </div>
      <div className="form__row">
        <label>
          <span>Company</span>
          <input name="company" required autoComplete="organization" />
        </label>
        <label>
          <span>Companies / brands in your group <em>(optional)</em></span>
          <input name="brands" inputMode="numeric" />
        </label>
      </div>
      <label>
        <span>Team size <em>(optional)</em></span>
        <select name="size" defaultValue="">
          <option value="">Select…</option>
          {sizes.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </label>
      <fieldset className="form__checks">
        <legend>Interested in <em>(optional)</em></legend>
        {interests.map((x) => (
          <label key={x} className="check">
            <input type="checkbox" name="interest" value={x} />
            <span>{x}</span>
          </label>
        ))}
      </fieldset>
      <label>
        <span>Anything we should know? <em>(optional)</em></span>
        <textarea name="message" rows={4} />
      </label>
      <button type="submit" className="btn btn--primary btn--lg btn--block">
        Compose email <Icon name="arrow" size={18} />
      </button>
      <p className="form__note">
        This opens your email app with a pre-filled message to {site.salesEmail}. Nothing is sent or stored by this
        website.
      </p>
      <p className="form__status" role="status" aria-live="polite">
        {opened && (
          <>
            Your email app should be open now. If nothing happened, write to{" "}
            <a href={`mailto:${site.salesEmail}`}>{site.salesEmail}</a>.
          </>
        )}
      </p>
    </form>
  );
}
