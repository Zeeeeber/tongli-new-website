"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ContactFormModal } from "@/components/contact/ContactFormModal";
import { type NaturalWoodVeneerProduct } from "@/data/products/natural-wood-veneer-products";
import { melamineBoardProducts, type MelamineBoardProduct } from "@/data/products/melamine-board-products";

interface MelamineBoardDetailTemplateProps {
  product: NaturalWoodVeneerProduct;
  slug: string;
}

const imageBase = "/images/products/products_melamine boards_detail page";

const melamineFaqs = [
  {
    q: "What payment terms do you accept?",
    a: "Payment terms: TT in advance (30% of deposit before production and 70% balance before shipment), bank transfer, LC etc. Please note we do EXW/FOB/CNF/CIF/DDU/DDP.",
  },
  {
    q: "What is the average lead time?",
    a: "It depends on the product type and order quantity. Usually we can ship within 7 days for normal orders after receiving full payment. But for large orders, we need about 15 to 20 days.",
  },
  {
    q: "Can you supply the relevant documentation?",
    a: "Yes, we can provide most documentation including Certificate of Origin, Phytosanitary Certificate, Bill of Lading, Commercial Invoice, Packing List, etc.",
  },
  {
    q: "What is your main customer group?",
    a: "Our main customers are fancy plywood wholesalers, furniture factories, door factories, whole-house customization factories, cabinet production enterprises, hotel construction and decoration / real estate decoration, and so on.",
  },
  {
    q: "How can we make a deal easily if I have a specific sample in hand?",
    a: "You send us your sample abroad and tell us your specific requirements. Then we produce a relevant sample according to yours with quotation. And then we send you our sample to your country for your reference and confirmation.",
  },
] as const;

