import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

const postMap: Record<string, { title: string; category: string; content: string }> = {
  "federasyonumuzdan-guncel-aciklama": {
    title: "Federasyonumuzdan Güncel Açıklama",
    category: "Duyuru",
    content:
      "Anadolu Aşiretler Federasyonu olarak birlik, kültür ve dayanışma eksenindeki çalışmalarımızı kararlılıkla sürdürmekteyiz. İl temsilciliklerimiz ve gönüllülerimizle yürüttüğümüz faaliyetlerin yeni dönem planlamaları tamamlanmış olup, kamuoyuna düzenli bilgilendirme yapılacaktır.",
  },
  "il-temsilcilikleri-koordinasyon-toplantisi": {
    title: "İl Temsilcilikleri Koordinasyon Toplantısı",
    category: "Faaliyet",
    content:
      "Türkiye genelindeki il temsilciliklerimizin katılımıyla düzenlenen koordinasyon toplantısında teşkilatlanma süreci, saha çalışmaları ve toplumsal projelerin yerel düzeyde etkin uygulanması değerlendirilmiştir.",
  },
  "genclik-ve-egitim-odakli-projeler": {
    title: "Gençlik ve Eğitim Odaklı Projeler",
    category: "Haber",
    content:
      "Federasyonumuz gençlik ve eğitim odaklı yeni projeler için hazırlık sürecini başlatmıştır. Bu kapsamda kültürel mirasın genç kuşaklara aktarılması, sosyal dayanışma bilincinin geliştirilmesi ve yerel etkinliklerin artırılması hedeflenmektedir.",
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const post = postMap[slug];
  if (!post) {
    return { title: "Haber Bulunamadı" };
  }
  return {
    title: post.title,
    description: post.content.slice(0, 140),
  };
}

export default async function HaberDetayPage(props: PageProps) {
  const { slug } = await props.params;
  const post = postMap[slug];
  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={post.title}
        description={`${post.category} içeriği`}
        breadcrumb={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Haberler", href: "/haberler" },
          { label: post.title },
        ]}
      />
      <main>
        <Container className="py-16">
          <article className="mx-auto max-w-3xl rounded-sm border border-navy/10 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-burgundy">
              {post.category}
            </p>
            <h1 className="mt-3 font-display text-4xl text-navy">{post.title}</h1>
            <p className="mt-6 leading-relaxed text-slate">{post.content}</p>
          </article>
        </Container>
      </main>
    </>
  );
}
