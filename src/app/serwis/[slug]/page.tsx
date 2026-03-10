import { services } from "@/data/services";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = services.find((s) => s.slug === slug);
    return {
      title: service ? `${service.title} - KUMATEX` : "Serwis - KUMATEX",
      description: service?.description || "",
    };
  });
}

export default async function SerwisDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="mx-auto max-w-[1440px] px-16 py-20">
        <p className="text-sm font-medium uppercase text-primary font-[family-name:var(--font-inter)]">Serwis</p>
        <h1 className="mt-2 font-[family-name:var(--font-inter)] text-4xl font-bold text-dark">
          {service.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-dark leading-relaxed">
          {service.description}
        </p>
      </section>
      <ContactFormSection />
    </>
  );
}
