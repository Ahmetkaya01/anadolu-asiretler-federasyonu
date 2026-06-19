import { cn } from "@/lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "w-full resize-y rounded-md border border-gold/15 bg-surface-elevated px-4 py-3 text-sm text-foreground shadow-sm transition-smooth placeholder:text-muted/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/25",
        className,
      )}
      {...props}
    />
  );
}
