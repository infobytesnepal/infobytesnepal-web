import type { Metadata, Viewport } from "next";
import { Marcellus, Source_Sans_3 } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getCanonicalSiteUrl } from "@/lib/utils";
import "./globals.css";

/**
 * Body, UI, and everything that is not a heading.
 *
 * Source Sans 3 replaced Geist. Geist is the default face of a generation of
 * template and AI-generated sites, and set next to Marcellus it read as two
 * unrelated decisions. Source Sans is a humanist sans, so its proportions sit
 * with a classical display face, it holds up at the 14px most of this site's
 * body copy is set in, and it is one variable file, so the swap costs no extra
 * request.
 */
const sourceSans = Source_Sans_3({
  variable: "--font-sans-body",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Display face for headings.
 *
 * Marcellus ships exactly one weight (400) and no italic, so any heading that
 * keeps a `font-semibold` utility would be rendered with a synthesised bold:
 * thickened, smeared outlines, worst at the hero's 3.6rem. The `h1, h2, h3`
 * rule in `globals.css` pins the weight back to 400 for every heading at once
 * rather than editing the utility off ~200 of them.
 */
const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = getCanonicalSiteUrl();
// No "best". A self-declared superlative earns nothing in search and reads as
// puffery to a buyer; the title now says what we do instead. The query itself
// is still served, by the /best-it-company-in-nepal buying guide.
const defaultTitle = "IT Company in Nepal : Custom Software Development & Web Solutions | Infobytes Nepal";
const defaultDescription =
  "Infobytes Nepal is an IT company in Nepal building custom software, web solutions, and business automation. Get a free written scope and quote today.";
const defaultOgImage = "/assets/hero/infobytes-hero-fallback.webp";
const faviconPng = "/favicon.png";
const faviconIco = "/favicon.ico";
const appleIcon = "/apple-icon.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "Infobytes Nepal",
    images: [{ url: defaultOgImage, alt: "Infobytes Nepal" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage],
  },
  icons: {
    icon: [
      {
        url: faviconIco,
        sizes: "any",
      },
      {
        url: faviconPng,
        type: "image/png",
        sizes: "96x96",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    shortcut: faviconIco,
    apple: [
      {
        url: appleIcon,
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0342c5",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${marcellus.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-dark-text">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
