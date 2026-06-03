"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "@/components/ImageModal";

// Natural Wood Veneer swatches with image mapping
const swatches = [
  { name: "American White Oak C/C", code: "C/C", tone: "Light", species: "Oak", image: "T AMERICAN WHITE OAK C_C.jpg" },
  { name: "American White Oak Q/C", code: "Q/C", tone: "Light", species: "Oak", image: "T AMERICAN WHITE OAK Q_C.jpg" },
  { name: "American Maple", code: "T", tone: "Light", species: "Maple", image: "T AMERICAN MAPLE.jpg" },
  { name: "American Walnut", code: "T", tone: "Dark", species: "Walnut", image: "T AMERICAN WALNUT.jpg" },
  { name: "American White Ash", code: "T", tone: "Light", species: "Ash", image: "T AMERICAN WHITE ASH.jpg" },
  { name: "Chinese Cherry", code: "T", tone: "Warm", species: "Cherry", image: "T CHINESE CHERRY.jpg" },
  { name: "Smoked Oak C/C", code: "C/C", tone: "Smoked", species: "Oak", image: "SMOKED OAK C_C.jpg" },
  { name: "Smoked Oak Q/C", code: "Q/C", tone: "Smoked", species: "Oak", image: "SMOKED OAK Q_C.jpg" },
  { name: "Smoked European Oak Q/C", code: "Q/C", tone: "Smoked", species: "Oak", image: "SMOKED EUROPEAN OAK Q_C.jpg" },
  { name: "Smoked Figured Maple", code: "T", tone: "Smoked", species: "Maple", image: "SMOKED FIGURED MAPLE.jpg" },
  { name: "Smoked Serrated Oak 01", code: "T", tone: "Smoked", species: "Oak", image: "SMOKED SERRATED OAK 01.jpg" },
  { name: "Smoked Serrated Oak 02", code: "T", tone: "Smoked", species: "Oak", image: "SMOKED SERRATED OAK 02.jpg" },
  { name: "Smoked Bently Pine", code: "T", tone: "Smoked", species: "Pine", image: "SMOKED BENTLY PINE.jpg" },
  { name: "Steam Beech Q/C", code: "Q/C", tone: "Warm", species: "Beech", image: "STEAM BEECH Q_C.jpg" },
  { name: "Chinese Ash C/C", code: "C/C", tone: "Light", species: "Ash", image: "CHINESE ASH C_C.jpg" },
  { name: "Eucalyptus Q/C", code: "Q/C", tone: "Warm", species: "Eucalyptus", image: "EUCALYPTUS Q_C.jpg" },
  { name: "Rosewood C/C", code: "C/C", tone: "Dark", species: "Rosewood", image: "ROSEWOOD C_C.jpg" },
  { name: "Sapeli Pomelle", code: "T", tone: "Warm", species: "Sapele", image: "SAPELIPOMELLE.jpg" },
  { name: "Zebrano", code: "T", tone: "Dark", species: "Zebrano", image: "ZEBRANO.jpg" },
  { name: "Serrated Walnut", code: "T", tone: "Dark", species: "Walnut", image: "SERRATED WALNUT.jpg" },
  { name: "Serrated White Oak Q/C", code: "Q/C", tone: "Light", species: "Oak", image: "SERRATED WHITE OAK Q_C.jpg" },
  { name: "Golden Figured Wood", code: "T", tone: "Warm", species: "Figured", image: "GOLDENFIGURED WOOD.jpg" },
  { name: "Figured Aniegre", code: "T", tone: "Light", species: "Aniegre", image: "FIGURED ANIEGRE.jpg" },
  { name: "AyouS", code: "T", tone: "Light", species: "AyouS", image: "AYOUS.jpg" },
  { name: "Dyed Afromosia 01", code: "T", tone: "Dyed", species: "Afromosia", image: "DYED AFROMOSIA 01.jpg" },
  { name: "Dyed Afromosia 02", code: "T", tone: "Dyed", species: "Afromosia", image: "DYED AFROMOSIA 02.jpg" },
  { name: "Dyed Aniegre 01", code: "T", tone: "Dyed", species: "Aniegre", image: "DYED ANIEGRE 01.jpg" },
  { name: "Dyed Aniegre 02", code: "T", tone: "Dyed", species: "Aniegre", image: "DYED ANIEGRE 02.jpg" },
  { name: "Dyed Aniegre 03", code: "T", tone: "Dyed", species: "Aniegre", image: "DYED ANIEGRE 03.jpg" },
  { name: "Dyed Aniegre 04", code: "T", tone: "Dyed", species: "Aniegre", image: "DYED ANIEGRE 04.jpg" },
  { name: "Dyed AyouS 01", code: "T", tone: "Dyed", species: "AyouS", image: "DYED AYOUS 01.jpg" },
  { name: "Dyed Birdseye Maple 01", code: "T", tone: "Dyed", species: "Maple", image: "DYED BIRDSEYE MAPLE 01.jpg" },
  { name: "Dyed Birdseye Maple 02", code: "T", tone: "Dyed", species: "Maple", image: "DYED BIRDSEYE MAPLE 02.jpg" },
  { name: "Dyed Birdseye Maple 03", code: "T", tone: "Dyed", species: "Maple", image: "DYED BIRDSEYE MAPLE 03.jpg" },
  { name: "Dyed Birdseye Maple 04", code: "T", tone: "Dyed", species: "Maple", image: "DYED BIRDSEYE MAPLE 04.jpg" },
  { name: "Dyed Birdseye Maple 05", code: "T", tone: "Dyed", species: "Maple", image: "DYED BIRDSEYE MAPLE O5.jpg" },
  { name: "Dyed Boxwood C/C 01", code: "C/C", tone: "Dyed", species: "Boxwood", image: "DYED BOXWOOD C_C 01.jpg" },
  { name: "Dyed Boxwood C/C 02", code: "C/C", tone: "Dyed", species: "Boxwood", image: "DYED BOXWOOD C_C 02.jpg" },
  { name: "Dyed Boxwood C/C 03", code: "C/C", tone: "Dyed", species: "Boxwood", image: "DYED BOXWOOD C_C 03.jpg" },
  { name: "Dyed Boxwood C/C 04", code: "C/C", tone: "Dyed", species: "Boxwood", image: "DYED BOXWOOD C_C 04.jpg" },
  { name: "Dyed Boxwood C/C 05", code: "C/C", tone: "Dyed", species: "Boxwood", image: "DYED BOXWOOD C_C 05.jpg" },
  { name: "Dyed Boxwood Q/C 01", code: "Q/C", tone: "Dyed", species: "Boxwood", image: "DYED BOXWOOD Q_C 01.jpg" },
  { name: "Dyed Boxwood Q/C 02", code: "Q/C", tone: "Dyed", species: "Boxwood", image: "DYED BOXWOOD Q_C 02.jpg" },
  { name: "Dyed Boxwood Q/C 03", code: "Q/C", tone: "Dyed", species: "Boxwood", image: "DYED BOXWOOD Q_C 03.jpg" },
  { name: "Dyed Eucalyptus 01", code: "T", tone: "Dyed", species: "Eucalyptus", image: "DYED EUCALYPTUS 01.jpg" },
  { name: "Dyed Eucalyptus 02", code: "T", tone: "Dyed", species: "Eucalyptus", image: "DYED EUCALYPTUS 02.jpg" },
  { name: "Dyed Eucalyptus 04", code: "T", tone: "Dyed", species: "Eucalyptus", image: "DYED EUCALYPTUS 04.jpg" },
  { name: "Dyed Figured Maple 01", code: "T", tone: "Dyed", species: "Maple", image: "DYED FIGURED MAPLE 01.jpg" },
  { name: "Dyed Figured Maple 02", code: "T", tone: "Dyed", species: "Maple", image: "DYED FIGURED MAPLE 02.jpg" },
  { name: "Dyed Figured Maple 03", code: "T", tone: "Dyed", species: "Maple", image: "DYED FIGURED MAPLE 03.jpg" },
  { name: "Dyed Figured Maple 04", code: "T", tone: "Dyed", species: "Maple", image: "DYED FIGURED MAPLE 04.jpg" },
  { name: "Dyed Frenchlacewood 01", code: "T", tone: "Dyed", species: "Lacewood", image: "DYED FRENCHLACEWOOD 01.jpg" },
  { name: "Dyed Frenchlacewood 02", code: "T", tone: "Dyed", species: "Lacewood", image: "DYED FRENCHLACEWOOD 02.jpg" },
  { name: "Dyed Frenchlacewood 03", code: "T", tone: "Dyed", species: "Lacewood", image: "DYED FRENCHLACEWOOD 03.jpg" },
  { name: "Dyed Koto 01", code: "T", tone: "Dyed", species: "Koto", image: "DYED KOTO 01.jpg" },
  { name: "Dyed Lacewood 02", code: "T", tone: "Dyed", species: "Lacewood", image: "DYED LACEWOOD 02.jpg" },
  { name: "Dyed Lacewood 03", code: "T", tone: "Dyed", species: "Lacewood", image: "DYEDLACEWOOD 03.jpg" },
  { name: "Dyed Maple 01", code: "T", tone: "Dyed", species: "Maple", image: "DYED MAPLE 01.jpg" },
  { name: "Dyed Oak C/C 02", code: "C/C", tone: "Dyed", species: "Oak", image: "DYED OAK C_C02.jpg" },
  { name: "Dyed Oak Q/C 01", code: "Q/C", tone: "Dyed", species: "Oak", image: "DYED OAK Q_C 01.jpg" },
  { name: "Dyed Oak Q/C 02", code: "Q/C", tone: "Dyed", species: "Oak", image: "DYED OAK Q_C 02.jpg" },
  { name: "Dyed Oak Q/C 04", code: "Q/C", tone: "Dyed", species: "Oak", image: "DYED OAK Q_C 04.jpg" },
  { name: "Dyed Oak Q/C 05", code: "Q/C", tone: "Dyed", species: "Oak", image: "DYED OAK Q_C 05.jpg" },
  { name: "Dyed Pecan C/C 01", code: "C/C", tone: "Dyed", species: "Pecan", image: "DYED PECAN C_C 01.jpg" },
  { name: "Dyed Pecan C/C 02", code: "C/C", tone: "Dyed", species: "Pecan", image: "DYED PECAN C_C 02.jpg" },
  { name: "Dyed Red Figured Wood 01", code: "T", tone: "Dyed", species: "Figured", image: "DYED RED FIGURED WOOD 01.jpg" },
  { name: "Dyed Walnut C/C 01", code: "C/C", tone: "Dyed", species: "Walnut", image: "DYED WALNUT C_C 01.jpg" },
  { name: "Dyed Walnut C/C 02", code: "C/C", tone: "Dyed", species: "Walnut", image: "DYED WALNUT C_C 02.jpg" },
  { name: "Dyed Walnut C/C 04", code: "C/C", tone: "Dyed", species: "Walnut", image: "DYED WALNUT C_C 04.jpg" },
  { name: "Dyed Wenge C/C 01", code: "C/C", tone: "Dyed", species: "Wenge", image: "DYED WENGE C_C 01.jpg" },
  { name: "Dyed Wenge C/C 02", code: "C/C", tone: "Dyed", species: "Wenge", image: "DYED WENGE C_C 02.jpg" },
  { name: "Dyed Wenge Q/C 01", code: "Q/C", tone: "Dyed", species: "Wenge", image: "DYED WENGE Q_C 01.jpg" },
  { name: "Dyed Wenge Q/C 02", code: "Q/C", tone: "Dyed", species: "Wenge", image: "DYED WENGE Q_C 02.jpg" },
  { name: "Dyed White Ash C/C 01", code: "C/C", tone: "Dyed", species: "Ash", image: "DYED WHITE ASH C_C 01.jpg" },
  { name: "Dyed White Ash C/C 02", code: "C/C", tone: "Dyed", species: "Ash", image: "DYED WHITE ASH C_C 02.jpg" },
  { name: "Dyed White Ash C/C 03", code: "C/C", tone: "Dyed", species: "Ash", image: "DYED WHITE ASH C_C 03.jpg" },
  { name: "Dyed White Ash C/C 04", code: "C/C", tone: "Dyed", species: "Ash", image: "DYED WHITE ASH C_C 04.jpg" },
  { name: "Dyed White Ash C/C 05", code: "C/C", tone: "Dyed", species: "Ash", image: "DYED WHITE ASH C_C 05.jpg" },
  { name: "Dyed White Ash C/C 06", code: "C/C", tone: "Dyed", species: "Ash", image: "DYED WHITE ASH C_C 06.jpg" },
  { name: "Dyed White Ash Q/C 01", code: "Q/C", tone: "Dyed", species: "Ash", image: "DYED WHITE ASH Q_C 01.jpg" },
  { name: "Dyed White Ash Q/C 02", code: "Q/C", tone: "Dyed", species: "Ash", image: "DYED WHITE ASH Q_C02.jpg" },
  { name: "Dyed White Ash Q/C 04", code: "Q/C", tone: "Dyed", species: "Ash", image: "DYED WHITE ASH Q_C 04.jpg" },
  { name: "Dyed White Ivory 01", code: "T", tone: "Dyed", species: "Ivory", image: "DYED WHITE IVORY 01.jpg" },
  { name: "Dyed White Ivory 02", code: "T", tone: "Dyed", species: "Ivory", image: "DYED WHITE IVORY 02.jpg" },
];

