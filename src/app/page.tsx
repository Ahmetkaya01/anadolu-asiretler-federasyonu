import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { federationStats } from "@/data/stats";
import Link from "next/link";

const quickLinks = [
  { title: "İletişim", text: "Federasyon iletişim bilgileri", href: "/iletisim" },
  { title: "Etkinlikler", text: "Faaliyet ve organizasyonlarımız", href: "/haberler" },
  { title: "Başkanın Mesajı", text: "Kurumsal vizyon ve çağrı", href: "/kurumsal/hakkimizda" },
  { title: "Duyurular", text: "Resmi bilgilendirmeler", href: "/haberler" },
  { title: "Projeler", text: "Toplumsal katkı projeleri", href: "/haberler" },
  { title: "Galeri", text: "Etkinliklerden kareler", href: "/haberler" },
];

const headlines = [
  {
    title: "Federasyonumuzdan Güncel Açıklama",
    excerpt:
      "Toplumsal birlik, kültürel miras ve dayanışma eksenindeki çalışmalarımız hız kesmeden sürüyor.",
  },
  {
    title: "İl Temsilcilikleri Koordinasyon Toplantısı",
    excerpt:
      "81 il yapılanmamızın koordinasyonunu güçlendirmek üzere yeni dönem yol haritamız belirlendi.",
  },
  {
    title: "Gençlik ve Eğitim Odaklı Yeni Projeler",
    excerpt:
      "Eğitim, kültür ve sosyal dayanışma alanında yeni proje çağrıları için hazırlık süreci başlatıldı.",
  },
];

/**
 * Referans alınan federasyon portallarıyla benzer,
 * blok tabanlı kurumsal ana sayfa.
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
        <Container className="relative flex min-h-[60vh] flex-col justify-center py-20 lg:py-24">
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

      <section className="-mt-10 pb-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-sm border border-gold/20 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Hızlı Erişim
                </p>
                <h3 className="mt-2 font-display text-2xl text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate">{item.text}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-dark/40 py-20">
        <Container>
          <SectionHeading
            eyebrow="Güncel"
            title="Federasyon Gündemi"
            description="Haber, duyuru ve faaliyetlerimizden öne çıkan başlıklar."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {headlines.map((item) => (
              <article
                key={item.title}
                className="rounded-sm border border-navy/10 bg-white p-6 transition hover:border-burgundy/40"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-burgundy">
                  Haber
                </p>
                <h3 className="mt-2 font-display text-2xl leading-tight text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Temel Göstergeler"
            title="Köklü Geçmişten Güçlü Geleceğe"
            description="Mevcut federasyon verileri doğrultusunda güncellenen kurumsal göstergeler."
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {federationStats.map((item) => (
              <div
                key={item.label}
                className="rounded-sm border border-gold/20 bg-white p-6 text-center shadow-sm"
              >
                <p className="font-display text-5xl text-navy">
                  {item.value}
                  {item.suffix ?? ""}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-burgundy">
                  {item.label}
                </p>
                <p className="mt-3 text-sm text-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
