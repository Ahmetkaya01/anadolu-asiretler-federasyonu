import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Haberler ve Duyurular",
  description:
    "Federasyon faaliyetleri, basın açıklamaları, etkinlikler ve duyurular.",
};

const posts = [
  {
    slug: "federasyonumuzdan-guncel-aciklama",
    title: "Federasyonumuzdan Güncel Açıklama",
    category: "Duyuru",
    excerpt:
      "Birlik ve dayanışma odaklı faaliyetlerimizle ilgili kurumsal bilgilendirme metni yayımlandı.",
  },
  {
    slug: "il-temsilcilikleri-koordinasyon-toplantisi",
    title: "İl Temsilcilikleri Koordinasyon Toplantısı",
    category: "Faaliyet",
    excerpt:
      "81 il temsilciliğimizin katılımıyla yeni dönem planlamaları ve saha takvimleri değerlendirildi.",
  },
  {
    slug: "genclik-ve-egitim-odakli-projeler",
    title: "Gençlik ve Eğitim Odaklı Projeler",
    category: "Haber",
    excerpt:
      "Gençlik çalışmaları kapsamında eğitim ve kültür odaklı yeni proje başlıkları açıklandı.",
  },
];

export default function HaberlerPage() {
  return (
    <>
      <PageHeader
        title="Haberler & Duyurular"
        description="Güncel haberler, duyurular ve faaliyetler."
        breadcrumb={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Haberler" },
        ]}
      />
      <main>
        <Container className="py-16">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-sm border border-navy/10 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-burgundy">
                  {post.category}
                </p>
                <h2 className="mt-2 font-display text-2xl text-navy">{post.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate">{post.excerpt}</p>
                <Link
                  href={`/haberler/${post.slug}`}
                  className="mt-5 inline-block text-sm font-semibold text-burgundy hover:text-burgundy-dark"
                >
                  Detayı Gör →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </main>
    </>
  );
}
