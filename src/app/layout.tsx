import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { getCanonicalSiteUrl } from "@/lib/utils";
import "./globals.css";

// Only the sans family is loaded. Geist Mono was being downloaded on every page
// without a single class using it.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getCanonicalSiteUrl();
const defaultTitle = "Best IT Company in Nepal | Infobytes Nepal";
const defaultDescription =
  "Looking for the best IT company in Nepal? We build fast websites, custom software, and business automation for companies across Nepal. Get a free consultation today.";
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
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-dark-text">{children}</body>
    </html>
  );
}
