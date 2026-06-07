export type VisitPhoto = {
  id: string;
  image: string;
  title: string;
  description?: string;
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
    title: "Üst Düzey Kurumsal Ziyaret",
    description:
      "Anadolu Aşiretler Federasyonu temsilcilerinin üst düzey kurumsal ziyaretinden bir an.",
  },
  {
    id: "visit-04",
    image: "/visits/visit-04.png",
    title: "Diplomatik ve Temsil Ziyareti",
    description:
      "Federasyonumuzun temsil ve diplomasi faaliyetleri kapsamındaki resmî ziyaret.",
  },
];
