import type { Metadata } from "next";
import { Rubik, Jost } from "next/font/google";
import "./globals.css";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const rubik = Rubik({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nursery Supply — Wholesale Tissue Culture Plants & Rare Foliage",
  description:
    "Nursery Supply specializes in tissue culture of foliage plants — Monstera, Philodendron, Alocasia, Anthurium and rare variegated varieties. Stable supply, stable quality, rich varieties. Phytosanitary-certified export. Get a wholesale quote on WhatsApp.",
  keywords: [
    "tissue culture plants",
    "wholesale plants",
    "rare foliage",
    "variegated monstera",
    "philodendron",
    "alocasia",
    "anthurium crystallinum",
    "aglaonema pictum",
    "syngonium",
    "caladium",
    "nursery supply",
    "phytosanitary certified",
  ],
  authors: [{ name: "Nursery Supply" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Nursery Supply — Wholesale Tissue Culture Plants",
    description:
      "Wholesale tissue culture plants & rare foliage. Stable supply, stable quality, rich varieties. Get a quote on WhatsApp.",
    siteName: "Nursery Supply",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nursery Supply — Wholesale Tissue Culture Plants",
    description:
      "Wholesale tissue culture plants & rare foliage. Stable supply, stable quality, rich varieties.",
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
        className={`${rubik.variable} ${jost.variable} antialiased`}
      >
        {children}
        <SonnerToaster position="bottom-right" />
      </body>
    </html>
  );
}
