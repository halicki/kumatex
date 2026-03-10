"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16 py-12 lg:py-20">
      <h2 className="mb-6 lg:mb-10 font-[family-name:var(--font-inter)] text-2xl lg:text-3xl font-bold text-dark">
        Najczęściej zadawane pytania
      </h2>
      <div className="space-y-3">
        {faqItems.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded overflow-hidden">
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="flex w-full items-center justify-between p-3 lg:p-5 text-left text-base lg:text-lg font-medium text-dark hover:bg-gray-50 transition-colors">
              {item.question}
              <span className="ml-4 text-primary text-2xl">{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && (
              <div className="px-3 lg:px-5 pb-4 lg:pb-5 text-gray leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
