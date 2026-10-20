"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import { waGenericQuote } from "@/lib/catalog-data";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "Do you ship tissue-culture plants internationally?",
    a: "Yes. We export to 38 U.S. states plus the EU and Asia. Every shipment is packed in sterile culture vessels or insulated export cartons and ships with a phytosanitary certificate, commercial invoice, packing list, and airway bill — paperwork prepared correctly the first time, so customs clears fast.",
  },
  {
    q: "What is your MOQ (minimum order quantity)?",
    a: "MOQ varies by variety: typically 20–50 plantlets per variety, with a minimum of 100 plantlets per shipment. For high-volume retail genera (Caladium, Syngonium) MOQ is higher. We send you the exact MOQ in writing in your quote — no surprises.",
  },
  {
    q: "What documents come with each shipment?",
    a: "Phytosanitary certificate (issued by our local plant-protection authority), commercial invoice, packing list, and airway bill. We can also provide CITES documentation where applicable for certain genera. All documents are emailed as PDFs before the shipment leaves.",
  },
  {
    q: "How are plantlets packaged for export?",
    a: "Tissue-culture plantlets ship in sterile culture vessels with barrier film, or as ex-agar hardened plantlets in insulated export cartons. In winter we add heat packs to maintain safe transit temperature. Packaging is selected for the destination, season, and transit time.",
  },
  {
    q: "What happens if plants arrive damaged?",
    a: "Document any damage with photos within 48 hours of delivery and send them to us on WhatsApp or email. We review, replace, or credit against your next order — our live-arrival guarantee covers shipments that arrive non-viable when prepared and shipped per our protocol.",
  },
  {
    q: "Can I order mixed varieties?",
    a: "Yes — mixed-variety orders are standard. Consolidating multiple genera (Monstera, Philodendron, Alocasia, etc.) into one shipment is one of the easiest ways to save on per-variety MOQ and freight. Tell us what you want and we'll quote the consolidated lot.",
  },
  {
    q: "Do you offer pre-orders for rare plants?",
    a: "Yes. Rare or limited-batch varieties (Jacklyn, warocqueanum, Cream Brulee, etc.) are released on a pre-order basis. A deposit reserves your plantlets from an upcoming indexed batch, and we notify you when the lot is ready to harden and ship.",
  },
  {
    q: "Are you a factory?",
    a: "We work directly with a network of vetted tissue-culture labs and partner greenhouses across our region. For you this means stable variegation from indexed cultures, independent QC on every lot, and one partner accountable end-to-end — from initiation to the air-waybill. We never misrepresent someone else's facility as our own; we coordinate the labs and greenhouses so you don't have to.",
  },
];

const WA_LINK = waGenericQuote();

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="ns-sec ns-section-white" id="faq">
      <div className="ns-wrap ns-faq-grid">
        <div className="ns-faq-left ns-reveal">
          <span className="ns-eyebrow">FAQ</span>
          <h2 className="ns-h2" style={{ marginTop: 14 }}>
            Straight answers before you commit
          </h2>
          <p className="ns-lead">
            The questions wholesale buyers ask us most. Something missing? Ask
            us directly on WhatsApp — we reply within 24 hours.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="ns-btn ns-btn-outline"
            style={{ marginTop: 20 }}
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
