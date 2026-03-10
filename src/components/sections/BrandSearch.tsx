"use client";

import { useState } from "react";
import Link from "next/link";
import { brands } from "@/data/brands";

export function BrandSearch() {
  const [query, setQuery] = useState("");

  const filteredBrands = query.trim()
    ? brands.filter((b) =>
        b.name.toLowerCase().includes(query.trim().toLowerCase())
      )
    : [];

  return (
    <div className="mx-auto max-w-[1440px] px-4 lg:px-16 py-4">
      <div className="relative flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
        <span className="shrink-0 font-[family-name:var(--font-inter)] text-sm font-bold text-dark">
          Szukasz konkretnej części?
        </span>
        <div className="relative flex-1">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Wpisz czego szukasz..."
            className="h-10 w-full rounded border border-gray-300 px-4 pr-10 text-sm text-dark outline-none focus:border-primary transition-colors"
          />
          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>
      {filteredBrands.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {filteredBrands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/czesci-zamienne/${brand.slug}`}
              className="rounded bg-primary/10 px-3 py-1.5 text-sm font-medium text-dark hover:bg-primary/20 transition-colors"
            >
              {brand.name}
            </Link>
          ))}
        </div>
      )}
      {query.trim() && filteredBrands.length === 0 && (
        <p className="mt-2 text-sm text-gray">
          Nie znaleziono marki pasującej do &quot;{query}&quot;. Skontaktuj się z nami, a pomożemy znaleźć odpowiednią część.
        </p>
      )}
    </div>
  );
}
