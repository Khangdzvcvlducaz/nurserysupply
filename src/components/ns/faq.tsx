"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "Do you ship directly to the United States?",
    a: "Yes. We ship weekly via air freight to major U.S. plant inspection airports — including Miami, New York, and Los Angeles — and coordinate onward delivery to all 50 states. Most customers receive plants 7–14 days from dispatch confirmation.",
  },
  {
    q: "What documents are included with each shipment?",
    a: "Every shipment includes a phytosanitary certificate issued by the national plant protection organization of origin, a commercial invoice, a packing list, and the airway bill. Certificates of origin and fumigation records can be prepared when your state or broker requires them.",
  },
  {
    q: "Do I need an import permit?",
    a: "It depends on the genera you're importing and your destination state. Many ornamental aroids are broadly admissible, but plants for planting generally require USDA/APHIS authorization, and states like Florida, California, and Arizona add their own rules. We flag anything unusual at the quotation stage — but the buyer is responsible for confirming current federal and state requirements.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "MOQ is typically 20–50 plantlets per variety depending on the crop, with a 100-plantlet minimum per shipment. Varieties can be mixed within one box, so a single order can combine 6–10 different lines.",
  },
  {
    q: "What are your payment terms?",
    a: "Standard terms are 50% deposit to reserve stock or production slots, with the balance due before dispatch. We accept bank transfer (T/T) and Wise. Established accounts can set up recurring-order schedules after a positive order history.",
  },
  {
    q: "How long does production and shipping take?",
    a: "In-stock varieties are prepared and dispatched within 5–7 business days of payment. Pre-order and lab-produced lots typically take 4–8 weeks depending on batch timing. Air transit adds 3–7 days, plus customs clearance at the port of entry.",
  },
  {
    q: "How are plants packaged for international shipping?",
    a: "Roots travel in sterile, moisture-controlled media sealed with barrier film; plantlets are cushioned in insulated, ventilated export boxes. Winter shipments include approved heat packs, and every box is labeled with variety, lot number, and quantity.",
  },
  {
    q: "Can I order mixed varieties in one shipment?",
    a: "Yes — mixed orders are our standard. Combine varieties across genera as long as each meets its MOQ. If availability shifts before dispatch, our team will suggest close substitutes for your approval before anything changes.",
  },
  {
    q: "Do you offer pre-orders for rare plants?",
    a: "Yes. Pre-orders reserve plantlets from upcoming lab batches with a deposit. You'll receive photos of the actual lot before dispatch, and pre-order customers get first allocation on limited new arrivals.",
  },
  {
    q: "What happens if plants arrive damaged?",
    a: "Document the condition with photos within 48 hours of arrival. Our live-arrival guarantee covers plantlets that fail due to packaging or carrier delays — we replace the affected plants or issue credit toward your next order.",
  },
  {
    q: "Can you support private-label or custom packaging?",
    a: "Yes, on qualifying volumes. We can print branded care cards, sleeves, and labels with your logo, and pack in retail-ready counts so plants move from box to bench to shelf faster.",
  },
  {
    q: "Do you sell to individual collectors or only wholesale buyers?",
    a: "We're a wholesale-first operation. Collectors running a resale business — online shops, market stalls, local sales — are welcome to apply under our collector-reseller category. We don't sell single plants for personal collections.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="ns-sec" id="faq">
      <div className="ns-wrap ns-faq-grid">
        <div className="ns-faq-left ns-reveal">
          <span className="ns-eyebrow">FAQ</span>
          <h2 className="ns-h2" style={{ marginTop: 14 }}>
            Answers before you wire a deposit
          </h2>
          <p className="ns-lead">
            Everything first-time importers ask us. Something missing? Our desk
            replies within one business day.
          </p>
          <a href="#contact" className="ns-btn ns-btn-outline">
            Ask us directly <ArrowRight size={16} />
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
