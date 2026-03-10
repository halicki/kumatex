import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function HeroSection({ title, subtitle, backgroundImage, ctaText, ctaHref, secondaryCtaText, secondaryCtaHref }: HeroSectionProps) {
  return (
    <section className="relative h-[350px] md:h-[500px] lg:h-[700px] w-full overflow-hidden">
      <Image src={backgroundImage} alt="" fill className="object-cover" unoptimized />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-end px-4 md:px-8 lg:px-16 pb-8 md:pb-16 lg:pb-24">
        <div className="max-w-[700px]">
          <h1 className="font-[family-name:var(--font-inter)] text-3xl md:text-[40px] lg:text-[60px] font-bold leading-tight text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-sm md:text-base lg:text-lg text-white/90 font-[family-name:var(--font-inter)]">
              {subtitle}
            </p>
          )}
          {(ctaText || secondaryCtaText) && (
            <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-8">
              {ctaText && ctaHref && (
                <Link href={ctaHref} className="inline-flex h-10 items-center justify-center rounded bg-primary px-6 font-[family-name:var(--font-inter)] text-base lg:text-lg font-bold text-white transition-colors hover:bg-primary/90">
                  {ctaText}
                </Link>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <Link href={secondaryCtaHref} className="inline-flex items-center justify-center rounded bg-white px-5 py-2 font-[family-name:var(--font-inter)] text-base lg:text-lg font-bold text-dark transition-colors hover:bg-gray-100">
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
