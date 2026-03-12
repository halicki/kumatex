import type { Metadata } from "next";

const SITE_NAME = "Kumatex";
const BASE_URL = "https://kumatex.pl";

export function generateCategoryMeta(
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: SITE_NAME,
    },
  };
}

export function generateBrandHubMeta(
  brandName: string,
  machineType: string,
  metaTitle: string,
  metaDescription: string
): Metadata {
  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "website",
      siteName: SITE_NAME,
    },
  };
}

export function generateArticleMeta(
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: SITE_NAME,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KUMATEX",
    url: BASE_URL,
    logo: `${BASE_URL}/images/imgKumatexLogo2.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+48-798-889-554",
      contactType: "customer service",
      availableLanguage: "Polish",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Wiejska 3/4",
      addressLocality: "Warszawa",
      addressCountry: "PL",
    },
    email: "info@kumatex.pl",
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "KUMATEX - Serwis Maszyn Budowlanych",
    url: BASE_URL,
    logo: `${BASE_URL}/images/imgKumatexLogo2.png`,
    image: `${BASE_URL}/images/imgKumatexLogo2.png`,
    telephone: "+48-798-889-554",
    email: "info@kumatex.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Wiejska 3/4",
      addressLocality: "Warszawa",
      addressCountry: "PL",
    },
    description:
      "Profesjonalny serwis maszyn budowlanych, części zamienne do silników Diesel, regeneracja silników. Mobilny serwis na terenie całej Polski.",
    priceRange: "$$",
  };
}
