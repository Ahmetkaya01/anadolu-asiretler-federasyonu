import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";

type PagePlaceholderProps = {
  title: string;
  description: string;
  breadcrumb: { label: string; href?: string }[];
};

/** Geliştirme aşamasındaki alt sayfalar için geçici içerik */
export function PagePlaceholder({
  title,
  description,
  breadcrumb,
}: PagePlaceholderProps) {
  return (
    <>
      <PageHeader
        title={title}
        description={description}
        breadcrumb={breadcrumb}
      />
      <main className="bg-background">
        <Container className="py-16">
          <div className="rounded-sm border border-dashed border-gold/40 bg-surface p-12 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              Yakında
            </p>
            <p className="mt-3 text-lg text-muted">
              Bu sayfanın içeriği bir sonraki adımda eklenecektir.
            </p>
          </div>
        </Container>
      </main>
    </>
  );
}
