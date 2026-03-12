export interface MegaMenuChild {
  label: string;
  href: string;
}

export interface MegaMenuSection {
  label: string;
  href: string;
  children?: MegaMenuChild[];

}

export const seoNavigation: MegaMenuSection[] = [
  {
    label: "Maszyny Budowlane",
    href: "/maszyny-budowlane",
    children: [
      { label: "Minikoparki", href: "/maszyny-budowlane/minikoparki" },
      { label: "Koparki", href: "/maszyny-budowlane/koparki" },
      { label: "Koparko-ładowarki", href: "/maszyny-budowlane/koparko-ladowarki" },
      { label: "Ładowarki", href: "/maszyny-budowlane/ladowarki" },
      { label: "Wózki widłowe", href: "/maszyny-budowlane/wozki-widlowe" },
      { label: "Żurawie HDS", href: "/maszyny-budowlane/zurawie-hds" },
    ],
  },
  {
    label: "Serwis Maszyn",
    href: "/serwis-maszyn",
    children: [
      { label: "Serwis minikoparek", href: "/serwis-maszyn/serwis-minikoparek" },
      { label: "Serwis koparek i koparko-ładowarek", href: "/serwis-maszyn/serwis-koparek" },
      { label: "Serwis ładowarek", href: "/serwis-maszyn/serwis-ladowarek" },
      { label: "Serwis wózków widłowych", href: "/serwis-maszyn/serwis-wozkow-widlowych" },
      { label: "Serwis żurawi HDS", href: "/serwis-maszyn/serwis-zurawi-hds" },
      { label: "Serwis silników Diesel", href: "/serwis-maszyn/serwis-silnikow-diesel" },
      { label: "Regeneracja silników maszyn", href: "/serwis-maszyn/regeneracja-silnikow" },
      { label: "Mobilny serwis maszyn w Polsce", href: "/serwis-maszyn/mobilny-serwis" },
    ],
  },
  {
    label: "Części Maszyn",
    href: "/czesci-do-maszyn",

    children: [
      { label: "Części do minikoparek", href: "/czesci-do-maszyn/minikoparki" },
      { label: "Części do koparek", href: "/czesci-do-maszyn/koparki" },
      { label: "Części do ładowarek", href: "/czesci-do-maszyn/ladowarki" },
      { label: "Części do wózków widłowych", href: "/czesci-do-maszyn/wozki-widlowe" },
      { label: "Części do żurawi HDS", href: "/czesci-do-maszyn/zurawie-hds" },
    ],
  },
  {
    label: "Części Silników",
    href: "/czesci-do-silnikow",
    children: [
      { label: "Tłoki do silników", href: "/czesci-do-silnikow/tloki" },
      { label: "Pierścienie tłokowe", href: "/czesci-do-silnikow/pierscienie-tlokowe" },
      { label: "Uszczelki silnika", href: "/czesci-do-silnikow/uszczelki" },
      { label: "Panewki wału", href: "/czesci-do-silnikow/panewki" },
      { label: "Zawory głowicy", href: "/czesci-do-silnikow/zawory" },
      { label: "Pompy oleju", href: "/czesci-do-silnikow/pompy-oleju" },
      { label: "Rozruszniki i alternatory", href: "/czesci-do-silnikow/rozruszniki" },
    ],
  },
  {
    label: "Hydraulika Siłowa",
    href: "/hydraulika-silowa",
    children: [
      { label: "Pompy hydrauliczne", href: "/hydraulika-silowa/pompy-hydrauliczne" },
      { label: "Siłowniki hydrauliczne", href: "/hydraulika-silowa/silowniki-hydrauliczne" },
      { label: "Rozdzielacze hydrauliczne", href: "/hydraulika-silowa/rozdzielacze" },
      { label: "Hydromotory", href: "/hydraulika-silowa/hydromotory" },
      { label: "Zwolnice", href: "/hydraulika-silowa/zwolnice" },
    ],
  },
  {
    label: "Osprzęt",
    href: "/osprzet-do-maszyn",
    children: [
      { label: "Filtry do maszyn budowlanych", href: "/osprzet-do-maszyn/filtry-do-maszyn-budowlanych" },
      { label: "Filtry do maszyn rolniczych", href: "/osprzet-do-maszyn/filtry-do-maszyn-rolniczych" },
      { label: "Łyżki do koparek", href: "/osprzet-do-maszyn/lyzki-do-koparek" },
      { label: "Chwytaki do żurawi", href: "/osprzet-do-maszyn/chwytaki" },
      { label: "Osprzęt HDS", href: "/osprzet-do-maszyn/osprzet-hds" },
      { label: "Przyssawki próżniowe", href: "/osprzet-do-maszyn/przyssawki-prozniowe" },
      { label: "Roboty montażowe", href: "/osprzet-do-maszyn/roboty-montazowe" },
    ],
  },
  {
    label: "Wynajem",
    href: "/wynajem-sprzetu-budowlanego",
    children: [
      { label: "Wynajem mini żurawi", href: "/wynajem-sprzetu-budowlanego/minizurawie" },
      { label: "Wynajem robotów montażowych", href: "/wynajem-sprzetu-budowlanego/roboty-montazowe" },
      { label: "Wynajem chwytaków próżniowych", href: "/wynajem-sprzetu-budowlanego/chwytaki-prozniowe" },
      { label: "Wynajem specjalistycznego sprzętu", href: "/wynajem-sprzetu-budowlanego/sprzet-specjalistyczny" },
    ],
  },
  {
    label: "Poradnik",
    href: "/poradnik",
    children: [
      { label: "Jak dobrać części do minikoparki", href: "/poradnik/jak-dobrac-czesci-do-minikoparki" },
      { label: "Regeneracja silnika diesel - koszty", href: "/poradnik/regeneracja-silnika-diesel-koszty" },
      { label: "Najczęstsze awarie koparek", href: "/poradnik/najczestsze-awarie-koparek" },
      { label: "Jak serwisować hydraulikę", href: "/poradnik/jak-serwisowac-hydraulike" },
      { label: "Filtry do maszyn - jak dobrać", href: "/poradnik/filtry-do-maszyn-jak-dobrac" },
    ],
  },
  {
    label: "O Firmie",
    href: "/o-firmie",
  },
  {
    label: "Kontakt",
    href: "/kontakt",
  },
];
