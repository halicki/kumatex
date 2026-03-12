import { getCategoryBySlug } from "@/data/categories";
import { CategoryPageTemplate } from "@/components/templates/CategoryPageTemplate";
import type { Metadata } from "next";

const category = getCategoryBySlug("czesci-do-maszyn")!;

export const metadata: Metadata = {
  title: category.metaTitle,
  description: category.metaDescription,
};

export default function CzesciDoMaszynPage() {
  return (
    <CategoryPageTemplate
      categoryLabel={category.label}
      categoryHref="/czesci-do-maszyn"
      h1={category.h1}
      intro="Oferujemy oryginalne i zamienne części do maszyn budowlanych wszystkich czołowych marek. Współpracujemy z GENEUS Polska – oficjalnym dystrybutorem części zamiennych do silników Diesel. Szybka dostawa na terenie całej Polski."
      subcategories={category.subcategories}
      basePath="/czesci-do-maszyn"
    />
  );
}