const productForms = [
  "Natural Veneer Sheet",
  "Wood Veneer Panel",
  "Veneer Plywood",
  "Veneer MDF",
  "Veneer Edge Banding",
];

const applications = [
  { name: "Furniture", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" },
  { name: "Doors", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
  { name: "Cabinets", icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
  { name: "Wall Panels", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { name: "Hotel Interiors", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
];

const relatedProducts = [
  { name: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
  { name: "Engineered Wood Veneer", href: "/products/engineered-wood-veneer" },
  { name: "Veneer Edge Banding", href: "/products/veneer-edge-banding" },
];

const faqs = [
  {
    q: "What is the thickness of your natural wood veneer?",
    a: "Our natural wood veneer typically ranges from 0.15mm to 3mm thickness. Standard thickness for lamination is 0.5mm-0.6mm. Custom thicknesses available for specific applications."
  },
  {
    q: "Can I request samples of specific wood species?",
    a: "Yes, you can request samples of any veneer in our collection. Click the 'Request Sample' button on the swatch card or contact us with the code number (e.g., TLO-001 for Natural Oak)."
  },
  {
    q: "Do natural veneers have color variations?",
    a: "Yes, natural wood veneer exhibits inherent color and grain variations as each sheet comes from real wood. This is part of its authentic character. We recommend ordering all materials for a project from the same batch."
  },
  {
    q: "How should I store natural wood veneer?",
    a: "Store veneer sheets flat in a climate-controlled environment (ideally 40-60% humidity) away from direct sunlight. Keep sheets covered to prevent warping or moisture absorption."
  },
];

export default function NaturalWoodVeneerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [toneFilter, setToneFilter] = useState<string | null>(null);
  const [selectedSwatch, setSelectedSwatch] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tones = ["Light", "Warm", "Dark", "Smoked", "Dyed"];
  
  const filteredSwatches = toneFilter 
    ? swatches.filter(s => s.tone === toneFilter)
    : swatches;

  const handleOpenModal = (swatchIndex: number) => {
    setSelectedSwatch(swatchIndex);
    setSelectedImageIndex(0);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSwatch(null);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % 4);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + 4) % 4);
  };

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
            <Link href="/collections" className="hover:text-[#0F6B3A]">Collections</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1F2621] font-medium">Natural Wood Veneer</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-[#8B5E3C] to-[#6B4A2C] py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="text-white/60 text-sm font-medium tracking-wider uppercase">Collection</span>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">Natural Wood Veneer</h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Authentic wood veneer sheets with natural grain patterns, organic textures, and unique color variations. Each piece showcases the genuine beauty of real wood.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/contact?type=sample" 
                  className="px-6 py-3 bg-white text-[#8B5E3C] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
                >
                  Request Samples
                </Link>
                <Link 
                  href="/contact?type=inquiry" 
                  className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Send Inquiry
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-3 gap-3">
                {["#D4A574", "#C49A6C", "#B8956F", "#A67B5B", "#8B6914", "#704214"].map((color, i) => (
                  <div 
                    key={i}
                    className="aspect-square rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform"
                    style={{ backgroundColor: color }}
                    onClick={() => handleOpenModal(-1)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-4">About Natural Wood Veneer</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Natural wood veneer is sliced from real hardwood logs, preserving the authentic grain patterns, color variations, and organic textures unique to each species. Ideal for premium furniture, interior decoration, and architectural applications where the genuine character of wood is valued.
            </p>
          </div>
        </div>
      </section>

      {/* Collection Gallery */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          {/* Tone Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setToneFilter(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !toneFilter ? 'bg-[#0F6B3A] text-white' : 'bg-white text-[#1F2621] border border-[#E5E1D8]'
              }`}
            >
              All ({swatches.length})
            </button>
            {tones.map((tone) => (
              <button
                key={tone}
                onClick={() => setToneFilter(toneFilter === tone ? null : tone)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  toneFilter === tone ? 'bg-[#0F6B3A] text-white' : 'bg-white text-[#1F2621] border border-[#E5E1D8]'
                }`}
              >
                {tone} ({swatches.filter(s => s.tone === tone).length})
              </button>
            ))}
          </div>

          {/* Swatch Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredSwatches.map((swatch, index) => (
              <div 
                key={`${swatch.name}-${index}`}
                className="group bg-white rounded-xl border border-[#E5E1D8] overflow-hidden hover:border-[#0F6B3A]/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Swatch Image - Clickable for lightbox */}
                <div 
                  className="aspect-square relative cursor-pointer overflow-hidden bg-[#F5F0E8]"
                  onClick={() => handleOpenModal(index)}
                >
                  <Image
                    src={`/images/collections/natural-wood-veneer/${swatch.image}`}
                    alt={swatch.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  
                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-[#0F6B3A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <svg className="w-6 h-6 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Swatch Info */}
                <div className="p-3">
                  <h3 className="font-semibold text-[#1F2621] text-xs line-clamp-1 mb-1">{swatch.name}</h3>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] text-[#0F6B3A] font-mono">{swatch.code}</span>
                    <span className="px-1.5 py-0.5 bg-[#F7F3EC] rounded text-[10px] text-[#6b7280]">{swatch.tone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 border-2 border-[#E5E1D8] text-[#1F2621] rounded-lg font-semibold hover:border-[#0F6B3A] hover:text-[#0F6B3A] transition-colors">
              Load More ({swatches.length} items)
            </button>
          </div>
        </div>
      </section>

      {/* Available Product Forms */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-2">Available Product Forms</h2>
            <p className="text-[#6b7280]">These collections are available in the following product formats</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {productForms.map((form) => (
              <span 
                key={form}
                className="px-6 py-3 bg-[#F7F3EC] rounded-full text-sm font-medium text-[#1F2621]"
              >
                {form}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Available Applications */}
      <section className="py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-2">Suitable Applications</h2>
            <p className="text-[#6b7280]">Perfect for these interior and furniture applications</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {applications.map((app) => (
              <Link
                key={app.name}
                href="/applications"
                className="group bg-white rounded-xl p-6 text-center border border-[#E5E1D8] hover:border-[#0F6B3A]/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[#F7F3EC] flex items-center justify-center group-hover:bg-[#0F6B3A]/10 transition-colors">
                  <svg className="w-6 h-6 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={app.icon} />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#1F2621]">{app.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Request Samples CTA */}
      <section className="py-16 bg-[#8B5E3C]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Physical Samples?</h2>
            <p className="text-white/80 mb-8">
              Request samples by code number (e.g., TLO-001 for Natural Oak) to evaluate colors, grains, and textures before ordering.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact?type=sample" 
                className="px-8 py-4 bg-white text-[#8B5E3C] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
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

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-2">Related Products</h2>
            <p className="text-[#6b7280]">View products made with natural wood veneer</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedProducts.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="px-6 py-3 bg-[#F7F3EC] rounded-lg text-sm font-medium text-[#1F2621] hover:bg-[#0F6B3A]/10 hover:text-[#0F6B3A] transition-colors"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1F2621]">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl border border-[#E5E1D8] overflow-hidden"
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

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        images={selectedSwatch !== null ? [`/images/collections/natural-wood-veneer/${swatches[selectedSwatch].image}`] : ["/images/placeholder.jpg"]}
        currentIndex={selectedImageIndex}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </>
  );
}
