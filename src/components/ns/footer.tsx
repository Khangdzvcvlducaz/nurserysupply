"use client";

import {
  Sprout,
  Instagram,
  Facebook,
  Mail,
  MessageCircle,
} from "lucide-react";

const NAV = [
  { label: "What We Do", href: "#what" },
  { label: "How We Work", href: "#how" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why" },
  { label: "FAQ", href: "#faq" },
  { label: "Request a Quote", href: "#quote" },
];

const WA_LINK =
  "https://wa.me/84981848702?text=Hi%20Nursery%20Supply!%20I'd%20like%20a%20quote%20for%20nursery%20%26%20garden%20products.%20Quantity%3A%20___";

export function Footer() {
  return (
    <footer className="ns-footer" id="contact">
      <div className="ns-wrap">
        <div className="ns-foot-grid">
          <div className="ns-foot-brand">
            <a href="#top" className="ns-logo" aria-label="Nursery Supply home">
              <span
                className="ns-logo-mark"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <Sprout size={20} strokeWidth={2} />
              </span>
              <span className="ns-logo-word">
                Nursery Supply
                <small>Sourcing &amp; Supply Partner</small>
              </span>
            </a>
            <p>
              Your sourcing &amp; supply partner for nursery and garden
              products. We work directly with a network of vetted manufacturers
              across China — one point of contact, QC on every order,
              accountable end-to-end.
            </p>

            <div className="ns-foot-contact-row">
              <span>
                <span className="lbl">Email:</span>
                <a href="mailto:callmekai@nurserysupply.us">
                  callmekai@nurserysupply.us
                </a>
              </span>
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
                  [NEEDS REAL LICENSE NO.]
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
            <h4>What We Source</h4>
            <ul>
              <li>Nursery Pots &amp; Planters</li>
              <li>Grow Lights &amp; Greenhouse</li>
              <li>Garden Tools</li>
              <li>Irrigation &amp; Watering</li>
              <li>Potting Media &amp; Fertilizer</li>
              <li>Plant Supports &amp; Trellises</li>
              <li>Propagation Supplies</li>
              <li>Labels, Tags &amp; Packaging</li>
            </ul>
          </div>

          <div className="ns-news">
            <h4>Policies Recap</h4>
            <p>
              Refund if goods not as described · QC photo/video report before
              balance payment · Sample available before bulk order.
            </p>
            <div className="ns-foot-recap">
              We are not a factory. We are a sourcing &amp; supply partner
              working with vetted manufacturers in China. Photo placeholders on
              this site will be replaced with real product photos as orders
              complete.
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
            Nursery Supply is a sourcing &amp; supply partner working with
            vetted manufacturers in China.
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
