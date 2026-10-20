"use client";

import { ArrowRight } from "lucide-react";
import {
  PRODUCTS,
  statusLabel,
  waAskPrice,
  waGenericQuote,
} from "@/lib/catalog-data";

// 8 hottest products for the "HOT-SALE PRODUCT" grid
const HOT = PRODUCTS.filter((p) => p.isHot).slice(0, 8);

export function HotProducts() {
  return (
    <section className="ns-sec ns-section-white" id="hot-sale">
      <div className="ns-wrap">
        <div className="ns-prod-section-head ns-reveal">
          <div className="ns-section-head left">
            <span className="ns-eyebrow">Featured</span>
            <h2 className="ns-h2" style={{ marginTop: 12 }}>
              HOT-SALE PRODUCT
            </h2>
            <p className="ns-lead" style={{ marginTop: 12 }}>
              The lines our wholesale buyers reorder. Stable variegation,
              indexed mother cultures, phytosanitary-certified export.
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
          {HOT.map((p) => (
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
