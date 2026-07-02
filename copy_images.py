# -*- coding: utf-8 -*-
import json
import os
import shutil
import re

source_dir = r"E:\美工素材图片\发品-临时文件\木皮\科技木皮\11月科技皮主图"
target_base = r"D:\tongli-new-website\public\images\products\engineered-wood-veneer"
json_file = r"D:\tongli-new-website\docs\import\engineered_wood_veneer_34_products_data_title_format.json"

with open(json_file, "r", encoding="utf-8") as f:
    json_data = json.load(f)

print(f"Loaded {len(json_data)} products")
print(f"Source: {source_dir}")
print(f"Target: {target_base}")
print()

report = []

for product in json_data:
    slug = product["slug"]
    target_dir = os.path.join(target_base, slug)
    source_images = product["sourceImages"]
    first_image_original_name = product["firstImageOriginalName"]

    os.makedirs(target_dir, exist_ok=True)

    image_map = {}
    first_img_file = None

    # Find the (1) image
    for img in source_images:
        if re.search(r'\(1\)|（1）|１', img):
            first_img_file = img
            break

    # Build ordered list
    ordered_images = []
    if first_img_file:
        ordered_images.append(first_img_file)
    for img in source_images:
        if img != first_img_file:
            ordered_images.append(img)

    copied_count = 0
    missing_files = []

    for idx, img in enumerate(ordered_images):
        source_file = os.path.join(source_dir, img)
        ext = os.path.splitext(img)[1]

        if idx == 0:
            new_name = f"image-01{ext}"
        else:
            new_name = f"image-{idx+1:02d}{ext}"

        dest_file = os.path.join(target_dir, new_name)

        if os.path.exists(source_file):
            shutil.copy2(source_file, dest_file)
            image_map[new_name] = img
            copied_count += 1
        else:
            missing_files.append(img)

    actual_first_image = image_map.get("image-01", None)
    has_first_image = actual_first_image is not None

    sorted_names = sorted(image_map.keys())
    all_images_str = ", ".join(image_map[n] for n in sorted_names)

    gallery_images = []
    for i in range(1, copied_count + 1):
        num = f"{i:02d}"
        gallery_images.append(product["galleryBasePath"] + f"image-{num}.png")

    status = f"[WARN] {product['oldName']}: missing {len(missing_files)} file(s)" if missing_files else f"[OK] {product['oldName']}: {copied_count} images, first={actual_first_image}"
    print(status)

    report.append({
        "oldName": product["oldName"],
        "slug": slug,
        "imageCount": len(source_images),
        "copiedCount": copied_count,
        "missingCount": len(missing_files),
        "firstImageOriginal": first_image_original_name,
        "actualFirstImage": actual_first_image,
        "hasFirstImage": has_first_image,
        "missingFiles": missing_files,
        "featuredImage": product["featuredImage"],
        "galleryBasePath": product["galleryBasePath"],
        "allImages": all_images_str,
        "galleryPaths": gallery_images,
    })

print()
print("=" * 60)
print("SUMMARY")
print("=" * 60)
print(f"Total products: {len(report)}")

print()
print("MISSING FILES:")
missing_products = [r for r in report if r["missingCount"] > 0]
if missing_products:
    for r in missing_products:
        print(f"  {r['oldName']}: {', '.join(r['missingFiles'])}")
else:
    print("  None")

print()
print("PRODUCTS WITHOUT FIRST IMAGE:")
no_first = [r for r in report if not r["hasFirstImage"]]
if no_first:
    for r in no_first:
        print(f"  {r['oldName']}")
else:
    print("  None")

print()
print("IMAGE COUNTS LESS THAN 7:")
lt7 = [r for r in report if r["copiedCount"] < 7]
if lt7:
    for r in lt7:
        print(f"  {r['oldName']}: {r['copiedCount']} images (expected 7)")
else:
    print("  All products have 7+ images")

print()
print("=" * 60)
print("GALLERY PATHS")
print("=" * 60)
for r in report:
    print()
    print(f"{r['oldName']} ({r['slug']}):")
    print(f"  featuredImage: {r['featuredImage']}")
    print(f"  gallery: [{', '.join(r['galleryPaths'])}]")
