import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

const iconMap: Record<string, string> = {
  excavator: "/images/imgExcavatorHeavyMachineryConstructionDiggingEarthMover.svg",
  loader: "/images/imgGroup9.svg",
  crane: "/images/imgGroup8.svg",
  forklift: "/images/imgLiftTruckHeavyMachineryWarehouseLiftingEquipment.svg",
  engine: "/images/imgWarstwa1.svg",
  compressor: "/images/imgWarstwa3.svg",
};

export function ServiceCardsGrid() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 py-12 lg:py-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {services.map((s, i) => (
          <Link key={s.slug} href={`/serwis/${s.slug}`} className="group flex flex-col items-start pb-4">
            <div className={`flex items-center p-2.5 ${i === 0 ? "bg-primary" : ""}`}>
              <Image src={iconMap[s.icon] || iconMap.excavator} alt="" width={64} height={64} className="w-12 h-12 lg:w-16 lg:h-16" unoptimized />
            </div>
            <h3 className={`mt-4 min-h-0 lg:min-h-[80px] font-[family-name:var(--font-inter)] text-base lg:text-xl font-medium ${i === 0 ? "text-white" : "text-dark"}`}>
              {s.title}
            </h3>
            <p className="mt-auto text-base text-dark group-hover:text-primary transition-colors">
              Zobacz szczegóły
            </p>
            <div className="mt-1 h-0.5 w-16 bg-dark group-hover:bg-primary transition-colors" />
          </Link>
        ))}
      </div>
    </section>
  );
}
