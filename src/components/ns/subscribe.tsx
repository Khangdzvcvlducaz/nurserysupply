"use client";

import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    // No backend needed — confirm subscribe, fire-and-forget Web3Forms
    // if the lead-config has been wired up. We keep this intentionally
    // lightweight to match the minhuijt.com "subscribe today" pattern.
    try {
      import("@/lib/lead-config").then(({ LEAD_ACCESS_KEY }) => {
        if (!LEAD_ACCESS_KEY.startsWith("YOUR_")) {
          void fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              access_key: LEAD_ACCESS_KEY,
              subject: "Newsletter subscribe — Nursery Supply website",
              from_name: "Nursery Supply website",
              email: trimmed,
              botcheck: "",
            }),
          }).catch(() => {});
        }
      });
    } catch {
      // silent — subscribe confirmation is the primary action
    }
    setDone(true);
    toast.success("Subscribed — thanks for joining the list.");
  };

  return (
    <section className="ns-sec-tight ns-section-white" id="subscribe">
      <div className="ns-wrap">
        <div className="ns-subscribe-inner ns-reveal">
          <div className="ns-subscribe-text">
            <h3>Get notified about new arrivals!</h3>
            <p>
              Fresh tissue-culture batches, rare collector drops, and export
              schedule updates — straight to your inbox.
            </p>
          </div>
          <form className="ns-subscribe-form" onSubmit={onSubmit} noValidate>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Your email address"
              required
              autoComplete="email"
            />
            <button type="submit" className="ns-btn ns-btn-primary" disabled={done}>
              {done ? (
                <>
                  <Mail size={16} /> Subscribed
                </>
              ) : (
                <>
                  <Send size={16} /> Subscribe
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
