/**
 * "Trusted by" — companies that run on Northstar People.
 *
 * NOTE FOR THE OWNER:
 * - These render as plain text wordmarks on purpose. Add a client's logo ONLY with that
 *   client's written permission, and use the artwork they supply (do not recreate logos).
 * - Do not add testimonials, quotes, named people, headcounts or metrics unless the client
 *   has approved the exact wording in writing.
 */
export type Client = {
  name: string;
  /** Neutral one-line category. */
  category: string;
  /** Optional: path under /public to an approved logo file, e.g. "/logos/acme.svg". */
  logo?: string;
};

export const clients: Client[] = [
  { name: "Blue Tokai Coffee Roasters", category: "Specialty coffee" },
  { name: "Got Tea", category: "Tea" },
  { name: "Suchali's", category: "Bakery & café" },
  { name: "Programmingglore", category: "Technology" },
];
