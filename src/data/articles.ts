export interface Article {
  title: string;
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  content: string[];
  relatedLinks: { label: string; href: string }[];
}

export const articles: Article[] = [
  {
    title: "Jak dobrać części do minikoparki",
    slug: "jak-dobrac-czesci-do-minikoparki",
    h1: "Jak Dobrać Części do Minikoparki? – Kompletny Poradnik",
    metaTitle: "Jak Dobrać Części do Minikoparki? | Kumatex Poradnik",
    metaDescription: "Dowiedz się jak dobrać części do minikoparki ✓ Krok po kroku ✓ Porady ekspertów ✓ Zdjęcia ✓ Koszty. Czytaj poradnik Kumatex!",
    intro: "Dobór odpowiednich części zamiennych do minikoparki jest kluczowy dla bezawaryjnej pracy maszyny. W tym poradniku przedstawiamy kompleksowy przewodnik po częściach do minikoparek – od silnika po hydraulikę.",
    content: [
      "Pierwszym krokiem przy doborze części jest identyfikacja modelu minikoparki i silnika. Każdy producent stosuje inne oznaczenia i numerację części. W przypadku minikoparek Kubota, Yanmar czy Bobcat warto znać numer seryjny maszyny oraz model silnika.",
      "Części silnikowe to najczęściej wymieniane elementy w minikoparkach. Tłoki, pierścienie tłokowe, uszczelki głowicy i panewki wału korbowego to podstawowe komponenty, które ulegają zużyciu. Przy wyborze warto postawić na oryginalne części lub certyfikowane zamienniki.",
      "Układ hydrauliczny minikoparki wymaga regularnych przeglądów. Pompy hydrauliczne, siłowniki i rozdzielacze to elementy, których awaria może unieruchomić maszynę na długi czas. Regularna wymiana filtrów hydraulicznych i oleju znacząco wydłuża żywotność tych komponentów.",
      "Filtry to jedne z najważniejszych elementów eksploatacyjnych. Filtry oleju, paliwa, powietrza i hydrauliczne powinny być wymieniane zgodnie z harmonogramem producenta. Stosowanie filtrów niskiej jakości może prowadzić do poważnych uszkodzeń silnika.",
      "W KUMATEX pomagamy w doborze części do minikoparek wszystkich marek. Dysponujemy rozbudowanym magazynem części zamiennych i współpracujemy z GENEUS Polska – oficjalnym dystrybutorem części do silników Diesel.",
    ],
    relatedLinks: [
      { label: "Części do minikoparek", href: "/czesci-do-maszyn/minikoparki" },
      { label: "Serwis minikoparek", href: "/serwis-maszyn/serwis-minikoparek" },
      { label: "Części do silników", href: "/czesci-do-silnikow" },
    ],
  },
  {
    title: "Regeneracja silnika diesel - koszty",
    slug: "regeneracja-silnika-diesel-koszty",
    h1: "Regeneracja Silnika Diesel – Koszty i Opłacalność",
    metaTitle: "Regeneracja Silnika Diesel – Koszty | Kumatex",
    metaDescription: "Dowiedz się ile kosztuje regeneracja silnika Diesel ✓ Krok po kroku ✓ Porady ekspertów ✓ Koszty. Czytaj poradnik Kumatex!",
    intro: "Regeneracja silnika Diesel to poważna inwestycja, która może znacząco przedłużyć żywotność maszyny budowlanej. W tym artykule omawiamy koszty, proces i opłacalność remontu kapitalnego silnika.",
    content: [
      "Koszt regeneracji silnika Diesel zależy od wielu czynników: marki i modelu silnika, zakresu uszkodzeń, jakości użytych części oraz zakresu prac. Orientacyjne ceny regeneracji silników minikoparek zaczynają się od kilku tysięcy złotych, a w przypadku dużych silników mogą sięgnąć kilkudziesięciu tysięcy.",
      "Proces regeneracji obejmuje: demontaż silnika, mycie i weryfikację wszystkich elementów, szlifowanie wału korbowego, honowanie cylindrów, wymianę tłoków z pierścieniami, wymianę panewek, uszczelnień i wszystkich elementów eksploatacyjnych.",
      "Regeneracja silnika jest opłacalna, gdy koszt remontu nie przekracza 50-60% wartości nowej jednostki napędowej. W przypadku maszyn budowlanych, gdzie ceny nowych silników są bardzo wysokie, regeneracja jest często najlepszym rozwiązaniem ekonomicznym.",
      "W KUMATEX wykonujemy regeneracje silników Diesel wszystkich marek: Kubota, Yanmar, Caterpillar, Komatsu, Perkins, Deutz i wielu innych. Na wszystkie remonty udzielamy gwarancji pisemnych. Stosujemy wyłącznie oryginalne części lub certyfikowane zamienniki GENEUS.",
    ],
    relatedLinks: [
      { label: "Serwis silników Diesel", href: "/serwis-maszyn/serwis-silnikow-diesel" },
      { label: "Regeneracja silników", href: "/serwis-maszyn/regeneracja-silnikow" },
      { label: "Części do silników", href: "/czesci-do-silnikow" },
    ],
  },
  {
    title: "Najczęstsze awarie koparek",
    slug: "najczestsze-awarie-koparek",
    h1: "Najczęstsze Awarie Koparek – Jak Je Naprawić?",
    metaTitle: "Najczęstsze Awarie Koparek – Jak Je Naprawić? | Kumatex",
    metaDescription: "Dowiedz się jakie są najczęstsze awarie koparek ✓ Przyczyny ✓ Objawy ✓ Koszty naprawy ✓ Porady ekspertów. Czytaj!",
    intro: "Koparki i minikoparki to maszyny pracujące w ekstremalnych warunkach. Poznaj najczęstsze awarie, ich przyczyny i sposoby naprawy, aby minimalizować przestoje na budowie.",
    content: [
      "Problemy z silnikiem to najpoważniejsze awarie koparek. Wycieki oleju, spadek mocy, nadmierne dymienie i trudności z rozruchem to sygnały ostrzegawcze. Regularna wymiana filtrów i oleju silnikowego znacząco zmniejsza ryzyko kosztownych napraw.",
      "Awarie układu hydraulicznego obejmują wycieki z siłowników, spadek ciśnienia w układzie, wolne ruchy ramienia i łyżki. Przyczyny to zazwyczaj zużyte uszczelnienia, uszkodzone pompy hydrauliczne lub zatkane filtry.",
      "Problemy z gąsienicami i podwoziem to częsta bolączka koparek gąsienicowych. Zużyte rolki, prowadnice, napinacze i same gąsienice wymagają regularnych inspekcji. Zaniedbanie tych elementów prowadzi do kosztownych napraw.",
      "Problemy elektryczne – wadliwe rozruszniki, alternatory, czujniki i wiązki elektryczne mogą unieruchomić nawet sprawną mechanicznie maszynę. Diagnostyka komputerowa pozwala szybko zlokalizować źródło problemu.",
      "W KUMATEX oferujemy kompleksowy serwis koparek i minikoparek. Nasi mechanicy z wieloletnim doświadczeniem szybko diagnozują i naprawiają wszelkie awarie. Oferujemy mobilny serwis na terenie całej Polski.",
    ],
    relatedLinks: [
      { label: "Serwis koparek", href: "/serwis-maszyn/serwis-koparek" },
      { label: "Serwis minikoparek", href: "/serwis-maszyn/serwis-minikoparek" },
      { label: "Części do koparek", href: "/czesci-do-maszyn/koparki" },
    ],
  },
  {
    title: "Jak serwisować hydraulikę",
    slug: "jak-serwisowac-hydraulike",
    h1: "Jak Serwisować Hydraulikę Siłową Maszyn?",
    metaTitle: "Jak Serwisować Hydraulikę Siłową Maszyn? | Kumatex",
    metaDescription: "Dowiedz się jak serwisować hydraulikę siłową ✓ Krok po kroku ✓ Porady ekspertów ✓ Częste błędy. Czytaj poradnik!",
    intro: "Układ hydrauliczny to serce każdej maszyny budowlanej. Prawidłowy serwis hydrauliki siłowej zapewnia niezawodną pracę i długą żywotność komponentów. Przedstawiamy kompletny przewodnik po konserwacji.",
    content: [
      "Regularna wymiana oleju hydraulicznego jest podstawą prawidłowej konserwacji. Olej traci swoje właściwości z czasem i pod wpływem temperatury. Zalecane interwały wymiany to zazwyczaj co 2000-3000 motogodzin lub co 12 miesięcy.",
      "Filtry hydrauliczne powinny być wymieniane zgodnie z harmonogramem producenta. Zatkane filtry powodują spadek ciśnienia, przegrzewanie oleju i przyspieszone zużycie pomp i siłowników.",
      "Kontrola stanu siłowników obejmuje sprawdzenie uszczelnień, chromowanego tłoczyska i mocowań. Wycieki oleju z siłowników to sygnał, że uszczelnienia wymagają wymiany.",
      "Pompy hydrauliczne wymagają szczególnej uwagi. Hałaśliwa praca, spadek wydajności i podwyższona temperatura oleju to objawy zużycia pompy. Regularne badanie ciśnienia pomaga wcześnie wykryć problemy.",
      "W KUMATEX specjalizujemy się w serwisie hydrauliki siłowej maszyn budowlanych. Oferujemy diagnostykę, naprawę i regenerację pomp, siłowników i rozdzielaczy hydraulicznych.",
    ],
    relatedLinks: [
      { label: "Pompy hydrauliczne", href: "/hydraulika-silowa/pompy-hydrauliczne" },
      { label: "Siłowniki hydrauliczne", href: "/hydraulika-silowa/silowniki-hydrauliczne" },
      { label: "Rozdzielacze hydrauliczne", href: "/hydraulika-silowa/rozdzielacze" },
    ],
  },
  {
    title: "Filtry do maszyn - jak dobrać",
    slug: "filtry-do-maszyn-jak-dobrac",
    h1: "Filtry do Maszyn Budowlanych – Jak Dobrać?",
    metaTitle: "Filtry do Maszyn Budowlanych – Jak Dobrać? | Kumatex",
    metaDescription: "Dowiedz się jak dobrać filtry do maszyn budowlanych ✓ Rodzaje filtrów ✓ Interwały wymiany ✓ Porady. Czytaj poradnik!",
    intro: "Jakość filtrów i ich regularna wymiana to podstawowe warunki prawidłowej i wieloletniej pracy każdej maszyny budowlanej. Przedstawiamy kompletny przewodnik po doborze filtrów.",
    content: [
      "Filtry oleju silnikowego chronią silnik przed zanieczyszczeniami mechanicznymi. Przy doborze ważne są: wymiary, typ gwintu, zdolność filtracji i przepustowość. Stosowanie filtrów niskiej jakości może skrócić żywotność silnika nawet o połowę.",
      "Filtry paliwa zabezpieczają układ wtryskowy przed wodą i zanieczyszczeniami. W maszynach budowlanych, gdzie jakość paliwa bywa problematyczna, warto stosować filtry z separatorem wody.",
      "Filtry powietrza zapobiegają dostawaniu się pyłu i zanieczyszczeń do cylindrów. W warunkach budowlanych filtry powietrza pracują w ekstremalnych warunkach i wymagają częstszej wymiany niż w standardowych zastosowaniach.",
      "Filtry hydrauliczne chronią układ hydrauliczny przed zanieczyszczeniami. Wyróżniamy filtry ssące, ciśnieniowe i powrotne. Każdy typ pełni inną funkcję i wymaga dobrania odpowiedniego elementu filtracyjnego.",
      "W KUMATEX oferujemy filtry do maszyn budowlanych i rolniczych wszystkich marek. Pomagamy w doborze odpowiednich filtrów i doradzamy w kwestii interwałów wymiany.",
    ],
    relatedLinks: [
      { label: "Filtry do maszyn budowlanych", href: "/osprzet-do-maszyn/filtry-do-maszyn-budowlanych" },
      { label: "Filtry do maszyn rolniczych", href: "/osprzet-do-maszyn/filtry-do-maszyn-rolniczych" },
      { label: "Osprzęt do maszyn", href: "/osprzet-do-maszyn" },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
