import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Üyelik ve Bağlı Dernekler",
  description:
    "Anadolu Aşiretler Federasyonu'na bağlı dernekler ve üyelik bilgileri.",
};

const associations = [
  "İstanbul Anadolu Aşiretler Dayanışma Derneği",
  "Ankara Kültür ve Dayanışma Derneği",
  "Diyarbakır Aşiretler Eğitim Derneği",
  "Van Toplumsal Birlik Derneği",
  "Şanlıurfa Kültür ve Dayanışma Derneği",
  "Mardin Gençlik ve Sosyal Destek Derneği",
];

export default function UyelikPage() {
  return (
    <>
      <PageHeader
        title="Bağlı Dernekler"
        description="Federasyonumuza bağlı dernekler ve temsilcilikler."
        breadcrumb={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Üyelik" },
        ]}
      />
      <main>
        <Container className="py-16">
          <div className="grid gap-4 md:grid-cols-2">
            {associations.map((name) => (
              <article
                key={name}
                className="rounded-sm border border-gold/20 bg-white p-5 shadow-sm"
              >
                <h2 className="font-display text-2xl text-navy">{name}</h2>
                <p className="mt-2 text-sm text-slate">
                  Federasyon çatısı altında aktif temsil ve toplumsal dayanışma
                  çalışmaları yürütmektedir.
                </p>
              </article>
            ))}
          </div>
        </Container>
      </main>
    </>
  );
}
