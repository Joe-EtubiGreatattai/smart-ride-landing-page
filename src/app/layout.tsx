import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Absolute base for og:image and canonical URLs.
 *
 * WhatsApp, and every other unfurler, fetches the preview image over the
 * network — a relative path resolves to nothing on their side. Read from the
 * environment rather than hardcoded so preview deployments unfurl as
 * themselves; set NEXT_PUBLIC_SITE_URL to pin the production domain.
 */
function siteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return new URL(explicit);

  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return new URL(`https://${vercel}`);

  return new URL("http://localhost:3000");
}

const title = "Smart Ride | Book Zaria rides without WhatsApp";
const description =
  "Request Smart Ride pickup, delivery, school runs, airport trips, and special rides in the app instead of booking through WhatsApp.";

export const metadata: Metadata = {
  metadataBase: siteUrl(),
  title,
  description,
  // opengraph-image.png and twitter-image.png next to this file supply the
  // images; Next emits the tags and resolves them against metadataBase.
  openGraph: {
    type: "website",
    siteName: "Smart Ride",
    title,
    description,
    locale: "en_NG",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
