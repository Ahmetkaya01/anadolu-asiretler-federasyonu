import type { ProvincialRepresentative } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { cn } from "@/lib/utils";

type RepresentativeCardProps = {
  representative: ProvincialRepresentative;
  className?: string;
  priority?: boolean;
};

export function RepresentativeCard({
  representative,
  className,
  priority = false,
}: RepresentativeCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-md border border-navy/10 bg-white shadow-sm transition-smooth hover:border-gold/35 hover:shadow-[0_20px_50px_-25px_rgba(11,31,58,0.45)]",
        className,
      )}
    >
      <OptimizedImage
        src={representative.image}
        alt={`${representative.city} il temsilcisi ${representative.name}`}
        fit="contain"
        frameClassName="aspect-[3/4] min-h-[280px] sm:min-h-[320px]"
        sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
        priority={priority}
        quality={85}
        className="transition-smooth group-hover:scale-[1.02]"
      />
      <div className="border-t border-navy/5 p-5">
        <Badge variant="gold">{representative.city}</Badge>
        <h3 className="mt-3 font-display text-xl text-navy">{representative.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-burgundy">
          {representative.title}
        </p>
      </div>
    </article>
  );
}
