"use client";

import { motion } from "framer-motion";
import { Card, CardBody } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type InteractiveCardProps = {
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
};

/** Hover’da yumuşak kaldırma ve gölge */
export function InteractiveCard({
  children,
  className,
  bodyClassName,
}: InteractiveCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="h-full"
    >
      <Card
        className={cn(
          "group h-full transition-shadow duration-500 hover:border-gold/30 hover:shadow-[0_20px_50px_-25px_rgba(11,31,58,0.45)]",
          className,
        )}
      >
        <CardBody className={cn("h-full", bodyClassName)}>{children}</CardBody>
      </Card>
    </motion.div>
  );
}
