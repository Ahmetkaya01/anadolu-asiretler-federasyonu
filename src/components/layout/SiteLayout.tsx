import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

type SiteLayoutProps = {
  children: React.ReactNode;
};

/** Tüm sayfalarda paylaşılan üst/alt çerçeve */
export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <Header />
      <div className="flex flex-1 flex-col">{children}</div>
      <Footer />
    </>
  );
}
