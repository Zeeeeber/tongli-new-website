"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ImageModal from "@/components/ImageModal";

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
};

// ============================================
// Customization Sections Data
// ============================================
const customizationSections = [
  {
    id: "surface-finish",
    title: "Surface Finish",
    subtitle: "01 Surface Treatment",
    description: "UV coating, paint, lacquer for protection and decoration. Choose from closed paint, open paint, semi-open paint, and water-based paint finishes.",
    image: "/images/custom-solutions/custom-paint.png",
    features: ["Closed Paint", "Open Paint", "Semi-Open Paint", "Water-based Paint"],
    href: "#section-surface",
  },
  {
    id: "veneer-species",
    title: "Veneer Species",
    subtitle: "02 Wood Selection",
    description: "Over 150 wood species available including Oak, Walnut, Teak, Ash. Natural, engineered, dyed and smoked options.",
    image: "/images/custom-solutions/Veneer Species.jpg",
    features: ["Natural Veneer", "Engineered Veneer", "Dyed Veneer", "Smoked Veneer"],
    href: "#section-veneer",
  },
  {
    id: "veneer-matching",
    title: "Veneer Matching",
    subtitle: "03 Pattern Design",
    description: "Book match, slip match, mix match for unique visual patterns. Quarter cut, crown cut for different grain effects.",
    image: "/images/custom-solutions/Veneer Matching.png",
    features: ["Book Match", "Slip Match", "Mix Match", "Quarter Cut"],
    href: "#section-veneer",
  },
  {
    id: "substrate",
    title: "Substrate",
    subtitle: "04 Core Board",
    description: "MDF, Plywood, OSB, Blockboard with different densities and properties. FR, MR options available.",
    image: "/images/custom-solutions/Custom Substrate.png",
    features: ["MDF Standard", "Plywood", "OSB Board", "Blockboard"],
    href: "#section-substrate",
  },
  {
    id: "size-thickness",
    title: "Size & Thickness",
    subtitle: "05 Dimensions",
    description: "Custom sizes from 2440mm to 3600mm length. Thickness from 3mm to 45mm. E1, E0, ENF emission grades.",
    image: "/images/custom-solutions/Custom Size.jpg",
    features: ["E1 / E0 / ENF", "2440-3600mm Length", "3-45mm Thickness", "0.2-3mm Veneer"],
    href: "#section-substrate",
  },
  {
    id: "packaging",
    title: "Packaging",
    subtitle: "06 Delivery",
    description: "Sample packaging, bulk packaging, custom labels, wooden frames for safe worldwide delivery.",
    image: "/images/custom-solutions/custom-packaging.png",
    features: ["Sample Pack", "Bulk Pack", "Custom Labels", "Wooden Frame"],
    href: "#section-packaging",
  },
];

