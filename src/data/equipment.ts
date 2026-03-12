import type { ContentBlock } from "./brands";

export interface Equipment {
  title: string;
  slug: string;
  description: string;
  icon?: string;
  content?: ContentBlock;
}

export const equipment: Equipment[] = [
  {
    title: "Przyssawki próżniowe",
    slug: "przyssawki-prozniowe",
    description:
      "Przyssawki próżniowe do transportu i montażu szyb, płyt kamiennych, blach i innych materiałów o gładkiej powierzchni. Profesjonalny sprzęt do bezpiecznego przenoszenia ciężkich elementów.",
    icon: "vacuum",
  },
  {
    title: "Próżniowy robot montażowy",
    slug: "prozniowy-robot-montazowy",
    description:
      "Próżniowe roboty montażowe do precyzyjnego pozycjonowania i montażu dużych elementów szklanych, metalowych i kamiennych. Idealne rozwiązanie do prac na wysokości.",
    icon: "robot",
  },
  {
    title: "Łyżki i chwytaki do żurawi",
    slug: "lyzki-i-chwytaki",
    description:
      "Osprzęt hydrauliczny BEFARD do urządzeń podnośnikowych i innego typu urządzeń przeładowczych. Łyżki do kopania, chwytaki do drewna, złomu, kamienia i materiałów sypkich.",
    icon: "bucket",
  },
  {
    title: "Filtry do maszyn budowlanych",
    slug: "filtry",
    description:
      "Jakość filtrów i ich regularna wymiana jest jednym z podstawowych warunków prawidłowej i wieloletniej pracy każdej maszyny budowlanej. Oferujemy filtry do koparek, ładowarek i innych maszyn.",
    icon: "filter",
  },
  {
    title: "Filtry do koparek i do maszyn budowlanych",
    slug: "filtry-do-koparek",
    description:
      "Szeroka gama filtrów do koparek wszystkich marek. Filtry oleju, paliwa, powietrza i hydrauliczne zapewniające optymalną pracę maszyn budowlanych.",
    icon: "filter-excavator",
  },
  {
    title: "Filtry do maszyn rolniczych",
    slug: "filtry-do-maszyn-rolniczych",
    description:
      "Filtry do ciągników, kombajnów i innych maszyn rolniczych. Oryginalne i zamienne filtry zapewniające długą żywotność silnika i układów hydraulicznych.",
    icon: "filter-agriculture",
  },
  {
    title: "Rozdzielacze hydrauliczne",
    slug: "rozdzielacze-hydrauliczne",
    description:
      "Rozdzielacze hydrauliczne do maszyn budowlanych, drogowych i przemysłowych. Precyzyjne sterowanie przepływem oleju hydraulicznego w układach maszynowych.",
    icon: "hydraulic",
  },
  {
    title: "Silniki maszyn",
    slug: "silniki-maszyn",
    description:
      "Silniki do maszyn budowlanych, drogowych i przemysłowych. Silniki nowe, regenerowane i używane do koparek, ładowarek, wózków widłowych i innych maszyn.",
    icon: "engine",
  },
  {
    title: "Wynajem mini żurawi",
    slug: "wynajem",
    description:
      "Wynajem mini żurawi, mini dźwigów, robotów i manipulatorów montażowych oraz transportowych. Chwytaki do przeszkleń, płyt warstwowych, płyt betonowych i kamienia.",
    icon: "crane",
  },
  {
    title: "Zwolnice",
    slug: "zwolnice",
    description:
      "Zwolnice, napędy gąsienic i silniki jazdy do maszyn budowlanych, rolniczych, koparek, ładowarek, zagęszczarek i koparko-ładowarek. Zwolnice znalazły zastosowanie w wielu rodzajach maszyn.",
    icon: "gears",
  },
  {
    title: "Żurawie na samochody dostawcze",
    slug: "zurawie-na-samochody-dostawcze",
    description:
      "Żurawie HDS montowane na samochodach dostawczych i ciężarowych. Profesjonalne rozwiązania do transportu i montażu elementów budowlanych.",
    icon: "truck-crane",
  },
  {
    title: "GreenLifter",
    slug: "greenlifter",
    description:
      "GreenLifter to innowacyjne rozwiązanie do podnoszenia i transportu ciężkich elementów w sposób ekologiczny i wydajny. Nowoczesna technologia dla branży budowlanej.",
    icon: "leaf",
  },
];
