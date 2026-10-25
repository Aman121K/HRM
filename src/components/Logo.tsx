/** Northstar People wordmark — the same three-bar mark the app uses. */
export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className={`logo${onDark ? " logo--dark" : ""}`}>
      <span className="logo__mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="logo__text">
        northstar<small>PEOPLE</small>
      </span>
    </span>
  );
}
