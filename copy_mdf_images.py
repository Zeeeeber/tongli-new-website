# -*- coding: utf-8 -*-
import os
import shutil

SRC_ROOT = r"C:\Users\Administrator\Desktop\网站合集图\产品发布\mdf"
DST_ROOT = r"D:\tongli-new-website\public\images\products\supporting-boards"

PLAN = [
    {
        "slug": "raw-mdf-panel-e1-grade",
        "src_dir": "China Factory Wholesale 1220_2440mm 18mm Plain MDF Fibreboards For Furniture Manufacturer and Supplier _ Tongli",
        "files": [
            ("image-01.jpg", "Factory Wholesale 1220_2440mm 18mm Plain MDF Fibreboards For Furniture Featured Image (1).jpg"),
            ("image-02.jpg", "Factory Wholesale 1220_2440mm 18mm Plain MDF Fibreboards For Furniture (1).jpg"),
            ("image-03.jpg", "Factory Wholesale 1220_2440mm 18mm Plain MDF Fibreboards For Furniture (2).jpg"),
            ("image-04.jpg", "Factory Wholesale 1220_2440mm 18mm Plain MDF Fibreboards For Furniture (3).jpg"),
            ("image-05.jpg", "Factory Wholesale 1220_2440mm 18mm Plain MDF Fibreboards For Furniture (4).jpg"),
        ],
    },
    {
        "slug": "fireproof-mdf-flame-retardant",
        "src_dir": "Custom China Flame Retardant First-Class Grade Fireproof Mdf Board _ Fire Rated Mdf Manufacturer and Supplier _ Tongli Factory, Manufacturers _ Tongli",
        "files": [
            ("image-01.jpg", "Flame Retardant First-Class Grade Fireproof Mdf Board _ Fire Rated Mdf (1).jpg"),
            ("image-02.jpg", "Flame Retardant First-Class Grade Fireproof Mdf Board _ Fire Rated Mdf (2).jpg"),
            ("image-03.jpg", "Flame Retardant First-Class Grade Fireproof Mdf Board _ Fire Rated Mdf (3).jpg"),
            ("image-04.jpg", "Flame Retardant First-Class Grade Fireproof Mdf Board _ Fire Rated Mdf (4).jpg"),
            ("image-05.jpg", "Flame Retardant First-Class Grade Fireproof Mdf Board _ Fire Rated Mdf (5).jpg"),
            ("image-06.jpg", "customized services.jpg"),
        ],
    },
    {
        "slug": "mr-mdf-moisture-resistant",
        "src_dir": "Custom China Waterproof Moisture Resistant Green Hmr Mdf Board _ 12Mm 16Mm 18Mm Manufacturer and Supplier _ Tongli Factory, Manufacturers _ Tongli",
        "files": [
            ("image-01.jpg", "Waterproof Moisture Resistant Green Hmr Mdf Board _ 12Mm 16Mm 18Mm (1).jpg"),
            ("image-02.jpg", "Waterproof Moisture Resistant Green Hmr Mdf Board _ 12Mm 16Mm 18Mm (2).jpg"),
            ("image-03.jpg", "Waterproof Moisture Resistant Green Hmr Mdf Board _ 12Mm 16Mm 18Mm (3).jpg"),
            ("image-04.jpg", "Waterproof Moisture Resistant Green Hmr Mdf Board _ 12Mm 16Mm 18Mm (4).jpg"),
            ("image-05.jpg", "Waterproof Moisture Resistant Green Hmr Mdf Board _ 12Mm 16Mm 18Mm (5).jpg"),
        ],
    },
]


def resolve_src(src_dir, src_name):
    """Resolve src path using long-path prefix and scandir-based fallback."""
    norm = os.path.join(src_dir, src_name)
    long = "\\\\?\\" + norm
    if os.path.isfile(norm):
        return norm
    if os.path.isfile(long):
        return long
    # scandir fallback: list actual names and find exact match
    for entry in os.scandir(src_dir):
        if entry.name == src_name:
            return "\\\\?\\" + entry.path if len(entry.path) >= 260 else entry.path
    return None


total_ok = 0
total_miss = 0
for p in PLAN:
    src_dir = os.path.join(SRC_ROOT, p["src_dir"])
    dst_dir = os.path.join(DST_ROOT, p["slug"])
    os.makedirs(dst_dir, exist_ok=True)
    print(f"\n=== {p['slug']} ===")
    if not os.path.isdir(src_dir):
        print(f"  SRC MISSING: {src_dir}")
        total_miss += len(p["files"])
        continue
    for dst_name, src_name in p["files"]:
        src_path = resolve_src(src_dir, src_name)
        dst_path = os.path.join(dst_dir, dst_name)
        if not src_path:
            print(f"  MISS: {src_name}")
            total_miss += 1
            continue
        shutil.copyfile(src_path, dst_path)
        size_kb = os.path.getsize(dst_path) / 1024
        print(f"  OK: {dst_name}  ({size_kb:.1f} KB)")
        total_ok += 1

print(f"\nTOTAL: {total_ok} OK, {total_miss} MISS")