import type { StatItem } from "@/types";

/** Ana sayfa istatistik paneli — mevcut siteden alınan göstergeler */
export const federationStats: StatItem[] = [
  {
    value: 81,
    label: "İl Temsilciliği",
    description:
      "Türkiye genelinde teşkilatlanma hedefimiz doğrultusunda il temsilcilik yapılanmamız sürdürülmektedir.",
  },
  {
    value: 250,
    suffix: "+",
    label: "Toplumsal Proje",
    description:
      "Eğitim, kültür ve sosyal dayanışma alanında hayata geçirilen projelerle toplumumuza katkı sağlıyoruz.",
  },
  {
    value: 5000,
    suffix: "+",
    label: "Gönüllü Üye",
    description:
      "Federasyonumuz çatısı altında birlik ve beraberlik için gönüllü olarak destek veren güçlü bir topluluğa sahibiz.",
  },
];
