import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/20 bg-navy text-cream">
      <div
        className="h-1 bg-gradient-to-r from-burgundy via-gold to-burgundy"
        aria-hidden
      />

      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="footer" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/75">
              {siteConfig.description}
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:col-start-6">
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
                Kurumsal
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerNavigation.kurumsal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/75 transition-smooth hover:translate-x-0.5 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
                İçerik
              </h3>
              <ul className="mt-4 space-y-2.5">
                {footerNavigation.icerik.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/75 transition-smooth hover:translate-x-0.5 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
              İletişim
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-cream/75">
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-start gap-3 transition-smooth hover:text-gold"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3 transition-smooth hover:text-gold"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {siteConfig.contact.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-gold mt-12" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center text-xs text-cream/50 sm:flex-row sm:text-left">
          <p>
            © {year} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <p>Köklü geçmişten güçlü geleceğe.</p>
        </div>
      </Container>
    </footer>
  );
}
