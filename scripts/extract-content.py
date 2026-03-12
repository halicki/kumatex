#!/usr/bin/env python3
"""
Extract full content from kumatex_checkpoint.json and map to brands/parts slugs.
Output: scripts/content-extracted.json
"""
import json
import re
import unicodedata


def slugify(text):
    text = text.lower().strip()
    text = unicodedata.normalize("NFKD", text)
    text = re.sub(r"[\u0300-\u036f]", "", text)
    text = text.replace("ł", "l").replace("Ł", "L")
    text = re.sub(r"[^a-z0-9\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-+", "-", text)
    text = text.strip("-")
    return text


COPYRIGHT_PATTERN = re.compile(r"Żadna część jak i całość treści", re.IGNORECASE)
KUMATEX_FOOTER = re.compile(r"www\.kumatex\.pl.*nie może być powielana", re.IGNORECASE)


def split_content_to_paragraphs(content_text):
    lines = [l.strip().replace("\xa0", " ") for l in content_text.split("\n") if l.strip()]

    paragraphs = []
    buffer = []

    for line in lines:
        if len(line) < 80:
            buffer.append(line)
        else:
            if buffer:
                merged = " ".join(buffer)
                if len(merged) >= 40:
                    paragraphs.append(merged)
                buffer = []
            paragraphs.append(line)

    if buffer:
        merged = " ".join(buffer)
        if len(merged) >= 40:
            paragraphs.append(merged)

    # Filter out copyright notices and very short fragments
    filtered = []
    for p in paragraphs:
        if COPYRIGHT_PATTERN.search(p) or KUMATEX_FOOTER.search(p):
            continue
        if len(p) < 40:
            continue
        filtered.append(p)

    return filtered


def main():
    with open("kumatex_checkpoint.json") as f:
        data = json.load(f)

    pages = data["pages"]

    brand_slugs = set()
    with open("src/data/brands.ts") as f:
        for line in f:
            m = re.search(r'slug:\s*"([^"]+)"', line)
            if m:
                brand_slugs.add(m.group(1))

    all_part_slugs = {}
    with open("src/data/parts.ts") as f:
        current_brand = None
        current_slug = None
        for line in f:
            bm = re.search(r'brandSlug:\s*"([^"]+)"', line)
            if bm:
                current_brand = bm.group(1)
            sm = re.search(r'slug:\s*"([^"]+)"', line)
            if sm:
                current_slug = sm.group(1)
            if "}," in line and current_brand and current_slug:
                all_part_slugs[current_slug] = current_brand
                current_slug = None
                current_brand = None

    print(f"Found {len(brand_slugs)} brands, {len(all_part_slugs)} parts")

    brand_content = {}
    part_content = {}
    unmatched = []

    czesci_pages = [p for p in pages if "/czesci/" in p["url"]]

    for page in czesci_pages:
        url = page["url"]
        path = url.split("/czesci/")[-1].replace(".html", "")
        name_part = re.sub(r"-2_\d+$", "", path)
        slug = slugify(name_part)

        paragraphs = split_content_to_paragraphs(page["content_text"])
        h2s = page.get("h2", [])

        if not paragraphs:
            continue

        entry = {
            "originalText": paragraphs,
            "h2": h2s,
            "title": page.get("title", ""),
        }

        if slug in brand_slugs:
            brand_content[slug] = entry
            continue

        if slug in all_part_slugs:
            brand = all_part_slugs[slug]
            part_content[f"{brand}/{slug}"] = entry
            continue

        variants = [slug]
        if slug.endswith("-czesci"):
            variants.append(slug[:-7])
        if slug.startswith("czesci-"):
            variants.append(slug[7:])

        matched = False
        for v in variants:
            if v in all_part_slugs:
                brand = all_part_slugs[v]
                part_content[f"{brand}/{v}"] = entry
                matched = True
                break
            if v in brand_slugs:
                brand_content[v] = entry
                matched = True
                break

        if matched:
            continue

        found_brand = None
        for bs in brand_slugs:
            if slug.startswith(bs + "-") or slug.endswith("-" + bs):
                found_brand = bs
                break
            bs_parts = bs.split("-")
            if any(slug.startswith(bp + "-") or slug.endswith("-" + bp) for bp in bs_parts if len(bp) > 3):
                found_brand = bs
                break

        if found_brand:
            key = f"{found_brand}/_additional_{slug}"
            part_content[key] = entry
            continue

        unmatched.append({"slug": slug, "title": page.get("title", "")})

    result = {
        "brands": brand_content,
        "parts": part_content,
        "unmatched": unmatched,
        "stats": {
            "total_scraped": len(czesci_pages),
            "brands_matched": len(brand_content),
            "parts_matched": len(part_content),
            "unmatched": len(unmatched),
        },
    }

    with open("scripts/content-extracted.json", "w") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    print(f"\nResults:")
    print(f"  Brands matched: {len(brand_content)}")
    print(f"  Parts matched: {len(part_content)}")
    print(f"  Unmatched: {len(unmatched)}")

    all_entries = list(brand_content.values()) + list(part_content.values())
    total_paras = sum(len(e["originalText"]) for e in all_entries)
    print(f"  Total paragraphs: {total_paras}")
    print(f"  Avg paragraphs per page: {total_paras / len(all_entries):.1f}")


if __name__ == "__main__":
    main()
