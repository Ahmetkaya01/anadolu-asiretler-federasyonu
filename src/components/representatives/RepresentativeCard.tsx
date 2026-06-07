import Image from "next/image";
import type { ProvincialRepresentative } from "@/types";
import { Badge } from "@/components/ui/Badge";
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
      <div className="relative aspect-[3/4] overflow-hidden bg-navy/5">
        <Image
          src={representative.image}
          alt={`${representative.city} il temsilcisi ${representative.name}`}
          fill
          className="object-cover object-top transition-smooth group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
          priority={priority}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-80"
          aria-hidden
        />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Badge variant="gold">{representative.city}</Badge>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl text-navy">{representative.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-burgundy">
          {representative.title}
        </p>
      </div>
    </article>
  );
}
