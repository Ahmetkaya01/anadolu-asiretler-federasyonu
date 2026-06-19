import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

type ContentSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  media?: React.ReactNode;
  reverse?: boolean;
  className?: string;
};

export function ContentSection({
  eyebrow,
  title,
  description,
  children,
  media,
  reverse = false,
  className,
}: ContentSectionProps) {
  return (
    <section className={cn("py-16", className)}>
      <Container>
        <Reveal>
          <div
            className={cn(
              "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
              reverse && "lg:[&>*:first-child]:order-2",
            )}
          >
            <div>
              {eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {eyebrow}
                </p>
              )}
              <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">{title}</h2>
              {description && (
                <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
              )}
              {children && <div className="mt-6">{children}</div>}
            </div>
            {media && <div>{media}</div>}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
