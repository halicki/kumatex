import { services } from "@/data/services";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { notFound } from "next/navigation";
import Link from "next/link";
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
      <section className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 py-12 lg:py-20">
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray">
          <Link href="/" className="hover:text-primary">Strona Główna</Link>
          <span>/</span>
          <Link href="/serwis" className="hover:text-primary">Serwis</Link>
          <span>/</span>
          <span className="text-dark">{service.title}</span>
        </nav>

        <p className="text-sm font-medium uppercase text-primary font-[family-name:var(--font-inter)]">Serwis</p>
        <h1 className="mt-2 font-[family-name:var(--font-inter)] text-2xl md:text-3xl lg:text-4xl font-bold text-dark">
          {service.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-dark leading-relaxed">
          {service.description}
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="tel:+48798889554"
            className="inline-flex h-12 items-center justify-center gap-2 rounded bg-primary px-8 font-[family-name:var(--font-inter)] text-lg font-bold text-dark transition-colors hover:bg-primary/90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>
            Zadzwoń i umów serwis
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
