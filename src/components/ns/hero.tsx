"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { FACILITY_IMAGES, waGenericQuote } from "@/lib/catalog-data";

const WA_LINK = waGenericQuote();

const HERO_STATS = [
  { num: "140+", label: "Varieties in production" },
  { num: "38", label: "U.S. states served" },
  { num: "9+", label: "Years in propagation & export" },
];

export function Hero() {
  return (
    <section className="ns-hero" id="top">
      <div className="ns-hero-bg" aria-hidden="true">
        <img
          src={FACILITY_IMAGES.heroBg}
          alt="Greenhouse with tissue culture plants"
          width={1600}
          height={900}
          loading="eager"
        />
      </div>
      <div className="ns-wrap ns-hero-inner ns-reveal">
        <span className="ns-hero-eyebrow">
          Wholesale Tissue Culture Plants
        </span>
        <h1>
          Focus Professionally on Tissue Culture of{" "}
          <em>Foliage Plants</em>
        </h1>
        <p className="ns-hero-sub">
          Stable Supply <span className="sep">·</span> Stable Quality
          <span className="sep">·</span> Large Sales
          <span className="sep">·</span> Rich Varieties
        </p>

        <div className="ns-hero-ctas">
          <a
            href="#about"
            className="ns-btn ns-btn-readmore ns-btn-lg"
            aria-label="Read more about Nursery Supply"
          >
            READ MORE <ArrowRight size={16} />
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="ns-btn ns-btn-wa ns-btn-lg"
          >
            <MessageCircle size={16} /> Get A Quote
          </a>
        </div>

        <div className="ns-hero-stats">
          {HERO_STATS.map((s) => (
            <div className="ns-hero-stat" key={s.label}>
              <strong>{s.num}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
