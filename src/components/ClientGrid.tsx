import { clients } from "@/content/clients";

/** Text wordmark cards. Logos are only shown when an approved file is set in content/clients.ts. */
export function ClientGrid() {
  return (
    <ul className="clients" role="list">
      {clients.map((c, i) => (
        <li key={c.name} className="client reveal" style={{ ["--i" as string]: i }}>
          {c.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={c.logo} alt={c.name} className="client__logo" />
          ) : (
            <span className="client__name">{c.name}</span>
          )}
          <span className="client__cat">{c.category}</span>
          <span className="client__runs">
            <span className="client__dot" aria-hidden="true" /> Runs on Northstar People
          </span>
        </li>
      ))}
    </ul>
  );
}
