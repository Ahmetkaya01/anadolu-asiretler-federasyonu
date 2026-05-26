import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Anadolu Aşiretler Federasyonu iletişim bilgileri, adres ve iletişim formu.",
};

export default function IletisimPage() {
  return (
    <PagePlaceholder
      title="İletişim"
      description="Bize ulaşın — adres, telefon, e-posta ve iletişim formu."
      breadcrumb={[
        { label: "Ana Sayfa", href: "/" },
        { label: "İletişim" },
      ]}
    />
  );
}
