import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerGrid } from "@/components/ui/StaggerGrid";
import { RepresentativeCard } from "@/components/representatives/RepresentativeCard";
import { provincialRepresentatives } from "@/data/representatives";

export const metadata: Metadata = {
  title: "İl Temsilcileri",
  description:
    "Anadolu Aşiretler Federasyonu il temsilcileri ve bölgesel teşkilatlanma kadrosu.",
};

export default function IlTemsilcileriPage() {
  return (
    <>
      <PageHeader
        title="İl Temsilcileri"
        description="Federasyonumuzun il düzeyindeki temsilcilik yapılanması ve saha koordinasyonu."
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
              Türkiye genelinde teşkilatlanma çalışmalarımız kapsamında aktif il
              temsilciliklerimizle hizmet veriyoruz. İl temsilcilerimiz; birlik,
              dayanışma ve kültürel mirasın korunması adına bölgelerinde
              koordinasyon görevini üstlenmektedir.
            </p>
          </Reveal>

          <StaggerGrid className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {provincialRepresentatives.map((rep, index) => (
              <RepresentativeCard
                key={rep.id}
                representative={rep}
                priority={index < 4}
              />
            ))}
          </StaggerGrid>
        </Container>
      </main>
    </>
  );
}
