"use client";

import Link from "@/components/i18n/LocalizedLink";
import { useState } from "react";
import { ContactFormModal } from "@/components/contact/ContactFormModal";
import type { NaturalWoodVeneerProduct } from "@/data/products/natural-wood-veneer-products";
import type { RelatedProduct } from "@/data/products/natural-wood-veneer-products";
import type { naturalWoodVeneerFaqs } from "@/data/products/natural-wood-veneer-products";

interface ProductDetailClientProps {
  product: NaturalWoodVeneerProduct;
  relatedProducts?: RelatedProduct[];
  faqs?: { q: string; a: string }[];
}

export function ProductDetailClient({
  product,
  relatedProducts = [],
  faqs = [],
}: ProductDetailClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  const titleCase = (str: string) =>
    str.replace(/\b[a-zA-Z]+\b/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

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
            <Link href="/products/natural-wood-veneer" className="hover:text-[#0F6B3A]">Natural Wood Veneer</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1F2621] font-medium truncate max-w-[200px]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Product Categories Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0">
              <div className="bg-[#FDFBF7] rounded-2xl border border-[#E5E1D8] overflow-hidden sticky top-24">
                <div className="px-5 py-4 border-b border-[#E5E1D8]">
                  <h3 className="font-bold text-[#1F2621]">Product Categories</h3>
                </div>
                <nav className="py-2">
                  {[
                    { name: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
                    { name: "Natural Wood Veneer", href: "/products/natural-wood-veneer", active: true },
                    { name: "Engineered Wood Veneer", href: "/products/engineered-wood-veneer" },
                    { name: "3D Wood Panels", href: "/products/3d-wood-panels" },
                    { name: "Melamine Board", href: "/products/melamine-board" },
                    { name: "Veneer Edge Banding", href: "/products/veneer-edge-banding" },
                    {
                      name: "Supporting Boards",
                      href: "/products/supporting-boards",
                      sub: [
                        { name: "Plywood", href: "/products" },
                        { name: "MDF", href: "/products" },
                        { name: "OSB", href: "/products" },
                        { name: "Particle Board", href: "/products" },
                      ],
                    },
                  ].map((cat) => (
                    <div key={cat.name}>
                      {cat.sub ? (
                        <button
                          onClick={() => {
                            const btn = document.getElementById(`cat-${cat.name.replace(/\s+/g, "-")}`);
                            if (btn) btn.classList.toggle("hidden");
                          }}
                          className="w-full flex items-center justify-between px-5 py-3 text-sm text-[#6b7280] hover:bg-[#E5E1D8]/50 hover:text-[#1F2621] transition-colors"
                        >
                          <span>{cat.name}</span>
                          <svg id={`chevron-${cat.name.replace(/\s+/g, "-")}`} className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      ) : (
                        <Link
                          href={cat.href}
                          className={`flex items-center justify-between px-5 py-3 text-sm transition-colors ${
                            cat.active
                              ? "bg-[#0F6B3A]/10 text-[#0F6B3A] font-semibold border-r-2 border-[#0F6B3A]"
                              : "text-[#6b7280] hover:bg-[#E5E1D8]/50 hover:text-[#1F2621]"
                          }`}
                        >
                          {cat.name}
                        </Link>
                      )}
                      <div id={`cat-${cat.name.replace(/\s+/g, "-")}`} className="hidden bg-[#F7F3EC]">
                        {cat.sub && cat.sub.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block pl-8 pr-5 py-2.5 text-sm text-[#6b7280] hover:text-[#1F2621] transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content Grid */}
            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Image Gallery */}
                <div>
                  <div className="aspect-video sm:aspect-square bg-gradient-to-br from-[#F7F3EC] to-[#E8E4DB] rounded-2xl overflow-hidden mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center mb-4">
                        <svg className="w-16 h-16 text-[#8B5E3C]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm text-[#8B5E3C]/50">Product Image {selectedImage + 1}</span>
                    </div>
                  </div>
                  {/* Thumbnails */}
                  <div className="grid grid-cols-4 gap-3">
                    {[0, 1, 2, 3].map((i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedImage(i)}
                        className={`aspect-square rounded-lg bg-gradient-to-br from-[#F7F3EC] to-[#E8E4DB] flex items-center justify-center ${selectedImage === i ? "ring-2 ring-[#0F6B3A]" : ""}`}
                      >
                        <svg className="w-6 h-6 text-[#8B5E3C]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <div className="mb-4">
                    <span className="text-sm text-[#8B5E3C] font-medium">{product.category}</span>
                    <span className="mx-2 text-[#E5E1D8]">|</span>
                    <span className="text-sm text-[#6b7280]">Code: {product.code}</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2621] mb-4">{product.name}</h1>
                  <p className="text-[#6b7280] leading-relaxed mb-6">{product.shortDesc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-xs font-medium text-[#1F2621]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Company Profile */}
                  <div className="mb-8 space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#1F2621] mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <Link href="/about" className="hover:text-[#0F6B3A] transition-colors">
                          About Us
                        </Link>
                      </h3>
                      <p className="text-sm text-[#6b7280] leading-relaxed">
                        We are a 25+ year manufacturer specializing in producing wooden products of veneer plywood, veneer mdf, commercial plywood and wood veneer sheets with more than 95% repurchase rate.
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4">
                      <Link
                        href="/contact"
                        className="flex-1 min-w-[120px] px-4 py-3 bg-[#0F6B3A] text-white text-center rounded-lg font-semibold hover:bg-[#124B34] transition-colors"
                      >
                        CONTACT US
                      </Link>
                    <a
                      href="https://wa.me/message/2DMHTU2VVZTKC1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px] px-4 py-3 bg-[#25D366] text-white text-center rounded-lg font-semibold hover:bg-[#20BD5A] transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WHATSAPP
                    </a>
                  </div>


                  <ContactFormModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1F2621] mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.code}
                  href={rp.href}
                  className="group bg-white rounded-xl border border-[#E5E1D8] overflow-hidden hover:border-[#0F6B3A]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`aspect-square bg-gradient-to-br ${rp.gradient} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-10 h-10 text-[#8B5E3C]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[#0F6B3A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 bg-white text-[#0F6B3A] rounded-lg font-medium text-sm">View Details</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-[#0F6B3A] font-mono">{rp.code}</span>
                    <h3 className="font-semibold text-[#1F2621] mt-1 mb-2 line-clamp-1">{rp.name}</h3>
                    <div className="text-xs text-[#6b7280]">
                      <p>{rp.species} | {rp.cut}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-12 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-widest mb-2 sm:mb-3">FAQ</p>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F2621]">Frequently Asked Questions</h2>
                <div className="w-12 sm:w-16 h-1 bg-[#0F6B3A] mx-auto mt-3 sm:mt-4 rounded-full"></div>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl border border-[#E5E1D8] overflow-hidden hover:border-[#0F6B3A]/30 transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-start justify-between gap-3 p-4 sm:p-6 text-left"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-xs font-bold text-[#0F6B3A] bg-[#0F6B3A]/10 px-3 py-1.5 rounded-lg mt-0.5 flex-shrink-0">
                          0{index + 1}
                        </span>
                        <span className="text-[#1F2621] font-medium pr-4 leading-relaxed text-sm lg:text-base">{faq.q}</span>
                      </div>
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === index ? "bg-[#0F6B3A] border-[#0F6B3A] rotate-45" : "border-[#E5E1D8] group-hover:border-[#0F6B3A]/50"}`}>
                        <svg className={`w-4 h-4 transition-colors duration-300 ${openFaq === index ? "text-white" : "text-[#6b7280] group-hover:text-[#0F6B3A]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                        </svg>
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? "max-h-60" : "max-h-0"}`}>
                      <div className="px-4 sm:px-6 pb-5 sm:pb-6 ml-10 sm:ml-20 text-[#6b7280] leading-relaxed text-xs sm:text-sm border-t border-[#F7F3EC] pt-4">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
