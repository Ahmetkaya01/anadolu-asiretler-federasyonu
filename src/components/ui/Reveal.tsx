"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  once?: boolean;
};

/** Scroll ile yumuşak görünüm animasyonu */
export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={fadeUp}
      transition={{ ...transition.base, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
