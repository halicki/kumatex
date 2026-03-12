import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

interface SubcategoryCard {
  label: string;
  slug: string;
  description?: string;
}

interface CategoryPageTemplateProps {
  categoryLabel: string;
  categoryHref: string;
  h1: string;
  intro: string;
  subcategories: SubcategoryCard[];
  basePath: string;
}

export function CategoryPageTemplate({
  categoryLabel,
  categoryHref,
  h1,
  intro,
  subcategories,
  basePath,
}: CategoryPageTemplateProps) {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 py-12 lg:py-20">
        <Breadcrumbs items={[{ label: categoryLabel, href: categoryHref }]} />

        <p className="text-sm font-medium uppercase text-primary font-[family-name:var(--font-inter)]">
          {categoryLabel}
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-inter)] text-2xl md:text-3xl lg:text-4xl font-bold text-dark">
          {h1}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-dark leading-relaxed">{intro}</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subcategories.map((sub) => (
            <Link
              key={sub.slug}
              href={`${basePath}/${sub.slug}`}
              className="group block rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <h2 className="font-[family-name:var(--font-inter)] text-lg font-bold text-dark group-hover:text-primary transition-colors">
                {sub.label}
              </h2>
              {sub.description && (
                <p className="mt-2 text-sm text-gray line-clamp-3">{sub.description}</p>
              )}
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                Sprawdź ofertę →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+48798889554"
            className="inline-flex h-12 items-center justify-center gap-2 rounded bg-primary px-8 font-[family-name:var(--font-inter)] text-lg font-bold text-dark transition-colors hover:bg-primary/90"
          >
            Zadzwoń: +48 798 889 554
          </a>
          <Link
            href="/kontakt"
            className="inline-flex h-12 items-center justify-center gap-2 rounded border-2 border-dark px-8 font-[family-name:var(--font-inter)] text-lg font-bold text-dark transition-colors hover:bg-dark hover:text-white"
          >
            Wyślij zapytanie
          </Link>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
