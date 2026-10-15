"use client";

import { useReveal } from "@/hooks/use-reveal";
import { Header } from "@/components/ns/header";
import { Hero } from "@/components/ns/hero";
import { Ticker } from "@/components/ns/ticker";
import { ShopByGenus } from "@/components/ns/shop-by-genus";
import { HotProducts } from "@/components/ns/hot-products";
import { WhyBuy } from "@/components/ns/why-buy";
import { Process } from "@/components/ns/process";
import { Quality } from "@/components/ns/quality";
import { BuyerTypes } from "@/components/ns/buyer-types";
import { Testimonials } from "@/components/ns/testimonials";
import { Faq } from "@/components/ns/faq";
import { QuoteForm } from "@/components/ns/quote-form";
import { Footer } from "@/components/ns/footer";
import { WhatsAppFloat } from "@/components/ns/whatsapp-float";

export default function Home() {
  useReveal();

  return (
    <div className="ns-root" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: "1 0 auto" }}>
        <Hero />
        <Ticker />
        <ShopByGenus />
        <HotProducts />
        <WhyBuy />
        <Process />
        <Quality />
        <BuyerTypes />
        <Testimonials />
        <Faq />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
