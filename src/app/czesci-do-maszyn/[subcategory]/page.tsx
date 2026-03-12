import { getSubcategoryBySlug, getCategoryBySlug } from "@/data/categories";
import { SubcategoryPageTemplate } from "@/components/templates/SubcategoryPageTemplate";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const category = getCategoryBySlug("czesci-do-maszyn")!;

export function generateStaticParams() {
  return category.subcategories.map((s) => ({ subcategory: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ subcategory: string }> }): Promise<Metadata> {
  const { subcategory } = await params;
  const data = getSubcategoryBySlug("czesci-do-maszyn", subcategory);
  if (!data) return {};
  return { title: data.subcategory.metaTitle, description: data.subcategory.metaDescription };
}

export default async function CzesciSubcategoryPage({ params }: { params: Promise<{ subcategory: string }> }) {
  const { subcategory } = await params;
  const data = getSubcategoryBySlug("czesci-do-maszyn", subcategory);
  if (!data) notFound();

  return (
    <SubcategoryPageTemplate
      categoryLabel="Części do Maszyn"
      categoryHref="/czesci-do-maszyn"
      subcategoryLabel={data.subcategory.label}
      subcategoryHref={`/czesci-do-maszyn/${subcategory}`}
      h1={data.subcategory.h1}
      intro={`Oryginalne i zamienne ${data.subcategory.label.toLowerCase()}. Współpracujemy z GENEUS Polska – oficjalnym dystrybutorem części. Szybka dostawa na terenie całej Polski.`}
    />
  );
}
