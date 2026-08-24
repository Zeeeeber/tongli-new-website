import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { spawnSync } from "node:child_process";
import ts from "typescript";

const projectRoot = process.cwd();
const pythonFlagIndex = process.argv.indexOf("--python");
const pythonExecutable =
  pythonFlagIndex >= 0 ? process.argv[pythonFlagIndex + 1] : "python";

const transformRoots = [
  "src/app/applications/cabinets-wardrobes/page.tsx",
  "src/app/applications/door-production/page.tsx",
  "src/app/applications/furniture-manufacturing/page.tsx",
  "src/app/applications/hotel-commercial/page.tsx",
  "src/app/applications/wall-panels-interior/page.tsx",
  "src/app/applications/whole-house-customization/page.tsx",
  "src/app/collections/3d-wood-panels/page.tsx",
  "src/app/collections/engineered-veneer/page.tsx",
  "src/app/collections/melamine-board/page.tsx",
  "src/app/collections/natural-wood-veneer/page.tsx",
  "src/app/privacy/page.tsx",
  "src/app/terms/page.tsx",
  "src/app/products/3d-wood-panels/page.tsx",
  "src/app/products/engineered-wood-veneer/page.tsx",
  "src/app/products/melamine-board/page.tsx",
  "src/app/products/natural-wood-veneer/page.tsx",
  "src/app/products/supporting-boards/page.tsx",
  "src/app/products/veneer-edge-banding/page.tsx",
  "src/app/products/wood-veneer-panels/page.tsx",
  "src/app/resources/[slug]/page.tsx",
  "src/app/resources/category/company-news/page.tsx",
  "src/app/resources/category/industry-news/page.tsx",
  "src/app/resources/category/product-news/page.tsx",
  "src/components/contact/ContactFormModal.tsx",
  "src/components/product/FAQSection.tsx",
  "src/components/product/NaturalWoodVeneerCategoryClient.tsx",
];

const productTemplateDirectory = path.join(
  projectRoot,
  "src/components/product",
);
for (const filename of fs.readdirSync(productTemplateDirectory)) {
  if (filename.endsWith("DetailTemplate.tsx")) {
    transformRoots.push(`src/components/product/${filename}`);
  }
}

const translationRoots = [
  ...transformRoots,
  ...fs
    .readdirSync(path.join(projectRoot, "src/data/products"))
    .filter((filename) => filename.endsWith(".ts"))
    .map((filename) => `src/data/products/${filename}`),
  "src/data/resources/articles.ts",
  "src/i18n/full-site-routes.ts",
  "src/i18n/copy.ts",
  "src/i18n/core-page-copy.ts",
  "src/i18n/core-text.ts",
];

const englishLocaleSourceFiles = new Set([
  "src/i18n/copy.ts",
  "src/i18n/core-page-copy.ts",
]);

for (const routeRoot of [
  "src/app/applications",
  "src/app/collections",
  "src/app/products",
  "src/app/privacy",
  "src/app/terms",
]) {
  const pending = [absolute(routeRoot)];
  while (pending.length > 0) {
    const current = pending.pop();
    if (!current) continue;
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const entryPath = path.join(current, entry.name);
      if (entry.isDirectory()) pending.push(entryPath);
      if (entry.isFile() && entry.name === "layout.tsx") {
        translationRoots.push(path.relative(projectRoot, entryPath).replaceAll("\\", "/"));
      }
    }
  }
}

const translatedPropertyNames = new Set([
  "name",
  "title",
  "description",
  "problem",
  "impact",
  "solution",
  "surface",
  "substrate",
  "type",
  "q",
  "a",
  "label",
  "alt",
  "category",
  "subCategory",
  "tone",
  "species",
  "body",
  "subtitle",
  "eyebrow",
  "pointsLabel",
  "cta",
  "shortDesc",
  "shortDescription",
  "metaDescription",
  "seoTitle",
  "excerpt",
  "content",
  "readTime",
  "author",
  "question",
  "answer",
  "value",
]);

const translatedExpressionNames = new Set([
  ...translatedPropertyNames,
  "tag",
  "point",
  "tone",
  "application",
  "item",
]);

const translatedArrayNames = /(?:checklist|points|features|benefits|applications|faqs|categories|tones|tags|steps|options|concerns|solutions)/i;

function absolute(relativePath) {
  return path.join(projectRoot, relativePath);
}

function normalize(value) {
  return value.replace(/\s+/g, " ").trim();
}

function isHumanText(value) {
  const normalized = normalize(value);
  return /[A-Za-z]{2}/.test(normalized) && !/^https?:\/\//i.test(normalized);
}

function sourceFileFor(relativePath) {
  const source = fs.readFileSync(absolute(relativePath), "utf8");
  const kind = relativePath.endsWith(".tsx")
    ? ts.ScriptKind.TSX
    : ts.ScriptKind.TS;
  return {
    source,
    ast: ts.createSourceFile(
      relativePath,
      source,
      ts.ScriptTarget.Latest,
      true,
      kind,
    ),
  };
}

