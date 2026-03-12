import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { JsonLd } from "@/components/ui/JsonLd";

interface ArticlePageTemplateProps {
  title: string;
  h1: string;
  intro: string;
  content: string[];
  relatedLinks: { label: string; href: string }[];
  slug: string;
}

export function ArticlePageTemplate({
  title,
  h1,
  intro,
  content,
  relatedLinks,
  slug,
}: ArticlePageTemplateProps) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: h1,
    description: intro,
    author: {
      "@type": "Organization",
      name: "KUMATEX",
    },
    publisher: {
      "@type": "Organization",
      name: "KUMATEX",
      logo: {
        "@type": "ImageObject",
        url: "https://kumatex.pl/images/imgKumatexLogo2.png",
      },
    },
    mainEntityOfPage: `https://kumatex.pl/poradnik/${slug}`,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <article className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 py-12 lg:py-20">
        <Breadcrumbs
          items={[
            { label: "Poradnik", href: "/poradnik" },
            { label: title, href: `/poradnik/${slug}` },
          ]}
        />

        <p className="text-sm font-medium uppercase text-primary font-[family-name:var(--font-inter)]">
          Poradnik
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-inter)] text-2xl md:text-3xl lg:text-4xl font-bold text-dark">
          {h1}
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-dark leading-relaxed font-medium">
          {intro}
        </p>

        <div className="mt-8 max-w-3xl space-y-6">
          {content.map((paragraph, index) => (
            <p key={index} className="text-base lg:text-lg text-dark leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {relatedLinks.length > 0 && (
          <div className="mt-12 max-w-3xl">
            <h2 className="font-[family-name:var(--font-inter)] text-xl font-bold text-dark mb-4">
              Powiązane strony
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
      </article>
      <ContactFormSection />
    </>
  );
}
