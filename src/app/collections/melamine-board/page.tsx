"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "@/components/ImageModal";

// Melamine Board swatches - 28 styles from public/images/collections/melamine-board
const swatches = [
  // TLC series - Wood Grain
  { name: "AGKSL", code: "TLC-AGKSL", tone: "Wood Grain", image: "TLC-AGKSL.jpg" },
  { name: "B2342", code: "TLC-B2342", tone: "Wood Grain", image: "TLC-B2342.jpg" },
  { name: "B64005", code: "TLC-B64005", tone: "Wood Grain", image: "TLC-B64005.jpg" },
  { name: "B94031", code: "TLC-B94031", tone: "Wood Grain", image: "TLC-B94031.jpg" },
  { name: "C64058", code: "TLC-C64058", tone: "Wood Grain", image: "TLC-C64058.jpg" },
  { name: "C65014", code: "TLC-C65014", tone: "Wood Grain", image: "TLC-C65014.jpg" },
  { name: "C95028", code: "TLC-C95028", tone: "Wood Grain", image: "TLC-C95028.jpg" },
  { name: "JCW", code: "TLC-JCW", tone: "Wood Grain", image: "TLC-JCW.jpg" },
  { name: "LSYM", code: "TLC-LSYM", tone: "Wood Grain", image: "TLC-LSYM.jpg" },
  { name: "MY", code: "TLC-MY", tone: "Wood Grain", image: "TLC-MY.jpg" },
  { name: "RLYX", code: "TLC-RLYX", tone: "Wood Grain", image: "TLC-RLYX.jpg" },
  { name: "SLXM", code: "TLC-SLXM", tone: "Wood Grain", image: "TLC-SLXM.jpg" },
  { name: "XMYM", code: "TLC-XMYM", tone: "Wood Grain", image: "TLC-XMYM.jpg" },
  { name: "YLGX", code: "TLC-YLGX", tone: "Wood Grain", image: "TLC-YLGX.jpg" },
  { name: "YMW", code: "TLC-YMW", tone: "Wood Grain", image: "TLC-YMW.jpg" },
  // TLF series - Solid Color / Texture
  { name: "7060TB1", code: "TLF-7060TB1", tone: "Solid Color", image: "TLF-7060TB1.jpg" },
  { name: "9071DK", code: "TLF-9071DK", tone: "Solid Color", image: "TLF-9071DK.jpg" },
  { name: "9072ZW", code: "TLF-9072ZW", tone: "Solid Color", image: "TLF-9072ZW.jpg" },
  { name: "9073ZW", code: "TLF-9073ZW", tone: "Solid Color", image: "TLF-9073ZW.jpg" },
  { name: "9075SS", code: "TLF-9075SS", tone: "Texture", image: "TLF-9075SS.jpg" },
  { name: "9077SS", code: "TLF-9077SS", tone: "Texture", image: "TLF-9077SS.jpg" },
  { name: "9078DK", code: "TLF-9078DK", tone: "Solid Color", image: "TLF-9078DK.jpg" },
  // TLQ series - Solid Color / Texture
  { name: "BGLB", code: "TLQ-BGLB", tone: "Solid Color", image: "TLQ-BGLB.jpg" },
  { name: "KBDS", code: "TLQ-KBDS", tone: "Solid Color", image: "TLQ-KBDS.jpg" },
  { name: "MLH", code: "TLQ-MLH", tone: "Solid Color", image: "TLQ-MLH.jpg" },
  { name: "QMHT", code: "TLQ-QMHT", tone: "Solid Color", image: "TLQ-QMHT.jpg" },
  { name: "QXHX", code: "TLQ-QXHX", tone: "Solid Color", image: "TLQ-QXHX.jpg" },
  { name: "SFY", code: "TLQ-SFY", tone: "Solid Color", image: "TLQ-SFY.jpg" },
];

const productForms = [
  "Melamine Faced Chipboard",
  "Melamine Faced MDF",
  "Melamine Faced Plywood",
  "Melamine Edge Banding",
];

