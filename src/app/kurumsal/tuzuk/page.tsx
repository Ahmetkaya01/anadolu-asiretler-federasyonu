import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { StaggerGrid } from "@/components/ui/StaggerGrid";

export const metadata: Metadata = {
  title: "Tüzük ve Belgeler",
  description:
    "Anadolu Aşiretler Federasyonu tüzüğü ve resmi belgelerine buradan ulaşın.",
};

const docs = [
  { title: "Federasyon Ana Tüzüğü", type: "PDF", status: "Güncel" },
  { title: "Üyelik Başvuru Esasları", type: "PDF", status: "Güncel" },
  { title: "Temsilcilik Yönergesi", type: "PDF", status: "Güncel" },
];

export default function TuzukPage() {
  return (
    <>
      <PageHeader
        title="Tüzük ve Belgeler"
        description="Federasyon tüzüğü ve indirilebilir resmi belgeler."
        breadcrumb={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Kurumsal", href: "/kurumsal/hakkimizda" },
          { label: "Tüzük ve Belgeler" },
        ]}
      />
      <main>
        <Container className="py-16">
          <StaggerGrid className="space-y-4">
            {docs.map((doc) => (
              <InteractiveCard key={doc.title}>
                <article className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl text-navy">{doc.title}</h2>
                    <p className="text-sm text-slate">
                      {doc.type} - {doc.status}
                    </p>
                  </div>
                  <Button variant="secondary" size="sm">
                    Belgeyi Gör
                  </Button>
                </article>
              </InteractiveCard>
            ))}
          </StaggerGrid>
        </Container>
      </main>
    </>
  );
}
