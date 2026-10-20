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
  "Written quote in 24 hours from indexed cultures",
  "Photo & video QC report before balance payment",
  "Phytosanitary-certified export — paperwork done right",
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
      `Variety & Quantity: ${form.product}`,
      `WhatsApp: ${form.phone}`,
    ].join("\n");
    const msg = `Hi Nursery Supply! I'd like a wholesale quote for tissue-culture plants.\n${lines}`;
    return `https://wa.me/84981848702?text=${encodeURIComponent(msg)}`;
  }

  /** Build the payload the chosen provider expects. */
  function buildPayload() {
    return {
      name: form.name,
      country: form.country,
      product: form.product,
      phone: form.phone,
      subject: "Wholesale plant quote request — Nursery Supply website",
      from_name: "Nursery Supply website",
      botcheck: form.company,
    };
  }

  /** Fallback when no provider is configured: open a pre-filled email. */
  function fallbackMailto() {
    const subject = encodeURIComponent("Wholesale plant quote request");
    const body = encodeURIComponent(
      `Name: ${form.name}\nCountry: ${form.country}\nVariety & Quantity: ${form.product}\nWhatsApp: ${form.phone}`,
    );
    window.location.href = `mailto:${LEAD_EMAIL_RECIPIENT}?subject=${subject}&body=${body}`;
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (form.company) {
      setSubmitted(true);
      return;
    }
    if (!form.name || !form.country || !form.product || !form.phone) {
      toast.error("Please fill in all four fields.");
      return;
    }

    const waUrl = buildWhatsAppUrl();

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
      const payload = { ...buildPayload(), access_key: LEAD_ACCESS_KEY };
      if (LEAD_PROVIDER === "web3forms") {
        void fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        }).catch(() => {});
      } else {
        void fetch(LEAD_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        }).catch(() => {});
      }

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
    <section className="ns-sec-tight ns-section-soft" id="quote">
      <div className="ns-wrap">
        <div className="ns-cta-grid ns-reveal">
          <div className="ns-cta-left">
            <span className="ns-eyebrow gold">Request a Quote</span>
            <h2 className="ns-h2" style={{ marginTop: 14 }}>
              Tell us what you need — we reply within 24 hours
            </h2>
            <p>
              Send us your varieties, quantities, and destination. We confirm
              availability, MOQ, and a written quote — usually same-day on
              WhatsApp.
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
                  <label htmlFor="qf-product">
                    Variety &amp; Quantity Needed *
                  </label>
                  <textarea
                    id="qf-product"
                    rows={4}
                    required
                    placeholder="e.g. 100 Monstera 'Thai Constellation', 50 Philodendron 'Pink Princess', 25 Alocasia 'Frydek Variegata' — ship to Miami"
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
                  style={{ width: "100%" }}
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
