#!/usr/bin/env python3
"""
Inject extracted content into brands.ts and parts.ts.
Reads content-extracted.json and adds content fields to each brand/part entry.
"""
import json
import re


def escape_ts_string(s):
    """Escape a string for use in TypeScript template literal or string."""
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def format_content_block(original_text, seo_text=None):
    """Format a content block as TypeScript object literal."""
    if not original_text and not seo_text:
        return None

    lines = []
    lines.append("    content: {")

    # originalText
    lines.append("      originalText: [")
    for p in (original_text or []):
        escaped = escape_ts_string(p)
        lines.append(f'        "{escaped}",')
    lines.append("      ],")

    # seoText (empty for now, will be filled in step 3)
    lines.append("      seoText: [")
    for p in (seo_text or []):
        escaped = escape_ts_string(p)
        lines.append(f'        "{escaped}",')
    lines.append("      ],")

    lines.append("    },")
    return "\n".join(lines)


def inject_into_brands(extracted):
    """Add content fields to brands.ts."""
    with open("src/data/brands.ts", "r") as f:
        content = f.read()

    brand_data = extracted.get("brands", {})
    modified = content

    for slug, data in brand_data.items():
        original_text = data.get("originalText", [])
        if not original_text:
            continue

        # Find the brand entry and inject content before the closing },
        # Pattern: slug: "xxx",\n    ...image: "...",\n  },
        pattern = rf'(slug: "{re.escape(slug)}",\n.*?image: "[^"]*",)\n  \}}'
        match = re.search(pattern, modified, re.DOTALL)
        if match:
            content_block = format_content_block(original_text)
            replacement = f'{match.group(1)}\n{content_block}\n  }}'
            modified = modified[:match.start()] + replacement + modified[match.end():]
        else:
            print(f"  WARNING: Could not find brand entry for slug '{slug}'")

    with open("src/data/brands.ts", "w") as f:
        f.write(modified)

    print(f"  Injected content into {len(brand_data)} brands")


def inject_into_parts(extracted):
    """Add content fields to parts.ts."""
    with open("src/data/parts.ts", "r") as f:
        content = f.read()

    part_data = extracted.get("parts", {})
    modified = content
    injected = 0

    for key, data in part_data.items():
        # Skip additional (non-matching) entries
        if "/_additional_" in key:
            continue

        brand_slug, part_slug = key.split("/", 1)
        original_text = data.get("originalText", [])
        if not original_text:
            continue

        # Find the part entry matching both brandSlug and slug
        # Pattern: slug: "part-slug",\n    brandSlug: "brand-slug", ... image: "...",\n  },
        # But the order of fields varies, so use a more flexible approach
        pattern = rf'(slug: "{re.escape(part_slug)}",\n\s+brandSlug: "{re.escape(brand_slug)}",\n.*?image: "[^"]*",)\n  \}}'
        match = re.search(pattern, modified, re.DOTALL)
        if match:
            content_block = format_content_block(original_text)
            replacement = f'{match.group(1)}\n{content_block}\n  }}'
            modified = modified[:match.start()] + replacement + modified[match.end():]
            injected += 1
        else:
            # Try alternative field order
            pattern2 = rf'(name: "[^"]*",\n\s+slug: "{re.escape(part_slug)}",\n\s+brandSlug: "{re.escape(brand_slug)}",\n.*?image: "[^"]*",)\n  \}}'
            match2 = re.search(pattern2, modified, re.DOTALL)
            if match2:
                content_block = format_content_block(original_text)
                replacement = f'{match2.group(1)}\n{content_block}\n  }}'
                modified = modified[:match2.start()] + replacement + modified[match2.end():]
                injected += 1

    with open("src/data/parts.ts", "w") as f:
        f.write(modified)

    print(f"  Injected content into {injected}/{len([k for k in part_data if '/_additional_' not in k])} parts")


def main():
    with open("scripts/content-extracted.json") as f:
        extracted = json.load(f)

    print("Injecting into brands.ts...")
    inject_into_brands(extracted)

    print("Injecting into parts.ts...")
    inject_into_parts(extracted)

    print("\nDone!")


if __name__ == "__main__":
    main()
