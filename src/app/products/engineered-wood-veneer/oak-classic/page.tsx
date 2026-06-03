"use client";

import Link from "next/link";
import { useState } from "react";

// Engineered Wood Veneer product detail
const product = {
  name: "Oak Classic Engineered Wood Veneer",
  code: "TLE-001",
  category: "Engineered Wood Veneer",
  shortDesc: "Premium reconstituted oak veneer with consistent straight grain pattern. Color-stable and batch-uniform, perfect for large-scale furniture and cabinet production.",
  tags: ["Engineered", "Oak", "Reconstituted", "Color Stable"],
  specs: {
    pattern: "Oak Classic",
    colorTone: "Light",
    grainStyle: "Straight Grain",
    thickness: "0.5mm",
    size: "2450×1270mm",
    backing: "Fleece Backed (Optional)",
    application: "Furniture, Cabinets, Doors, Wall Panels, Commercial",
    moq: "200 sheets (~500 sqm)",
    packaging: "Paper interleaved, wooden pallet",
  },
  overview: `This Oak Classic engineered wood veneer features the timeless appeal of natural oak with the consistency and predictability that modern manufacturing requires. Each sheet is produced from carefully selected wood species through a process of dyeing, slicing, and reassembling to create a beautiful, uniform grain pattern.

The reconstituted manufacturing process ensures that every sheet matches precisely, eliminating the natural variations found in natural wood veneer. This consistency is particularly valuable for large-scale production runs where multiple sheets must align perfectly across doors, cabinet panels, or wall installations.

Engineered veneer offers significant advantages for furniture manufacturers, door producers, and commercial interior projects. Beyond consistency, it provides longer sheet lengths without joint lines, stable color reproduction batch after batch, and the flexibility to create custom patterns and tones that may not exist in nature.`,
};

