import type { Metadata } from "next";
import { Chakra_Petch, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://riptier.gg"),
  title: {
    default: "RipTier — 2026 rip-site rankings",
    template: "%s — RipTier",
  },
  description:
    "Independent rankings of the biggest digital trading-card pack-opening sites, scored across eight collector criteria and re-checked weekly.",
  openGraph: {
    title: "RipTier — 2026 rip-site rankings",
    description:
      "Independent rankings of the biggest digital trading-card pack-opening sites, scored across eight collector criteria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
