import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsTicker } from "@/components/layout/NewsTicker";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

type SiteLayoutProps = {
  children: React.ReactNode;
};

/** Tüm sayfalarda paylaşılan üst/alt çerçeve */
export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <Header />
      <NewsTicker />
      <PageTransition>{children}</PageTransition>
      <Footer />
      <ScrollToTop />
    </>
  );
}
