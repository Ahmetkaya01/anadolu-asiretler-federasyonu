"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-navy/10 bg-cream/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-cream",
      )}
    >
      {/* Üst bilgi şeridi */}
      <div className="hidden border-b border-gold/20 bg-navy text-cream lg:block">
        <Container className="flex h-9 items-center justify-between text-xs">
          <p className="tracking-wide text-cream/80">
            {siteConfig.slogan}
          </p>
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center gap-1.5 font-medium text-gold transition hover:text-gold-light"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {siteConfig.contact.phone}
          </a>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />

        {/* Masaüstü navigasyon */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Ana menü"
        >
          {mainNavigation.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-medium text-navy transition hover:text-burgundy"
                  aria-expanded={openDropdown === item.label}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" aria-hidden />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute left-0 top-full min-w-[220px] pt-1">
                    <ul className="rounded-sm border border-navy/10 bg-cream py-2 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-navy transition hover:bg-navy/5 hover:text-burgundy"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm px-3 py-2 text-sm font-medium text-navy transition hover:text-burgundy"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/iletisim" variant="primary" size="sm">
            Bize Ulaşın
          </Button>
        </div>

        {/* Mobil menü tetikleyici */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-navy lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </Container>

      {/* Mobil navigasyon */}
      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 top-16 z-40 bg-navy/40 backdrop-blur-sm transition-opacity lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      >
        <nav
          className={cn(
            "absolute right-0 top-0 h-[calc(100vh-4rem)] w-full max-w-sm border-l border-gold/20 bg-cream p-6 shadow-2xl transition-transform duration-300",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
          aria-label="Mobil menü"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col gap-1">
            {mainNavigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-sm px-3 py-3 text-base font-medium text-navy hover:bg-navy/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-2 ml-4 border-l-2 border-gold/30 pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-2 text-sm text-slate hover:text-burgundy"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-navy/10 pt-6">
            <Button
              href="/iletisim"
              variant="primary"
              className="w-full"
              onClick={() => setMobileOpen(false)}
            >
              Bize Ulaşın
            </Button>
            <a
              href={siteConfig.contact.phoneHref}
              className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-burgundy"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
