"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "kumatex-ux-changes-dismissed";

const changes = [
  {
    title: "Telefon widoczny wszędzie",
    description:
      "Numer telefonu w top bar na desktopie, ikona telefonu w mobile navbar, sticky bottom bar z przyciskiem dzwonienia na mobile.",
  },
  {
    title: "Odwrócony priorytet CTA",
    description:
      '„Skontaktuj się" jest teraz głównym CTA (primary), „Sklep" przesunięty na pozycję drugorzędną.',
  },
  {
    title: "Strona /kontakt przebudowana",
    description:
      "Telefon, email, adres i godziny pracy wyświetlane prominentnie nad formularzem.",
  },
  {
    title: "CTA na stronach szczegółowych",
    description:
      "Strony części zamiennych, serwisu i osprzętu mają teraz przyciski akcji prowadzące do kontaktu.",
  },
  {
    title: "Formularz kontaktowy",
    description:
      "Pole telefonu jest teraz wymagane. Lepszy stan po wysłaniu formularza (success state).",
  },
  {
    title: "Homepage",
    description: "Dodano sekcję CTA po sekcji Features zachęcającą do kontaktu.",
  },
];

export function ChangesOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
      onClick={dismiss}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
          aria-label="Zamknij"
        >
          &times;
        </button>

        <div className="mb-1 text-xs font-medium tracking-wider text-gray-400 uppercase">
          Branch: UX
        </div>
        <h2 className="mb-6 font-[family-name:var(--font-inter)] text-2xl font-bold text-[#1e1e1e]">
          Zmiany UX
        </h2>

        <ol className="space-y-4">
          {changes.map((c, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fbb53c] text-xs font-bold text-white">
                {i + 1}
              </span>
              <div>
                <p className="font-medium text-[#1e1e1e]">{c.title}</p>
                <p className="text-sm text-[#8f8f8f]">{c.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <button
          onClick={dismiss}
          className="mt-6 w-full rounded-lg bg-[#fbb53c] py-3 font-medium text-white transition hover:bg-[#e5a235]"
        >
          Rozumiem, zamknij
        </button>
      </div>
    </div>
  );
}
