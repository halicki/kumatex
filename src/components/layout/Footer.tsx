import Link from "next/link";
import Image from "next/image";

const equipmentLinks = [
  { label: "Wynajem", href: "/osprzet/wynajem" },
  { label: "Łyżki i chwytaki do żurawi", href: "/osprzet/lyzki-i-chwytaki" },
  { label: "Zwolnice", href: "/osprzet/zwolnice" },
  { label: "Filtry do maszyn budowlanych", href: "/osprzet/filtry" },
];

const siteMapLinks = [
  { label: "O firmie", href: "/o-firmie" },
  { label: "Części zamienne", href: "/czesci-zamienne" },
  { label: "Serwis", href: "/serwis" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
];

export function Footer() {
  return (
    <footer className="relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/imgStopka.png"
          alt=""
          fill
          className="object-cover opacity-50"
          unoptimized
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[174px] py-12 lg:py-16 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left column - Contact info */}
          <div className="space-y-6">
            <Image
              src="/images/imgKumatexLogo2.png"
              alt="KUMATEX"
              width={160}
              height={42}
              unoptimized
            />

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Image
                  src="/images/imgIcon.png"
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                  className="mt-0.5"
                />
                <div>
                  <p className="text-base lg:text-xl font-bold">Adres</p>
                  <p className="text-[15px]">Siedziba - Wiejska 3/4, Warszawa</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Image
                  src="/images/imgIcon1.png"
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                  className="mt-0.5"
                />
                <div>
                  <p className="text-base lg:text-xl font-bold">Telefon</p>
                  <p className="text-[15px]">
                    <a href="tel:+48798889554" className="hover:text-primary transition-colors">
                      Biuro - +48 798 889 554
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Image
                  src="/images/imgIcon2.png"
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                  className="mt-0.5"
                />
                <div>
                  <p className="text-base lg:text-xl font-bold">e-mail</p>
                  <p className="text-[15px]">
                    <a
                      href="mailto:info@kumatex.pl"
                      className="hover:text-primary transition-colors"
                    >
                      info@kumatex.pl
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle column - Equipment links */}
          <div>
            <h3 className="mb-4 border-b border-primary pb-2 text-base lg:text-xl font-semibold uppercase font-[family-name:var(--font-inter)]">
              Osprzęt i inne
            </h3>
            <ul className="space-y-2 text-base lg:text-xl font-[family-name:var(--font-inter)] uppercase">
              {equipmentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - Site map */}
          <div>
            <h3 className="mb-4 border-b border-primary pb-2 text-base lg:text-xl font-semibold uppercase font-[family-name:var(--font-inter)]">
              Mapa strony
            </h3>
            <ul className="space-y-2 text-base lg:text-xl font-[family-name:var(--font-inter)] uppercase">
              {siteMapLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar - GENEUS partnership */}
        <div className="mt-8 flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-7">
          <p className="text-sm lg:text-base leading-relaxed">
            <span>Partnerem KUMATEX w dostawie części zamiennych jest GENEUS Polska – oficjalny przedstawiciel na Polskę i Europę Środkową australijsko-japońskiego koncernu SMS Diesel, jednego z największych na świecie niezależnych dystrybutorów części zamiennych do maszyn i pojazdów. Wejdź na </span>
            <a href="http://www.geneus.pl/" className="font-semibold underline hover:text-primary">www.geneus.pl</a>
            <span> i dowiedź się więcej. GENEUS POLSKA oferuje m.in. oryginalne części zamienne do silników Mitsubishi, Isuzu, Nissan, Mazda, Toyota, Perkins, Deutz, Cummins, Lombardini, Kubota, Yanmar i in.</span>
          </p>
          <Image
            src="/images/imgGeneusLogo1.png"
            alt="GENEUS"
            width={371}
            height={61}
            className="shrink-0 w-[200px] lg:w-[371px] h-auto"
            unoptimized
          />
        </div>
      </div>
    </footer>
  );
}
