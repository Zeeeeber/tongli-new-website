#!/usr/bin/env node
/**
 * normalize-natural-veneer-images.mjs
 */

import { readdir, copyFile, mkdir, writeFile } from "fs/promises";
import { existsSync, rmSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "public", "images", "products", "natural wood veneer");
const DEST_BASE = path.join(ROOT, "public", "images", "products", "natural-wood-veneer");

const SLUGS = [
  "quarter-cut-maple-natural-wood-veneer-sheets",
  "crown-cut-black-walnut-natural-wood-veneer-sheets",
  "natural-teak-wood-veneer-sheets",
  "black-walnut-burl-natural-wood-veneer-sheets",
  "quarter-sawn-american-black-walnut-natural-wood-veneer",
  "aaa-birds-eye-maple-natural-wood-veneer-sheets",
  "dyed-natural-wood-veneer-sheets",
  "quarter-cut-dark-walnut-natural-wood-veneer-sheets",
  "crown-cut-flame-maple-natural-wood-veneer-sheets",
  "natural-burma-teak-wood-veneer-sheets",
  "crown-cut-red-oak-natural-wood-veneer-sheets",
  "fumed-oak-natural-wood-veneer-sheets",
  "fumed-eucalyptus-natural-wood-veneer-sheets",
  "crown-cut-white-oak-natural-wood-veneer-sheets",
  "mappa-maple-burl-natural-wood-veneer-sheets",
  "olive-ash-natural-wood-veneer-sheets",
  "mahogany-crotch-burl-natural-wood-veneer-sheets",
  "quarter-cut-golden-burma-teak-natural-wood-veneer",
  "rift-cut-white-oak-natural-wood-veneer-sheets",
  "smoked-eucalyptus-face-veneer-sheets",
];

const MATCHERS = [
  { slug: "quarter-cut-maple-natural-wood-veneer-sheets", keywords: ["quarter cut maple", "natural maple wood veneers", "wholesale wood sheets"] },
  { slug: "crown-cut-black-walnut-natural-wood-veneer-sheets", keywords: ["crown cut", "black walnut wood veneer", "wood veneer sheets", "tongli"] },
  { slug: "natural-teak-wood-veneer-sheets", keywords: ["natural timber teak", "teak wood sheet", "wooden sheet"] },
  { slug: "black-walnut-burl-natural-wood-veneer-sheets", keywords: ["black walnut burl", "4x8 black walnut burl"] },
  { slug: "quarter-sawn-american-black-walnut-natural-wood-veneer", keywords: ["american quarter sawn black walnut", "quarter sawn black walnut", "wood veneer factory"] },
  { slug: "aaa-birds-eye-maple-natural-wood-veneer-sheets", keywords: ["aaa grade birds eye maple", "birds eye maple veneer"] },
  { slug: "dyed-natural-wood-veneer-sheets", keywords: ["colored dyed wood veneer", "dyed wood veneer"] },
  { slug: "quarter-cut-dark-walnut-natural-wood-veneer-sheets", keywords: ["dark walnut wood veneer sheets", "quarter cut dark walnut"] },
  { slug: "crown-cut-flame-maple-natural-wood-veneer-sheets", keywords: ["flame maple veneer", "crown cut flame maple"] },
  { slug: "natural-burma-teak-wood-veneer-sheets", keywords: ["natural burma teak veneer", "teak veneer china supplier"] },
  { slug: "crown-cut-red-oak-natural-wood-veneer-sheets", keywords: ["red oak wood veneer sheets", "crown cut red oak"] },
  { slug: "fumed-oak-natural-wood-veneer-sheets", keywords: ["smoke oak wood veneer", "fumed oak veneer"] },
  { slug: "fumed-eucalyptus-natural-wood-veneer-sheets", keywords: ["smoked eucalyptus wood veneer", "fumed eucalyptus veneer"] },
  { slug: "crown-cut-white-oak-natural-wood-veneer-sheets", keywords: ["white oak natural wood veneer", "crown cut white oak"] },
  { slug: "mappa-maple-burl-natural-wood-veneer-sheets", keywords: ["mapaa maple burl", "high grade 0 55mm"] },
  { slug: "olive-ash-natural-wood-veneer-sheets", keywords: ["ash olive veneer", "high quality ash olive"] },
  { slug: "mahogany-crotch-burl-natural-wood-veneer-sheets", keywords: ["mahogany crotch burl", "door skin"] },
  { slug: "quarter-cut-golden-burma-teak-natural-wood-veneer", keywords: ["golden burma teak", "quarter cut golden burma teak"] },
  { slug: "rift-cut-white-oak-natural-wood-veneer-sheets", keywords: ["rift cut white oak", "white oak wood veneer sheet roll"] },
  { slug: "smoked-eucalyptus-face-veneer-sheets", keywords: ["smoked eucalyptus wood veneer", "face veneer manufacturer"] },
];

function normalize(s) {
  return s
    .toLowerCase()
    .replace(/&#8211;/g, " ")
    .replace(/&amp;/g, " ")
    .replace(/&[^;]*;/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchSlug(folderName) {
  const norm = normalize(folderName);
  let best = { slug: null, score: 0 };
  for (const item of MATCHERS) {
    let score = 0;
    for (const kw of item.keywords) {
      if (norm.includes(normalize(kw))) score += 10;
    }
    if (score > best.score) best = { slug: item.slug, score };
  }
  return best.score > 0 ? best.slug : null;
}

async function main() {
  await mkdir(DEST_BASE, { recursive: true });
  const entries = await readdir(SRC_DIR, { withFileTypes: true });
  const dirs = entries.filter((e) => e.isDirectory());

  const slugToFolder = new Map();
  for (const dir of dirs) {
    const slug = matchSlug(dir.name);
    if (slug && !slugToFolder.has(slug)) slugToFolder.set(slug, dir.name);
  }

  const report = [];
  for (const slug of SLUGS) {
    const folder = slugToFolder.get(slug) || null;
    const destDir = path.join(DEST_BASE, slug);
    if (existsSync(destDir)) rmSync(destDir, { recursive: true, force: true });
    await mkdir(destDir, { recursive: true });

    let copied = 0;
    if (folder) {
      const srcDir = path.join(SRC_DIR, folder);
      const files = (await readdir(srcDir))
        .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
        .sort();

      for (let i = 0; i < files.length; i++) {
        const srcName = files[i];
        const ext = path.extname(srcName).toLowerCase();
        const destName = `image-${String(i + 1).padStart(2, "0")}${ext}`;
        try {
          await copyFile(path.join(srcDir, srcName), path.join(destDir, destName));
          copied++;
        } catch {
          // skip broken file names if OS refuses them
        }
      }
    }

    report.push({
      slug,
      sourceMatched: folder || "NO_MATCH",
      destinationFolderExists: true,
      imageCount: copied,
      status: copied > 0 ? "OK" : "NO_IMAGES",
    });
  }

  const lines = [
    "| slug | source matched | destination folder exists | image count | status |",
    "|---|---|---|---|---|",
    ...report.map((r) => `| \`${r.slug}\` | ${r.sourceMatched} | ${r.destinationFolderExists} | ${r.imageCount} | ${r.status} |`),
  ];

  console.log(lines.join("\n"));
  await writeFile(path.join(ROOT, "scripts", "image-copy-report.txt"), lines.join("\n"), "utf8");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
