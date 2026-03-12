export interface Subcategory {
  label: string;
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Category {
  label: string;
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  subcategories: Subcategory[];
}

export const categories: Category[] = [
  {
    label: "Maszyny Budowlane",
    slug: "maszyny-budowlane",
    h1: "Maszyny Budowlane – Koparki, Minikoparki, Ładowarki",
    metaTitle: "Maszyny Budowlane – Serwis, Części i Wynajem | Kumatex",
    metaDescription: "Sprawdź ofertę maszyn budowlanych ✓ Oryginalne części ✓ Profesjonalny serwis ✓ Szybka wycena. Kumatex – lider w branży.",
    subcategories: [
      {
        label: "Minikoparki",
        slug: "minikoparki",
        h1: "Minikoparki – Serwis, Części, Wynajem",
        metaTitle: "Minikoparki – Serwis i Części | Kumatex",
        metaDescription: "Serwis minikoparek ✓ Oryginalne części zamienne ✓ Szybka naprawa ✓ Mobilny serwis. Zadzwoń: +48 798 889 554",
      },
      {
        label: "Koparki",
        slug: "koparki",
        h1: "Koparki – Serwis, Naprawy i Części",
        metaTitle: "Koparki – Serwis, Naprawy i Części | Kumatex",
        metaDescription: "Serwis koparek ✓ Oryginalne części zamienne ✓ Szybka naprawa ✓ Mobilny serwis. Zadzwoń: +48 798 889 554",
      },
      {
        label: "Koparko-ładowarki",
        slug: "koparko-ladowarki",
        h1: "Koparko-ładowarki – Serwis i Części",
        metaTitle: "Koparko-ładowarki – Serwis i Części | Kumatex",
        metaDescription: "Serwis koparko-ładowarek ✓ Oryginalne części zamienne ✓ Szybka naprawa ✓ Mobilny serwis. Zadzwoń: +48 798 889 554",
      },
      {
        label: "Ładowarki",
        slug: "ladowarki",
        h1: "Ładowarki Kołowe – Serwis i Naprawy",
        metaTitle: "Ładowarki Kołowe – Serwis i Naprawy | Kumatex",
        metaDescription: "Serwis ładowarek kołowych i teleskopowych ✓ Oryginalne części ✓ Szybka naprawa. Zadzwoń: +48 798 889 554",
      },
      {
        label: "Wózki widłowe",
        slug: "wozki-widlowe",
        h1: "Wózki Widłowe – Serwis, Części, Naprawy",
        metaTitle: "Wózki Widłowe – Serwis, Części, Naprawy | Kumatex",
        metaDescription: "Serwis wózków widłowych ✓ Części zamienne ✓ Naprawy silników ✓ Mobilny serwis. Zadzwoń: +48 798 889 554",
      },
      {
        label: "Żurawie HDS",
        slug: "zurawie-hds",
        h1: "Żurawie HDS – Serwis i Osprzęt",
        metaTitle: "Żurawie HDS – Serwis i Osprzęt | Kumatex",
        metaDescription: "Serwis żurawi HDS ✓ Części zamienne ✓ Naprawy i przeglądy UDT ✓ Mobilny serwis. Zadzwoń: +48 798 889 554",
      },
    ],
  },
  {
    label: "Serwis Maszyn",
    slug: "serwis-maszyn",
    h1: "Serwis Maszyn Budowlanych – Profesjonalne Naprawy",
    metaTitle: "Serwis Maszyn Budowlanych – Naprawy | Kumatex",
    metaDescription: "Profesjonalny serwis maszyn budowlanych ✓ Diagnostyka ✓ Naprawa silnika ✓ Hydraulika ✓ Mobilny dojazd. Wycena 24h!",
    subcategories: [
      {
        label: "Serwis minikoparek",
        slug: "serwis-minikoparek",
        h1: "Serwis Minikoparek – Naprawy i Remonty",
        metaTitle: "Serwis Minikoparek – Naprawy i Remonty | Kumatex",
        metaDescription: "Profesjonalny serwis minikoparek ✓ Diagnostyka ✓ Naprawa silnika ✓ Hydraulika ✓ Mobilny dojazd. Wycena 24h!",
      },
      {
        label: "Serwis koparek i koparko-ładowarek",
        slug: "serwis-koparek",
        h1: "Serwis Koparek i Koparko-ładowarek",
        metaTitle: "Serwis Koparek i Koparko-ładowarek | Kumatex",
        metaDescription: "Profesjonalny serwis koparek i koparko-ładowarek ✓ Remonty silników ✓ Naprawa hydrauliki ✓ Mobilny serwis w Polsce.",
      },
      {
        label: "Serwis ładowarek",
        slug: "serwis-ladowarek",
        h1: "Serwis Ładowarek Kołowych i Teleskopowych",
        metaTitle: "Serwis Ładowarek Kołowych i Teleskopowych | Kumatex",
        metaDescription: "Serwis ładowarek kołowych, gąsienicowych i teleskopowych ✓ Naprawa silników ✓ Hydraulika ✓ Mobilny dojazd.",
      },
      {
        label: "Serwis wózków widłowych",
        slug: "serwis-wozkow-widlowych",
        h1: "Serwis Wózków Widłowych – Naprawy",
        metaTitle: "Serwis Wózków Widłowych – Naprawy | Kumatex",
        metaDescription: "Naprawy i remonty wózków widłowych ✓ Silniki Diesel i gazowe ✓ Diagnostyka ✓ Mobilny serwis. Zadzwoń!",
      },
      {
        label: "Serwis żurawi HDS",
        slug: "serwis-zurawi-hds",
        h1: "Serwis Żurawi HDS – Naprawy i Przeglądy",
        metaTitle: "Serwis Żurawi HDS – Naprawy i Przeglądy | Kumatex",
        metaDescription: "Remonty i serwis żurawi HDS ✓ Przeglądy UDT ✓ Palfinger, Hiab, Fassi, HMF ✓ Mobilny serwis w Polsce.",
      },
      {
        label: "Serwis silników Diesel",
        slug: "serwis-silnikow-diesel",
        h1: "Serwis Silników Diesel – Regeneracja, Naprawa",
        metaTitle: "Serwis Silników Diesel – Regeneracja | Kumatex",
        metaDescription: "Profesjonalny serwis silników Diesel ✓ Regeneracja ✓ Remonty kapitalne ✓ Gwarancja pisemna. Zadzwoń: +48 798 889 554",
      },
      {
        label: "Regeneracja silników maszyn",
        slug: "regeneracja-silnikow",
        h1: "Regeneracja Silników Maszyn Budowlanych",
        metaTitle: "Regeneracja Silników Maszyn Budowlanych | Kumatex",
        metaDescription: "Regeneracja silników Diesel maszyn budowlanych ✓ Kapitalne remonty ✓ Gwarancja ✓ Oryginalne części. Zadzwoń!",
      },
      {
        label: "Mobilny serwis maszyn w Polsce",
        slug: "mobilny-serwis",
        h1: "Mobilny Serwis Maszyn Budowlanych w Polsce",
        metaTitle: "Mobilny Serwis Maszyn Budowlanych w Polsce | Kumatex",
        metaDescription: "Mobilny serwis maszyn budowlanych na terenie całej Polski ✓ Dojazd do klienta ✓ Szybka diagnostyka ✓ Wycena 24h!",
      },
    ],
  },
  {
    label: "Części do Maszyn",
    slug: "czesci-do-maszyn",
    h1: "Części do Maszyn Budowlanych – Oryginalne i Zamienniki",
    metaTitle: "Części do Maszyn Budowlanych | Kumatex",
    metaDescription: "Sprawdź ofertę części do maszyn budowlanych ✓ Oryginalne części ✓ Zamienniki ✓ Szybka dostawa. Kumatex – lider w branży.",
    subcategories: [
      {
        label: "Części do minikoparek",
        slug: "minikoparki",
        h1: "Części do Minikoparek – Tłoki, Uszczelki, Filtry",
        metaTitle: "Części do Minikoparek – Tłoki, Uszczelki | Kumatex",
        metaDescription: "Części zamienne do minikoparek ✓ Tłoki ✓ Uszczelki ✓ Filtry ✓ Oryginalne i zamienniki. Szybka dostawa!",
      },
      {
        label: "Części do koparek",
        slug: "koparki",
        h1: "Części do Koparek – Oryginalne Zamienniki",
        metaTitle: "Części do Koparek – Oryginalne Zamienniki | Kumatex",
        metaDescription: "Części zamienne do koparek ✓ Oryginalne i zamienniki ✓ Wszystkie marki ✓ Szybka dostawa. Zadzwoń!",
      },
      {
        label: "Części do ładowarek",
        slug: "ladowarki",
        h1: "Części do Ładowarek Kołowych",
        metaTitle: "Części do Ładowarek Kołowych | Kumatex",
        metaDescription: "Części zamienne do ładowarek kołowych i teleskopowych ✓ Oryginalne i zamienniki ✓ Szybka dostawa.",
      },
      {
        label: "Części do wózków widłowych",
        slug: "wozki-widlowe",
        h1: "Części do Wózków Widłowych",
        metaTitle: "Części do Wózków Widłowych | Kumatex",
        metaDescription: "Części zamienne do wózków widłowych ✓ Silniki ✓ Hydraulika ✓ Oryginalne i zamienniki. Zadzwoń!",
      },
      {
        label: "Części do żurawi HDS",
        slug: "zurawie-hds",
        h1: "Części do Żurawi HDS",
        metaTitle: "Części do Żurawi HDS | Kumatex",
        metaDescription: "Części zamienne do żurawi HDS ✓ Palfinger, Hiab, Fassi, HMF ✓ Oryginalne i zamienniki. Szybka dostawa!",
      },
    ],
  },
  {
    label: "Części do Silników",
    slug: "czesci-do-silnikow",
    h1: "Części do Silników Diesel Maszyn Budowlanych",
    metaTitle: "Części do Silników Diesel Maszyn Budowlanych | Kumatex",
    metaDescription: "Części do silników Diesel ✓ Tłoki ✓ Uszczelki ✓ Panewki ✓ Pompy oleju ✓ Oryginalne i zamienniki. Szybka dostawa!",
    subcategories: [
      {
        label: "Tłoki do silników",
        slug: "tloki",
        h1: "Tłoki do Silników Diesel – Minikoparki, Koparki",
        metaTitle: "Tłoki do Silników Diesel | Kumatex",
        metaDescription: "Tłoki do silników Diesel maszyn budowlanych ✓ Oryginalne i zamienniki ✓ Kubota, Yanmar, Caterpillar. Szybka dostawa!",
      },
      {
        label: "Pierścienie tłokowe",
        slug: "pierscienie-tlokowe",
        h1: "Pierścienie Tłokowe do Silników Diesel",
        metaTitle: "Pierścienie Tłokowe do Silników Diesel | Kumatex",
        metaDescription: "Pierścienie tłokowe do silników Diesel ✓ Wszystkie marki ✓ Oryginalne i zamienniki ✓ Szybka dostawa!",
      },
      {
        label: "Uszczelki silnika",
        slug: "uszczelki",
        h1: "Uszczelki Silnika – Głowicy, Kolektora",
        metaTitle: "Uszczelki Silnika – Głowicy, Kolektora | Kumatex",
        metaDescription: "Uszczelki do silników Diesel ✓ Głowicy ✓ Kolektora ✓ Komplet ✓ Oryginalne i zamienniki. Szybka dostawa!",
      },
      {
        label: "Panewki wału",
        slug: "panewki",
        h1: "Panewki Wału Korbowego do Silników Diesel",
        metaTitle: "Panewki Wału Korbowego do Silników Diesel | Kumatex",
        metaDescription: "Panewki wału korbowego do silników Diesel ✓ Oryginalne i zamienniki ✓ Wszystkie marki. Szybka dostawa!",
      },
      {
        label: "Zawory głowicy",
        slug: "zawory",
        h1: "Zawory Głowicy Silnika – Komplet",
        metaTitle: "Zawory Głowicy Silnika – Komplet | Kumatex",
        metaDescription: "Zawory głowicy do silników Diesel ✓ Komplet ✓ Oryginalne i zamienniki ✓ Wszystkie marki. Szybka dostawa!",
      },
      {
        label: "Pompy oleju",
        slug: "pompy-oleju",
        h1: "Pompy Oleju do Silników Diesel",
        metaTitle: "Pompy Oleju do Silników Diesel | Kumatex",
        metaDescription: "Pompy oleju do silników Diesel maszyn budowlanych ✓ Oryginalne i zamienniki ✓ Szybka dostawa!",
      },
      {
        label: "Rozruszniki",
        slug: "rozruszniki",
        h1: "Rozruszniki do Maszyn Budowlanych",
        metaTitle: "Rozruszniki do Maszyn Budowlanych | Kumatex",
        metaDescription: "Rozruszniki do maszyn budowlanych ✓ Oryginalne i zamienniki ✓ Wszystkie marki ✓ Szybka dostawa!",
      },
      {
        label: "Alternatory",
        slug: "alternatory",
        h1: "Alternatory do Maszyn Budowlanych",
        metaTitle: "Alternatory do Maszyn Budowlanych | Kumatex",
        metaDescription: "Alternatory do maszyn budowlanych ✓ Oryginalne i zamienniki ✓ Wszystkie marki ✓ Szybka dostawa!",
      },
    ],
  },
  {
    label: "Hydraulika Siłowa",
    slug: "hydraulika-silowa",
    h1: "Hydraulika Siłowa do Maszyn Budowlanych",
    metaTitle: "Hydraulika Siłowa do Maszyn Budowlanych | Kumatex",
    metaDescription: "Sprawdź ofertę hydrauliki siłowej ✓ Pompy ✓ Siłowniki ✓ Rozdzielacze ✓ Hydromotory. Kumatex – lider w branży.",
    subcategories: [
      {
        label: "Pompy hydrauliczne",
        slug: "pompy-hydrauliczne",
        h1: "Pompy Hydrauliczne do Maszyn Budowlanych",
        metaTitle: "Pompy Hydrauliczne do Maszyn Budowlanych | Kumatex",
        metaDescription: "Pompy hydrauliczne do maszyn budowlanych ✓ Oryginalne i zamienniki ✓ Naprawa i regeneracja. Zadzwoń!",
      },
      {
        label: "Siłowniki hydrauliczne",
        slug: "silowniki-hydrauliczne",
        h1: "Siłowniki Hydrauliczne – Naprawy i Części",
        metaTitle: "Siłowniki Hydrauliczne – Naprawy i Części | Kumatex",
        metaDescription: "Siłowniki hydrauliczne do maszyn budowlanych ✓ Regeneracja ✓ Nowe i używane ✓ Szybka dostawa. Zadzwoń!",
      },
      {
        label: "Rozdzielacze hydrauliczne",
        slug: "rozdzielacze",
        h1: "Rozdzielacze Hydrauliczne – Sprzedaż",
        metaTitle: "Rozdzielacze Hydrauliczne – Sprzedaż | Kumatex",
        metaDescription: "Rozdzielacze hydrauliczne do maszyn budowlanych ✓ Precyzyjne sterowanie ✓ Oryginalne i zamienniki.",
      },
      {
        label: "Hydromotory",
        slug: "hydromotory",
        h1: "Hydromotory do Maszyn Budowlanych",
        metaTitle: "Hydromotory do Maszyn Budowlanych | Kumatex",
        metaDescription: "Hydromotory do maszyn budowlanych ✓ Oryginalne i zamienniki ✓ Naprawa i regeneracja. Zadzwoń!",
      },
      {
        label: "Zwolnice",
        slug: "zwolnice",
        h1: "Zwolnice do Minikoparek i Koparek",
        metaTitle: "Zwolnice do Minikoparek i Koparek | Kumatex",
        metaDescription: "Zwolnice i napędy gąsienic do maszyn budowlanych ✓ Minikoparki ✓ Koparki ✓ Ładowarki. Zadzwoń!",
      },
    ],
  },
  {
    label: "Osprzęt do Maszyn",
    slug: "osprzet-do-maszyn",
    h1: "Osprzęt do Maszyn Budowlanych – Łyżki, Filtry",
    metaTitle: "Osprzęt do Maszyn Budowlanych – Łyżki, Filtry | Kumatex",
    metaDescription: "Osprzęt do maszyn budowlanych ✓ Filtry ✓ Łyżki ✓ Chwytaki ✓ Osprzęt HDS. Sprawdź ofertę Kumatex!",
    subcategories: [
      {
        label: "Filtry do maszyn budowlanych",
        slug: "filtry-do-maszyn-budowlanych",
        h1: "Filtry do Maszyn Budowlanych – Oleju, Paliwa",
        metaTitle: "Filtry do Maszyn Budowlanych – Oleju, Paliwa | Kumatex",
        metaDescription: "Filtry do maszyn budowlanych ✓ Oleju ✓ Paliwa ✓ Powietrza ✓ Hydrauliczne ✓ Wszystkie marki. Szybka dostawa!",
      },
      {
        label: "Filtry do maszyn rolniczych",
        slug: "filtry-do-maszyn-rolniczych",
        h1: "Filtry do Maszyn Rolniczych",
        metaTitle: "Filtry do Maszyn Rolniczych | Kumatex",
        metaDescription: "Filtry do ciągników, kombajnów i maszyn rolniczych ✓ Oryginalne i zamienne ✓ Szybka dostawa.",
      },
      {
        label: "Łyżki do koparek",
        slug: "lyzki-do-koparek",
        h1: "Łyżki do Koparek – Różne Rozmiary",
        metaTitle: "Łyżki do Koparek – Różne Rozmiary | Kumatex",
        metaDescription: "Łyżki do koparek i minikoparek ✓ Różne rozmiary ✓ Do kopania, profilowania, ładowania. Sprawdź ofertę!",
      },
      {
        label: "Chwytaki do żurawi",
        slug: "chwytaki",
        h1: "Chwytaki do Żurawi i Koparek",
        metaTitle: "Chwytaki do Żurawi i Koparek | Kumatex",
        metaDescription: "Chwytaki hydrauliczne do żurawi i koparek ✓ Do drewna ✓ Do złomu ✓ Do kamienia. Sprawdź ofertę Kumatex!",
      },
      {
        label: "Osprzęt HDS",
        slug: "osprzet-hds",
        h1: "Osprzęt HDS – Akcesoria i Części",
        metaTitle: "Osprzęt HDS – Akcesoria i Części | Kumatex",
        metaDescription: "Osprzęt i akcesoria do żurawi HDS ✓ Palfinger ✓ Hiab ✓ Fassi ✓ HMF. Sprawdź ofertę Kumatex!",
      },
      {
        label: "Przyssawki próżniowe",
        slug: "przyssawki-prozniowe",
        h1: "Przyssawki Próżniowe do Transportu i Montażu",
        metaTitle: "Przyssawki Próżniowe | Kumatex",
        metaDescription: "Przyssawki próżniowe do transportu szyb, płyt kamiennych i blach ✓ Profesjonalny sprzęt. Sprawdź ofertę!",
      },
      {
        label: "Roboty montażowe",
        slug: "roboty-montazowe",
        h1: "Próżniowe Roboty Montażowe",
        metaTitle: "Próżniowe Roboty Montażowe | Kumatex",
        metaDescription: "Próżniowe roboty montażowe do precyzyjnego pozycjonowania elementów szklanych i metalowych. Sprawdź ofertę!",
      },
    ],
  },
  {
    label: "Wynajem Sprzętu Budowlanego",
    slug: "wynajem-sprzetu-budowlanego",
    h1: "Wynajem Sprzętu Budowlanego – Minikoparki, Żurawie",
    metaTitle: "Wynajem Sprzętu Budowlanego | Kumatex",
    metaDescription: "Wynajem sprzętu budowlanego ✓ Mini żurawie ✓ Roboty montażowe ✓ Chwytaki próżniowe. Sprawdź ofertę Kumatex!",
    subcategories: [
      {
        label: "Wynajem mini żurawi",
        slug: "minizurawie",
        h1: "Wynajem Mini Żurawi",
        metaTitle: "Wynajem Mini Żurawi | Kumatex",
        metaDescription: "Wynajem mini żurawi i dźwigów ✓ Do montażu okien ✓ Do szyb ✓ Do płyt. Sprawdź ofertę Kumatex!",
      },
      {
        label: "Wynajem robotów montażowych",
        slug: "roboty-montazowe",
        h1: "Wynajem Robotów Montażowych",
        metaTitle: "Wynajem Robotów Montażowych | Kumatex",
        metaDescription: "Wynajem próżniowych robotów montażowych ✓ Do szyb ✓ Do płyt warstwowych ✓ Do kamienia. Zadzwoń!",
      },
      {
        label: "Wynajem chwytaków próżniowych",
        slug: "chwytaki-prozniowe",
        h1: "Wynajem Chwytaków Próżniowych",
        metaTitle: "Wynajem Chwytaków Próżniowych | Kumatex",
        metaDescription: "Wynajem chwytaków próżniowych do transportu szyb, blach i płyt kamiennych. Sprawdź ofertę!",
      },
      {
        label: "Wynajem specjalistycznego sprzętu",
        slug: "sprzet-specjalistyczny",
        h1: "Wynajem Specjalistycznego Sprzętu Budowlanego",
        metaTitle: "Wynajem Specjalistycznego Sprzętu Budowlanego | Kumatex",
        metaDescription: "Wynajem specjalistycznego sprzętu budowlanego ✓ Manipulatory ✓ Podnośniki ✓ Dźwigi. Zadzwoń po wycenę!",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getSubcategoryBySlug(
  categorySlug: string,
  subcategorySlug: string
): { category: Category; subcategory: Subcategory } | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const subcategory = category.subcategories.find((s) => s.slug === subcategorySlug);
  if (!subcategory) return undefined;
  return { category, subcategory };
}
