"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "@/components/ImageModal";

// Engineered Wood Veneer swatches - 101 styles from D:\...\public\images\collections\engineered-wood-veneer
const swatches = [
  { name: "TL-H-1", code: "TL-H-1", tone: "Light", image: "TL-H-1.jpg" },
  { name: "TL-H-2", code: "TL-H-2", tone: "Light", image: "TL-H-2.jpg" },
  { name: "TL-H-3", code: "TL-H-3", tone: "Light", image: "TL-H-3.jpg" },
  { name: "TL-H-4", code: "TL-H-4", tone: "Light", image: "TL-H-4.jpg" },
  { name: "TL-H-5", code: "TL-H-5", tone: "Light", image: "TL-H-5.jpg" },
  { name: "TL-H-232", code: "TL-H-232", tone: "Light", image: "TL-H-232.jpg" },
  { name: "TL-H-360", code: "TL-H-360", tone: "Light", image: "TL-H-360.jpg" },
  { name: "TL-H-362", code: "TL-H-362", tone: "Light", image: "TL-H-362.jpg" },
  { name: "TL-H-438", code: "TL-H-438", tone: "Light", image: "TL-H-438.jpg" },
  { name: "TL-H-454C", code: "TL-H-454C", tone: "Light", image: "TL-H-454C.jpg" },
  { name: "TL-H-468C", code: "TL-H-468C", tone: "Light", image: "TL-H-468C.jpg" },
  { name: "TL-H-490C", code: "TL-H-490C", tone: "Light", image: "TL-H-490C.jpg" },
  { name: "TL-H-801N", code: "TL-H-801N", tone: "Light", image: "TL-H-801N.jpg" },
  { name: "TL-H-817N", code: "TL-H-817N", tone: "Light", image: "TL-H-817N.jpg" },
  { name: "TL-H-831N", code: "TL-H-831N", tone: "Light", image: "TL-H-831N.jpg" },
  { name: "TL-H-863N", code: "TL-H-863N", tone: "Light", image: "TL-H-863N.jpg" },
  { name: "TL-H-900", code: "TL-H-900", tone: "Light", image: "TL-H-900.jpg" },
  { name: "TL-H-906", code: "TL-H-906", tone: "Light", image: "TL-H-906.jpg" },
  { name: "TL-H-908", code: "TL-H-908", tone: "Light", image: "TL-H-908.jpg" },
  { name: "TL-H-910", code: "TL-H-910", tone: "Light", image: "TL-H-910.jpg" },
  { name: "TL-H-916", code: "TL-H-916", tone: "Light", image: "TL-H-916.jpg" },
  { name: "TL-H-918", code: "TL-H-918", tone: "Light", image: "TL-H-918.jpg" },
  { name: "TL-H-920", code: "TL-H-920", tone: "Light", image: "TL-H-920.jpg" },
  { name: "TL-H-1212", code: "TL-H-1212", tone: "Light", image: "TL-H-1212.jpg" },
  { name: "TL-H-1216", code: "TL-H-1216", tone: "Light", image: "TL-H-1216.jpg" },
  { name: "TL-H-1700", code: "TL-H-1700", tone: "Light", image: "TL-H-1700.jpg" },
  { name: "TL-H-1701", code: "TL-H-1701", tone: "Light", image: "TL-H-1701.jpg" },
  { name: "TL-H-1702", code: "TL-H-1702", tone: "Light", image: "TL-H-1702.jpg" },
  { name: "TL-H-1708", code: "TL-H-1708", tone: "Light", image: "TL-H-1708.jpg" },
  { name: "TL-H-1712C", code: "TL-H-1712C", tone: "Light", image: "TL-H-1712C.jpg" },
  { name: "TL-H-1722N", code: "TL-H-1722N", tone: "Light", image: "TL-H-1722N.jpg" },
  { name: "TL-H-1728", code: "TL-H-1728", tone: "Light", image: "TL-H-1728.jpg" },
  { name: "TL-H-1730", code: "TL-H-1730", tone: "Light", image: "TL-H-1730.jpg" },
  { name: "TL-H-1902", code: "TL-H-1902", tone: "Light", image: "TL-H-1902.jpg" },
  { name: "TL-H-1912", code: "TL-H-1912", tone: "Light", image: "TL-H-1912.jpg" },
  { name: "TL-H-1916", code: "TL-H-1916", tone: "Light", image: "TL-H-1916.jpg" },
  { name: "TL-H-1918", code: "TL-H-1918", tone: "Light", image: "TL-H-1918.jpg" },
  { name: "TL-H-1920", code: "TL-H-1920", tone: "Light", image: "TL-H-1920.jpg" },
  { name: "TL-H-1922", code: "TL-H-1922", tone: "Light", image: "TL-H-1922.jpg" },
  { name: "TL-H-1932", code: "TL-H-1932", tone: "Light", image: "TL-H-1932.jpg" },
  { name: "TL-H-2206C", code: "TL-H-2206C", tone: "Light", image: "TL-H-2206C.jpg" },
  { name: "TL-H-2501", code: "TL-H-2501", tone: "Light", image: "TL-H-2501.jpg" },
  { name: "TL-H-2802", code: "TL-H-2802", tone: "Light", image: "TL-H-2802.jpg" },
  { name: "TL-H-2900", code: "TL-H-2900", tone: "Light", image: "TL-H-2900.jpg" },
  { name: "TL-H-2904", code: "TL-H-2904", tone: "Light", image: "TL-H-2904.jpg" },
  { name: "TL-H-2906", code: "TL-H-2906", tone: "Light", image: "TL-H-2906.jpg" },
  { name: "TL-H-3002", code: "TL-H-3002", tone: "Light", image: "TL-H-3002.jpg" },
  { name: "TL-H-3006", code: "TL-H-3006", tone: "Light", image: "TL-H-3006.jpg" },
  { name: "TL-H-3166N", code: "TL-H-3166N", tone: "Light", image: "TL-H-3166N.jpg" },
  { name: "TL-H-3203", code: "TL-H-3203", tone: "Light", image: "TL-H-3203.jpg" },
  { name: "TL-H-3204", code: "TL-H-3204", tone: "Light", image: "TL-H-3204.jpg" },
  { name: "TL-H-3208", code: "TL-H-3208", tone: "Light", image: "TL-H-3208.jpg" },
  { name: "TL-H-3210", code: "TL-H-3210", tone: "Light", image: "TL-H-3210.jpg" },
  { name: "TL-H-3212", code: "TL-H-3212", tone: "Light", image: "TL-H-3212.jpg" },
  { name: "TL-H-3216", code: "TL-H-3216", tone: "Light", image: "TL-H-3216.jpg" },
  { name: "TL-H-3218", code: "TL-H-3218", tone: "Light", image: "TL-H-3218.jpg" },
  { name: "TL-H-3222", code: "TL-H-3222", tone: "Light", image: "TL-H-3222.jpg" },
  { name: "TL-H-3226", code: "TL-H-3226", tone: "Light", image: "TL-H-3226.jpg" },
  { name: "TL-H-3234", code: "TL-H-3234", tone: "Light", image: "TL-H-3234.jpg" },
  { name: "TL-H-3240", code: "TL-H-3240", tone: "Light", image: "TL-H-3240.jpg" },
  { name: "TL-H-3242", code: "TL-H-3242", tone: "Light", image: "TL-H-3242.jpg" },
  { name: "TL-H-3248", code: "TL-H-3248", tone: "Light", image: "TL-H-3248.jpg" },
  { name: "TL-H-3256", code: "TL-H-3256", tone: "Light", image: "TL-H-3256.jpg" },
  { name: "TL-H-3258", code: "TL-H-3258", tone: "Light", image: "TL-H-3258.jpg" },
  { name: "TL-H-3262", code: "TL-H-3262", tone: "Light", image: "TL-H-3262.jpg" },
  { name: "TL-H-3264", code: "TL-H-3264", tone: "Light", image: "TL-H-3264.jpg" },
  { name: "TL-H-3266", code: "TL-H-3266", tone: "Light", image: "TL-H-3266.jpg" },
  { name: "TL-H-3268", code: "TL-H-3268", tone: "Light", image: "TL-H-3268.jpg" },
  { name: "TL-H-3276C", code: "TL-H-3276C", tone: "Light", image: "TL-H-3276C.jpg" },
  { name: "TL-H-3278C", code: "TL-H-3278C", tone: "Light", image: "TL-H-3278C.jpg" },
  { name: "TL-H-3280C", code: "TL-H-3280C", tone: "Light", image: "TL-H-3280C.jpg" },
  { name: "TL-H-3282", code: "TL-H-3282", tone: "Light", image: "TL-H-3282.jpg" },
  { name: "TL-H-3294", code: "TL-H-3294", tone: "Light", image: "TL-H-3294.jpg" },
  { name: "TL-H-3298", code: "TL-H-3298", tone: "Light", image: "TL-H-3298.jpg" },
  { name: "TL-H-3300", code: "TL-H-3300", tone: "Light", image: "TL-H-3300.jpg" },
  { name: "TL-H-3302", code: "TL-H-3302", tone: "Light", image: "TL-H-3302.jpg" },
  { name: "TL-H-3304", code: "TL-H-3304", tone: "Light", image: "TL-H-3304.jpg" },
  { name: "TL-H-3306C", code: "TL-H-3306C", tone: "Light", image: "TL-H-3306C.jpg" },
  { name: "TL-H-3308", code: "TL-H-3308", tone: "Light", image: "TL-H-3308.jpg" },
  { name: "TL-H-3310", code: "TL-H-3310", tone: "Light", image: "TL-H-3310.jpg" },
  { name: "TL-H-3318", code: "TL-H-3318", tone: "Light", image: "TL-H-3318.jpg" },
  { name: "TL-H-3320N", code: "TL-H-3320N", tone: "Light", image: "TL-H-3320N.jpg" },
  { name: "TL-H-3322N", code: "TL-H-3322N", tone: "Light", image: "TL-H-3322N.jpg" },
  { name: "TL-H-3324", code: "TL-H-3324", tone: "Light", image: "TL-H-3324.jpg" },
  { name: "TL-H-3326C", code: "TL-H-3326C", tone: "Light", image: "TL-H-3326C.jpg" },
  { name: "TL-H-3328", code: "TL-H-3328", tone: "Light", image: "TL-H-3328.jpg" },
  { name: "TL-H-3330", code: "TL-H-3330", tone: "Light", image: "TL-H-3330.jpg" },
  { name: "TL-H-3332", code: "TL-H-3332", tone: "Light", image: "TL-H-3332.jpg" },
  { name: "TL-H-3338C", code: "TL-H-3338C", tone: "Light", image: "TL-H-3338C.jpg" },
  { name: "TL-H-3339", code: "TL-H-3339", tone: "Light", image: "TL-H-3339.jpg" },
  { name: "TL-H-3350", code: "TL-H-3350", tone: "Light", image: "TL-H-3350.jpg" },
  { name: "TL-H-3352", code: "TL-H-3352", tone: "Light", image: "TL-H-3352.jpg" },
  { name: "TL-H-3356", code: "TL-H-3356", tone: "Light", image: "TL-H-3356.jpg" },
  { name: "TL-H-3374", code: "TL-H-3374", tone: "Light", image: "TL-H-3374.jpg" },
  { name: "TL-H-378N", code: "TL-H-378N", tone: "Light", image: "TL-H-378N.jpg" },
  { name: "TL-H-4002N", code: "TL-H-4002N", tone: "Light", image: "TL-H-4002N.jpg" },
  { name: "TL-H-8042", code: "TL-H-8042", tone: "Light", image: "TL-H-8042.jpg" },
  { name: "TL-H-8601", code: "TL-H-8601", tone: "Light", image: "TL-H-8601.jpg" },
  { name: "TL-H-8605N", code: "TL-H-8605N", tone: "Light", image: "TL-H-8605N.jpg" },
  { name: "TL-H-8806C", code: "TL-H-8806C", tone: "Light", image: "TL-H-8806C.jpg" },
  { name: "TL-H-8807C", code: "TL-H-8807C", tone: "Light", image: "TL-H-8807C.jpg" },
  { name: "TL-H-8816N", code: "TL-H-8816N", tone: "Light", image: "TL-H-8816N.jpg" },
  { name: "TL-H-YGW1", code: "TL-H-YGW1", tone: "Light", image: "TL-H-YGW1.jpg" },
  { name: "TL-H-YGW2", code: "TL-H-YGW2", tone: "Light", image: "TL-H-YGW2.jpg" },
];

