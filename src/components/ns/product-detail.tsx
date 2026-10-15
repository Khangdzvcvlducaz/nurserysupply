"use client";

import { useEffect, useRef, useState } from "react";
import {
  X,
  Check,
  Search,
  Send,
  Facebook,
  Twitter,
  Share2,
  ArrowRight,
} from "lucide-react";
import { useProductStore, useLightboxStore } from "@/hooks/use-product-store";
import {
  GENUS_INFO,
  CAT_NAMES,
  STATUS,
  galleryFor,
  findProduct,
  productsByGenus,
  type Product,
} from "@/lib/catalog-data";

// Real contact values for the WhatsApp note in the inquiry block.
const WHATSAPP_URL = "https://wa.me/84981848702";
const WHATSAPP_DISPLAY = "+84 981848702";

/**
 * Product Detail modal — a full-screen overlay rendered within the home
 * page. Opened by useProductStore.open(id). Dismiss via X button, backdrop
 * click, or Escape. Locks body scroll while open.
 *
 * Structure: an outer wrapper that handles openId, body scroll lock, and
 * the Escape key; an inner content component keyed by openId so that all
 * per-product state (active thumb, hero src, zoom position) resets
 * cleanly when the product changes (no setState-in-effect needed).
 */
export function ProductDetailModal() {
  const openId = useProductStore((s) => s.openId);
  const close = useProductStore((s) => s.close);
  const isOpen = openId !== null;

  // Lock body scroll + Escape-to-close while modal is open. This effect
  // only touches an external system (document.body / window listener),
  // never React state, so it does not trigger the set-state-in-effect
  // lint rule.
  // When the lightbox is also open (stacked above), Escape should close
  // the lightbox first — so we skip our handler if the lightbox is open.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (useLightboxStore.getState().src) return; // lightbox will handle it
      close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <ProductDetailContent
      // Keyed remount: per-product state resets automatically when the
      // openId changes (no need for setState-in-effect).
      key={openId}
      openId={openId as string}
      onClose={close}
    />
  );
}

