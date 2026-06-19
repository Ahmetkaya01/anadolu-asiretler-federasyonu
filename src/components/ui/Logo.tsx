import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoVariant = "default" | "compact" | "footer";

type LogoProps = {
  className?: string;
  showText?: boolean;
  variant?: LogoVariant;
  /** Koyu/şeffaf header üzerinde cream metin */
  onDark?: boolean;
};

export function Logo({
  className,
  showText = true,
  variant = "default",
  onDark = false,
}: LogoProps) {
  const isFooter = variant === "footer";
  const isCompact = variant === "compact";
  const useLightText = onDark || isFooter;

  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${siteConfig.name} — Ana Sayfa`}
    >
      <span
        className={cn(
          "relative shrink-0 overflow-hidden transition-smooth group-hover:ring-gold/60",
          isFooter
            ? "h-14 w-14 rounded-md ring-2 ring-gold/40"
            : isCompact
              ? "h-10 w-10 rounded-md ring-2 ring-gold/30"
              : "h-12 w-12 rounded-md ring-2 ring-gold/30 sm:h-14 sm:w-14",
        )}
      >
        <Image
          src="/logo.jpg"
          alt=""
          fill
          className="object-cover"
          sizes={isCompact ? "40px" : "56px"}
          priority
        />
      </span>
      {showText && (
        <span className={cn("flex flex-col leading-tight", isCompact ? "hidden md:flex" : "hidden sm:flex")}>
          <span
            className={cn(
              "font-display font-semibold tracking-wide",
              useLightText ? "text-sm text-cream sm:text-base" : "text-sm text-foreground sm:text-base",
            )}
          >
            Anadolu Aşiretler
          </span>
          <span
            className={cn(
              "text-xs font-medium uppercase tracking-[0.15em]",
              useLightText ? "text-gold" : "text-gold-light",
            )}
          >
            Federasyonu
          </span>
        </span>
      )}
    </Link>
  );
}
