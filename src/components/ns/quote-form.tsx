"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Check, CheckCircle2, Loader2, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import {
  LEAD_ACCESS_KEY,
  LEAD_EMAIL_RECIPIENT,
  LEAD_ENDPOINT,
  LEAD_PROVIDER,
  isLeadConfigured,
} from "@/lib/lead-config";

const PERKS = [
  "Current availability across 140+ varieties",
  "FOB pricing by plantlet size tier",
  "MOQ and lead-time sheet per crop",
  "New-arrival alerts before public listing",
];

const BUSINESS_TYPES = [
  "Retail plant shop",
  "Online plant seller",
  "Wholesale distributor",
  "Garden-center chain",
  "Collector-reseller",
  "Other",
];

type Lead = {
  name: string;
  email: string;
  phone: string;
  btype: string;
  msg: string;
  /** honeypot — must stay empty; bots fill it, humans don't */
  company: string;
};

const EMPTY: Lead = { name: "", email: "", phone: "", btype: "", msg: "", company: "" };

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<Lead>(EMPTY);

  const update = (k: keyof Lead, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  /** Build the payload the chosen provider expects. */
  function buildPayload() {
    const base = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      "business type": form.btype,
      message: form.msg,
      subject: "Wholesale price list request",
      from_name: "Nursery Supply website",
      // Honeypot: Web3Forms uses `botcheck`, Formspree uses `_gotcha`.
      botcheck: form.company,
    };
    return base;
  }

  /** Fallback when no provider is configured: open a pre-filled email. */
  function fallbackMailto() {
    const subject = encodeURIComponent("Wholesale price list request");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nBusiness type: ${form.btype}\n\n${form.msg}`,
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
    if (!form.name || !form.email || !form.btype) {
      toast.error("Please fill in your name, email, and business type.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // If no provider configured yet, fall back to email so the form
    // still works (dev / before the key is pasted in).
    if (!isLeadConfigured()) {
      toast("Lead endpoint not configured — opening your email app instead.", {
        description: "Set LEAD_ACCESS_KEY in src/lib/lead-config.ts to capture leads automatically.",
      });
      fallbackMailto();
      return;
    }

    setSubmitting(true);
    try {
      let res: Response;
      if (LEAD_PROVIDER === "web3forms") {
        res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...buildPayload(), access_key: LEAD_ACCESS_KEY }),
        });
      } else {
        // Formspree — accepts JSON too
        res = await fetch(LEAD_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(buildPayload()),
        });
      }

      const data = await res.json().catch(() => ({} as Record<string, unknown>));
      const ok =
        res.ok &&
        // Web3Forms returns { success: true }; Formspree returns arbitrary JSON
        (LEAD_PROVIDER === "formspree" || data.success !== false);

      if (ok) {
        setSubmitted(true);
        setForm(EMPTY);
        toast.success("Request received — our desk will reply within 1 business day.");
      } else {
        throw new Error(
          (typeof data.message === "string" && data.message) || "Submission failed",
        );
      }
    } catch {
      toast.error("Could not send right now — please WhatsApp us instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="ns-sec-tight" id="quote">
      <div className="ns-wrap">
        <div className="ns-cta-grid ns-reveal">
          <div className="ns-cta-left">
            <span className="ns-eyebrow caramel">Price List &amp; Quotes</span>
            <h2>Request the wholesale price list</h2>
            <p>
              You&apos;ll receive our current FOB price list, live availability,
              and MOQ &amp; lead-time sheet — no obligation.
            </p>
            <div className="ns-cta-list">
              {PERKS.map((p) => (
                <span key={p}>
                  <Check size={16} className="ic" strokeWidth={2.5} />
                  {p}
                </span>
              ))}
            </div>
            <a
              href="https://wa.me/84981848702?text=Hello%20%E2%80%94%20I%27d%20like%20the%20wholesale%20price%20list."
              target="_blank"
              rel="noopener noreferrer"
              className="ns-btn ns-btn-cream"
            >
              <MessageCircle size={16} /> Faster? WhatsApp our desk
            </a>
          </div>

          <div className="ns-cta-right">
            {submitted ? (
              <div className="ns-form-success">
                <span className="ic">
                  <CheckCircle2 size={28} />
                </span>
                <h3>Request sent.</h3>
                <p>
                  Our wholesale desk will reply within one business day. Urgent?
                  WhatsApp us any time.
                </p>
                <a
                  href="https://wa.me/84981848702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ns-btn ns-btn-outline"
                  onClick={() => setSubmitted(false)}
                >
                  <MessageCircle size={16} /> Open WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h3>Send a request</h3>
                <p className="sub">
                  Reaches our wholesale desk in Miami — same team as our
                  WhatsApp.
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
                    <label htmlFor="qf-name">Contact name *</label>
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
                    <label htmlFor="qf-email">Business email *</label>
                    <input
                      id="qf-email"
                      type="email"
                      required
                      placeholder="orders@yourshop.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="ns-frow">
                  <div className="ns-field">
                    <label htmlFor="qf-phone">Phone / WhatsApp</label>
                    <input
                      id="qf-phone"
                      type="tel"
                      placeholder="+1 305 555 0148"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      autoComplete="tel"
                    />
                  </div>
                  <div className="ns-field">
                    <label htmlFor="qf-btype">Business type *</label>
                    <select
                      id="qf-btype"
                      required
                      value={form.btype}
                      onChange={(e) => update("btype", e.target.value)}
                    >
                      <option value="">Select…</option>
                      {BUSINESS_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="ns-field">
                  <label htmlFor="qf-msg">
                    Target varieties / message
                  </label>
                  <textarea
                    id="qf-msg"
                    rows={4}
                    placeholder="Tell us which varieties you want, your state, and your target volume…"
                    value={form.msg}
                    onChange={(e) => update("msg", e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="ns-btn ns-btn-primary"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="ic animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Send Request <Send size={16} />
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
