import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Üyelik ve Bağlı Dernekler",
  description:
    "Anadolu Aşiretler Federasyonu'na bağlı dernekler ve üyelik bilgileri.",
};

export default function UyelikPage() {
  return (
    <PagePlaceholder
      title="Bağlı Dernekler"
      description="Federasyonumuza bağlı dernekler ve temsilcilikler."
      breadcrumb={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Üyelik" },
      ]}
    />
  );
}
