# Anadolu Aşiretler Federasyonu — Web Sitesi

Modern, kurumsal ve SEO uyumlu federasyon web sitesi. **Next.js 16 (App Router)**, **React**, **TypeScript** ve **Tailwind CSS v4** ile geliştirilmektedir.

## Teknoloji

| Katman | Seçim |
|--------|--------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + TypeScript |
| Stil | Tailwind CSS v4 |
| Animasyon | Framer Motion (sonraki adımlar) |
| İkonlar | Lucide React |

## Klasör Yapısı

```
src/
├── app/                    # App Router sayfaları
│   ├── layout.tsx          # Kök layout (fontlar, SEO, SiteLayout)
│   ├── globals.css         # Marka renkleri ve temel stiller
│   ├── page.tsx            # Ana sayfa
│   ├── kurumsal/
│   │   ├── hakkimizda/
│   │   ├── tuzuk/
│   │   └── yonetim/
│   ├── haberler/
│   ├── uyelik/
│   └── iletisim/
├── components/
│   ├── layout/             # Header, Footer, PageHeader, SiteLayout
│   └── ui/                 # Button, Container, Logo, SectionHeading
├── config/                 # site.ts, navigation.ts
├── data/                   # stats, haberler, yönetim (içerik)
├── lib/                    # utils (cn)
└── types/                  # Paylaşılan TypeScript tipleri
public/
└── logo.jpg                # Federasyon logosu
```

## Renk Paleti

- **Navy** `#0B1F3A` — güven ve kurumsallık
- **Burgundy** `#7A1E2C` — asalet ve vurgu
- **Gold** `#C9A227` — detay ve prestij
- **Cream** `#F7F5F2` — arka plan

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

## Sonraki Adımlar

1. Ana sayfa: Hero, haber kartları, istatistik sayaçları, hakkımızda önizleme
2. Kurumsal sayfalar: tam içerik, yönetim profil kartları, tüzük PDF
3. Haberler: grid, filtre, detay sayfası (`/haberler/[slug]`)
4. Üyelik: bağlı dernekler listesi / harita
5. İletişim: form + Google Maps
