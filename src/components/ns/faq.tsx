"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "Are you a factory?",
    a: "We are a sourcing company working directly with a network of vetted manufacturers. For you this means better price negotiation, independent quality checks on every order, and one partner who is accountable end-to-end — something buying direct cannot offer.",
  },
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "MOQ depends on the product and the manufacturer. For common items like nursery pots or grow lights, MOQ can be as low as a few cartons. For custom-molded or branded items, MOQ is higher. We send you the MOQ in writing in your quotation, so you can decide before committing.",
  },
  {
    q: "How long is the lead time?",
    a: "For in-stock products, lead time is typically 7–15 days from deposit to ready-to-ship. For made-to-order or custom-branded items, expect 20–45 days depending on complexity. Air freight adds 3–7 days, sea freight 15–35 days depending on your destination port. We give you a written lead time in the quotation.",
  },
  {
    q: "Do I need to pay a sample fee?",
    a: "Sometimes. Samples from existing stock are usually free — you pay shipping only. Custom samples or samples pulled from a new production run may carry a sample fee, which is refunded against your bulk order if you proceed. We tell you upfront, no surprises.",
  },
  {
    q: "What are your payment terms?",
    a: "Standard terms are 30% deposit to start the order, 70% balance before shipment — released only after you approve the photo and video QC report. For established accounts and repeat orders we can discuss NET terms. We accept bank transfer (T/T), Wise, and on larger orders we can arrange L/C.",
  },
  {
    q: "Can you ship FOB, CIF, or DDP?",
    a: "Yes — all three. FOB (you take over once goods are loaded at the China port) is the cheapest and most transparent. CIF (we insure and ship to your destination port) is simpler if you don't have a freight forwarder. DDP (we deliver to your door, duties paid) is the most hands-off. Tell us your preference and we'll quote accordingly.",
  },
  {
    q: "What is your refund policy if goods are not as described?",
    a: "If the goods you receive differ from what we quoted and you approved in the QC report — wrong material, wrong dimensions, defects beyond the agreed tolerance — we chase the claim with the manufacturer on your behalf. Refunds, replacements, or credit are arranged with us, not by you fighting a factory that ignores your messages. This is what we mean by accountable end-to-end.",
  },
  {
    q: "Can I visit the factories you source from?",
    a: "Yes, with notice. We can arrange a guided visit to vetted manufacturers we work with — captioned as our partner factory in [province], China. Video-call inspections and live QC walkthroughs are also available if you can't fly out. We never misrepresent someone else's facility as our own.",
  },
];

const WA_LINK =
  "https://wa.me/84981848702?text=Hi%20Nursery%20Supply!%20I'd%20like%20a%20quote%20for%20nursery%20%26%20garden%20products.%20Quantity%3A%20___";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="ns-sec" id="faq">
      <div className="ns-wrap ns-faq-grid">
        <div className="ns-faq-left ns-reveal">
          <span className="ns-eyebrow">FAQ</span>
          <h2 className="ns-h2" style={{ marginTop: 14 }}>
            Straight answers before you send a deposit
          </h2>
          <p className="ns-lead">
            The questions first-time buyers ask us most. Something missing?
            Ask us directly on WhatsApp — we reply within 24 hours.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="ns-btn ns-btn-outline"
          >
            <MessageCircle size={16} /> Ask us directly <ArrowRight size={16} />
          </a>
        </div>

        <div className="ns-reveal">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                className="ns-faq-item"
                key={i}
                data-open={isOpen ? "true" : "false"}
              >
                <button
                  className="ns-faq-q"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <ChevronDown size={20} className="chev" />
                </button>
                <div className="ns-faq-a">
                  <div className="ns-faq-a-in">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
