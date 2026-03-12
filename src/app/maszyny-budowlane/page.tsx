import { getCategoryBySlug } from "@/data/categories";
import { CategoryPageTemplate } from "@/components/templates/CategoryPageTemplate";
import type { Metadata } from "next";

const category = getCategoryBySlug("maszyny-budowlane")!;

export const metadata: Metadata = {
  title: category.metaTitle,
  description: category.metaDescription,
};

export default function MaszynyBudowlanePage() {
  return (
    <CategoryPageTemplate
      categoryLabel={category.label}
      categoryHref="/maszyny-budowlane"
      h1={category.h1}
      intro="Oferujemy kompleksowy serwis, części zamienne i wynajem maszyn budowlanych. Specjalizujemy się w obsłudze minikoparek, koparek, koparko-ładowarek, ładowarek, wózków widłowych i żurawi HDS wszystkich czołowych marek."
      subcategories={category.subcategories}
      basePath="/maszyny-budowlane"
    />
  );
}
