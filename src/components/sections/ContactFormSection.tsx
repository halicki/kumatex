"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 8000);
  }

  return (
    <section className="w-full bg-light-gray">
      <div className="mx-auto flex flex-col lg:flex-row max-w-[1440px]">
        <div className="relative h-[200px] w-full lg:h-[714px] lg:w-[709px] shrink-0">
          <Image src="/images/imgBigCareerWorkerInProfessionalUniformIsOnT20250318201230Utc1.png" alt="Pracownik KUMATEX" fill className="object-cover" unoptimized />
        </div>
        <div className="flex flex-1 flex-col justify-center px-4 py-8 lg:px-16 lg:py-8">
          <h2 className="mb-2 font-[family-name:var(--font-roboto)] text-3xl lg:text-5xl font-black text-dark">
            Kontakt
          </h2>
          <p className="mb-6 lg:mb-8 text-base text-dark/60">
            Wypełnij formularz, a odezwiemy się w ciągu kilku godzin.
          </p>
          {submitted ? (
            <div className="rounded-lg bg-green-50 border border-green-200 p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-green-600">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl font-bold text-green-800">Dziękujemy za wiadomość!</p>
              <p className="mt-2 text-green-700">Skontaktujemy się w ciągu kilku godzin.</p>
              <p className="mt-4 text-sm text-green-600">
                Pilne? Zadzwoń: <a href="tel:+48798889554" className="font-bold underline">+48 798 889 554</a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-6">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-dark">Adres e-mail *</label>
                <input type="email" required placeholder="Podaj swój adres e-mail" className="w-full border-b-2 border-primary bg-transparent py-2.5 text-base lg:text-lg text-dark placeholder:text-gray outline-none focus:border-dark transition-colors" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-dark">Imię i nazwisko *</label>
                <input type="text" required placeholder="Twoje imię i nazwisko" className="w-full border-b-2 border-primary bg-transparent py-2.5 text-base lg:text-lg text-dark placeholder:text-gray outline-none focus:border-dark transition-colors" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-dark">Numer telefonu *</label>
                <input type="tel" required placeholder="Twój numer telefonu" className="w-full border-b-2 border-primary bg-transparent py-2.5 text-base lg:text-lg text-dark placeholder:text-gray outline-none focus:border-dark transition-colors" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-dark">Twoja wiadomość *</label>
                <textarea required rows={4} placeholder="Opisz czego potrzebujesz — serwis, części, wycena..." className="w-full resize-none border-b-2 border-primary bg-transparent py-2.5 text-base lg:text-lg text-dark placeholder:text-gray outline-none focus:border-dark transition-colors" />
              </div>
              <label className="flex items-start gap-3 text-sm">
                <input type="checkbox" required className="mt-0.5 size-5 accent-primary border-2 border-primary" />
                <span>Akceptuję <strong>politykę prywatności</strong></span>
              </label>
              <button type="submit" className="w-full rounded bg-primary py-3 font-[family-name:var(--font-inter)] text-lg lg:text-xl font-bold text-dark transition-colors hover:bg-primary/90">
                Wyślij wiadomość
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
