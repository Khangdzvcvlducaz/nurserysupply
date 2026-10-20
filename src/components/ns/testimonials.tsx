"use client";

import { Star } from "lucide-react";

type Tst = {
  quote: string;
  name: string;
  location: string;
  initials: string;
};

// Demo testimonials — NOT real customer feedback yet.
// Replaced from the original reference design (Task 1 worklog).
// User must swap these with real customer feedback after first orders.
const TSTS: Tst[] = [
  {
    quote:
      "The Thai Constellation plantlets arrived in pristine condition — root systems intact, variegation consistent across the whole lot. Easiest wholesale import I've done.",
    name: "Dana R.",
    location: "Portland, OR",
    initials: "DR",
  },
  {
    quote:
      "Quoted same-day, photo QC before balance, and the plants were exactly what was photographed. We've already placed a second order.",
    name: "Marcus T.",
    location: "Austin, TX",
    initials: "MT",
  },
  {
    quote:
      "Finally a tissue-culture supplier who actually documents variegation lineage. The Pink Princess is the real deal — no reversion so far.",
    name: "Elena V.",
    location: "Columbus, OH",
    initials: "EV",
  },
  {
    quote:
      "Mixed-variety order, no problem. They grouped Monstera, Philodendron and Alocasia in one shipment with full paperwork. Saved us a fortune on freight.",
    name: "Priya S.",
    location: "Los Angeles, CA",
    initials: "PS",
  },
  {
    quote:
      "Phytosanitary cert, packing list, airway bill — all correct on the first try. Customs cleared in 90 minutes. I'd never had that happen before.",
    name: "Tom W.",
    location: "Miami, FL",
    initials: "TW",
  },
  {
    quote:
      "We're a small shop and ordered a modest lot. Treated like a real account — answers on WhatsApp within hours, heat packs added for the cold snap.",
    name: "Jess & Omar L.",
    location: "Chicago, IL",
    initials: "JL",
  },
];

export function Testimonials() {
  return (
    <section className="ns-sec ns-section-soft" id="testimonials">
      <div className="ns-wrap">
        <div className="ns-section-head ns-reveal">
          <span className="ns-eyebrow">Reviews</span>
          <h2 className="ns-h2">What our clients say</h2>
          <p className="ns-lead" style={{ margin: "14px auto 0" }}>
            Honest feedback from buyers who have imported from us.
          </p>
        </div>
        <div className="ns-tst-grid ns-reveal">
          {TSTS.map((t) => (
            <article className="ns-tst-card" key={t.name}>
              <span className="ns-tst-demo">Demo — replace with real feedback</span>
              <div className="ns-tst-stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="ns-tst-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="ns-tst-author">
                <span className="ns-tst-avatar" aria-hidden="true">
                  {t.initials}
                </span>
                <span className="ns-tst-author-info">
                  <span className="ns-tst-name">{t.name}</span>
                  <span className="ns-tst-loc">{t.location}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="ns-tst-note">
          Testimonials shown are representative — replace with your real
          customer feedback after your first orders ship.
        </p>
      </div>
    </section>
  );
}
