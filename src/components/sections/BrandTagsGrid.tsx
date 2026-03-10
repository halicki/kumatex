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
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 py-12 lg:py-16">
        <h2 className="mb-6 lg:mb-8 font-[family-name:var(--font-inter)] text-lg md:text-xl lg:text-[25px] font-bold text-white">
          Oferujemy produkty takich marek jak:
        </h2>
        <div className="flex flex-wrap gap-2 lg:gap-3">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/czesci-zamienne/${brand.slug}`}
              className="rounded bg-primary px-3 py-2 md:text-base lg:px-5 lg:py-2.5 font-[family-name:var(--font-inter)] text-sm lg:text-xl text-dark shadow-[0_0_32px_rgba(0,0,0,0.33)] transition-colors hover:bg-primary/80"
            >
              {brand.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
