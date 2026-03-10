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
      </section>
      <ContactFormSection />
    </>
  );
}
