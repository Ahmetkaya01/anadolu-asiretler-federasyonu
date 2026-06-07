import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import type { NewsArticle } from "@/types";
import { NewsGrid } from "@/components/news/NewsGrid";

export const metadata: Metadata = {
  title: "Haberler ve Duyurular",
  description:
    "Federasyon faaliyetleri, basın açıklamaları, etkinlikler ve duyurular.",
};

const posts: NewsArticle[] = [
  {
    slug: "federasyonumuzdan-guncel-aciklama",
    title: "Federasyonumuzdan Güncel Açıklama",
    category: "duyuru",
    excerpt:
      "Birlik ve dayanışma odaklı faaliyetlerimizle ilgili kurumsal bilgilendirme metni yayımlandı.",
    content:
      "Anadolu Aşiretler Federasyonu olarak birlik, kültür ve dayanışma eksenindeki çalışmalarımızı kararlılıkla sürdürmekteyiz.",
    date: "18 May 2026",
  },
  {
    slug: "il-temsilcilikleri-koordinasyon-toplantisi",
    title: "İl Temsilcilikleri Koordinasyon Toplantısı",
    category: "faaliyet",
    excerpt:
      "81 il temsilciliğimizin katılımıyla yeni dönem planlamaları ve saha takvimleri değerlendirildi.",
    content:
      "Türkiye genelindeki il temsilciliklerimizin katılımıyla düzenlenen toplantıda saha çalışmaları ve yeni dönem planlamaları ele alındı.",
    date: "21 Nis 2026",
  },
  {
    slug: "genclik-ve-egitim-odakli-projeler",
    title: "Gençlik ve Eğitim Odaklı Projeler",
    category: "haber",
    excerpt:
      "Gençlik çalışmaları kapsamında eğitim ve kültür odaklı yeni proje başlıkları açıklandı.",
    content:
      "Gençlik ve eğitim odaklı projeler için hazırlık süreci başlatılmış olup, kültürel mirasın genç kuşaklara aktarılması hedeflenmektedir.",
    date: "21 Nis 2026",
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
          <NewsGrid posts={posts} />
        </Container>
      </main>
    </>
  );
}
