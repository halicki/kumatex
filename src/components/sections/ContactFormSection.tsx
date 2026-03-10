"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <section className="w-full bg-light-gray">
      <div className="mx-auto flex flex-col lg:flex-row max-w-[1440px]">
        <div className="relative h-[250px] w-full lg:h-[714px] lg:w-[709px] shrink-0">
          <Image src="/images/imgBigCareerWorkerInProfessionalUniformIsOnT20250318201230Utc1.png" alt="Pracownik KUMATEX" fill className="object-cover" unoptimized />
        </div>
        <div className="flex flex-1 flex-col justify-center px-4 py-6 lg:px-16 lg:py-8">
          <h2 className="mb-6 lg:mb-8 font-[family-name:var(--font-roboto)] text-3xl lg:text-5xl font-black text-dark">
            Kontakt
          </h2>
          {submitted ? (
            <div className="rounded bg-green-100 p-6 text-green-800 text-lg">
              Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się wkrótce.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-8">
              <div>
                <label className="mb-1 block text-sm text-dark">Adres e-mail</label>
                <input type="email" required placeholder="Podaj swój adres e-mail" className="w-full border-b-2 border-primary bg-transparent py-2 text-base lg:text-lg text-dark placeholder:text-gray outline-none" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-dark">Imię i nazwisko</label>
                <input type="text" required placeholder="Twoje imię" className="w-full border-b-2 border-primary bg-transparent py-2 text-base lg:text-lg text-dark placeholder:text-gray outline-none" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-dark">Numer telefonu</label>
                <input type="tel" placeholder="Twój numer telefonu" className="w-full border-b-2 border-primary bg-transparent py-2 text-base lg:text-lg text-dark placeholder:text-gray outline-none" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-dark">Twoja wiadomość</label>
                <textarea required rows={4} placeholder="Treść wiadomości" className="w-full resize-none border-b-2 border-primary bg-transparent py-2 text-base lg:text-lg text-dark placeholder:text-gray outline-none" />
              </div>
              <label className="flex items-center gap-3 text-sm">
                <input type="checkbox" required className="size-5 accent-primary border-2 border-primary" />
                <span>Akceptuję <strong>politykę prywatności</strong></span>
              </label>
              <button type="submit" className="w-full rounded bg-primary py-2.5 font-[family-name:var(--font-inter)] text-lg lg:text-xl font-bold text-dark transition-colors hover:bg-primary/90">
                Wyślij
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
