"use client";

import { useReveal } from "@/hooks/use-reveal";
import { Header } from "@/components/ns/header";
import { Hero } from "@/components/ns/hero";
import { Features } from "@/components/ns/features";
import { Solutions } from "@/components/ns/solutions";
import { Categories } from "@/components/ns/categories";
import { About } from "@/components/ns/about";
import { HotProducts } from "@/components/ns/hot-products";
import { NewArrivals } from "@/components/ns/new-arrivals";
import { Testimonials } from "@/components/ns/testimonials";
import { TrustedCta } from "@/components/ns/trusted-cta";
import { Subscribe } from "@/components/ns/subscribe";
import { OrderingProcess } from "@/components/ns/ordering-process";
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
        <Features />
        <Solutions />
        <Categories />
        <About />
        <HotProducts />
        <NewArrivals />
        <Testimonials />
        <TrustedCta />
        <Subscribe />
        <OrderingProcess />
        <Faq />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
