/** Simple heading block for inner pages. */
export function PageHead({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <section className="page-head">
      <div className="container">
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
      </div>
    </section>
  );
}
