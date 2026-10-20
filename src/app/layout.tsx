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
    "Nursery Supply — Sourcing & Supply Partner for Nursery & Garden Products",
  description:
    "Sourcing & supply partner sourcing nursery & garden products (pots, planters, grow lights, tools, irrigation, potting media, supports, propagation trays, labels & packaging) from vetted manufacturers in China. One point of contact, QC on every order, refund if not as described. Get a quote on WhatsApp.",
  keywords: [
    "nursery supply",
    "sourcing partner",
    "supply partner",
    "China sourcing",
    "nursery pots wholesale",
    "planters wholesale",
    "grow lights wholesale",
    "garden tools wholesale",
    "irrigation supplies wholesale",
    "potting media wholesale",
    "FOB CIF DDP",
    "QC inspection",
  ],
  authors: [{ name: "Nursery Supply" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Nursery Supply — Sourcing & Supply Partner",
    description:
      "Your sourcing partner for nursery & garden products. One contact, vetted factories, QC on every order.",
    siteName: "Nursery Supply",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nursery Supply — Sourcing & Supply Partner",
    description:
      "Sourcing & supply partner for nursery & garden products. Vetted manufacturers in China, QC on every order.",
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
