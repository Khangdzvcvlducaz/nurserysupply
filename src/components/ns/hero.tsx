"use client";

import { ArrowRight, Check, MessageCircle, Camera, ShieldCheck, Boxes } from "lucide-react";

const WA_LINK =
  "https://wa.me/84981848702?text=Hi%20Nursery%20Supply!%20I'd%20like%20a%20quote%20for%20nursery%20%26%20garden%20products.%20Quantity%3A%20___";

const BENEFITS = [
  "Vetted manufacturers across China",
  "QC photo & video on every order",
  "One English-speaking point of contact",
];

export function Hero() {
  return (
    <section className="ns-hero" id="top">
      <div className="ns-wrap ns-hero-grid">
        <div className="ns-reveal ns-in">
          <span className="ns-eyebrow">
            Sourcing &amp; Supply Partner · China → Worldwide
          </span>
          <h1>
            Your Sourcing Partner for Nursery &amp; Garden Products —{" "}
            <em>One Contact, Vetted Factories, QC on Every Order</em>
          </h1>
          <p className="ns-lead">
            We work directly with a network of vetted manufacturers across
            China. We negotiate unit price by volume, inspect every lot with
            photo and video before it ships, and stay accountable end-to-end —
            so you get factory-floor pricing without the China sourcing risk.
          </p>

          <div className="ns-hero-ctas">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ns-btn ns-btn-wa"
            >
              <MessageCircle size={16} /> Get a Quote on WhatsApp
            </a>
            <a href="#quote" className="ns-btn ns-btn-outline">
              Request Free Quotation <ArrowRight size={16} />
            </a>
          </div>

          <div className="ns-hero-trust">
            {BENEFITS.map((t) => (
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
              src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9016edf06c9f.jpg"
              alt="Nursery & garden products sourced from vetted manufacturers"
              width={900}
              height={1100}
              loading="eager"
            />
            <span className="ns-photo-badge">
              <Camera size={11} /> Needs your real photo
            </span>
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
            <ShieldCheck size={26} className="ic" />
            <div>
              <strong>Lot QC · photos approved</strong>
              <span>Before balance payment</span>
            </div>
          </div>

          <div className="ns-chip ns-chip-2">
            <Boxes size={24} className="ic" />
            <div>
              <strong>FOB · CIF · DDP terms</strong>
              <span>Consolidated shipments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
