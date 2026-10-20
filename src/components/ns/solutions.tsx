"use client";

import { ArrowRight } from "lucide-react";
import { FACILITY_IMAGES, waGenericQuote } from "@/lib/catalog-data";

const SOLUTIONS = [
  {
    image: FACILITY_IMAGES.shop,
    title: "Landscaping",
    desc: "We source professional-grade plant material for landscape contractors and commercial projects — bulk quantities, scheduled delivery, climate-appropriate selections.",
    cta: "Landscaping quote",
    href: waGenericQuote(),
  },
  {
    image: FACILITY_IMAGES.wholesale,
    title: "Wholesale Process",
    desc: "Streamlined export workflow: documentation, packaging, phytosanitary certification, and air freight booking — one partner accountable end-to-end.",
    cta: "How it works",
    href: "#order",
  },
  {
    image: FACILITY_IMAGES.greenhouse,
    title: "Plant Solutions",
    desc: "Customized selections by climate zone and commercial need — retail-ready varieties, collector-grade rarities, or experimental new lines from the lab.",
    cta: "Talk to us",
    href: waGenericQuote(),
  },
];

export function Solutions() {
  return (
    <section className="ns-sec ns-section-soft" id="solutions">
      <div className="ns-wrap">
        <div className="ns-section-head ns-reveal">
          <span className="ns-eyebrow">Our Solutions</span>
          <h2 className="ns-h2">
            From a single retail shelf to a full landscape program
          </h2>
        </div>
        <div className="ns-sol-grid ns-reveal">
          {SOLUTIONS.map((s) => (
            <article className="ns-sol-card" key={s.title}>
              <div className="ns-sol-media">
                <img
                  src={s.image}
                  alt={s.title}
                  width={640}
                  height={400}
                  loading="lazy"
                />
              </div>
              <div className="ns-sol-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a
                  className="ns-view-more"
                  href={s.href}
                  {...(s.href.startsWith("#")
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  style={{ marginTop: 14, padding: 0 }}
                >
                  {s.cta} <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
