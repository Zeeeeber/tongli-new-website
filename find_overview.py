import re

with open(r"D:\tongli-new-website\src\data\products\supporting-boards-products.ts", "r", encoding="utf-8") as f:
    src = f.read()

# Find each `overview: "...",` followed by `    [` (orphan)
for m in re.finditer(r'    overview: "[^"]*",\n    \[', src):
    print("MATCH:", repr(m.group(0)))