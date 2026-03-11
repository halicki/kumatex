import { ContactFormSection } from "@/components/sections/ContactFormSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - KUMATEX",
  description: "Skontaktuj się z firmą KUMATEX. Serwis maszyn budowlanych, części zamienne, naprawa.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Contact info header */}
      <section className="bg-dark">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 py-12 lg:py-20">
          <h1 className="font-[family-name:var(--font-inter)] text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Skontaktuj się z nami
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            Potrzebujesz serwisu, części zamiennych lub wyceny? Zadzwoń lub napisz — odpowiadamy w ciągu kilku godzin.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <a href="tel:+48798889554" className="group flex items-start gap-4 rounded-lg bg-white/5 p-6 transition-colors hover:bg-white/10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm uppercase text-primary font-[family-name:var(--font-inter)] font-semibold">Telefon</p>
                <p className="mt-1 text-xl lg:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  +48 798 889 554
                </p>
                <p className="mt-1 text-sm text-white/50">PN–PT 8:00–16:00</p>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:info@kumatex.pl" className="group flex items-start gap-4 rounded-lg bg-white/5 p-6 transition-colors hover:bg-white/10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm uppercase text-primary font-[family-name:var(--font-inter)] font-semibold">E-mail</p>
                <p className="mt-1 text-xl lg:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  info@kumatex.pl
                </p>
                <p className="mt-1 text-sm text-white/50">Odpowiadamy w ciągu kilku godzin</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex items-start gap-4 rounded-lg bg-white/5 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 3.827 3.024ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm uppercase text-primary font-[family-name:var(--font-inter)] font-semibold">Adres</p>
                <p className="mt-1 text-xl lg:text-2xl font-bold text-white">
                  Warszawa
                </p>
                <p className="mt-1 text-sm text-white/50">Wiejska 3/4</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
