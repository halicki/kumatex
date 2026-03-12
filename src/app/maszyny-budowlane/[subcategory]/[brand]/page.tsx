import { getCategoryBySlug } from "@/data/categories";
import { getBrandMapping, getBrandMappingsForSubcategory } from "@/data/brand-mappings";
import { brands as allBrands } from "@/data/brands";
import { BrandHubPageTemplate } from "@/components/templates/BrandHubPageTemplate";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const category = getCategoryBySlug("maszyny-budowlane")!;

export function generateStaticParams() {
  const params: { subcategory: string; brand: string }[] = [];
  for (const sub of category.subcategories) {
    const mappings = getBrandMappingsForSubcategory("maszyny-budowlane", sub.slug);
    for (const m of mappings) {
      params.push({ subcategory: sub.slug, brand: m.brandSlug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ subcategory: string; brand: string }> }): Promise<Metadata> {
  const { subcategory, brand } = await params;
  const mapping = getBrandMapping("maszyny-budowlane", subcategory, brand);
  if (!mapping) return {};
  return { title: mapping.metaTitle, description: mapping.metaDescription };
}

export default async function BrandHubPage({ params }: { params: Promise<{ subcategory: string; brand: string }> }) {
  const { subcategory, brand } = await params;
  const mapping = getBrandMapping("maszyny-budowlane", subcategory, brand);
  if (!mapping) notFound();

  const sub = category.subcategories.find((s) => s.slug === subcategory);
  if (!sub) notFound();

  const brandData = allBrands.find((b) => b.slug === brand);

  const relatedLinks = [
    { label: `Serwis ${sub.label.toLowerCase()}`, href: `/serwis-maszyn` },
    { label: `Części do ${sub.label.toLowerCase()}`, href: `/czesci-do-maszyn/${subcategory}` },
    { label: "Kontakt", href: "/kontakt" },
  ];

  return (
    <BrandHubPageTemplate
      categoryLabel="Maszyny Budowlane"
      categoryHref="/maszyny-budowlane"
      subcategoryLabel={sub.label}
      subcategoryHref={`/maszyny-budowlane/${subcategory}`}
      brandName={mapping.brandName}
      brandHref={`/maszyny-budowlane/${subcategory}/${brand}`}
      h1={mapping.h1}
      description={brandData?.description || `Profesjonalny serwis i części zamienne do ${mapping.brandName} ${sub.label.toLowerCase()}. Oferujemy naprawy, remonty silników, regenerację hydrauliki i mobilny serwis na terenie całej Polski.`}
      brandImage={brandData?.image}
      relatedLinks={relatedLinks}
    />
  );
}
