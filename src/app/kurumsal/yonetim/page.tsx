import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { StaggerGrid } from "@/components/ui/StaggerGrid";

export const metadata: Metadata = {
  title: "Yönetim Kurulu",
  description:
    "Anadolu Aşiretler Federasyonu yönetim kurulu ve kurucular kadrosu.",
};

const members = [
  {
    name: "Ferhat Armağan",
    title: "Federasyon Başkanı",
    image: "/president-ferhat-armagan.png",
  },
  { name: "Yönetim Kurulu Üyesi", title: "Genel Başkan Vekili" },
  { name: "Yönetim Kurulu Üyesi", title: "Genel Sekreter" },
  { name: "Yönetim Kurulu Üyesi", title: "Teşkilatlanma Başkanı" },
];

export default function YonetimPage() {
  return (
    <>
      <PageHeader
        title="Yönetim Kurulu"
        description="Yönetim kurulu üyeleri ve kurucularımız."
        breadcrumb={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Kurumsal", href: "/kurumsal/hakkimizda" },
          { label: "Yönetim Kurulu" },
        ]}
      />
      <main>
        <Container className="py-16">
          <StaggerGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member) => (
              <InteractiveCard key={member.title} bodyClassName="text-center">
                <article>
                  {member.image ? (
                    <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-gold/30">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="112px"
                      />
                    </div>
                  ) : (
                    <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-gold/40 to-burgundy/30 transition-smooth group-hover:scale-105" />
                  )}
                  <h2 className="mt-4 font-display text-2xl text-navy">{member.name}</h2>
                  <p className="mt-2 text-sm text-burgundy">{member.title}</p>
                </article>
              </InteractiveCard>
            ))}
          </StaggerGrid>
        </Container>
      </main>
    </>
  );
}