const applications = [
  { name: "Cabinets", icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
  { name: "Wardrobes", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" },
  { name: "Office Furniture", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { name: "Kitchen", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { name: "Commercial", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
];

const relatedProducts = [
  { name: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
  { name: "Veneer Edge Banding", href: "/products/veneer-edge-banding" },
  { name: "Supporting Boards", href: "/products/supporting-boards" },
];

const faqs = [
  {
    q: "What is melamine board?",
    a: "Melamine board is a type of engineered wood panel with a melamine resin coating on the surface. It offers a durable, scratch-resistant finish available in various colors, patterns, and textures including wood grain, solid colors, and contemporary finishes."
  },
  {
    q: "What substrates are available for melamine boards?",
    a: "We offer melamine-faced panels on various substrates including chipboard (particle board), MDF, and plywood. The choice depends on your application requirements for strength, weight, and cost."
  },
  {
    q: "What are the standard sizes available?",
    a: "Standard sheet size is 1220x2440mm (4x8 feet). Custom sizes available for bulk orders. Standard thickness ranges from 3mm to 25mm."
  },
  {
    q: "Is melamine board suitable for kitchen applications?",
    a: "Yes, melamine board is widely used in kitchen cabinets and countertops. We offer moisture-resistant (MR) grades suitable for kitchen environments. For areas with direct water exposure, consider additional edge sealing."
  },
];

export default function MelamineBoardPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [styleFilter, setStyleFilter] = useState<string | null>(null);
  const [selectedSwatch, setSelectedSwatch] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const styles = ["Wood Grain", "Solid Color", "Texture"];

  const filteredSwatches = styleFilter
    ? swatches.filter((s) => s.tone === styleFilter)
    : swatches;

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
            <span className="text-[#1F2621] font-medium">Melamine Board</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-[#124B34] to-[#0F6B3A] py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="text-white/60 text-sm font-medium tracking-wider uppercase">Collection</span>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">Melamine Board</h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Modern melamine-faced surfaces in wood grain, solid colors, and contemporary finishes. Durable, cost-effective, and ideal for cabinets, wardrobes, and office furniture production.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact?type=sample"
                  className="px-6 py-3 bg-white text-[#124B34] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
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
              {["#F5F5F5", "#E8E8E8", "#D4C4B0", "#BDB0A0", "#2C2C2C", "#8B7355"].map((color, i) => (
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
            <h2 className="text-2xl font-bold text-[#1F2621] mb-4">About Melamine Board</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Melamine board features a durable melamine resin surface bonded to engineered wood substrates. Available in {swatches.length} styles including wood grain patterns, solid colors, and contemporary textures, it provides an economical and practical solution for modern furniture and cabinetry production.
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

          {/* Style Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setStyleFilter(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !styleFilter
                  ? "bg-[#0F6B3A] text-white"
                  : "bg-white text-[#1F2621] border border-[#E5E1D8]"
              }`}
            >
              All ({swatches.length})
            </button>
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => setStyleFilter(styleFilter === style ? null : style)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  styleFilter === style
                    ? "bg-[#0F6B3A] text-white"
                    : "bg-white text-[#1F2621] border border-[#E5E1D8]"
                }`}
              >
                {style} ({swatches.filter((s) => s.tone === style).length})
              </button>
            ))}
          </div>

          {/* Swatch Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredSwatches.map((swatch, index) => (
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
                    src={`/images/collections/melamine-board/${swatch.image}`}
                    alt={swatch.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />

                  {/* Hover Overlay */}
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
            <p className="text-[#6b7280]">These collections are available in the following formats</p>
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
            <p className="text-[#6b7280]">Ideal for modern furniture and cabinetry</p>
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
      <section className="py-16 bg-[#124B34]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Physical Samples?</h2>
            <p className="text-white/80 mb-8">
              Request samples by code number (e.g., TLC-AGKSL) to evaluate colors and finishes for your furniture production.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?type=sample"
                className="px-8 py-4 bg-white text-[#124B34] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
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
            <p className="text-[#6b7280]">View products made with melamine board</p>
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
        images={selectedSwatch !== null ? [`/images/collections/melamine-board/${swatches[selectedSwatch].image}`] : []}
        currentIndex={0}
        onNext={() => {}}
        onPrev={() => {}}
      />
    </>
  );
}
