import type { NavItem } from "@/types";

/** Ana navigasyon — ziyaretçi en fazla 2 tıklamada bilgiye ulaşmalı */
export const mainNavigation: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Kurumsal",
    href: "/kurumsal/hakkimizda",
    children: [
      { label: "Hakkımızda", href: "/kurumsal/hakkimizda" },
      { label: "Tüzük ve Belgeler", href: "/kurumsal/tuzuk" },
      { label: "Yönetim Kurulu", href: "/kurumsal/yonetim" },
    ],
  },
  { label: "Haberler", href: "/haberler" },
  { label: "Üyelik", href: "/uyelik" },
  { label: "İletişim", href: "/iletisim" },
];

export const footerNavigation = {
  kurumsal: [
    { label: "Hakkımızda", href: "/kurumsal/hakkimizda" },
    { label: "Tüzük ve Belgeler", href: "/kurumsal/tuzuk" },
    { label: "Yönetim Kurulu", href: "/kurumsal/yonetim" },
  ],
  icerik: [
    { label: "Haberler & Duyurular", href: "/haberler" },
    { label: "Bağlı Dernekler", href: "/uyelik" },
    { label: "İletişim", href: "/iletisim" },
  ],
} as const;
