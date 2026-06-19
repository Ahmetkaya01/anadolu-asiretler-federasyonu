import { cn } from "@/lib/utils";

type ProseProps = {
  children: React.ReactNode;
  className?: string;
};

/** Uzun metin sayfaları için kurumsal tipografi */
export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "prose-institutional text-lg leading-relaxed text-muted [&_h2]:font-display [&_h2]:text-3xl [&_h2]:text-foreground [&_h3]:font-display [&_h3]:text-2xl [&_h3]:text-foreground [&_p+p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1",
        className,
      )}
    >
      {children}
    </div>
  );
}
