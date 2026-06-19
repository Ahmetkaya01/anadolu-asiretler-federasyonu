"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import type { StatItem, ProvincialRepresentative } from "@/types";
import { getFeaturedNews } from "@/data/news";
import { heroSlides } from "@/data/hero-slides";
import { fadeUp, stagger, transition } from "@/lib/motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { RepresentativesSection } from "@/components/representatives/RepresentativesSection";
import { NewsCardLink } from "@/components/news/NewsCard";
import { FeatureBand } from "@/components/layout/FeatureBand";
import { HeroSlideshow } from "@/components/home/HeroSlideshow";

const quickLinks = [
  { title: "İletişim", text: "Federasyon iletişim bilgileri", href: "/iletisim" },
  { title: "Etkinlikler", text: "Faaliyet ve organizasyonlarımız", href: "/haberler" },
  { title: "Başkanın Mesajı", text: "Kurumsal vizyon ve çağrı", href: "/kurumsal/hakkimizda" },
  { title: "Duyurular", text: "Resmi bilgilendirmeler", href: "/haberler" },
  { title: "Projeler", text: "Toplumsal katkı projeleri", href: "/haberler" },
  { title: "İl Temsilcileri", text: "Bölgesel teşkilatlanma kadromuz", href: "/kurumsal/il-temsilcileri" },
];

const featuredNews = getFeaturedNews(3);

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
  const [slideCaption, setSlideCaption] = useState(heroSlides[0]?.caption);

  return (
    <main className="bg-background">
      {/* Landing hero */}
      <section className="relative min-h-[85vh] sm:min-h-[92vh]">
        <HeroSlideshow
          slides={heroSlides}
          onSlideChange={(index) => setSlideCaption(heroSlides[index]?.caption)}
        />

        <Container className="relative z-10 flex min-h-[85vh] flex-col justify-center py-28 sm:min-h-[92vh] sm:py-32">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={stagger.container}
          >
            <motion.p
              variants={fadeUp}
              transition={transition.base}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold"
            >
              {siteName}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              transition={transition.base}
              className="max-w-xl font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl lg:text-7xl"
            >
              {slogan}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              transition={transition.base}
              className="mt-5 max-w-lg text-lg leading-relaxed text-cream/85 sm:text-xl"
            >
              {mission}
            </motion.p>
            <motion.div
              variants={fadeUp}
              transition={transition.base}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button href="/kurumsal/hakkimizda" variant="primary" size="lg">
                Kurumsal
              </Button>
              <Button href="/iletisim" variant="outline" size="lg" className="text-cream border-gold/50 hover:text-cream">
                İletişim
              </Button>
            </motion.div>
          </motion.div>

          {slideCaption && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={slideCaption}
              className="mt-auto hidden pt-12 text-right text-sm font-medium tracking-wide text-cream/60 sm:block"
            >
              {slideCaption}
            </motion.p>
          )}
        </Container>

        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/50">
          <span className="text-[10px] uppercase tracking-[0.2em]">Keşfet</span>
          <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden />
        </div>
        <div className="divider-gold absolute bottom-0 left-0 right-0 z-10" />
      </section>

      {/* Başkanın mesajı */}
      <section className="border-b border-gold/10 bg-surface py-16">
        <Container>
          <Reveal>
            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[240px_1fr] lg:items-start">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[240px] overflow-hidden rounded-md border-2 border-gold/30 shadow-card">
                <Image
                  src="/president-ferhat-armagan.png"
                  alt="Ferhat ARMAĞAN — Federasyon Başkanı"
                  fill
                  className="object-contain object-top bg-surface-elevated"
                  sizes="240px"
                />
              </div>
              <blockquote className="relative border-l-4 border-gold pl-6 sm:pl-8">
                <p className="font-display text-2xl italic leading-relaxed text-foreground sm:text-3xl">
                  Birlik, beraberlik ve kültürel mirasımızı yaşatma amacıyla tüm
                  temsilciliklerimizle omuz omuza çalışıyoruz.
                </p>
                <p className="mt-5 text-lg leading-relaxed text-muted">
                  Federasyonumuz; eğitim, kültür ve sosyal dayanışma alanında sürdürülebilir
                  projelerle Anadolu&apos;nun köklü değerlerini geleceğe taşımayı hedefliyor.
                </p>
                <footer className="mt-8">
                  <p className="font-display text-2xl text-foreground">Ferhat ARMAĞAN</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-gold">
                    Federasyon Başkanı
                  </p>
                  <div className="mt-6">
                    <Button href="/kurumsal/hakkimizda" variant="ghost" size="sm">
                      Hakkımızda →
                    </Button>
                  </div>
                </footer>
              </blockquote>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Hızlı erişim */}
      <section className="bg-background py-20">
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
                    <h3 className="mt-2 font-display text-2xl text-foreground sm:text-3xl">{item.title}</h3>
                    <p className="mt-2 text-base text-muted">{item.text}</p>
                    <p className="mt-4 text-sm font-semibold text-gold-light transition-smooth group-hover:translate-x-1">
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
      <section className="border-y border-gold/10 bg-surface/50 py-20 bg-grain">
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
            {featuredNews.map((post) => (
              <motion.div key={post.slug} variants={fadeUp} transition={transition.base}>
                <NewsCardLink post={post} />
              </motion.div>
            ))}
          </motion.div>
          <Reveal className="mt-8 text-center">
            <Button href="/haberler" variant="ghost">
              Tüm haberler →
            </Button>
          </Reveal>
        </Container>
      </section>

      <RepresentativesSection representatives={representatives} showAllLink />

      <FeatureBand
        eyebrow="Temel Göstergeler"
        title="Köklü Geçmişten Güçlü Geleceğe"
        description="Federasyonumuzun kurumsal göstergeleri. İl temsilcilikleri yapılanması sürecimiz devam etmektedir."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-md border border-gold/20 bg-navy-light/50 p-6 text-center backdrop-blur-sm"
            >
              <p className="font-display text-5xl text-gold">
                <AnimatedCounter value={item.value} suffix={item.suffix ?? ""} />
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-cream">
                {item.label}
              </p>
              {item.description && (
                <p className="mt-3 text-xs leading-relaxed text-cream/65">{item.description}</p>
              )}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-cream/50">
          * İl temsilcilikleri teşkilatlanması devam etmektedir.
        </p>
      </FeatureBand>

      <section className="bg-background py-20">
        <Container>
          <Reveal>
            <motion.div
              whileHover={{ scale: 1.005 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="overflow-hidden rounded-lg border border-gold/25 bg-surface p-8 pattern-anatolian lg:p-10"
            >
              <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    Birlikte daha güçlü
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
                    Üyelik ve bağlı dernekler ağına katılın
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                    Temsilciliklerimiz ve gönüllü üyelerimizle kültürel mirası yaşatmak
                    için ortak çalışmalar yürütüyoruz.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <div className="flex flex-wrap gap-3 lg:justify-end">
                    <Button href="/uyelik" variant="primary">
                      Üyelik Bilgisi
                    </Button>
                    <Button href="/iletisim" variant="outline" className="text-cream border-gold/50">
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
