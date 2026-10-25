# Northstar People — marketing website

The public marketing site for Northstar People. It is a Next.js (App Router, React 19) app built as a
**static export**, so `npm run build` turns it into plain HTML, CSS and JS in `out/`. Any static host
can serve it (S3 + CloudFront, Netlify, Vercel, Cloudflare Pages, nginx).

It does not depend on the HRM app in the parent folder and shares no code with it.

## Pages

| Route        | File                            |
| ------------ | ------------------------------- |
| `/`          | `src/app/page.tsx`              |
| `/product/`  | `src/app/product/page.tsx`      |
| `/security/` | `src/app/security/page.tsx`     |
| `/clients/`  | `src/app/clients/page.tsx`      |
| `/pricing/`  | `src/app/pricing/page.tsx`      |
| `/contact/`  | `src/app/contact/page.tsx`      |

`sitemap.xml`, `robots.txt`, the favicon (`src/app/icon.svg`) and a 404 page are generated too.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev          # http://localhost:3000 with hot reload
```

## Build

```bash
npm run build        # writes the static site to ./out
npx tsc --noEmit     # type-check (also: npm run typecheck)
npm start            # serves ./out locally with `serve` (downloads it on first run)
```

`next start` does not work with `output: "export"`; serve the `out/` folder instead.

## Deploy

Upload the contents of `out/` to any static host.

- **S3 + CloudFront:** `aws s3 sync out/ s3://<bucket> --delete`. Set the CloudFront default root
  object to `index.html`, and point the 403/404 error response at `/404.html`. Pages are exported as
  `/product/index.html` and so on (`trailingSlash: true`), so add a CloudFront Function that appends
  `index.html` to paths ending in `/` if the bucket is private behind OAC.
- **Netlify:** build command `npm run build`, publish directory `out`.
- **Vercel:** import the `website` folder as its own project. Vercel detects Next.js and serves the export.

## Editing content

All copy that changes over time lives in `src/content/`, so you don't need to touch layout code:

| File                     | What it holds                                                          |
| ------------------------ | ---------------------------------------------------------------------- |
| `src/content/site.ts`    | Name, tagline, public URL, **sales email**, **Sign in URL**, nav links |
| `src/content/modules.ts` | Product modules: name, icon, tagline, summary, feature list            |
| `src/content/clients.ts` | "Trusted by" companies (text wordmarks, optional approved logos)       |
| `src/content/faq.ts`     | FAQ (home and pricing pages)                                           |
| `src/content/security.ts`| Security controls, Compliance Center items, DPDP tools                 |
| `src/content/pricing.ts` | Plan cards and "what shapes your quote" list                           |

Styling is in one plain CSS file, `src/app/globals.css`. Colour tokens are at the top (`:root`), with
a dark-mode override under `prefers-color-scheme: dark`. Fonts (Bricolage Grotesque + Inter) load
through `next/font` and are self-hosted at build time. Illustrations are HTML/CSS/SVG in
`src/components/Illustrations.tsx`. There are no stock images and nothing is hotlinked.

### Content rules

- **No certification claims.** The product is "ISO 27001 & SOC 2 ready" and "helps you prepare for
  audits". It is not certified. Don't add certification badges.
- **No made-up numbers.** No customer counts, ratings or metrics unless they are real and you can back them up.
- **Client logos and quotes need permission.** Add a logo file under `public/logos/` and set `logo` in
  `clients.ts` only with the client's written approval. The same applies to any testimonial.

## Contact / "Book a demo" form

The form in `src/components/ContactForm.tsx` **does not send data anywhere**. On submit it builds a
`mailto:` link to `site.salesEmail` and opens the visitor's own email app with a pre-filled message.

TODO for the owner:

1. Set `salesEmail` in `src/content/site.ts` to a real, monitored inbox. It is currently the placeholder
   `sales@northstarpeople.example`.
2. Optional: to capture leads directly, replace `handleSubmit` with a POST to your CRM or form backend
   and update the note under the form. Also add a privacy notice, because the site will then collect
   personal data.

## Other placeholders to replace

- `site.url`: the public website URL, used for canonical links and the sitemap.
- `site.signInUrl`: the HRM app sign-in URL. Currently `https://app.example.com/login`.
