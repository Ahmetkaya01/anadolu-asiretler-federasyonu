"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
};

type LightboxProps = {
  images: LightboxImage[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
};

export function Lightbox({ images, initialIndex = 0, open, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, goPrev, goNext]);

  if (!open || images.length === 0) return null;

  const current = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Görsel galerisi"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-smooth hover:bg-cream/10"
        aria-label="Kapat"
      >
        <X className="h-5 w-5" />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 text-cream transition-smooth hover:bg-cream/10"
            aria-label="Önceki görsel"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cream/20 text-cream transition-smooth hover:bg-cream/10"
            aria-label="Sonraki görsel"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <div className="max-h-[85vh] max-w-5xl text-center">
        <div className="relative mx-auto aspect-[4/3] max-h-[70vh] w-full">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            className="object-contain"
            sizes="90vw"
            quality={90}
          />
        </div>
        {current.caption && (
          <p className="mt-4 text-sm text-cream/80">{current.caption}</p>
        )}
        {images.length > 1 && (
          <p className="mt-2 text-xs text-cream/50">
            {index + 1} / {images.length}
          </p>
        )}
      </div>
    </div>
  );
}

type LightboxTriggerProps = {
  images: LightboxImage[];
  index: number;
  children: React.ReactNode;
  className?: string;
};

export function LightboxTrigger({ images, index, children, className }: LightboxTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn("cursor-zoom-in text-left", className)}
        aria-label="Görseli büyüt"
      >
        {children}
      </button>
      <Lightbox
        key={index}
        images={images}
        initialIndex={index}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
