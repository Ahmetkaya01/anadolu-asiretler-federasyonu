import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";
import { affiliatesComingSoon } from "@/data/affiliates";

export const metadata: Metadata = {
  title: "Üyelik ve Bağlı Dernekler",
  description:
    "Anadolu Aşiretler Federasyonu'na bağlı dernekler ve üyelik bilgileri.",
};

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
      <main className="bg-background">
        <Container className="py-16">
          {affiliatesComingSoon ? (
            <EmptyState
              icon={Building2}
              title="Bağlı Dernekler Listesi Hazırlanıyor"
              description="Federasyonumuza bağlı dernek ve temsilciliklerin güncel listesi kısa süre içinde bu sayfada yayımlanacaktır. Üyelik süreçleri hakkında bilgi almak için bizimle iletişime geçebilirsiniz."
              action={
                <Button href="/iletisim" variant="primary">
                  İletişime Geçin
                </Button>
              }
            />
          ) : null}
        </Container>
      </main>
    </>
  );
}
