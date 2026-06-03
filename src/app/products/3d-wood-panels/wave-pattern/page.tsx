import { Metadata } from "next";
import Link from "next/link";
import { FAQClient } from "@/components/product/ProductDetailInteractive";

export const metadata: Metadata = {
  title: "Wave Pattern 3D Wood Panel | 3D Wood Panels | Tongli Timber",
  description: "Artistically carved solid wood panel featuring distinctive wave texture. Adds depth and visual interest to walls, doors, ceilings, and furniture surfaces.",
};

const faqs = [
  { q: "What materials are used in 3D wood panels?", a: "Our 3D wood panels are made from paulownia wood with poplar core construction. Paulownia is chosen for its lightweight yet sturdy properties, excellent workability, and beautiful grain patterns. The combination provides panels that are easy to handle while maintaining structural integrity." },
  { q: "How are panels installed?", a: "Panels feature a tongue and groove system for seamless alignment. Installation involves applying construction adhesive to the wall or ceiling, then securing panels with finishing nails. Detailed installation guides are provided with each order. Professional installation is recommended for best results." },
  { q: "Can panels be used in bathrooms or wet areas?", a: "Standard 3D panels are recommended for interior dry areas only. For moisture-prone areas, additional sealing treatment is required. We recommend marine-grade finish or alternative materials for areas with direct water exposure." },
  { q: "What finish options work best?", a: "Panels accept paint, stain, and clear coats well due to the sand-smooth surface. Water-based finishes are recommended for environmental compliance. Clear lacquer preserves the natural wood appearance, while paint allows bold color statements." },
];

const accentColor = "#4C8A68";

export default function ThreeDWoodPanelDetailPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#F7F3EC] py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-[#6b7280]">
            <Link href="/" className="hover:text-[#0F6B3A]">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/products" className="hover:text-[#0F6B3A]">Products</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/products/3d-wood-panels" className="hover:text-[#0F6B3A]">3D Wood Panels</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-[#1F2621] font-medium">Wave Pattern</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="aspect-square bg-gradient-to-br from-[#C4A77D] to-[#A68B5B] rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-2xl bg-white/50 flex items-center justify-center mb-4">
                    <svg className="w-16 h-16 text-[#4C8A68]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm text-[#4C8A68]/50">3D Panel</span>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <span className="text-sm" style={{ color: accentColor }}>3D Wood Panels</span>
                <span className="mx-2 text-[#E5E1D8]">|</span>
                <span className="text-sm text-[#6b7280]">Code: 3D-WP-001</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#1F2621] mb-4">Wave Pattern 3D Wood Panel</h1>
              <p className="text-[#6b7280] leading-relaxed mb-6">Artistically carved solid wood panel featuring distinctive wave texture. Adds depth and visual interest to walls, doors, ceilings, and furniture surfaces.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["3D Panel", "Wave Pattern", "Solid Wood", "Decorative"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-xs font-medium text-[#1F2621]">{tag}</span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Size", value: "1220×2440mm" },
                  { label: "Thickness", value: "15mm" },
                  { label: "Material", value: "Paulownia / Poplar" },
                  { label: "Pattern", value: "Wave" },
                ].map((item) => (
                  <div key={item.label} className="p-4 bg-[#FDFBF7] rounded-xl">
                    <span className="text-xs text-[#6b7280]">{item.label}</span>
                    <p className="font-semibold text-[#1F2621]">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?type=quote&product=Wave+Pattern+3D+Wood+Panel" className="flex-1 min-w-[160px] px-6 py-4 text-white text-center rounded-lg font-semibold transition-colors" style={{ backgroundColor: accentColor }}>
                  Request a Quote
                </Link>
                <Link href="/contact?type=sample&product=Wave+Pattern+3D+Wood+Panel" className="flex-1 min-w-[160px] px-6 py-4 border-2 text-center rounded-lg font-semibold transition-colors" style={{ borderColor: accentColor, color: accentColor }}>
                  Request Sample
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-6">Product Overview</h2>
            <div className="prose prose-lg text-[#6b7280]">
              <p className="leading-relaxed mb-4">This Wave Pattern 3D wood panel showcases the elegant flow of ocean-inspired waves carved into solid wood. The distinctive three-dimensional texture creates dynamic visual depth that transforms ordinary walls and ceilings into stunning focal points.</p>
              <p className="leading-relaxed mb-4">Perfect for interior feature walls in residential and commercial spaces, hotel lobbies, restaurant interiors, and retail environments. The panel's design not only adds aesthetic value but also provides acoustic benefits by breaking up sound waves.</p>
              <p className="leading-relaxed">Manufactured from lightweight yet sturdy paulownia wood, these panels are easy to handle and install. The tongue and groove system ensures seamless panel-to-panel alignment, while the sand-smooth surface is ready for your choice of paint, stain, or clear coat finish.</p>
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
                  {[
                    { label: "Material", value: "Paulownia / Poplar Core" },
                    { label: "Pattern", value: "Wave" },
                    { label: "Panel Size", value: "1220×2440mm" },
                    { label: "Panel Thickness", value: "15mm" },
                    { label: "Surface", value: "Sand smooth, ready to finish" },
                    { label: "Finish Required", value: "Paint, stain, or clear coat" },
                    { label: "Installation", value: "Tongue & Groove / Adhesive + Nails" },
                    { label: "MOQ", value: "20 panels" },
                    { label: "Packaging", value: "Carton + Pallet" },
                  ].map((row, index) => (
                    <tr key={row.label} className={index % 2 === 0 ? "bg-transparent" : "bg-white/50"}>
                      <td className="px-6 py-4 text-sm font-medium text-[#1F2621] capitalize">{row.label}</td>
                      <td className="px-6 py-4 text-sm text-[#6b7280]">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <FAQClient faqs={faqs} accentColor={accentColor} />

      {/* Final CTA */}
      <section className="py-16" style={{ backgroundColor: accentColor }}>
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need This Product for Your Project?</h2>
            <p className="text-white/80 mb-8">Tell us your required quantity, application, size and finish. Tongli will help you confirm the right product solution.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact?type=quote&product=Wave+Pattern+3D+Panel" className="px-8 py-4 bg-white rounded-lg font-semibold transition-colors" style={{ color: accentColor }}>Request a Quote</Link>
              <Link href="/contact?type=sample&product=Wave+Pattern+3D+Panel" className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Request Samples</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
