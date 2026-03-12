import { getSubcategoryBySlug, getCategoryBySlug } from "@/data/categories";
import { SubcategoryPageTemplate } from "@/components/templates/SubcategoryPageTemplate";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const category = getCategoryBySlug("osprzet-do-maszyn")!;

export function generateStaticParams() {
  return category.subcategories.map((s) => ({ subcategory: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ subcategory: string }> }): Promise<Metadata> {
  const { subcategory } = await params;
  const data = getSubcategoryBySlug("osprzet-do-maszyn", subcategory);
  if (!data) return {};
  return { title: data.subcategory.metaTitle, description: data.subcategory.metaDescription };
}

export default async function OsprzetSubcategoryPage({ params }: { params: Promise<{ subcategory: string }> }) {
  const { subcategory } = await params;
  const data = getSubcategoryBySlug("osprzet-do-maszyn", subcategory);
  if (!data) notFound();

  return (
    <SubcategoryPageTemplate
      categoryLabel="Osprzęt do Maszyn"
      categoryHref="/osprzet-do-maszyn"
      subcategoryLabel={data.subcategory.label}
      subcategoryHref={`/osprzet-do-maszyn/${subcategory}`}
      h1={data.subcategory.h1}
      intro={`${data.subcategory.label} – oryginalne i zamienne. Oferujemy szeroką gamę osprzętu do maszyn budowlanych i rolniczych. Szybka dostawa na terenie całej Polski.`}
    />
  );
}
