# Task 5-7 — full-stack-developer work record

## Task
Add Product Detail modal + Lightbox features and update contact info to +84 981848702 / callmekai@nurserysupply.us, combined into the existing home page at `/`.

## Files created
- `src/lib/catalog-data.ts` — Product type, 16 PRODUCTS (with real z-cdn images mapped per product), GENUS_INFO, CAT_NAMES, STATUS, helpers `productsByGenus` / `galleryFor` / `findProduct` / `firstProductIdWithGenus`.
- `src/hooks/use-product-store.ts` — two zustand stores: `useProductStore` (openId / open / close) and `useLightboxStore` (src / open / close).
- `src/components/ns/product-detail.tsx` — `<ProductDetailModal />`: full-screen overlay (role=dialog, aria-modal), breadcrumb, 3-col pd-grid (thumbs | hero | info), Shopee-style hover-zoom layer, "View larger" pill + click-hero → lightbox, spec table (11 rows), SEND INQUIRY NOW button (closes modal + scrolls to #quote), WhatsApp note (+84 981848702), 6-button social share row (Facebook/X/Pinterest/Telegram/LinkedIn/WhatsApp), related-products grid (same genus).
- `src/components/ns/lightbox.tsx` — `<Lightbox />`: fixed overlay z-95, rgba(14,42,30,.85) bg, click-outside / X / Escape dismiss.

## Files modified
- `src/components/ns/hot-products.tsx` — cards are now clickable (role=button, tabindex=0, Enter/Space triggers open); pulls 4 featured products from `PRODUCTS`; whole-card hover preserved + a "View details" pill that animates in on hover.
- `src/components/ns/shop-by-genus.tsx` — each genus card now `preventDefault` + calls `open(firstProductIdWithGenus(slug))`. The elegant CSS-only hover is UNCHANGED (lift -6px, image scale 1.06, gradient overlay, arrow nudge).
- `src/app/page.tsx` — mounts `<ProductDetailModal />` and `<Lightbox />` at the end of the root wrapper (after Footer + WhatsAppFloat).
- `src/components/ns/header.tsx` — phone + WhatsApp links now point to `tel:+84981848702` and `https://wa.me/84981848702?text=...`.
- `src/components/ns/footer.tsx` — wholesale desk now shows `callmekai@nurserysupply.us` + `+84 981848702` (mailto + tel:+84981848702).
- `src/components/ns/whatsapp-float.tsx` — `wa.me/84981848702?text=...`.
- `src/components/ns/quote-form.tsx` — both WhatsApp CTAs (the side CTA + the success-state "Open WhatsApp") point to `wa.me/84981848702` with the same pre-filled text messages.
- `src/app/globals.css` — appended ~410 lines of pd-* + lightbox CSS (overlay backdrop, scrollable card, breadcrumb, pd-grid, pd-thumbs with sticky vertical layout, pd-main with hover-zoom layer, pd-larger pill, pd-spec-row table, pd-share row, related-grid, responsive at 1180/980/560px breakpoints, and a `prefers-reduced-motion` block disabling all pd transitions/animations). Added a sentinel comment near the top to force Turbopack CSS chunk recompile.

## Verification results (agent-browser)
- Page title correct; no console/runtime errors.
- Hot Products: 4 cards, role=button, tabindex=0, aria-label set.
- Click hot card (Cream Brulee) → modal opens with: breadcrumb "Home › Products Catalog › Monstera deliciosa 'Cream Brulee'", 6 thumbnail gallery (all real z-cdn images — ca601fef3e71, 57e903ca3e0f, 750e39fd8e20, b523973032ef, 1544695fef31, e44e9e3db623), h1 with size + "Phytosanitary Certified", 11 spec rows (Specification / Growth Form / Family Name / Mature Foliage Color(s) & Shape / Preferred Climate / Propagation / Transportation / Plantlet Size / MOQ / FOB Price / Availability), 6 share links with real sharer URLs (Facebook/X/Pinterest/Telegram/LinkedIn/WhatsApp), 3 related cards (the other Monstera varieties), body scroll locked (`overflow: hidden`).
- Click thumbnail 2 → active thumb changes, hero swaps to that thumbnail's image with the .swap opacity transition, green pd-tick appears on the new active thumb.
- Hover hero → pd-zoom layer becomes opacity:1, background-image = hero, background-size 200% 200%, background-position follows cursor (verified 50% 49.94% → 34.07% 57.72% on cursor move).
- Click "View larger" → lightbox opens (z-index 95, rgba(14,42,30,.85) bg, img max-width 900px, max-height 88vh, role=dialog aria-modal=true).
- Escape (1st) → lightbox closes, modal stays. Escape (2nd) → modal closes, body scroll re-enables. ✓
- X button + backdrop click also close the modal cleanly.
- Shop by genus: clicking each genus card opens a representative product — Monstera → m-cream, Philodendron → p-wizard (related: Pink Princess, gloriosum), Anthurium → an-crys, Caladium → c-white (no related, only 1 product in genus), Other → h-krim. ✓
- Related card click → modal content swaps (verified Albo Variegata), modal scrollTop resets to 0. ✓
- SEND INQUIRY NOW button → modal closes, body scroll re-enables, page smooth-scrolls to #quote section (quoteTop ≈ 0). ✓
- Contact info verified across all sites: header tel:+84981848702 / wa.me/84981848702 (with text); footer mailto:callmekai@nurserysupply.us / +84 981848702 / tel:+84981848702; whatsapp-float wa.me/84981848702?text=...; quote-form both CTAs wa.me/84981848702; modal inquiry note wa.me/84981848702 / +84 981848702.
- Mobile (375×812): pd-grid reflows to single column, pd-thumbs becomes a horizontal scroll strip (64×64 thumbs), body still locks scroll while modal open. ✓
- `bun run lint` — clean (no errors, no warnings).
- agent-browser errors — empty.

## Key decisions
- Used **zustand** (already installed) for both the modal-open state (`useProductStore`) and lightbox-open state (`useLightboxStore`), with the lightbox at z-95 and the modal at z-80 so the lightbox stacks above the modal.
- Split the modal into a **wrapper** (handles body-scroll lock + Escape + body-overflow restore on unmount, never touches React state in the effect) and an **inner content component keyed by openId**. The keyed remount pattern resets all per-product state (activeIdx, heroSrc, swapping, zoomPos, zoomOn) cleanly without setState-in-effect (which trips the `react-hooks/set-state-in-effect` lint rule). The scroll-to-top on remount uses an effect that only touches the closest scrollable ancestor's scrollTop — no React state involved.
- Escape handler in the modal **checks the lightbox store**: if the lightbox is currently open, the modal's Escape is a no-op so the lightbox handles it (one Escape closes the lightbox first, a second Escape closes the modal — matches the spec).
- For the 6-thumbnail gallery, the helper `galleryFor(product)` returns `[product.image, ...5 other real z-cdn images]` drawn from same-genus product images + the genus category image + other real CDN images, de-duped. Never uses picsum.
- Reused the existing `.ns-prod-card` styling for the related-products mini-cards (the `pd-related-card` class just adds `cursor: pointer` on top of it). The HotProducts cards also reuse `.ns-prod-card` with an extra `ns-prod-card-clickable` modifier that adds `cursor: pointer`, a focus-visible ring, and a hover-revealed "View details" pill.
- All 6 social share buttons use lucide icons where available (Facebook, Twitter, Send for WhatsApp/Telegram) and `Share2` for Pinterest/LinkedIn with descriptive aria-labels.
- Modal close button + lightbox close button rotate 90° on hover for a small visual confirmation.
- Added a sentinel comment in globals.css to force Turbopack to recompile the CSS chunk hash (the dev server had been serving a stale chunk after the first CSS edit; touching alone didn't change the chunk hash).

## Caveats
- `pd-thumb.on` uses border-color `--ok` (green) to mark the active thumbnail; the green pd-tick badge is hidden until the thumb is active (opacity 0 → 1).
- For products in genera with only one variety (Caladium, Other), the "More {genus}" related section is omitted (no related products to show).
- The hover-zoom layer is gated by `@media (hover:hover) and (pointer:fine)` so touch devices don't get a broken hover; on touch, tapping the hero still opens the lightbox via the onClick handler.
- Body scroll is locked while modal is open via `document.body.style.overflow = 'hidden'` (restored on unmount). When the lightbox opens from inside the modal, the modal's lock stays in effect — the lightbox does not need to re-lock because the modal's effect is still active. The lightbox only listens for Escape.
