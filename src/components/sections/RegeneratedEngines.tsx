import Image from "next/image";

export function RegeneratedEngines() {
  return (
    <section className="relative overflow-hidden bg-dark">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[200px] lg:h-[400px]">
          <Image
            src="/images/imgEnvatoSerwis.png"
            alt="Silniki regenerowane"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="flex items-center px-4 py-8 lg:px-16 lg:py-16">
          <div>
            <h2 className="font-[family-name:var(--font-inter)] text-2xl lg:text-[32px] font-bold leading-tight text-white">
              Oferujemy również kompletne silniki regenerowane na wymianę.
            </h2>
            <p className="mt-4 text-base lg:text-lg leading-relaxed text-white/80">
              Silniki po profesjonalnej regeneracji, gotowe do montażu w maszynach budowlanych, drogowych
              i wózkach widłowych. Gwarancja jakości i konkurencyjne ceny.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
