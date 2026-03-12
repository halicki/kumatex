import { getCategoryBySlug } from "@/data/categories";
import { CategoryPageTemplate } from "@/components/templates/CategoryPageTemplate";
import type { Metadata } from "next";

const category = getCategoryBySlug("wynajem-sprzetu-budowlanego")!;

export const metadata: Metadata = {
  title: category.metaTitle,
  description: category.metaDescription,
};

export default function WynajemPage() {
  return (
    <CategoryPageTemplate
      categoryLabel={category.label}
      categoryHref="/wynajem-sprzetu-budowlanego"
      h1={category.h1}
      intro="Wynajem specjalistycznego sprzętu budowlanego – mini żurawie, roboty montażowe, chwytaki próżniowe i inny sprzęt specjalistyczny. Profesjonalna obsługa i konkurencyjne ceny."
      subcategories={category.subcategories}
      basePath="/wynajem-sprzetu-budowlanego"
    />
  );
}
