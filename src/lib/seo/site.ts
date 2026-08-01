/**
 * Site Configuration
 * Global site settings used across SEO, metadata, and schema generators
 */

export const siteConfig = {
  name: "Tongli Timber",
  tagline: "Premium Wood Veneer & Panel Solutions",
  description:
    "Professional wood veneer manufacturer since 1999. We specialize in natural wood veneer, engineered veneer, veneer plywood, and decorative panels for furniture, doors, and interior projects worldwide.",
  url: "https://www.tlveneer.com",
  canonicalUrl: "https://www.tlveneer.com",
  locale: "en_US",
  language: "en",
  country: "US",
} as const;

export const companyConfig = {
  name: "Dongguan Tongli Timber Products Co., Ltd.",
  shortName: "Tongli Timber",
  established: 1999,
  address: {
    street: "No.655 Houjie Section, Huanguan Expressway",
    city: "Dongguan",
    province: "Guangdong Province",
    country: "China",
    postalCode: "",
  },
  phone: "+86 15817587053",
  email: "tonglitimber@tongli-dg.com",
  whatsapp: "8615817587053",
  googleMaps: "https://maps.google.com/?q=No.655+Houjie+Section+Dongguan+China",
} as const;

export const contactConfig = {
  sales: {
    email: "tonglitimber@tongli-dg.com",
    whatsapp: "+8615817587053",
  },
  support: {
    email: "tonglitimber@tongli-dg.com",
  },
  hours: {
    weekdays: "8:30 AM - 6:00 PM",
    saturday: "8:30 AM - 6:00 PM",
    sunday: "By appointment",
  },
} as const;

export const socialLinks = {
  facebook: "#",
  instagram: "#",
  linkedin: "#",
  youtube: "#",
  tiktok: "#",
  whatsapp: "https://wa.me/8615817587053",
} as const;

export const socialNames = {
  facebook: "Tongli Timber on Facebook",
  instagram: "Tongli Timber on Instagram",
  linkedin: "Tongli Timber on LinkedIn",
  youtube: "Tongli Timber on YouTube",
  tiktok: "Tongli Timber on TikTok",
  whatsapp: "Tongli Timber on WhatsApp",
} as const;

/**
 * Main navigation URLs
 * Used for sitemap and breadcrumb generation
 */
export const mainNavUrls = {
  home: "/",
  products: "/products",
  productCategories: {
    woodVeneerPanels: "/products/wood-veneer-panels",
    naturalWoodVeneer: "/products/natural-wood-veneer",
    engineeredWoodVeneer: "/products/engineered-wood-veneer",
    wood3dPanels: "/products/3d-wood-panels",
    edgeBanding: "/products/veneer-edge-banding",
    melamineBoard: "/products/melamine-board",
    supportingBoards: "/products/supporting-boards",
  },
  collections: "/collections",
  collectionCategories: {
    naturalWoodVeneer: "/collections/natural-wood-veneer",
    engineeredVeneer: "/collections/engineered-veneer",
    wood3dPanels: "/collections/3d-wood-panels",
    melamineBoard: "/collections/melamine-board",
  },
  applications: "/applications",
  customSolutions: "/custom-solutions",
  about: "/about",
  projects: "/projects",
  resources: "/resources",
  resourceCategories: {
    productNews: "/resources/category/product-news",
    industryNews: "/resources/category/industry-news",
    companyNews: "/resources/category/company-news",
  },
  contact: "/contact",
  samples: "/samples",
  privacy: "/privacy",
  terms: "/terms",
} as const;

/**
 * Default SEO values
 */
export const defaultSeo = {
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  titleTemplate: `%s | ${siteConfig.name}`,
  description: siteConfig.description,
  ogImage: "/images/banner-bg.png",
  ogImageWidth: 1024,
  ogImageHeight: 515,
  twitterCard: "summary_large_image" as const,
} as const;

/**
 * Certifications
 */
export const certifications = {
  fsc: { name: "FSC", description: "Forest Stewardship Council" },
  ce: { name: "CE", description: "European Conformity" },
  sgs: { name: "SGS", description: "SGS Testing & Certification" },
  carb: { name: "CARB P2", description: "California Air Resources Board Phase 2" },
} as const;

/**
 * Product categories for structured data
 */
export const productCategories = [
  {
    name: "Wood Veneer Panels",
    slug: "wood-veneer-panels",
    url: mainNavUrls.productCategories.woodVeneerPanels,
    description: "High-quality wood veneer panels with natural or engineered veneer faces on various substrates",
  },
  {
    name: "Natural Wood Veneer",
    slug: "natural-wood-veneer",
    url: mainNavUrls.productCategories.naturalWoodVeneer,
    description: "Authentic wood veneer sliced from real hardwood logs with natural grain patterns",
  },
  {
    name: "Engineered Wood Veneer",
    slug: "engineered-wood-veneer",
    url: mainNavUrls.productCategories.engineeredWoodVeneer,
    description: "Consistent engineered wood veneer with uniform patterns and colors",
  },
  {
    name: "3D Wood Panels",
    slug: "3d-wood-panels",
    url: mainNavUrls.productCategories.wood3dPanels,
    description: "Decorative 3D carved wood panels for interior wall decoration",
  },
  {
    name: "Veneer Edge Banding",
    slug: "veneer-edge-banding",
    url: mainNavUrls.productCategories.edgeBanding,
    description: "Matching veneer edge banding strips for panel finishing",
  },
  {
    name: "Melamine Board",
    slug: "melamine-board",
    url: mainNavUrls.productCategories.melamineBoard,
    description: "Melamine faced boards with various colors and textures",
  },
  {
    name: "Supporting Boards",
    slug: "supporting-boards",
    url: mainNavUrls.productCategories.supportingBoards,
    description: "Quality substrate boards including plywood, MDF, and particle board",
  },
] as const;

/**
 * Resource categories
 */
export const resourceCategories = [
  {
    name: "Product News",
    slug: "product-news",
    url: mainNavUrls.resourceCategories.productNews,
    description: "New product releases, technical guides, and recommendations",
  },
  {
    name: "Industry News",
    slug: "industry-news",
    url: mainNavUrls.resourceCategories.industryNews,
    description: "Wood industry trends, market updates, and design innovations",
  },
  {
    name: "Company News",
    slug: "company-news",
    url: mainNavUrls.resourceCategories.companyNews,
    description: "Company updates, certifications, and trade show participation",
  },
] as const;
