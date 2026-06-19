"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { easeSmooth } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const overlayHero = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
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

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const navLinkClass = overlayHero
    ? "text-cream/90 hover:text-gold"
    : "text-foreground/90 hover:text-gold";
  const navActiveClass = overlayHero ? "text-gold" : "text-gold-light";

  return (
    <header
      className={cn(
        "z-50 border-b transition-smooth",
        isHome ? "fixed left-0 right-0 top-0" : "sticky top-0",
        overlayHero
          ? "border-transparent bg-transparent"
          : scrolled
            ? "border-gold/10 bg-navy/95 shadow-lg backdrop-blur-lg"
            : "border-gold/10 bg-background/95 backdrop-blur-md",
      )}
    >
      <div
        className={cn(
          "hidden border-b lg:block",
          overlayHero ? "border-gold/10 bg-navy/40 backdrop-blur-sm" : "border-gold/20 bg-navy",
        )}
      >
        <Container className="flex h-9 items-center justify-between text-xs">
          <p className="tracking-wide text-cream/80">{siteConfig.slogan}</p>
          <a
            href={siteConfig.contact.phoneHref}
            className="flex items-center gap-1.5 font-medium text-gold transition-smooth hover:text-gold-light"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {siteConfig.contact.phone}
          </a>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo variant="compact" onDark={overlayHero} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
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
                  className={cn(
                    "flex items-center gap-1 rounded-sm px-3 py-2 text-base font-medium transition-smooth",
                    navLinkClass,
                  )}
                  aria-expanded={openDropdown === item.label}
                >
                  {item.label}
                  <motion.span
                    animate={{ rotate: openDropdown === item.label ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: easeSmooth }}
                  >
                    <ChevronDown className="h-4 w-4" aria-hidden />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.22, ease: easeSmooth }}
                      className="absolute left-0 top-full min-w-[220px] pt-1"
                    >
                      <ul className="overflow-hidden rounded-md border border-gold/15 bg-surface py-2 shadow-lg">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-4 py-2.5 text-base text-foreground transition-smooth hover:bg-surface-elevated hover:text-gold"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-sm px-3 py-2 text-base font-medium transition-smooth",
                  pathname === item.href ? navActiveClass : navLinkClass,
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/iletisim" variant="primary" size="sm">
            Bize Ulaşın
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center rounded-sm p-2 transition-smooth lg:hidden",
            overlayHero ? "text-cream hover:bg-cream/10" : "text-foreground hover:bg-surface-elevated",
          )}
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 bg-navy/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden={!mobileOpen}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="absolute right-0 top-0 h-[calc(100vh-4rem)] w-full max-w-sm border-l border-gold/20 bg-surface p-6 shadow-2xl"
              aria-label="Mobil menü"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-1">
                {mainNavigation.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3, ease: easeSmooth }}
                  >
                    <Link
                      href={item.href}
                      className="block rounded-sm px-3 py-3 text-base font-medium text-foreground transition-smooth hover:bg-surface-elevated"
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
                              className="block py-2 text-sm text-muted transition-smooth hover:text-gold"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 border-t border-gold/15 pt-6">
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
                  className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-gold"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.contact.phone}
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
