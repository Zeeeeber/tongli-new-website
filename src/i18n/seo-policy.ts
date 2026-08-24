/**
 * Localized URLs that are ready to be indexed.
 *
 * Core landing pages and product categories have reviewed SEO copy and clear
 * commercial intent. Long-tail pages stay accessible to users, but remain out
 * of search indexes until their translated body copy has been quality checked.
 */
const localizedIndexablePaths = new Set([
  "/",
  "/about",
  "/applications",
  "/collections",
  "/contact",
  "/custom-solutions",
  "/products",
  "/products/3d-wood-panels",
  "/products/engineered-wood-veneer",
  "/products/melamine-board",
  "/products/natural-wood-veneer",
  "/products/supporting-boards",
  "/products/veneer-edge-banding",
  "/products/wood-veneer-panels",
  "/projects",
  "/resources",
  "/samples",
]);

function normalizePath(path: string): string {
  const pathname = path.split(/[?#]/, 1)[0] || "/";
  if (pathname === "/") return pathname;
  return `/${pathname.replace(/^\/+|\/+$/g, "")}`;
}

export function isLocalizedPathIndexable(path: string): boolean {
  return localizedIndexablePaths.has(normalizePath(path));
}
