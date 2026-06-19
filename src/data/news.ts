import type { NewsArticle } from "@/types";

/** Federasyon haberleri — ana sayfa, ticker ve /haberler tek kaynak */
export const federationNews: NewsArticle[] = [
  {
    slug: "federasyonumuzdan-guncel-aciklama",
    title: "Federasyonumuzdan Güncel Açıklama",
    category: "duyuru",
    excerpt:
      "Birlik ve dayanışma odaklı faaliyetlerimizle ilgili kurumsal bilgilendirme metni yayımlandı.",
    content:
      "Anadolu Aşiretler Federasyonu olarak birlik, kültür ve dayanışma eksenindeki çalışmalarımızı kararlılıkla sürdürmekteyiz. İl temsilciliklerimiz ve gönüllülerimizle yürüttüğümüz faaliyetlerin yeni dönem planlamaları tamamlanmış olup, kamuoyuna düzenli bilgilendirme yapılacaktır.",
    date: "18 May 2026",
    featured: true,
  },
  {
    slug: "il-temsilcilikleri-koordinasyon-toplantisi",
    title: "İl Temsilcilikleri Koordinasyon Toplantısı",
    category: "faaliyet",
    excerpt:
      "81 il temsilciliğimizin katılımıyla yeni dönem planlamaları ve saha takvimleri değerlendirildi.",
    content:
      "Türkiye genelindeki il temsilciliklerimizin katılımıyla düzenlenen koordinasyon toplantısında teşkilatlanma süreci, saha çalışmaları ve toplumsal projelerin yerel düzeyde etkin uygulanması değerlendirilmiştir.",
    date: "21 Nis 2026",
    featured: true,
  },
  {
    slug: "genclik-ve-egitim-odakli-projeler",
    title: "Gençlik ve Eğitim Odaklı Projeler",
    category: "haber",
    excerpt:
      "Gençlik çalışmaları kapsamında eğitim ve kültür odaklı yeni proje başlıkları açıklandı.",
    content:
      "Federasyonumuz gençlik ve eğitim odaklı yeni projeler için hazırlık sürecini başlatmıştır. Bu kapsamda kültürel mirasın genç kuşaklara aktarılması, sosyal dayanışma bilincinin geliştirilmesi ve yerel etkinliklerin artırılması hedeflenmektedir.",
    date: "21 Nis 2026",
    featured: true,
  },
];

export function getNewsBySlug(slug: string) {
  return federationNews.find((post) => post.slug === slug);
}

export function getFeaturedNews(limit = 3) {
  return federationNews.filter((post) => post.featured).slice(0, limit);
}

export function getTickerItems() {
  return [
    ...federationNews.map((post) => ({
      label: post.title,
      href: `/haberler/${post.slug}`,
    })),
    { label: "Üyelik ve bağlı dernekler ağına katılın", href: "/uyelik" },
  ];
}
