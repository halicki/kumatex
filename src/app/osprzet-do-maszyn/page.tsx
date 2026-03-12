import { getCategoryBySlug } from "@/data/categories";
import { CategoryPageTemplate } from "@/components/templates/CategoryPageTemplate";
import type { Metadata } from "next";

const category = getCategoryBySlug("osprzet-do-maszyn")!;

export const metadata: Metadata = {
  title: category.metaTitle,
  description: category.metaDescription,
};

export default function OsprzetDoMaszynPage() {
  return (
    <CategoryPageTemplate
      categoryLabel={category.label}
      categoryHref="/osprzet-do-maszyn"
      h1={category.h1}
      intro="Oferujemy osprzęt do maszyn budowlanych – filtry, łyżki, chwytaki, osprzęt HDS, przyssawki próżniowe i roboty montażowe. Oryginalne i zamienne części do koparek, ładowarek i żurawi."
      subcategories={category.subcategories}
      basePath="/osprzet-do-maszyn"
    />
  );
}
