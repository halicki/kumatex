import { HeroSection } from "@/components/sections/HeroSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { EquipmentGrid } from "@/components/sections/EquipmentGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Osprzęt i inne - KUMATEX",
  description: "Osprzęt do maszyn budowlanych: wynajem mini żurawi, łyżki i chwytaki, zwolnice, filtry.",
};

export default function OsprzetPage() {
  return (
    <>
      <HeroSection
        title="Osprzęt i inne"
        subtitle="Grupa HDS-Serwis oferuje części zamienne do maszyn budowlanych, drogowych, żurawi, dźwigów i wózków widłowych."
        backgroundImage="/images/imgUnsplash75XPheqBmvA.png"
        ctaText="Sklep"
        ctaHref="https://geneus.pl"
        secondaryCtaText="Skontaktuj się"
        secondaryCtaHref="/kontakt"
      />
      <EquipmentGrid />
      <ContactFormSection />
    </>
  );
}
