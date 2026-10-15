"use client";

import { Sprout, Thermometer, Search, Box, Tag, FlaskConical } from "lucide-react";

const ITEMS = [
  {
    icon: Sprout,
    title: "Healthy root development before dispatch",
    body: "Plantlets stay in community trays until roots fully fill the plug. We never rush bare-root stock out the door to hit a date.",
  },
  {
    icon: Thermometer,
    title: "Acclimatization & pre-shipment preparation",
    body: "Every batch is hardened in shade houses for 2–3 weeks with gradually reduced humidity, so plantlets survive real-world conditions — not just the lab.",
  },
  {
    icon: Search,
    title: "Pest & disease inspection",
    body: "100% visual inspection plus laboratory spot checks. Any batch with flagged material is held back and re-grown, not shipped.",
  },
  {
    icon: Box,
    title: "Packaging built for international live transit",
    body: "Sterile plug media, moisture barrier film, insulated liners, seasonal heat packs, and ventilated export boxes tested against 10-day scenarios.",
  },
  {
    icon: Tag,
    title: "Clear labeling & variety identification",
    body: "Every tray and box carries botanical name, cultivar, lot number, and count — so customs clearance and your inventory intake are both painless.",
  },
];

export function Quality() {
  return (
    <section className="ns-sec ns-quality" id="quality">
      <div className="ns-wrap ns-quality-grid">
        <div className="ns-q-photo ns-reveal">
          <img
            src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9cd6bc0d2641.jpg"
            alt="Quality inspection of tissue-culture plantlets before export"
            width={760}
            height={820}
            loading="lazy"
          />
          <div className="ns-q-tag">
            <FlaskConical size={16} />
            Every lot lab-traced &amp; inspected
          </div>
        </div>

        <div className="ns-reveal">
          <span className="ns-eyebrow">Quality Standards</span>
          <h2 className="ns-h2" style={{ marginTop: 14 }}>
            What &ldquo;export grade&rdquo; actually means here
          </h2>
          <div className="ns-q-list">
            {ITEMS.map((it) => {
              const Icon = it.icon;
              return (
                <div key={it.title} className="ns-q-item">
                  <span className="ic-wrap">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h4>{it.title}</h4>
                    <p>{it.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
