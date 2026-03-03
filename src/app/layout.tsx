import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://houstonians-west-page.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Houstonians FC West | Youth Soccer Club in Houston",
    template: "%s | Houstonians FC West",
  },
  description:
    "Houstonians FC West is a competitive youth soccer club in West Houston dedicated to developing champions on and off the field. Programs for ages 5–18.",
  keywords: [
    "Houstonians FC West",
    "youth soccer",
    "Houston soccer club",
    "West Houston soccer",
    "kids soccer",
    "soccer academy",
    "youth football",
    "competitive soccer",
    "Houston TX",
  ],
  authors: [{ name: "Houstonians FC West" }],
  metadataBase: new URL(siteUrl),

  // Open Graph (Facebook, LinkedIn, WhatsApp, iMessage, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Houstonians FC West",
    title: "Houstonians FC West | Youth Soccer Club in Houston",
    description:
      "Developing champions on and off the field. Competitive youth soccer programs for ages 5–18 in West Houston.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Houstonians FC West youth soccer team",
        type: "image/png",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Houstonians FC West | Youth Soccer Club in Houston",
    description:
      "Developing champions on and off the field. Competitive youth soccer programs for ages 5–18 in West Houston.",
    images: ["/og-image.png"],
  },

  // Favicon & icons
  icons: {
    icon: "/logo-team.png",
    apple: "/logo-team.png",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
