import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

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
          <div className="space-y-4">
            {docs.map((doc) => (
              <article
                key={doc.title}
                className="flex flex-wrap items-center justify-between gap-4 rounded-sm border border-navy/10 bg-white p-5"
              >
                <div>
                  <h2 className="font-display text-2xl text-navy">{doc.title}</h2>
                  <p className="text-sm text-slate">{doc.type} - {doc.status}</p>
                </div>
                <button
                  type="button"
                  className="rounded-sm bg-navy px-4 py-2 text-sm font-medium text-cream transition hover:bg-navy-light"
                >
                  Belgeyi Gör
                </button>
              </article>
            ))}
          </div>
        </Container>
      </main>
    </>
  );
}
