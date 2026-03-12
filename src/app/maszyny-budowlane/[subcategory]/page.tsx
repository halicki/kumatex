import { getSubcategoryBySlug, getCategoryBySlug } from "@/data/categories";
import { getBrandMappingsForSubcategory } from "@/data/brand-mappings";
import { SubcategoryPageTemplate } from "@/components/templates/SubcategoryPageTemplate";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const category = getCategoryBySlug("maszyny-budowlane")!;

export function generateStaticParams() {
  return category.subcategories.map((s) => ({ subcategory: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ subcategory: string }> }): Promise<Metadata> {
  const { subcategory } = await params;
  const data = getSubcategoryBySlug("maszyny-budowlane", subcategory);
  if (!data) return {};
  return { title: data.subcategory.metaTitle, description: data.subcategory.metaDescription };
}

export default async function MaszynySubcategoryPage({ params }: { params: Promise<{ subcategory: string }> }) {
  const { subcategory } = await params;
  const data = getSubcategoryBySlug("maszyny-budowlane", subcategory);
  if (!data) notFound();

  const brandMappings = getBrandMappingsForSubcategory("maszyny-budowlane", subcategory);
  const brands = brandMappings.map((b) => ({ name: b.brandName, slug: b.brandSlug }));

  return (
    <SubcategoryPageTemplate
      categoryLabel="Maszyny Budowlane"
      categoryHref="/maszyny-budowlane"
      subcategoryLabel={data.subcategory.label}
      subcategoryHref={`/maszyny-budowlane/${subcategory}`}
      h1={data.subcategory.h1}
      intro={`Profesjonalny serwis, naprawy i części zamienne do ${data.subcategory.label.toLowerCase()}. Obsługujemy wszystkie czołowe marki. Mobilny serwis na terenie całej Polski.`}
      brands={brands}
      brandsBasePath={`/maszyny-budowlane/${subcategory}`}
    />
  );
}
