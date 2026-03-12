import Link from "next/link";
import { JsonLd } from "./JsonLd";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: "Strona Główna", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://kumatex.pl${item.href}`,
    })),
  };

  return (
    <>
      <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-gray">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <span key={item.href} className="flex items-center gap-2">
              {index > 0 && <span>/</span>}
              {isLast ? (
                <span className="text-dark">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
      <JsonLd data={jsonLd} />
    </>
  );
}
