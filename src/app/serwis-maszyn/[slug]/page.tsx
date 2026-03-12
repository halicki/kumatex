import { getCategoryBySlug } from "@/data/categories";
import { SubcategoryPageTemplate } from "@/components/templates/SubcategoryPageTemplate";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const category = getCategoryBySlug("serwis-maszyn")!;

export function generateStaticParams() {
  return category.subcategories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const sub = category.subcategories.find((s) => s.slug === slug);
  if (!sub) return {};
  return { title: sub.metaTitle, description: sub.metaDescription };
}

export default async function SerwisSubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sub = category.subcategories.find((s) => s.slug === slug);
  if (!sub) notFound();

  return (
    <SubcategoryPageTemplate
      categoryLabel="Serwis Maszyn"
      categoryHref="/serwis-maszyn"
      subcategoryLabel={sub.label}
      subcategoryHref={`/serwis-maszyn/${slug}`}
      h1={sub.h1}
      intro={`${sub.label} – profesjonalne naprawy i remonty. Oferujemy mobilny serwis na terenie całej Polski, diagnostykę komputerową, remonty kapitalne silników i regenerację hydrauliki. Na wszystkie prace udzielamy gwarancji pisemnych.`}
    />
  );
}
