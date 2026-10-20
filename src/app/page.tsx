"use client";

import { useReveal } from "@/hooks/use-reveal";
import { Header } from "@/components/ns/header";
import { Hero } from "@/components/ns/hero";
import { Ticker } from "@/components/ns/ticker";
import { WhatWeDo } from "@/components/ns/what-we-do";
import { Process } from "@/components/ns/process";
import { WhyUs } from "@/components/ns/why-us";
import { Products } from "@/components/ns/products";
import { Policies } from "@/components/ns/policies";
import { Faq } from "@/components/ns/faq";
import { QuoteForm } from "@/components/ns/quote-form";
import { Footer } from "@/components/ns/footer";
import { WhatsAppFloat } from "@/components/ns/whatsapp-float";

export default function Home() {
  useReveal();

  return (
    <div
      className="ns-root"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      <main style={{ flex: "1 0 auto" }}>
        <Hero />
        <Ticker />
        <WhatWeDo />
        <Process />
        <WhyUs />
        <Products />
        <Policies />
        <Faq />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
