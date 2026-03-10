import { equipment } from "@/data/equipment";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return equipment.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const item = equipment.find((e) => e.slug === slug);
    return {
      title: item ? `${item.title} - KUMATEX` : "Osprzęt - KUMATEX",
      description: item?.description || "",
    };
  });
}

export default async function OsprzetDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = equipment.find((e) => e.slug === slug);
  if (!item) notFound();

  return (
    <>
      <section className="mx-auto max-w-[1440px] px-16 py-20">
        <p className="text-sm font-medium uppercase text-primary font-[family-name:var(--font-inter)]">Osprzęt</p>
        <h1 className="mt-2 font-[family-name:var(--font-inter)] text-4xl font-bold text-dark">
          {item.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-dark leading-relaxed">
          {item.description}
        </p>
      </section>
      <ContactFormSection />
    </>
  );
}
