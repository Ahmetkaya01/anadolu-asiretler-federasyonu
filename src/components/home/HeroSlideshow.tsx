"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { HeroSlide } from "@/data/hero-slides";
import { HERO_SLIDE_INTERVAL_MS } from "@/data/hero-slides";
import { easeSmooth } from "@/lib/motion";
import { cn } from "@/lib/utils";

type HeroSlideshowProps = {
  slides: HeroSlide[];
  className?: string;
  onSlideChange?: (index: number) => void;
};

export function HeroSlideshow({ slides, className, onSlideChange }: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(index % slides.length);
      onSlideChange?.(index % slides.length);
    },
    [slides.length, onSlideChange],
  );

  useEffect(() => {
    if (reducedMotion || slides.length <= 1) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % slides.length;
        onSlideChange?.(next);
        return next;
      });
    }, HERO_SLIDE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [reducedMotion, slides.length, onSlideChange]);

  const activeSlide = slides[activeIndex] ?? slides[0];

  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-navy", className)}>
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={activeSlide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 1.2, ease: easeSmooth }}
        >
          <Image
            src={activeSlide.src}
            alt={activeSlide.alt}
            fill
            className={cn("object-cover object-center", !reducedMotion && "hero-ken-burns")}
            sizes="100vw"
            priority={activeIndex === 0}
            quality={90}
          />
        </motion.div>
      </AnimatePresence>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/55 to-navy/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-navy/40"
        aria-hidden
      />
      <div className="hero-vignette pointer-events-none absolute inset-0" aria-hidden />

      {slides.length > 1 && (
        <div
          className="absolute bottom-24 left-1/2 z-10 flex -translate-x-1/2 gap-2 sm:bottom-28"
          role="tablist"
          aria-label="Hero görselleri"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Görsel ${index + 1}`}
              onClick={() => goTo(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                index === activeIndex
                  ? "w-8 bg-gold"
                  : "w-1.5 bg-cream/40 hover:bg-cream/70",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
