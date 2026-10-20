"use client";

import { MessageCircle, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { waGenericQuote } from "@/lib/catalog-data";

const PERKS = [
  { icon: Sparkles, label: "Stable supply" },
  { icon: ShieldCheck, label: "Stable quality" },
  { icon: Truck, label: "Phytosanitary-certified export" },
];

const WA_LINK = waGenericQuote();

export function TrustedCta() {
  return (
    <section className="ns-trusted-cta" id="trusted">
      <div className="ns-wrap ns-trusted-cta-inner ns-reveal">
        <span className="ns-eyebrow on-dark">Your Partner</span>
        <h2>Your Trusted Partner in Global Plant Supply</h2>
        <p>
          Stable supply. Stable quality. Phytosanitary-certified export. One
          accountable partner.
        </p>
        <div
          style={{
            display: "inline-flex",
            gap: 20,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 28,
          }}
        >
          {PERKS.map((p) => (
            <span
              key={p.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "rgba(255,255,255,0.88)",
                fontSize: "0.92rem",
                fontWeight: 500,
              }}
            >
              <p.icon size={18} style={{ color: "var(--mh-gold)" }} />
              {p.label}
            </span>
          ))}
        </div>
        <br />
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="ns-btn ns-btn-wa ns-btn-lg"
        >
          <MessageCircle size={16} /> Get A Quote
        </a>
      </div>
    </section>
  );
}
