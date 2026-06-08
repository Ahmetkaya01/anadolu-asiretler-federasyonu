"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { StatItem, ProvincialRepresentative } from "@/types";
import { fadeUp, stagger, transition } from "@/lib/motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { RepresentativesSection } from "@/components/representatives/RepresentativesSection";

const quickLinks = [
  { title: "İletişim", text: "Federasyon iletişim bilgileri", href: "/iletisim" },
  { title: "Etkinlikler", text: "Faaliyet ve organizasyonlarımız", href: "/haberler" },
  { title: "Başkanın Mesajı", text: "Kurumsal vizyon ve çağrı", href: "/kurumsal/hakkimizda" },
  { title: "Duyurular", text: "Resmi bilgilendirmeler", href: "/haberler" },
  { title: "Projeler", text: "Toplumsal katkı projeleri", href: "/haberler" },
  { title: "İl Temsilcileri", text: "Bölgesel teşkilatlanma kadromuz", href: "/kurumsal/il-temsilcileri" },
];

const headlines = [
  {
    title: "Federasyonumuzdan Güncel Açıklama",
    excerpt:
      "Toplumsal birlik, kültürel miras ve dayanışma eksenindeki çalışmalarımız hız kesmeden sürüyor.",
  },
  {
    title: "İl Temsilcilikleri Koordinasyon Toplantısı",
    excerpt:
      "81 il yapılanmamızın koordinasyonunu güçlendirmek üzere yeni dönem yol haritamız belirlendi.",
  },
  {
    title: "Gençlik ve Eğitim Odaklı Yeni Projeler",
    excerpt:
      "Eğitim, kültür ve sosyal dayanışma alanında yeni proje çağrıları için hazırlık süreci başlatıldı.",
  },
];

export function HomePageClient({
  siteName,
  slogan,
  mission,
  stats,
  representatives,
}: {
  siteName: string;
  slogan: string;
  mission: string;
  stats: StatItem[];
  representatives: ProvincialRepresentative[];
}) {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="relative aspect-[3/2] w-full max-h-[min(72vh,680px)]">
          <Image
            src="/hero-banner.png"
            alt="Anadolu Aşiretler Federasyonu — birlik, kültür ve dayanışma"
            fill
            className="object-cover object-[center_45%]"
            sizes="100vw"
            priority
            quality={90}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy/88 via-navy/40 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-navy/10"
            aria-hidden
          />
          <Container className="relative flex min-h-[320px] flex-col justify-center py-12 sm:min-h-[360px] sm:py-16 lg:py-20">
            <motion.div
              className="max-w-2xl"
              initial="hidden"
              animate="visible"
              variants={stagger.container}
            >
              <motion.p
                variants={fadeUp}
                transition={transition.base}
                className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold"
              >
                {siteName}
              </motion.p>
              <motion.h1
                variants={fadeUp}
                transition={transition.base}
                className="max-w-xl font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl lg:text-5xl"
              >
                {slogan}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                transition={transition.base}
                className="mt-5 max-w-lg text-base leading-relaxed text-cream/85 sm:text-lg"
              >
                {mission}
              </motion.p>
              <motion.div
                variants={fadeUp}
                transition={transition.base}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Button href="/kurumsal/hakkimizda" variant="primary" size="lg">
                  Hakkımızda
                </Button>
                <Button href="/haberler" variant="outline" size="lg">
                  Haberler
                </Button>
              </motion.div>
            </motion.div>
          </Container>
        </div>
      </section>

      {/* Başkanın mesajı */}
      <section className="border-b border-gold/10 bg-cream py-16">
        <Container>
          <Reveal>
            <blockquote className="relative mx-auto max-w-3xl text-center">
              <span
                className="pointer-events-none absolute -left-2 -top-6 font-display text-7xl leading-none text-gold/25 sm:-left-6"
                aria-hidden
              >
                “
              </span>
              <p className="relative font-display text-2xl leading-relaxed text-navy sm:text-3xl">
                Birlik, beraberlik ve kültürel mirasımızı yaşatma amacıyla tüm
                temsilciliklerimizle omuz omuza çalışıyoruz.
              </p>
              <p className="mt-5 text-base leading-relaxed text-slate">
                Federasyonumuz; eğitim, kültür ve sosyal dayanışma alanında sürdürülebilir
                projelerle Anadolu&apos;nun köklü değerlerini geleceğe taşımayı hedefliyor.
              </p>
              <footer className="mt-8">
                <p className="font-display text-xl text-navy">Ferhat ARMAĞAN</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-burgundy">
                  Federasyon Başkanı
                </p>
                <div className="mt-6">
                  <Button href="/kurumsal/hakkimizda" variant="ghost" size="sm">
                    Kurumsal profil →
                  </Button>
                </div>
              </footer>
            </blockquote>
          </Reveal>
        </Container>
      </section>

      {/* Hızlı erişim */}
      <section className="-mt-10 pb-20">
        <Container>
          <motion.div
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger.container}
          >
            {quickLinks.map((item) => (
              <motion.div key={item.title} variants={fadeUp} transition={transition.base}>
                <InteractiveCard>
                  <Link href={item.href} className="block">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                      Hızlı Erişim
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate">{item.text}</p>
                    <p className="mt-4 text-sm font-semibold text-burgundy transition-smooth group-hover:translate-x-1">
                      İncele →
                    </p>
                  </Link>
                </InteractiveCard>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Gündem */}
      <section className="bg-cream-dark/40 py-20 bg-grain">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Güncel"
              title="Federasyon Gündemi"
              description="Haber, duyuru ve faaliyetlerimizden öne çıkan başlıklar."
            />
          </Reveal>
          <motion.div
            className="mt-10 grid gap-5 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger.container}
          >
            {headlines.map((item) => (
              <motion.div key={item.title} variants={fadeUp} transition={transition.base}>
                <InteractiveCard>
                  <Badge variant="burgundy">Haber</Badge>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{item.excerpt}</p>
                  <div className="mt-6">
                    <Button href="/haberler" variant="ghost" size="sm">
                      Tüm içerikler →
                    </Button>
                  </div>
                </InteractiveCard>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <RepresentativesSection
        representatives={representatives}
        showAllLink
      />

      {/* İstatistikler + CTA */}
      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Temel Göstergeler"
              title="Köklü Geçmişten Güçlü Geleceğe"
              description="Mevcut federasyon verileri doğrultusunda güncellenen kurumsal göstergeler."
              align="center"
            />
          </Reveal>
          <motion.div
            className="mt-10 grid gap-5 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger.container}
          >
            {stats.map((item) => (
              <motion.div key={item.label} variants={fadeUp} transition={transition.base}>
                <InteractiveCard bodyClassName="text-center">
                  <p className="font-display text-5xl text-navy">
                    <AnimatedCounter value={item.value} suffix={item.suffix ?? ""} />
                  </p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-burgundy">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm text-slate">{item.description}</p>
                </InteractiveCard>
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={0.1} className="mt-12">
            <motion.div
              whileHover={{ scale: 1.005 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="overflow-hidden rounded-lg border border-gold/25 bg-navy p-8 text-cream lg:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    Birlikte daha güçlü
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
                    Üyelik ve bağlı dernekler ağına katılın
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cream/75">
                    Temsilciliklerimiz ve gönüllü üyelerimizle kültürel mirası yaşatmak
                    için ortak çalışmalar yürütüyoruz.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <div className="flex flex-wrap gap-3 lg:justify-end">
                    <Button href="/uyelik" variant="primary">
                      Üyelik Bilgisi
                    </Button>
                    <Button href="/iletisim" variant="outline">
                      İletişim
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
