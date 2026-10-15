"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, Sprout } from "lucide-react";

const NAV = [
  { label: "Wholesale Catalog", href: "#catalog" },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

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
              <small>Rare Plant Exports</small>
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
              className="ns-icon-btn"
              href="tel:+84981848702"
              aria-label="Call our sales desk"
            >
              <Phone size={18} />
            </a>
            <a
              className="ns-icon-btn wa"
              href="https://wa.me/84981848702?text=Hello%20Nursery%20Supply%20%E2%80%94%20I%27d%20like%20the%20wholesale%20price%20list."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a href="#quote" className="ns-btn ns-btn-primary ns-btn-sm">
              Request Wholesale Price List
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
            className="ns-btn ns-btn-cream"
            href="https://wa.me/84981848702"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a
            href="#quote"
            className="ns-btn ns-btn-primary"
            onClick={() => setOpen(false)}
          >
            Request Price List
          </a>
        </div>
      </div>
    </>
  );
}
