"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo, useRef } from "react";
import { naturalWoodVeneerProducts } from "@/data/products/natural-wood-veneer-products";

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

// Product categories with icons
const productCategories = [
  { name: "Wood Veneer Panels", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z", href: "/products/wood-veneer-panels" },
  { name: "Natural Wood Veneer", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z", href: "/products/natural-wood-veneer" },
  { name: "Engineered Wood Veneer", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", href: "/products/engineered-wood-veneer" },
  { name: "3D Wood Panels", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z", href: "/products/3d-wood-panels" },
  { name: "Veneer Edge Banding", icon: "M4 6h16M4 10h16M4 14h16M4 18h16", href: "/products/veneer-edge-banding" },
  { name: "Melamine Board", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z", href: "/products/melamine-board" },
  { name: "Supporting Boards", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", href: "/products/supporting-boards" },
];

// Filter options
const filterFeatures = [
  "Water Proof",
  "Fire Retardant",
  "Zero Emission",
  "Termite Proof",
  "Moisture Resistant",
  "Borer Proof",
];

const filterMaterials = [
  "Wood Veneer Panels",
  "Natural Wood Veneer",
  "Engineered Wood Veneer",
  "3D Wood Panels",
  "Veneer Edge Banding",
  "Melamine Board",
  "Supporting Boards",
];

// Featured products
const featuredProducts = naturalWoodVeneerProducts.slice(0, 6).map((product) => ({
  name: product.name,
  category: "Natural Wood Veneer",
  spec: `${product.specs.veneerSpecies} / ${product.specs.veneerThickness}`,
  slug: product.slug,
  image: product.featuredImage || product.gallery[0] || null,
}));

// All products for display
const allProducts = naturalWoodVeneerProducts.map((product, index) => ({
  name: product.name,
  category: "Natural Wood Veneer",
  spec: `${product.specs.veneerSpecies} / ${product.specs.veneerThickness}`,
  featured: index < 6,
  slug: product.slug,
  image: product.featuredImage || product.gallery[0] || null,
}));

export default function ProductsPage() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
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

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const displayProducts = useMemo(() => {
    return allProducts;
  }, []);

  return (
    <>

      {/* Hero Banner - Video Background */}
      <section className="relative h-[60vh] min-h-[480px] md:min-h-screen overflow-hidden">
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
          <div className="absolute inset-0 z-10 bg-black/10" />
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

      {/* Category Navigation */}
      <section className="py-8 bg-white border-b border-[#E5E1D8]">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
            {productCategories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group px-4 py-2 rounded-lg hover:bg-[#F7F3EC] transition-colors"
              >
                <span className="text-sm font-medium text-[#1F2621] text-center whitespace-nowrap">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="flex gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-8 bg-white rounded-xl border border-[#E5E1D8] p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-[#1F2621]">Filters</h3>
                  {activeFilters.length > 0 && (
                    <button 
                      onClick={() => setActiveFilters([])}
                      className="text-xs text-[#0F6B3A] hover:underline"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {/* Feature Filters */}
                <div className="mb-8">
                  <h4 className="font-semibold text-[#1F2621] mb-4 text-sm">Features</h4>
                  <div className="space-y-3">
                    {filterFeatures.map((feature) => (
                      <label key={feature} className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          activeFilters.includes(feature) 
                            ? 'bg-[#0F6B3A] border-[#0F6B3A]' 
                            : 'border-[#D1C9BC] group-hover:border-[#0F6B3A]'
                        }`}>
                          {activeFilters.includes(feature) && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-[#6b7280] group-hover:text-[#1F2621]">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Material Filters */}
                <div className="mb-8">
                  <h4 className="font-semibold text-[#1F2621] mb-4 text-sm">Material</h4>
                  <div className="space-y-3">
                    {filterMaterials.map((material) => (
                      <label key={material} className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                          activeFilters.includes(material) 
                            ? 'bg-[#0F6B3A] border-[#0F6B3A]' 
                            : 'border-[#D1C9BC] group-hover:border-[#0F6B3A]'
                        }`}>
                          {activeFilters.includes(material) && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-[#6b7280] group-hover:text-[#1F2621]">{material}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <button className="w-full py-3 bg-[#0F6B3A] text-white rounded-lg font-semibold hover:bg-[#124B34] transition-colors">
                  Apply Filters
                </button>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-6">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full py-3 bg-white border border-[#E5E1D8] rounded-lg font-medium text-[#1F2621] flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  <span>Filters {activeFilters.length > 0 && `(${activeFilters.length})`}</span>
                </button>
              </div>

              {/* Mobile Filters Dropdown */}
              {showFilters && (
                <div className="lg:hidden mb-6 bg-white rounded-xl border border-[#E5E1D8] p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-[#1F2621]">Filters</h3>
                    <button 
                      onClick={() => setActiveFilters([])}
                      className="text-xs text-[#0F6B3A]"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#1F2621] mb-3 text-sm">Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {filterFeatures.map((feature) => (
                        <button
                          key={feature}
                          onClick={() => toggleFilter(feature)}
                          className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                            activeFilters.includes(feature)
                              ? 'bg-[#0F6B3A] text-white'
                              : 'bg-[#F7F3EC] text-[#1F2621]'
                          }`}
                        >
                          {feature}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#1F2621] mb-3 text-sm">Material</h4>
                    <div className="flex flex-wrap gap-2">
                      {filterMaterials.map((material) => (
                        <button
                          key={material}
                          onClick={() => toggleFilter(material)}
                          className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                            activeFilters.includes(material)
                              ? 'bg-[#0F6B3A] text-white'
                              : 'bg-[#F7F3EC] text-[#1F2621]'
                          }`}
                        >
                          {material}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-[#6b7280]">
                  Showing <span className="font-medium text-[#1F2621]">{displayProducts.length}</span> products
                </p>
                <select className="px-4 py-2 bg-white border border-[#E5E1D8] rounded-lg text-sm text-[#1F2621] focus:outline-none focus:border-[#0F6B3A]">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Name: A-Z</option>
                </select>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
                      {/* Featured Badge */}
                      {product.featured && (
                        <span className="absolute top-3 right-3 px-2 py-1 bg-[#0F6B3A] text-white text-xs font-medium rounded">
                          Featured
                        </span>
                      )}
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#0F6B3A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        <Link 
                          href={`/products/natural-wood-veneer/${product.slug}`}
                          className="px-4 py-2 bg-white text-[#0F6B3A] rounded-lg font-medium text-sm hover:bg-[#F7F3EC] transition-colors"
                        >
                          View Product
                        </Link>
                      </div>
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-4">
                      <span className="text-xs text-[#8B5E3C] font-medium">{product.category}</span>
                      <h3 className="font-semibold text-[#1F2621] mt-1 mb-2 line-clamp-1 group-hover:text-[#0F6B3A] transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#6b7280]">{product.spec}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="mt-12 text-center">
                <button className="px-8 py-3 border-2 border-[#E5E1D8] text-[#1F2621] rounded-lg font-semibold hover:border-[#0F6B3A] hover:text-[#0F6B3A] transition-colors">
                  Load More Products
                </button>
              </div>
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
                description: "Strict selection and grading ensure consistent color, grain and performance."
              },
              {
                number: "02",
                title: "Custom Solutions",
                description: "OEM/ODM support with flexible sizes, cores and surface options."
              },
              {
                number: "03",
                title: "Wide Range",
                description: "From natural veneers to engineered panels and supporting boards."
              },
              {
                number: "04",
                title: "Export Packaging",
                description: "Strong packaging for sea transport and long-distance delivery."
              },
              {
                number: "05",
                title: "Fast Samples",
                description: "Samples ready in 3-7 days to help you win projects faster."
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
