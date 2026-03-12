import { brands } from "@/data/brands";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { ContentSection } from "@/components/ui/ContentSection";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return brands.map((b) => ({ brand: b.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  return params.then(({ brand }) => {
    const b = brands.find((br) => br.slug === brand);
    const metaDesc = b?.content?.originalText?.[0]?.slice(0, 160) || b?.description || "";
    return {
      title: b ? `${b.name} - Części zamienne - KUMATEX` : "Marka - KUMATEX",
      description: metaDesc,
    };
  });
}

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  const brandData = brands.find((b) => b.slug === brand);
  if (!brandData) notFound();

  // Import parts dynamically to get sub-parts for this brand
  const { parts } = await import("@/data/parts");
  const brandParts = parts.filter((p: { brandSlug: string }) => p.brandSlug === brand);

  return (
    <>
      <section className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 py-12 lg:py-20">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray">
          <Link href="/" className="hover:text-primary">Strona Główna</Link>
          <span>/</span>
          <Link href="/czesci-zamienne" className="hover:text-primary">Części zamienne</Link>
          <span>/</span>
          <span className="text-dark">{brandData.name}</span>
        </nav>

        <h1 className="font-[family-name:var(--font-inter)] text-2xl md:text-3xl lg:text-4xl font-bold text-dark">
          {brandData.name}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-dark leading-relaxed">
          {brandData.description}
        </p>

        {brandData.content && <ContentSection content={brandData.content} />}

        {brandParts.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 font-[family-name:var(--font-inter)] text-2xl font-bold text-dark">
              Kategorie części
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {brandParts.map((part: { slug: string; name: string }, i: number) => (
                <Link
                  key={part.slug}
                  href={`/czesci-zamienne/${brand}/${part.slug}`}
                  className="flex items-center gap-4 rounded border border-gray-200 p-4 transition-colors hover:border-primary"
                >
                  <span className="font-[family-name:var(--font-inter)] text-xl font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-lg text-dark">{part.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
      <ContactFormSection />
    </>
  );
}
