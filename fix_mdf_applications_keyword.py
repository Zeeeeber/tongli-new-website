import re

with open(r"D:\tongli-new-website\src\data\products\supporting-boards-products.ts", "r", encoding="utf-8") as f:
    src = f.read()

# Fix all remaining orphan `    [` after `overview: "...",\n`
src, n = re.subn(
    r'(    overview: "[^"]*",\n)    (\[\n)',
    r'\1    applications: \2',
    src,
)
print(f"Restored applications keyword: {n} times")

# Remove any triple blank lines that may have been left behind by previous edits
src = re.sub(r'\n\n\n+', r'\n\n', src)

with open(r"D:\tongli-new-website\src\data\products\supporting-boards-products.ts", "w", encoding="utf-8") as f:
    f.write(src)
print("Written.")