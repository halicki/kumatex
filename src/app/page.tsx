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
        <div className="mx-auto flex max-w-[1440px] items-stretch">
          <div className="flex flex-col justify-center px-16 py-20 text-white" style={{ flex: "0 0 50%" }}>
            <h2 className="font-[family-name:var(--font-inter)] text-[60px] font-bold leading-tight">
              Części zamienne do silników maszyn budowlanych
            </h2>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <Image src="/images/imgX35.png" alt="" width={40} height={40} unoptimized />
                <div>
                  <h3 className="font-[family-name:var(--font-inter)] text-xl font-bold">Bez przestoju w pracy</h3>
                  <p className="mt-1 text-base text-white/70">Szybkie dostawy części zamiennych</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image src="/images/imgX36.png" alt="" width={40} height={40} unoptimized />
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
            <p className="mt-8 max-w-lg text-lg text-white/80 leading-relaxed">
              Oferujemy usługi w zakresie profesjonalnego serwisu, napraw i remontów wszystkich typów silników Diesel z maszyn budowlanych i drogowych.
            </p>
          </div>
          <div className="relative" style={{ flex: "0 0 50%" }}>
            <Image src="/images/imgPexelsChevanon11081011.png" alt="Maszyny budowlane" fill className="object-cover" unoptimized />
          </div>
        </div>
      </section>

      {/* Service cards */}
      <ServiceCardsGrid />

      {/* Product showcase - 3 photos */}
      <section className="mx-auto flex max-w-[1440px] gap-0 px-16 py-16">
        {[
          { img: "/images/imgSandieClarkeQ93CVsBf3CYUnsplash.png", title: "Wynajem", href: "/osprzet/wynajem" },
          { img: "/images/imgSandieClarkeQ93CVsBf3CYUnsplash1.png", title: "Osprzęt i inne", href: "/osprzet" },
          { img: "/images/imgSandieClarkeQ93CVsBf3CYUnsplash2.png", title: "Żurawie na samochody dostawcze", href: "/serwis/serwis-zurawi-hds" },
        ].map((item) => (
          <Link key={item.title} href={item.href} className="group relative h-[600px] flex-1 overflow-hidden">
            <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-[family-name:var(--font-inter)] text-xl font-bold text-white">{item.title}</h3>
            </div>
          </Link>
        ))}
      </section>

      {/* O NAS section */}
      <section className="bg-black">
        <div className="mx-auto flex max-w-[1440px] items-center gap-16 px-16 py-20">
          <div className="shrink-0">
            <p className="text-base uppercase text-primary font-[family-name:var(--font-inter)]">O nas</p>
            <h2 className="mt-2 font-[family-name:var(--font-inter)] text-4xl font-black text-white">
              Serwis. Naprawa.<br />Sprzedaż.
            </h2>
            <div className="relative mt-8 h-[300px] w-[400px] overflow-hidden">
              <Image src="/images/imgPexelsChevanon11081011.png" alt="" fill className="object-cover" unoptimized />
            </div>
            <div className="mt-6 grid grid-cols-4 gap-4">
              {[
                { value: "15", label: "lat doświadczenia" },
                { value: "15", label: "naprawianych marek" },
                { value: "15", label: "mechaników" },
                { value: "15", label: "zadowolonych klientów" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-[family-name:var(--font-inter)] text-5xl font-black text-primary">{s.value}</p>
                  <p className="mt-1 text-xs text-white/60 uppercase">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-lg">
            <p className="text-[25px] font-medium text-white leading-relaxed">
              Firma KUMATEX obecna od wielu lat na rynku usług remontów i napraw maszyn budowlanych i pokrewnych.
            </p>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Zajmujemy się stałym utrzymaniem parku maszynowego pracującego przy dużych projektach: infrastrukturalnych, deweloperskich i budowlanych. Obsługujemy maszyny z całej Polski dzięki specjalistycznym samochodom serwisowym.
            </p>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              Od lat pracujemy dla największych firm na rynku, m.in. dla Strabag, Alpine Bau, Skanska, PKP i wielu innych firm z sektora budowlanego.
            </p>
            <Link href="/o-firmie" className="mt-8 inline-flex h-10 items-center justify-center rounded bg-primary px-6 font-[family-name:var(--font-inter)] text-xl font-bold text-dark transition-colors hover:bg-primary/90">
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
