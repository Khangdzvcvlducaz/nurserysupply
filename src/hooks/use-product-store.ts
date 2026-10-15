"use client";

import { create } from "zustand";

/**
 * Store for the Product Detail modal.
 * `openId` is the product id to show, or null when closed.
 */
type ProductStoreState = {
  openId: string | null;
  open: (id: string) => void;
  close: () => void;
};

export const useProductStore = create<ProductStoreState>((set) => ({
  openId: null,
  open: (id) => set({ openId: id }),
  close: () => set({ openId: null }),
}));

/**
 * Store for the Lightbox (fullscreen image preview).
 * Stacks above the product detail modal (z-index 95 vs 80).
 */
type LightboxStoreState = {
  src: string | null;
  open: (src: string) => void;
  close: () => void;
};

export const useLightboxStore = create<LightboxStoreState>((set) => ({
  src: null,
  open: (src) => set({ src }),
  close: () => set({ src: null }),
}));
