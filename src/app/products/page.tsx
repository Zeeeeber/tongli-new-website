"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo, useRef } from "react";
import { naturalWoodVeneerProducts } from "@/data/products/natural-wood-veneer-products";
import { woodVeneerPanelProducts } from "@/data/products/wood-veneer-panel-products";
import { engineeredWoodVeneerProducts } from "@/data/products/engineered-wood-veneer-products";
import { melamineBoardProducts } from "@/data/products/melamine-board-products";
import { threeDWoodPanelsProducts } from "@/data/products/three-d-wood-panels-products";
import { veneerEdgeBandingProducts } from "@/data/products/veneer-edge-banding-products";

// Design System
const C = {
  primary:     "#0F6B3A",
  primaryDark:  "#124B34",
  primaryLight: "#4C8A68",
  accent:       "#8B5E3C",
  accentLight:  "#C9A87C",
  ivory:        "#F7F3EC",
  cream:        "#F5EFE4",
  white:        "#FFFFFF",
  charcoal:     "#1F2621",
  textBody:     "#6b5d4d",
  textMuted:    "#8a8075",
  border:       "#e8e3dc",
  problem:      "#C94B3C",
};

// Category structure with subcategories
interface CategoryItem {
  id: string;
  label: string;
  href: string;
  subcategories?: { id: string; label: string; href: string }[];
}

const CATEGORIES: CategoryItem[] = [
  { id: "all",           label: "All Products",           href: "/products" },
  { id: "wood-veneer-panels",      label: "Wood Veneer Panels",      href: "/products/wood-veneer-panels" },
  { id: "natural-wood-veneer",     label: "Natural Wood Veneer",      href: "/products/natural-wood-veneer" },
  { id: "engineered-wood-veneer", label: "Engineered Wood Veneer",  href: "/products/engineered-wood-veneer" },
  { id: "3d-wood-panels",         label: "3D Wood Panels",          href: "/products/3d-wood-panels" },
  { id: "veneer-edge-banding",     label: "Veneer Edge Banding",     href: "/products/veneer-edge-banding" },
  { id: "melamine-board",          label: "Melamine Board",          href: "/products/melamine-board" },
  { id: "supporting-boards",       label: "Supporting Boards",       href: "/products/supporting-boards",
    subcategories: [
      { id: "commercial-plywood", label: "Commercial Plywood",  href: "/products/supporting-boards" },
      { id: "basswood-plywood",   label: "Basswood Plywood",    href: "/products/supporting-boards" },
      { id: "birch-plywood",      label: "Birch Plywood",       href: "/products/supporting-boards" },
      { id: "raw-mdf",            label: "Raw MDF",             href: "/products/supporting-boards" },
      { id: "fireproof-mdf",      label: "Fireproof MDF",       href: "/products/supporting-boards" },
      { id: "mr-mdf",             label: "MR MDF",              href: "/products/supporting-boards" },
      { id: "particle-board",     label: "Particle Board",      href: "/products/supporting-boards" },
    ],
  },
];

type CategoryId = "all" | "wood-veneer-panels" | "natural-wood-veneer" | "engineered-wood-veneer" | "3d-wood-panels" | "veneer-edge-banding" | "melamine-board" | "supporting-boards" | "commercial-plywood" | "basswood-plywood" | "birch-plywood" | "raw-mdf" | "fireproof-mdf" | "mr-mdf" | "particle-board";

// Unified product card shape
interface ProductCard {
  slug: string;
  name: string;
  category: string;
  categoryId: CategoryId;
  description: string;
  image: string | null;
  tags: string[];
  href: string;
}

