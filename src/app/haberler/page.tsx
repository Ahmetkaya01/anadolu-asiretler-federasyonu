import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { NewsArticle } from "@/types";
import { NewsGrid } from "@/components/news/NewsGrid";
import { federationNews } from "@/data/news";
import { mediaCoverage } from "@/data/media-coverage";

export const metadata: Metadata = {
  title: "Haberler ve Duyurular",
  description:
    "Federasyon faaliyetleri, basın açıklamaları, etkinlikler ve duyurular.",
};

const allPosts: NewsArticle[] = [...mediaCoverage, ...federationNews];

export default function HaberlerPage() {
  return (
    <>
      <PageHeader
        title="Haberler & Duyurular"
        description="Güncel haberler, basın yansımaları, duyurular ve faaliyetler."
        breadcrumb={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Haberler" },
        ]}
      />
      <main className="bg-background">
        <Container className="py-16">
          <Reveal className="mb-10">
            <SectionHeading
              eyebrow="Medya"
              title="Basında Biz"
              description="Federasyonumuzun ulusal basın, haber ajansları ve video kanallarındaki yansımaları."
            />
          </Reveal>
          <NewsGrid posts={allPosts} />
        </Container>
      </main>
    </>
  );
}
