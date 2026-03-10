"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="mx-auto max-w-[1440px] px-16 py-20">
      <h2 className="mb-10 font-[family-name:var(--font-inter)] text-3xl font-bold text-dark">
        Najczęściej zadawane pytania
      </h2>
      <div className="space-y-3">
        {faqItems.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded overflow-hidden">
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="flex w-full items-center justify-between p-5 text-left text-lg font-medium text-dark hover:bg-gray-50 transition-colors">
              {item.question}
              <span className="ml-4 text-primary text-2xl">{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5 text-gray leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
