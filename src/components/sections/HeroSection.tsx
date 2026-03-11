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

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-5 h-5"}>
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
    </svg>
  );
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
          <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4">
            {/* Primary CTA: Contact - the conversion goal */}
            {secondaryCtaText && secondaryCtaHref && (
              <Link href={secondaryCtaHref} className="inline-flex h-12 items-center justify-center gap-2 rounded bg-primary px-8 font-[family-name:var(--font-inter)] text-base lg:text-lg font-bold text-dark transition-colors hover:bg-primary/90">
                {secondaryCtaText}
              </Link>
            )}
            {/* Phone CTA */}
            <a href="tel:+48798889554" className="inline-flex h-12 items-center justify-center gap-2 rounded border-2 border-white bg-white/10 px-6 font-[family-name:var(--font-inter)] text-base lg:text-lg font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20">
              <PhoneIcon className="w-5 h-5" />
              +48 798 889 554
            </a>
            {/* Tertiary: Shop link */}
            {ctaText && ctaHref && (
              <Link href={ctaHref} className="inline-flex h-12 items-center justify-center rounded px-5 font-[family-name:var(--font-inter)] text-base lg:text-lg text-white/80 underline underline-offset-4 transition-colors hover:text-white">
                {ctaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