// ============================================
// Hero Banner Component
// ============================================
function HeroBanner() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${C.primaryDark} 0%, ${C.primary} 50%, ${C.primaryLight} 100%)` }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#fff" strokeWidth="1" />
              <circle cx="40" cy="40" r="1" fill="#fff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium text-white/90 tracking-wide">Premium Wood Solutions</span>
        </div>

        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight"
        >
          Custom Solutions
        </h1>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/50" />
          <svg className="w-6 h-6 text-white/50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/50" />
        </div>

        <p
          className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
        >
          Tailored wood panel solutions for furniture, doors, cabinets and interior applications.
          Every detail customized to your project needs.
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {[
            { value: "150+", label: "Wood Species" },
            { value: "10K+", label: "Projects Done" },
            { value: "50+", label: "Countries" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-white">{stat.value}</div>
              <div className="text-sm text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full">
          <path d="M0 60V30C240 0 480 60 720 60C960 60 1200 0 1440 30V60H0Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}

// ============================================
// Product Grid Component
// ============================================
function ProductGrid({ sectionId, items, basePath }: { sectionId: string; items: { name: string; image: string }[]; basePath: string }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const getImageSrc = (image: string) =>
    image.includes(".") ? `${basePath}/${image}` : `${basePath}/${image}.png`;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5 mb-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="group relative cursor-pointer"
            style={{ animationDelay: `${i * 100}ms` }}
            onClick={() => setSelectedIndex(i)}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
              <Image
                src={getImageSrc(item.image)}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <span className="text-white text-xs font-semibold tracking-wide">View Details</span>
              </div>
            </div>

            {/* Label */}
            <div className="mt-3 text-center">
              <span className="text-sm font-semibold text-[#1F2621] group-hover:text-[#0F6B3A] transition-colors duration-300">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        images={selectedIndex !== null ? [getImageSrc(items[selectedIndex].image)] : []}
        currentIndex={0}
        onNext={() => {}}
        onPrev={() => {}}
      />
    </>
  );
}

// ============================================
// Customization Card Component
// ============================================
function CustomizationCard({
  section,
  index,
}: {
  section: typeof customizationSections[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  // Product grid configuration based on section
  const getProductGrid = () => {
    switch (section.id) {
      case "substrate":
        return {
          items: [{ name: "MDF", image: "MDF" }, { name: "Plywood", image: "Plywood" }, { name: "OSB", image: "OSB" }, { name: "Particle", image: "particle board" }],
          basePath: "/images/custom-solutions/substrate",
        };
      case "veneer-species":
        return {
          items: [{ name: "Natural", image: "Naturl Wood Veneer" }, { name: "Engineered", image: "Engineered Wood Veneer" }, { name: "Dyed", image: "Dyed Wood Veneer" }, { name: "Smoked", image: "Smoked Wood Veneer" }],
          basePath: "/images/custom-solutions/veneer species",
        };
      case "veneer-matching":
        return {
          items: [{ name: "Book Match", image: "Book Match" }, { name: "Slip Match", image: "Slip Match" }, { name: "Mix Q_C", image: "Mix Match(Q_C)" }, { name: "Mix C_C", image: "Mix Match(C_C)" }],
          basePath: "/images/custom-solutions/Veneer Matching",
        };
      case "packaging":
        return {
          items: [{ name: "Standard", image: "Standard Packaging" }, { name: "Custom", image: "Custom Packaging" }, { name: "Bulk", image: "In bulk" }, { name: "Frame", image: "Wooden frame packaging" }],
          basePath: "/images/custom-solutions/Packaging",
        };
      case "surface-finish":
        return {
          items: [
            { name: "Closed Paint", image: "closed-paint.jpg" },
            { name: "Open Paint", image: "open-paint.jpg" },
            { name: "Semi-Open Paint", image: "semi-open-paint.jpg" },
            { name: "Water-based Paint", image: "water-based-paint.jpg" },
          ],
          basePath: "/images/custom-solutions/Surface finish",
        };
      case "size-thickness":
        return {
          items: [
            { name: "Formaldehyde Emission", image: "Formaldehyde Emission Class" },
            { name: "Substrate Size", image: "Substrate Size" },
            { name: "Substrate Thickness", image: "Substrate Thickness" },
            { name: "Veneer Thickness", image: "Veneer Thickness" },
          ],
          basePath: "/images/custom-solutions/Size & Thickness",
        };
      default:
        return null;
    }
  };

  const productGrid = getProductGrid();

  return (
    <div
      ref={cardRef}
      id={`section-${section.id}`}
      className={`relative ${isEven ? "" : "lg:flex-row-reverse"}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
        transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Section Divider - Top */}
      {index > 0 && (
        <div className="h-24 lg:h-32 relative overflow-hidden" style={{ background: `linear-gradient(to bottom, ${C.ivory}, ${C.white})` }}>
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="flex items-center gap-4 px-6 py-2 bg-white rounded-full shadow-lg">
              <div className="w-8 h-px" style={{ background: C.primary }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: C.primary }}>
                {section.subtitle}
              </span>
              <div className="w-8 h-px" style={{ background: C.primary }} />
            </div>
          </div>
        </div>
      )}

      {/* Full Width Grid */}
      <div className="grid lg:grid-cols-2 lg:items-stretch bg-white">

        {/* Left - Image */}
        <div className={`relative ${isEven ? "" : "lg:order-2"} h-full min-h-[400px] lg:min-h-[600px] xl:min-h-[700px]`}>
          <Image
            src={section.image}
            alt={section.title}
            fill
            className="object-cover object-center"
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

          {/* Decorative Corner */}
          <div className={`absolute top-0 ${isEven ? "left-0" : "right-0"} w-32 h-32`}>
            <div className={`absolute top-6 ${isEven ? "left-6" : "right-6"} w-24 h-24 border-l-2 border-t-2 border-white/30 rounded-tl-3xl`} />
          </div>

          {/* Index Badge - Floating */}
          <div className="absolute top-6 left-6 lg:top-8 lg:left-8 z-10">
            <div
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center font-black text-2xl lg:text-3xl text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
              style={{ background: "linear-gradient(135deg, #0F6B3A 0%, #124B34 100%)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          {/* Feature Tags */}
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8">
            <div className="flex flex-wrap gap-2">
              {section.features.slice(0, 3).map((feature, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-[#1F2621] rounded-full shadow-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div className={`flex flex-col ${isEven ? "" : "lg:order-1"}`} style={{ background: "linear-gradient(135deg, #FAFAF8 0%, #F5F3EE 100%)" }}>
          <div className="flex flex-col w-full h-full px-8 sm:px-12 lg:px-16 xl:px-20 py-10 sm:py-14 lg:py-20">

            {/* Subtitle with decorative line */}
            <div className="flex items-center gap-4 mb-6">
              <div className="hidden sm:block w-12 lg:w-16 h-px" style={{ background: `linear-gradient(to right, ${C.primary}, transparent)` }} />
              <span className="text-xs lg:text-sm font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em]" style={{ color: C.primary }}>
                {section.subtitle}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#1F2621] mb-6 leading-[1.1]">
              {section.title}
            </h2>

            {/* Description */}
            <p className="text-base lg:text-lg text-[#6b5d4d] mb-8 leading-relaxed max-w-xl">
              {section.description}
            </p>

            {/* Product Grid */}
            {productGrid ? (
              <ProductGrid
                sectionId={section.id}
                items={productGrid.items}
                basePath={productGrid.basePath}
              />
            ) : null}

          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// CTA Section Component
// ============================================
function CTASection() {
  return (
    <section
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${C.primaryDark} 0%, ${C.primary} 50%, ${C.primaryLight} 100%)` }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ctaGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-20 left-20 w-40 h-40 border border-white/10 rounded-full" />
      <div className="absolute bottom-20 right-20 w-60 h-60 border border-white/10 rounded-full" />
      <div className="absolute top-40 right-40 w-20 h-20 bg-white/5 rounded-full" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <span className="text-sm font-medium text-white/90">Let&apos;s Work Together</span>
        </div>

        <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
          Ready to Start Your<br />
          <span style={{ color: C.accentLight }}>Custom Project?</span>
        </h2>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-white/50" />
          <svg className="w-6 h-6 text-white/50" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-white/50" />
        </div>

        <p className="text-lg lg:text-xl text-white/70 max-w-xl mx-auto mb-12 leading-relaxed">
          Contact our team for tailored recommendations, samples, and quotations for your specific requirements.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          <Link
            href="/contact?type=custom"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{ color: C.primary }}
          >
            <span>Get Custom Quote</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contact?type=sample"
            className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 rounded-full font-bold text-base text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/60"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span>Request Samples</span>
          </Link>
        </div>
      </div>

      {/* Top Wave Decoration */}
      <div className="absolute top-0 left-0 right-0 h-16">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 w-full">
          <path d="M0 0V40C240 70 480 20 720 40C960 60 1200 20 1440 50V0H0Z" fill="#F7F3EC" />
        </svg>
      </div>
    </section>
  );
}

// ============================================
// Main Page Component
// ============================================
export default function CustomSolutionsPage() {
  return (
    <div style={{ background: C.ivory, color: C.charcoal, overflowX: "hidden" }}>
      {/* Hero Banner - Dark green with title */}
      <HeroBanner />

      {/* Customization Sections - Full Width */}
      <div>
        {customizationSections.map((section, index) => (
          <CustomizationCard
            key={section.id}
            section={section}
            index={index}
          />
        ))}
      </div>

      {/* CTA Section */}
      <CTASection />

      {/* Quick Links */}
      <section className="py-10" style={{ background: C.cream, borderTop: `1px solid ${C.border}` }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 text-center">
            <Link href="/products" className="group flex flex-col items-center gap-2 p-4 rounded-xl transition-colors hover:bg-white">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${C.primary}15` }}>
                <svg className="w-5 h-5" style={{ color: C.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#0F6B3A] transition-colors">View All Products</span>
            </Link>
            <Link href="/collections" className="group flex flex-col items-center gap-2 p-4 rounded-xl transition-colors hover:bg-white">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${C.primary}15` }}>
                <svg className="w-5 h-5" style={{ color: C.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#0F6B3A] transition-colors">Browse Collections</span>
            </Link>
            <Link href="/applications" className="group flex flex-col items-center gap-2 p-4 rounded-xl transition-colors hover:bg-white">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${C.primary}15` }}>
                <svg className="w-5 h-5" style={{ color: C.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#0F6B3A] transition-colors">Applications</span>
            </Link>
            <Link href="/contact" className="group flex flex-col items-center gap-2 p-4 rounded-xl transition-colors hover:bg-white">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: `${C.primary}15` }}>
                <svg className="w-5 h-5" style={{ color: C.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#0F6B3A] transition-colors">Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
