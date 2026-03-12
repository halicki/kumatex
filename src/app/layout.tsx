import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import { organizationJsonLd, localBusinessJsonLd } from "@/data/seo-meta";
import { ChangesOverlay } from "@/components/ui/ChangesOverlay";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kumatex.pl"),
  title: "Serwis Maszyn Budowlanych – Części, Naprawa | Kumatex",
  description:
    "Profesjonalny serwis maszyn budowlanych ✓ Części zamienne ✓ Regeneracja silników ✓ Mobilny serwis w Polsce. Zadzwoń teraz!",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Kumatex",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${roboto.variable} ${inter.variable}`}>
      <body className="antialiased">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={localBusinessJsonLd()} />
        <Navbar />
        <main className="pb-[60px] lg:pb-0">{children}</main>
        <Footer />
        <ChangesOverlay />
      </body>
    </html>
  );
}
