import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactFormSection } from "@/components/sections/ContactFormSection";

interface BrandHubPageTemplateProps {
  categoryLabel: string;
  categoryHref: string;
  subcategoryLabel: string;
  subcategoryHref: string;
  brandName: string;
  brandHref: string;
  h1: string;
  description: string;
  brandImage?: string;
  relatedLinks?: { label: string; href: string }[];
}

export function BrandHubPageTemplate({
  categoryLabel,
  categoryHref,
  subcategoryLabel,
  subcategoryHref,
  brandName,
  brandHref,
  h1,
  description,
  brandImage,
  relatedLinks,
}: BrandHubPageTemplateProps) {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 py-12 lg:py-20">
        <Breadcrumbs
          items={[
            { label: categoryLabel, href: categoryHref },
            { label: subcategoryLabel, href: subcategoryHref },
            { label: brandName, href: brandHref },
          ]}
        />

        <p className="text-sm font-medium uppercase text-primary font-[family-name:var(--font-inter)]">
          {categoryLabel} / {subcategoryLabel}
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-inter)] text-2xl md:text-3xl lg:text-4xl font-bold text-dark">
          {h1}
        </h1>

        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <p className="text-lg text-dark leading-relaxed">{description}</p>

            {relatedLinks && relatedLinks.length > 0 && (
              <div className="mt-8">
                <h2 className="font-[family-name:var(--font-inter)] text-lg font-bold text-dark mb-4">
                  Powiązane usługi
                </h2>
                <ul className="space-y-2">
                  {relatedLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-primary hover:underline font-medium"
                      >
                        → {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {brandImage && (
            <div className="relative w-full lg:w-[400px] h-[250px] lg:h-[300px] rounded-lg overflow-hidden shrink-0">
              <Image
                src={`/${brandImage}`}
                alt={`${brandName} - KUMATEX`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          )}
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
