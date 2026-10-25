import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <p className="eyebrow">404</p>
        <h1>This page wandered off.</h1>
        <p className="lead">The link may be old or mistyped.</p>
        <div className="hero__ctas">
          <Link href="/" className="btn btn--primary btn--lg">Back to home</Link>
          <Link href="/product/" className="btn btn--ghost btn--lg">Explore the product</Link>
        </div>
      </div>
    </section>
  );
}
