/er#!/usr/bin/env python3
"""BFS crawler for kumatex.pl — scrapes full site structure and content."""

import json
import os
import time
from collections import deque
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://www.kumatex.pl"
DOMAIN = "www.kumatex.pl"
DELAY = 0.5
CHECKPOINT_EVERY = 100
DATA_FILE = "kumatex_data.json"
CHECKPOINT_FILE = "kumatex_checkpoint.json"
IMAGES_DIR = Path("images")

SESSION = requests.Session()
SESSION.headers.update({
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept-Language": "pl-PL,pl;q=0.9,en;q=0.5",
})


def is_internal(url: str) -> bool:
    parsed = urlparse(url)
    return parsed.netloc in ("", DOMAIN, "kumatex.pl")


def normalize_url(url: str) -> str:
    parsed = urlparse(url)
    return f"{parsed.scheme}://{parsed.netloc}{parsed.path}"


def fetch(url: str) -> requests.Response | None:
    try:
        resp = SESSION.get(url, timeout=30)
        resp.encoding = "utf-8"
        resp.raise_for_status()
        return resp
    except requests.RequestException as e:
        print(f"  [ERROR] {url}: {e}")
        return None


def extract_page_data(url: str, html: str, depth: int, parent_url: str | None) -> dict:
    soup = BeautifulSoup(html, "html.parser")

    # Title
    title_tag = soup.find("title")
    title = title_tag.get_text(strip=True) if title_tag else ""

    # Meta description
    meta_desc_tag = soup.find("meta", attrs={"name": "Description"})
    if not meta_desc_tag:
        meta_desc_tag = soup.find("meta", attrs={"name": "description"})
    meta_description = ""
    if meta_desc_tag and meta_desc_tag.get("content"):
        meta_description = meta_desc_tag["content"].strip()

    # Headings
    h1 = [tag.get_text(strip=True) for tag in soup.find_all("h1")]
    h2 = [tag.get_text(strip=True) for tag in soup.find_all("h2")]
    h3 = [tag.get_text(strip=True) for tag in soup.find_all("h3")]

    # Breadcrumbs — in div.header_bottom
    breadcrumbs = []
    bc_container = soup.find("div", class_="header_bottom")
    if bc_container:
        for a in bc_container.find_all("a"):
            text = a.get_text(strip=True)
            if text:
                breadcrumbs.append(text)

    # Main content — div#content
    content_text = ""
    content_area = soup.find("div", id="content")
    if content_area:
        # Work on a copy to avoid modifying the soup
        content_copy = BeautifulSoup(str(content_area), "html.parser")
        for tag in content_copy.find_all(["script", "style"]):
            tag.decompose()
        # Remove sidebar from content extraction
        left_div = content_copy.find("div", id="left")
        if left_div:
            left_div.decompose()
        content_text = content_copy.get_text(separator="\n", strip=True)

    # Sidebar links — div.menu_left inside div#left
    sidebar_links = []
    left_div = soup.find("div", id="left")
    if left_div:
        menu = left_div.find("div", class_="menu_left")
        if menu:
            for a in menu.find_all("a", href=True):
                href = urljoin(url, a["href"])
                if is_internal(href):
                    sidebar_links.append({
                        "text": a.get_text(strip=True),
                        "url": normalize_url(href),
                    })

    # Images
    images = []
    for img in soup.find_all("img", src=True):
        src = urljoin(url, img["src"])
        alt = img.get("alt", "")
        images.append({"src": src, "alt": alt, "local_path": ""})

    # Internal links (all on the page)
    internal_links = set()
    for a in soup.find_all("a", href=True):
        href = urljoin(url, a["href"])
        if is_internal(href):
            normalized = normalize_url(href)
            if normalized.startswith("http"):
                internal_links.add(normalized)

    return {
        "url": url,
        "title": title,
        "meta_description": meta_description,
        "h1": h1,
        "h2": h2,
        "h3": h3,
        "breadcrumbs": breadcrumbs,
        "depth": depth,
        "parent_url": parent_url or "",
        "sidebar_links": sidebar_links,
        "content_text": content_text,
        "images": images,
        "internal_links": sorted(internal_links),
    }


