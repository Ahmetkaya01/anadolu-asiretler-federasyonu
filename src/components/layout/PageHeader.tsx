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
    <div className="relative overflow-hidden border-b border-gold/20 bg-navy">
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-burgundy/20 via-transparent to-gold/10"
        aria-hidden
        animate={{ opacity: [0.4, 0.65, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
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
              <ol className="flex flex-wrap items-center gap-2 text-xs text-cream/60">
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
              "font-display text-3xl font-semibold text-cream sm:text-4xl lg:text-5xl",
            )}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              variants={fadeUp}
              transition={{ ...transition.base, delay: 0.06 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-cream/75"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </div>
  );
}
