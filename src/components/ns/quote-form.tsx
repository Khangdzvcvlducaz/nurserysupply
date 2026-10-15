"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Check, CheckCircle2, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

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

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    btype: "",
    msg: "",
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.btype) {
      toast.error("Please fill in your name, email, and business type.");
      return;
    }
    // Email regex sanity check
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    toast.success("Request received — our desk will reply within 1 business day.");
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

                <button type="submit" className="ns-btn ns-btn-primary">
                  Send Request <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
