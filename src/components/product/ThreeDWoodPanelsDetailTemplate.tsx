"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ContactFormModal } from "@/components/contact/ContactFormModal";
import { type NaturalWoodVeneerProduct } from "@/data/products/natural-wood-veneer-products";
import { threeDWoodPanelsProducts } from "@/data/products/three-d-wood-panels-products";

interface ThreeDWoodPanelsDetailTemplateProps {
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
  { name: "3D Wood Panels", href: "/products/3d-wood-panels", active: true },
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
];

export function ThreeDWoodPanelsDetailTemplate({
  product,
  slug,
}: ThreeDWoodPanelsDetailTemplateProps) {
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
    const idx = threeDWoodPanelsProducts.findIndex((p) => p.slug === product.slug);
    if (idx === -1) {
      return threeDWoodPanelsProducts.slice(0, 4) as unknown as NaturalWoodVeneerProduct[];
    }
    const ordered: typeof threeDWoodPanelsProducts = [];
    const total = threeDWoodPanelsProducts.length;
    for (let offset = 1; offset < total && ordered.length < 4; offset++) {
      const candidate = threeDWoodPanelsProducts[(idx + offset) % total];
      ordered.push(candidate);
    }
    return ordered as unknown as NaturalWoodVeneerProduct[];
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
            <Link href="/products/3d-wood-panels" className="hover:text-[#0F6B3A]">3D Wood Panels</Link>
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
                      <h3 className="text-lg font-bold text-[#1F2621] mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <Link href="/about" className="hover:text-[#0F6B3A] transition-colors">
                          About Us
                        </Link>
                        <span className="flex items-center gap-1.5 ml-1">
                          <a href="https://www.instagram.com/tongliwood?igsh=ODdrNnc2YmpicWR3&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#0F6B3A]/10 transition-colors">
                            <Image src="/images/social/icons8-instagram-50.svg" alt="Instagram" width={22} height={22} />
                          </a>
                          <a href="https://www.facebook.com/share/14kCoMrhpji/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#0F6B3A]/10 transition-colors">
                            <Image src="/images/social/icons8-facebook.svg" alt="Facebook" width={22} height={22} />
                          </a>
                          <a href="https://pin.it/2IX8y7aCk" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#0F6B3A]/10 transition-colors">
                            <Image src="/images/social/icons8-pinterest-50.svg" alt="Pinterest" width={22} height={22} />
                          </a>
                          <a href="https://www.linkedin.com/in/tongli-timber-a23bb240a?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#0F6B3A]/10 transition-colors">
                            <Image src="/images/social/icons8-linkedin-50.svg" alt="LinkedIn" width={22} height={22} />
                          </a>
                          <a href="https://youtube.com/@tongli_timber?si=b7nND_pbImU9-LKX" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#0F6B3A]/10 transition-colors">
                            <Image src="/images/social/icons8-youtube-50.svg" alt="YouTube" width={22} height={22} />
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
                const relatedLabel = relatedProduct.specs.veneerSpecies || relatedProduct.tags[0] || "3D Wood Panels";

                return (
                  <Link
                    key={relatedProduct.slug}
                    href={`/products/3d-wood-panels/${relatedProduct.slug}`}
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
                    <span className="inline-flex items-center rounded-full bg-[#F7F3EC] px-3 py-1 text-[11px] font-medium text-[#0F6B3A]">3D Wood Panels</span>
                    <h3 className="font-semibold text-[#1F2621] mt-3 mb-2 line-clamp-2">Related Product</h3>
                    <p className="text-sm text-[#6b7280] line-clamp-3">More 3D wood panels products will appear here.</p>
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
                    { label: "Product Name", value: "Wood Decorative Panel/Wood Decorative Board/Wall Cladding Panel/Wood Paneling Interior/Decorative Wall Covering Panels/3D Wood Panel" },
                    { label: "Solid Wood Types", value: "Black Walnut/White Oak/Red Oak/Olive Wood/Carbonized Wood Etc." },
                    { label: "Substrate Types", value: "Plain Mdf/Moisture-Resistant Mdf/Flame Retardant Mdf/Black Mdf/Blockboard/Commercial Plywood/Marine Plywood/Flame Retardant Plywood" },
                    { label: "Dimension", value: "4X8Ft, 4X9Ft, 4X10Ft, 4X11Ft, 4X12Ft / 2440X1220Mm, 2600X1220Mm, 2800X1220Mm, 3050X1220Mm, 3200X1220Mm, 3400X1220Mm, 3600X1220Mm" },
                    { label: "Standard Thickness", value: "12Mm+5Mm/Can Be Customized" },
                    { label: "Surface Finish", value: "Wax Oil/Closed Paint/Open Paint/Semi-Open Paint/Water-Based Paint Finishes" },
                    { label: "Substrate Moisture", value: "7-12%(Depends On The Thickness)" },
                    { label: "Formaldehyde Emission Grade", value: "ENF/E0/E1/P1/P2" },
                    { label: "Usage", value: "Interior Walls, Ceilings, Furniture, Cabinet Doors, Wardrobes, Doors, Partitions, Hotel Decoration, Office Decoration, Home Decoration, Background Walls, Display Shelves, Decorative Lines, Commercial Space Decoration, Villa Decoration, Shopping Mall Decoration" },
                    { label: "Kinds Of Export Packing", value: "Wooden Frame Packaging,In Bulk, Custom Packaging." },
                    { label: "Delivery Time", value: "Normally About 10 To 25 Days, It Depends On Quantity And Requirement." },
                    { label: "Main Customer Group", value: "Wholesalers, Furniture Factories, Door Factories, Whole-House Customization Factories, Cabinet Factories, Hotel Construction And Decoration Projects, Real Estate Decoration Projects" },
                    { label: "Payment Term", value: "30% By TT As Deposit Of Order, 70% By TT Before Loading Or 70% By Irrevocable LC At Sight" },
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

      {/* Product Detail Content - 8 Sections */}
      <div>
        {/* 01. Banner / 3D Wood Panel Supplier */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">3D Wood Panel Supplier</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Professional 3D Wood Panels Supplier</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Custom CNC carved wood panels for furniture, doors, wall decoration and interior projects.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Tongli Timber provides custom 3D wood panel solutions for furniture manufacturers, door factories, wood panel distributors and whole-house customization projects. With CNC carving, solid wood surface options, substrate customization and surface finishing support, we help buyers create decorative panels with natural texture, depth and strong visual impact.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {["Custom CNC carved patterns", "Solid wood and wood-based substrate options", "Suitable for walls, cabinets, doors and furniture surfaces", "Natural wood texture with three-dimensional design", "Factory direct supply with export packaging support"].map((point) => (
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
                    src="/images/products/products_3d wood panell_detail page/1. Detail Page_Banner_3D Wood Panel.png"
                    alt="Professional 3D Wood Panels Supplier"
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

        {/* 02. Product Features */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_3d wood panell_detail page/2. 3D Wood Panel_Feature.png" alt="3D Wood Panel Features" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Product Features</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Natural Texture, 3D Depth and Easy Installation</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">A decorative wood panel solution that brings texture and warmth to modern interiors.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Our 3D wood panels combine natural wood texture with CNC carved patterns to create a strong three-dimensional surface effect. The panels can be finished with natural wood wax oil or other surface treatments, making them suitable for healthier and more comfortable interior spaces. With ready-to-use panel formats, installation is more convenient for wall decoration, furniture surfaces and project applications.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Natural wood appearance and tactile texture", "CNC carved three-dimensional patterns", "Natural wood wax oil finish available", "Suitable for decorative walls and furniture surfaces", "Easy installation for interior projects", "Custom pattern and material options available"].map((item) => (
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

        {/* 03. Product Application */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Product Application</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">3D Decorative Panels for Modern Interior Design</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Ideal for wall cladding, cabinets, wardrobes, furniture fronts and commercial spaces.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">3D wood panels are widely used in high-end interior decoration, including feature walls, wardrobes, cabinet doors, kitchen panels, bathroom cabinets, reception areas, hotel spaces and commercial interiors. The carved surface creates a stronger sense of depth than flat panels, helping designers and manufacturers build more distinctive furniture and wall systems.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Feature walls and background walls", "Wardrobe and cabinet door panels", "Kitchen and bathroom cabinet fronts", "Furniture surface decoration", "Hotel, office and commercial interiors", "Residential whole-house customization projects"].map((item) => (
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
                  <Image src="/images/products/products_3d wood panell_detail page/3. 3D Wood Panel_Application.jpg" alt="3D Wood Panel Application" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04. Company Profile */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_3d wood panell_detail page/4. 3D Wood Panel_Company Profile.png" alt="Company Profile" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Company Profile</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Experienced Decorative Wood Panel Manufacturer Since 1999</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">From veneer panels to 3D carved panels, we support customized decorative material solutions.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Dongguan Tongli Timber Products Co., Ltd. was established in 1999 and specializes in decorative wood-based panels, including veneer plywood, fancy plywood, natural wood veneer, engineered veneer, UV coated panels and 3D wood panels. With years of production experience, CNC processing support and export service capability, we provide stable quality and customized solutions for global buyers.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Established in 1999", "Experienced in decorative wood panel manufacturing", "Support for CNC pattern customization", "Multiple substrate and surface material options", "Factory direct supply for overseas buyers", "Serving furniture, door, wall panel and interior project customers"].map((item) => (
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

        {/* 05. Customer Feedback */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Customer Feedback</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Trusted by Overseas Customers and Project Buyers</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Real feedback from customers helps prove product quality, communication and service reliability.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">We focus on practical cooperation details that overseas buyers care about, including sample confirmation, pattern matching, edge banding compatibility, packaging safety and delivery communication. Many customers choose us for repeat orders because of stable quality, responsive service and flexible customization support.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Clear sample confirmation before bulk orders", "Custom pattern and surface effect checking", "Matched veneer, panel and edge banding solutions", "Reliable packaging for international shipping", "Smooth communication during order production", "Support for long-term cooperation and repeat orders"].map((item) => (
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
                  <Image src="/images/products/products_3d wood panell_detail page/5. 3D Wood Panel_Customer Feedback.png" alt="Customer Feedback" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06. Certifications */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_3d wood panell_detail page/6. 3D Wood Panel_Certification.png" alt="Certifications" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Certifications</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Certification and Document Support for Global Buyers</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Helping customers complete supplier evaluation, import review and project approval.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">For international buyers, supplier qualification and product documentation are important parts of purchasing decisions. Tongli Timber can provide related certificates, test reports and company documents according to different market and project requirements, helping customers reduce sourcing risk and complete purchasing approval more efficiently.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
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

        {/* 07. Production Process */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Production Process</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">CNC Carving Process for Accurate 3D Surface Effects</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">From material preparation to carving, sanding and finishing, each step supports stable product quality.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Our 3D wood panels are produced through material selection, substrate preparation, CNC carving, sanding, surface finishing, quality inspection and packaging. CNC processing allows different carved patterns to be produced with better accuracy and repeatability, while sanding and finishing help improve the final touch, appearance and installation effect.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Material and substrate selection", "Panel cutting and preparation", "CNC carving and pattern processing", "Surface sanding and detail cleaning", "Wax oil, paint or UV finishing options", "Quality checking before packaging", "Export packing and loading support"].map((item) => (
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
                  <Image src="/images/products/products_3d wood panell_detail page/7. 3D Wood Panel_Production Process.png" alt="Production Process" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 08. Surface Material Options */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_3d wood panell_detail page/8. 3D Wood Panel_Custom_Service_Surface Solid Wood Options.png" alt="Surface Material Options" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Surface Material Options</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Multiple Solid Wood Surface Options for Custom Design</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Choose different wood species and colors to match your interior style and market needs.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Different surface materials create different visual effects. We provide various solid wood surface options such as American black walnut, American white oak, American red oak, American ash, olive wood and carbonized poplar. Customers can choose the right wood species according to color tone, grain character, project style and budget.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["American black walnut", "American white oak", "American red oak", "American ash", "Olive wood", "Carbonized poplar", "Custom wood species available upon request"].map((item) => (
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

        {/* 09. Substrate Options */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Substrate Options</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Flexible Substrate Options for Different Applications</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Select the right base board according to strength, cost, weight and usage environment.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">3D wood panels can be produced with different substrates to meet different project requirements. Plain MDF is suitable for general decorative use, moisture-resistant MDF can be used for areas with higher humidity, black MDF offers a darker base effect, and fire-retardant MDF or plywood can be selected for projects with higher safety requirements.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Plain MDF", "Moisture-resistant MDF", "Black MDF", "Fire-retardant MDF", "Plywood", "Fire-retardant plywood", "Custom substrate options available"].map((item) => (
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
                  <Image src="/images/products/products_3d wood panell_detail page/9. 3D Wood Panel_Custom_Service_Substrate Options.png" alt="Substrate Options" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Dimension Options */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_3d wood panell_detail page/10. 3D Wood Panel_Custom_Service_Dimension.png" alt="Dimension Options" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Dimension Options</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Standard and Custom Sizes for Project Production</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Flexible dimensions support wall panels, cabinet fronts, doors and customized furniture projects.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">We provide standard and extended sizes for different production and project needs. Sample sizes are available for material checking, while large-format panels can support wall cladding, wardrobe doors, cabinet surfaces and commercial interior projects. Thickness and glue options can also be adjusted according to customer requirements.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Sample size: 300×200mm", "Standard size: 2440×1220mm", "Extended sizes: 2600×1220mm, 2800×1220mm, 3050×1220mm", "Thickness option: 12mm + 5mm", "Glue option: ENF, no added formaldehyde option", "Custom size available upon request"].map((item) => (
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

        {/* 11. CNC Pattern Options */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">CNC Pattern Options</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Rich CNC Pattern Options for 3D Decorative Effects</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">From geometric textures to natural wood-inspired patterns, custom designs are available.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Our 3D wood panels can be customized with different CNC carved patterns, including circular textures, wave lines, geometric blocks, woven patterns, vertical grooves, pyramid textures and natural wood-inspired designs. These patterns create different light and shadow effects, helping furniture and interior products look more distinctive and premium.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Circle and wave texture", "Geometric carved pattern", "Vertical groove design", "Woven and grid patterns", "Pyramid and scale textures", "Natural wood grain carving", "Custom CNC pattern development available"].map((item) => (
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
                  <Image src="/images/products/products_3d wood panell_detail page/11. 3D Wood Panel_Custom_Service_Pattern.png" alt="CNC Pattern Options" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Surface Treatment Options */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_3d wood panell_detail page/12. 3D Wood Panel_Custom_Service_Surface Treatment Options.png" alt="Surface Treatment Options" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Surface Treatment Options</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Surface Finishing Options for Different Visual and Touch Effects</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Choose sanding, brushing, painting or UV coating according to the final application.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">Surface treatment affects both the appearance and touch of 3D wood panels. We provide sanded, brushed, open paint, closed paint, semi-open paint, water-based paint and UV coated finishes. Customers can choose different finishes according to design style, durability requirements and installation environment.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Sanded surface", "Brushed texture", "Open paint finish", "Closed paint finish", "Semi-open paint finish", "Water-based paint", "UV coated finish", "Natural wood wax oil finish available"].map((item) => (
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
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">Packaging Options</p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">Export Packaging for Samples, Bulk Orders and Custom Shipments</h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">Protecting carved surfaces during storage, handling and international transportation.</p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">3D wood panels need proper packaging because the carved surface requires protection during transportation. We provide sample packaging, bulk loading, custom packaging and wooden frame packaging according to order quantity and shipping requirements. Packaging can be adjusted for distributors, furniture factories and project deliveries.</p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Sample packaging", "Bulk container loading", "Custom packaging", "Wooden frame packaging", "Export pallet support", "Protective packing for carved surfaces", "Packaging can be customized according to customer requirements"].map((item) => (
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
                  <Image src="/images/products/products_3d wood panell_detail page/13. 3D Wood Panel_Custom_Packaging Options.png" alt="Packaging Options" width={800} height={600} className="w-full h-auto" unoptimized />
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
              <p className="text-[#6b7280] mt-3 sm:mt-4 text-xs sm:text-sm">Everything you need to know about our 3D wood panels</p>
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

export default ThreeDWoodPanelsDetailTemplate;
