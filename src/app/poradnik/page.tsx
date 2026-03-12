import Link from "next/link";
import { articles } from "@/data/articles";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poradnik Maszyn Budowlanych – Artykuły i Wskazówki | Kumatex",
  description: "Poradnik maszyn budowlanych ✓ Artykuły ekspertów ✓ Porady serwisowe ✓ Dobór części ✓ Koszty regeneracji. Czytaj poradnik Kumatex!",
};

export default function PoradnikPage() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 py-12 lg:py-20">
        <Breadcrumbs items={[{ label: "Poradnik", href: "/poradnik" }]} />

        <p className="text-sm font-medium uppercase text-primary font-[family-name:var(--font-inter)]">
          Poradnik
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-inter)] text-2xl md:text-3xl lg:text-4xl font-bold text-dark">
          Poradnik Maszyn Budowlanych – Artykuły i Wskazówki
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-dark leading-relaxed">
          Praktyczne porady od ekspertów KUMATEX. Dowiedz się jak dbać o maszyny budowlane, dobierać części zamienne i optymalizować koszty serwisu.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/poradnik/${article.slug}`}
              className="group block rounded-lg border border-gray-200 p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <h2 className="font-[family-name:var(--font-inter)] text-lg font-bold text-dark group-hover:text-primary transition-colors">
                {article.title}
              </h2>
              <p className="mt-3 text-sm text-gray line-clamp-3">{article.intro}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                Czytaj artykuł →
              </span>
            </Link>
          ))}
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
