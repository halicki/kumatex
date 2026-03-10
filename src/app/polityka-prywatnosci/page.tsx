import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności - KUMATEX",
  description: "Polityka prywatności serwisu KUMATEX.",
};

export default function PolitykaPrywatnosciPage() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 py-12 lg:py-20">
      <h1 className="font-[family-name:var(--font-inter)] text-2xl md:text-3xl lg:text-4xl font-bold text-dark">
        Polityka prywatności
      </h1>
      <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-dark">
        <p>
          Administratorem danych osobowych jest KUMATEX z siedzibą w Warszawie, ul. Wiejska 3/4.
        </p>
        <p>
          Dane osobowe przetwarzane są w celu realizacji usług serwisowych, sprzedaży części zamiennych
          oraz obsługi zapytań kontaktowych. Podstawą prawną przetwarzania jest zgoda osoby, której dane
          dotyczą, oraz prawnie uzasadniony interes administratora.
        </p>
        <p>
          Każda osoba ma prawo dostępu do swoich danych, ich sprostowania, usunięcia lub ograniczenia
          przetwarzania, a także prawo do wniesienia sprzeciwu wobec przetwarzania.
        </p>
        <p>
          W sprawie ochrony danych osobowych prosimy o kontakt pod adresem:{" "}
          <a href="mailto:info@kumatex.pl" className="text-primary font-medium hover:underline">
            info@kumatex.pl
          </a>
        </p>
      </div>
    </section>
  );
}
