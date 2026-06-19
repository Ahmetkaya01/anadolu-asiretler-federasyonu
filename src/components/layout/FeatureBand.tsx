import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

type FeatureBandProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

export function FeatureBand({
  eyebrow,
  title,
  description,
  children,
  className,
}: FeatureBandProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-y border-gold/20 bg-navy py-16 text-cream pattern-anatolian",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-burgundy/20 via-transparent to-gold/10" aria-hidden />
      <Container className="relative">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
        )}
        <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">{title}</h2>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/75">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
