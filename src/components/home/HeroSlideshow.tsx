"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { HeroSlide } from "@/data/hero-slides";
import {
  HERO_SLIDE_FADE_MS,
  HERO_SLIDE_INTERVAL_MS,
} from "@/data/hero-slides";
import { easeSmooth } from "@/lib/motion";
import { cn } from "@/lib/utils";

type HeroSlideshowProps = {
  slides: HeroSlide[];
  className?: string;
  /** Yan panelde tam boyutlu, belirgin görseller */
  prominent?: boolean;
  onSlideChange?: (index: number) => void;
};

function slideImageClass(slide: HeroSlide, prominent: boolean) {
  const fit = slide.fit ?? (prominent ? "contain" : "cover");
  return cn(
    fit === "contain"
      ? "object-contain object-center p-3 sm:p-5 lg:p-6"
      : "object-cover object-center",
    !prominent && fit === "cover" && "hero-ken-burns",
  );
}

export function HeroSlideshow({
  slides,
  className,
  prominent = false,
  onSlideChange,
}: HeroSlideshowProps) {
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

  const fadeDuration = reducedMotion ? 0 : HERO_SLIDE_FADE_MS / 1000;
  const activeSlide = slides[activeIndex] ?? slides[0];

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-navy",
        prominent ? "h-full min-h-[42vh] lg:min-h-full" : "absolute inset-0",
        className,
      )}
    >
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={activeSlide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: fadeDuration, ease: easeSmooth }}
        >
          <Image
            src={activeSlide.src}
            alt={activeSlide.alt}
            fill
            className={slideImageClass(activeSlide, prominent)}
            style={{ objectPosition: activeSlide.objectPosition }}
            sizes={prominent ? "(max-width: 1024px) 100vw, 50vw" : "100vw"}
            priority={activeIndex <= 1}
            quality={92}
          />
        </motion.div>
      </AnimatePresence>

      {prominent ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 border border-gold/25 lg:border-l-0"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/80 to-transparent"
            aria-hidden
          />
        </>
      ) : (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/35 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-navy/20"
            aria-hidden
          />
        </>
      )}

      {slides.length > 1 && (
        <div
          className={cn(
            "absolute left-1/2 z-10 flex -translate-x-1/2 gap-1.5",
            prominent ? "bottom-4 sm:bottom-6" : "bottom-24 sm:bottom-28",
          )}
          role="tablist"
          aria-label="Hero görselleri"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Görsel ${index + 1}: ${slide.caption ?? slide.alt}`}
              onClick={() => goTo(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-7 bg-gold"
                  : "w-2 bg-cream/50 hover:bg-cream/80",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
