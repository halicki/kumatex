#!/usr/bin/env python3
"""
Generate SEO text for brands and parts based on their descriptions and content.
Injects seoText arrays into brands.ts and parts.ts.
"""
import json
import re
import random

random.seed(42)

# SEO paragraph templates for brands (Polish)
BRAND_SEO_TEMPLATES = {
    "engine_service": [
        "Serwis silników {brand} w KUMATEX to gwarancja profesjonalnej obsługi i wieloletniego doświadczenia. Nasi mechanicy specjalizują się w diagnostyce i naprawie jednostek napędowych tej marki, zapewniając najwyższą jakość wykonywanych usług. Dysponujemy specjalistycznym wyposażeniem warsztatowym, które pozwala nam precyzyjnie identyfikować usterki i przeprowadzać skuteczne naprawy.",
        "Części zamienne do silników {brand} dostępne w naszym magazynie to produkty najwyższej jakości, spełniające rygorystyczne normy producenta. Oferujemy zarówno oryginalne komponenty, jak i zamienniki renomowanych producentów, co pozwala naszym klientom dobrać rozwiązanie optymalne pod względem jakości i ceny. Każda część przed montażem przechodzi weryfikację techniczną.",
        "Wybierając serwis KUMATEX do obsługi maszyn {brand}, zyskujesz partnera z wieloletnim doświadczeniem w branży maszyn budowlanych i przemysłowych. Realizujemy zarówno bieżące naprawy, jak i kompleksowe remonty kapitalne silników. Nasz zespół to wykwalifikowani specjaliści, którzy regularnie podnoszą swoje kompetencje w zakresie najnowszych technologii naprawczych.",
        "Regularna konserwacja i terminowe przeglądy techniczne silników {brand} to klucz do ich długiej i bezawaryjnej pracy. W KUMATEX oferujemy kompleksowe programy serwisowe, obejmujące wymianę płynów eksploatacyjnych, kontrolę układów paliwowych i chłodzenia oraz diagnostykę elektroniczną. Profilaktyka pozwala uniknąć kosztownych przestojów maszyn na budowie.",
    ],
    "crane_service": [
        "Serwis żurawi {brand} w KUMATEX obejmuje pełen zakres usług naprawczych i konserwacyjnych. Specjalizujemy się w remontach kapitalnych, naprawach układów hydraulicznych, regeneracji kolumn obrotu oraz przygotowaniu sprzętu do badań UDT. Wieloletnie doświadczenie naszego zespołu gwarantuje najwyższą jakość wykonywanych prac.",
        "Bezpieczeństwo eksploatacji żurawi HDS {brand} wymaga regularnych przeglądów technicznych i terminowej wymiany zużytych komponentów. KUMATEX oferuje kompleksową obsługę serwisową, obejmującą kontrolę układów bezpieczeństwa, badania nieniszczące konstrukcji stalowej oraz kalibrację systemów przeciążeniowych. Nasz serwis działa na terenie całego kraju.",
        "Części zamienne do żurawi {brand} dostępne w KUMATEX to elementy o potwierdzonej jakości i trwałości. Oferujemy rozdzielacze hydrauliczne, siłowniki, pompy, zawory, uszczelnienia oraz elementy konstrukcji stalowej. Szybka dostępność części skraca czas przestoju maszyny do minimum.",
    ],
    "parts_supplier": [
        "Części zamienne {brand} w ofercie KUMATEX to szeroki asortyment komponentów silnikowych i eksploatacyjnych. Posiadamy na stanie setki pozycji magazynowych, co zapewnia błyskawiczną realizację zamówień. Współpracujemy z renomowanymi dostawcami, gwarantując najwyższą jakość oferowanych produktów.",
        "Zamawiając części do {brand} w KUMATEX, możesz liczyć na profesjonalne doradztwo techniczne. Nasi specjaliści pomogą dobrać odpowiednie komponenty na podstawie numeru seryjnego silnika lub maszyny. Oferujemy również pomoc w identyfikacji części na podstawie zdjęć lub opisów uszkodzeń.",
        "Dostarczamy części zamienne do silników {brand} montowanych w maszynach budowlanych, rolniczych, przemysłowych i drogowych. Nasz magazyn obejmuje uszczelki, tłoki, panewki, pompy wody i paliwa, wtryskiwacze, termostaty oraz wiele innych komponentów niezbędnych do utrzymania maszyn w pełnej sprawności technicznej.",
    ],
}

