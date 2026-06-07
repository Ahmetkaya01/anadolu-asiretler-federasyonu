import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      {...props}
      className={cn(
        "h-11 w-full rounded-md border border-navy/15 bg-white px-3 text-sm text-navy shadow-sm outline-none transition placeholder:text-slate/70 focus:border-gold/60 focus:ring-2 focus:ring-gold/20",
        className,
      )}
    />
  );
}

