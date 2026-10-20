"use client";

import { FACILITY_IMAGES } from "@/lib/catalog-data";
import { useCountUp } from "@/hooks/use-count-up";

// Defensible, real stats from the original Nursery Supply positioning (Task 1 worklog).
const STATS = [
  { kind: "count", target: 9, suffix: "+", label: "Years in propagation & export" },
  { kind: "count", target: 140, suffix: "+", label: "Varieties in production" },
  { kind: "count", target: 38, suffix: "", label: "U.S. states served" },
  { kind: "percent", target: 98.6, suffix: "%", label: "Arrival viability (TC plantlets)", decimals: 1 },
] as const;

// Facility-specific stats the user must fill in with their real numbers.
const PLACEHOLDER_STATS = [
  { label: "Tissue culture lab area", value: "[NEEDS REAL — your lab area, sq.m]" },
  { label: "Greenhouse facility area", value: "[NEEDS REAL — your greenhouse area, sq.m]" },
  { label: "Partner greenhouses", value: "[NEEDS REAL — number of partner greenhouses]" },
  { label: "Production location", value: "[NEEDS REAL — your region / province]" },
];

function StatItem({
  target,
  suffix,
  label,
  decimals,
}: {
  target: number;
  suffix: string;
  label: string;
  decimals?: number;
}) {
  const { display, ref } = useCountUp(target, {
    suffix,
    decimals: decimals ?? 0,
  });
  return (
    <div className="ns-stat" ref={ref as React.RefObject<HTMLDivElement>}>
      <span className="ns-stat-num" data-countup="true">
        {display}
      </span>
      <span className="ns-stat-label">{label}</span>
    </div>
  );
}

export function About() {
  return (
    <section className="ns-sec ns-section-soft" id="about">
      <div className="ns-wrap ns-about-grid">
        <div className="ns-about-visual ns-reveal">
          <img
            src={FACILITY_IMAGES.qcLab}
            alt="Tissue culture QC lab — plantlets on sterile media"
            width={560}
            height={560}
            loading="lazy"
          />
          <img
            src={FACILITY_IMAGES.farm}
            alt="Nursery farm — hardening greenhouse rows"
            width={560}
            height={560}
            loading="lazy"
          />
        </div>
        <div className="ns-about-body ns-reveal">
          <span className="ns-eyebrow">About Us</span>
          <h2 className="ns-h2" style={{ marginTop: 14 }}>
            12+ Years Of Experience — The Best Choice For Your Business
          </h2>
          <p>
            Nursery Supply specializes in the tissue culture of rare and
            variegated foliage plants — Monstera, Philodendron, Alocasia,
            Anthurium and other collector genera. Our cultures are indexed
            for stable variegation, our hardening protocol is documented, and
            every export shipment carries a phytosanitary certificate.
          </p>
          <p>
            We work directly with a network of vetted tissue-culture labs and
            partner greenhouses across our region. For you this means stable
            variegation from indexed cultures, independent QC on every lot,
            and one partner accountable end-to-end — from initiation to the
            air-waybill.
          </p>

          <div className="ns-about-stats">
            {STATS.map((s) => (
              <StatItem
                key={s.label}
                target={s.target}
                suffix={s.suffix}
                decimals={(s as { decimals?: number }).decimals}
                label={s.label}
              />
            ))}
            {PLACEHOLDER_STATS.map((p) => (
              <div className="ns-stat" key={p.label}>
                <span className="ns-stat-num placeholder">{p.value}</span>
                <span className="ns-stat-label placeholder">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
