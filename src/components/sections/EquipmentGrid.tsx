import Link from "next/link";
import { equipment } from "@/data/equipment";

function EquipmentIcon({ type }: { type?: string }) {
  const className = "w-10 h-10 text-primary";

  switch (type) {
    case "vacuum":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="20" cy="16" r="10" />
          <path d="M14 26v8h12v-8" />
          <path d="M20 6v-2M20 26v2" />
        </svg>
      );
    case "robot":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="8" y="10" width="24" height="18" rx="3" />
          <circle cx="16" cy="19" r="3" />
          <circle cx="24" cy="19" r="3" />
          <path d="M20 4v6M12 28v6M28 28v6" />
        </svg>
      );
    case "bucket":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 14l4 20h20l4-20H6z" />
          <path d="M10 14c0-6 4-10 10-10s10 4 10 10" />
        </svg>
      );
    case "filter":
    case "filter-excavator":
    case "filter-agriculture":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h32l-12 14v12l-8 4V20L4 6z" />
        </svg>
      );
    case "hydraulic":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="6" y="8" width="28" height="24" rx="2" />
          <path d="M6 16h28M6 24h28M14 8v24M26 8v24" />
        </svg>
      );
    case "engine":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="8" y="12" width="24" height="16" rx="2" />
          <path d="M4 18h4M32 18h4M16 8v4M24 8v4" />
          <circle cx="20" cy="20" r="4" />
        </svg>
      );
    case "crane":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 36V8l20-4v4" />
          <path d="M10 8h22M30 8v10M26 18h8" />
          <path d="M30 18v10M6 36h8" />
        </svg>
      );
    case "gears":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="16" cy="18" r="6" />
          <circle cx="28" cy="24" r="5" />
          <circle cx="16" cy="18" r="2" />
          <circle cx="28" cy="24" r="2" />
        </svg>
      );
    case "truck-crane":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="20" width="24" height="10" rx="2" />
          <path d="M26 20h8l4 10h-12" />
          <circle cx="10" cy="33" r="3" />
          <circle cx="32" cy="33" r="3" />
          <path d="M6 20V10l16-4" />
        </svg>
      );
    case "leaf":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 32C8 16 20 4 36 4c0 16-12 28-28 28z" />
          <path d="M8 32C16 24 24 16 36 4" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="6" y="6" width="28" height="28" rx="4" />
          <path d="M14 14h12M14 20h12M14 26h8" />
        </svg>
      );
  }
}

export function EquipmentGrid() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 py-12 lg:py-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
        {equipment.map((item, index) => (
          <Link
            key={item.slug}
            href={`/osprzet/${item.slug}`}
            className={`group flex flex-col items-start rounded-lg border p-4 lg:p-5 transition-all hover:border-primary hover:shadow-lg ${
              index === 0
                ? "border-primary bg-primary/10"
                : "border-gray-200 bg-white"
            }`}
          >
            <EquipmentIcon type={item.icon} />
            <h2 className="mt-3 font-[family-name:var(--font-inter)] text-sm font-bold leading-tight text-dark">
              {item.title}
            </h2>
            <p className="mt-auto pt-3 text-xs font-medium text-primary">
              Zobacz szczegóły
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
