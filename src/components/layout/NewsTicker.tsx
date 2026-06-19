"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Megaphone } from "lucide-react";
import { getTickerItems } from "@/data/news";

export function NewsTicker() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  const headlines = getTickerItems();
  const items = [...headlines, ...headlines];

  return (
    <div
      className="relative overflow-hidden border-b border-gold/15 bg-burgundy-dark/95 text-cream"
      aria-label="Güncel duyurular"
    >
      <div className="flex items-stretch">
        <div className="flex shrink-0 items-center gap-2 border-r border-gold/20 bg-burgundy px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-gold">
          <Megaphone className="h-3.5 w-3.5" aria-hidden />
          Duyuru
        </div>
        <div className="relative flex min-w-0 flex-1 items-center overflow-hidden py-2.5">
          <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap px-6">
            {items.map((item, i) => (
              <Link
                key={`${item.label}-${i}`}
                href={item.href}
                className="text-sm text-cream/90 transition-smooth hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
