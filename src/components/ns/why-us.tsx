"use client";

import { Check, X } from "lucide-react";

type Row = { left: string; right: string };

const ROWS: Row[] = [
  {
    left: "Find and vet a factory yourself — takes weeks",
    right: "Pre-vetted manufacturers, written quote in 24–48 hours",
  },
  {
    left: "Language barrier, timezone gap, no one accountable",
    right: "One English-speaking point of contact on your timezone",
  },
  {
    left: "Claims met with silence — defects, shortages, your problem",
    right:
      "We handle claims end-to-end, with a refund-if-not-as-described policy",
  },
  {
    left:
      "No inspection before packing — you see the goods only when they arrive",
    right:
      "Photo + video QC report on every lot, sent before you pay the balance",
  },
  {
    left: "One product, one factory, one shipment",
    right: "Consolidate products from multiple factories into one shipment",
  },
];

export function WhyUs() {
  return (
    <section className="ns-sec ns-why-us" id="why">
      <div className="ns-wrap">
        <div className="ns-sec-head ns-reveal">
          <div>
            <span className="ns-eyebrow">Why Us</span>
            <h2 className="ns-h2">Buying direct vs. working with us</h2>
            <p className="ns-lead">
              Buying direct from a random factory can look cheaper on paper.
              Here's what that actually costs you — and what changes when we
              sit in the middle.
            </p>
          </div>
        </div>

        <div className="ns-cmp ns-reveal" role="table" aria-label="Comparison: buying direct from a random factory vs. working with us">
          <div className="ns-cmp-row">
            <div className="ns-cmp-head left">
              Buying Direct from a Random Factory
              <span className="pill">The risk</span>
            </div>
            <div className="ns-cmp-head right">
              Working With Us
              <span className="pill">The fix</span>
            </div>
          </div>
          {ROWS.map((r, i) => (
            <div className="ns-cmp-row" key={i}>
              <div className="ns-cmp-cell left">
                <X size={18} className="ns-cmp-ic" strokeWidth={2.5} />
                <span>{r.left}</span>
              </div>
              <div className="ns-cmp-cell right">
                <Check size={18} className="ns-cmp-ic" strokeWidth={2.5} />
                <span>{r.right}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
