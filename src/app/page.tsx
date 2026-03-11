import { HeroSection } from "@/components/sections/HeroSection";
import { GeneusPartnership } from "@/components/sections/GeneusPartnership";
import { ServiceCardsGrid } from "@/components/sections/ServiceCardsGrid";
import { StatsBar } from "@/components/sections/StatsBar";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { BrandTagsGrid } from "@/components/sections/BrandTagsGrid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Części zamienne do silników maszyn budowlanych"
        subtitle="Profesjonalne naprawy koparek i maszyn budowlanych – szybko, solidnie, w terenie."
        backgroundImage="/images/imgFrame31.png"
        ctaText="Sklep"
        ctaHref="https://geneus.pl"
        secondaryCtaText="Skontaktuj się"
        secondaryCtaHref="/kontakt"
      />

      {/* GENEUS partnership */}
      <GeneusPartnership />

      {/* Features section - black bg */}
      <section className="bg-black">
        <div className="mx-auto flex flex-col lg:flex-row max-w-[1440px] items-stretch">
          <div className="flex flex-col justify-center px-4 lg:px-16 py-12 lg:py-20 text-white lg:w-1/2">
            <h2 className="font-[family-name:var(--font-inter)] text-3xl md:text-[40px] lg:text-[60px] font-bold leading-tight">
              Części zamienne do silników maszyn budowlanych
            </h2>
            <div className="mt-8 lg:mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <Image src="/images/imgX35.svg" alt="" width={40} height={40} unoptimized />
                <div>
                  <h3 className="font-[family-name:var(--font-inter)] text-xl font-bold">Bez przestoju w pracy</h3>
                  <p className="mt-1 text-base text-white/70">Szybkie dostawy części zamiennych</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image src="/images/imgX36.svg" alt="" width={40} height={40} unoptimized />
                <div>
                  <h3 className="font-[family-name:var(--font-inter)] text-xl font-bold">Tylko oryginalne części</h3>
                  <p className="mt-1 text-base text-white/70">Gwarancja jakości i trwałości</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image src="/images/imgDesainTanpaJudul481.png" alt="" width={40} height={40} unoptimized />
                <div>
                  <h3 className="font-[family-name:var(--font-inter)] text-xl font-bold">Zaufaj zawodowcom</h3>
                  <p className="mt-1 text-base text-white/70">Wieloletnie doświadczenie w branży</p>
                </div>
              </div>
            </div>
            <p className="mt-8 max-w-lg text-base lg:text-lg text-white/80 leading-relaxed">
              Oferujemy usługi w zakresie profesjonalnego serwisu, napraw i remontów wszystkich typów silników Diesel z maszyn budowlanych i drogowych.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="inline-flex h-12 items-center justify-center rounded bg-primary px-8 font-[family-name:var(--font-inter)] text-lg font-bold text-dark transition-colors hover:bg-primary/90">
                Zapytaj o wycenę
              </Link>
              <a href="tel:+48798889554" className="inline-flex h-12 items-center justify-center gap-2 rounded border-2 border-white px-6 font-[family-name:var(--font-inter)] text-lg font-bold text-white transition-colors hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
                Zadzwoń teraz
              </a>
            </div>
          </div>
          <div className="relative h-[300px] lg:h-auto lg:w-1/2">
            <Image src="/images/imgPexelsChevanon11081011.png" alt="Maszyny budowlane" fill className="object-cover" unoptimized />
          </div>
        </div>
      </section>

      {/* Service cards */}
      <ServiceCardsGrid />

      {/* Product showcase - 3 photos */}
      <section className="mx-auto flex flex-col md:flex-row max-w-[1440px] gap-0 px-4 lg:px-16 py-12 lg:py-16">
        {[
          { img: "/images/imgSandieClarkeQ93CVsBf3CYUnsplash.png", title: "Wynajem", href: "/osprzet/wynajem" },
          { img: "/images/imgSandieClarkeQ93CVsBf3CYUnsplash1.png", title: "Osprzęt i inne", href: "/osprzet" },
          { img: "/images/imgSandieClarkeQ93CVsBf3CYUnsplash2.png", title: "Żurawie na samochody dostawcze", href: "/serwis/serwis-zurawi-hds" },
        ].map((item) => (
          <Link key={item.title} href={item.href} className="group relative h-[250px] md:h-[400px] lg:h-[600px] flex-1 overflow-hidden">
            <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <h3 className="font-[family-name:var(--font-inter)] text-lg lg:text-xl font-bold text-white">{item.title}</h3>
            </div>
          </Link>
        ))}
      </section>

      {/* O NAS section */}
      <section className="bg-black">
        <div className="mx-auto flex flex-col lg:flex-row max-w-[1440px] items-center gap-8 lg:gap-16 px-4 lg:px-16 py-12 lg:py-20">
          <div className="shrink-0 w-full lg:w-auto">
            <p className="text-base uppercase text-primary font-[family-name:var(--font-inter)]">O nas</p>
            <h2 className="mt-2 font-[family-name:var(--font-inter)] text-3xl lg:text-4xl font-black text-white">
              Serwis. Naprawa.<br />Sprzedaż.
            </h2>
            <div className="relative mt-6 lg:mt-8 h-[200px] lg:h-[300px] w-full lg:w-[400px] overflow-hidden">
              <Image src="/images/imgPexelsChevanon11081011.png" alt="" fill className="object-cover" unoptimized />
            </div>
            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { value: "15", label: "lat doświadczenia" },
                { value: "15", label: "naprawianych marek" },
                { value: "15", label: "mechaników" },
                { value: "15", label: "zadowolonych klientów" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-[family-name:var(--font-inter)] text-3xl lg:text-5xl font-black text-primary">{s.value}</p>
                  <p className="mt-1 text-xs text-white/60 uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-lg">
            <p className="text-lg lg:text-[25px] font-medium text-white leading-relaxed">
              Firma KUMATEX obecna od wielu lat na rynku usług remontów i napraw maszyn budowlanych i pokrewnych.
            </p>
            <p className="mt-6 text-base lg:text-lg text-white/70 leading-relaxed">
              Zajmujemy się stałym utrzymaniem parku maszynowego pracującego przy dużych projektach: infrastrukturalnych, deweloperskich i budowlanych. Obsługujemy maszyny z całej Polski dzięki specjalistycznym samochodom serwisowym.
            </p>
            <p className="mt-4 text-base lg:text-lg text-white/70 leading-relaxed">
              Od lat pracujemy dla największych firm na rynku, m.in. dla Strabag, Alpine Bau, Skanska, PKP i wielu innych firm z sektora budowlanego.
            </p>
            <Link href="/o-firmie" className="mt-8 inline-flex h-10 items-center justify-center rounded bg-primary px-6 font-[family-name:var(--font-inter)] text-lg lg:text-xl font-bold text-dark transition-colors hover:bg-primary/90">
              O firmie
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion />

      {/* Stats bar */}
      <StatsBar />

      {/* Brand tags */}
      <BrandTagsGrid />

      {/* Contact form */}
      <ContactFormSection />
    </>
  );
}
