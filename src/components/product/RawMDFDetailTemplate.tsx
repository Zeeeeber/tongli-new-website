"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ContactFormModal } from "@/components/contact/ContactFormModal";
import { type NaturalWoodVeneerProduct } from "@/data/products/natural-wood-veneer-products";
import { getSupportingBoardRelatedProducts } from "@/data/products/supporting-boards-products";

interface RawMDFDetailTemplateProps {
  product: NaturalWoodVeneerProduct;
  slug: string;
}

const placeholderRelatedProducts: number[] = [];

const defaultApplications = [
  { name: "Furniture", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" },
  { name: "Cabinet Doors", icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
  { name: "Wall Panels", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { name: "Architectural Panels", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { name: "Door Faces", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
  { name: "Interior Decoration", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
];

const defaultQualityPackaging = [
  "Grain consistency sorting before bundling",
  "Moisture content control (6-10%)",
  "Thickness tolerance within ±0.05mm",
  "Flatness inspection and pressing",
  "Paper interleaving between sheets",
  "Wooden crate packaging for international shipping",
  "UV protection and moisture barrier",
];

const defaultFaqs = [
  { q: "What payment terms do you accept?", a: "Payment terms: TT in advance (30% of deposit before production and 70% balance before shipment), bank transfer, LC etc. Please note we do EXW/FOB/CNF/CIF/DDU/DDP." },
  { q: "What is the average lead time?", a: "It depends on the product type and order quantity. Usually we can ship within 7 days for normal orders after receiving full payment. But for large orders, we need about 15 to 20 days." },
  { q: "Can you supply the relevant documentation?", a: "Yes, we can provide most documentation including Certificate of Origin, Phytosanitary Certificate, Bill of Lading, Commercial Invoice, Packing List, etc." },
  { q: "What is your main customer group?", a: "Our main customers are fancy plywood wholesalers, furniture factories, door factories, whole-house customization factories, cabinet production enterprises, hotel construction and decoration / real estate decoration, and so on." },
  { q: "How can we make a deal easily if I have a specific sample in hand?", a: "You send us your sample abroad and tell us your specific requirements. Then we produce a relevant sample according to yours with quotation. And then we send you our sample to your country for your reference and confirmation." },
];

type SidebarCategory = {
  name: string;
  href: string;
  active?: boolean;
  sub?: {
    name: string;
    href: string;
  }[];
};

const sidebarCategories: SidebarCategory[] = [
  { name: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
  { name: "Natural Wood Veneer", href: "/products/natural-wood-veneer" },
  { name: "Engineered Wood Veneer", href: "/products/engineered-wood-veneer" },
  { name: "3D Wood Panels", href: "/products/3d-wood-panels" },
  { name: "Melamine Board", href: "/products/melamine-board" },
  { name: "Veneer Edge Banding", href: "/products/veneer-edge-banding" },
  {
    name: "Supporting Boards",
    href: "/products/supporting-boards",
    active: true,
    sub: [
      { name: "Commercial Plywood", href: "/products/supporting-boards" },
      { name: "Basswood Plywood", href: "/products/supporting-boards" },
      { name: "Birch Plywood", href: "/products/supporting-boards" },
      { name: "Raw MDF", href: "/products/supporting-boards" },
      { name: "Fireproof MDF", href: "/products/supporting-boards" },
      { name: "MR MDF", href: "/products/supporting-boards" },
      { name: "Particle Board", href: "/products/supporting-boards" },
    ],
  },
];

export function RawMDFDetailTemplate({
  product,
  slug,
}: RawMDFDetailTemplateProps) {
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
  const relatedProducts = useMemo((): NaturalWoodVeneerProduct[] => {
    return getSupportingBoardRelatedProducts(
      product.slug,
    ) as unknown as NaturalWoodVeneerProduct[];
  }, [product.slug]);
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
            <Link href="/products/supporting-boards" className="hover:text-[#0F6B3A]">Raw MDF</Link>
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
                  {sidebarCategories.map((cat) => (
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
                      <h3 className="text-lg font-bold text-[#1F2621] mb-3 flex flex-wrap items-center gap-2">
                        <svg className="w-5 h-5 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <Link href="/about" className="hover:text-[#0F6B3A] transition-colors">
                          About Us
                        </Link>
                        <span className="flex items-center gap-1.5 ml-1">
                          <a
                            href="https://www.instagram.com/tongliwood?igsh=ODdrNnc2YmpicWR3&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#0F6B3A]/10 transition-colors"
                          >
                            <svg viewBox="0 0 48 48" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                              <path fill="#E1306C" d="M24 5A19 19 0 0 0 5 24a19 19 0 0 0 19 19 19 19 0 0 0 19-19A19 19 0 0 0 24 5Z"/>
                              <path fill="#F77737" d="M34.9 14.1c-.1 1.1-.2 1.9-.4 2.6-.4 1.2-.9 2.1-1.6 2.9-.7.8-1.7 1.4-2.9 1.8-.8.3-1.7.5-2.8.5H21.1c-1 0-1.9-.2-2.8-.5-1.2-.4-2.1-.9-2.9-1.8-.8-.7-1.4-1.7-1.8-2.9-.3-.8-.4-1.7-.5-2.8V21.1c0-1 .2-1.9.5-2.8.4-1.2.9-2.1 1.6-2.9.7-.8 1.7-1.4 2.9-1.8.8-.3 1.7-.5 2.8-.5h6.5c1 0 2 .2 2.8.5 1.2.4 2.1.9 2.9 1.8.8.7 1.4 1.7 1.8 2.9.3.8.4 1.7.5 2.8v6.5z"/>
                              <path fill="#F77737" d="M24 14.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19zm0 15.7a6.2 6.2 0 1 1 0-12.4 6.2 6.2 0 0 1 0 12.4z"/>
                              <circle cx="31.5" cy="16.5" r="1.8" fill="#F77737"/>
                            </svg>
                          </a>
                          <a
                            href="https://www.facebook.com/share/14kCoMrhpji/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#0F6B3A]/10 transition-colors"
                          >
                            <svg viewBox="0 0 48 48" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                              <path fill="#1877F2" d="M24 5A19 19 0 0 1 40.3 20.4l-3.6-2.4H36V16.5c0-2.3.8-3.5 3.2-3.5h2.5V6.7s-2.3-.2-4.5-.2c-4.6 0-7.6 2.8-7.6 7.8v3.7H24v5.6h5.6v14.4c.3.1.6.1.9.1.3 0 .6 0 .9-.1V24h5.6l.9 5.6H24V24z"/>
                            </svg>
                          </a>
                          <a
                            href="https://pin.it/2IX8y7aCk"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Pinterest"
                            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#0F6B3A]/10 transition-colors"
                          >
                            <svg viewBox="0 0 48 48" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                              <path fill="#E60023" d="M24 5A19 19 0 0 0 5 24a19 19 0 0 0 19 19 19 19 0 0 0 19-19A19 19 0 0 0 24 5z"/>
                              <path fill="#fff" d="M22.6 34c-.8-6-3.5-11-7-14.3-.5 3-.6 6.3.1 9.5 1.8-1.2 2.9-3.4 3-6.5 6.4 3.7 8.6 10.1 6.3 16.8-2.3 6.6-9.3 11-17.1 9.7C12 48 15.6 47 18.4 44.7l-1.3-5.6c-1.3 1.1-2.9 1.7-4.6 1.5-3.2-.3-5.8-2.6-6.2-5.8-.4-3.2 1.4-6.2 4.2-7.4.7-.3 1.5-.4 2.3-.4 2.4 0 4.3 1.5 4.9 3.8l.5 2c.2 1 .7 1.9 1.5 2.6l3-3.7-2.2-.9c-3.5-1.5-4.9-5.8-3.1-9.5 1.8-3.7 6-5.7 10.1-4.9 4.1.8 7 4.5 7 8.7 0 5.2-3.2 9.2-7.5 9.2-2.2 0-4-1.6-3.8-3.8 0-.9.4-1.8 1.1-2.5z"/>
                            </svg>
                          </a>
                          <a
                            href="https://www.linkedin.com/in/tongli-timber-a23bb240a?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#0F6B3A]/10 transition-colors"
                          >
                            <svg viewBox="0 0 48 48" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                              <path fill="#0A66C2" d="M24 5A19 19 0 0 1 40.3 19.6v-5.1H36v12.8h4.3V24.1c0-3.6 1.5-5.5 4.7-5.5 1.6 0 3.3.3 3.3.3v4h-2.8c-2.5 0-3.2 1.5-3.2 3v3.7H44V19.5s.5-10.5-10-10.5H24zM11.5 35.3c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/>
                              <path fill="#0A66C2" d="M15 16.3c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/>
                              <path fill="#0A66C2" d="M11.5 27.7c-1.4 0-2.5-1.1-2.5-2.5v-9h4.3v9c0 1.4-1.1 2.5-2.5 2.5h.7z"/>
                            </svg>
                          </a>
                          <a
                            href="https://youtube.com/@tongli_timber?si=b7nND_pbImU9-LKX"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#0F6B3A]/10 transition-colors"
                          >
                            <svg viewBox="0 0 48 48" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                              <path fill="#FF0000" d="M43.2 12.8C43 11.5 42.3 10.4 41.3 9.7c-1.5-1-3.3-1-6.2-1H13.5C10.4 8.7 8.5 8.7 7 9.7c-1 1-1.7 1.8-1.9 3.1C5 14 5 24 5 24s0 10 .1 11.2c.2 1.3.9 2.4 1.9 3.1 1.5 1 3.3 1 6.2 1h21.6c2.9 0 4.8-.3 6.2-1 1-.7 1.7-1.8 1.9-3.1.1-1.2.1-11.2.1-11.2S43.4 14 43.2 12.8zM19.5 30.8V17.2L32 24l-12.5 6.8z"/>
                              <path fill="#fff" d="M19.5 30.8V17.2L32 24l-12.5 6.8z"/>
                            </svg>
                          </a>
                        </span>
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
                const relatedLabel = (relatedProduct as { subCategory?: string }).subCategory || relatedProduct.specs.veneerSpecies || relatedProduct.tags[0] || "Raw MDF";

                return (
                  <Link
                    key={relatedProduct.slug}
                    href={`/products/supporting-boards/${relatedProduct.slug}`}
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
              placeholderRelatedProducts.map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl border border-[#E5E1D8] overflow-hidden"
                >
                  <div className="aspect-square bg-gradient-to-br from-[#F7F3EC] to-[#E8E4DB] relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-10 h-10 text-[#8B5E3C]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="inline-flex items-center rounded-full bg-[#F7F3EC] px-3 py-1 text-[11px] font-medium text-[#0F6B3A]">Raw MDF</span>
                    <h3 className="font-semibold text-[#1F2621] mt-3 mb-2 line-clamp-2">Related Product</h3>
                    <p className="text-sm text-[#6b7280] line-clamp-3">More raw MDF products will appear here.</p>
                  </div>
                </div>
              ))
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
                    { label: "Brand Name", value: "TONGLI" },
                    { label: "Product Name", value: "MDF / Medium Density Fiberboard / MDF Board / Fiberboard / HDF/ Raw MDF / Plain MDF / Melamine MDF / Laminated MDF / Moisture Resistant MDF / MR MDF / Waterproof MDF / Fire Resistant MDF / Fire Rated MDF / Flame Retardant MDF / FR MDF / Black MDF / Black MDF Board / Black Fiberboard" },
                    { label: "MDF Types", value: "Plain MDF, HMR MDF (Moisture-Proof MDF), FR MDF (Fire-Resistant MDF), Black MDF" },
                    { label: "Dimension", value: "4x8ft, 4x9ft, 4x10ft, 4x11ft, 4x12ft / 2440x1220mm, 2600x1220mm, 2800x1220mm, 3050x1220mm, 3200x1220mm, 3400x1220mm, 3600x1220mm" },
                    { label: "Thickness", value: "3.0mm / 5mm / 9mm / 12mm / 15mm / 18mm / 25mm" },
                    { label: "Density", value: "630kg/m³-1080kg/m³" },
                    { label: "Face/Back", value: "RAW / Sanded / Laminated" },
                    { label: "Formaldehyde Emission Grade", value: "ENF / E0 / E1 / E2" },
                    { label: "Usage", value: "Furniture Manufacturing / Cabinet Doors / Wardrobe Panels / Interior Wall Panels / Decorative Panels / Shop Fitting Displays / Office Partitions / Acoustic Panels / Painted Furniture Surfaces / Exhibition Booth Construction" },
                    { label: "Kinds of export packing", value: "Wooden frame packaging, in bulk, custom packaging." },
                    { label: "Delivery time", value: "Normally about 10 to 25 days, it depends on quantity and requirement." },
                    { label: "Main customer group", value: "Wholesalers, furniture factories, door factories, whole-house customization factories, cabinet factories, hotel construction and decoration projects, real estate decoration projects" },
                    { label: "Payment term", value: "30% by TT as deposit of order, 70% by TT before loading or 70% by irrevocable LC at sight" },
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

      {/* Product Detail Content - 11 Sections */}
      <div>
        {/* 01. Banner / MDF Board Manufacturer */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">{product.category}</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Professional MDF Board Supplier</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Custom MDF board solutions for furniture, cabinets, doors, wall panels and interior decoration.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Tongli Timber supplies MDF boards for furniture manufacturers, cabinet factories, door producers, wood panel distributors and interior project buyers. We provide plain MDF, moisture-resistant MDF, fire-retardant MDF, black MDF, melamine MDF, UV MDF, veneer MDF and 3D MDF according to different production and project requirements.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {["Plain MDF, MR MDF, FR MDF and black MDF available", "Suitable for furniture, cabinets, doors and wall panels", "Custom size, thickness, density and surface options", "Can be laminated with melamine, veneer or UV coating", "Factory direct supply with export packaging support"].map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{point}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => setShowContactModal(true)} className="px-8 py-4 bg-[#0F6B3A] text-white rounded-lg font-semibold hover:bg-[#124B34] transition-colors">Request A Sample</button>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/products/products_mdf_detail page/1.Detail Page_Detail Page_Banner.png"
                    alt="MDF Board Manufacturer"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 02. Real Shots / 产品实拍 */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_mdf_detail page/2.Detail Page_MDF_Real Shots.png" alt="MDF Board Real Shots" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Real Shots</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Real MDF Board Photos for Material Confirmation</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Check surface smoothness, board density, edge structure and color before ordering.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Our real product photos show different MDF board types, including plain MDF, moisture-resistant MDF, fire-retardant MDF and other customized boards. The clean surface, dense fiber structure and stable board edge make MDF suitable for cutting, routing, painting, laminating and furniture production. Samples can be arranged for quality checking before bulk orders.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Sample confirmation before mass production", "Surface and edge quality checking", "Furniture and cabinet material approval", "Color and board type comparison", "Bulk order quality reference"].map((item) => (
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

        {/* 03. Product Features / 产品特点 */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Product Features</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Dense Structure, Smooth Surface and Stable Processing Performance</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">A practical wood-based panel for furniture production and interior manufacturing.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">MDF board is widely used because of its smooth surface, dense fiber structure and good processing performance. It can be cut, drilled, routed, painted, laminated or carved according to different production needs. For higher requirements, moisture-resistant MDF and fire-retardant MDF options are also available.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <p className="text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider">Key Features</p>
                  {["Smooth and flat surface for finishing", "Dense fiber structure, not easy to break", "Good strength for furniture and decorative use", "Moisture-resistant MDF option available", "Fire-retardant MDF option available", "Suitable for cutting, routing, laminating and painting"].map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  <p className="text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider">Additional Benefits</p>
                  {["Good structural strength for cabinets and furniture", "Stable shape and size for interior applications", "Suitable for areas such as kitchens and bathrooms when using MR MDF", "Can support decorative surfaces such as melamine, veneer and UV coating"].map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_mdf_detail page/3.Detail Page_MDF_Productt Feature.png" alt="MDF Product Features" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04. Product Application / 应用场景 */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_mdf_detail page/4.Detail Page_MDF_Application.png" alt="MDF Application" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Applications</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Widely Used in Furniture, Cabinets and Interior Projects</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">A versatile panel material for modern residential and commercial spaces.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">MDF boards are commonly used in kitchen cabinets, wardrobes, shelves, drawers, wall panels, doors, display fixtures, commercial counters and decorative furniture. Its smooth surface and stable structure make it suitable for both visible decorative surfaces and hidden structural components.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Kitchen cabinets and cabinet doors", "Wardrobes and closet systems", "Shelves, drawers and storage furniture", "Interior wall panels and decorative boards", "Doors and furniture components", "Commercial display counters and shop fixtures", "Photo frames, crafts and small wood products"].map((item) => (
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

        {/* 05. Company Profile / 工厂介绍 */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">About Us</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">A Decorative Wood Panel Supplier Since 1999</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Supporting global buyers with MDF, plywood, veneer panels and customized wood-based materials.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Dongguan Tongli Timber Products Co., Ltd. was established in 1999 and specializes in decorative wood-based panels, including MDF boards, veneer plywood, fancy plywood, natural wood veneer, engineered veneer, UV coated panels and 3D wood panels. With years of production experience and export service, we help global buyers source stable materials for furniture, doors, cabinets and interior projects.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  <p className="text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider">Why Choose Tongli Timber</p>
                  {["Established in 1999", "Experienced in decorative panel production", "Multiple MDF board types available", "Support for size, thickness, surface and packaging customization", "Serving furniture, cabinet, door and interior project customers", "Export experience for overseas buyers and distributors"].map((item) => (
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
                  <Image src="/images/products/products_mdf_detail page/5.Detail Page_Company Profile.png" alt="Company Profile" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06. Certifications / 证书资质 */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_mdf_detail page/6.Detail Page_Certification.png" alt="Certifications" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Certifications</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Certification and Document Support for Global Buyers</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Helping customers complete supplier evaluation, import review and project approval.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">For international buyers, supplier qualification and product documentation are important for purchasing decisions. Tongli Timber can provide related certificates, test reports and company documents according to different market and project requirements, helping customers reduce sourcing risk and complete supplier approval more efficiently.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  <p className="text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider">Document Support</p>
                  {["SGS-related test reports", "CE / GMC certificate support", "FSC-related documentation when required", "Company qualification documents", "Export and project approval support", "Material documents for buyer review"].map((item) => (
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

        {/* 07. Customer Feedback / 客户反馈 */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Testimonials</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Trusted by Overseas Buyers and Repeat Customers</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Stable quality, clear communication and reliable delivery support long-term cooperation.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Our customers value stable MDF quality, accurate sample confirmation and reliable export packaging. From board type selection to size, thickness, surface treatment and delivery communication, we help overseas buyers reduce sourcing risk and make purchasing more efficient.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  <p className="text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider">Customer Concerns We Help Solve</p>
                  {["Clear sample confirmation before production", "Stable board quality for repeat orders", "Accurate size and thickness communication", "Matched surface and edge banding options", "Reliable packaging for international shipping", "Support for long-term supply cooperation"].map((item) => (
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
                  <Image src="/images/products/products_mdf_detail page/7.Detail Page_Customer Feedback.png" alt="Customer Feedback" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 08. Related Products / 相关产品 */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_mdf_detail page/8.Detail Page_MDF_Rlated Products.png" alt="MDF Related Products" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Related Products</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">More MDF Board Solutions for Different Applications</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Choose the right MDF type according to moisture resistance, fire resistance, surface effect and processing needs.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">We provide different MDF board options for various production and project requirements. Plain MDF is suitable for general furniture and decorative use. Moisture-resistant MDF can be selected for areas with higher humidity. Fire-retardant MDF is suitable for projects with higher safety requirements. Black MDF, melamine MDF, UV MDF, veneer MDF and 3D MDF are also available for decorative applications.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  <p className="text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider">Related MDF Options</p>
                  {["Plain MDF", "Moisture-resistant MDF", "Black MDF", "Fire-retardant MDF", "Melamine MDF", "UV MDF", "Veneer MDF", "3D MDF", "Custom MDF board solutions available"].map((item) => (
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

        {/* 09. Production Process / 生产流程 */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Production Process</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Controlled MDF Processing for Stable Board Quality</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">From board preparation to finishing and packaging, each step supports consistent supply.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Our MDF board supply and processing workflow includes material selection, board preparation, surface sanding, laminating or coating when required, cutting, quality inspection, stacking, packaging and loading. For customized MDF products, we can also provide melamine lamination, veneer lamination, UV coating and CNC processing according to customer requirements.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  <p className="text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider">Process Includes</p>
                  {["Material and board selection", "Surface sanding and preparation", "Laminating or coating when required", "Cutting and size adjustment", "Surface and edge quality inspection", "Stacking and warehouse storage", "Packaging and container loading", "Custom processing support available"].map((item) => (
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
                  <Image src="/images/products/products_mdf_detail page/9.Detail Page_MDF_Product Process.png" alt="MDF Production Process" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Dimension Options / 尺寸厚度选择 */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_mdf_detail page/10.Detail Page_MDF_Dimensions Options.png" alt="MDF Dimension Options" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Dimension Options</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Standard and Extended Sizes Available</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Flexible dimensions for furniture production, cabinet manufacturing and project orders.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">We support standard and customized MDF board sizes to meet different production needs. The common size is 2440×1220mm, while extended sizes can be supplied for doors, wall panels, wardrobes and special project applications. Thickness and glue options can also be customized according to customer requirements.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  <p className="text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider">Size & Thickness Options</p>
                  {["Sample size: 300×200mm", "Standard size: 2440×1220mm", "Extended sizes: 2600 / 2800 / 3050 / 3200 / 3400 / 3600×1220mm", "Thickness options: 3–25mm", "Glue options: ENF / E0 / E1 / E2, mainly E1", "Custom size and thickness available upon request"].map((item) => (
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

        {/* 11. Packaging Options / 包装方式 */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Packaging</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Export Packaging for Samples, Bulk Orders and Custom Shipments</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Protecting MDF boards during storage, handling and international transportation.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Proper packaging is important for MDF boards because panels need protection from surface damage, edge impact and moisture during transportation. We provide sample packaging, bulk loading, custom packaging and wooden frame packaging according to order quantity and shipping requirements.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  <p className="text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider">Packaging Methods</p>
                  {["Sample packaging", "Bulk container loading", "Custom packaging", "Wooden frame packaging", "Export pallet support", "Protective packing for panel edges and surfaces", "Packaging can be customized according to customer requirements"].map((item) => (
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
                  <Image src="/images/products/products_mdf_detail page/11.Detail Page_MDF_Packaging_Option .png" alt="MDF Packaging Options" width={800} height={600} className="w-full h-auto" unoptimized />
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
              <p className="text-[#6b7280] mt-3 sm:mt-4 text-xs sm:text-sm">Everything you need to know about our MDF</p>
            </div>

            <div className="space-y-3">
              {defaultFaqs.map((faq, index) => (
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

export default RawMDFDetailTemplate;
