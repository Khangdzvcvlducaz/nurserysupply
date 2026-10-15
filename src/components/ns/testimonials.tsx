"use client";

import { useRef } from "react";
import { ArrowRight, ArrowLeft, Quote } from "lucide-react";

type T = {
  quote: string;
  name: string;
  role: string;
  loc: string;
};

const ITEMS: T[] = [
  {
    quote:
      "First order of Thai Constellation and White Wizard arrived in nine days — zero losses, and every plantlet true to the listing photos. The phytosanitary paperwork cleared customs without a single question.",
    name: "Dana R.",
    role: "Owner, Fern & Frond Plant Co.",
    loc: "Portland, OR",
  },
  {
    quote:
      "Variegation accuracy is what keeps me reordering. With Nursery Supply I don't gamble — I get forty-five stable albo plants, not a lottery ticket.",
    name: "Marcus T.",
    role: "Founder, TerraNova Plants (online)",
    loc: "Austin, TX",
  },
  {
    quote:
      "They walked our customs broker through every document. And the packing — moisture film, insulated liners, winter heat packs — is the best we've seen from any overseas supplier.",
    name: "Elena V.",
    role: "Buying Manager, Evergreen Garden Centers",
    loc: "Columbus, OH",
  },
  {
    quote:
      "Communication is fast and specific: photos of the actual plants before dispatch, tracking within hours of the flight, and honest answers about what's really in stock.",
    name: "Priya S.",
    role: "Founder, LeafHouse Studio",
    loc: "Los Angeles, CA",
  },
  {
    quote:
      "We plan quarterly restocks around their production calendar. Lead times quoted are lead times kept — which is rarer in this industry than any plant we buy.",
    name: "Tom W.",
    role: "Distributor, GreenAisle Distribution",
    loc: "Miami, FL",
  },
  {
    quote:
      "Our collector customers notice the difference immediately — plantlets sized accurately, labeled correctly, and acclimating within a week of arrival.",
    name: "Jess & Omar L.",
    role: "Owners, Rare Plant Room",
    loc: "Chicago, IL",
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.querySelector<HTMLElement>(".ns-t-card")
      ?.offsetWidth ?? 360;
    track.scrollBy({ left: dir * (cardWidth + 22), behavior: "smooth" });
  };

  return (
    <section className="ns-sec-tight" id="stories">
      <div className="ns-wrap">
        <div className="ns-t-head ns-reveal">
          <div>
            <span className="ns-eyebrow">Buyer Stories</span>
            <h2 className="ns-h2" style={{ marginTop: 14 }}>
              What U.S. buyers say after the box opens
            </h2>
          </div>
          <div className="ns-t-arrows">
            <button
              className="ns-icon-btn"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous testimonials"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              className="ns-icon-btn"
              onClick={() => scrollByCard(1)}
              aria-label="Next testimonials"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="ns-t-track ns-reveal" ref={trackRef}>
          {ITEMS.map((t) => (
            <article className="ns-t-card" key={t.name}>
              <Quote size={28} className="ic-quote" />
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="ns-t-who">
                <div>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
                <span className="loc">{t.loc}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
