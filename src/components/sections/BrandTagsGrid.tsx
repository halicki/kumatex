import Link from "next/link";
import Image from "next/image";
import { brands } from "@/data/brands";

export function BrandTagsGrid() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/imgFrame1430.png"
        alt=""
        fill
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-16 py-16">
        <h2 className="mb-8 font-[family-name:var(--font-inter)] text-[25px] font-bold text-white">
          Oferujemy produkty takich marek jak:
        </h2>
        <div className="flex flex-wrap gap-3">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/czesci-zamienne/${brand.slug}`}
              className="rounded bg-primary px-5 py-2.5 font-[family-name:var(--font-inter)] text-xl text-dark shadow-[0_0_32px_rgba(0,0,0,0.33)] transition-colors hover:bg-primary/80"
            >
              {brand.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
