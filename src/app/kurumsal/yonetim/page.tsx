import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Yönetim Kurulu",
  description:
    "Anadolu Aşiretler Federasyonu yönetim kurulu ve kurucular kadrosu.",
};

const members = [
  { name: "Ferhat Armağan", title: "Federasyon Başkanı" },
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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member) => (
              <article
                key={member.title}
                className="rounded-sm border border-navy/10 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-gold/40 to-burgundy/30" />
                <h2 className="mt-4 font-display text-2xl text-navy">{member.name}</h2>
                <p className="mt-2 text-sm text-burgundy">{member.title}</p>
              </article>
            ))}
          </div>
        </Container>
      </main>
    </>
  );
}
