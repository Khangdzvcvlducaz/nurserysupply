"use client";

import { useEffect } from "react";

/**
 * Reveal-on-scroll: watches all elements with the `.ns-reveal` class and
 * adds `.ns-in` when they intersect the viewport. Subtle fade-up.
 * Respects prefers-reduced-motion (no transform, instant show).
 */
export function useReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".ns-reveal")
    );

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      nodes.forEach((n) => n.classList.add("ns-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("ns-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}
