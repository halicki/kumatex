import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Serwis → Serwis Maszyn
      { source: "/serwis", destination: "/serwis-maszyn", permanent: true },
      { source: "/serwis/serwis-koparek", destination: "/serwis-maszyn/serwis-koparek", permanent: true },
      { source: "/serwis/serwis-ladowarek", destination: "/serwis-maszyn/serwis-ladowarek", permanent: true },
      { source: "/serwis/serwis-zurawi-hds", destination: "/serwis-maszyn/serwis-zurawi-hds", permanent: true },
      { source: "/serwis/serwis-wozkow-widlowych", destination: "/serwis-maszyn/serwis-wozkow-widlowych", permanent: true },
      { source: "/serwis/serwis-silnikow-diesel", destination: "/serwis-maszyn/serwis-silnikow-diesel", permanent: true },
      { source: "/serwis/serwis-sprezarek", destination: "/serwis-maszyn/serwis-silnikow-diesel", permanent: true },

      // Osprzęt → nowe ścieżki
      { source: "/osprzet", destination: "/osprzet-do-maszyn", permanent: true },
      { source: "/osprzet/przyssawki-prozniowe", destination: "/osprzet-do-maszyn/przyssawki-prozniowe", permanent: true },
      { source: "/osprzet/prozniowy-robot-montazowy", destination: "/osprzet-do-maszyn/roboty-montazowe", permanent: true },
      { source: "/osprzet/lyzki-i-chwytaki", destination: "/osprzet-do-maszyn/lyzki-do-koparek", permanent: true },
      { source: "/osprzet/filtry", destination: "/osprzet-do-maszyn/filtry-do-maszyn-budowlanych", permanent: true },
      { source: "/osprzet/filtry-do-koparek", destination: "/osprzet-do-maszyn/filtry-do-maszyn-budowlanych", permanent: true },
      { source: "/osprzet/filtry-do-maszyn-rolniczych", destination: "/osprzet-do-maszyn/filtry-do-maszyn-rolniczych", permanent: true },
      { source: "/osprzet/rozdzielacze-hydrauliczne", destination: "/hydraulika-silowa/rozdzielacze", permanent: true },
      { source: "/osprzet/silniki-maszyn", destination: "/czesci-do-silnikow", permanent: true },
      { source: "/osprzet/wynajem", destination: "/wynajem-sprzetu-budowlanego", permanent: true },
      { source: "/osprzet/zwolnice", destination: "/hydraulika-silowa/zwolnice", permanent: true },
      { source: "/osprzet/zurawie-na-samochody-dostawcze", destination: "/osprzet-do-maszyn/osprzet-hds", permanent: true },
      { source: "/osprzet/greenlifter", destination: "/osprzet-do-maszyn", permanent: true },

      // Części zamienne → nowe ścieżki
      { source: "/czesci-zamienne", destination: "/czesci-do-maszyn", permanent: true },
      { source: "/czesci-zamienne/:brand", destination: "/czesci-do-silnikow/:brand", permanent: true },
      { source: "/czesci-zamienne/:brand/:part", destination: "/czesci-do-silnikow/:brand", permanent: true },

      // Filtry → osprzęt
      { source: "/filtry/:brand", destination: "/osprzet-do-maszyn/filtry-do-maszyn-budowlanych", permanent: true },
    ];
  },
};

export default nextConfig;
