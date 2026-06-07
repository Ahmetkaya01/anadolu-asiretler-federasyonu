import { siteConfig } from "@/config/site";
import { federationStats } from "@/data/stats";
import { provincialRepresentatives } from "@/data/representatives";
import { HomePageClient } from "@/components/home/HomePageClient";

/**
 * Referans alınan federasyon portallarıyla benzer,
 * blok tabanlı kurumsal ana sayfa.
 */
export default function HomePage() {
  return (
    <HomePageClient
      siteName={siteConfig.name}
      slogan={siteConfig.slogan}
      mission={siteConfig.mission}
      stats={federationStats}
      representatives={provincialRepresentatives}
    />
  );
}
