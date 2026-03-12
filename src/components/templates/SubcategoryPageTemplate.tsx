import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

interface BrandLink {
  name: string;
  slug: string;
}

interface SubcategoryPageTemplateProps {
  categoryLabel: string;
  categoryHref: string;
  subcategoryLabel: string;
  subcategoryHref: string;
  h1: string;
  intro: string;
  brands?: BrandLink[];
  brandsBasePath?: string;
}

export function SubcategoryPageTemplate({
  categoryLabel,
  categoryHref,
  subcategoryLabel,
  subcategoryHref,
  h1,
  intro,
  brands,
  brandsBasePath,
}: SubcategoryPageTemplateProps) {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 py-12 lg:py-20">
        <Breadcrumbs
          items={[
            { label: categoryLabel, href: categoryHref },
            { label: subcategoryLabel, href: subcategoryHref },
          ]}
        />

        <p className="text-sm font-medium uppercase text-primary font-[family-name:var(--font-inter)]">
          {categoryLabel}
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-inter)] text-2xl md:text-3xl lg:text-4xl font-bold text-dark">
          {h1}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-dark leading-relaxed">{intro}</p>

        {brands && brands.length > 0 && brandsBasePath && (
          <div className="mt-12">
            <h2 className="font-[family-name:var(--font-inter)] text-xl font-bold text-dark mb-6">
              Obsługiwane marki
            </h2>
            <div className="flex flex-wrap gap-3">
              {brands.map((brand) => (
                <Link
                  key={brand.slug}
                  href={`${brandsBasePath}/${brand.slug}`}
                  className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-dark transition-all hover:border-primary hover:bg-primary/10"
                >
                  {brand.name}
                </Link>
              ))}
            </div>
          </div>
        )}

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
