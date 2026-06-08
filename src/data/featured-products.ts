/**
 * Minimal featured products data for the home page.
 * Only includes the fields actually used on the home page.
 * This avoids loading the entire 600+ line products file.
 */

export interface FeaturedProduct {
  slug: string;
  name: string;
  imageAlt: string;
  featuredImage: string;
  cuttingMethod: string;
  veneerSpecies: string;
  href: string;
}

export const featuredProducts: FeaturedProduct[] = [
  {
    slug: "quarter-cut-maple-natural-wood-veneer-sheets",
    name: "Quarter Cut Maple Natural Wood Veneer Sheets",
    imageAlt: "Quarter Cut Maple Natural Wood Veneer",
    featuredImage: "/images/products/natural-wood-veneer/quarter-cut-maple-natural-wood-veneer-sheets/image-01.jpg",
    cuttingMethod: "Quarter Cut",
    veneerSpecies: "Maple",
    href: "/products/natural-wood-veneer/quarter-cut-maple-natural-wood-veneer-sheets",
  },
  {
    slug: "crown-cut-black-walnut-natural-wood-veneer-sheets",
    name: "Crown Cut Black Walnut Natural Wood Veneer Sheets",
    imageAlt: "Crown Cut Black Walnut Natural Wood Veneer",
    featuredImage: "/images/products/natural-wood-veneer/crown-cut-black-walnut-natural-wood-veneer-sheets/image-01.jpg",
    cuttingMethod: "Crown Cut",
    veneerSpecies: "Black Walnut",
    href: "/products/natural-wood-veneer/crown-cut-black-walnut-natural-wood-veneer-sheets",
  },
  {
    slug: "natural-teak-wood-veneer-sheets",
    name: "Natural Teak Wood Veneer Sheets",
    imageAlt: "Natural Teak Wood Veneer",
    featuredImage: "/images/products/natural-wood-veneer/natural-teak-wood-veneer-sheets/image-01.jpg",
    cuttingMethod: "Rotary Cut",
    veneerSpecies: "Teak",
    href: "/products/natural-wood-veneer/natural-teak-wood-veneer-sheets",
  },
  {
    slug: "black-walnut-burl-natural-wood-veneer-sheets",
    name: "Black Walnut Burl Natural Wood Veneer Sheets",
    imageAlt: "Black Walnut Burl Natural Wood Veneer",
    featuredImage: "/images/products/natural-wood-veneer/black-walnut-burl-natural-wood-veneer-sheets/image-01.jpg",
    cuttingMethod: "Burl",
    veneerSpecies: "Black Walnut",
    href: "/products/natural-wood-veneer/black-walnut-burl-natural-wood-veneer-sheets",
  },
  {
    slug: "quarter-sawn-american-black-walnut-natural-wood-veneer",
    name: "Quarter Sawn American Black Walnut Natural Wood Veneer",
    imageAlt: "Quarter Sawn American Black Walnut Natural Wood Veneer",
    featuredImage: "/images/products/natural-wood-veneer/quarter-sawn-american-black-walnut-natural-wood-veneer/image-01.jpg",
    cuttingMethod: "Quarter Sawn",
    veneerSpecies: "American Black Walnut",
    href: "/products/natural-wood-veneer/quarter-sawn-american-black-walnut-natural-wood-veneer",
  },
  {
    slug: "aaa-birds-eye-maple-natural-wood-veneer-sheets",
    name: "AAA Birdseye Maple Natural Wood Veneer Sheets",
    imageAlt: "AAA Birdseye Maple Natural Wood Veneer",
    featuredImage: "/images/products/natural-wood-veneer/aaa-birds-eye-maple-natural-wood-veneer-sheets/image-01.jpg",
    cuttingMethod: "Quarter Cut",
    veneerSpecies: "Birdseye Maple",
    href: "/products/natural-wood-veneer/aaa-birds-eye-maple-natural-wood-veneer-sheets",
  },
];