def download_image(src: str) -> str:
    """Download image to local images/ dir, return local path."""
    parsed = urlparse(src)
    local_rel = parsed.path.lstrip("/")
    if not local_rel:
        return ""
    local_path = IMAGES_DIR / local_rel
    if local_path.exists():
        return str(local_path)
    try:
        local_path.parent.mkdir(parents=True, exist_ok=True)
        resp = SESSION.get(src, timeout=15)
        resp.raise_for_status()
        local_path.write_bytes(resp.content)
        return str(local_path)
    except Exception as e:
        print(f"  [IMG ERROR] {src}: {e}")
        return ""


def save_checkpoint(pages: list[dict], visited: set[str], queue_list: list):
    data = {
        "pages": pages,
        "visited": sorted(visited),
        "queue": queue_list,
    }
    with open(CHECKPOINT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False)
    print(f"  [CHECKPOINT] Saved {len(pages)} pages")


def load_checkpoint() -> tuple[list[dict], set[str], deque] | None:
    if not os.path.exists(CHECKPOINT_FILE):
        return None
    with open(CHECKPOINT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)
    pages = data["pages"]
    visited = set(data["visited"])
    queue = deque()
    for item in data["queue"]:
        queue.append(tuple(item))
    print(f"  [RESUME] Loaded checkpoint: {len(pages)} pages, {len(queue)} in queue")
    return pages, visited, queue


def print_stats(pages: list[dict]):
    print("\n" + "=" * 60)
    print(f"TOTAL PAGES SCRAPED: {len(pages)}")
    print("=" * 60)

    depth_counts: dict[int, int] = {}
    for p in pages:
        d = p["depth"]
        depth_counts[d] = depth_counts.get(d, 0) + 1
    print("\nPages by depth:")
    for d in sorted(depth_counts):
        print(f"  Depth {d}: {depth_counts[d]}")

    brand_counts: dict[str, int] = {}
    for p in pages:
        if len(p["breadcrumbs"]) >= 2:
            brand = p["breadcrumbs"][1]
            brand_counts[brand] = brand_counts.get(brand, 0) + 1
    if brand_counts:
        print("\nTop brands by number of pages:")
        for brand, count in sorted(brand_counts.items(), key=lambda x: -x[1])[:20]:
            print(f"  {brand}: {count}")


def crawl():
    checkpoint = load_checkpoint()
    if checkpoint:
        pages, visited, queue = checkpoint
    else:
        pages = []
        visited = set()
        queue = deque()
        start_url = normalize_url(BASE_URL + "/")
        queue.append((start_url, 0, None))

    count_since_checkpoint = 0

    while queue:
        url, depth, parent_url = queue.popleft()
        if url in visited:
            continue
        visited.add(url)

        print(f"[{len(pages) + 1}] depth={depth} {url}")
        resp = fetch(url)
        if resp is None:
            continue

        content_type = resp.headers.get("content-type", "")
        if "text/html" not in content_type:
            continue

        page_data = extract_page_data(url, resp.text, depth, parent_url)

        # Download images
        for img in page_data["images"]:
            if img["src"].startswith("http"):
                img["local_path"] = download_image(img["src"])

        pages.append(page_data)
        count_since_checkpoint += 1

        # Discover new links
        for link_url in page_data["internal_links"]:
            if link_url not in visited:
                queue.append((link_url, depth + 1, url))

        # Checkpoint
        if count_since_checkpoint >= CHECKPOINT_EVERY:
            queue_list = [list(item) for item in queue]
            save_checkpoint(pages, visited, queue_list)
            count_since_checkpoint = 0

        time.sleep(DELAY)

    # Final save
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(pages, f, ensure_ascii=False, indent=2)
    print(f"\nSaved {len(pages)} pages to {DATA_FILE}")

    if os.path.exists(CHECKPOINT_FILE):
        os.remove(CHECKPOINT_FILE)

    print_stats(pages)


if __name__ == "__main__":
    crawl()
