"use client";

import { motion } from "framer-motion";
import type { VisitPhoto } from "@/data/visits";
import { fadeUp, stagger, transition } from "@/lib/motion";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

export function VisitGallery({ visits }: { visits: VisitPhoto[] }) {
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
            <div className="p-6">
              <h2 className="font-display text-xl text-navy sm:text-2xl">{visit.title}</h2>
              {visit.description && (
                <p className="mt-2 text-sm leading-relaxed text-slate">{visit.description}</p>
              )}
              {visit.visitNote && (
                <blockquote className="mt-5 border-l-2 border-gold/40 bg-cream-dark/50 py-4 pl-5 pr-2">
                  <p className="font-display text-base italic leading-relaxed text-slate sm:text-lg">
                    &ldquo;{visit.visitNote.quote}&rdquo;
                  </p>
                  <footer className="mt-4">
                    <p className="text-sm font-semibold text-navy">{visit.visitNote.author}</p>
                    <p className="text-sm italic text-slate">{visit.visitNote.authorTitle}</p>
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
