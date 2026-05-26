import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Tüzük ve Belgeler",
  description:
    "Anadolu Aşiretler Federasyonu tüzüğü ve resmi belgelerine buradan ulaşın.",
};

export default function TuzukPage() {
  return (
    <PagePlaceholder
      title="Tüzük ve Belgeler"
      description="Federasyon tüzüğü ve indirilebilir resmi belgeler."
      breadcrumb={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Kurumsal", href: "/kurumsal/hakkimizda" },
        { label: "Tüzük ve Belgeler" },
      ]}
    />
  );
}
