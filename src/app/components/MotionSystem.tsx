"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function MotionSystem() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const root = document.documentElement;
    const progress = progressRef.current;

    root.classList.toggle("motion-ready", !reducedMotion);

    let animationFrame = 0;
    const updateProgress = () => {
      if (!progress) return;

      cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const amount = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
        progress.style.transform = `scaleX(${amount})`;
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    let observer: IntersectionObserver | null = null;
    if (!reducedMotion) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );

      revealTargets.forEach((target, index) => {
        target.style.setProperty("--reveal-delay", `${(index % 4) * 55}ms`);
        observer?.observe(target);
      });
    } else {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
    }

    const tiltCleanups: Array<() => void> = [];
    if (!reducedMotion && finePointer) {
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((target) => {
        const handleMove = (event: PointerEvent) => {
          const bounds = target.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          target.style.setProperty("--tilt-x", `${-y * 2.5}deg`);
          target.style.setProperty("--tilt-y", `${x * 2.5}deg`);
          target.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`);
          target.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`);
        };

        const handleLeave = () => {
          target.style.setProperty("--tilt-x", "0deg");
          target.style.setProperty("--tilt-y", "0deg");
          target.style.setProperty("--glow-x", "50%");
          target.style.setProperty("--glow-y", "50%");
        };

        target.addEventListener("pointermove", handleMove);
        target.addEventListener("pointerleave", handleLeave);
        tiltCleanups.push(() => {
          target.removeEventListener("pointermove", handleMove);
          target.removeEventListener("pointerleave", handleLeave);
        });
      });
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      observer?.disconnect();
      tiltCleanups.forEach((cleanup) => cleanup());
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [pathname]);

  return <div ref={progressRef} className="scrollProgress" aria-hidden="true" />;
}
