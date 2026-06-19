"use client";

import { motion } from "framer-motion";
import type { VisitPhoto } from "@/data/visits";
import { fadeUp, stagger, transition } from "@/lib/motion";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { LightboxTrigger } from "@/components/ui/Lightbox";
import type { LightboxImage } from "@/components/ui/Lightbox";

export function VisitGallery({ visits }: { visits: VisitPhoto[] }) {
  const lightboxImages: LightboxImage[] = visits.map((v) => ({
    src: v.image,
    alt: v.title,
    caption: v.title,
  }));

  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-48px" }}
      variants={stagger.container}
    >
      {visits.map((visit, index) => (
        <motion.div key={visit.id} variants={fadeUp} transition={transition.base}>
          <InteractiveCard bodyClassName="overflow-hidden p-0">
            <LightboxTrigger images={lightboxImages} index={index} className="w-full">
              <OptimizedImage
                src={visit.image}
                alt={visit.title}
                fit="contain"
                frameClassName="min-h-[300px] w-full sm:min-h-[360px]"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={index < 2}
                quality={85}
                className="transition-smooth hover:scale-[1.01]"
              />
            </LightboxTrigger>
            <div className="p-6">
              <h2 className="font-display text-xl text-foreground sm:text-2xl">{visit.title}</h2>
              {visit.description && (
                <p className="mt-2 text-sm leading-relaxed text-muted">{visit.description}</p>
              )}
              {visit.visitNote && (
                <blockquote className="mt-5 border-l-2 border-gold/40 bg-surface-elevated/50 py-4 pl-5 pr-2">
                  <p className="font-display text-base italic leading-relaxed text-muted sm:text-lg">
                    &ldquo;{visit.visitNote.quote}&rdquo;
                  </p>
                  <footer className="mt-4">
                    <p className="text-sm font-semibold text-foreground">{visit.visitNote.author}</p>
                    <p className="text-sm italic text-muted">{visit.visitNote.authorTitle}</p>
                  </footer>
                </blockquote>
              )}
            </div>
          </InteractiveCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
