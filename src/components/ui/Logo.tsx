import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showText?: boolean;
};

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${siteConfig.name} — Ana Sayfa`}
    >
      <span className="relative block h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/30 transition group-hover:ring-gold/60 sm:h-14 sm:w-14">
        <Image
          src="/logo.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="56px"
          priority
        />
      </span>
      {showText && (
        <span className="hidden flex-col leading-tight sm:flex">
          <span className="font-display text-sm font-semibold tracking-wide text-navy sm:text-base">
            Anadolu Aşiretler
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-burgundy">
            Federasyonu
          </span>
        </span>
      )}
    </Link>
  );
}
