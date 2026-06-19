import { cn } from "@/lib/utils";

type BadgeVariant = "gold" | "burgundy" | "navy" | "muted";

const variantStyles: Record<BadgeVariant, string> = {
  gold: "bg-gold/15 text-gold ring-1 ring-gold/30",
  burgundy: "bg-burgundy/10 text-burgundy ring-1 ring-burgundy/25",
  navy: "bg-navy-light/50 text-cream ring-1 ring-gold/20",
  muted: "bg-surface-elevated text-muted ring-1 ring-gold/10",
};

export function Badge({
  children,
  variant = "muted",
  className,
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
