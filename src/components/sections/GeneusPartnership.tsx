import Image from "next/image";
import Link from "next/link";

export function GeneusPartnership() {
  return (
    <section className="mx-auto flex flex-col lg:flex-row max-w-[1440px] items-center">
      <div className="flex-1 px-4 py-6 lg:py-10 lg:pl-16 lg:pr-8">
        <Image src="/images/imgLogoGeneus1.png" alt="GENEUS" width={342} height={55} className="w-[200px] lg:w-[342px] h-auto" unoptimized />
        <h2 className="mt-4 font-[family-name:var(--font-inter)] text-xl md:text-2xl lg:text-3xl font-bold text-dark">
          Partnerem KUMATEX w dostawie części zamiennych jest GENEUS Polska
        </h2>
        <p className="mt-4 text-base lg:text-lg text-dark leading-relaxed">
          Ponadto GENEUS Polska oferuje osprzęt silnika, rozdzielacze hydrauliczne, pompy (tłoczkowe i zębate), ogumienie, siłowniki, elementy instalacji hydraulicznej, zamki, czujniki, zawory, uszczelniacze i inne.
        </p>
        <Link href="https://geneus.pl" target="_blank" className="mt-4 inline-flex h-10 items-center justify-center rounded bg-primary px-6 font-[family-name:var(--font-inter)] text-base lg:text-xl font-bold text-dark transition-colors hover:bg-primary/90">
          Sklep
        </Link>
      </div>
      <div className="relative h-[200px] w-full lg:h-[360px] lg:w-[646px] shrink-0 overflow-hidden">
        <Image src="/images/imgUnsplashWoZs8GGyQby.png" alt="Maszyny" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-transparent mix-blend-hard-light" />
      </div>
    </section>
  );
}
