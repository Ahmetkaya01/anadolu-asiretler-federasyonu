export type LeadershipMember = {
  id: string;
  name: string;
  role: string;
  subtitle?: string;
  image?: string;
  phone?: string;
  phoneHref?: string;
  isPlaceholder?: boolean;
};

export const federationPresident: LeadershipMember = {
  id: "ferhat-armagan",
  name: "Ferhat ARMAĞAN",
  role: "ANADOLU AŞİRETLER FEDERASYONU GENEL BAŞKANI",
  image: "/president-ferhat-armagan.png",
};

/** Başkan yardımcıları */
export const vicePresidents: LeadershipMember[] = [
  {
    id: "ozgur-kavak-vp",
    name: "Uzm.Dr. ÖZGÜR KAVAK",
    role: "Başkan Yardımcısı",
    subtitle: "ÇOCUK SAĞLIĞI VE HASTALIKLARI UZMANI",
    image: "/representatives/afyonkarahisar.jpg",
    phone: "0533 660 18 29",
    phoneHref: "tel:+905336601829",
  },
  {
    id: "ahmet-hacioglu",
    name: "Ahmet HACIOĞLU",
    role: "Başkan Yardımcısı",
    subtitle: "Sipki Aşireti Kanaat Önderi",
  },
  {
    id: "abdullah-bozkurt",
    name: "Abdullah BOZKURT",
    role: "Başkan Yardımcısı",
    subtitle: "Elya Aşireti Kanaat Önderi",
  },
  {
    id: "ferzende-savluk",
    name: "Ferzende ŞAVLUK",
    role: "Başkan Yardımcısı",
    subtitle: "Şeyh Bızini Aşireti Lideri",
  },
];

/** Güncel yönetim kurulu listesi */
export const boardMembers: LeadershipMember[] = [
  {
    id: "ahmet-kavlak",
    name: "Doç. Dr. Ahmet KAVLAK",
    role: "Yönetim Kurulu Üyesi",
    subtitle: "Kanaat Önderi, Iğdır Üniversitesi Mantık Ana Bilim Dalı Başkanı",
  },
  {
    id: "omer-avci",
    name: "Ömer AVCI",
    role: "Yönetim Kurulu Üyesi",
    subtitle: "Sipki Aşireti Kanaat Önderi, İş Adamı",
  },
  {
    id: "adnan-kalkan",
    name: "Adnan KALKAN",
    role: "Yönetim Kurulu Üyesi",
    subtitle: "Kanaat Önderi, Yazar, Uzman Sosyolog ve Psikolog",
  },
  {
    id: "board-placeholder-4",
    name: "—",
    role: "Yönetim Kurulu Üyesi",
    isPlaceholder: true,
  },
  {
    id: "fevzi-ozgokce",
    name: "Prof. Dr. Fevzi ÖZGÖKÇE",
    role: "Yönetim Kurulu Üyesi",
    subtitle:
      "Van Yüzüncü Yıl Üniversitesi Öğretim Üyesi, Burukan Aşireti Kanaat Önderi",
  },
  {
    id: "tayyip-elci",
    name: "Dr. Tayyip ELÇİ",
    role: "Yönetim Kurulu Üyesi",
    subtitle: "Medreseler Birliği Vakfı Başkanı",
  },
  {
    id: "zafer-tel",
    name: "Prof. Dr. Zafer TEL",
    role: "Yönetim Kurulu Üyesi",
    subtitle: "Iğdır Üniversitesi Öğretim Üyesi",
  },
  {
    id: "ibrahim-armagan",
    name: "İbrahim ARMAĞAN",
    role: "Yönetim Kurulu Üyesi",
    subtitle: "İnşaat Mühendisi, Burukan Aşireti Kanaat Önderi",
  },
  {
    id: "ali-guner",
    name: "Ali GÜNER",
    role: "Yönetim Kurulu Üyesi",
    subtitle: "Eski Iğdır Milletvekili, Redkan Aşireti İleri Geleni, Kanaat Önderi",
  },
  {
    id: "zeki-yildirim",
    name: "Zeki YILDIRIM",
    role: "Yönetim Kurulu Üyesi",
    subtitle: "Gelturan Aşireti Kanaat Önderi",
  },
];
