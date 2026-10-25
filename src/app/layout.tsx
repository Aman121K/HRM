import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/content/site";
import "./globals.css";

// Same typeface as the Northstar People app, so the website and the product feel like one brand.
const manrope = Manrope({ subsets: ["latin"], variable: "--font", display: "swap", weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — HR, attendance and payroll for Indian businesses`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, title: site.name, description: site.description, images: ["/screens/home.webp"] },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#fffefa" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={manrope.variable}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
