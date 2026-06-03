"use client";

import Link from "next/link";
import { useState } from "react";
import { ContactFormModal } from "@/app/contact/page";

// Natural Wood Veneer product detail
const product = {
  name: "Natural Wood Veneer Sheets",
  code: "NV-NAT-001",
  category: "Natural Wood Veneer",
  shortDesc: "Premium natural wood veneer sheets in a wide variety of species including oak, walnut, ash, maple, cherry and more. Ideal for furniture, doors, wall panels and interior decoration.",
  tags: ["Natural Wood Veneer", "Real Wood Veneer", "Wood Sheets", "Decorative Veneer"],
  specs: {
    productType: "Natural Wood Veneer",
    faceVeneer: "Various Species (Oak, Walnut, Ash, etc.)",
    substrate: "Rotary Cut / Sliced",
    panelSize: "2440×1220mm / 2800×1220mm",
    panelThickness: "0.15mm - 0.6mm",
    veneerThickness: "Various Grades",
    surfaceFinish: "Raw / Sanded",
    glueGrade: "E0 / E1",
    moq: "100 sheets per species",
    leadTime: "7-15 days",
    packaging: "Standard Bundle / Pallet",
    application: "Furniture, Doors, Wall Panels, Cabinets",
  },
  overview: `Our natural wood veneer sheets are sourced from sustainably managed forests and processed with precision cutting techniques to deliver authentic wood grain patterns and rich natural color tones.

Each veneer sheet is carefully selected and graded to ensure consistent quality in terms of grain pattern, color uniformity, and thickness tolerance. Available in a wide range of wood species including white oak, American walnut, ash, maple, cherry, teak, and many more.

The natural wood veneer can be applied to various substrates including MDF, plywood, particle board, and blockboard for different applications in furniture manufacturing, interior decoration, door production, and architectural millwork.`,
};

