"use client";

import { Camera } from "lucide-react";

type Step = {
  n: string;
  title: string;
  body: string;
  photo: string;
  alt: string;
};

const STEPS: Step[] = [
  {
    n: "1",
    title: "Share Requirements",
    body:
      "Send photos, specs, target quantity, and your destination port. We confirm feasibility same day.",
    photo:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/afe1ee60b44f.webp",
    alt: "Buyer sharing product requirements and specs with the sourcing team",
  },
  {
    n: "2",
    title: "Quotation from Multiple Sources",
    body:
      "We request quotes from 2–3 vetted manufacturers that fit your product and send back price, MOQ, and lead time — in writing.",
    photo:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a18f9923a2fa.jpg",
    alt: "Written price quotation from multiple vetted manufacturers",
  },
  {
    n: "3",
    title: "Sample & Quality Check",
    body:
      "Before bulk, we arrange a sample (sample fee may apply, refunded on bulk order) and confirm materials, dimensions, and finish against your spec.",
    photo:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bf8ef776a1a7.jpg",
    alt: "Product sample being measured and inspected before bulk order",
  },
  {
    n: "4",
    title: "Packing with Photo/Video Report",
    body:
      "Production is inspected and packed under our supervision. You receive a photo and video QC report before balance payment — approve before it ships.",
    photo:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/295045ecbaaf.jpg",
    alt: "Packing and quality inspection of products before shipment",
  },
  {
    n: "5",
    title: "Shipping with Live Tracking",
    body:
      "Air, sea, or express — booked with full paperwork. Tracking shared within hours of dispatch, customs documents prepared correctly the first time.",
    photo:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c4d63f575503.jpg",
    alt: "Shipped goods with live tracking and customs paperwork",
  },
];

export function Process() {
  return (
    <section className="ns-sec" id="how">
      <div className="ns-wrap">
        <div className="ns-sec-head ns-reveal">
          <div>
            <span className="ns-eyebrow">How We Work</span>
            <h2 className="ns-h2">
              From your inquiry to your warehouse, in five steps
            </h2>
            <p className="ns-lead">
              Same-day feasibility check, written quotes in 24–48 hours, photo
              and video QC before you pay the balance, and live tracking once
              it ships.
            </p>
          </div>
        </div>

        <div className="ns-how-grid ns-reveal" aria-label="Five-step sourcing process">
          {STEPS.map((s) => (
            <article key={s.n} className="ns-how-step">
              <div className="ns-how-node" aria-hidden="true">{s.n}</div>
              <div className="ns-how-photo">
                <img
                  src={s.photo}
                  alt={s.alt}
                  width={300}
                  height={225}
                  loading="lazy"
                />
                <span className="ns-photo-badge">
                  <Camera size={11} /> Needs your real photo
                </span>
              </div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