# SEO templates for parts
PART_SEO_TEMPLATES = {
    "uszczelka": [
        "Uszczelki do silników {brand} oferowane przez KUMATEX to produkty wykonane z materiałów najwyższej jakości, odpornych na wysokie temperatury i ciśnienie panujące wewnątrz silnika. Prawidłowo dobrana uszczelka głowicy jest kluczowa dla szczelności komory spalania i zapobiegania mieszaniu się płynów eksploatacyjnych.",
        "Wymiana uszczelki głowicy to zabieg, który wymaga precyzji i doświadczenia. W KUMATEX wykonujemy tę usługę z zachowaniem pełnej procedury producenta, włącznie z kontrolą płaskości głowicy i bloku silnika. Po montażu przeprowadzamy próbę szczelności, gwarantując trwałość naprawy.",
    ],
    "tloki": [
        "Tłoki silnikowe {brand} dostępne w KUMATEX to komponenty wyprodukowane zgodnie z rygorystycznymi normami jakościowymi. Oferujemy tłoki w wymiarach nominalnych oraz nadwymiarowych, umożliwiając regenerację cylindrów. Każdy komplet zawiera sworznie tłokowe i zabezpieczenia.",
        "Właściwy dobór tłoków silnikowych ma kluczowe znaczenie dla osiągów i żywotności silnika {brand}. Nasi specjaliści pomogą dobrać odpowiedni wymiar z uwzględnieniem stanu cylindrów, zapewniając optymalny luz montażowy i prawidłową kompresję.",
    ],
    "panewki": [
        "Panewki wału korbowego do silników {brand} w ofercie KUMATEX to precyzyjnie wykonane elementy łożyskowe, zapewniające prawidłową pracę wału korbowego. Oferujemy panewki główne, korbowodowe oraz pierścienie oporowe w rozmiarach standardowych i naprawczych.",
        "Wymiana panewek wału korbowego jest krytycznym zabiegiem wpływającym na żywotność całego silnika {brand}. W KUMATEX wykonujemy tę usługę z pełną kontrolą luzów montażowych, wykorzystując precyzyjne narzędzia pomiarowe. Gwarantujemy prawidłowy montaż i trwałość naprawy.",
    ],
    "pompa": [
        "Pompy do silników {brand} dostępne w KUMATEX obejmują pompy wody, pompy oleju oraz pompy paliwa. Każdy oferowany produkt spełnia wymagania producenta silnika, zapewniając prawidłowe ciśnienie i przepływ mediów eksploatacyjnych. Oferujemy zarówno pompy nowe, jak i regenerowane.",
        "Sprawna pompa wody jest niezbędna dla prawidłowego chłodzenia silnika {brand}. Uszkodzenie pompy może prowadzić do przegrzania i poważnych uszkodzeń mechanicznych. W KUMATEX oferujemy szybką wymianę pomp wraz z diagnostyką całego układu chłodzenia.",
    ],
    "wtryskiwacze": [
        "Wtryskiwacze do silników {brand} w ofercie KUMATEX to precyzyjne elementy układu paliwowego, odpowiedzialne za prawidłowe dawkowanie i rozpylanie paliwa. Oferujemy nowe wtryskiwacze, końcówki wtrysków oraz regenerację pomp wtryskowych.",
        "Prawidłowo działający układ wtryskowy jest kluczowy dla osiągów, ekonomii pracy i emisji spalin silnika {brand}. KUMATEX oferuje kompletną diagnostykę i regenerację elementów wtryskowych, przywracając fabryczne parametry pracy silnika.",
    ],
    "filtr": [
        "Filtry do maszyn {brand} w ofercie KUMATEX obejmują filtry oleju, paliwa, powietrza oraz filtry hydrauliczne. Regularna wymiana filtrów jest podstawą prawidłowej eksploatacji silnika i całego układu napędowego. Stosujemy filtry renomowanych producentów, zapewniające skuteczną filtrację.",
        "Prawidłowy dobór filtrów do maszyn {brand} ma bezpośredni wpływ na żywotność silnika i układów hydraulicznych. Nasi specjaliści pomogą dobrać odpowiednie filtry na podstawie modelu maszyny i silnika. Oferujemy zarówno filtry oryginalne, jak i wysokiej jakości zamienniki.",
    ],
    "silnik": [
        "Silniki {brand} serwisowane w KUMATEX to gwarancja przywrócenia pełnej sprawności technicznej. Wykonujemy kompleksowe remonty kapitalne, obejmujące szlifowanie wału korbowego, honowanie cylindrów, regenerację głowicy oraz wymianę wszystkich elementów eksploatacyjnych.",
        "Części zamienne do silników {brand} z maszyn budowlanych i przemysłowych dostarczamy w najkrótszym możliwym czasie. Nasz magazyn obejmuje pełen asortyment komponentów silnikowych: uszczelki, tłoki, panewki, zawory, prowadnice zaworów, sprężyny, pompy i wiele innych.",
        "Diagnostyka silnika {brand} w KUMATEX obejmuje pomiar kompresji, kontrolę ciśnienia oleju, badanie układu chłodzenia oraz komputerową diagnostykę systemów elektronicznych. Na podstawie wyników diagnostyki przedstawiamy szczegółowy kosztorys naprawy i rekomendowane zakresy prac.",
    ],
    "generic": [
        "Części zamienne {brand} oferowane przez KUMATEX to produkty o potwierdzonej jakości, przeznaczone do maszyn budowlanych i przemysłowych. Nasz wieloletni staż w branży pozwala nam dobierać komponenty zapewniające niezawodną pracę maszyn w najtrudniejszych warunkach eksploatacyjnych.",
        "KUMATEX to sprawdzony dostawca części zamiennych do silników {brand} z maszyn budowlanych, drogowych i przemysłowych. Oferujemy profesjonalne doradztwo techniczne, szybką realizację zamówień oraz konkurencyjne ceny. Zapraszamy do kontaktu telefonicznego lub mailowego.",
    ],
}


