import { getCategoryBySlug } from "@/data/categories";
import { CategoryPageTemplate } from "@/components/templates/CategoryPageTemplate";
import type { Metadata } from "next";

const category = getCategoryBySlug("serwis-maszyn")!;

export const metadata: Metadata = {
  title: category.metaTitle,
  description: category.metaDescription,
};

export default function SerwisMaszynPage() {
  return (
    <CategoryPageTemplate
      categoryLabel={category.label}
      categoryHref="/serwis-maszyn"
      h1={category.h1}
      intro="Profesjonalny serwis maszyn budowlanych i drogowych. Oferujemy naprawy, remonty kapitalne silników Diesel, regenerację hydrauliki i mobilny serwis na terenie całej Polski. Specjalizujemy się w naprawach najtrudniejszych, z wieloletnim doświadczeniem i dostępem do oryginalnych części zamiennych."
      subcategories={category.subcategories}
      basePath="/serwis-maszyn"
    />
  );
}
