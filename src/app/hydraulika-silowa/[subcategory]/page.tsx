import { getSubcategoryBySlug, getCategoryBySlug } from "@/data/categories";
import { SubcategoryPageTemplate } from "@/components/templates/SubcategoryPageTemplate";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const category = getCategoryBySlug("hydraulika-silowa")!;

export function generateStaticParams() {
  return category.subcategories.map((s) => ({ subcategory: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ subcategory: string }> }): Promise<Metadata> {
  const { subcategory } = await params;
  const data = getSubcategoryBySlug("hydraulika-silowa", subcategory);
  if (!data) return {};
  return { title: data.subcategory.metaTitle, description: data.subcategory.metaDescription };
}

export default async function HydraulikaSubcategoryPage({ params }: { params: Promise<{ subcategory: string }> }) {
  const { subcategory } = await params;
  const data = getSubcategoryBySlug("hydraulika-silowa", subcategory);
  if (!data) notFound();

  return (
    <SubcategoryPageTemplate
      categoryLabel="Hydraulika Siłowa"
      categoryHref="/hydraulika-silowa"
      subcategoryLabel={data.subcategory.label}
      subcategoryHref={`/hydraulika-silowa/${subcategory}`}
      h1={data.subcategory.h1}
      intro={`${data.subcategory.label} do maszyn budowlanych. Oferujemy sprzedaż, regenerację i naprawę. Współpracujemy z czołowymi producentami. Szybka dostawa na terenie całej Polski.`}
    />
  );
}
