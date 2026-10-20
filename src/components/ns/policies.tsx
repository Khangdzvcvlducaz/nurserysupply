"use client";

import { ShieldCheck, Camera, ImageOff } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Policy = {
  icon: LucideIcon;
  text: string;
};

const POLICIES: Policy[] = [
  {
    icon: ShieldCheck,
    text: "Refund if goods not as described",
  },
  {
    icon: Camera,
    text: "QC photo/video report before balance payment",
  },
  {
    icon: ShieldCheck,
    text: "Sample available before bulk order",
  },
];

export function Policies() {
  return (
    <section className="ns-sec-tight ns-policy" id="policies">
      <div className="ns-wrap">
        <div className="ns-sec-head ns-reveal">
          <div>
            <span className="ns-eyebrow">Policies</span>
            <h2 className="ns-h2">How we keep you protected</h2>
            <p className="ns-lead">
              Three policies that put the risk on us — not on you.
            </p>
          </div>
        </div>

        <div className="ns-policy-grid ns-reveal">
          {POLICIES.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.text} className="ns-policy-card">
                <span className="ns-policy-ic" aria-hidden="true">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <p>{p.text}</p>
              </div>
            );
          })}
        </div>

        <div className="ns-policy-placeholder ns-reveal">
          <span className="ph-ic" aria-hidden="true">
            <ImageOff size={20} />
          </span>
          <div>
            <strong>Real proof, after our first orders with you.</strong>
            Real packaging photos, tracking screenshots, and customer feedback
            will be added here after our first orders with you.
          </div>
        </div>
      </div>
    </section>
  );
}
