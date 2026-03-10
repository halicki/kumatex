import { HeroSection } from "@/components/sections/HeroSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { equipment } from "@/data/equipment";
import Link from "next/link";
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
        subtitle="Szeroka gama osprzętu do maszyn budowlanych, drogowych i przemysłowych."
        backgroundImage="/images/imgUnsplash75XPheqBmvA.png"
      />
      <section className="mx-auto max-w-[1440px] px-16 py-20">
        <div className="grid grid-cols-2 gap-8">
          {equipment.map((item) => (
            <Link
              key={item.slug}
              href={`/osprzet/${item.slug}`}
              className="group rounded border border-gray-200 p-8 transition-all hover:border-primary hover:shadow-lg"
            >
              <h2 className="font-[family-name:var(--font-inter)] text-2xl font-bold text-dark group-hover:text-primary transition-colors">
                {item.title}
              </h2>
              <p className="mt-3 text-lg text-gray leading-relaxed">{item.description}</p>
              <p className="mt-4 text-primary font-medium">Więcej →</p>
            </Link>
          ))}
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
