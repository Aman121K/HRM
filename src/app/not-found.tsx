import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-head">
      <div className="container">
        <p className="kicker">Page not found</p>
        <h1>We couldn&apos;t find that page.</h1>
        <p className="lead">The link may be old or mistyped.</p>
        <p className="page-head__actions">
          <Link href="/" className="btn btn--primary btn--lg">Go to the home page</Link>
        </p>
      </div>
    </section>
  );
}
