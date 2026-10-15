"use client";

import { ArrowRight } from "lucide-react";

type Buyer = {
  img: string;
  alt: string;
  kicker: string;
  h3: string;
  p: string;
  chips: string[];
  cta: string;
};

const BUYERS: Buyer[] = [
  {
    img: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9bacffe6eb50.jpg",
    alt: "Independent plant shop shelves with rare foliage",
    kicker: "For retail plant shops",
    h3: "Trending rare varieties, retail-ready",
    p: "Small-to-medium mixed orders across genera — plantlets that acclimate fast and look shelf-ready within two weeks, so your display case never sits half-empty.",
    chips: [
      "Mixed-variety pallets",
      "MOQ from 20 / variety",
      "Retail-ready sizing",
      "Pre-shipment photos",
    ],
    cta: "Start a retail order",
  },
  {
    img: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1081569f1bf8.jpg",
    alt: "Online plant seller packing orders",
    kicker: "For online plant sellers",
    h3: "Collector plants with stable restocking",
    p: "High-demand varieties on a predictable restock calendar, with detailed specs, photos, and sizing data you can drop straight into your listings.",
    chips: [
      "Restock calendar",
      "Listing-ready data",
      "Pre-order slots",
      "Live-arrival guarantee",
    ],
    cta: "Set up restocking",
  },
  {
    img: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b6297019e838.jpg",
    alt: "Wholesale distribution of boxed plantlets",
    kicker: "For wholesale distributors",
    h3: "Volume lots and reserved production",
    p: "Larger volume orders, recurring supply agreements, and custom variety planning with lab production reserved for the lines your network needs.",
    chips: [
      "Volume pricing tiers",
      "Reserved production",
      "Quarterly planning",
      "Dedicated account manager",
    ],
    cta: "Plan volume supply",
  },
];

export function BuyerTypes() {
  return (
    <section className="ns-sec" id="buyers">
      <div className="ns-wrap">
        <div className="ns-sec-head ns-reveal">
          <div>
            <span className="ns-eyebrow">Who We Supply</span>
            <h2 className="ns-h2">Built for three kinds of buyers</h2>
          </div>
        </div>

        {BUYERS.map((b, i) => (
          <article key={b.kicker} className="ns-buyer ns-reveal">
            <div className="ns-buyer-img">
              <img
                src={b.img}
                alt={b.alt}
                width={800}
                height={560}
                loading="lazy"
              />
            </div>
            <div className="ns-buyer-body">
              <span className="ns-kicker">{b.kicker}</span>
              <h3>{b.h3}</h3>
              <p>{b.p}</p>
              <div className="ns-buyer-chips">
                {b.chips.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
              <a
                href="#quote"
                className="ns-btn ns-btn-outline"
                data-btype={b.kicker.replace("For ", "").replace(/^\w/, (m) => m.toUpperCase())}
              >
                {b.cta} <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
