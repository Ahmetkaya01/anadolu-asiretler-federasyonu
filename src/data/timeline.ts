export type TimelineMilestone = {
  id: string;
  year: string;
  title: string;
  description: string;
  status: "published" | "coming-soon";
};

export const federationTimeline: TimelineMilestone[] = [
  {
    id: "foundation",
    year: "—",
    title: "Kuruluş",
    description: "Federasyonumuzun kuruluş süreci ve resmi tescil tarihçesi yakında paylaşılacaktır.",
    status: "coming-soon",
  },
  {
    id: "organization",
    year: "—",
    title: "81 İl Teşkilatlanması",
    description: "Türkiye genelinde il temsilcilikleri yapılanması sürecimiz devam etmektedir.",
    status: "coming-soon",
  },
  {
    id: "today",
    year: "2026",
    title: "Günümüz",
    description:
      "Eğitim, kültür ve sosyal dayanışma alanında faaliyetlerimizi il temsilciliklerimiz ve gönüllü ağımızla sürdürüyoruz.",
    status: "published",
  },
];
