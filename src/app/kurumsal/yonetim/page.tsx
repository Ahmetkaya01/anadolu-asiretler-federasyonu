import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerGrid } from "@/components/ui/StaggerGrid";
import { LeadershipCard } from "@/components/leadership/LeadershipCard";
import { federationPresident, vicePresidents, boardMembers } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Yönetim Kurulu",
  description:
    "Anadolu Aşiretler Federasyonu başkanı ve yönetim kurulu kadrosu.",
};

export default function YonetimPage() {
  return (
    <>
      <PageHeader
        title="Yönetim Kurulu"
        description="Federasyon başkanı ve güncel yönetim kurulu kadromuz."
        breadcrumb={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Kurumsal", href: "/kurumsal/hakkimizda" },
          { label: "Yönetim Kurulu" },
        ]}
      />
      <main className="bg-background">
        <Container className="py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Liderlik"
              title="Federasyon Başkanı"
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-10 max-w-sm">
            <LeadershipCard member={federationPresident} featured />
          </div>

          <Reveal className="mt-16">
            <SectionHeading
              eyebrow="Yönetim"
              title="Başkan Yardımcılarımız"
              description="Federasyonumuzun başkan yardımcıları ve temsil ettikleri aşiret yapıları."
              align="center"
            />
          </Reveal>
          <StaggerGrid className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {vicePresidents.map((member) => (
              <LeadershipCard key={member.id} member={member} />
            ))}
          </StaggerGrid>

          <Reveal className="mt-16">
            <SectionHeading
              eyebrow="Yönetim"
              title="Yönetim Kurulumuz"
              description="Federasyonumuzun güncel yönetim kurulu üyeleri ve görev alanları."
              align="center"
            />
          </Reveal>
          <StaggerGrid className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {boardMembers.map((member) => (
              <LeadershipCard key={member.id} member={member} />
            ))}
          </StaggerGrid>
        </Container>
      </main>
    </>
  );
}
