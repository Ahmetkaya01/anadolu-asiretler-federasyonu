import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";
import { Prose } from "@/components/ui/Prose";
import { getNewsBySlug, federationNews } from "@/data/news";
import { newsCategoryConfig } from "@/components/news/NewsCard";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return federationNews.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getNewsBySlug(slug);
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
  const post = getNewsBySlug(slug);
  if (!post) {
    notFound();
  }

  const cat = newsCategoryConfig[post.category];

  return (
    <>
      <PageHeader
        title={post.title}
        description={`${cat.text} — ${post.date}`}
        breadcrumb={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Haberler", href: "/haberler" },
          { label: post.title },
        ]}
      />
      <main className="bg-background">
        <Container className="py-16">
          <Card className="mx-auto max-w-3xl overflow-hidden">
            <CardBody>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge variant={cat.variant}>{cat.text}</Badge>
                <span className="text-xs text-muted">{post.date}</span>
              </div>
              <h1 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
                {post.title}
              </h1>
              <Prose className="mt-7">
                <p>{post.content}</p>
              </Prose>
            </CardBody>
          </Card>
        </Container>
      </main>
    </>
  );
}
