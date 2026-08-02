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

export default function NaturalWoodVeneerPage() {
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
          <div className="max-w-3xl">
            <span className="text-white/60 text-sm font-medium tracking-wider uppercase">Collection</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-2 mb-4 text-white">Natural Wood Veneer</h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Sliced from real hardwood logs, each sheet preserves the authentic grain patterns, organic textures, and unique color variations of its species. Browse the full style library below.
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
        </div>
      </section>

      {/* Request Samples CTA */}
      <section className="py-16 bg-[#8B5E3C]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Physical Samples?</h2>
            <p className="text-white/80 mb-8">
              Request samples by code number to evaluate colors, grains, and textures before placing your order.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact?type=sample" 
                className="px-8 py-4 bg-white text-[#8B5E3C] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
              >
                Request Samples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        images={selectedSwatch !== null ? [`/images/collections/natural-wood-veneer/${swatches[selectedSwatch].image}`] : ["/images/banner-bg.png"]}
        currentIndex={selectedImageIndex}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </>
  );
}
