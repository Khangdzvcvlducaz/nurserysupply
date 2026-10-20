"use client";

import { useState, FormEvent } from "react";
import {
  Check,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Send,
} from "lucide-react";
import { toast } from "sonner";
import {
  LEAD_ACCESS_KEY,
  LEAD_EMAIL_RECIPIENT,
  LEAD_ENDPOINT,
  LEAD_PROVIDER,
  isLeadConfigured,
} from "@/lib/lead-config";

const PERKS = [
  "Written quote in 24–48 hours from vetted manufacturers",
  "FOB / CIF / DDP — your terms, your call",
  "Photo & video QC report before you pay the balance",
  "One English-speaking contact, accountable end-to-end",
];

type Lead = {
  name: string;
  country: string;
  product: string;
  phone: string;
  /** honeypot — must stay empty; bots fill it, humans don't */
  company: string;
};

const EMPTY: Lead = { name: "", country: "", product: "", phone: "", company: "" };

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<Lead>(EMPTY);

  const update = (k: keyof Lead, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  /** Build the WhatsApp URL with all 4 fields URL-encoded. */
  function buildWhatsAppUrl(): string {
    const lines = [
      `Name: ${form.name}`,
      `Country: ${form.country}`,
      `Product & Quantity: ${form.product}`,
      `WhatsApp: ${form.phone}`,
    ].join("\n");
    const msg = `Hi Nursery Supply! I'd like a quote.\n${lines}`;
    return `https://wa.me/84981848702?text=${encodeURIComponent(msg)}`;
  }

  /** Build the payload the chosen provider expects. */
  function buildPayload() {
    return {
      name: form.name,
      country: form.country,
      product: form.product,
      phone: form.phone,
      subject: "Sourcing quote request — Nursery Supply website",
      from_name: "Nursery Supply website",
      // Honeypot: Web3Forms uses `botcheck`, Formspree uses `_gotcha`.
      botcheck: form.company,
    };
  }

  /** Fallback when no provider is configured: open a pre-filled email. */
  function fallbackMailto() {
    const subject = encodeURIComponent("Sourcing quote request");
    const body = encodeURIComponent(
      `Name: ${form.name}\nCountry: ${form.country}\nProduct & Quantity: ${form.product}\nWhatsApp: ${form.phone}`,
    );
    window.location.href = `mailto:${LEAD_EMAIL_RECIPIENT}?subject=${subject}&body=${body}`;
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot: if filled, silently drop (bot).
    if (form.company) {
      setSubmitted(true);
      return;
    }
    if (!form.name || !form.country || !form.product || !form.phone) {
      toast.error("Please fill in all four fields.");
      return;
    }

    const waUrl = buildWhatsAppUrl();

    // If no provider configured yet, still open WhatsApp (the brief's flow)
    // and fall back to email so the lead isn't lost.
    if (!isLeadConfigured()) {
      toast("Opening WhatsApp with your details pre-filled.", {
        description:
          "Set LEAD_ACCESS_KEY in src/lib/lead-config.ts to also store the lead in our inbox.",
      });
      try {
        window.open(waUrl, "_blank");
      } catch {
        window.location.href = waUrl;
      }
      fallbackMailto();
      setSubmitted(true);
      return;
    }

    setSubmitting(true);
    try {
      // Fire-and-forget the Web3Forms POST — the WhatsApp open is the
      // primary action. We don't block the user on the network round-trip.
      const payload = { ...buildPayload(), access_key: LEAD_ACCESS_KEY };
      if (LEAD_PROVIDER === "web3forms") {
        void fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }).catch(() => {
          /* silent — WhatsApp open is the primary action */
        });
      } else {
        void fetch(LEAD_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }).catch(() => {
          /* silent */
        });
      }

      // Open WhatsApp in a new tab with the prefilled message
      try {
        window.open(waUrl, "_blank");
      } catch {
        window.location.href = waUrl;
      }

      setSubmitted(true);
      setForm(EMPTY);
      toast.success("Opening WhatsApp — your details are prefilled.");
    } catch {
      toast.error("Could not open WhatsApp — please WhatsApp us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="ns-sec-tight" id="quote">
      <div className="ns-wrap">
        <div className="ns-cta-grid ns-reveal">
          <div className="ns-cta-left">
            <span className="ns-eyebrow caramel">Request a Quote</span>
            <h2>Tell us what you need — we reply within 24 hours</h2>
            <p>
              Send us your product, quantity, and destination. We&apos;ll
              request quotes from 2–3 vetted manufacturers and come back with
              price, MOQ, and lead time — in writing.
            </p>
            <div className="ns-cta-list">
              {PERKS.map((p) => (
                <span key={p}>
                  <Check size={16} className="ic" strokeWidth={2.5} />
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="ns-cta-right">
            {submitted ? (
              <div className="ns-form-success">
                <span className="ic">
                  <CheckCircle2 size={28} />
                </span>
                <h3>Opening WhatsApp…</h3>
                <p>
                  We&apos;ve prefilled a message with your details. If WhatsApp
                  didn&apos;t open, tap below — and we&apos;ll reply within 24
                  hours.
                </p>
                <a
                  href="https://wa.me/84981848702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ns-btn ns-btn-wa"
                  onClick={() => setSubmitted(false)}
                >
                  <MessageCircle size={16} /> Open WhatsApp
                </a>
                <div className="ns-form-success-wa">
                  <span>We reply within 24 hours. Your info is never shared.</span>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h3>Send a quote request</h3>
                <p className="sub">
                  Submitting opens WhatsApp with your details prefilled — and
                  stores the lead in our inbox so nothing is lost.
                </p>

                {/* Honeypot — visually hidden, must stay empty */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="ns-honeypot"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                />

                <div className="ns-frow">
                  <div className="ns-field">
                    <label htmlFor="qf-name">Name *</label>
                    <input
                      id="qf-name"
                      type="text"
                      required
                      placeholder="Jane Rivera"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      autoComplete="name"
                    />
                  </div>
                  <div className="ns-field">
                    <label htmlFor="qf-country">Country *</label>
                    <input
                      id="qf-country"
                      type="text"
                      required
                      placeholder="United States"
                      value={form.country}
                      onChange={(e) => update("country", e.target.value)}
                      autoComplete="country-name"
                    />
                  </div>
                </div>

                <div className="ns-field">
                  <label htmlFor="qf-product">Product &amp; Quantity Needed *</label>
                  <textarea
                    id="qf-product"
                    rows={4}
                    required
                    placeholder="e.g. 5,000 6-inch nursery pots, 200 LED grow bars, 1,000 drip kits — ship to Miami"
                    value={form.product}
                    onChange={(e) => update("product", e.target.value)}
                  />
                </div>

                <div className="ns-field">
                  <label htmlFor="qf-phone">WhatsApp Number *</label>
                  <input
                    id="qf-phone"
                    type="tel"
                    required
                    placeholder="+1 305 555 0148"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    autoComplete="tel"
                  />
                </div>

                <p className="ns-form-helper">
                  We reply within 24 hours. Your info is never shared.
                </p>

                <button
                  type="submit"
                  className="ns-btn ns-btn-wa"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="ic animate-spin" /> Opening…
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send &amp; Open WhatsApp
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
