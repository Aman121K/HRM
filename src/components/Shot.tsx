/** A real product screenshot in a plain browser frame. */
export function Shot({ src, alt, url = "yourcompany.northstar.app", priority = false }: { src: string; alt: string; url?: string; priority?: boolean }) {
  return (
    <figure className="shot">
      <div className="shot__bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <em>{url}</em>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={1600} height={1000} loading={priority ? "eager" : "lazy"} decoding="async" />
    </figure>
  );
}

/** A real mobile screenshot in a simple phone frame. */
export function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={`phone ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} width={620} height={1342} loading="lazy" decoding="async" />
    </figure>
  );
}
