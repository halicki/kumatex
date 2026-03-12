import { getSubcategoryBySlug, getCategoryBySlug } from "@/data/categories";
import { SubcategoryPageTemplate } from "@/components/templates/SubcategoryPageTemplate";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const category = getCategoryBySlug("wynajem-sprzetu-budowlanego")!;

export function generateStaticParams() {
  return category.subcategories.map((s) => ({ subcategory: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ subcategory: string }> }): Promise<Metadata> {
  const { subcategory } = await params;
  const data = getSubcategoryBySlug("wynajem-sprzetu-budowlanego", subcategory);
  if (!data) return {};
  return { title: data.subcategory.metaTitle, description: data.subcategory.metaDescription };
}

export default async function WynajemSubcategoryPage({ params }: { params: Promise<{ subcategory: string }> }) {
  const { subcategory } = await params;
  const data = getSubcategoryBySlug("wynajem-sprzetu-budowlanego", subcategory);
  if (!data) notFound();

  return (
    <SubcategoryPageTemplate
      categoryLabel="Wynajem Sprzętu"
      categoryHref="/wynajem-sprzetu-budowlanego"
      subcategoryLabel={data.subcategory.label}
      subcategoryHref={`/wynajem-sprzetu-budowlanego/${subcategory}`}
      h1={data.subcategory.h1}
      intro={`${data.subcategory.label} – profesjonalna obsługa, konkurencyjne ceny. Dostawa i montaż na terenie całej Polski.`}
    />
  );
}
