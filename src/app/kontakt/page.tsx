import { ContactFormSection } from "@/components/sections/ContactFormSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - KUMATEX",
  description: "Skontaktuj się z firmą KUMATEX. Serwis maszyn budowlanych, części zamienne, naprawa.",
};

export default function KontaktPage() {
  return <ContactFormSection />;
}
