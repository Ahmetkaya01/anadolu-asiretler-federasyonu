import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type EmptyStateProps = {
  icon?: LucideIcon;
  title: string;
  description: string;
  action?: React.ReactNode;
  className?: string;
};

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-lg border border-dashed border-gold/15 bg-surface/50 px-8 py-16 text-center",
        className,
      )}
    >
      {Icon && (
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-elevated text-muted shadow-sm">
          <Icon className="h-8 w-8" aria-hidden />
        </div>
      )}
      <h2 className="mt-6 font-display text-2xl text-foreground">{title}</h2>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{description}</p>
      {action && <div className="mt-8">{action}</div>}
    </div>
  );
}
