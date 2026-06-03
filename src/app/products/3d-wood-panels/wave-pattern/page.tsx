"use client";

import Link from "next/link";
import { useState } from "react";

// 3D Wood Panel product detail
const product = {
  name: "Wave Pattern 3D Wood Panel",
  code: "3D-WP-001",
  category: "3D Wood Panels",
  shortDesc: "Artistically carved solid wood panel featuring distinctive wave texture. Adds depth and visual interest to walls, doors, ceilings, and furniture surfaces.",
  tags: ["3D Panel", "Wave Pattern", "Solid Wood", "Decorative"],
  specs: {
    material: "Paulownia / Poplar Core",
    pattern: "Wave",
    panelSize: "1220×2440mm",
    panelThickness: "15mm",
    surface: "Sand smooth, ready to finish",
    finishRequired: "Paint, stain, or clear coat",
    installation: "Tongue & Groove / Adhesive + Nails",
    application: "Interior Walls, Ceilings, Doors, Furniture Accents",
    moq: "20 panels",
    packaging: "Carton + Pallet",
  },
  overview: `This Wave Pattern 3D wood panel showcases the elegant flow of ocean-inspired waves carved into solid wood. The distinctive three-dimensional texture creates dynamic visual depth that transforms ordinary walls and ceilings into stunning focal points.

Perfect for interior feature walls in residential and commercial spaces, hotel lobbies, restaurant interiors, and retail environments. The panel's design not only adds aesthetic value but also provides acoustic benefits by breaking up sound waves.

Manufactured from lightweight yet sturdy paulownia wood, these panels are easy to handle and install. The tongue and groove system ensures seamless panel-to-panel alignment, while the sand-smooth surface is ready for your choice of paint, stain, or clear coat finish.

Each panel is crafted with precision to ensure consistent depth and pattern repeat across multiple panels, allowing for uniform installations across large surfaces.`,
};

