import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Haberler ve Duyurular",
  description:
    "Federasyon faaliyetleri, basın açıklamaları, etkinlikler ve duyurular.",
};

export default function HaberlerPage() {
  return (
    <PagePlaceholder
      title="Haberler & Duyurular"
      description="Güncel haberler, duyurular ve faaliyetler."
      breadcrumb={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Haberler" },
      ]}
    />
  );
}
