"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Sprout } from "lucide-react";

const NAV = [
  { label: "What We Do", href: "#what" },
  { label: "How We Work", href: "#how" },
  { label: "Products", href: "#products" },
  { label: "FAQ", href: "#faq" },
];

const WA_LINK =
  "https://wa.me/84981848702?text=Hi%20Nursery%20Supply!%20I'd%20like%20a%20quote%20for%20nursery%20%26%20garden%20products.%20Quantity%3A%20___";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="ns-hdr">
        <div className="ns-wrap ns-hdr-inner">
          <a href="#top" className="ns-logo" aria-label="Nursery Supply home">
            <span className="ns-logo-mark" aria-hidden="true">
              <Sprout size={20} strokeWidth={2} />
            </span>
            <span className="ns-logo-word">
              Nursery Supply
              <small>Sourcing &amp; Supply Partner</small>
            </span>
          </a>

          <nav className="ns-nav" aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.label} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="ns-hdr-acts">
            <a
              className="ns-icon-btn wa"
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ns-btn ns-btn-wa ns-btn-sm"
            >
              <MessageCircle size={16} /> Get a Quote
            </a>
            <button
              className="ns-icon-btn ns-menu-btn"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`ns-mnav ${open ? "open" : ""}`}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
      >
        <div className="ns-mnav-top">
          <span className="logo-word">Nursery Supply</span>
          <button
            className="ns-icon-btn"
            style={{
              background: "transparent",
              color: "#f2eee0",
              borderColor: "rgba(255,255,255,0.25)",
            }}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <a className="mlink" href="#top" onClick={() => setOpen(false)}>
          Home
        </a>
        {NAV.map((n) => (
          <a
            key={n.label}
            className="mlink"
            href={n.href}
            onClick={() => setOpen(false)}
          >
            {n.label}
          </a>
        ))}
        <div className="ns-mnav-foot">
          <a
            className="ns-btn ns-btn-wa on-dark"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a
            href="#quote"
            className="ns-btn ns-btn-outline on-dark"
            onClick={() => setOpen(false)}
          >
            Request Free Quotation
          </a>
        </div>
      </div>
    </>
  );
}
