// =============================================================
// LEAD FORM CONFIG — where customer leads are sent
// =============================================================
// The site is a STATIC HTML export (Cloudflare Pages), so there is
// no Next.js server to receive the form POST. Instead the form is
// submitted to a form-service that stores the lead AND emails it to
// you. Below is the recommended setup.
//
// --- Web3Forms (recommended · free · no signup) ---
//   1. Open https://web3forms.com
//   2. Enter your email  -> callmekai@nurserysupply.us
//   3. They email you an access key (looks like "a1b2c3d4-e5f6-...").
//   4. Paste it below as LEAD_ACCESS_KEY (replace the placeholder).
//   5. Re-build (`bun run build`) and re-deploy to Cloudflare Pages.
//   Leads will arrive in your inbox + a dashboard at web3forms.com.
//
// --- Formspree (alternative · free 50/mo · dashboard) ---
//   1. Sign up at https://formspree.io, create a new form.
//   2. Copy the endpoint (looks like https://formspree.io/f/abcdwxyz).
//   3. Set LEAD_PROVIDER = "formspree" and LEAD_ENDPOINT to that URL.
// =============================================================

export const LEAD_PROVIDER: "web3forms" | "formspree" = "web3forms";

// Web3Forms access key. REPLACE with your real key from web3forms.com
export const LEAD_ACCESS_KEY = "c7a7d427-c883-4d41-a32e-00aec0565540";

// Formspree endpoint (used only when LEAD_PROVIDER === "formspree")
export const LEAD_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

// Where leads are emailed (shown in the UI as the contact address too)
export const LEAD_EMAIL_RECIPIENT = "callmekai@nurserysupply.us";

/** True when a real key/endpoint has been filled in. */
export function isLeadConfigured(): boolean {
  if (LEAD_PROVIDER === "web3forms") {
    return !LEAD_ACCESS_KEY.startsWith("YOUR_");
  }
  if (LEAD_PROVIDER === "formspree") {
    return !LEAD_ENDPOINT.includes("YOUR_");
  }
  return false;
}
