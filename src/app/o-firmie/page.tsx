import { HeroSection } from "@/components/sections/HeroSection";
import { GeneusPartnership } from "@/components/sections/GeneusPartnership";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O firmie - KUMATEX",
  description: "KUMATEX - firma specjalizująca się w serwisie, naprawach i sprzedaży części do maszyn budowlanych.",
};

export default function OFirmiePage() {
  return (
    <>
      <HeroSection
        title="KUMATEX"
        subtitle="Firma KUMATEX obecna od wielu lat jest na rynku usług remontów i napraw maszyn budowlanych i pokrewnych. Zajmujemy się również wynajmem – krótko i długoterminowym – sprzętu. Obecnie należymy do grupy serwisowej HDS-Serwis."
        backgroundImage="/images/imgOFirmieHero.png"
        ctaText="Sklep"
        ctaHref="https://geneus.pl"
        secondaryCtaText="Skontaktuj się"
        secondaryCtaHref="/kontakt"
      />

      <GeneusPartnership />

      {/* About details with yellow background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative mx-auto flex max-w-[1440px] items-end gap-20 px-16 py-20">
          <div className="relative h-[416px] w-[237px] shrink-0 overflow-hidden">
            <Image src="/images/imgOFirmieWorker.png" alt="Pracownik" fill className="object-cover" unoptimized />
          </div>
          <div className="max-w-[610px] py-8">
            <p className="text-lg font-semibold text-dark leading-relaxed">
              Z racji posiadania specjalistycznych samochodów serwisowych oraz wykwalifikowanych serwisantów obsługujemy maszyny z całej Polski.
            </p>
            <p className="mt-6 text-lg text-dark leading-relaxed">
              Zajmujemy się stałym utrzymaniem parku maszynowego pracującego przy dużych projektach: infrastrukturalnych (drogowych, energetycznych), deweloperskich i budowlanych innego typu, związanych z rozwojem i działalnością transportu kolejowego i morskiego.
            </p>
          </div>
        </div>
      </section>

      {/* Dark section with clients info */}
      <section className="relative h-[663px] overflow-hidden">
        <Image src="/images/imgMechanic.png" alt="" fill className="object-cover" unoptimized />
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(90deg, transparent 0%, black 80%)" }} />
        <div className="relative z-10 ml-auto flex h-full max-w-[610px] flex-col justify-center px-16">
          <p className="text-lg text-white leading-relaxed">
            Od lat pracujemy dla największych firm na rynku, m.in. dla Strabag, Alpine Bau, Skanska, Polskie Składy Budowlane, PKP, Radko, Fiat Auto Poland i wielu innych firm z sektora budowlanego, drzewnego, logistyczno-transportowego.
          </p>
          <p className="mt-6 text-lg text-white leading-relaxed">
            Nasi serwisanci to wyłącznie osoby właściwie przeszkolone, mające wiele lat doświadczenia w branży.
          </p>
          <p className="mt-6 text-lg text-white leading-relaxed">
            W przypadku maszyn podlegających dozorowi technicznemu (m.in. wózki widłowe, żurawie itp.), pracujemy w oparciu o właściwe uprawnienia wydane przez Urząd Dozoru Technicznego.
          </p>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