function propertyName(node, sourceFile) {
  if (!node) return "";
  return node.getText(sourceFile).replace(/^['"]|['"]$/g, "");
}

function nearestVariableName(node, sourceFile) {
  let current = node.parent;
  while (current) {
    if (ts.isVariableDeclaration(current)) {
      return current.name.getText(sourceFile);
    }
    if (ts.isSourceFile(current)) break;
    current = current.parent;
  }
  return "";
}

function isInsideEnglishLocaleEntry(node, sourceFile) {
  let current = node.parent;
  while (current && !ts.isSourceFile(current)) {
    if (
      ts.isPropertyAssignment(current) &&
      propertyName(current.name, sourceFile) === "en"
    ) {
      return true;
    }
    current = current.parent;
  }
  return false;
}

function shouldCollectLiteral(node, sourceFile, relativePath) {
  if (ts.isImportDeclaration(node.parent) || ts.isExportDeclaration(node.parent)) {
    return false;
  }

  if (
    englishLocaleSourceFiles.has(relativePath) &&
    isInsideEnglishLocaleEntry(node, sourceFile)
  ) {
    return true;
  }

  if (
    relativePath === "src/i18n/core-text.ts" &&
    ts.isPropertyAssignment(node.parent) &&
    node.parent.name === node
  ) {
    return true;
  }

  if (ts.isJsxAttribute(node.parent)) {
    const attributeName = node.parent.name.getText(sourceFile);
    return ["alt", "title", "placeholder", "aria-label"].includes(attributeName);
  }

  if (
    ts.isJsxExpression(node.parent) &&
    ts.isJsxElement(node.parent.parent) &&
    node.parent.parent.openingElement.tagName.getText(sourceFile) === "T"
  ) {
    return true;
  }

  if (ts.isPropertyAssignment(node.parent)) {
    return translatedPropertyNames.has(propertyName(node.parent.name, sourceFile));
  }

  if (ts.isArrayLiteralExpression(node.parent)) {
    return translatedArrayNames.test(nearestVariableName(node, sourceFile));
  }

  if (ts.isConditionalExpression(node.parent)) return true;
  return false;
}

function collectTranslations() {
  const phrases = new Set();

  for (const relativePath of [...new Set(translationRoots)]) {
    const { ast } = sourceFileFor(relativePath);

    function visit(node) {
      if (ts.isJsxText(node)) {
        const value = normalize(node.getText(ast));
        if (isHumanText(value)) phrases.add(value);
      }

      if (ts.isStringLiteralLike(node) && shouldCollectLiteral(node, ast, relativePath)) {
        const value = normalize(node.text);
        if (isHumanText(value)) phrases.add(value);
      }

      ts.forEachChild(node, visit);
    }

    visit(ast);
  }

  return [...phrases].sort((left, right) => left.localeCompare(right));
}

function isInsideLocalizedText(node, sourceFile) {
  let current = node.parent;
  while (current && !ts.isSourceFile(current)) {
    if (
      ts.isJsxElement(current) &&
      current.openingElement.tagName.getText(sourceFile) === "T"
    ) {
      return true;
    }
    current = current.parent;
  }
  return false;
}

function shouldWrapExpression(expression) {
  if (ts.isPropertyAccessExpression(expression)) {
    return translatedExpressionNames.has(expression.name.text);
  }
  if (ts.isIdentifier(expression)) {
    return translatedExpressionNames.has(expression.text);
  }
  if (ts.isConditionalExpression(expression)) {
    return (
      ts.isStringLiteralLike(expression.whenTrue) ||
      ts.isStringLiteralLike(expression.whenFalse)
    );
  }
  return ts.isTemplateExpression(expression) || ts.isNoSubstitutionTemplateLiteral(expression);
}

function transformFile(relativePath) {
  const filePath = absolute(relativePath);
  const { source, ast } = sourceFileFor(relativePath);
  if (source.includes('from "@/i18n/full-site-context"')) return false;

  const edits = [];
  function visit(node) {
    if (isInsideLocalizedText(node, ast)) return;

    if (ts.isJsxText(node) && isHumanText(node.getText(ast))) {
      edits.push({
        start: node.getStart(ast),
        end: node.getEnd(),
        replacement: `<T>{${JSON.stringify(node.getText(ast))}}</T>`,
      });
      return;
    }

    if (
      ts.isJsxExpression(node) &&
      node.expression &&
      !ts.isJsxAttribute(node.parent) &&
      shouldWrapExpression(node.expression)
    ) {
      const expressionText = node.expression.getText(ast);
      edits.push({
        start: node.getStart(ast),
        end: node.getEnd(),
        replacement: `<T>{${expressionText}}</T>`,
      });
      return;
    }

    ts.forEachChild(node, visit);
  }
  visit(ast);

  if (edits.length === 0) return false;

  edits.sort((left, right) => right.start - left.start);
  let transformed = source;
  for (const edit of edits) {
    transformed =
      transformed.slice(0, edit.start) +
      edit.replacement +
      transformed.slice(edit.end);
  }

  transformed = transformed.replace(
    /import Link from ["']next\/link["'];?/g,
    'import Link from "@/components/i18n/LocalizedLink";',
  );

  const firstImport = transformed.search(/^import\s/m);
  if (firstImport < 0) {
    throw new Error(`No import insertion point found in ${relativePath}`);
  }
  transformed =
    transformed.slice(0, firstImport) +
    'import T from "@/i18n/full-site-context";\n' +
    transformed.slice(firstImport);

  fs.writeFileSync(filePath, transformed, "utf8");
  return true;
}

const phrases = collectTranslations();
const sourceJsonPath = path.join(os.tmpdir(), "tlveneer-i18n-source.json");
fs.writeFileSync(sourceJsonPath, JSON.stringify(phrases, null, 2), "utf8");
console.log(`Collected ${phrases.length} unique source phrases.`);

const outputPath = absolute("src/i18n/generated-full-site-text.json");
const translatorScript = absolute("scripts/translate-full-site-i18n.py");
const translationResult = spawnSync(
  pythonExecutable,
  [translatorScript, sourceJsonPath, outputPath],
  { cwd: projectRoot, stdio: "inherit" },
);

if (translationResult.status !== 0) {
  process.exit(translationResult.status ?? 1);
}

let transformedCount = 0;
for (const relativePath of [...new Set(transformRoots)]) {
  if (transformFile(relativePath)) transformedCount += 1;
}
console.log(`Localized JSX in ${transformedCount} files.`);
