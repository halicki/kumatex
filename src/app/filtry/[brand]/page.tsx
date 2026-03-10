import { brands } from "@/data/brands";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { GeneusPartnership } from "@/components/sections/GeneusPartnership";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

const filterBrands = ["caterpillar", "cummins", "bobcat", "kubota", "yanmar", "deutz", "perkins", "volvo-penta"];

export function generateStaticParams() {
  return filterBrands.map((b) => ({ brand: b }));
}

export function generateMetadata({ params }: { params: Promise<{ brand: string }> }): Promise<Metadata> {
  return params.then(({ brand }) => {
    const b = brands.find((br) => br.slug === brand);
    return {
      title: b ? `Filtry ${b.name} - KUMATEX` : "Filtry - KUMATEX",
    };
  });
}

export default async function FiltryBrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  const brandData = brands.find((b) => b.slug === brand);
  if (!brandData) notFound();

  return (
    <>
      <section className="mx-auto max-w-[1440px] px-16 py-20">
        <nav className="mb-6 flex items-center gap-2 text-sm text-gray">
          <Link href="/" className="hover:text-primary">Strona Główna</Link>
          <span>/</span>
          <Link href="/osprzet" className="hover:text-primary">Osprzęt</Link>
          <span>/</span>
          <span className="text-dark">Filtry {brandData.name}</span>
        </nav>
        <h1 className="font-[family-name:var(--font-inter)] text-4xl font-bold text-dark">
          Filtry {brandData.name}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-dark leading-relaxed">
          Jakość filtrów i ich regularna wymiana jest jednym z podstawowych warunków prawidłowej i wieloletniej pracy każdej maszyny budowlanej. Oferujemy filtry do maszyn budowlanych marki {brandData.name}.
        </p>
      </section>
      <GeneusPartnership />
      <ContactFormSection />
    </>
  );
}
