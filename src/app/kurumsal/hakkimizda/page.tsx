import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerGrid } from "@/components/ui/StaggerGrid";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Anadolu Aşiretler Federasyonu tarihçesi, vizyonu ve misyonu hakkında bilgi edinin.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <PageHeader
        title="Hakkımızda"
        description="Federasyonumuzun tarihçesi, vizyonu ve toplumsal misyonu."
        breadcrumb={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Kurumsal", href: "/kurumsal/hakkimizda" },
          { label: "Hakkımızda" },
        ]}
      />
      <main>
        <Container className="py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Kurumsal Kimlik"
              title="Birlik, Kültür ve Dayanışma Çatısı Altında"
              description={siteConfig.mission}
            />
          </Reveal>
          <StaggerGrid className="mt-10 grid gap-6 md:grid-cols-2">
            <InteractiveCard>
              <article>
                <h2 className="font-display text-3xl text-navy">Vizyonumuz</h2>
                <p className="mt-3 leading-relaxed text-slate">
                  Anadolu'nun köklü kültürel mirasını koruyan, toplumsal dayanışmayı
                  güçlendiren ve gelecek nesillere birlik ruhunu aktaran öncü bir
                  federasyon olmak.
                </p>
              </article>
            </InteractiveCard>
            <InteractiveCard>
              <article>
                <h2 className="font-display text-3xl text-navy">Misyonumuz</h2>
                <p className="mt-3 leading-relaxed text-slate">
                  İl temsilciliklerimiz, gönüllü ağımız ve sosyal projelerimizle
                  ortak değerlerimizi yaşatmak; eğitim, kültür ve sosyal alanda
                  sürdürülebilir katkı sunmak.
                </p>
              </article>
            </InteractiveCard>
          </StaggerGrid>
        </Container>
      </main>
    </>
  );
}
