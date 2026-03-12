#!/usr/bin/env python3
"""Fix remaining parts that don't have content blocks."""
import re
import random

random.seed(42)

PART_SEO = {
    "uszczelka": [
        "Uszczelki do silników {brand} oferowane przez KUMATEX to produkty wykonane z materiałów najwyższej jakości, odpornych na wysokie temperatury i ciśnienie panujące wewnątrz silnika. Prawidłowo dobrana uszczelka głowicy jest kluczowa dla szczelności komory spalania i zapobiegania mieszaniu się płynów eksploatacyjnych.",
        "Wymiana uszczelki głowicy to zabieg, który wymaga precyzji i doświadczenia. W KUMATEX wykonujemy tę usługę z zachowaniem pełnej procedury producenta, włącznie z kontrolą płaskości głowicy i bloku silnika.",
    ],
    "tloki": [
        "Tłoki silnikowe {brand} dostępne w KUMATEX to komponenty wyprodukowane zgodnie z rygorystycznymi normami jakościowymi. Oferujemy tłoki w wymiarach nominalnych oraz nadwymiarowych, umożliwiając regenerację cylindrów.",
        "Właściwy dobór tłoków silnikowych ma kluczowe znaczenie dla osiągów i żywotności silnika {brand}. Nasi specjaliści pomogą dobrać odpowiedni wymiar z uwzględnieniem stanu cylindrów.",
    ],
    "panewki": [
        "Panewki wału korbowego do silników {brand} w ofercie KUMATEX to precyzyjnie wykonane elementy łożyskowe, zapewniające prawidłową pracę wału korbowego. Oferujemy panewki główne, korbowodowe oraz pierścienie oporowe.",
        "Wymiana panewek wału korbowego jest krytycznym zabiegiem wpływającym na żywotność całego silnika {brand}. W KUMATEX wykonujemy tę usługę z pełną kontrolą luzów montażowych.",
    ],
    "pompa": [
        "Pompy do silników {brand} dostępne w KUMATEX obejmują pompy wody, pompy oleju oraz pompy paliwa. Każdy oferowany produkt spełnia wymagania producenta silnika.",
        "Sprawna pompa wody jest niezbędna dla prawidłowego chłodzenia silnika {brand}. W KUMATEX oferujemy szybką wymianę pomp wraz z diagnostyką całego układu chłodzenia.",
    ],
    "wtryskiwacze": [
        "Wtryskiwacze do silników {brand} w ofercie KUMATEX to precyzyjne elementy układu paliwowego. Oferujemy nowe wtryskiwacze, końcówki wtrysków oraz regenerację pomp wtryskowych.",
        "Prawidłowo działający układ wtryskowy jest kluczowy dla osiągów i ekonomii pracy silnika {brand}. KUMATEX oferuje kompletną diagnostykę i regenerację elementów wtryskowych.",
    ],
    "filtr": [
        "Filtry do maszyn {brand} w ofercie KUMATEX obejmują filtry oleju, paliwa, powietrza oraz filtry hydrauliczne. Regularna wymiana filtrów jest podstawą prawidłowej eksploatacji silnika.",
        "Prawidłowy dobór filtrów do maszyn {brand} ma bezpośredni wpływ na żywotność silnika i układów hydraulicznych. Oferujemy zarówno filtry oryginalne, jak i wysokiej jakości zamienniki.",
    ],
    "silnik": [
        "Silniki {brand} serwisowane w KUMATEX to gwarancja przywrócenia pełnej sprawności technicznej. Wykonujemy kompleksowe remonty kapitalne obejmujące wymianę wszystkich elementów eksploatacyjnych.",
        "Części zamienne do silników {brand} z maszyn budowlanych i przemysłowych dostarczamy w najkrótszym możliwym czasie. Nasz magazyn obejmuje pełen asortyment komponentów silnikowych.",
    ],
    "generic": [
        "Części zamienne {brand} oferowane przez KUMATEX to produkty o potwierdzonej jakości, przeznaczone do maszyn budowlanych i przemysłowych. Nasz wieloletni staż w branży pozwala nam dobierać komponenty zapewniające niezawodną pracę maszyn.",
        "KUMATEX to sprawdzony dostawca części zamiennych do silników {brand} z maszyn budowlanych, drogowych i przemysłowych. Oferujemy profesjonalne doradztwo techniczne i szybką realizację zamówień.",
    ],
}


def classify_part(name, slug):
    combined = (slug + " " + name).lower()
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


def escape_ts(s):
    return s.replace("\\", "\\\\").replace('"', '\\"')


def main():
    with open("src/data/parts.ts") as f:
        content = f.read()

    # Parse brand name map from brands.ts
    brand_names = {}
    with open("src/data/brands.ts") as f:
        brands_content = f.read()
    for m in re.finditer(r'name: "([^"]+)",\n\s+slug: "([^"]+)"', brands_content):
        brand_names[m.group(2)] = m.group(1)

    # Find all parts WITHOUT content blocks
    pattern = r'(name: "([^"]+)",\n\s+slug: "([^"]+)",\n\s+brandSlug: "([^"]+)",\n\s+description: "[^"]*",\n\s+image: "[^"]*",)\n  \}'
    matches = list(re.finditer(pattern, content))
    print(f"Found {len(matches)} parts without content blocks")

    # Process in reverse order to preserve positions
    for match in reversed(matches):
        name = match.group(2)
        slug = match.group(3)
        brand_slug = match.group(4)
        brand_name = brand_names.get(brand_slug, brand_slug.replace("-", " ").title())

        part_type = classify_part(name, slug)
        templates = PART_SEO[part_type]
        seo_paras = [t.format(brand=brand_name) for t in templates]

        seo_lines = "\n".join(f'        "{escape_ts(p)}",' for p in seo_paras)
        content_block = f"""    content: {{
      originalText: [
      ],
      seoText: [
{seo_lines}
      ],
    }},"""

        replacement = f'{match.group(1)}\n{content_block}\n  }}'
        content = content[:match.start()] + replacement + content[match.end():]

    with open("src/data/parts.ts", "w") as f:
        f.write(content)

    print("Done!")


if __name__ == "__main__":
    main()
