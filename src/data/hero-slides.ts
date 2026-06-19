export type HeroSlide = {
  id: string;
  /** Görsel yolu — yeni görseller için public/hero/ altına ekleyin */
  src: string;
  alt: string;
  caption?: string;
  /** cover = alanı doldurur; contain = görselin tamamı görünür */
  fit?: "cover" | "contain";
  objectPosition?: string;
};

/**
 * Ana sayfa hero slideshow görselleri.
 *
 * Yeni görsel eklemek için:
 * 1. Dosyayı public/hero/ klasörüne koyun (ör. slide-01.jpg)
 * 2. Aşağıya yeni bir kayıt ekleyin
 */
export const heroSlides: HeroSlide[] = [
  {
    id: "01",
    src: "/hero-banner.png",
    alt: "Anadolu Aşiretler Federasyonu — birlik ve dayanışma",
    caption: "Birlik, Kültür ve Dayanışma",
    fit: "cover",
    objectPosition: "center center",
  },
  {
    id: "02",
    src: "/visits/visit-01.png",
    alt: "Federasyon resmî ziyaret ve temasları",
    caption: "Kurumsal Temaslar",
    fit: "contain",
    objectPosition: "center top",
  },
  {
    id: "03",
    src: "/visits/visit-02.png",
    alt: "Siyasi ve toplumsal kurumlarla görüşmeler",
    caption: "Resmî Görüşmeler",
    fit: "contain",
    objectPosition: "center center",
  },
  {
    id: "04",
    src: "/visits/visit-03.png",
    alt: "Federasyon ziyaret programı",
    caption: "Ziyaretlerimiz",
    fit: "contain",
    objectPosition: "center center",
  },
  {
    id: "05",
    src: "/visits/visit-04.png",
    alt: "Federasyon faaliyetlerinden kareler",
    caption: "Faaliyetlerimiz",
    fit: "contain",
    objectPosition: "center center",
  },
];

/** Hero slayt değişim süresi (1–2 sn arası) */
export const HERO_SLIDE_INTERVAL_MS = 1500;
export const HERO_SLIDE_FADE_MS = 450;