def classify_brand(name, description):
    """Classify brand type for template selection."""
    desc_lower = description.lower()
    if any(w in desc_lower for w in ["żuraw", "hds", "dźwig", "podnośnik"]):
        return "crane_service"
    if any(w in desc_lower for w in ["serwis", "naprawa", "remont"]):
        return "engine_service"
    return "parts_supplier"


def classify_part(name, slug):
    """Classify part type for template selection."""
    slug_lower = slug.lower()
    name_lower = name.lower()
    combined = slug_lower + " " + name_lower

    if "uszczelk" in combined:
        return "uszczelka"
    if "tlok" in combined or "pierscien" in combined:
        return "tloki"
    if "panewk" in combined:
        return "panewki"
    if "pomp" in combined:
        return "pompa"
    if "wtrys" in combined:
        return "wtryskiwacze"
    if "filtr" in combined:
        return "filtr"
    if "silnik" in combined or "cat-3" in combined or "cat-c" in combined:
        return "silnik"
    return "generic"


def generate_brand_seo(brand_name, description):
    """Generate 2-3 SEO paragraphs for a brand."""
    brand_type = classify_brand(brand_name, description)
    templates = BRAND_SEO_TEMPLATES[brand_type]
    count = random.randint(2, 3)
    selected = random.sample(templates, min(count, len(templates)))
    return [t.format(brand=brand_name) for t in selected]


def generate_part_seo(part_name, part_slug, brand_name):
    """Generate 2 SEO paragraphs for a part."""
    part_type = classify_part(part_name, part_slug)
    templates = PART_SEO_TEMPLATES[part_type]
    count = 2
    selected = random.sample(templates, min(count, len(templates)))
    return [t.format(brand=brand_name) for t in selected]


def escape_ts(s):
    return s.replace("\\", "\\\\").replace('"', '\\"')


