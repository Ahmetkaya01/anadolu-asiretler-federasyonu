"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, UserRound } from "lucide-react";
import type { ProvincialRepresentative } from "@/types";
import { turkiyeIlleri } from "@/data/turkiye-illeri";
import { buildRepresentativeMap } from "@/data/representatives";
import { fadeUp, transition } from "@/lib/motion";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { RepresentativeCard } from "@/components/representatives/RepresentativeCard";
import { cn } from "@/lib/utils";

const TOTAL_PROVINCES = 81;

type ProvinceRepresentativesExplorerProps = {
  representatives: ProvincialRepresentative[];
};

export function ProvinceRepresentativesExplorer({
  representatives,
}: ProvinceRepresentativesExplorerProps) {
  const representativeMap = useMemo(
    () => buildRepresentativeMap(representatives),
    [representatives],
  );

  const activeCount = representatives.length;
  const progressPercent = Math.round((activeCount / TOTAL_PROVINCES) * 100);

  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string>(
    representatives[0]?.id ?? turkiyeIlleri[0].id,
  );

  const filteredIller = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr-TR");
    if (!q) return turkiyeIlleri;
    return turkiyeIlleri.filter(
      (il) =>
        il.name.toLocaleLowerCase("tr-TR").includes(q) ||
        String(il.plate).includes(q),
    );
  }, [query]);

  const selectedIl = turkiyeIlleri.find((il) => il.id === selectedId);
  const selectedRep = representativeMap[selectedId];

  return (
    <div className="mt-12">
      <div className="mb-6 rounded-md border border-navy/10 bg-surface/80 p-5 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Teşkilatlanma İlerlemesi
            </p>
            <p className="mt-1 text-sm text-muted">
              <strong className="text-burgundy">{activeCount}</strong> / {TOTAL_PROVINCES} il
              temsilcisi atandı
            </p>
          </div>
          <Badge variant="gold">%{progressPercent}</Badge>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface-elevated">
          <div
            className="h-full rounded-full bg-gradient-to-r from-burgundy to-gold transition-all duration-700"
            style={{ width: `${progressPercent}%` }}
            role="progressbar"
            aria-valuenow={activeCount}
            aria-valuemin={0}
            aria-valuemax={TOTAL_PROVINCES}
            aria-label={`${activeCount} il temsilcisi atandı`}
          />
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-4 rounded-md border border-navy/10 bg-surface/80 p-4 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <Badge variant="gold">{turkiyeIlleri.length} İl</Badge>
          <span className="text-xs sm:text-sm">
            Bir ile tıklayarak temsilci bilgisini görüntüleyin
          </span>
        </div>
        <div className="w-full sm:max-w-xs">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="İl veya plaka ara…"
            aria-label="İl ara"
          />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7 xl:col-span-8">
          <div
            className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5"
            role="listbox"
            aria-label="Türkiye illeri"
          >
            {filteredIller.map((il) => {
              const hasRep = Boolean(representativeMap[il.id]);
              const isSelected = selectedId === il.id;

              return (
                <button
                  key={il.id}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => setSelectedId(il.id)}
                  className={cn(
                    "relative flex flex-col items-start rounded-md border px-2.5 py-2.5 text-left transition-smooth",
                    isSelected
                      ? "border-gold bg-navy text-cream shadow-md"
                      : hasRep
                        ? "border-gold/50 bg-surface shadow-sm hover:border-gold hover:shadow-md"
                        : "border-navy/10 bg-surface hover:border-navy/25 hover:bg-surface-elevated/30",
                  )}
                >
                  {hasRep && !isSelected && (
                    <span
                      className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-gold"
                      aria-hidden
                    />
                  )}
                  <span
                    className={cn(
                      "text-[10px] font-semibold uppercase tracking-wider",
                      isSelected ? "text-gold" : "text-muted",
                    )}
                  >
                    {String(il.plate).padStart(2, "0")}
                  </span>
                  <span className="mt-1 line-clamp-2 text-xs font-semibold leading-snug sm:text-sm">
                    {il.name}
                  </span>
                </button>
              );
            })}
          </div>

          {filteredIller.length === 0 && (
            <p className="mt-6 text-center text-sm text-muted">
              Aramanıza uygun il bulunamadı.
            </p>
          )}
        </div>

        <div className="lg:sticky lg:top-24 lg:col-span-5 xl:col-span-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 8 }}
              variants={fadeUp}
              transition={transition.base}
            >
              {selectedIl && (
                <div className="overflow-hidden rounded-md border border-navy/10 bg-surface shadow-card">
                  <div className="border-b border-gold/15 bg-navy px-5 py-4 text-cream">
                    <div className="flex items-center gap-2 text-gold">
                      <MapPin className="h-4 w-4" aria-hidden />
                      <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                        Plaka {String(selectedIl.plate).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-2 font-display text-2xl">{selectedIl.name}</h2>
                    <p className="mt-1 text-sm text-cream/75">İl Temsilciliği</p>
                  </div>

                  {selectedRep ? (
                    <RepresentativeCard
                      representative={selectedRep}
                      className="rounded-none border-0 shadow-none ring-2 ring-inset ring-gold/20"
                    />
                  ) : (
                    <div className="flex flex-col items-center px-6 py-12 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-elevated text-muted/40">
                        <UserRound className="h-8 w-8" aria-hidden />
                      </div>
                      <h3 className="mt-5 font-display text-xl text-foreground">
                        Atama Süreci Devam Ediyor
                      </h3>
                      <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                        {selectedIl.name} ili için temsilci atama sürecimiz devam
                        etmektedir. Güncellemeler tamamlandıkça bu alan güncellenecektir.
                      </p>
                      <div className="mt-6">
                        <Button href="/iletisim" variant="secondary" size="sm">
                          İletişime Geçin
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
