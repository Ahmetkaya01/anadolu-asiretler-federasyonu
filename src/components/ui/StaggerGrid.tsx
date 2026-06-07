"use client";

import { Children, isValidElement } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

type StaggerGridProps = {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
};

/** Alt sayfa grid içeriklerinde kademeli scroll animasyonu */
export function StaggerGrid({
  children,
  className,
  itemClassName,
}: StaggerGridProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-48px" }}
      variants={stagger.container}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        return (
          <motion.div
            key={child.key ?? index}
            className={cn(itemClassName)}
            variants={fadeUp}
            transition={transition.base}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
