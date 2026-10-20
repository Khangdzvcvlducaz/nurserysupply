"use client";

import { Search, Send, FileText } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: Search,
    title: "Browse & Select Products",
    desc: "Explore our tissue-culture catalog, pick your varieties and quantities, and reach out via WhatsApp for current pricing.",
  },
  {
    num: "02",
    icon: Send,
    title: "Submit Your Order Inquiry",
    desc: "Send your list, destination port, and target delivery window. We confirm availability, MOQ, and a written quote within 24 hours.",
  },
  {
    num: "03",
    icon: FileText,
    title: "Confirm Details & Quotation",
    desc: "Approve the quotation, arrange deposit, and we handle phytosanitary certification, packing and air-freight booking end-to-end.",
  },
];

export function OrderingProcess() {
  return (
    <section className="ns-sec ns-section-soft" id="order">
      <div className="ns-wrap">
        <div className="ns-section-head ns-reveal">
          <span className="ns-eyebrow">How To Order</span>
          <h2 className="ns-h2">Ordering process</h2>
          <p className="ns-lead" style={{ margin: "14px auto 0" }}>
            Three steps from inquiry to airway bill — straightforward,
            documented, accountable.
          </p>
        </div>
        <div className="ns-order-grid ns-reveal">
          {STEPS.map((s) => (
            <div className="ns-order-step" key={s.num}>
              <span className="ns-order-num" aria-hidden="true">
                <s.icon size={26} strokeWidth={2} />
              </span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