const applications = [
  { name: "Furniture", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" },
  { name: "Doors", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
  { name: "Cabinets", icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
  { name: "Wall Panels", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { name: "Hotel Interiors", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { name: "Commercial Spaces", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
];

const qualityPackaging = [
  "Color and grain pattern checking before lamination",
  "Moisture content control (8-12%)",
  "Surface inspection for defects and imperfections",
  "Thickness tolerance within ±0.2mm",
  "Flatness and warping inspection",
  "Export-standard wooden pallet packaging",
  "Corner protection and shrink wrapping",
];

const relatedProducts = [
  { name: "Natural Wood Veneer Sheets", href: "/products/natural-wood-veneer" },
  { name: "Engineered Oak Veneer Panel", href: "/products/engineered-wood-veneer" },
  { name: "Walnut Wood Veneer Plywood", href: "/products/wood-veneer-panels/walnut-veneer-plywood" },
  { name: "Veneer Edge Banding", href: "/products/veneer-edge-banding" },
];

const faqs = [
  { q: "What payment terms do you accept?", a: "Payment terms: TT in advance (30% of deposit before production and 70% balance before shipment), bank transfer, LC etc. Please note we do EXW/FOB/CNF/CIF/DDU/DDP." },
  { q: "What is the average lead time?", a: "It depends on the product type and order quantity. Usually we can ship within 7 days for normal orders after receiving full payment. But for large orders, we need about 15 to 20 days." },
  { q: "Can you supply the relevant documentation?", a: "Yes, we can provide most documentation including Certificate of Origin, Phytosanitary Certificate, Bill of Lading, Commercial Invoice, Packing List, etc." },
  { q: "What is your main customer group?", a: "Our main customers are fancy plywood wholesalers, furniture factories, door factories, whole-house customization factories, cabinet production enterprises, hotel construction and decoration / real estate decoration, and so on." },
  { q: "How can we make a deal easily if I have a specific sample in hand?", a: "You send us your sample abroad and tell us your specific requirements. Then we produce a relevant sample according to yours with quotation. And then we send you our sample to your country for your reference and confirmation." },
];

export default function WoodVeneerPanelDetailPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

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
            <Link href="/products/wood-veneer-panels" className="hover:text-[#0F6B3A]">Wood Veneer Panels</Link>
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
                    {
                      name: "Wood Veneer Panels",
                      href: "/products/wood-veneer-panels",
                      active: true,
                    },
                    {
                      name: "Natural Wood Veneer",
                      href: "/products/natural-wood-veneer",
                    },
                    {
                      name: "Engineered Wood Veneer",
                      href: "/products/engineered-wood-veneer",
                    },
                    {
                      name: "3D Wood Panels",
                      href: "/products/3d-wood-panels",
                    },
                    {
                      name: "Melamine Board",
                      href: "/products/melamine-board",
                    },
                    {
                      name: "Veneer Edge Banding",
                      href: "/products/veneer-edge-banding",
                    },
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
                            const btn = document.getElementById(`cat-${cat.name.replace(/\s+/g, '-')}`);
                            if (btn) btn.classList.toggle("hidden");
                          }}
                          className="w-full flex items-center justify-between px-5 py-3 text-sm text-[#6b7280] hover:bg-[#E5E1D8]/50 hover:text-[#1F2621] transition-colors"
                        >
                          <span>{cat.name}</span>
                          <svg id={`chevron-${cat.name.replace(/\s+/g, '-')}`} className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <div id={`cat-${cat.name.replace(/\s+/g, '-')}`} className="hidden bg-[#F7F3EC]">
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
              <div className="grid grid-cols-4 md:grid-cols-4 gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`aspect-square rounded-lg bg-gradient-to-br from-[#F7F3EC] to-[#E8E4DB] flex items-center justify-center ${
                      selectedImage === i ? 'ring-2 ring-[#0F6B3A]' : ''
                    }`}
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

              {/* Company Profile & Advantages */}
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
                <button
                  onClick={() => setShowContactModal(true)}
                  className="flex-1 min-w-[120px] px-4 py-3 bg-[#0F6B3A] text-white text-center rounded-lg font-semibold hover:bg-[#124B34] transition-colors"
                >
                  CONTACT US
                </button>
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

              {/* Social Media Links */}
              <div className="flex items-center gap-3 mt-4">
                <span className="text-xs text-[#9CA3AF]">Follow us:</span>
                <a href="https://www.facebook.com/TongliTimber" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#F3F4F6] hover:bg-[#0F6B3A] flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-[#6b7280] hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                <a href="https://www.instagram.com/tongli_timber" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#F3F4F6] hover:bg-[#0F6B3A] flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-[#6b7280] hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                <a href="https://www.linkedin.com/company/tongli-timber" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#F3F4F6] hover:bg-[#0F6B3A] flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-[#6b7280] hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="https://www.youtube.com/@TongliTimber" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#F3F4F6] hover:bg-[#0F6B3A] flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-[#6b7280] hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
                <a href="https://www.tiktok.com/@tongli_timber" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#F3F4F6] hover:bg-[#0F6B3A] flex items-center justify-center transition-colors">
                  <svg className="w-4 h-4 text-[#6b7280] hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                </a>
              </div>

              <ContactFormModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
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
                    {
                      label: "Product Name",
                      value: "Wood Veneer Panels / Veneer Board / Veneer Faced Panels / Veneer Plywood / Veneer MDF / Wood Veneer Decorative Panels / Fancy Plywood / Veneer Wall Panels",
                    },
                    {
                      label: "Face Veneer",
                      value: (
                        <div className="space-y-3">
                          <div>
                            <p className="font-semibold text-[#1F2621] text-xs uppercase tracking-wide mb-1">Natural Wood Veneer</p>
                            <p className="text-[#6b7280] text-sm leading-relaxed">Poplar / Pine / Hardwood, Red Oak / White Oak, Ash, Sapele, Teak, Maple, Cherry, Birch, Black Walnut, Wenge, Elm, etc.</p>
                          </div>
                          <div>
                            <p className="font-semibold text-[#1F2621] text-xs uppercase tracking-wide mb-1">Engineered / Recon Wood Veneer</p>
                            <p className="text-[#6b7280] text-sm leading-relaxed">Over 300 different kinds to choose</p>
                          </div>
                          <div>
                            <p className="font-semibold text-[#1F2621] text-xs uppercase tracking-wide mb-1">Dyed Wood Veneer</p>
                            <p className="text-[#6b7280] text-sm leading-relaxed">All natural veneers can be dyed to the colors you want</p>
                          </div>
                          <div>
                            <p className="font-semibold text-[#1F2621] text-xs uppercase tracking-wide mb-1">Smoked Wood Veneer</p>
                            <p className="text-[#6b7280] text-sm leading-relaxed">Smoked Oak, Smoked Eucalyptus, etc.</p>
                          </div>
                        </div>
                      ),
                    },
                    {
                      label: "Panel Types",
                      value: "Veneered Plain MDF / Veneered Moisture-resistant MDF / Veneered MR MDF / Veneered Flame Retardant MDF / Veneered FR MDF / Veneered Blockboard / Veneered Plywood",
                    },
                    {
                      label: "Dimension",
                      value: (
                        <div className="space-y-2">
                          <div>
                            <p className="font-semibold text-[#1F2621] text-xs uppercase tracking-wide mb-1">Inch</p>
                            <p className="text-[#6b7280] text-sm">4×8ft / 4×9ft / 4×10ft / 4×11ft / 4×12ft</p>
                          </div>
                          <div>
                            <p className="font-semibold text-[#1F2621] text-xs uppercase tracking-wide mb-1">Metric</p>
                            <p className="text-[#6b7280] text-sm">2440×1220mm / 2600×1220mm / 2800×1220mm / 3050×1220mm / 3200×1220mm / 3400×1220mm / 3600×1220mm</p>
                          </div>
                        </div>
                      ),
                    },
                    {
                      label: "Thickness",
                      value: "2.5mm / 3.0mm / 3.6mm / 5mm / 9mm / 12mm / 15mm / 18mm / 25mm",
                    },
                    {
                      label: "Surface Finish",
                      value: "Sanded / Brushed / Closed Paint / Semi-Open Paint / Open Paint / Water-Based Paint",
                    },
                    {
                      label: "Moisture",
                      value: "7-12% (depends on the thickness)",
                    },
                    {
                      label: "Formaldehyde Emission Grade",
                      value: "ENF / E0 / E1 / P1 / P2",
                    },
                    {
                      label: "Usage",
                      value: "Interior walls, ceilings, furniture, cabinet doors, wardrobes, doors, partitions, hotel decoration, office decoration, home decoration, background walls, display shelves, decorative lines, commercial space decoration, villa decoration, shopping mall decoration",
                    },
                    {
                      label: "Export Packing",
                      value: "Wooden frame packaging / in bulk / custom packaging",
                    },
                    {
                      label: "Loading Quantity",
                      value: (
                        <div className="space-y-1">
                          <p className="text-[#6b7280] text-sm">8 Packages For 20'GP</p>
                          <p className="text-[#6b7280] text-sm">16 Packages For 40'HQ</p>
                        </div>
                      ),
                    },
                    {
                      label: "Delivery Time",
                      value: "Normally about 7 to 15 days, depends on quantity and requirement",
                    },
                    {
                      label: "Main Customer Group",
                      value: "Wholesalers, furniture factories, door factories, whole-house customization factories, cabinet factories, hotel construction and decoration projects, real estate decoration projects",
                    },
                    {
                      label: "Payment Term",
                      value: "30% by TT as deposit of order, 70% by TT before loading or 70% by irrevocable LC at sight",
                    },
                  ].map((row, index) => (
                    <tr
                      key={row.label}
                      className={`group transition-colors ${index % 2 === 0 ? "bg-[#FDFBF7]" : "bg-white/60"} hover:bg-[#0F6B3A]/5 border-b border-[#E5E1D8] last:border-b-0`}
                    >
                      <td className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-[#0F6B3A] w-32 sm:w-44 align-middle pr-3 sm:pr-4 border-r border-[#E5E1D8]">
                        {row.label}
                      </td>
                      <td className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm text-[#6b7280] align-top">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Content */}
      <div>
        {/* 01. Banner */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Veneer Panel Solutions</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Professional Veneer Panels Supplier</h2>
                <p className="text-sm text-[#6b7280] mb-4 sm:mb-6">One-stop wood veneer panel solutions for furniture, doors, wall panels and interior projects.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Tongli Timber provides customized veneer panel solutions covering substrates, natural veneers, engineered veneers, lamination, UV coating and packaging. From material selection to finished panel delivery, we help manufacturers and project buyers get stable quality, flexible customization and reliable supply.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {["Factory direct supply", "Custom veneer and substrate options", "Suitable for furniture, doors, cabinets and interior decoration", "Stable quality control from production to loading"].map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{point}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => {}} className="px-8 py-4 bg-[#0F6B3A] text-white rounded-lg font-semibold hover:bg-[#124B34] transition-colors">Request A Veneer Panel Solution</button>
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden bg-[#F7F3EC]">
                  <img src="/images/products/products_wood veneer panel_detail page/1.Detail Page_Detail Page_Banner.png" alt="Veneer Panel Solutions" className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02. Product Features */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="h-auto rounded-2xl overflow-hidden bg-[#F7F3EC]">
                  <img src="/images/products/products_wood veneer panel_detail page/2.Detail Page_PRODUCT FEATURES.jpg" alt="Product Features" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Product Features</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Stable Quality for Industrial Production</h2>
                <p className="text-xs sm:text-sm text-[#6b7280] mb-4 sm:mb-6 italic">Designed for manufacturers who care about consistency, processing performance and surface appearance.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Our veneer panels are produced with strict control over moisture content, thickness tolerance, surface smoothness and panel edge quality. Each board is processed to support stable cutting, laminating, sanding, painting and further manufacturing. This helps furniture factories, door factories and interior panel producers reduce material waste and improve production efficiency.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {["Moisture content controlled at around 7%–12%", "Thickness tolerance within ±0.2mm", "Smooth surface for painting or coating", "Clean panel sides with fewer defects"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. Product Real Shots */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Product Details</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Real Product Details You Can Check Before Ordering</h2>
                <p className="text-xs sm:text-sm text-[#6b7280] mb-4 sm:mb-6 italic">Clear surface texture, stable panel structure and multiple veneer options.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">We believe reliable B2B cooperation starts with visible product details. Our real product photos show the surface grain, panel thickness, edge structure and veneer finish from different angles. Whether you need natural wood texture, engineered veneer patterns or customized surface colors, we can provide samples and production references before bulk order confirmation.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {["Sample confirmation", "Color and grain selection", "Project material approval", "Bulk order quality reference"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="h-auto rounded-2xl overflow-hidden bg-[#F7F3EC]">
                  <img src="/images/products/products_wood veneer panel_detail page/3.Detail Page_Products Real Shots.jpg" alt="Product Real Shots" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04. Product Application */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="h-auto rounded-2xl overflow-hidden bg-[#F7F3EC]">
                  <img src="/images/products/products_wood veneer panel_detail page/4.Detail Page_PRODUCT APPLICATION.jpg" alt="Product Application" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Applications</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Made for Furniture, Doors and Interior Decoration Projects</h2>
                <p className="text-xs sm:text-sm text-[#6b7280] mb-4 sm:mb-6 italic">A decorative panel solution for both manufacturing and commercial spaces.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Tongli veneer panels are widely used in furniture production, wooden doors, wardrobes, cabinets, wall panels, hotel interiors, commercial spaces and residential decoration. With different veneer species, substrates and surface treatments available, our panels can meet both aesthetic and functional requirements for modern interior projects.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {["Furniture panels and cabinet doors", "Wooden doors and door skins", "Wall cladding and decorative panels", "Hotel, apartment and commercial interior projects"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05. Company Profile */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">About Us</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">A Veneer Panel Manufacturer Since 1999</h2>
                <p className="text-xs sm:text-sm text-[#6b7280] mb-4 sm:mb-6 italic">Factory experience, stable production capacity and long-term export service.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Dongguan Tongli Timber Products Co., Ltd. was established in 1999 and specializes in high-quality veneer plywood, fancy plywood, wood veneer, UV coated veneer panels and 3D wood panels. With modern production facilities, skilled workers and years of experience in wood-based decorative materials, we support global buyers with stable supply, custom processing and professional export service.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {["Over 20 years of wood industry experience", "Factory facilities covering large-scale production", "Rich experience in veneer lamination and panel processing", "Serving furniture, door, cabinet and interior project customers worldwide"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="h-auto rounded-2xl overflow-hidden bg-[#F7F3EC]">
                  <img src="/images/products/products_wood veneer panel_detail page/5.Detail Page_Company Profile.png" alt="Company Profile" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06. Certifications */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="h-auto rounded-2xl overflow-hidden bg-[#F7F3EC]">
                  <img src="/images/products/products_wood veneer panel_detail page/6.Detail Page_Certification.png" alt="Certifications" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Certifications</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Certified Materials for Safer and More Reliable Supply</h2>
                <p className="text-xs sm:text-sm text-[#6b7280] mb-4 sm:mb-6 italic">Quality documents available for export buyers and project approval.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">For overseas buyers, product compliance and documentation are essential. Tongli Timber can provide related certificates and test reports according to different market and project requirements, helping customers reduce sourcing risks and complete supplier evaluation more efficiently.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {["SGS test reports", "FSC-related documentation", "CE / GMC / product compliance files", "Export documentation support"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07. Customer Feedback */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Testimonials</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Trusted by Long-term Overseas Customers</h2>
                <p className="text-xs sm:text-sm text-[#6b7280] mb-4 sm:mb-6 italic">Real cooperation feedback from buyers, distributors and manufacturers.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Our customers value stable quality, clear communication and reliable delivery. From sample confirmation to repeat orders, we focus on solving real sourcing problems for overseas buyers, including veneer matching, edge banding compatibility, packaging requirements and production schedule control.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {["Consistent veneer color and grain", "Good panel quality after delivery", "Matched edge banding options", "Reliable cooperation for repeat orders"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="h-auto rounded-2xl overflow-hidden bg-[#F7F3EC]">
                  <img src="/images/products/products_wood veneer panel_detail page/7.Detail Page_Customer Feedback.png" alt="Customer Feedback" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 08. Production Process */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="h-auto rounded-2xl overflow-hidden bg-[#F7F3EC]">
                  <img src="/images/products/products_wood veneer panel_detail page/8.Detail Page_Production Process.png" alt="Production Process" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Production</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Controlled Production Process from Log to Finished Panel</h2>
                <p className="text-xs sm:text-sm text-[#6b7280] mb-4 sm:mb-6 italic">Every step is managed to improve panel stability and final surface quality.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Our veneer panel production covers slicing, veneer cutting, base plywood patching, gluing, laminating, cold pressing, hot pressing, sanding, grading, packaging and loading. By controlling each step, we help customers receive panels with better bonding strength, smoother surfaces and more consistent quality for further processing.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {["Veneer slicing and cutting", "Glue application and lamination", "Cold pressing and hot pressing", "Sanding and grading"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 09. Substrate & Size Options */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Custom Options</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Flexible Substrate Options for Different Applications</h2>
                <p className="text-xs sm:text-sm text-[#6b7280] mb-4 sm:mb-6 italic">Choose the right base board according to strength, cost, weight and usage scenario.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Different projects require different substrates. We can produce veneer panels on plywood, MDF, particle board, OSB and other wood-based boards according to your application needs. Standard and extended sizes are available to support furniture production, door manufacturing, wall panels and customized interior projects.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {["Standard size: 2440×1220mm", "Extended sizes available upon request", "Thickness options from 3mm to 25mm", "Plywood / MDF / Particle board / OSB"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="h-auto rounded-2xl overflow-hidden bg-[#F7F3EC]">
                  <img src="/images/products/products_wood veneer panel_detail page/9.Detail Page_Custom_Service_SUBSTRATE OPTIONS.png" alt="Substrate Options" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Wood Veneer Options */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="h-auto rounded-2xl overflow-hidden bg-[#F7F3EC]">
                  <img src="/images/products/products_wood veneer panel_detail page/10.Detail Page_Custom_Service_WOOD VENEER OPTIONS.png" alt="Wood Veneer Options" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Veneer Selection</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Wide Veneer Selection for Custom Decorative Panels</h2>
                <p className="text-xs sm:text-sm text-[#6b7280] mb-4 sm:mb-6 italic">Natural veneer, engineered veneer, dyed veneer and smoked veneer options.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">We offer a wide range of wood veneer options to meet different design styles and market preferences. Buyers can choose from natural wood veneer, engineered veneer, dyed veneer and smoked veneer. Whether your project needs classic oak, walnut, ash, teak, basswood or customized colors, we can help match the right veneer solution.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {["Natural wood veneer", "Engineered veneer", "Dyed veneer & smoked veneer", "Over 300 engineered veneer styles available"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Veneer Grade, Grain, Matching & Thickness */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Veneer Details</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Custom Veneer Details for Better Visual Consistency</h2>
                <p className="text-xs sm:text-sm text-[#6b7280] mb-4 sm:mb-6 italic">Control veneer grade, grain direction, matching method and thickness according to your design requirements.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">The final appearance of veneer panels depends heavily on veneer selection and matching. We provide different veneer grades, grain options, matching methods and thickness choices to help customers achieve consistent visual results for furniture, doors, cabinets and wall decoration.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {["Veneer grade: AAA+, AAA, AA", "Grain: straight grain and mountain grain", "Book match, slip match and mixed match", "Custom matching available for project orders"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="h-auto rounded-2xl overflow-hidden bg-[#F7F3EC]">
                  <img src="/images/products/products_wood veneer panel_detail page/11.Detail Page_Custom_Service_WOOD VENEER Grade.png" alt="Veneer Grade" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Surface Treatment Options */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="h-auto rounded-2xl overflow-hidden bg-[#F7F3EC]">
                  <img src="/images/products/products_wood veneer panel_detail page/12.Detail Page_Custom_Service_SURFACE TREATMENT OPTIONS.png" alt="Surface Treatment Options" className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Surface Treatment</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Multiple Surface Treatments for Different Finishing Effects</h2>
                <p className="text-xs sm:text-sm text-[#6b7280] mb-4 sm:mb-6 italic">From raw sanding to UV coating, choose the finish that fits your production or project needs.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Tongli Timber provides different surface treatment options including sanding, brushing, open paint, closed paint, semi-open paint, water-based paint and UV coating. These finishes help customers achieve different visual effects, touch feelings and processing requirements for furniture, doors and decorative panels.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {["Sanded surface & brushed texture", "Open paint & closed paint finish", "Semi-open paint finish", "Water-based paint & UV coated finish"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Packaging Options */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Packaging</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Export Packaging for Samples, Bulk Orders and Project Delivery</h2>
                <p className="text-xs sm:text-sm text-[#6b7280] mb-4 sm:mb-6 italic">Secure packaging helps protect panels during storage, handling and international shipping.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">We provide flexible packaging solutions for different order types. Small samples can be packed in cartons for easy checking, while bulk veneer panels can be shipped in bulk, wooden frame packaging or customized export packaging. Proper packaging helps reduce transportation damage and supports safer container loading.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {["Sample packaging", "Bulk loading", "Wooden frame packaging", "Export container loading support"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="h-auto rounded-2xl overflow-hidden bg-[#F7F3EC]">
                  <img src="/images/products/products_wood veneer panel_detail page/13.Detail Page_Custom_Service_PACKAGING OPTIONS.png" alt="Packaging Options" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-widest mb-2 sm:mb-3">FAQ</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F2621]">Frequently Asked Questions</h2>
              <div className="w-12 sm:w-16 h-1 bg-[#0F6B3A] mx-auto mt-3 sm:mt-4 rounded-full"></div>
              <p className="text-[#6b7280] mt-3 sm:mt-4 text-xs sm:text-sm">Everything you need to know about our veneer panels</p>
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
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === index ? 'bg-[#0F6B3A] border-[#0F6B3A] rotate-45' : 'border-[#E5E1D8] group-hover:border-[#0F6B3A]/50'}`}>
                      <svg className={`w-4 h-4 transition-colors duration-300 ${openFaq === index ? 'text-white' : 'text-[#6b7280] group-hover:text-[#0F6B3A]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-60' : 'max-h-0'}`}>
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
    </>
  );
}