// Build all products from real data
const allProductsData: ProductCard[] = [
  // Natural Wood Veneer — 20 products
  ...naturalWoodVeneerProducts.map((p) => ({
    slug: p.slug,
    name: p.name,
    category: "Natural Wood Veneer",
    categoryId: "natural-wood-veneer" as CategoryId,
    description: p.shortDesc,
    image: p.featuredImage || (p.gallery[0] ?? null),
    tags: p.tags.slice(0, 3),
    href: `/products/natural-wood-veneer/${p.slug}`,
  })),
  // Wood Veneer Panels — 18 products with real images
  ...Object.values(woodVeneerPanelProducts)
    .filter((p) => p.featuredImage && p.featuredImage.length > 0)
    .map((p) => ({
      slug: p.slug,
      name: p.name,
      category: "Wood Veneer Panels",
      categoryId: "wood-veneer-panels" as CategoryId,
      description: p.shortDesc,
      image: p.featuredImage || (p.gallery[0] ?? null),
      tags: p.tags.slice(0, 3),
      href: `/products/wood-veneer-panels/${p.slug}`,
    })),
  // Engineered Wood Veneer — 8 products
  ...engineeredWoodVeneerProducts.map((p) => ({
    slug: p.slug,
    name: p.name,
    category: "Engineered Wood Veneer",
    categoryId: "engineered-wood-veneer" as CategoryId,
    description: p.shortDesc,
    image: p.featuredImage || (p.gallery[0] ?? null),
    tags: p.tags.slice(0, 3),
    href: `/products/engineered-wood-veneer/${p.slug}`,
  })),
  // Melamine Board — 5 products
  ...melamineBoardProducts.map((p) => ({
    slug: p.slug,
    name: p.name,
    category: "Melamine Board",
    categoryId: "melamine-board" as CategoryId,
    description: p.shortDesc,
    image: p.featuredImage || (p.gallery[0] ?? null),
    tags: p.tags.slice(0, 3),
    href: `/products/melamine-board/${p.slug}`,
  })),
  // 3D Wood Panels — 43 products
  ...threeDWoodPanelsProducts.map((p) => ({
    slug: p.slug,
    name: p.name,
    category: "3D Wood Panels",
    categoryId: "3d-wood-panels" as CategoryId,
    description: p.shortDesc,
    image: p.featuredImage || (p.gallery[0] ?? null),
    tags: p.tags.slice(0, 3),
    href: `/products/3d-wood-panels/${p.slug}`,
  })),
  // Veneer Edge Banding — 19 products
  ...veneerEdgeBandingProducts.map((p) => ({
    slug: p.slug,
    name: p.name,
    category: "Veneer Edge Banding",
    categoryId: "veneer-edge-banding" as CategoryId,
    description: p.shortDesc,
    image: p.featuredImage || (p.gallery[0] ?? null),
    tags: p.tags.slice(0, 3),
    href: `/products/veneer-edge-banding/${p.slug}`,
  })),
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(["supporting-boards"]));
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  const displayProducts = useMemo(() => {
    if (activeCategory === "all") return allProductsData;
    return allProductsData.filter((p) => p.categoryId === activeCategory);
  }, [activeCategory]);

  const activeCategoryData = CATEGORIES.find((c) => c.id === activeCategory) ||
    CATEGORIES.find((c) => c.subcategories?.some((s) => s.id === activeCategory));

  const activeTab = activeCategoryData ?? CATEGORIES[0];

  // Build flat list for mobile chips
  const flatChips: { id: CategoryId; label: string; href: string }[] = CATEGORIES.flatMap((cat) => [
    { id: cat.id as CategoryId, label: cat.label, href: cat.href },
    ...(cat.subcategories?.map((sub) => ({
      id: sub.id as CategoryId,
      label: sub.label,
      href: sub.href,
    })) ?? []),
  ]);

  return (
    <>

      {/* Hero Banner - Video Background */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {videoError && (
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/banner-bg.png')" }}
            />
          )}
          <video
            ref={videoRef}
            className="absolute inset-0 z-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/banner-bg.png"
            onCanPlay={() => setVideoError(false)}
            onLoadedData={() => setVideoError(false)}
            onError={() => setVideoError(true)}
          >
            <source src="/videos/banner-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 z-10" />
        </div>

        <div className="absolute inset-y-0 right-0 z-20 hidden md:flex items-center"
          style={{
            left: heroLoaded ? "50%" : "100%",
            width: "50%",
            background: C.white,
            transition: "left 1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div className="w-full px-10 lg:px-16">
            {/* Label */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest" style={{ background: `${C.primary}15`, color: C.primary }}>
                Wood Material Solutions
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1F2621] leading-[1.1] mb-6">
              Premium Wood Products
              <br />
              <span style={{ color: C.primary }}>for Every Project</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base lg:text-lg leading-relaxed mb-8 max-w-md" style={{ color: C.textBody }}>
              Discover our comprehensive range of wood veneer panels, natural and engineered veneer, 3D panels, and quality substrates for furniture, doors, and interior applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact?type=sample"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
                style={{ background: C.primary, color: C.white }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Request Samples
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-semibold rounded-xl border-2 transition-all duration-200 hover:-translate-y-0.5"
                style={{ borderColor: C.primary, color: C.primary }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                About Factory
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <div
            className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"
            style={{ animation: "bounce 2s ease-in-out infinite" }}
          />
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-12 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">

            {/* Desktop: Left Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl border border-[#E5E1D8] overflow-hidden">
                  <div className="px-5 py-4 border-b border-[#E5E1D8]">
                    <h2 className="text-base font-semibold text-[#1F2621]">Product Categories</h2>
                  </div>
                  <div className="p-2">
                    {CATEGORIES.map((category) => {
                      const isActive = activeCategory === category.id;
                      const hasSubcategories = category.subcategories && category.subcategories.length > 0;

                      if (hasSubcategories) {
                        const isExpanded = expandedCategories.has(category.id);
                        const hasActiveChild = category.subcategories!.some((sub) => activeCategory === sub.id);

                        return (
                          <div key={category.id}>
                            <button
                              onClick={() => {
                                if (expandedCategories.has(category.id)) {
                                  setExpandedCategories((prev) => {
                                    const next = new Set(prev);
                                    next.delete(category.id);
                                    return next;
                                  });
                                } else {
                                  setExpandedCategories((prev) => new Set(prev).add(category.id));
                                }
                              }}
                              className={`w-full text-left px-3 py-2.5 text-sm rounded-lg transition-all duration-150 flex items-center justify-between ${
                                isActive || hasActiveChild
                                  ? "bg-[#0F6B3A]/10 text-[#0F6B3A] font-medium"
                                  : "text-[#4B5563] hover:bg-[#F7F3EC] hover:text-[#1F2621]"
                              }`}
                            >
                              <span>{category.label}</span>
                              <svg
                                className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            {/* Subcategories - expandable */}
                            {isExpanded && (
                              <div className="mt-1 space-y-0.5">
                                {category.subcategories!.map((sub) => {
                                  const isSubActive = activeCategory === sub.id;
                                  return (
                                    <button
                                      key={sub.id}
                                      onClick={() => setActiveCategory(sub.id as CategoryId)}
                                      className={`w-full text-left pl-6 pr-3 py-2 text-sm rounded-lg transition-all duration-150 ${
                                        isSubActive
                                          ? "bg-[#0F6B3A]/10 text-[#0F6B3A] font-medium border-l-2 border-[#0F6B3A]"
                                          : "text-[#6b7280] hover:bg-[#F7F3EC] hover:text-[#1F2621]"
                                      }`}
                                    >
                                      {sub.label}
                                    </button>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        );
                      }

                      return (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id as CategoryId)}
                          className={`w-full text-left px-3 py-2.5 text-sm rounded-lg transition-all duration-150 ${
                            isActive
                              ? "bg-[#0F6B3A]/10 text-[#0F6B3A] font-medium border-l-2 border-[#0F6B3A]"
                              : "text-[#4B5563] hover:bg-[#F7F3EC] hover:text-[#1F2621]"
                          }`}
                        >
                          {category.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>

            {/* Right: Product Area */}
            <div>
              {/* Mobile: Horizontal Scrollable Categories */}
              <div className="lg:hidden overflow-x-auto -mx-4 px-4 mb-6 scrollbar-hide">
                <div className="flex gap-2 w-max pb-2">
                  {flatChips.map((chip) => {
                    const isActive = activeCategory === chip.id;
                    return (
                      <button
                        key={chip.id}
                        onClick={() => setActiveCategory(chip.id)}
                        className={`flex-shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                          isActive
                            ? "bg-[#0F6B3A] text-white"
                            : "bg-white text-[#6b7280] border border-[#E5E1D8] hover:border-[#0F6B3A] hover:text-[#0F6B3A]"
                        }`}
                      >
                        {chip.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-[#1F2621]">
                  {activeTab.label}
                </h2>
                <p className="text-sm text-[#6b7280]">
                  {displayProducts.length > 0 ? (
                    <>
                      Showing <span className="font-medium text-[#1F2621]">{displayProducts.length}</span> product{displayProducts.length !== 1 ? "s" : ""}
                    </>
                  ) : (
                    "No products listed yet"
                  )}
                </p>
              </div>

              {/* Products Grid — or Empty State */}
              {displayProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {displayProducts.map((product) => (
                    <div
                      key={product.slug}
                      className="group bg-white rounded-xl border border-[#E5E1D8] hover:border-[#0F6B3A]/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      {/* Product Image */}
                      <div className="aspect-square bg-gradient-to-br from-[#F7F3EC] via-[#E8E4DB] to-[#D4CFC5] relative overflow-hidden">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                              <svg className="w-10 h-10 text-[#8B5E3C]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                        )}
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#0F6B3A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                          <Link
                            href={product.href}
                            className="px-4 py-2 bg-white text-[#0F6B3A] rounded-lg font-medium text-sm hover:bg-[#F7F3EC] transition-colors"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <span className="text-xs text-[#8B5E3C] font-medium">{product.category}</span>
                        <h3 className="font-semibold text-[#1F2621] mt-1 mb-2 line-clamp-2 group-hover:text-[#0F6B3A] transition-colors leading-snug">
                          {product.name}
                        </h3>
                        {product.description && (
                          <p className="text-xs text-[#6b7280] line-clamp-2 mb-3 leading-relaxed">{product.description}</p>
                        )}
                        {product.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {product.tags.map((tag) => (
                              <span key={tag} className="text-[10px] px-2 py-0.5 bg-[#F7F3EC] text-[#8B5E3C] rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Empty State */
                <div className="flex flex-col items-center justify-center py-24 text-center bg-white rounded-xl border border-[#E5E1D8]">
                  <div className="w-16 h-16 rounded-full bg-[#F7F3EC] flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#0F6B3A]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1F2621] mb-2">Products will be updated soon.</h3>
                  <p className="text-sm text-[#6b7280] mb-6 max-w-sm">
                    Explore this category page for available options, materials and customization details.
                  </p>
                  <Link
                    href={activeTab.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F6B3A] text-white rounded-lg font-semibold text-sm hover:bg-[#124B34] transition-colors"
                  >
                    View Category
                  </Link>
                </div>
              )}

              {/* Load More */}
              {displayProducts.length > 0 && (
                <div className="mt-12 text-center">
                  <button className="px-8 py-3 border-2 border-[#E5E1D8] text-[#1F2621] rounded-lg font-semibold hover:border-[#0F6B3A] hover:text-[#0F6B3A] transition-colors">
                    Load More Products
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-16 bg-[#0F6B3A]">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Can't Find What You Need?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              We offer custom manufacturing for specific substrate, veneer, size, and surface requirements. Contact our team for personalized solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/custom-solutions" 
                className="px-6 py-3 bg-white text-[#0F6B3A] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
              >
                Custom Solutions
              </Link>
              <Link 
                href="/contact" 
                className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Tongli Products */}
      <section className="py-16 lg:py-20 bg-white border-t border-[#E5E1D8]">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2621] mb-3">Why Choose Tongli Products</h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">Professional quality and reliable service to support your business growth worldwide</p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                number: "01",
                title: "Strict Selection",
                description: "Strict selection and grading ensure consistent color, grain and performance.",
              },
              {
                number: "02",
                title: "Custom Solutions",
                description: "OEM/ODM support with flexible sizes, cores and surface options.",
              },
              {
                number: "03",
                title: "Wide Range",
                description: "From natural veneers to engineered panels and supporting boards.",
              },
              {
                number: "04",
                title: "Export Packaging",
                description: "Strong packaging for sea transport and long-distance delivery.",
              },
              {
                number: "05",
                title: "Fast Samples",
                description: "Samples ready in 3-7 days to help you win projects faster.",
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-[#FAFAFA] rounded-xl p-5 hover:bg-[#F7F3EC] hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#E5E1D8]"
              >
                {/* Number badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-[#0F6B3A]/20 group-hover:text-[#0F6B3A]/40 transition-colors">
                    {feature.number}
                  </span>
                  <div className="flex-1 h-px bg-[#E5E1D8]" />
                </div>
                
                {/* Title */}
                <h3 className="font-bold text-[#1F2621] mb-2 group-hover:text-[#0F6B3A] transition-colors">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-[#6b7280] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
