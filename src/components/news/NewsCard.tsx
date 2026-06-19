import Link from "next/link";
import type { NewsArticle } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const categoryConfig: Record<
  NewsArticle["category"],
  { text: string; variant: "navy" | "burgundy" | "gold"; gradient: string }
> = {
  haber: {
    text: "Haber",
    variant: "navy",
    gradient: "from-navy/80 via-navy-light/60 to-burgundy/40",
  },
  duyuru: {
    text: "Duyuru",
    variant: "burgundy",
    gradient: "from-burgundy/80 via-burgundy-dark/70 to-navy/50",
  },
  faaliyet: {
    text: "Faaliyet",
    variant: "gold",
    gradient: "from-gold/70 via-burgundy/50 to-navy/60",
  },
  basin: {
    text: "Basın",
    variant: "gold",
    gradient: "from-gold/60 via-navy/50 to-burgundy/40",
  },
};

type NewsCardProps = {
  post: NewsArticle;
  compact?: boolean;
  className?: string;
};

export function NewsCard({ post, compact = false, className }: NewsCardProps) {
  const cat = categoryConfig[post.category];

  return (
    <InteractiveCard className={cn("overflow-hidden p-0", className)} bodyClassName="p-0">
      <div
        className={cn(
          "relative bg-gradient-to-br",
          cat.gradient,
          compact ? "h-28" : "h-36",
        )}
      >
        {post.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div className="absolute inset-0 pattern-anatolian opacity-30" aria-hidden />
        )}
        <div className="absolute bottom-3 left-4">
          <Badge variant={cat.variant}>{cat.text}</Badge>
        </div>
      </div>
      <div className={cn("p-5", compact && "p-4")}>
        {!compact && (
          <span className="text-xs font-medium text-muted">{post.source ?? post.date}</span>
        )}
        <h3
          className={cn(
            "font-display leading-tight text-foreground",
            compact ? "mt-0 text-xl" : "mt-2 text-2xl sm:text-3xl",
          )}
        >
          {post.title}
        </h3>
        <p className={cn("leading-relaxed text-muted", compact ? "mt-2 text-sm" : "mt-3 text-base")}>
          {post.excerpt}
        </p>
        <div className={cn(compact ? "mt-4" : "mt-6")}>
          {post.externalUrl ? (
            <a
              href={post.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-smooth hover:gap-3"
            >
              Kaynağı Gör <span aria-hidden>↗</span>
            </a>
          ) : (
            <Button href={`/haberler/${post.slug}`} variant="ghost" size="sm">
              Detayı Gör →
            </Button>
          )}
        </div>
      </div>
    </InteractiveCard>
  );
}

export function NewsCardLink({ post, compact, className }: NewsCardProps) {
  if (post.externalUrl) {
    return (
      <a
        href={post.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("block", className)}
      >
        <NewsCard post={post} compact={compact} />
      </a>
    );
  }

  return (
    <Link href={`/haberler/${post.slug}`} className={cn("block", className)}>
      <NewsCard post={post} compact={compact} />
    </Link>
  );
}

export { categoryConfig as newsCategoryConfig };
