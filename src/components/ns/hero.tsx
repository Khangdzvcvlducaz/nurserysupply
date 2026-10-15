"use client";

import { ArrowRight, Check, Plane, CheckCircle2 } from "lucide-react";

const TRUST = [
  "Phytosanitary certificate with every shipment",
  "MOQ from 20 plants per variety — mixed orders welcome",
  "Weekly U.S.-bound air freight with full tracking",
];

export function Hero() {
  return (
    <section className="ns-hero" id="top">
      <div className="ns-wrap ns-hero-grid">
        <div className="ns-reveal ns-in">
          <span className="ns-eyebrow">
            Tissue-Culture Export · U.S. Wholesale
          </span>
          <h1>
            Rare Tissue-Culture Plants for <em>U.S. Retailers</em> and Growers
          </h1>
          <p className="ns-lead">
            Wholesale Monstera, Philodendron, Alocasia, Anthurium, and rare
            foliage plants — with export documentation and secure packaging.
          </p>

          <div className="ns-hero-ctas">
            <a href="#quote" className="ns-btn ns-btn-primary">
              Request Price List <ArrowRight size={16} />
            </a>
            <a href="#catalog" className="ns-btn ns-btn-outline">
              Browse Wholesale Catalog
            </a>
          </div>

          <div className="ns-hero-trust">
            {TRUST.map((t) => (
              <span key={t}>
                <Check size={16} className="ic-check" strokeWidth={2.5} />
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="ns-hero-visual ns-reveal ns-in" aria-hidden="false">
          <div className="ns-hero-frame">
            <img
              src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b1ec3d8a0a49.jpg"
              alt="Tissue-culture plantlets hardening off in a shaded greenhouse"
              width={900}
              height={1100}
              loading="eager"
            />
            {/* Decorative monstera-leaf line drawing */}
            <svg
              className="ns-hero-leaf"
              viewBox="0 0 340 420"
              fill="none"
              aria-hidden="true"
            >
              <g>
                <path
                  d="M262 408 C236 352 224 300 214 246"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M214 246 C186 262 148 258 122 232 C100 210 96 182 110 162 C86 148 78 116 94 94 C88 72 100 50 124 46 C126 24 148 10 172 16 C186 2 214 4 226 20 C250 12 274 24 278 48 C300 58 308 84 296 104 C316 120 318 148 302 164 C316 184 312 212 292 222 C304 244 296 268 272 272 C252 276 230 262 214 246 Z"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <path
                  d="M214 244 C204 190 202 120 214 58"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M208 196 C182 192 158 178 142 156"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  opacity="0.7"
                />
                <path
                  d="M206 150 C186 144 164 128 152 108"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  opacity="0.7"
                />
              </g>
            </svg>
          </div>

          <div className="ns-chip ns-chip-1">
            <CheckCircle2 size={26} className="ic" />
            <div>
              <strong>Lot #A-2417 · QC passed</strong>
              <span>Roots verified · ready to fly</span>
            </div>
          </div>

          <div className="ns-chip ns-chip-2">
            <Plane size={24} className="ic" />
            <div>
              <strong>MIA · 9-day door delivery</strong>
              <span>Phyto cert included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
