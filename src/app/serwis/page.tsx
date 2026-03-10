import { HeroSection } from "@/components/sections/HeroSection";
import { GeneusPartnership } from "@/components/sections/GeneusPartnership";
import { ServiceCardsGrid } from "@/components/sections/ServiceCardsGrid";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serwis maszyn budowlanych - KUMATEX",
  description: "Profesjonalny serwis maszyn budowlanych. Naprawy koparek, ładowarek, żurawi HDS i wózków widłowych.",
};

export default function SerwisPage() {
  return (
    <>
      <HeroSection
        title="Naprawa maszyn budowlanych. Na oryginalnych częściach"
        subtitle="Profesjonalne naprawy koparek i maszyn budowlanych – szybko, solidnie, w terenie."
        backgroundImage="/images/imgBackhoeHero.png"
        ctaText="Odwiedź geneus.pl"
        ctaHref="https://geneus.pl"
        secondaryCtaText="Skontaktuj się"
        secondaryCtaHref="/kontakt"
      />

      {/* About serwis section */}
      <section className="relative bg-black">
        <div className="mx-auto flex max-w-[1440px] items-center">
          <div className="relative h-[874px] w-full">
            <Image src="/images/imgEnvatoSerwis.png" alt="" fill className="object-cover" unoptimized />
            <div className="absolute left-[107px] top-[127px] max-w-[644px]">
              <p className="text-base uppercase text-primary font-[family-name:var(--font-inter)]">serwis</p>
              <h2 className="mt-2 font-[family-name:var(--font-inter)] text-3xl font-black text-black">
                Naprawa maszyn budowlanych
              </h2>
              <p className="mt-6 text-lg text-black leading-relaxed">
                Oferujemy usługi w zakresie profesjonalnego serwisu, napraw i remontów wszystkich typów silników Diesel z maszyn budowlanych i drogowych. Z racji wieloletniego doświadczenia, wysoce wykwalifikowanej kadry i stałego dostępu do oryginalnych części zamiennych, specjalizujemy się w naprawach najtrudniejszych, których nie są w stanie przeprowadzić inne podmioty działające na rynku.
              </p>
              <a href="/kontakt" className="mt-6 inline-flex h-10 items-center justify-center rounded bg-primary px-6 font-[family-name:var(--font-inter)] text-xl font-bold text-white transition-colors hover:bg-primary/90">
                Skontaktuj się
              </a>
            </div>
          </div>
        </div>
      </section>

      <GeneusPartnership />

      {/* Repair section with image */}
      <section className="mx-auto flex max-w-[1240px] items-start gap-12 px-16 py-16">
        <div className="relative">
          <div className="relative h-[314px] w-[514px] overflow-hidden">
            <Image src="/images/imgRest.png" alt="Naprawa maszyn" fill className="object-cover" unoptimized />
          </div>
          <div className="absolute -bottom-8 -left-16 h-32 w-32 bg-primary" />
        </div>
        <div>
          <h2 className="font-[family-name:var(--font-inter)] text-3xl font-black capitalize text-dark">
            Naprawa maszyn budowlanych
          </h2>
          <p className="mt-8 text-lg text-dark leading-relaxed">
            Koparki, ładowarki i koparko-ładowarki to nasza specjalność. W ostatniej dekadzie naprawialiśmy i wyremontowaliśmy setki maszyn tego typu. Przeprowadzamy kompleksowe remonty silników, zajmujemy się kasowaniem luzów, usuwaniem wycieków, regeneracją i wymianą siłowników, usuwaniem skutków uszkodzeń mechanicznych i in.
          </p>
          <p className="mt-4 text-lg text-dark leading-relaxed">
            Oprócz maszyn budowlanych zajmujemy się również <a href="http://befard.pl" className="underline hover:text-primary">żurawiami HDS</a>.
          </p>
        </div>
      </section>

      <ServiceCardsGrid />
    </>
  );
}
