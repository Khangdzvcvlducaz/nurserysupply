"use client";

import { HeartHandshake, FlaskConical, Sprout, Globe } from "lucide-react";

const FEATURES = [
  {
    icon: HeartHandshake,
    title: "Honesty and sincerity",
    desc: "We quote real prices, real MOQs, real lead times — and we tell you when a variety isn't ready.",
  },
  {
    icon: FlaskConical,
    title: "Strong R&D team",
    desc: "Indexed mother cultures and an in-house lab keep variegation stable batch-to-batch.",
  },
  {
    icon: Sprout,
    title: "Professional planting technology",
    desc: "From initiation to hardening, every stage is documented for phytosanitary-certified export.",
  },
  {
    icon: Globe,
    title: "Rich export experiences",
    desc: "Documented shipments to 38 U.S. states plus EU and Asia — paperwork right the first time.",
  },
];

export function Features() {
  return (
    <section className="ns-sec ns-section-white" id="features">
      <div className="ns-wrap">
        <div className="ns-section-head ns-reveal">
          <span className="ns-eyebrow">Why Nursery Supply</span>
          <h2 className="ns-h2">
            A producer's discipline, an exporter's reliability
          </h2>
          <p className="ns-lead" style={{ margin: "14px auto 0" }}>
            We do one thing — tissue culture of rare foliage — and we do it
            well enough to ship around the world.
          </p>
        </div>
        <div className="ns-features-grid ns-reveal">
          {FEATURES.map((f) => (
            <div className="ns-feature-card" key={f.title}>
              <span className="ns-feature-icon" aria-hidden="true">
                <f.icon size={28} strokeWidth={2} />
              </span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
