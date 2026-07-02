# -*- coding: utf-8 -*-
"""Reorder gallery so image-00 is first, and update featuredImage to image-00.

Also restores missing commas between gallery items that were lost by the
previous run.
"""

import os
import re

TS_FILE = r"D:\tongli-new-website\src\data\products\supporting-boards-products.ts"
DST_ROOT = r"D:\tongli-new-website\public\images\products\supporting-boards"

SLUGS = ["raw-mdf-panel-e1-grade", "fireproof-mdf-flame-retardant", "mr-mdf-moisture-resistant"]


def list_disk_images(slug):
    folder = os.path.join(DST_ROOT, slug)
    files = sorted(
        f for f in os.listdir(folder)
        if f.lower().endswith((".jpg", ".jpeg", ".png", ".webp"))
    )

    def sort_key(name):
        m = re.match(r"image-(\d+)\.", name, re.IGNORECASE)
        return int(m.group(1)) if m else 9999

    return ["/images/products/supporting-boards/{}/{}".format(slug, f) for f in sorted(files, key=sort_key)]


with open(TS_FILE, "r", encoding="utf-8") as f:
    src = f.read()

for slug in SLUGS:
    block_pat = re.compile(
        r"  \{\n    slug: \"" + re.escape(slug) + r"\",[\s\S]*?^\s*updatedAt: \"[^\"]*\",\n  \}",
        re.MULTILINE,
    )
    m = block_pat.search(src)
    if not m:
        print("  MISS slug block for", slug)
        continue
    old_block = m.group(0)

    # 1) Update featuredImage to image-00.<ext>
    new_block = re.sub(
        r'(featuredImage: ")/images/products/supporting-boards/'
        + re.escape(slug)
        + r'/image-\d+(\.[a-zA-Z0-9]+)"',
        lambda mo: '{}/images/products/supporting-boards/{}/image-00{}"'.format(mo.group(1), slug, mo.group(2)),
        old_block,
        count=1,
    )

    # 2) Replace the entire gallery array with disk-truth sorted list
    new_paths = list_disk_images(slug)
    new_inner = ",\n".join('      "{}"'.format(p) for p in new_paths)
    new_gallery = "gallery: [\n{}\n    ]".format(new_inner)
    new_block = re.sub(
        r"gallery: \[[\s\S]*?\n    \]",
        new_gallery,
        new_block,
        count=1,
    )

    print("  UPDATED", slug)
    print("    gallery ({}): first={}".format(len(new_paths), new_paths[0]))
    img00_disk = os.path.join(DST_ROOT, slug, "image-00.jpg")
    exists = os.path.isfile(img00_disk)
    print("    image-00.jpg on disk: {}  ({} bytes)".format(exists, os.path.getsize(img00_disk) if exists else 0))

    src = src[: m.start()] + new_block + src[m.end() :]

with open(TS_FILE, "w", encoding="utf-8") as f:
    f.write(src)
print("\nWritten:", TS_FILE)