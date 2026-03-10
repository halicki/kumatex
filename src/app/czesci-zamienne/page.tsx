import { HeroSection } from "@/components/sections/HeroSection";
import { GeneusPartnership } from "@/components/sections/GeneusPartnership";
import { BrandTagsGrid } from "@/components/sections/BrandTagsGrid";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Części zamienne do maszyn budowlanych - KUMATEX",
  description: "Części zamienne do maszyn budowlanych, drogowych, żurawi, dźwigów i wózków widłowych. Oryginalne części do silników wszystkich marek.",
};

export default function CzesciZamiennePage() {
  return (
    <>
      <HeroSection
        title="Części zamienne do maszyn"
        subtitle="Oferujemy najwyższej jakości części silnikowe, osprzęt i części eksploatacyjne do maszyn budowlanych, drogowych i wózków widłowych."
        backgroundImage="/images/imgUnsplash75XPheqBmvA.png"
        ctaText="Sklep"
        ctaHref="https://geneus.pl"
      />
      <GeneusPartnership />
      <BrandTagsGrid />
      <ContactFormSection />
    </>
  );
}
