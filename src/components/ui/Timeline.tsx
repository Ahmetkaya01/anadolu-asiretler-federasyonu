import type { TimelineMilestone } from "@/data/timeline";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

type TimelineProps = {
  items: TimelineMilestone[];
  className?: string;
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn("relative space-y-0", className)}>
      {items.map((item, index) => (
        <li key={item.id} className="relative flex gap-6 pb-10 last:pb-0">
          {index < items.length - 1 && (
            <span
              className="absolute left-[1.125rem] top-10 h-[calc(100%-2.5rem)] w-px bg-gold/30"
              aria-hidden
            />
          )}
          <div
            className={cn(
              "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold",
              item.status === "published"
                ? "border-gold bg-navy text-gold"
                : "border-gold/20 bg-surface-elevated text-muted",
            )}
          >
            {item.status === "published" ? "●" : "○"}
          </div>
          <div className="min-w-0 flex-1 pt-0.5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-display text-lg text-gold">{item.year}</span>
              {item.status === "coming-soon" && (
                <Badge variant="muted">Yakında</Badge>
              )}
            </div>
            <h3 className="mt-1 font-display text-xl text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
