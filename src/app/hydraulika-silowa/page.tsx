import { getCategoryBySlug } from "@/data/categories";
import { CategoryPageTemplate } from "@/components/templates/CategoryPageTemplate";
import type { Metadata } from "next";

const category = getCategoryBySlug("hydraulika-silowa")!;

export const metadata: Metadata = {
  title: category.metaTitle,
  description: category.metaDescription,
};

export default function HydraulikaSilowaPage() {
  return (
    <CategoryPageTemplate
      categoryLabel={category.label}
      categoryHref="/hydraulika-silowa"
      h1={category.h1}
      intro="Oferujemy pompy hydrauliczne, siłowniki, rozdzielacze, hydromotory i zwolnice do maszyn budowlanych. Regeneracja, naprawa i sprzedaż komponentów hydraulicznych. Profesjonalny serwis i szybka dostawa."
      subcategories={category.subcategories}
      basePath="/hydraulika-silowa"
    />
  );
}
