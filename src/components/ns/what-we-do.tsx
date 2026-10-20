"use client";

import { Search, ShieldCheck, Boxes, LifeBuoy } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Card = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const CARDS: Card[] = [
  {
    icon: Search,
    title: "Sourcing & Price Negotiation",
    body:
      "We speak the local language and negotiate unit price by volume directly with vetted manufacturers — so you pay the real factory-floor price, not a trading-company markup.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection",
    body:
      "Every order is inspected before it goes into the carton. We send you photos and short videos of the actual lot, so you approve what ships — not a showroom sample.",
  },
  {
    icon: Boxes,
    title: "Consolidation & Logistics",
    body:
      "Combine products from multiple factories into one shipment. We handle export paperwork, packing lists, and booking — with FOB, CIF, or DDP terms that fit your situation.",
  },
  {
    icon: LifeBuoy,
    title: "After-Sales Accountability",
    body:
      "One point of contact who stays accountable if something goes wrong. Claims, shortages, defects — we chase them, not you. That's the part you don't get buying direct.",
  },
];

export function WhatWeDo() {
  return (
    <section className="ns-sec" id="what">
      <div className="ns-wrap">
        <div className="ns-sec-head ns-reveal">
          <div>
            <span className="ns-eyebrow">What We Do</span>
            <h2 className="ns-h2">A sourcing partner, not just a supplier</h2>
            <p className="ns-lead">
              We sit between you and the factory — finding the right
              manufacturer, inspecting the goods, and shipping them to your
              door — so you don't have to.
            </p>
          </div>
        </div>

        <div className="ns-what-grid ns-reveal">
          {CARDS.map((c) => {
            const Icon = c.icon;
            return (
              <article key={c.title} className="ns-what-card">
                <span className="ns-what-ic" aria-hidden="true">
                  <Icon size={22} strokeWidth={2} />
                </span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
