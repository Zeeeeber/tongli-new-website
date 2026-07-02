# -*- coding: utf-8 -*-
import json
import os
import re
import shutil

src = r'E:\美工素材图片\发品-临时文件\木皮\科技木皮\11月科技皮主图'
tgt = r'D:\tongli-new-website\public\images\products\engineered-wood-veneer'
jsf = r'D:\tongli-new-website\docs\import\engineered_wood_veneer_34_products_data_title_format.json'

with open(jsf, 'r', encoding='utf-8') as f:
    data = json.load(f)

report = []
for p in data:
    td = os.path.join(tgt, p['slug'])
    if not os.path.exists(td):
        os.makedirs(td, exist_ok=True)

    image_map = {}
    first_img_file = None
    for img in p['sourceImages']:
        if re.search(r'\(1\)', img):
            first_img_file = img
            break

    ordered = []
    if first_img_file:
        ordered.append(first_img_file)
    for img in p['sourceImages']:
        if img != first_img_file:
            ordered.append(img)

    copied = 0
    missing = []
    for idx, img in enumerate(ordered):
        sf = os.path.join(src, img)
        ext = os.path.splitext(img)[1]
        new_name = 'image-01' + ext if idx == 0 else 'image-%02d' % (idx + 1) + ext
        df = os.path.join(td, new_name)
        if os.path.exists(sf):
            if not os.path.exists(df):
                shutil.copy2(sf, df)
            image_map[new_name] = img
            copied += 1
        else:
            missing.append(img)

    actual_first = image_map.get('image-01.png') or image_map.get('image-01.jpg')
    sorted_imgs = sorted(image_map.keys())
    all_str = ', '.join(image_map[k] for k in sorted_imgs)

    gallery_imgs = []
    for i in range(1, copied + 1):
        num = '%02d' % i
        ext = '.png'
        if '.jpg' in p['featuredImage']:
            ext = '.jpg'
        gallery_imgs.append(p['galleryBasePath'] + 'image-' + num + ext)

    status = 'WARN' if missing else 'OK'
    first_display = actual_first if actual_first else 'NONE'
    print(status + ' ' + p['oldName'] + ': ' + str(copied) + ' images, first=' + first_display)
    if missing:
        print('  MISSING: ' + str(missing))

    report.append({
        'oldName': p['oldName'],
        'slug': p['slug'],
        'imageCount': len(p['sourceImages']),
        'copied': copied,
        'missing': missing,
        'actualFirst': actual_first,
        'hasFirst': actual_first is not None,
        'allImages': all_str,
        'featuredImage': p['featuredImage'],
        'galleryPaths': gallery_imgs,
    })

print()
print('Total products: ' + str(len(report)))
print()

print('MISSING FILES:')
miss = [r for r in report if r['missing']]
if miss:
    for r in miss:
        print('  ' + r['oldName'] + ': ' + str(r['missing']))
else:
    print('  None')

print()
print('NO FIRST IMAGE:')
no_first = [r for r in report if not r['hasFirst']]
if no_first:
    for r in no_first:
        print('  ' + r['oldName'])
else:
    print('  None')

print()
print('COUNT < 7:')
lt7 = [r for r in report if r['copied'] < 7]
if lt7:
    for r in lt7:
        print('  ' + r['oldName'] + ': ' + str(r['copied']) + ' (expected 7)')
else:
    print('  All have 7+ images')

print()
print('='*60)
print('GALLERY PATHS:')
for r in report:
    print('')
    print(r['oldName'] + ' (' + r['slug'] + '):')
    print('  featuredImage: ' + r['featuredImage'])
    gal = ' | '.join(r['galleryPaths'])
    print('  gallery: [' + gal + ']')
