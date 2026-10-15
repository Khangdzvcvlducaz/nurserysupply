import type { Metadata } from "next";
import { Fraunces, Archivo } from "next/font/google";
import "./globals.css";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Nursery Supply — Wholesale Tissue-Culture Plants for U.S. Retailers & Growers",
  description:
    "Wholesale supplier of rare tissue-culture plants to the USA: variegated Monstera, Philodendron, Alocasia, Anthurium and rare aroids. Phytosanitary certification, secure live-plant export packaging, MOQ from 20 plants. Request the wholesale price list.",
  keywords: [
    "tissue culture plants",
    "wholesale plants",
    "Monstera",
    "Philodendron",
    "Alocasia",
    "Anthurium",
    "rare aroids",
    "U.S. plant importer",
    "phytosanitary certificate",
  ],
  authors: [{ name: "Nursery Supply" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Nursery Supply — Rare Tissue-Culture Plants for U.S. Retailers",
    description:
      "Wholesale Monstera, Philodendron, Alocasia, Anthurium and rare foliage plants — with export documentation and secure packaging.",
    siteName: "Nursery Supply",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nursery Supply — Wholesale Tissue-Culture Plants",
    description:
      "Rare tissue-culture plants for U.S. retailers, sellers, and distributors.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${archivo.variable} antialiased bg-cream text-ink`}
      >
        {children}
        <SonnerToaster position="bottom-right" />
      </body>
    </html>
  );
}
