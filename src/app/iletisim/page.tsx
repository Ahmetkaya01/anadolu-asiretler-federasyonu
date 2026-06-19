import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Anadolu Aşiretler Federasyonu iletişim bilgileri, adres ve iletişim formu.",
};

export default function IletisimPage() {
  return (
    <>
      <PageHeader
        title="İletişim"
        description="Bize ulaşın — adres, telefon, e-posta ve iletişim formu."
        breadcrumb={[
          { label: "Ana Sayfa", href: "/" },
          { label: "İletişim" },
        ]}
      />
      <main className="bg-background">
        <Container className="py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <InteractiveCard>
              <h2 className="font-display text-3xl text-foreground">İletişim Bilgileri</h2>
              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="flex items-start gap-3 text-sm text-muted transition-smooth hover:text-burgundy"
                  >
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span>
                      <span className="block font-semibold text-foreground">Telefon</span>
                      {siteConfig.contact.phone}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-start gap-3 text-sm text-muted transition-smooth hover:text-burgundy"
                  >
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span>
                      <span className="block font-semibold text-foreground">E-posta</span>
                      {siteConfig.contact.email}
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>
                    <span className="block font-semibold text-foreground">Adres</span>
                    {siteConfig.contact.address}
                  </span>
                </li>
              </ul>
            </InteractiveCard>

            <ContactForm />
          </div>

          <Reveal className="mt-10">
            <div className="relative overflow-hidden rounded-md border border-navy/10 shadow-sm">
              {siteConfig.contact.mapPending && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-navy/60 backdrop-blur-[2px]">
                  <p className="rounded-md bg-surface px-6 py-4 text-center text-sm font-medium text-foreground shadow-card">
                    Merkez ofis konumu güncelleniyor
                  </p>
                </div>
              )}
              <iframe
                src={siteConfig.contact.mapEmbedUrl}
                title="Federasyon Konumu"
                className="h-[320px] w-full grayscale-[30%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </Container>
      </main>
    </>
  );
}
