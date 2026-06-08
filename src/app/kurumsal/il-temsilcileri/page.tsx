import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProvinceRepresentativesExplorer } from "@/components/representatives/ProvinceRepresentativesExplorer";
import { provincialRepresentatives } from "@/data/representatives";

export const metadata: Metadata = {
  title: "İl Temsilcileri",
  description:
    "Anadolu Aşiretler Federasyonu 81 il temsilcilik yapılanması ve il temsilcileri.",
};

export default function IlTemsilcileriPage() {
  return (
    <>
      <PageHeader
        title="İl Temsilcileri"
        description="81 il temsilcilik yapılanmamız — bir ile tıklayarak temsilci bilgisine ulaşın."
        breadcrumb={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Kurumsal", href: "/kurumsal/hakkimizda" },
          { label: "İl Temsilcileri" },
        ]}
      />
      <main>
        <Container className="py-16">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-slate">
              Türkiye genelinde teşkilatlanma çalışmalarımız kapsamında 81 il
              temsilcilik hedefimiz doğrultusunda yapılanmamızı sürdürüyoruz.
              Haritadan veya listeden bir il seçerek temsilci bilgisine
              ulaşabilirsiniz.
            </p>
          </Reveal>

          <ProvinceRepresentativesExplorer representatives={provincialRepresentatives} />
        </Container>
      </main>
    </>
  );
}