const applications = [
  { name: "Feature Walls", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { name: "Ceiling Design", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { name: "Door Panels", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
  { name: "Furniture", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" },
  { name: "Commercial", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { name: "Hospitality", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
];

const qualityPackaging = [
  "Pattern consistency verification per panel",
  "Depth and groove precision check",
  "Surface smoothness inspection",
  "Dimensional tolerance verification",
  "Moisture content control",
  "Protective film on grooved edges",
  "Carton packaging with foam protection",
  "Wooden pallet for shipping",
];

const relatedProducts = [
  { name: "Bamboo Weave Panel", href: "/products/3d-wood-panels/bamboo-weave" },
  { name: "Diamond Pattern Panel", href: "/products/3d-wood-panels/diamond-pattern" },
  { name: "Linear Slat Panel", href: "/products/3d-wood-panels/linear-slat" },
  { name: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
];

const faqs = [
  { q: "What materials are used in 3D wood panels?", a: "Our 3D wood panels are made from paulownia wood with poplar core construction. Paulownia is chosen for its lightweight yet sturdy properties, excellent workability, and beautiful grain patterns. The combination provides panels that are easy to handle while maintaining structural integrity." },
  { q: "How are panels installed?", a: "Panels feature a tongue and groove system for seamless alignment. Installation involves applying construction adhesive to the wall or ceiling, then securing panels with finishing nails. Detailed installation guides are provided with each order. Professional installation is recommended for best results." },
  { q: "Can panels be used in bathrooms or wet areas?", a: "Standard 3D panels are recommended for interior dry areas only. For moisture-prone areas, additional sealing treatment is required. We recommend marine-grade finish or alternative materials for areas with direct water exposure." },
  { q: "What finish options work best?", a: "Panels accept paint, stain, and clear coats well due to the sand-smooth surface. Water-based finishes are recommended for environmental compliance. Clear lacquer preserves the natural wood appearance, while paint allows bold color statements." },
];

export default function ThreeDWoodPanelDetailPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

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
            <Link href="/products" className="hover:text-[#0F6B3A]">Products</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products/3d-wood-panels" className="hover:text-[#0F6B3A]">3D Wood Panels</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1F2621] font-medium truncate max-w-[200px]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="aspect-square bg-gradient-to-br from-[#C4A77D] to-[#A68B5B] rounded-2xl overflow-hidden mb-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center mb-4">
                    <svg className="w-16 h-16 text-[#4C8A68]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm text-[#4C8A68]/50">3D Panel {selectedImage + 1}</span>
                </div>
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-square rounded-lg bg-gradient-to-br from-[#C4A77D] to-[#A68B5B] flex items-center justify-center ${
                      selectedImage === i ? 'ring-2 ring-[#4C8A68]' : ''
                    }`}
                  >
                    <svg className="w-6 h-6 text-[#4C8A68]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-[#4C8A68] font-medium">{product.category}</span>
                <span className="mx-2 text-[#E5E1D8]">|</span>
                <span className="text-sm text-[#6b7280]">Code: {product.code}</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#1F2621] mb-4">{product.name}</h1>
              <p className="text-[#6b7280] leading-relaxed mb-6">{product.shortDesc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-xs font-medium text-[#1F2621]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-[#FDFBF7] rounded-xl">
                  <span className="text-xs text-[#6b7280]">Size</span>
                  <p className="font-semibold text-[#1F2621]">{product.specs.panelSize}</p>
                </div>
                <div className="p-4 bg-[#FDFBF7] rounded-xl">
                  <span className="text-xs text-[#6b7280]">Thickness</span>
                  <p className="font-semibold text-[#1F2621]">{product.specs.panelThickness}</p>
                </div>
                <div className="p-4 bg-[#FDFBF7] rounded-xl">
                  <span className="text-xs text-[#6b7280]">Material</span>
                  <p className="font-semibold text-[#1F2621]">{product.specs.material}</p>
                </div>
                <div className="p-4 bg-[#FDFBF7] rounded-xl">
                  <span className="text-xs text-[#6b7280]">Pattern</span>
                  <p className="font-semibold text-[#1F2621]">{product.specs.pattern}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href={`/contact?type=quote&product=${encodeURIComponent(product.name)}`}
                  className="flex-1 min-w-[160px] px-6 py-4 bg-[#4C8A68] text-white text-center rounded-lg font-semibold hover:bg-[#3d7a55] transition-colors"
                >
                  Request a Quote
                </Link>
                <Link 
                  href={`/contact?type=sample&product=${encodeURIComponent(product.name)}`}
                  className="flex-1 min-w-[160px] px-6 py-4 border-2 border-[#4C8A68] text-[#4C8A68] text-center rounded-lg font-semibold hover:bg-[#4C8A68]/5 transition-colors"
                >
                  Request Sample
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview - Full Width Text */}
      <section className="py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-6">Product Overview</h2>
            <div className="prose prose-lg text-[#6b7280]">
              {product.overview.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Specification Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-8">Detailed Specifications</h2>
            <div className="bg-[#FDFBF7] rounded-xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {Object.entries(product.specs).map(([key, value], index) => (
                    <tr key={key} className={index % 2 === 0 ? 'bg-transparent' : 'bg-white/50'}>
                      <td className="px-6 py-4 text-sm font-medium text-[#1F2621] capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#6b7280]">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-8">Customization Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-[#1F2621] mb-3">Panel Size</h3>
                <div className="flex flex-wrap gap-2">
                  {["1220×2440mm", "1220×2800mm", "Custom Width", "Custom Size"].map((opt) => (
                    <span key={opt} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-sm text-[#6b7280]">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-[#1F2621] mb-3">Thickness</h3>
                <div className="flex flex-wrap gap-2">
                  {["12mm", "15mm", "18mm", "21mm", "Custom"].map((opt) => (
                    <span key={opt} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-sm text-[#6b7280]">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-[#1F2621] mb-3">Pattern</h3>
                <div className="flex flex-wrap gap-2">
                  {["Wave", "Bamboo", "Diamond", "Hexagon", "Flute", "Custom Pattern"].map((opt) => (
                    <span key={opt} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-sm text-[#6b7280]">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-[#1F2621] mb-3">Material</h3>
                <div className="flex flex-wrap gap-2">
                  {["Paulownia", "Poplar", "Combined Core", "Custom"].map((opt) => (
                    <span key={opt} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-sm text-[#6b7280]">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-[#6b7280] mb-4">Need custom patterns or sizes for your project?</p>
              <Link 
                href="/custom-solutions" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4C8A68] text-white rounded-lg font-semibold hover:bg-[#3d7a55] transition-colors"
              >
                <span>Request Custom Quote</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1F2621] mb-8 text-center">Applications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {applications.map((app) => (
              <Link
                key={app.name}
                href="/applications"
                className="group bg-[#FDFBF7] rounded-xl p-6 text-center hover:bg-[#4C8A68]/10 transition-colors"
              >
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-white flex items-center justify-center group-hover:bg-[#4C8A68]/10 transition-colors">
                  <svg className="w-7 h-7 text-[#4C8A68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={app.icon} />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#1F2621]">{app.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Packaging */}
      <section className="py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-8">Quality & Packaging</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {qualityPackaging.map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-4">
                  <div className="w-8 h-8 rounded-full bg-[#4C8A68]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#4C8A68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#6b7280]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#1F2621] mb-8 text-center">Related Products</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {relatedProducts.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-6 py-4 bg-[#FDFBF7] rounded-xl text-sm font-medium text-[#1F2621] hover:bg-[#4C8A68]/10 hover:text-[#4C8A68] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FDFBF7]">
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
                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-[#1F2621] hover:text-[#4C8A68] transition-colors"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <svg 
                      className={`w-5 h-5 text-[#4C8A68] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
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

      {/* Final Product CTA */}
      <section className="py-16 bg-[#4C8A68]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need This Product for Your Project?</h2>
            <p className="text-white/80 mb-8">
              Tell us your required quantity, application, size and finish. Tongli will help you confirm the right product solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href={`/contact?type=quote&product=${encodeURIComponent(product.name)}`}
                className="px-8 py-4 bg-white text-[#4C8A68] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
              >
                Request a Quote
              </Link>
              <Link 
                href={`/contact?type=sample&product=${encodeURIComponent(product.name)}`}
                className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Request Samples
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
