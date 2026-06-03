"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

// Swatch scrollable gallery component with seamless infinite scroll
function SwatchGallery({ 
  swatches, 
  collectionId, 
  color,
  viewAllHref,
  scrollDirection = 'left' // 'left' = scroll left, 'right' = scroll right
}: { 
  swatches: Array<{ name: string; code: string; bg: string; image?: string }>;
  collectionId: string;
  color: string;
  viewAllHref: string;
  scrollDirection?: 'left' | 'right';
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const animationRef = useRef<number>(0);
  const positionRef = useRef(0);
  const lastTimeRef = useRef<number>(0);
  const contentWidthRef = useRef(0);

  const scrollSpeed = 0.8; // pixels per frame
  const direction = scrollDirection === 'right' ? -1 : 1;

  const animate = useCallback((timestamp: number) => {
    if (!scrollRef.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    if (!lastTimeRef.current) {
      lastTimeRef.current = timestamp;
    }

    if (!isPaused) {
      const deltaTime = timestamp - lastTimeRef.current;
      positionRef.current += scrollSpeed * direction * (deltaTime / 16);

      const contentWidth = scrollRef.current.scrollWidth / 2;
      if (contentWidthRef.current !== contentWidth) {
        contentWidthRef.current = contentWidth;
      }

      // Reset position when scrolled past half (seamless loop)
      if (positionRef.current >= contentWidthRef.current) {
        positionRef.current = positionRef.current - contentWidthRef.current;
      } else if (positionRef.current < 0) {
        positionRef.current = positionRef.current + contentWidthRef.current;
      }

      scrollRef.current.scrollLeft = positionRef.current;
    } else {
      positionRef.current = scrollRef.current.scrollLeft;
    }

    lastTimeRef.current = timestamp;
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, scrollSpeed, direction]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  const openModal = (image?: string) => {
    setSelectedImage(image || null);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="p-6">
        <div className="relative overflow-hidden">
          {/* Scrollable container with JS-controlled infinite scroll */}
          <div 
            className="overflow-x-auto pb-4"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            ref={scrollRef}
          >
            <div className="flex gap-6 w-max">
              {/* Left spacer */}
              <div className="w-4 flex-shrink-0" />
              
              {/* Duplicate swatches for seamless infinite scroll */}
              {[...swatches, ...swatches].map((swatch, index) => (
                <div 
                  key={`${swatch.code}-${index}`}
                  className="flex-shrink-0 cursor-pointer group"
                  onClick={() => openModal(swatch.image)}
                >
                  <div className={`w-56 h-56 rounded-2xl overflow-hidden relative shadow-md group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500`}>
                    {swatch.image ? (
                      <Image
                        src={swatch.image}
                        alt={swatch.name}
                        fill
                        className="object-cover"
                        sizes="224px"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${swatch.bg}`} />
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-xl">
                        <svg className="w-7 h-7 text-[#1F2621]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="font-semibold text-[#1F2621] text-sm">{swatch.name}</p>
                    <p className="text-xs text-[#6b7280] font-mono mt-1">{swatch.code}</p>
                  </div>
                </div>
              ))}

              {/* View All Card */}
              <div className="flex-shrink-0">
                <Link
                  href={viewAllHref}
                  className="block w-56 h-56 rounded-2xl border-2 border-dashed border-[#E5E1D8] hover:border-[#0F6B3A] bg-white hover:bg-[#F7F3EC]/30 transition-all duration-300 flex items-center justify-center group"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-[#F7F3EC] flex items-center justify-center mb-4 group-hover:bg-[#0F6B3A]/10 transition-colors">
                      <svg className="w-8 h-8 text-[#6b7280] group-hover:text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <span className="text-base font-semibold text-[#6b7280] group-hover:text-[#0F6B3A]">View All</span>
                    <p className="text-sm text-[#9CA3AF] mt-1">+93 More Styles</p>
                  </div>
                </Link>
                <div className="mt-4 text-center">
                  <p className="font-semibold text-[#1F2621] text-sm">Explore</p>
                  <p className="text-xs text-[#6b7280] mt-1">More Options</p>
                </div>
              </div>
              
              {/* Right spacer */}
              <div className="w-4 flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-10 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-[70vw] h-[60vh] max-w-5xl max-h-[80vh] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={selectedImage}
                alt="Material Preview"
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .swatch-scroll::-webkit-scrollbar {
          display: none;
        }
        .swatch-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}

// Collection categories data
const collections = [
  {
    id: "natural-wood-veneer",
    shortName: "Natural Wood",
    description: "Authentic wood veneer sheets with natural grain patterns, color variations, and organic textures from real wood species.",
    features: ["Natural Grain", "Unique Patterns", "Color Variation"],
    color: "#8B5E3C",
    bgColor: "from-[#8B5E3C] to-[#6B4A2C]",
    scrollDirection: "left" as const,
    swatches: [
      { name: "American White Oak C/C", code: "C/C", bg: "from-[#D4A574] to-[#C49A6C]", image: "/images/collections/natural-wood-veneer/T AMERICAN WHITE OAK C_C.jpg" },
      { name: "American White Oak Q/C", code: "Q/C", bg: "from-[#C49A6C] to-[#B8956F]", image: "/images/collections/natural-wood-veneer/T AMERICAN WHITE OAK Q_C.jpg" },
      { name: "American Walnut", code: "T", bg: "from-[#8B6914] to-[#704214]", image: "/images/collections/natural-wood-veneer/T AMERICAN WALNUT.jpg" },
      { name: "American Maple", code: "T", bg: "from-[#E8D4B8] to-[#D4C4B0]", image: "/images/collections/natural-wood-veneer/T AMERICAN MAPLE.jpg" },
      { name: "Smoked Oak Q/C", code: "Q/C", bg: "from-[#6B4A2C] to-[#4A3520]", image: "/images/collections/natural-wood-veneer/SMOKED OAK Q_C.jpg" },
      { name: "Smoked European Oak Q/C", code: "Q/C", bg: "from-[#8B7355] to-[#705F45]", image: "/images/collections/natural-wood-veneer/SMOKED EUROPEAN OAK Q_C.jpg" },
      { name: "Steam Beech Q/C", code: "Q/C", bg: "from-[#B8956F] to-[#A67B5B]", image: "/images/collections/natural-wood-veneer/STEAM BEECH Q_C.jpg" },
      { name: "Chinese Ash C/C", code: "C/C", bg: "from-[#D4C4B0] to-[#C4A77D]", image: "/images/collections/natural-wood-veneer/CHINESE ASH C_C.jpg" },
    ],
  },
  {
    id: "engineered-veneer",
    shortName: "Engineered",
    description: "Reconstituted veneer with 100+ consistent patterns, stable colors, and uniform textures for large-scale production.",
    features: ["300+ Patterns", "Color Stable", "Batch Consistent"],
    color: "#0F6B3A",
    bgColor: "from-[#0F6B3A] to-[#124B34]",
    scrollDirection: "right" as const,
    swatches: [
      { name: "TL-H-1212", code: "TL-H-1212", bg: "from-[#C4A77D] to-[#A68B5B]", image: "/images/collections/engineered-wood-veneer/TL-H-1212.jpg" },
      { name: "TL-H-1216", code: "TL-H-1216", bg: "from-[#8B7355] to-[#705F45]", image: "/images/collections/engineered-wood-veneer/TL-H-1216.jpg" },
      { name: "TL-H-1700", code: "TL-H-1700", bg: "from-[#D4C4B0] to-[#C4A77D]", image: "/images/collections/engineered-wood-veneer/TL-H-1700.jpg" },
      { name: "TL-H-1712C", code: "TL-H-1712C", bg: "from-[#A0826D] to-[#8B7355]", image: "/images/collections/engineered-wood-veneer/TL-H-1712C.jpg" },
      { name: "TL-H-2206C", code: "TL-H-2206C", bg: "from-[#654321] to-[#4A3018]", image: "/images/collections/engineered-wood-veneer/TL-H-2206C.jpg" },
      { name: "TL-H-3166N", code: "TL-H-3166N", bg: "from-[#B8956F] to-[#A67B5B]", image: "/images/collections/engineered-wood-veneer/TL-H-3166N.jpg" },
      { name: "TL-H-3204", code: "TL-H-3204", bg: "from-[#E8D4B8] to-[#D4C4B0]", image: "/images/collections/engineered-wood-veneer/TL-H-3204.jpg" },
      { name: "TL-H-YGW1", code: "TL-H-YGW1", bg: "from-[#D4B896] to-[#C4A77D]", image: "/images/collections/engineered-wood-veneer/TL-H-YGW1.jpg" },
    ],
  },
  {
    id: "melamine-board",
    shortName: "Melamine",
    description: "Modern melamine-faced surfaces in wood grain, solid colors, and contemporary textures for cabinets and furniture.",
    features: ["Modern Finishes", "Durable Surface", "Cost Effective"],
    color: "#124B34",
    bgColor: "from-[#124B34] to-[#0F6B3A]",
    scrollDirection: "left" as const,
    swatches: [
      { name: "TLC-B2342", code: "TLC-B2342", bg: "from-[#D4C4B0] to-[#C4A77D]", image: "/images/collections/melamine-board/TLC-B2342.jpg" },
      { name: "TLC-MY", code: "TLC-MY", bg: "from-[#8B7355] to-[#705F45]", image: "/images/collections/melamine-board/TLC-MY.jpg" },
      { name: "TLC-YMW", code: "TLC-YMW", bg: "from-[#A0826D] to-[#8B7355]", image: "/images/collections/melamine-board/TLC-YMW.jpg" },
      { name: "TLF-9075SS", code: "TLF-9075SS", bg: "from-[#C4C4C4] to-[#A0A0A0]", image: "/images/collections/melamine-board/TLF-9075SS.jpg" },
      { name: "TLQ-BGLB", code: "TLQ-BGLB", bg: "from-[#E8E8E8] to-[#D4D4D4]", image: "/images/collections/melamine-board/TLQ-BGLB.jpg" },
      { name: "TLC-AGKSL", code: "TLC-AGKSL", bg: "from-[#C49A6C] to-[#B8956F]", image: "/images/collections/melamine-board/TLC-AGKSL.jpg" },
      { name: "TLF-9078DK", code: "TLF-9078DK", bg: "from-[#2C2C2C] to-[#1A1A1A]", image: "/images/collections/melamine-board/TLF-9078DK.jpg" },
      { name: "TLQ-KBDS", code: "TLQ-KBDS", bg: "from-[#F5F5F5] to-[#E8E8E8]", image: "/images/collections/melamine-board/TLQ-KBDS.jpg" },
    ],
  },
];

// Surface guide data
const surfaceGuide = [
  {
    title: "Grain & Tone",
    description: "Natural wood offers unique grain variations; engineered veneer provides consistent patterns; melamine offers uniform modern finishes.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z",
  },
  {
    title: "Production Consistency",
    description: "Engineered veneer excels in batch-to-batch consistency. Natural veneer brings authentic character. Melamine ensures color uniformity.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Suitable Application",
    description: "Natural for premium furniture and feature pieces. Engineered for large-scale manufacturing. Melamine for modern cabinetry and office furniture.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
];

// Applications data
const applications = [
  { name: "Furniture", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" },
  { name: "Doors", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
  { name: "Cabinets", icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
  { name: "Wall Panels", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
];

// FAQ data
const faqs = [
  {
    q: "How do I request samples?",
    a: "Click the 'Request Sample' button on any swatch card. We'll send you physical material samples by mail. Please include your project details and required quantity in the inquiry."
  },
  {
    q: "Can I get custom colors or patterns?",
    a: "Yes, we offer custom color matching and pattern development for bulk orders. Contact our team with your reference samples or color specifications."
  },
  {
    q: "What's the minimum order quantity for samples?",
    a: "Sample orders typically start from 1-5 sheets per item. Sample fees are usually refundable upon confirmation of bulk orders."
  },
  {
    q: "How do I maintain color consistency across batches?",
    a: "We recommend ordering all materials for a project in one batch. For extended projects, we can reserve inventory to ensure color matching across deliveries."
  },
];

export default function CollectionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#F7F3EC] py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-[#6b7280]">
            <Link href="/" className="hover:text-[#0F6B3A]">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1F2621] font-medium">Collections</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#0F6B3A] via-[#124B34] to-[#0a1a12] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <span className="w-2 h-2 bg-[#4C8A68] rounded-full animate-pulse" />
              <span className="text-white/80 text-sm font-medium tracking-wide">Material Library</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Wood Veneer & Decorative
              <span className="block text-[#4C8A68]">Surface Collections</span>
            </h1>
            
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              Browse our material library of natural wood veneer, engineered veneer, and melamine surfaces. Compare colors, grains, textures, and finishes for your next project.
            </p>
            
            <Link 
              href="#collections" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0F6B3A] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-all duration-300"
            >
              <span>Explore Collections</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Collection Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-6">
              Our Material Collections
            </h2>
            <p className="text-[#6b7280] text-lg leading-relaxed">
              Our collections help buyers, designers, and manufacturers compare wood grains, colors, textures, and decorative surfaces before production. Select your preferred materials and request physical samples for your project.
            </p>
          </div>
        </div>
      </section>

      {/* Collection Rows */}
      <section id="collections" className="py-12 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="space-y-10">
            {collections.map((collection, index) => (
              <div 
                key={collection.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Collection Header */}
                <div className={`bg-gradient-to-r ${collection.bgColor} px-8 py-6`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                          {index + 1}
                        </span>
                        <h3 className="text-2xl font-bold">{collection.shortName}</h3>
                      </div>
                      <p className="text-white/80 text-sm max-w-xl">{collection.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      {collection.features.map((feature) => (
                        <span key={feature} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                          {feature}
                        </span>
                      ))}
                      <Link
                        href={`/collections/${collection.id}`}
                        className="ml-4 px-6 py-2 bg-white text-[#1F2621] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors text-sm"
                      >
                        View All
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Swatch Gallery with Scroll Buttons */}
                <SwatchGallery 
                  swatches={collection.swatches}
                  collectionId={collection.id}
                  color={collection.color}
                  viewAllHref={`/collections/${collection.id}`}
                  scrollDirection={collection.scrollDirection}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose Surface */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#8B5E3C] text-sm font-semibold tracking-widest uppercase mb-4">Surface Guide</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2621]">How to Choose the Right Surface</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {surfaceGuide.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#F7F3EC] flex items-center justify-center group-hover:bg-[#0F6B3A] transition-colors duration-300">
                  <svg className="w-10 h-10 text-[#0F6B3A] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1F2621] mb-3">{item.title}</h3>
                <p className="text-[#6b7280] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Inspiration */}
      <section className="py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-[#8B5E3C] text-sm font-semibold tracking-widest uppercase mb-4">Applications</span>
            <h2 className="text-3xl font-bold text-[#1F2621]">Surface Applications</h2>
            <p className="text-[#6b7280] mt-4">See how our materials transform different project types</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {applications.map((app) => (
              <Link
                key={app.name}
                href="/applications"
                className="group bg-white rounded-2xl p-8 text-center border border-[#E5E1D8] hover:border-[#0F6B3A]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-[#F7F3EC] flex items-center justify-center group-hover:bg-[#0F6B3A]/10 transition-colors">
                  <svg className="w-8 h-8 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={app.icon} />
                  </svg>
                </div>
                <span className="font-semibold text-[#1F2621] group-hover:text-[#0F6B3A] transition-colors">
                  {app.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sample CTA */}
      <section className="py-20 bg-[#0F6B3A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F6B3A]/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4C8A68]/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Need Samples for Your Project?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
              Request physical material samples to evaluate colors, grains, and textures before placing your order.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact?type=sample" 
                className="px-8 py-4 bg-white text-[#0F6B3A] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
              >
                Request Samples
              </Link>
              <Link 
                href="/contact?type=inquiry" 
                className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Send Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[#8B5E3C] text-sm font-semibold tracking-widest uppercase mb-4">FAQ</span>
              <h2 className="text-3xl font-bold text-[#1F2621]">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-[#FDFBF7] rounded-xl border border-[#E5E1D8] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-[#1F2621] hover:text-[#0F6B3A] transition-colors"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <svg 
                      className={`w-5 h-5 text-[#0F6B3A] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-48' : 'max-h-0'}`}>
                    <div className="px-6 pb-6 text-[#6b7280] leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-[#FDFBF7] border-t border-[#E5E1D8]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Link href="/products" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#0F6B3A]">View All Products</span>
            </Link>
            <Link href="/custom-solutions" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#0F6B3A]">Custom Solutions</span>
            </Link>
            <Link href="/about" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#0F6B3A]">About Factory</span>
            </Link>
            <Link href="/contact" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#0F6B3A]">Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
