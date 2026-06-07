"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { VisitPhoto } from "@/data/visits";
import { fadeUp, stagger, transition } from "@/lib/motion";
import { InteractiveCard } from "@/components/ui/InteractiveCard";

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
            <div className="relative aspect-[4/3] overflow-hidden bg-navy/5">
              <Image
                src={visit.image}
                alt={visit.title}
                fill
                className="object-cover object-center transition-smooth hover:scale-[1.02]"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={index < 2}
              />
            </div>
            <div className="p-6">
              <h2 className="font-display text-xl text-navy sm:text-2xl">{visit.title}</h2>
              {visit.description && (
                <p className="mt-2 text-sm leading-relaxed text-slate">{visit.description}</p>
              )}
            </div>
          </InteractiveCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
