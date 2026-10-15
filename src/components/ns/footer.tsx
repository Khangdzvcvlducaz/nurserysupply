"use client";

import { useState, FormEvent } from "react";
import { Sprout, Instagram, Facebook, Send } from "lucide-react";
import { toast } from "sonner";

const CATS = [
  "Variegated Monstera",
  "Philodendron",
  "Alocasia",
  "Anthurium",
  "Syngonium & Scindapsus",
  "Caladium",
  "Aglaonema",
];

const QUICK = [
  "Wholesale Catalog",
  "Request Price List",
  "Import Process & FAQ",
  "Resources",
  "About",
  "Contact",
];

export function Footer() {
  const [email, setEmail] = useState("");

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("You're on the list — restock alerts arrive Friday 9 AM ET.");
    setEmail("");
  };

  return (
    <footer className="ns-footer" id="contact">
      <div className="ns-wrap">
        <div className="ns-foot-grid">
          <div className="ns-foot-brand">
            <a href="#top" className="ns-logo" aria-label="Nursery Supply home">
              <span className="ns-logo-mark" style={{ background: "rgba(255,255,255,0.1)" }}>
                <Sprout size={20} strokeWidth={2} />
              </span>
              <span className="ns-logo-word">
                Nursery Supply
                <small>Rare Plant Exports</small>
              </span>
            </a>
            <p>
              &ldquo;Rare Foliage Plants. Reliable U.S. Supply.&rdquo;
              Tissue-culture plantlets for U.S. retailers, sellers, and
              distributors — with documentation and packaging you can trust.
            </p>
            <div className="ns-socials">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                {/* TikTok isn't in lucide; use a small inline glyph */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4>Categories</h4>
            <ul>
              {CATS.map((c) => (
                <li key={c}>
                  <a href="#catalog">{c}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {QUICK.map((q) => (
                <li key={q}>
                  <a href={q.includes("FAQ") ? "#faq" : q.includes("Price") ? "#quote" : "#top"}>
                    {q}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="ns-news">
            <h4>New Arrivals Letter</h4>
            <p>
              Get new arrivals, restocks, and wholesale offers — one email a
              week, no noise.
            </p>
            <form className="ns-news-form" onSubmit={onSubscribe}>
              <input
                type="email"
                placeholder="you@yourshop.com"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe">
                <Send size={16} />
              </button>
            </form>
            <p className="ns-foot-note">
              Restock alerts go out every Friday, 9 AM ET.
            </p>
          </div>
        </div>
      </div>

      <div className="ns-foot-bottom">
        <div className="ns-wrap" style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <span>
            © {new Date().getFullYear()} Nursery Supply. All rights reserved.
            Plants supplied as living nursery stock for commercial import;
            buyers are responsible for confirming current USDA/APHIS and
            state-level import requirements. Guidance on this site is not
            legal advice.
          </span>
          <span>
            Wholesale desk:{" "}
            <a href="mailto:sales@nurserysupply.com">sales@nurserysupply.com</a>{" "}
            · <a href="tel:+66815552143">+66 81 555 2143</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
