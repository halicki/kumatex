import { brands } from "@/data/brands";
import { parts } from "@/data/parts";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export function generateStaticParams() {
  return parts.map((p) => ({ brand: p.brandSlug, part: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ brand: string; part: string }> }): Promise<Metadata> {
  return params.then(({ brand, part }) => {
    const p = parts.find((pp) => pp.brandSlug === brand && pp.slug === part);
    return {
      title: p ? `${p.name} - KUMATEX` : "Części - KUMATEX",
      description: p?.description || "",
    };
  });
}

export default async function PartPage({ params }: { params: Promise<{ brand: string; part: string }> }) {
  const { brand, part } = await params;
  const brandData = brands.find((b) => b.slug === brand);
  const partData = parts.find((p) => p.brandSlug === brand && p.slug === part);
  if (!brandData || !partData) notFound();

  return (
    <>
      <section className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 py-12 lg:py-20">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray">
          <Link href="/" className="hover:text-primary">Strona Główna</Link>
          <span>/</span>
          <Link href="/czesci-zamienne" className="hover:text-primary">Części zamienne</Link>
          <span>/</span>
          <Link href={`/czesci-zamienne/${brand}`} className="hover:text-primary">{brandData.name}</Link>
          <span>/</span>
          <span className="text-dark">{partData.name}</span>
        </nav>

        <h1 className="font-[family-name:var(--font-inter)] text-2xl md:text-3xl lg:text-4xl font-bold text-dark">
          {partData.name}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-dark leading-relaxed">
          {partData.description}
        </p>

        {partData.image && (
          <div className="mt-8 relative h-[250px] md:h-[400px] w-full md:w-[600px] overflow-hidden rounded">
            <Image src={`/${partData.image}`} alt={partData.name} fill className="object-cover" unoptimized />
          </div>
        )}

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+48798889554"
            className="inline-flex h-12 items-center justify-center gap-2 rounded bg-primary px-8 font-[family-name:var(--font-inter)] text-lg font-bold text-dark transition-colors hover:bg-primary/90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>
            Zapytaj o dostępność
          </a>
          <Link
            href="/kontakt"
            className="inline-flex h-12 items-center justify-center gap-2 rounded border-2 border-dark px-8 font-[family-name:var(--font-inter)] text-lg font-bold text-dark transition-colors hover:bg-dark hover:text-white"
          >
            Wyślij zapytanie
          </Link>
          <a
            href={`https://geneus.pl`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded px-6 font-[family-name:var(--font-inter)] text-base text-dark underline underline-offset-4 hover:text-primary transition-colors"
          >
            Zobacz na geneus.pl
          </a>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
