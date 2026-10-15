"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { useLightboxStore } from "@/hooks/use-product-store";

/**
 * Fullscreen image preview overlay.
 * Reads `src` from useLightboxStore. Stacks above the product detail modal
 * (z-index 95). Dismiss via X button, backdrop click, or Escape.
 */
export function Lightbox() {
  const src = useLightboxStore((s) => s.src);
  const close = useLightboxStore((s) => s.close);

  // Escape-to-close + lock body scroll while open.
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    // Body scroll is already locked by the product-detail modal when the
    // lightbox opens from inside it; we only listen for Escape here.
    return () => document.removeEventListener("keydown", onKey);
  }, [src, close]);

  if (!src) return null;

  return (
    <div
      className="ns-lightbox open"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <button
        className="ns-lb-x"
        onClick={close}
        aria-label="Close image preview"
      >
        <X size={22} />
      </button>
      <img
        src={src}
        alt="Product photo enlarged"
        className="ns-lb-img"
      />
    </div>
  );
}