export function MelamineBoardDetailTemplate({
  product,
  slug,
}: MelamineBoardDetailTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);
  const thumbnailScrollRef = useRef<HTMLDivElement>(null);
  const productImages = useMemo(() => {
    if (product.gallery?.length) {
      return product.gallery;
    }

    if (product.featuredImage) {
      return [product.featuredImage];
    }

    return [];
  }, [product.featuredImage, product.gallery]);

  const relatedProducts: MelamineBoardProduct[] = useMemo(() => {
    return melamineBoardProducts
      .filter((p) => p.slug !== slug)
      .slice(0, 4);
  }, [slug]);

  const hasProductImages = productImages.length > 0;
  const activeImage = productImages[selectedImage] ?? productImages[0] ?? null;
  const imageAlt = product.imageAlt || product.name;
  const showThumbnailArrows = hasProductImages && productImages.length > 4;

  const scrollThumbnails = (direction: "left" | "right") => {
    thumbnailScrollRef.current?.scrollBy({
      left: direction === "left" ? -240 : 240,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (selectedImage >= productImages.length) {
      setSelectedImage(0);
    }
  }, [productImages.length, selectedImage]);

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
            <Link href="/products/melamine-board" className="hover:text-[#0F6B3A]">Melamine Board</Link>
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
            <aside className="hidden md:block md:w-64 flex-shrink-0">
              <div className="bg-[#FDFBF7] rounded-2xl border border-[#E5E1D8] overflow-hidden sticky top-24">
                <div className="px-5 py-4 border-b border-[#E5E1D8]">
                  <h3 className="font-bold text-[#1F2621]">Product Categories</h3>
                </div>
                <nav className="py-2">
                  {[
                    { name: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
                    { name: "Natural Wood Veneer", href: "/products/natural-wood-veneer" },
                    { name: "Engineered Wood Veneer", href: "/products/engineered-wood-veneer" },
                    { name: "3D Wood Panels", href: "/products/3d-wood-panels" },
                    { name: "Melamine Board", href: "/products/melamine-board", active: true },
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
                  <div className="aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-[#F7F3EC] to-[#E8E4DB] rounded-2xl overflow-hidden mb-4 flex items-center justify-center relative">
                    {activeImage ? (
                      <Image
                        src={activeImage}
                        alt={imageAlt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-contain md:object-cover"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center mb-4">
                          <svg className="w-16 h-16 text-[#8B5E3C]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-sm text-[#8B5E3C]/50">Product Image {selectedImage + 1}</span>
                      </div>
                    )}
                  </div>
                  {/* Thumbnails */}
                  <div className="relative">
                    {showThumbnailArrows && (
                      <button
                        type="button"
                        onClick={() => scrollThumbnails("left")}
                        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#1F2621] shadow-md transition hover:bg-white"
                        aria-label="Scroll thumbnails left"
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                    )}

                    {showThumbnailArrows && (
                      <button
                        type="button"
                        onClick={() => scrollThumbnails("right")}
                        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#1F2621] shadow-md transition hover:bg-white"
                        aria-label="Scroll thumbnails right"
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}

                    <div
                      ref={thumbnailScrollRef}
                      className="flex gap-3 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    >
                      {hasProductImages ? (
                        productImages.map((image, i) => (
                          <button
                            key={`${image}-${i}`}
                            onClick={() => setSelectedImage(i)}
                            className={`relative h-24 w-24 sm:h-28 sm:w-28 flex-none rounded-lg bg-gradient-to-br from-[#F7F3EC] to-[#E8E4DB] overflow-hidden ${selectedImage === i ? "ring-2 ring-[#0F6B3A]" : ""}`}
                            aria-label={`View product image ${i + 1}`}
                            type="button"
                          >
                            <Image
                              src={image}
                              alt={`${imageAlt} ${i + 1}`}
                              fill
                              sizes="120px"
                              className="object-cover"
                            />
                          </button>
                        ))
                      ) : (
                        [0, 1, 2, 3].map((i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedImage(i)}
                            className={`h-24 w-24 sm:h-28 sm:w-28 flex-none rounded-lg bg-gradient-to-br from-[#F7F3EC] to-[#E8E4DB] flex items-center justify-center ${selectedImage === i ? "ring-2 ring-[#0F6B3A]" : ""}`}
                            type="button"
                          >
                            <svg className="w-6 h-6 text-[#8B5E3C]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </button>
                        ))
                      )}
                    </div>
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
      <section className="py-10 sm:py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1F2621] mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((relatedProduct) => {
                const relatedImage = relatedProduct.featuredImage || relatedProduct.gallery[0] || null;
                const relatedLabel = relatedProduct.specs?.coreMaterial || relatedProduct.tags[0] || "Melamine Board";

                return (
                  <Link
                    key={relatedProduct.slug}
                    href={`/products/melamine-board/${relatedProduct.slug}`}
                    className="group bg-white rounded-xl border border-[#E5E1D8] overflow-hidden hover:border-[#0F6B3A]/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-square bg-gradient-to-br from-[#F7F3EC] to-[#E8E4DB] relative overflow-hidden">
                      {relatedImage ? (
                        <Image
                          src={relatedImage}
                          alt={relatedProduct.imageAlt || relatedProduct.name}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                            <svg className="w-10 h-10 text-[#8B5E3C]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                            </svg>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-[#0F6B3A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-4 py-2 bg-white text-[#0F6B3A] rounded-lg font-medium text-sm">View Details</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="inline-flex items-center rounded-full bg-[#F7F3EC] px-3 py-1 text-[11px] font-medium text-[#0F6B3A]">{relatedLabel}</span>
                      <h3 className="font-semibold text-[#1F2621] mt-3 mb-2 line-clamp-2">{relatedProduct.name}</h3>
                      <p className="text-sm text-[#6b7280] line-clamp-3">{relatedProduct.shortDesc}</p>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div
                className="col-span-full bg-white rounded-xl border border-[#E5E1D8] p-12 text-center"
              >
                <div className="w-20 h-20 rounded-xl bg-[#F7F3EC] mx-auto flex items-center justify-center mb-4">
                  <svg className="w-10 h-10 text-[#8B5E3C]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#1F2621] mb-2">More Melamine Board Options Available</h3>
                <p className="text-sm text-[#6b7280] mb-4">We offer a full range of melamine boards with different substrates, colors and finishes.</p>
                <Link href="/products/melamine-board" className="text-[#0F6B3A] font-medium text-sm hover:underline">
                  View All Melamine Boards &rarr;
                </Link>
              </div>
            )}
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
                    { label: "Brand Name", value: "Tongli" },
                    { label: "Product Name", value: "Melamine Board, Melamine Faced Board, Melamine Plywood, Melamine MDF, Melamine Particle Board, Decorative Panel Board, Laminated Board, Pre-laminated Panel" },
                    { label: "Substrate", value: "Plywood, Plain MDF, Moisture-Resistant MDF, Fire-Retardant MDF, Particle Board" },
                    { label: "Surface Style", value: "Pure Color Melamine, Wood Grain Melamine, High Gloss Melamine, Matte Melamine, UV High-Gloss, Natural Veneer Effect" },
                    { label: "Size", value: "2440×1220mm (Standard), 2600/2800/3050/3200/3400/3600×1220mm (Extended)" },
                    { label: "Thickness", value: "3-25mm" },
                    { label: "Glue", value: "ENF / E0 / E1 / E2 (Mainly E1)" },
                    { label: "Usage", value: "Furniture, Cabinets, Wardrobes, TV Cabinets, Office Furniture, Drawers, Shelves, Wall Panels, Interior Decoration, Commercial Spaces" },
                    { label: "Export Packing", value: "Palletized Packaging, Stretch Film Wrapping, Cardboard Box Packaging, Wooden Frame Packaging" },
                    { label: "Delivery Time", value: "Normally About 5 To 7 Days, It Depends On Quantity And Requirement" },
                    { label: "Main Customer Group", value: "Wholesalers, Furniture Factories, Cabinet Manufacturers, Distributors, Interior Project Buyers" },
                    { label: "Payment Term", value: "30% by TT as deposit of order, 70% by TT before loading or 70% by irrevocable LC at sight" },
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

      {/* 13 Detail Sections */}
      <div>
        {/* 01. Banner / Production Line */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src={`${imageBase}/1.Banner_melamine boards manufacturer.jpg`} alt="Melamine Board Manufacturer" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">{product.category}</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Melamine Board Manufacturer</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Custom melamine faced boards for furniture, cabinets, wardrobes and interior decoration.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Tongli Timber supplies melamine boards with different substrates, colors, wood grain patterns, surface finishes and sizes. From substrate selection to melamine lamination, cutting, packaging and export loading, we provide one-stop panel solutions for furniture factories, cabinet manufacturers, distributors and interior project buyers.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {[
                    "Melamine faced plywood, MDF and particle board",
                    "Solid color, wood grain and high-gloss designs",
                    "Custom size, thickness and surface finish options",
                    "Suitable for furniture, cabinets, wardrobes and wall panels",
                    "Factory direct supply with export packaging support",
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{point}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setShowContactModal(true)} className="px-8 py-4 bg-[#0F6B3A] text-white rounded-lg font-semibold hover:bg-[#124B34] transition-colors">Request A Board Sample</button>
              </div>
            </div>
          </div>
        </section>

        {/* 02. Real Shots */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Real Shots</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Real Melamine Board Photos for Material Confirmation</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Check surface color, gloss, texture and board structure before ordering.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Our real product photos show different melamine board finishes, including solid color, wood grain, glossy surface and decorative patterns. Buyers can check surface appearance, edge structure and board quality before mass production. Samples can be arranged for color confirmation, project approval and furniture production testing.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {[
                    "Color and surface selection",
                    "Furniture factory sample approval",
                    "Cabinet and wardrobe material confirmation",
                    "Distributor product catalog preparation",
                    "Bulk order quality reference",
                  ].map((item) => (
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
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src={`${imageBase}/2.melamine boards real shots.png`} alt="Melamine Board Real Shots" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. Product Features */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src={`${imageBase}/3.melamine boards product features .png`} alt="Melamine Board Product Features" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Product Features</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Durable Surface for Daily Use and Easy Maintenance</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">A practical decorative board for furniture and interior manufacturing.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Melamine boards are widely used because of their stable surface performance and cost-effective decorative effect. The melamine surface is easy to clean, resistant to daily stains and suitable for frequent-use furniture surfaces. For specific requirements, moisture-resistant MDF, fire-retardant MDF and other functional substrates can also be selected.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {[
                    "Easy to clean and maintain",
                    "Good resistance to daily stains and scratches",
                    "Stable color and decorative surface",
                    "Water-resistant surface for daily use",
                    "UV-resistant and high-gloss options available",
                    "Fire-retardant substrate available upon request",
                  ].map((item) => (
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

        {/* 04. Product Application */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Applications</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Widely Used in Furniture, Cabinets and Interior Projects</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">A flexible panel solution for modern home and commercial spaces.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Melamine boards are commonly used in kitchen cabinets, wardrobes, TV cabinets, office furniture, drawers, shelves, wall panels and other interior decoration projects. With rich color and texture choices, they help manufacturers create consistent, modern and cost-effective furniture products.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {[
                    "Kitchen cabinets and cabinet doors",
                    "Wardrobes and closet systems",
                    "TV cabinets and storage furniture",
                    "Office furniture and shelving",
                    "Wall panels and decorative interiors",
                    "Apartment, hotel and commercial furniture projects",
                  ].map((item) => (
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
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src={`${imageBase}/4.melamine boards application.png`} alt="Melamine Board Application" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05. Company Profile */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src={`${imageBase}/5.melamine boards _Company Profile.png`} alt="Company Profile" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">About Us</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">A Decorative Panel Supplier Since 1999</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Experienced in veneer panels, melamine boards and customized wood-based materials.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Dongguan Tongli Timber Products Co., Ltd. was established in 1999 and specializes in decorative wood-based panels, including melamine boards, veneer plywood, fancy plywood, UV coated panels, natural wood veneer and engineered veneer. With years of manufacturing experience, we support global buyers with stable quality, flexible customization and professional export service.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {[
                    "Established in 1999",
                    "Experienced decorative panel manufacturer",
                    "Support for substrate, color, size and packaging customization",
                    "Serving furniture, cabinet, door and interior project customers",
                    "Export experience for overseas distributors and manufacturers",
                  ].map((item) => (
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

        {/* 06. Related Products */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 md:order-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Related Products</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">More Melamine Board Solutions for Different Uses</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Choose the right substrate according to strength, cost, moisture resistance and application.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">We provide a full range of melamine faced boards for different production needs. Customers can choose melamine plywood, melamine MDF, melamine particle board, moisture-resistant MDF and fire-retardant MDF according to the final application and market requirements.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {[
                    "Melamine faced plywood",
                    "Melamine plain MDF",
                    "Melamine particle board",
                    "Melamine moisture-resistant MDF",
                    "Melamine fire-retardant MDF",
                    "Custom laminated panels available",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 md:order-2">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src={`${imageBase}/6.melamine boards_related products.png`} alt="Related Products" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07. Customer Feedback */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src={`${imageBase}/7.melamine boards_custom feedback.png`} alt="Customer Feedback" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Testimonials</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Trusted by Overseas Buyers and Repeat Customers</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Stable quality, clear communication and reliable delivery support long-term cooperation.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Our customers value stable board quality, accurate sample confirmation and reliable export packaging. From color matching to edge banding compatibility, we help buyers reduce sourcing risks and ensure that the final boards meet their production and market needs.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {[
                    "Consistent color and surface finish",
                    "Good board quality after delivery",
                    "Matched edge banding options",
                    "Clear sample and order communication",
                    "Reliable packaging for export shipment",
                    "Support for repeat orders and long-term supply",
                  ].map((item) => (
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

        {/* 08. Certifications */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 md:order-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Certifications</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Certified Supplier Support for Global Buyers</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Product documents and compliance support for purchasing, import and project approval.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">For international buyers, supplier qualification and product documentation are important for purchasing decisions. Tongli Timber can provide related certificates, test reports and company documents according to different market and project requirements, helping customers complete supplier evaluation more efficiently.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {[
                    "SGS-related test reports",
                    "CE / GMC certificate support",
                    "FSC-related documentation when required",
                    "Company qualification documents",
                    "Export and project approval support",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 md:order-2">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src={`${imageBase}/8.melamine boards_Certification.jpg`} alt="Certifications" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 09. Substrate Options */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src={`${imageBase}/9.melamine boards_substrate_options.png`} alt="Substrate Options" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Substrate Options</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Multiple Substrate Options for Different Applications</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Select the right base board for strength, moisture resistance, cost and processing needs.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Melamine boards can be produced with different substrates, including plywood, plain MDF, moisture-resistant MDF, fire-retardant MDF and particle board. Each substrate has different advantages, so buyers can choose according to furniture type, budget, processing method and final application environment.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {[
                    "Plywood",
                    "Plain MDF",
                    "Moisture-resistant MDF",
                    "Fire-retardant MDF",
                    "Particle board",
                    "Custom substrate options available",
                  ].map((item) => (
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

        {/* 10. Dimension Options */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 md:order-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Dimension Options</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Standard and Extended Sizes Available</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Flexible dimensions for furniture production, cabinet manufacturing and project orders.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">We support standard and customized melamine board sizes to meet different production needs. The common size is 2440×1220mm, while extended sizes can be supplied for doors, wall panels, wardrobes and special project applications. Thickness and glue options can also be customized according to customer requirements.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {[
                    "Sample size: 300×200mm",
                    "Standard size: 2440×1220mm",
                    "Extended sizes: 2600/2800/3050/3200/3400/3600×1220mm",
                    "Thickness options: 3–25mm",
                    "Glue options: ENF / E0 / E1 / E2, mainly E1",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 md:order-2">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src={`${imageBase}/10.melamine boards_dimensions_options.png`} alt="Dimension Options" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Style Options */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src={`${imageBase}/11.melamine boards_style options .png`} alt="Style Options" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Style Options</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Rich Melamine Colors and Decorative Styles</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Solid color, wood grain, high-gloss and natural veneer looks for different markets.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Melamine boards offer a wide range of decorative choices for furniture and interior design. Customers can choose pure color, wood grain, high-gloss surface, matte texture or natural veneer effect according to product positioning and market preference. Custom colors and patterns can also be discussed for project or distributor orders.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {[
                    "Pure color melamine",
                    "Wood grain melamine",
                    "High gloss melamine",
                    "Matte and soft light finish",
                    "Natural veneer effect",
                    "More colors and patterns available",
                  ].map((item) => (
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

        {/* 12. Surface Treatment Options */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 md:order-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Surface Treatment Options</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Different Surface Finishes for Different Visual Effects</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Choose gloss, texture and touch feeling according to your furniture design.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Different surface treatments create different visual effects and user experiences. We can provide glossy, soft light, matte, UV high-gloss and textured finishes. These options help customers match different furniture styles, from modern minimalist cabinets to warm wood grain interiors.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {[
                    "Glossy finish",
                    "Soft light finish",
                    "Matte finish",
                    "UV high-gloss finish",
                    "Textured surface",
                    "Custom finish available upon request",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 md:order-2">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src={`${imageBase}/12.melamine boards_surface_treatment_option .png`} alt="Surface Treatment Options" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. Packaging Options */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src={`${imageBase}/13.melamine boards_packaging_option .png`} alt="Packaging Options" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Packaging</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Export Packaging for Samples, Bulk Orders and Custom Shipments</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Protecting boards during storage, handling and international transportation.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Proper packaging is important for melamine boards because the surface needs to be protected during transportation. We provide sample packaging, bulk loading, custom packaging and wooden frame packaging according to order quantity and shipping requirements. Packaging can be adjusted for distributors, furniture factories and project deliveries.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {[
                    "Sample packaging",
                    "Bulk container loading",
                    "Custom packaging",
                    "Wooden frame packaging",
                    "Export pallet support",
                    "Packaging can be customized according to customer requirements",
                  ].map((item) => (
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
      </div>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-widest mb-2 sm:mb-3">FAQ</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F2621]">Frequently Asked Questions</h2>
              <div className="w-12 sm:w-16 h-1 bg-[#0F6B3A] mx-auto mt-3 sm:mt-4 rounded-full"></div>
              <p className="text-[#6b7280] mt-3 sm:mt-4 text-xs sm:text-sm">Everything you need to know about our melamine boards</p>
            </div>

            <div className="space-y-3">
              {melamineFaqs.map((faq, index) => (
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
    </>
  );
}

export default MelamineBoardDetailTemplate;
