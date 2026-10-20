"use client";

import {
  Sprout,
  Instagram,
  Facebook,
  Mail,
  MessageCircle,
} from "lucide-react";
import { CATS, waGenericQuote } from "@/lib/catalog-data";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Products", href: "#categories" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Order", href: "#order" },
  { label: "Request a Quote", href: "#quote" },
];

const WA_LINK = waGenericQuote();

export function Footer() {
  return (
    <footer className="ns-footer" id="contact">
      <div className="ns-wrap">
        <div className="ns-foot-grid">
          <div className="ns-foot-brand">
            <a href="#top" className="ns-logo" aria-label="Nursery Supply home">
              <span
                className="ns-logo-mark"
                style={{ background: "rgba(255,255,255,0.10)" }}
              >
                <Sprout size={20} strokeWidth={2} />
              </span>
              <span className="ns-logo-word">
                Nursery Supply
                <small>Wholesale Tissue Culture Plants</small>
              </span>
            </a>
            <p>
              Wholesale tissue culture of rare and variegated foliage plants.
              Stable supply, stable quality, rich varieties — Monstera,
              Philodendron, Alocasia, Anthurium and other collector genera.
              Phytosanitary-certified export to 38 U.S. states plus EU &amp;
              Asia.
            </p>

            <div className="ns-foot-contact-row">
              <span>
                <span className="lbl">Email:</span>
                <a href="mailto:callmekai@nurserysupply.us">
                  callmekai@nurserysupply.us
                </a>
              </span>
            </div>
            <div className="ns-foot-contact-row">
              <span>
                <span className="lbl">WhatsApp:</span>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  +84 981848702
                </a>
              </span>
            </div>
            <div className="ns-foot-contact-row">
              <span>
                <span className="lbl">Address:</span>
                <span className="ns-foot-placeholder">
                  [NEEDS REAL ADDRESS — your company address, city, country]
                </span>
              </span>
            </div>
            <div className="ns-foot-contact-row">
              <span>
                <span className="lbl">Business License No.:</span>
                <span className="ns-foot-placeholder">
                  [NEEDS REAL BUSINESS LICENSE NO.]
                </span>
              </span>
            </div>

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
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a href="mailto:callmekai@nurserysupply.us" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Categories</h4>
            <ul>
              {CATS.map((c) => (
                <li key={c.slug}>
                  <a href="#categories">{c.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="ns-news">
            <h4>Policies Recap</h4>
            <p>
              Refund if goods not as described · QC photo/video report before
              balance payment · Sample available before bulk order.
            </p>
            <div className="ns-foot-recap">
              We work directly with a network of vetted tissue-culture labs and
              partner greenhouses across our region. Photo placeholders on this
              site will be replaced with real lab / greenhouse photos as
              documented batches complete.
            </div>
          </div>
        </div>
      </div>

      <div className="ns-foot-bottom">
        <div
          className="ns-wrap"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span>
            © {new Date().getFullYear()} Nursery Supply. All rights reserved.
            Wholesale tissue culture of foliage plants — one accountable
            partner end-to-end.
          </span>
          <span>
            WhatsApp desk:{" "}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              +84 981848702
            </a>{" "}
            ·{" "}
            <a href="mailto:callmekai@nurserysupply.us">
              callmekai@nurserysupply.us
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
