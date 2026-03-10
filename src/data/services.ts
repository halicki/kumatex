export interface Service {
  title: string;
  slug: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Serwis koparek",
    slug: "serwis-koparek",
    description:
      "Prowadzimy remonty i serwis koparek, minikoparek i koparko-ładowarek wszystkich najpopularniejszych marek. Przeprowadzamy kompleksowe remonty silników, zajmujemy się kasowaniem luzów, usuwaniem wycieków, regeneracją i wymianą siłowników.",
    icon: "excavator",
  },
  {
    title: "Serwis ładowarek",
    slug: "serwis-ladowarek",
    description:
      "Serwis i naprawa ładowarek kołowych, gąsienicowych, teleskopowych i miniładowarek. Firma wyspecjalizowana w remontach i serwisach kompaktowego sprzętu budowlanego i drogowego.",
    icon: "loader",
  },
  {
    title: "Serwis żurawi HDS",
    slug: "serwis-zurawi-hds",
    description:
      "Remonty, serwis oraz UDT wszystkich modeli żurawi i dźwigów renomowanych marek takich jak Effer, Fassi, Hiab, HMF, Palfinger, Loglift i Jonsered. Obsługa żurawi przeładunkowych i załadowczych.",
    icon: "crane",
  },
  {
    title: "Serwis wózków widłowych",
    slug: "serwis-wozkow-widlowych",
    description:
      "Naprawy i remonty wózków widłowych gazowo-benzynowych i z silnikami Diesel. Serwisujemy czołowe marki: Linde, Still, Jungheinrich, Toyota, Nissan, Hyster, Yale, Mitsubishi i wiele innych.",
    icon: "forklift",
  },
  {
    title: "Serwis silników Diesel",
    slug: "serwis-silnikow-diesel",
    description:
      "Profesjonalny serwis, naprawy i remonty wszystkich typów silników Diesel z maszyn budowlanych i drogowych. Specjalizujemy się w silnikach Deutz, Perkins, Caterpillar, Komatsu, Kubota i Yanmar. Na wszystkie remonty udzielamy gwarancji pisemnych.",
    icon: "engine",
  },
  {
    title: "Serwis sprężarek",
    slug: "serwis-sprezarek",
    description:
      "Serwis silników spalinowych z kompresorów i sprężarek przemysłowych. Obsługujemy maszyny marki Kaeser, Ingersoll Rand i innych producentów. Naprawy, remonty oraz przeglądy techniczne jednostek napędowych.",
    icon: "compressor",
  },
];
