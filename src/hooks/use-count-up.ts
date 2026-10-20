"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Count-up animation hook. Respects prefers-reduced-motion (returns
 * the final value immediately without animating). Triggers when the
 * element enters the viewport.
 */
export function useCountUp(
  target: number,
  options: { duration?: number; suffix?: string; decimals?: number } = {}
) {
  const { duration = 1600, suffix = "", decimals = 0 } = options;
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      startedRef.current = true;
      // Use rAF instead of synchronous setState to avoid cascading renders.
      const id = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(id);
    }

    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min((now - start) / duration, 1);
              // easeOutExpo
              const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
              setValue(target * eased);
              if (t < 1) {
                requestAnimationFrame(tick);
              } else {
                setValue(target);
              }
            };
            requestAnimationFrame(tick);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    io.observe(node);
    return () => io.disconnect();
  }, [target, duration]);

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return { value, display: `${display}${suffix}`, ref };
}
