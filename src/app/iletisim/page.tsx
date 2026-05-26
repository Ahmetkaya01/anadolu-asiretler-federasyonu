import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
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
      <main>
        <Container className="py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-sm border border-navy/10 bg-white p-6">
              <h2 className="font-display text-3xl text-navy">İletişim Bilgileri</h2>
              <p className="mt-5 text-sm text-slate">Telefon: {siteConfig.contact.phone}</p>
              <p className="mt-2 text-sm text-slate">E-posta: {siteConfig.contact.email}</p>
              <p className="mt-2 text-sm text-slate">Adres: {siteConfig.contact.address}</p>
            </div>
            <iframe
              src={siteConfig.contact.mapEmbedUrl}
              title="Federasyon Konumu"
              className="h-[320px] w-full rounded-sm border border-navy/10"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </main>
    </>
  );
}
