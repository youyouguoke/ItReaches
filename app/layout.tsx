import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@/components/analytics/Analytics";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const label = localFont({
  src: [
    {
      path: "../public/fonts/GeistMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-label",
});

export const metadata: Metadata = {
  title: {
    default: "It Reaches Guide | Complete Horror Game Documentation",
    template: "%s | It Reaches Guide",
  },
  description:
    "Complete walkthrough, puzzle solutions, endings, monster guide, and lore analysis for It Reaches.",
  metadataBase: new URL("https://itreachesguide.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "It Reaches Guide",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-mode="dark">
      <head>
        <Analytics />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${label.variable} font-body text-body-md antialiased bg-background text-foreground`}
      >
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
