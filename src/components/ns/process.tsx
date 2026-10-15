"use client";

import { Shield } from "lucide-react";

const STEPS = [
  {
    n: "1",
    title: "Browse & shortlist",
    body: "Explore the catalog or request the full price list with current availability.",
  },
  {
    n: "2",
    title: "Send your list",
    body: "Submit target varieties, quantities, and your destination state.",
  },
  {
    n: "3",
    title: "Quote in 48 hours",
    body: "Receive quotation, availability, MOQ, and lead time — in writing.",
  },
  {
    n: "4",
    title: "Confirm the order",
    body: "Lock varieties and production slots with clear payment terms.",
  },
  {
    n: "5",
    title: "Inspect & pack",
    body: "Plants are QC-inspected, packed, and prepared with export documentation.",
  },
  {
    n: "6",
    title: "Fly & clear customs",
    body: "Air freight is arranged with tracking, plus customs and import guidance.",
  },
];

export function Process() {
  return (
    <section className="ns-sec" id="process">
      <div className="ns-wrap">
        <div className="ns-sec-head ns-reveal">
          <div>
            <span className="ns-eyebrow">Import Process</span>
            <h2 className="ns-h2">
              From our greenhouse to your shelf, in six steps
            </h2>
          </div>
        </div>

        <div className="ns-route ns-reveal" aria-label="Six-step import process">
          <span className="ns-route-line" aria-hidden="true" />
          {STEPS.map((s) => (
            <article key={s.n} className="ns-step">
              <div className="ns-step-node">{s.n}</div>
              <div className="s-body">
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="ns-compliance ns-reveal">
          <Shield size={22} className="ic" />
          <div>
            <strong>Compliance note</strong>
            <p>
              &ldquo;We provide phytosanitary certificates, packing lists,
              invoices, and supporting export documents. Buyers are responsible
              for confirming current USDA/APHIS and state-level import
              requirements before ordering.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