const productForms = [
  "Engineered Veneer Sheet",
  "Engineered Wood Panel",
  "Veneer Plywood",
  "Veneer MDF",
  "Veneer Edge Banding",
];

const applications = [
  { name: "Furniture", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" },
  { name: "Doors", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
  { name: "Cabinets", icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
  { name: "Commercial", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { name: "Wall Panels", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
];

const relatedProducts = [
  { name: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
  { name: "Natural Wood Veneer", href: "/products/natural-wood-veneer" },
  { name: "Veneer Edge Banding", href: "/products/veneer-edge-banding" },
];

const faqs = [
  {
    q: "What is engineered wood veneer?",
    a: "Engineered wood veneer (also called reconstituted veneer) is made from fast-growing wood species that are dyed, sliced, and reassembled to create consistent patterns. It offers the look of natural wood with superior batch-to-batch consistency."
  },
  {
    q: "How many patterns does your engineered veneer collection offer?",
    a: "We offer 300+ patterns in various wood species, colors, and grain styles. New patterns are developed regularly to meet market trends and customer requirements."
  },
  {
    q: "What are the advantages of engineered veneer over natural veneer?",
    a: "Engineered veneer provides consistent color and grain across batches, ideal for large-scale production. It offers more design flexibility with predictable patterns and can be produced in longer lengths without joint lines."
  },
  {
    q: "Can I get custom patterns or colors?",
    a: "Yes, we offer custom pattern development and color matching for bulk orders. Contact our team with your reference samples or specifications for a custom quote."
  },
];

export default function EngineeredVeneerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedSwatch, setSelectedSwatch] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (swatchIndex: number) => {
    setSelectedSwatch(swatchIndex);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSwatch(null);
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
            <span className="text-[#1F2621] font-medium">Engineered Wood Veneer</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-[#0F6B3A] to-[#124B34] py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="text-white/60 text-sm font-medium tracking-wider uppercase">Collection</span>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">Engineered Wood Veneer</h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Reconstituted veneer with 100+ consistent patterns, stable colors, and uniform textures. Perfect for large-scale production requiring batch-to-batch consistency.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact?type=sample"
                  className="px-6 py-3 bg-white text-[#0F6B3A] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
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
            <div className="hidden lg:flex gap-3">
              {["#C4A77D", "#8B7355", "#A0826D", "#654321", "#E8D4B8", "#D4B896"].map((color, i) => (
                <div
                  key={i}
                  className="w-1/6 h-32 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collection Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-4">About Engineered Wood Veneer</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Engineered wood veneer (reconstituted veneer) is manufactured from fast-growing wood species through a specialized process of dyeing, slicing, and reassembling to create consistent, repeatable patterns. With 100+ styles available, it offers superior batch-to-batch consistency ideal for large-scale manufacturing and commercial projects.
            </p>
          </div>
        </div>
      </section>

      {/* Collection Gallery */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-2">Style Collection</h2>
            <p className="text-[#6b7280]">
              {swatches.length} styles available &middot; Click any swatch to view full size
            </p>
          </div>

          {/* Swatch Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {swatches.map((swatch, index) => (
              <div
                key={`${swatch.code}-${index}`}
                className="group bg-white rounded-xl border border-[#E5E1D8] overflow-hidden hover:border-[#0F6B3A]/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Swatch Image */}
                <div
                  className="aspect-square relative cursor-pointer overflow-hidden bg-[#F5F0E8]"
                  onClick={() => handleOpenModal(index)}
                >
                  <Image
                    src={`/images/collections/engineered-wood-veneer/${swatch.image}`}
                    alt={swatch.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
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
            <p className="text-[#6b7280]">Ideal for manufacturing and commercial applications</p>
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
      <section className="py-16 bg-[#0F6B3A]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Physical Samples?</h2>
            <p className="text-white/80 mb-8">
              Request samples by code number (e.g., TL-H-1) to evaluate colors and patterns for your production requirements.
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

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-2">Related Products</h2>
            <p className="text-[#6b7280]">View products made with engineered wood veneer</p>
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
                      className={`w-5 h-5 text-[#0F6B3A] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-48" : "max-h-0"}`}>
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
        images={selectedSwatch !== null ? [`/images/collections/engineered-wood-veneer/${swatches[selectedSwatch].image}`] : []}
        currentIndex={0}
        onNext={() => {}}
        onPrev={() => {}}
      />
    </>
  );
}
