import { getCategoryBySlug } from "@/data/categories";
import { getEngineBrandMapping, brandMappings } from "@/data/brand-mappings";
import { brands as allBrands } from "@/data/brands";
import { SubcategoryPageTemplate } from "@/components/templates/SubcategoryPageTemplate";
import { BrandHubPageTemplate } from "@/components/templates/BrandHubPageTemplate";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const category = getCategoryBySlug("czesci-do-silnikow")!;

const engineBrandSlugs = brandMappings
  .filter((b) => b.categorySlug === "czesci-do-silnikow")
  .map((b) => b.brandSlug);

export function generateStaticParams() {
  const subcatParams = category.subcategories.map((s) => ({ slug: s.slug }));
  const brandParams = engineBrandSlugs.map((slug) => ({ slug }));
  return [...subcatParams, ...brandParams];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  const sub = category.subcategories.find((s) => s.slug === slug);
  if (sub) return { title: sub.metaTitle, description: sub.metaDescription };

  const brandMapping = getEngineBrandMapping(slug);
  if (brandMapping) return { title: brandMapping.metaTitle, description: brandMapping.metaDescription };

  return {};
}

export default async function CzesciDoSilnikowSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Check if it's a subcategory (tloki, panewki, etc.)
  const sub = category.subcategories.find((s) => s.slug === slug);
  if (sub) {
    return (
      <SubcategoryPageTemplate
        categoryLabel="Części do Silników"
        categoryHref="/czesci-do-silnikow"
        subcategoryLabel={sub.label}
        subcategoryHref={`/czesci-do-silnikow/${slug}`}
        h1={sub.h1}
        intro={`${sub.label} do silników Diesel maszyn budowlanych. Oferujemy oryginalne i zamienne części. Współpracujemy z GENEUS Polska. Szybka dostawa na terenie całej Polski.`}
      />
    );
  }

  // Check if it's an engine brand (yanmar, caterpillar, etc.)
  const brandMapping = getEngineBrandMapping(slug);
  if (brandMapping) {
    const brandData = allBrands.find((b) => b.slug === slug);
    return (
      <BrandHubPageTemplate
        categoryLabel="Części do Silników"
        categoryHref="/czesci-do-silnikow"
        subcategoryLabel={brandMapping.brandName}
        subcategoryHref={`/czesci-do-silnikow/${slug}`}
        brandName={brandMapping.brandName}
        brandHref={`/czesci-do-silnikow/${slug}`}
        h1={brandMapping.h1}
        description={brandData?.description || `Części zamienne do silników ${brandMapping.brandName} – tłoki, pierścienie tłokowe, uszczelki, panewki wału, zawory, pompy oleju. Oryginalne i zamienniki. Szybka dostawa.`}
        brandImage={brandData?.image}
        relatedLinks={[
          { label: "Serwis silników Diesel", href: "/serwis-maszyn/serwis-silnikow-diesel" },
          { label: "Regeneracja silników", href: "/serwis-maszyn/regeneracja-silnikow" },
          { label: "Kontakt", href: "/kontakt" },
        ]}
      />
    );
  }

  notFound();
}
