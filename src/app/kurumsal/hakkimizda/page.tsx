import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerGrid } from "@/components/ui/StaggerGrid";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
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

          <Reveal className="mt-12">
            <SectionHeading
              eyebrow="Tanıtım"
              title="Federasyonumuzdan Video"
              description="Anadolu Aşiretler Federasyonu'nun kurumsal mesajını ve faaliyetlerini yansıtan tanıtım videosu."
              align="center"
            />
            <YouTubeEmbed
              videoId="5MZ6xZdraqQ"
              title="Anadolu Aşiretler Federasyonu tanıtım videosu"
              className="mt-8 max-w-4xl"
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
