import { useEffect } from "react";
import Lenis from "lenis";

function getNavScrollOffset() {
  const value = getComputedStyle(document.documentElement).getPropertyValue("--nav-scroll-offset").trim();
  if (!value) return 88;
  if (value.endsWith("rem")) return parseFloat(value) * parseFloat(getComputedStyle(document.documentElement).fontSize);
  if (value.endsWith("px")) return parseFloat(value);
  return parseFloat(value) || 88;
}

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -getNavScrollOffset() });
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);
  return null;
}
