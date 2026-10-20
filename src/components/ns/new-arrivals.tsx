"use client";

import { ArrowRight } from "lucide-react";
import {
  PRODUCTS,
  statusLabel,
  waAskPrice,
  waGenericQuote,
} from "@/lib/catalog-data";

// 8 newest products for the "New Arrivals" band
const NEW = PRODUCTS.filter((p) => p.isNew).slice(0, 8);

export function NewArrivals() {
  return (
    <section className="ns-sec ns-new-arrivals" id="new-arrivals">
      <div className="ns-wrap">
        <div className="ns-prod-section-head ns-reveal">
          <div className="ns-section-head left">
            <span className="ns-eyebrow on-dark">Just Out</span>
            <h2 className="ns-h2 on-dark" style={{ marginTop: 12 }}>
              NEW ARRIVALS
            </h2>
            <p className="ns-lead on-dark" style={{ marginTop: 12 }}>
              Fresh from the lab this month — newest indexed cultures,
              limited first batches.
            </p>
          </div>
          <a
            className="ns-view-more"
            href={waGenericQuote()}
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW MORE <ArrowRight size={14} />
          </a>
        </div>

        <div className="ns-prod-grid ns-reveal">
          {NEW.map((p) => (
            <article className="ns-prod-card" key={p.id}>
              <div className="ns-prod-media">
                <img
                  src={p.image}
                  alt={p.name}
                  width={480}
                  height={480}
                  loading="lazy"
                />
                <span className={`ns-prod-status ${p.status}`}>
                  {statusLabel(p.status)}
                </span>
              </div>
              <div className="ns-prod-body">
                <h3 className="ns-prod-name">{p.name}</h3>
                <p className="ns-prod-variety">{p.variety}</p>
                <div className="ns-prod-meta">
                  <span>
                    <strong>Size:</strong> {p.size}
                  </span>
                  <span>
                    <strong>MOQ:</strong> {p.moq}
                  </span>
                </div>
                <div className="ns-prod-price">{p.price}</div>
                <div className="ns-prod-cta">
                  <a
                    className="ns-cat-cta"
                    href={waAskPrice(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ask price for ${p.name} on WhatsApp`}
                  >
                    Ask Price <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
