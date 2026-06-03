import { Metadata } from "next";
import Link from "next/link";
import { FAQClient, ImageGalleryClient, ContactActionsClient } from "@/components/product/ProductDetailInteractive";

export const metadata: Metadata = {
  title: "White Oak Wood Veneer Plywood | Wood Veneer Panels | Tongli Timber",
  description: "Premium white oak veneer laminated onto high-quality birch plywood substrate. Perfect for furniture, cabinets, doors, and interior wall paneling applications.",
};

const faqs = [
  { q: "What payment terms do you accept?", a: "Payment terms: TT in advance (30% of deposit before production and 70% balance before shipment), bank transfer, LC etc. Please note we do EXW/FOB/CNF/CIF/DDU/DDP." },
  { q: "What is the average lead time?", a: "It depends on the product type and order quantity. Usually we can ship within 7 days for normal orders after receiving full payment. But for large orders, we need about 15 to 20 days." },
  { q: "Can you supply the relevant documentation?", a: "Yes, we can provide most documentation including Certificate of Origin, Phytosanitary Certificate, Bill of Lading, Commercial Invoice, Packing List, etc." },
  { q: "What is your main customer group?", a: "Our main customers are fancy plywood wholesalers, furniture factories, door factories, whole-house customization factories, cabinet production enterprises, hotel construction and decoration / real estate decoration, and so on." },
  { q: "How can we make a deal easily if I have a specific sample in hand?", a: "You send us your sample abroad and tell us your specific requirements. Then we produce a relevant sample according to yours with quotation. And then we send you our sample to your country for your reference and confirmation." },
];

export default function WoodVeneerPanelDetailPage() {
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
            <Link href="/products/wood-veneer-panels" className="hover:text-[#0F6B3A]">Wood Veneer Panels</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-[#1F2621] font-medium">White Oak Wood Veneer Plywood</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6">
            <aside className="w-full md:w-64 flex-shrink-0">
              <div className="bg-[#FDFBF7] rounded-2xl border border-[#E5E1D8] overflow-hidden sticky top-24">
                <div className="px-5 py-4 border-b border-[#E5E1D8]"><h3 className="font-bold text-[#1F2621]">Product Categories</h3></div>
                <nav className="py-2">
                  {[
                    { name: "Wood Veneer Panels", href: "/products/wood-veneer-panels", active: true },
                    { name: "Natural Wood Veneer", href: "/products/natural-wood-veneer" },
                    { name: "Engineered Wood Veneer", href: "/products/engineered-wood-veneer" },
                    { name: "3D Wood Panels", href: "/products/3d-wood-panels" },
                    { name: "Melamine Board", href: "/products/melamine-board" },
                    { name: "Veneer Edge Banding", href: "/products/veneer-edge-banding" },
                    { name: "Supporting Boards", href: "/products/supporting-boards", sub: [{ name: "Plywood", href: "/products" }, { name: "MDF", href: "/products" }, { name: "OSB", href: "/products" }, { name: "Particle Board", href: "/products" }] },
                  ].map((cat) => (
                    <div key={cat.name}>
                      {cat.sub ? (
                        <button className="w-full flex items-center justify-between px-5 py-3 text-sm text-[#6b7280]">
                          <span>{cat.name}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                      ) : (
                        <Link href={cat.href} className={`flex items-center px-5 py-3 text-sm ${cat.active ? "bg-[#0F6B3A]/10 text-[#0F6B3A] font-semibold border-r-2 border-[#0F6B3A]" : "text-[#6b7280] hover:bg-[#E5E1D8]/50"}`}>
                          {cat.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <ImageGalleryClient accentColor="#0F6B3A" />
                </div>
                <div>
                  <div className="mb-4">
                    <span className="text-sm text-[#8B5E3C] font-medium">Wood Veneer Panels</span>
                    <span className="mx-2 text-[#E5E1D8]">|</span>
                    <span className="text-sm text-[#6b7280]">Code: WVP-WO-001</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2621] mb-4">White Oak Wood Veneer Plywood</h1>
                  <p className="text-[#6b7280] leading-relaxed mb-6">Premium white oak veneer laminated onto high-quality birch plywood substrate. Perfect for furniture, cabinets, doors, and interior wall paneling applications.</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {["Wood Veneer Panel", "White Oak", "Birch Plywood", "E0 Grade"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-xs font-medium text-[#1F2621]">{tag}</span>
                    ))}
                  </div>
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-[#1F2621] mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      <Link href="/about" className="hover:text-[#0F6B3A]">About Us</Link>
                    </h3>
                    <p className="text-sm text-[#6b7280]">We are a 25+ year manufacturer specializing in producing wooden products of veneer plywood, veneer mdf, commercial plywood and wood veneer sheets with more than 95% repurchase rate.</p>
                  </div>
                  <ContactActionsClient productName="White Oak Wood Veneer Plywood" />
                  <div className="flex items-center gap-3 mt-4">
                    <span className="text-xs text-[#9CA3AF]">Follow us:</span>
                    {[
                      { href: "https://www.facebook.com/TongliTimber" },
                      { href: "https://www.instagram.com/tongli_timber" },
                      { href: "https://www.linkedin.com/company/tongli-timber" },
                      { href: "https://www.youtube.com/@TongliTimber" },
                      { href: "https://www.tiktok.com/@tongli_timber" },
                    ].map((s) => (
                      <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#F3F4F6] hover:bg-[#0F6B3A] flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-[#6b7280] hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/></svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Specification Table */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1F2621] mb-5">Detailed Specifications</h2>
            <div className="rounded-xl overflow-hidden border border-[#E5E1D8] shadow-sm overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <tbody>
                  {[
                    { label: "Brand Name", value: "TONGLI" },
                    { label: "Product Name", value: "Wood Veneer Panels / Veneer Board / Veneer Faced Panels / Veneer Plywood / Veneer MDF / Wood Veneer Decorative Panels / Fancy Plywood / Veneer Wall Panels" },
                    { label: "Face Veneer", value: "White Oak (Natural)" },
                    { label: "Substrate", value: "Birch Plywood" },
                    { label: "Panel Size", value: "1220×2440mm" },
                    { label: "Panel Thickness", value: "18mm" },
                    { label: "Veneer Thickness", value: "0.5mm" },
                    { label: "Surface Finish", value: "Sanded Smooth" },
                    { label: "Glue Grade", value: "E0 (CARB P2)" },
                    { label: "MOQ", value: "50 sheets" },
                    { label: "Lead Time", value: "15-25 days" },
                  ].map((row, index) => (
                    <tr key={row.label} className={`${index % 2 === 0 ? "bg-[#FDFBF7]" : "bg-white/60"} border-b border-[#E5E1D8] last:border-b-0`}>
                      <td className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-[#0F6B3A] w-32 sm:w-44 align-middle pr-3 sm:pr-4 border-r border-[#E5E1D8]">{row.label}</td>
                      <td className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm text-[#6b7280]">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <FAQClient faqs={faqs} accentColor="#0F6B3A" />
    </>
  );
}
