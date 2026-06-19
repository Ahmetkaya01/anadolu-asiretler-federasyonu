"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { fadeUp, stagger, transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
};

/** Alt sayfalar için kurumsal başlık bandı */
export function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden border-b border-gold/20 bg-navy pattern-anatolian">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-burgundy/25 via-navy to-gold/10"
        aria-hidden
      />
      <Container className="relative py-14 sm:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger.container}
        >
          {breadcrumb && breadcrumb.length > 0 && (
            <motion.nav
              aria-label="Breadcrumb"
              className="mb-4"
              variants={fadeUp}
              transition={transition.fast}
            >
              <ol className="flex flex-wrap items-center gap-2 text-sm text-cream/60">
                {breadcrumb.map((item, i) => (
                  <li key={item.label} className="flex items-center gap-2">
                    {i > 0 && <span aria-hidden>/</span>}
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="transition-smooth hover:text-gold"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-gold">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </motion.nav>
          )}
          <motion.h1
            variants={fadeUp}
            transition={transition.base}
            className={cn(
              "font-display text-4xl font-semibold text-cream sm:text-5xl lg:text-6xl",
            )}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              variants={fadeUp}
              transition={{ ...transition.base, delay: 0.06 }}
              className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/75"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </div>
  );
}
