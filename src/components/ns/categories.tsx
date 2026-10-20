"use client";

import { Leaf, ArrowRight } from "lucide-react";
import { CATS, waAskPrice } from "@/lib/catalog-data";

export function Categories() {
  return (
    <section className="ns-sec ns-section-white" id="categories">
      <div className="ns-wrap">
        <div className="ns-section-head ns-reveal">
          <span className="ns-eyebrow">Featured Categories</span>
          <h2 className="ns-h2">Shop by genus</h2>
          <p className="ns-lead" style={{ margin: "14px auto 0" }}>
            Eight plant lines indexed in tissue culture, ready for wholesale
            export. Tap any genus to ask price on WhatsApp.
          </p>
        </div>
        <div className="ns-cat-grid ns-reveal">
          {CATS.map((c, i) => (
            <article className="ns-cat-card" key={c.slug}>
              <div className="ns-cat-media">
                <img
                  src={c.image}
                  alt={c.name}
                  width={480}
                  height={480}
                  loading="lazy"
                />
              </div>
              <span className="ns-cat-shade" aria-hidden="true" />
              <span className="ns-cat-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="ns-cat-leaf" aria-hidden="true">
                <Leaf size={12} /> TC
              </span>
              <div className="ns-cat-panel">
                <h3>{c.name}</h3>
                <div className="ns-cat-meta">
                  <span>Plantlet {c.size}</span>
                  <span className="ns-dot" />
                  <span>MOQ {c.moq}</span>
                </div>
                <div className="ns-cat-reveal">
                  <p>{c.desc}</p>
                </div>
                <a
                  className="ns-cat-cta"
                  href={waAskPrice(c.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ask price for ${c.name} on WhatsApp`}
                  onClick={(e) => e.stopPropagation()}
                >
                  Ask Price <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
