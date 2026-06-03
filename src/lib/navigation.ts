export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Collections", href: "/collections" },
  // { label: "Applications", href: "/applications" }, // TODO: hidden temporarily
  { label: "Custom Solutions", href: "/custom-solutions" },
  { label: "About Tongli", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const productCategories = [
  {
    id: "wood-veneer-panels",
    name: "Wood Veneer Panels",
    href: "/products/wood-veneer-panels",
    description: "Decorative panels with natural or engineered veneer on various substrates",
  },
  {
    id: "natural-wood-veneer",
    name: "Natural Wood Veneer",
    href: "/products/natural-wood-veneer",
    description: "Authentic wood veneer sheets in various species",
  },
  {
    id: "engineered-wood-veneer",
    name: "Engineered Wood Veneer",
    href: "/products/engineered-wood-veneer",
    description: "Reconstituted veneer with consistent patterns",
  },
  {
    id: "3d-wood-panels",
    name: "3D Wood Panels",
    href: "/products/3d-wood-panels",
    description: "Decorative carved solid wood panels",
  },
];
