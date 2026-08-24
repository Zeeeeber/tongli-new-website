export const applicationPageSeo = {
  "cabinets-wardrobes": {
    title: "Decorative Panels for Cabinets and Wardrobes",
    description: "Wood veneer panels and decorative board solutions for cabinet, wardrobe and custom storage manufacturing.",
  },
  "door-production": {
    title: "Wood Veneer Panels for Door Production",
    description: "Wood veneer panels, engineered veneer and matching materials for interior door and decorative door production.",
  },
  "furniture-manufacturing": {
    title: "Wood Veneer Panels for Furniture Manufacturing",
    description: "Natural veneer, engineered veneer and veneered panel solutions for furniture factories and custom furniture production.",
  },
  "hotel-commercial": {
    title: "Wood Materials for Hotel and Commercial Interiors",
    description: "Wood veneer and decorative panel solutions for hotel, retail, office and other commercial interior projects.",
  },
  "wall-panels-interior": {
    title: "Wood Veneer Wall Panels for Interior Projects",
    description: "Natural and engineered wood veneer panel solutions for feature walls, ceilings and architectural interiors.",
  },
  "whole-house-customization": {
    title: "Materials for Whole House Customization",
    description: "Coordinated wood veneer, decorative panel and supporting board materials for whole-house custom interiors.",
  },
} as const;

export const collectionPageSeo = {
  "3d-wood-panels": {
    title: "3D Wood Panel Collection",
    description: "Browse carved 3D decorative wood panel patterns, grooves, waves and textured surfaces for interior projects.",
  },
  "engineered-veneer": {
    title: "Engineered Wood Veneer Collection",
    description: "Browse reconstituted wood veneer patterns with consistent colors and textures for furniture, cabinetry and architectural projects.",
  },
  "melamine-board": {
    title: "Melamine Board Collection",
    description: "Browse wood grain, solid color, fabric-look and stone-look melamine surfaces for furniture and cabinetry.",
  },
  "natural-wood-veneer": {
    title: "Natural Wood Veneer Collection",
    description: "Browse natural wood veneer styles with authentic hardwood grain, color variation and texture for furniture and interior projects.",
  },
} as const;

export const productCategorySeo = {
  "3d-wood-panels": {
    title: "3D Wood Panels",
    description: "Decorative carved wood panels with three-dimensional textures for walls, doors, ceilings and furniture surfaces.",
  },
  "engineered-wood-veneer": {
    title: "Engineered Wood Veneer",
    description: "Reconstituted wood veneer with consistent patterns, stable colors and uniform textures for repeatable production.",
  },
  "melamine-board": {
    title: "Melamine Boards and Decorative Panels",
    description: "Melamine-faced plywood, MDF and particle board for cabinets, wardrobes, furniture and interior panels.",
  },
  "natural-wood-veneer": {
    title: "Natural Wood Veneer Sheets",
    description: "Source natural wood veneer sheets in oak, walnut, teak, maple, ash and other species for furniture, doors, plywood, wall panels and custom interiors.",
  },
  "supporting-boards": {
    title: "Plywood, MDF & Furniture Board Substrates",
    description: "Source commercial plywood, raw MDF, fire rated MDF, moisture-resistant MDF and particle board substrates for furniture, doors and interior panel production.",
  },
  "veneer-edge-banding": {
    title: "Natural Wood Veneer Edge Banding",
    description: "Source natural and engineered veneer edge banding for furniture, cabinets, doors and panels, with custom widths, backing, finish and roll lengths.",
  },
  "wood-veneer-panels": {
    title: "Wood Veneer Panels and Decorative Plywood",
    description: "Source natural or engineered wood veneer panels on plywood, MDF and custom cores for furniture, doors, wall panels and commercial interior projects.",
  },
} as const;

export const resourceCategorySeo = {
  "company-news": {
    title: "Company News",
    description: "Latest updates, milestones, certifications and investments from Tongli Timber.",
  },
  "industry-news": {
    title: "Industry News",
    description: "Wood veneer, decorative panel and interior material trends, guidance and market insights.",
  },
  "product-news": {
    title: "Product News",
    description: "Product guides, comparisons and technical information for wood veneer and decorative panels.",
  },
} as const;

export const legalPageSeo = {
  privacy: {
    title: "Privacy Policy",
    description: "Read the Tongli Timber privacy policy.",
  },
  terms: {
    title: "Terms of Service",
    description: "Read the terms governing use of the Tongli Timber website.",
  },
} as const;

export type ApplicationSlug = keyof typeof applicationPageSeo;
export type CollectionSlug = keyof typeof collectionPageSeo;
export type ProductCategorySlug = keyof typeof productCategorySeo;
export type ResourceCategorySlug = keyof typeof resourceCategorySeo;

export const applicationSlugs = Object.keys(applicationPageSeo) as ApplicationSlug[];
export const collectionSlugs = Object.keys(collectionPageSeo) as CollectionSlug[];
export const productCategorySlugs = Object.keys(productCategorySeo) as ProductCategorySlug[];
export const resourceCategorySlugs = Object.keys(resourceCategorySeo) as ResourceCategorySlug[];

export function isKeyOf<T extends object>(value: string, object: T): value is keyof T & string {
  return value in object;
}
