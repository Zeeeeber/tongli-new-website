import { Metadata } from "next";
import Link from "next/link";
import { FAQClient } from "@/components/product/ProductDetailInteractive";

export const metadata: Metadata = {
  title: "Oak Classic Engineered Wood Veneer | Engineered Wood Veneer | Tongli Timber",
  description: "Premium reconstituted oak veneer with consistent straight grain pattern. Color-stable and batch-uniform, perfect for large-scale furniture and cabinet production.",
};

const faqs = [
  { q: "What is the difference between engineered and natural veneer?", a: "Engineered veneer (reconstituted veneer) is manufactured from fast-growing wood species that are dyed, sliced, and reassembled to create consistent patterns. Natural veneer is sliced directly from real wood logs. Engineered veneer offers superior batch-to-batch consistency, longer sheet lengths, and more design flexibility." },
  { q: "How many patterns does your engineered veneer collection offer?", a: "We offer 300+ patterns in various wood species, colors, and grain styles. New patterns are developed regularly to meet market trends and customer requirements." },
  { q: "What backing options are available?", a: "Standard options include loose (unbacked), fleece backed, paper backed, and wood backed. Fleece backing provides flexibility for curved surfaces, while paper backing offers dimensional stability for flat panel applications." },
  { q: "Can I get custom patterns or colors?", a: "Yes, we offer custom pattern development and color matching for bulk orders. Contact our team with your reference samples, color specifications, or design concept for a custom quote." },
];

export default function EngineeredVeneerDetailPage() {
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
            <Link href="/products/engineered-wood-veneer" className="hover:text-[#0F6B3A]">Engineered Wood Veneer</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-[#1F2621] font-medium">Oak Classic</span>
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
                    <svg className="w-16 h-16 text-[#0F6B3A]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <span className="text-sm text-[#0F6B3A]/50">Product Image</span>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <span className="text-sm text-[#0F6B3A] font-medium">Engineered Wood Veneer</span>
                <span className="mx-2 text-[#E5E1D8]">|</span>
                <span className="text-sm text-[#6b7280]">Code: TLE-001</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#1F2621] mb-4">Oak Classic Engineered Wood Veneer</h1>
              <p className="text-[#6b7280] leading-relaxed mb-6">Premium reconstituted oak veneer with consistent straight grain pattern. Color-stable and batch-uniform, perfect for large-scale furniture and cabinet production.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Engineered", "Oak", "Reconstituted", "Color Stable"].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-xs font-medium text-[#1F2621]">{tag}</span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Pattern", value: "Oak Classic" },
                  { label: "Grain Style", value: "Straight Grain" },
                  { label: "Thickness", value: "0.5mm" },
                  { label: "Size", value: "2450×1270mm" },
                ].map((item) => (
                  <div key={item.label} className="p-4 bg-[#FDFBF7] rounded-xl">
                    <span className="text-xs text-[#6b7280]">{item.label}</span>
                    <p className="font-semibold text-[#1F2621]">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?type=quote&product=Oak+Classic+Engineered+Wood+Veneer" className="flex-1 min-w-[160px] px-6 py-4 bg-[#0F6B3A] text-white text-center rounded-lg font-semibold hover:bg-[#124B34] transition-colors">
                  Request a Quote
                </Link>
                <Link href="/contact?type=sample&product=Oak+Classic+Engineered+Wood+Veneer" className="flex-1 min-w-[160px] px-6 py-4 border-2 border-[#0F6B3A] text-[#0F6B3A] text-center rounded-lg font-semibold hover:bg-[#0F6B3A]/5 transition-colors">
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
              <p className="leading-relaxed mb-4">This Oak Classic engineered wood veneer features the timeless appeal of natural oak with the consistency and predictability that modern manufacturing requires. Each sheet is produced from carefully selected wood species through a process of dyeing, slicing, and reassembling to create a beautiful, uniform grain pattern.</p>
              <p className="leading-relaxed mb-4">The reconstituted manufacturing process ensures that every sheet matches precisely, eliminating the natural variations found in natural wood veneer. This consistency is particularly valuable for large-scale production runs where multiple sheets must align perfectly across doors, cabinet panels, or wall installations.</p>
              <p className="leading-relaxed">Engineered veneer offers significant advantages for furniture manufacturers, door producers, and commercial interior projects. Beyond consistency, it provides longer sheet lengths without joint lines, stable color reproduction batch after batch, and the flexibility to create custom patterns and tones that may not exist in nature.</p>
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
                    { label: "Pattern", value: "Oak Classic" },
                    { label: "Color Tone", value: "Light" },
                    { label: "Grain Style", value: "Straight Grain" },
                    { label: "Thickness", value: "0.5mm" },
                    { label: "Size", value: "2450×1270mm" },
                    { label: "Backing", value: "Fleece Backed (Optional)" },
                    { label: "Application", value: "Furniture, Cabinets, Doors, Wall Panels, Commercial" },
                    { label: "MOQ", value: "200 sheets (~500 sqm)" },
                    { label: "Packaging", value: "Paper interleaved, wooden pallet" },
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

      <FAQClient faqs={faqs} accentColor="#0F6B3A" />

      {/* Final CTA */}
      <section className="py-16 bg-[#0F6B3A]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need This Product for Your Project?</h2>
            <p className="text-white/80 mb-8">Tell us your required quantity, application, size and finish. Tongli will help you confirm the right product solution.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact?type=quote&product=Oak+Classic" className="px-8 py-4 bg-white text-[#0F6B3A] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors">Request a Quote</Link>
              <Link href="/contact?type=sample&product=Oak+Classic" className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Request Samples</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
