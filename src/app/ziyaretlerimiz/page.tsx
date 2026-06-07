import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VisitGallery } from "@/components/visits/VisitGallery";
import { federationVisits } from "@/data/visits";

export const metadata: Metadata = {
  title: "Ziyaretlerimiz",
  description:
    "Anadolu Aşiretler Federasyonu resmî ziyaretleri, temasları ve kurumsal görüşmelerinden fotoğraflar.",
};

export default function ZiyaretlerimizPage() {
  return (
    <>
      <PageHeader
        title="Ziyaretlerimiz"
        description="Federasyonumuzun gerçekleştirdiği resmî ziyaretler ve kurumsal temaslardan kareler."
        breadcrumb={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Ziyaretlerimiz" },
        ]}
      />
      <main>
        <Container className="py-16">
          <Reveal>
            <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-slate">
              Anadolu Aşiretler Federasyonu olarak siyasi, toplumsal ve kurumsal
              düzeyde yürüttüğümüz ziyaret ve temaslarımızı bu sayfada paylaşıyoruz.
            </p>
          </Reveal>
          <VisitGallery visits={federationVisits} />
        </Container>
      </main>
    </>
  );
}
