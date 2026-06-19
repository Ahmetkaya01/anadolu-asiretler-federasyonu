import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { StaggerGrid } from "@/components/ui/StaggerGrid";
import { DocumentCard } from "@/components/ui/DocumentCard";
import { federationDocuments } from "@/data/documents";

export const metadata: Metadata = {
  title: "Tüzük ve Belgeler",
  description:
    "Anadolu Aşiretler Federasyonu tüzüğü ve resmi belgelerine buradan ulaşın.",
};

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
      <main className="bg-background">
        <Container className="py-16">
          <StaggerGrid className="space-y-4">
            {federationDocuments.map((doc) => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </StaggerGrid>
        </Container>
      </main>
    </>
  );
}
