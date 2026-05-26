import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Yönetim Kurulu",
  description:
    "Anadolu Aşiretler Federasyonu yönetim kurulu ve kurucular kadrosu.",
};

export default function YonetimPage() {
  return (
    <PagePlaceholder
      title="Yönetim Kurulu"
      description="Yönetim kurulu üyeleri ve kurucularımız."
      breadcrumb={[
        { label: "Ana Sayfa", href: "/" },
        { label: "Kurumsal", href: "/kurumsal/hakkimizda" },
        { label: "Yönetim Kurulu" },
      ]}
    />
  );
}
