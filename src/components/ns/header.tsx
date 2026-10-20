"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Sprout } from "lucide-react";
import { waGenericQuote } from "@/lib/catalog-data";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Products", href: "#categories" },
  { label: "FAQs", href: "#faq" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const WA_LINK = waGenericQuote();

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
              <small>Wholesale Tissue Culture Plants</small>
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
              <MessageCircle size={16} /> Get A Quote
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
              color: "#ffffff",
              borderColor: "rgba(255,255,255,0.25)",
            }}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
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
            <MessageCircle size={16} /> Get A Quote
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
