import { getCategoryBySlug } from "@/data/categories";
import { brandMappings } from "@/data/brand-mappings";
import { CategoryPageTemplate } from "@/components/templates/CategoryPageTemplate";
import type { Metadata } from "next";

const category = getCategoryBySlug("czesci-do-silnikow")!;

export const metadata: Metadata = {
  title: category.metaTitle,
  description: category.metaDescription,
};

const engineBrands = brandMappings
  .filter((b) => b.categorySlug === "czesci-do-silnikow")
  .map((b) => ({
    label: `Części do silników ${b.brandName}`,
    slug: b.brandSlug,
  }));

const allSubcategories = [
  ...category.subcategories.map((s) => ({ label: s.label, slug: s.slug })),
  ...engineBrands,
];

export default function CzesciDoSilnikowPage() {
  return (
    <CategoryPageTemplate
      categoryLabel={category.label}
      categoryHref="/czesci-do-silnikow"
      h1={category.h1}
      intro="Oferujemy pełną gamę części do silników Diesel maszyn budowlanych – tłoki, pierścienie tłokowe, uszczelki, panewki wału, zawory, pompy oleju, rozruszniki i alternatory. Współpracujemy z GENEUS Polska – oficjalnym dystrybutorem części zamiennych."
      subcategories={allSubcategories}
      basePath="/czesci-do-silnikow"
    />
  );
}
