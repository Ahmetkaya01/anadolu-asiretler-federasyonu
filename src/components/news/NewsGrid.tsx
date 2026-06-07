"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { NewsArticle } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { Input } from "@/components/ui/Input";
import { fadeUp, stagger, transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Filter = "all" | "haber" | "duyuru" | "faaliyet";

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "Tümü" },
  { key: "haber", label: "Haberler" },
  { key: "duyuru", label: "Duyurular" },
  { key: "faaliyet", label: "Faaliyetler" },
];

function categoryLabel(category: NewsArticle["category"]) {
  if (category === "haber") return { text: "Haber", variant: "navy" as const };
  if (category === "duyuru") return { text: "Duyuru", variant: "burgundy" as const };
  return { text: "Faaliyet", variant: "gold" as const };
}

export function NewsGrid({ posts }: { posts: NewsArticle[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts
      .filter((p) => (filter === "all" ? true : p.category === filter))
      .filter((p) => {
        if (!q) return true;
        return (
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)
        );
      });
  }, [filter, posts, query]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition.base}
        className="flex flex-col gap-4 rounded-md border border-navy/10 bg-white/70 p-4 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="relative flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={cn(
                "relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-smooth",
                filter === f.key
                  ? "text-cream"
                  : "bg-cream-dark/60 text-navy hover:bg-cream-dark",
              )}
            >
              {filter === f.key && (
                <motion.span
                  layoutId="news-filter-pill"
                  className="absolute inset-0 rounded-full bg-navy"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f.label}</span>
            </button>
          ))}
        </div>
        <div className="w-full sm:max-w-sm">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ara: başlık veya özet…"
            aria-label="Haberlerde ara"
          />
        </div>
      </motion.div>

      <motion.div
        className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={stagger.container}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((post) => {
            const cat = categoryLabel(post.category);
            return (
              <motion.div
                key={post.slug}
                layout
                variants={fadeUp}
                transition={transition.base}
                exit={{ opacity: 0, scale: 0.96 }}
              >
                <InteractiveCard>
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant={cat.variant}>{cat.text}</Badge>
                    <span className="text-xs font-medium text-slate">{post.date}</span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl leading-tight text-navy">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{post.excerpt}</p>
                  <div className="mt-6">
                    <Link
                      href={`/haberler/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-burgundy transition-smooth hover:gap-3 hover:text-burgundy-dark"
                    >
                      Detayı Gör <span aria-hidden>→</span>
                    </Link>
                  </div>
                </InteractiveCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 text-center text-sm text-slate"
        >
          Aramanıza uygun içerik bulunamadı.
        </motion.p>
      )}
    </div>
  );
}
