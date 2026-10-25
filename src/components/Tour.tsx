"use client";

import { useId, useState, type KeyboardEvent } from "react";
import { tour } from "@/content/tour";
import { Icon } from "./Icon";
import { Shot } from "./Shot";

/** Tabbed product tour (WAI-ARIA tabs pattern: arrow keys move between tabs). */
export function Tour() {
  const [active, setActive] = useState(0);
  const base = useId();
  const stop = tour[active];

  function onKey(e: KeyboardEvent<HTMLButtonElement>) {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + tour.length) % tour.length;
    setActive(next);
    document.getElementById(`${base}-tab-${next}`)?.focus();
  }

  return (
    <div className="tour">
      <div className="tour__tabs" role="tablist" aria-label="Product tour">
        {tour.map((t, i) => (
          <button
            key={t.id}
            id={`${base}-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`${base}-panel`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={onKey}
          >
            {t.tab}
          </button>
        ))}
      </div>
      <div className="tour__panel" id={`${base}-panel`} role="tabpanel" aria-labelledby={`${base}-tab-${active}`}>
        <div className="tour__copy">
          <h3>{stop.title}</h3>
          <p>{stop.body}</p>
          <ul className="ticks">
            {stop.points.map((p) => (
              <li key={p}>
                <Icon name="check" size={18} /> {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="tour__shot">
          <Shot key={stop.id} src={stop.image} alt={stop.alt} />
        </div>
      </div>
    </div>
  );
}
