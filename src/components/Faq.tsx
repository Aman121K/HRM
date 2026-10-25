import type { Faq as FaqItem } from "@/content/faq";

/** Accessible FAQ using native <details>/<summary> (works without JavaScript). */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details key={f.q} className="faq__item" open={i === 0}>
          <summary>
            <span>{f.q}</span>
            <span className="faq__chev" aria-hidden="true" />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
