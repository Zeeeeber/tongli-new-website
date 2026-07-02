import re

with open(r"D:\tongli-new-website\src\data\products\supporting-boards-products.ts", "r", encoding="utf-8") as f:
    src = f.read()

# Remove `    applications: [...],\n` blocks for the 3 MDF products only.
# Be conservative — only touch entries that have a `applications:` field.

# Match from `    applications: [\n` until matching `],\n` (the array close followed by newline + faqs:)
# Use lazy match with explicit terminator `],\n    faqs:`.
src, n = re.subn(
    r'    applications: \[[\s\S]*?\],\n    faqs: ',
    '    faqs: ',
    src,
)
print(f"Removed applications blocks: {n}")

with open(r"D:\tongli-new-website\src\data\products\supporting-boards-products.ts", "w", encoding="utf-8") as f:
    f.write(src)
print("Written.")