function ProductDetailContent({
  openId,
  onClose,
}: {
  openId: string;
  onClose: () => void;
}) {
  const openLb = useLightboxStore((s) => s.open);
  const product = findProduct(openId);

  // Active thumbnail index (0..5) — initial 0, resets on remount.
  const [activeIdx, setActiveIdx] = useState(0);
  // Hero image src — initial product.image, resets on remount.
  const [heroSrc, setHeroSrc] = useState<string>(
    product ? product.image : "",
  );
  // Toggles the .swap opacity transition (set true on swap, cleared on load).
  const [swapping, setSwapping] = useState(false);
  // Background-position % for the hover-zoom layer.
  const [zoomPos, setZoomPos] = useState<string>("50% 50%");
  // Whether the zoom layer is visible (only on hover/fine pointer).
  const [zoomOn, setZoomOn] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll modal to top on mount. Only touches external DOM, no setState.
  // The scroll container is .ns-pd-overlay (the outer wrapper has
  // overflow-y: auto); the .ns-pd-card lives inside it.
  useEffect(() => {
    const overlay = scrollRef.current?.closest(".ns-pd-overlay") as HTMLElement | null;
    if (overlay) overlay.scrollTop = 0;
  }, []);

  if (!product) return null;

  const gallery = galleryFor(product);
  const genus = GENUS_INFO[product.cat] ?? GENUS_INFO.other;
  const status = STATUS[product.status] ?? STATUS["in-stock"];

  const longDesc = `${product.desc} Ships as a hardened tissue-culture plantlet sized ${product.size}, grown from indexed mother stock for consistent variegation across the whole batch. Phytosanitary certificate and full export documentation are included with every shipment; mixed-variety orders are welcome from MOQ ${product.moq} plantlets.`;

  const folio = `${product.variety} — ${genus.foliage}`;

  const specRows: [string, string][] = [
    ["Specification", product.spec ?? "TC single"],
    ["Growth Form", genus.growth],
    ["Family Name", genus.family],
    ["Mature Foliage Color(s) & Shape", folio],
    ["Preferred Climate", genus.climate],
    ["Propagation", "Tissue Culture (TC)"],
    ["Transportation", "Express / Air"],
    ["Plantlet Size", product.size],
    ["MOQ", `${product.moq} plantlets (mixed orders welcome)`],
    ["FOB Price", `From ${product.price} / plantlet`],
    ["Availability", status.label],
  ];

  const related = productsByGenus(product.cat)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  // --- handlers -------------------------------------------------------

  const onThumbClick = (idx: number) => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
    setSwapping(true);
    // small delay to allow the .swap opacity transition to start
    window.setTimeout(() => {
      setHeroSrc(gallery[idx]);
    }, 120);
  };

  const onHeroLoad = () => {
    if (swapping) setSwapping(false);
  };

  const onHeroMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setZoomPos(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  };

  const openLightbox = () => openLb(heroSrc);

  const onSendInquiry = () => {
    onClose();
    // Wait one tick for the modal to unmount + body scroll to restore
    // before smooth-scrolling to the quote section.
    window.setTimeout(() => {
      const el = document.getElementById("quote");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  // --- share link builders (open real sharer URLs in new tabs) --------
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTxt = encodeURIComponent(
    `${product.name} — wholesale tissue-culture plantlet`,
  );
  const shareImg = encodeURIComponent(product.image);
  const sharePage = encodeURIComponent(shareUrl);
  const shareLinks: {
    name: string;
    href: string;
    label: string;
    icon: React.ReactNode;
  }[] = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${sharePage}`,
      label: "Share on Facebook",
      icon: <Facebook size={15} />,
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${sharePage}&text=${shareTxt}`,
      label: "Share on X (Twitter)",
      icon: <Twitter size={15} />,
    },
    {
      name: "Pinterest",
      href: `https://pinterest.com/pin/create/button/?url=${sharePage}&media=${shareImg}&description=${shareTxt}`,
      label: "Share on Pinterest",
      icon: <Share2 size={15} />,
    },
    {
      name: "Telegram",
      href: `https://t.me/share/url?url=${sharePage}&text=${shareTxt}`,
      label: "Share on Telegram",
      icon: <Send size={15} />,
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${sharePage}`,
      label: "Share on LinkedIn",
      icon: <Share2 size={15} />,
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${shareTxt}%20${sharePage}`,
      label: "Share on WhatsApp",
      icon: <Send size={15} />,
    },
  ];

  // --- render ---------------------------------------------------------
  return (
    <div
      className="ns-pd-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Product detail — ${product.name}`}
      onClick={onBackdropClick}
    >
      <div className="ns-pd-card" ref={scrollRef}>
        <button
          className="ns-pd-close"
          onClick={onClose}
          aria-label="Close product detail"
        >
          <X size={22} />
        </button>

        <nav className="ns-pd-crumb" aria-label="Breadcrumb">
          <a href="#top">Home</a>
          <span aria-hidden="true">›</span>
          <a href="#catalog" onClick={onClose}>Products Catalog</a>
          <span aria-hidden="true">›</span>
          <span className="cur">{product.name}</span>
        </nav>

        <div className="pd-grid">
          {/* ---------- Thumbnails (vertical on desktop, horizontal on mobile) ---------- */}
          <div className="pd-thumbs" role="tablist" aria-label="Product photos">
            {gallery.map((url, i) => (
              <button
                key={url + i}
                className={`pd-thumb ${i === activeIdx ? "on" : ""}`}
                role="tab"
                aria-selected={i === activeIdx}
                aria-label={`Photo ${i + 1}`}
                onClick={() => onThumbClick(i)}
              >
                <img src={url} alt="" width={92} height={92} loading="lazy" />
                <span className="pd-tick" aria-hidden="true">
                  <Check size={12} strokeWidth={3} />
                </span>
              </button>
            ))}
          </div>

          {/* ---------- Hero image with hover-zoom layer ---------- */}
          <div
            className="pd-main"
            onMouseMove={onHeroMove}
            onMouseEnter={() => setZoomOn(true)}
            onMouseLeave={() => setZoomOn(false)}
          >
            <img
              src={heroSrc}
              alt={product.name}
              width={900}
              height={900}
              className={swapping ? "swap" : undefined}
              onLoad={onHeroLoad}
              onClick={openLightbox}
            />
            <div
              className="pd-zoom"
              aria-hidden="true"
              style={{
                backgroundImage: `url("${heroSrc}")`,
                backgroundPosition: zoomPos,
                opacity: zoomOn ? 1 : 0,
              }}
            />
            <button
              className="pd-larger"
              onClick={(e) => {
                e.stopPropagation();
                openLightbox();
              }}
              aria-label="View larger image"
            >
              <Search size={14} /> View larger
            </button>
          </div>

          {/* ---------- Info column ---------- */}
          <div className="pd-info">
            <h1>
              {product.name} Variegated Tissue Culture Plantlet, {product.size},
              Phytosanitary Certified
            </h1>
            <p className="pd-desc">{longDesc}</p>

            <div className="pd-spec">
              {specRows.map(([k, v]) => (
                <div className="pd-spec-row" key={k}>
                  <span className="dt">{k}</span>
                  <span className="dd">{v}</span>
                </div>
              ))}
            </div>

            <div className="pd-inq">
              <button
                className="ns-btn ns-btn-primary"
                onClick={onSendInquiry}
              >
                SEND INQUIRY NOW <Send size={16} />
              </button>
              <p className="pd-inq-note">
                Replies within 1 business day · or WhatsApp{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </p>
            </div>

            <div className="pd-share">
              <span className="k">Share:</span>
              {shareLinks.map((s) => (
                <a
                  key={s.name}
                  className={`sh sh-${s.name.toLowerCase()}`}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Related products ---------- */}
        {related.length > 0 && (
          <section className="pd-related">
            <div className="pd-related-head">
              <div>
                <span className="ns-eyebrow">Related</span>
                <h2 className="pd-related-h2">More {CAT_NAMES[product.cat]}</h2>
              </div>
              <a
                href="#catalog"
                className="ns-btn ns-btn-outline"
                onClick={onClose}
              >
                All varieties <ArrowRight size={16} />
              </a>
            </div>
            <div className="ns-p-grid pd-related-grid">
              {related.map((rp) => (
                <RelatedCard
                  key={rp.id}
                  product={rp}
                  onOpen={() => useProductStore.getState().open(rp.id)}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

// ---- related-product mini card (reuses .ns-prod-card styling) ------
function RelatedCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: () => void;
}) {
  const st = STATUS[product.status] ?? STATUS["in-stock"];
  const statusCls = st.cls === "in" ? "" : st.cls === "lim" ? "lim" : "pre";

  return (
    <article
      className="ns-prod-card pd-related-card"
      role="button"
      tabIndex={0}
      aria-label={`View details of ${product.name}`}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <div className="ns-prod-media">
        <img
          src={product.image}
          alt={`${product.name} — ${product.variety}`}
          width={600}
          height={600}
          loading="lazy"
        />
        <span className={`ns-status-pill ${statusCls}`}>{st.label}</span>
      </div>
      <div className="ns-prod-body">
        <span className="ns-prod-variety">{product.variety}</span>
        <span className="ns-prod-name">{product.name}</span>
        <p className="ns-prod-desc">{product.desc}</p>
        <div className="ns-prod-foot">
          <span className="ns-prod-price">
            {product.price}
            <small> / plantlet</small>
          </span>
          <span className="ns-prod-moq">MOQ {product.moq}</span>
        </div>
      </div>
    </article>
  );
}