const applications = [
  { name: "Furniture", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" },
  { name: "Cabinets", icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
  { name: "Doors", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
  { name: "Wall Panels", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { name: "Commercial", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { name: "Hotel Interiors", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
];

const qualityPackaging = [
  "Pattern and color consistency verification per batch",
  "Sheet dimension and thickness tolerance check",
  "Surface quality inspection for defects",
  "Backing adhesion testing (for backed veneer)",
  "Moisture content verification",
  "Paper interleaving between sheets",
  "Export-standard wooden pallet packaging",
];

const relatedProducts = [
  { name: "Walnut Elite Engineered", href: "/products/engineered-wood-veneer/walnut-elite" },
  { name: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
  { name: "Engineered Oak Panel", href: "/products/engineered-wood-veneer/oak-engineered-panel" },
  { name: "Veneer Edge Banding", href: "/products/veneer-edge-banding" },
];

const faqs = [
  { q: "What is the difference between engineered and natural veneer?", a: "Engineered veneer (reconstituted veneer) is manufactured from fast-growing wood species that are dyed, sliced, and reassembled to create consistent patterns. Natural veneer is sliced directly from real wood logs. Engineered veneer offers superior batch-to-batch consistency, longer sheet lengths, and more design flexibility." },
  { q: "How many patterns does your engineered veneer collection offer?", a: "We offer 300+ patterns in various wood species, colors, and grain styles. New patterns are developed regularly to meet market trends and customer requirements." },
  { q: "What backing options are available?", a: "Standard options include loose (unbacked), fleece backed, paper backed, and wood backed. Fleece backing provides flexibility for curved surfaces, while paper backing offers dimensional stability for flat panel applications." },
  { q: "Can I get custom patterns or colors?", a: "Yes, we offer custom pattern development and color matching for bulk orders. Contact our team with your reference samples, color specifications, or design concept for a custom quote." },
];

export default function EngineeredVeneerDetailPage() {
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
            <Link href="/products/engineered-wood-veneer" className="hover:text-[#0F6B3A]">Engineered Wood Veneer</Link>
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
                    <svg className="w-16 h-16 text-[#0F6B3A]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <span className="text-sm text-[#0F6B3A]/50">Product Image {selectedImage + 1}</span>
                </div>
              </div>
              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-square rounded-lg bg-gradient-to-br from-[#C4A77D] to-[#A68B5B] flex items-center justify-center ${
                      selectedImage === i ? 'ring-2 ring-[#0F6B3A]' : ''
                    }`}
                  >
                    <svg className="w-6 h-6 text-[#0F6B3A]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="text-sm text-[#0F6B3A] font-medium">{product.category}</span>
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
                  <span className="text-xs text-[#6b7280]">Pattern</span>
                  <p className="font-semibold text-[#1F2621]">{product.specs.pattern}</p>
                </div>
                <div className="p-4 bg-[#FDFBF7] rounded-xl">
                  <span className="text-xs text-[#6b7280]">Grain Style</span>
                  <p className="font-semibold text-[#1F2621]">{product.specs.grainStyle}</p>
                </div>
                <div className="p-4 bg-[#FDFBF7] rounded-xl">
                  <span className="text-xs text-[#6b7280]">Thickness</span>
                  <p className="font-semibold text-[#1F2621]">{product.specs.thickness}</p>
                </div>
                <div className="p-4 bg-[#FDFBF7] rounded-xl">
                  <span className="text-xs text-[#6b7280]">Size</span>
                  <p className="font-semibold text-[#1F2621]">{product.specs.size}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href={`/contact?type=quote&product=${encodeURIComponent(product.name)}`}
                  className="flex-1 min-w-[160px] px-6 py-4 bg-[#0F6B3A] text-white text-center rounded-lg font-semibold hover:bg-[#124B34] transition-colors"
                >
                  Request a Quote
                </Link>
                <Link 
                  href={`/contact?type=sample&product=${encodeURIComponent(product.name)}`}
                  className="flex-1 min-w-[160px] px-6 py-4 border-2 border-[#0F6B3A] text-[#0F6B3A] text-center rounded-lg font-semibold hover:bg-[#0F6B3A]/5 transition-colors"
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
                <h3 className="font-semibold text-[#1F2621] mb-3">Color Tone</h3>
                <div className="flex flex-wrap gap-2">
                  {["Light", "Medium", "Dark", "Warm", "Custom"].map((opt) => (
                    <span key={opt} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-sm text-[#6b7280]">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-[#1F2621] mb-3">Grain Style</h3>
                <div className="flex flex-wrap gap-2">
                  {["Straight Grain", "Wavy Grain", "Stripe", "Cross Grain", "Custom"].map((opt) => (
                    <span key={opt} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-sm text-[#6b7280]">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-[#1F2621] mb-3">Thickness</h3>
                <div className="flex flex-wrap gap-2">
                  {["0.3mm", "0.5mm", "0.6mm", "0.8mm", "1.0mm"].map((opt) => (
                    <span key={opt} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-sm text-[#6b7280]">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-[#1F2621] mb-3">Backing</h3>
                <div className="flex flex-wrap gap-2">
                  {["No Backing", "Fleece Backed", "Paper Backed", "Wood Backed", "PSA (Self-Adhesive)"].map((opt) => (
                    <span key={opt} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-sm text-[#6b7280]">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-[#6b7280] mb-4">Need custom specifications or pattern development?</p>
              <Link 
                href="/custom-solutions" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F6B3A] text-white rounded-lg font-semibold hover:bg-[#124B34] transition-colors"
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
                className="group bg-[#FDFBF7] rounded-xl p-6 text-center hover:bg-[#0F6B3A]/10 transition-colors"
              >
                <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-white flex items-center justify-center group-hover:bg-[#0F6B3A]/10 transition-colors">
                  <svg className="w-7 h-7 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="w-8 h-8 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="px-6 py-4 bg-[#FDFBF7] rounded-xl text-sm font-medium text-[#1F2621] hover:bg-[#0F6B3A]/10 hover:text-[#0F6B3A] transition-colors"
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

      {/* Final Product CTA */}
      <section className="py-16 bg-[#0F6B3A]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need This Product for Your Project?</h2>
            <p className="text-white/80 mb-8">
              Tell us your required quantity, application, size and finish. Tongli will help you confirm the right product solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href={`/contact?type=quote&product=${encodeURIComponent(product.name)}`}
                className="px-8 py-4 bg-white text-[#0F6B3A] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
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
