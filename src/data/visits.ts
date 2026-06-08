export type VisitNote = {
  quote: string;
  author: string;
  authorTitle: string;
};

export type VisitPhoto = {
  id: string;
  image: string;
  title: string;
  description?: string;
  visitNote?: VisitNote;
};

export const federationVisits: VisitPhoto[] = [
  {
    id: "visit-01",
    image: "/visits/visit-01.png",
    title: "Resmî Ziyaret ve Temaslarda Birlik",
    description:
      "Federasyon temsilcilerimizin kurumsal temas ve dayanışma çerçevesindeki ziyaretlerinden bir kare.",
  },
  {
    id: "visit-02",
    image: "/visits/visit-02.png",
    title: "Siyasi ve Toplumsal Kurumlarla Görüşme",
    description:
      "Federasyon heyetimizin siyasi kurumlarla gerçekleştirdiği resmî görüşme.",
  },
  {
    id: "visit-03",
    image: "/visits/visit-03.png",
    title: "Üst Düzey Kurumsal Ziyaret — MHP Genel Başkanı Devlet BAHÇELİ",
    description:
      "Anadolu Aşiretler Federasyonu temsilcilerinin MHP Genel Başkanı Devlet BAHÇELİ ile gerçekleştirdiği üst düzey kurumsal ziyaret.",
    visitNote: {
      quote:
        "Davamızın harcı duayla karılmış, haysiyet ve hedefleri nice kahramanımızın fedakârlıklarıyla yoğrulmuştur.",
      author: "Devlet BAHÇELİ",
      authorTitle: "MHP Genel Başkanı",
    },
  },
  {
    id: "visit-04",
    image: "/visits/visit-04.png",
    title: "Diplomatik ve Temsil Ziyareti",
    description:
      "Federasyonumuzun temsil ve diplomasi faaliyetleri kapsamındaki resmî ziyaret.",
  },
];
