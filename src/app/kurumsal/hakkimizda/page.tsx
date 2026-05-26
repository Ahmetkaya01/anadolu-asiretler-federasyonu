import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Anadolu Aşiretler Federasyonu tarihçesi, vizyonu ve misyonu hakkında bilgi edinin.",
};

export default function HakkimizdaPage() {
  return (
    <PagePlaceholder
      title="Hakkımızda"
      description="Federasyonumuzun tarihçesi, vizyonu ve toplumsal misyonu."
      breadcrumb={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Kurumsal", href: "/kurumsal/hakkimizda" },
        { label: "Hakkımızda" },
      ]}
    />
  );
}