def main():
    # Read current brands.ts and parts.ts
    with open("src/data/brands.ts") as f:
        brands_content = f.read()

    with open("src/data/parts.ts") as f:
        parts_content = f.read()

    # Parse brands
    brand_entries = []
    for m in re.finditer(r'name: "([^"]+)".*?slug: "([^"]+)".*?description: "([^"]+)"', brands_content, re.DOTALL):
        brand_entries.append({"name": m.group(1), "slug": m.group(2), "description": m.group(3)})

    print(f"Generating SEO for {len(brand_entries)} brands...")

    # Generate SEO for brands and inject
    for brand in brand_entries:
        seo_paras = generate_brand_seo(brand["name"], brand["description"])

        # Find the seoText: [] for this brand and inject
        # Pattern: slug: "brand-slug",\n ... seoText: [\n      ],
        pattern = rf'(slug: "{re.escape(brand["slug"])}",.*?seoText: \[)\n\s*\]'
        match = re.search(pattern, brands_content, re.DOTALL)
        if match:
            seo_lines = "\n".join(f'        "{escape_ts(p)}",' for p in seo_paras)
            replacement = f'{match.group(1)}\n{seo_lines}\n      ]'
            brands_content = brands_content[:match.start()] + replacement + brands_content[match.end():]

    with open("src/data/brands.ts", "w") as f:
        f.write(brands_content)

    print("  Brands SEO injected.")

    # Parse parts - get name, slug, brandSlug
    part_entries = []
    for m in re.finditer(r'name: "([^"]+)",\n\s+slug: "([^"]+)",\n\s+brandSlug: "([^"]+)"', parts_content):
        part_entries.append({"name": m.group(1), "slug": m.group(2), "brandSlug": m.group(3)})

    # Build brand name lookup
    brand_name_map = {b["slug"]: b["name"] for b in brand_entries}

    print(f"Generating SEO for {len(part_entries)} parts...")

    # Generate SEO for parts that have content blocks
    injected_count = 0
    for part in part_entries:
        brand_name = brand_name_map.get(part["brandSlug"], part["brandSlug"])
        seo_paras = generate_part_seo(part["name"], part["slug"], brand_name)

        pattern = rf'(slug: "{re.escape(part["slug"])}",\n\s+brandSlug: "{re.escape(part["brandSlug"])}",.*?seoText: \[)\n\s*\]'
        match = re.search(pattern, parts_content, re.DOTALL)
        if match:
            seo_lines = "\n".join(f'        "{escape_ts(p)}",' for p in seo_paras)
            replacement = f'{match.group(1)}\n{seo_lines}\n      ]'
            parts_content = parts_content[:match.start()] + replacement + parts_content[match.end():]
            injected_count += 1

    # For parts WITHOUT content blocks (no scraped content), add a content block
    # with empty originalText and generated seoText
    parts_without_content = []
    for part in part_entries:
        pattern = rf'slug: "{re.escape(part["slug"])}",\n\s+brandSlug: "{re.escape(part["brandSlug"])}",.*?image: "[^"]*",\n\s+content:'
        if not re.search(pattern, parts_content, re.DOTALL):
            parts_without_content.append(part)

    print(f"  Parts with content: {injected_count} SEO injected")
    print(f"  Parts without content: {len(parts_without_content)} - adding content blocks...")

    for part in parts_without_content:
        brand_name = brand_name_map.get(part["brandSlug"], part["brandSlug"])
        seo_paras = generate_part_seo(part["name"], part["slug"], brand_name)

        # Find: image: "...",\n  }, for this specific part
        pattern = rf'(slug: "{re.escape(part["slug"])}",\n\s+brandSlug: "{re.escape(part["brandSlug"])}",\n\s+description: "[^"]*",\n\s+image: "[^"]*",)\n  \}}'
        match = re.search(pattern, parts_content, re.DOTALL)
        if match:
            seo_lines = "\n".join(f'        "{escape_ts(p)}",' for p in seo_paras)
            content_block = f"""    content: {{
      originalText: [
      ],
      seoText: [
{seo_lines}
      ],
    }},"""
            replacement = f'{match.group(1)}\n{content_block}\n  }}'
            parts_content = parts_content[:match.start()] + replacement + parts_content[match.end():]

    with open("src/data/parts.ts", "w") as f:
        f.write(parts_content)

    print("  Done!")


if __name__ == "__main__":
    main()
