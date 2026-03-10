"use client";

import { useState, FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 5000);
  }

  if (submitted) {
    return (
      <div className="rounded bg-green-100 p-6 text-green-800 text-lg">
        Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się wkrótce.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="mb-1 block text-sm text-dark">Adres e-mail</label>
        <input type="email" required placeholder="Podaj swój adres e-mail" className="w-full border-b-2 border-primary bg-transparent py-2 text-lg text-dark placeholder:text-gray outline-none" />
      </div>
      <div>
        <label className="mb-1 block text-sm text-dark">Imię i nazwisko</label>
        <input type="text" required placeholder="Twoje imię" className="w-full border-b-2 border-primary bg-transparent py-2 text-lg text-dark placeholder:text-gray outline-none" />
      </div>
      <div>
        <label className="mb-1 block text-sm text-dark">Numer telefonu</label>
        <input type="tel" placeholder="Twój numer telefonu" className="w-full border-b-2 border-primary bg-transparent py-2 text-lg text-dark placeholder:text-gray outline-none" />
      </div>
      <div>
        <label className="mb-1 block text-sm text-dark">Twoja wiadomość</label>
        <textarea required rows={4} placeholder="Treść wiadomości" className="w-full resize-none border-b-2 border-primary bg-transparent py-2 text-lg text-dark placeholder:text-gray outline-none" />
      </div>
      <label className="flex items-center gap-3 text-sm">
        <input type="checkbox" required className="size-5 accent-primary" />
        <span>Akceptuję <strong>politykę prywatności</strong></span>
      </label>
      <button type="submit" className="w-full rounded bg-primary py-2.5 font-[family-name:var(--font-inter)] text-xl font-bold text-dark transition-colors hover:bg-primary/90">
        Wyślij
      </button>
    </form>
  );
}
