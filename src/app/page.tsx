import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

/**
 * Ana sayfa — Hero ve bölümler sonraki adımda eklenecek.
 * Şimdilik layout ve marka kimliğini doğrulayan önizleme.
 */
export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-navy">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-burgundy-dark opacity-90"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C9A227' stroke-width='1'%3E%3Cpath d='M0 40h80M40 0v80M0 0l80 80M80 0L0 80'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />
        <Container className="relative flex min-h-[70vh] flex-col justify-center py-20 sm:min-h-[75vh] lg:py-28">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {siteConfig.name}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl lg:text-6xl">
            {siteConfig.slogan}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
            {siteConfig.mission}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/kurumsal/hakkimizda" variant="primary" size="lg">
              Hakkımızda
            </Button>
            <Button href="/haberler" variant="outline" size="lg">
              Haberler
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Sonraki Adım"
            title="Ana Sayfa Bölümleri"
            description="Hero altında haber kartları, istatistik paneli, hakkımızda önizlemesi ve galeri bölümleri eklenecek."
            align="center"
          />
        </Container>
      </section>
    </main>
  );
}
