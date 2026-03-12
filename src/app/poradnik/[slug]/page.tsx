import { articles, getArticleBySlug } from "@/data/articles";
import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return { title: article.metaTitle, description: article.metaDescription };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <ArticlePageTemplate
      title={article.title}
      h1={article.h1}
      intro={article.intro}
      content={article.content}
      relatedLinks={article.relatedLinks}
      slug={article.slug}
    />
  );
}
