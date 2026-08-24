"use client";

import T from "@/i18n/full-site-context";
import Image from "next/image";
import Link from "@/components/i18n/LocalizedLink";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import { ContactFormModal } from "@/components/contact/ContactFormModal";
import { naturalWoodVeneerProducts, type NaturalWoodVeneerProduct } from "@/data/products/natural-wood-veneer-products";

interface NaturalWoodVeneerDetailTemplateProps {
  product: NaturalWoodVeneerProduct;
  slug: string;
}

const placeholderRelatedProducts = [0, 1, 2, 3];

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

export function NaturalWoodVeneerDetailTemplate({
  product,
  slug,
}: NaturalWoodVeneerDetailTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);
  const thumbnailScrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const productImages = useMemo(() => {
    if (product.gallery?.length) {
      return product.gallery;
    }

    if (product.featuredImage) {
      return [product.featuredImage];
    }

    return [];
  }, [product.featuredImage, product.gallery]);
  const relatedProducts = useMemo(() => {
    const currentTags = new Set(product.tags);

    return naturalWoodVeneerProducts
      .filter((candidate) => candidate.slug !== slug)
      .map((candidate) => {
        let score = 0;

        if (candidate.specs.veneerSpecies === product.specs.veneerSpecies) {
          score += 4;
        }

        if (candidate.specs.cuttingMethod === product.specs.cuttingMethod) {
          score += 3;
        }

        const sharedTagCount = candidate.tags.filter((tag) => currentTags.has(tag)).length;
        score += sharedTagCount;

        return {
          product: candidate,
          score,
        };
      })
      .sort((a, b) => b.score - a.score || a.product.name.localeCompare(b.product.name))
      .slice(0, 4)
      .map(({ product: candidate }) => candidate);
  }, [product.specs.cuttingMethod, product.specs.veneerSpecies, product.tags, slug]);
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

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#F7F3EC] py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-[#6b7280]">
            <Link href="/" className="hover:text-[#0F6B3A]"><T>{"Home"}</T></Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-[#0F6B3A]"><T>{"Products"}</T></Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products/natural-wood-veneer" className="hover:text-[#0F6B3A]"><T>{"Natural Wood Veneer"}</T></Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1F2621] font-medium truncate max-w-[200px]"><T>{product.name}</T></span>
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
                  <h3 className="font-bold text-[#1F2621]"><T>{"Product Categories"}</T></h3>
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
                          <span><T>{cat.name}</T></span>
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
                          <T>{cat.name}</T>
                        </Link>
                      )}
                      <div id={`cat-${cat.name.replace(/\s+/g, "-")}`} className="hidden bg-[#F7F3EC]">
                        {cat.sub && cat.sub.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block pl-8 pr-5 py-2.5 text-sm text-[#6b7280] hover:text-[#1F2621] transition-colors"
                          >
                            <T>{sub.name}</T>
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
                        <span className="text-sm text-[#8B5E3C]/50"><T>{"Product Image "}</T>{selectedImage + 1}</span>
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
                    <span className="text-sm text-[#8B5E3C] font-medium"><T>{product.category}</T></span>
                    <span className="mx-2 text-[#E5E1D8]">|</span>
                    <span className="text-sm text-[#6b7280]"><T>{"Code: "}</T>{product.code}</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2621] mb-4"><T>{product.name}</T></h1>
                  <p className="text-[#6b7280] leading-relaxed mb-6"><T>{product.shortDesc}</T></p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-xs font-medium text-[#1F2621]">
                        <T>{tag}</T>
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
                          <T>{"About Us\n                        "}</T></Link>
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
                        <T>{"We are a 25+ year manufacturer specializing in producing wooden products of veneer plywood, veneer mdf, commercial plywood and wood veneer sheets with more than 95% repurchase rate.\n                      "}</T></p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="flex-1 min-w-[120px] px-4 py-3 bg-[#0F6B3A] text-white text-center rounded-lg font-semibold hover:bg-[#124B34] transition-colors"
                    >
                      <T>{"CONTACT US\n                    "}</T></Link>
                    <a
                      href="https://wa.me/message/2DMHTU2VVZTKC1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px] px-4 py-3 bg-[#25D366] text-white text-center rounded-lg font-semibold hover:bg-[#20BD5A] transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <T>{"WHATSAPP\n                    "}</T></a>
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
          <h2 className="text-xl sm:text-2xl font-bold text-[#1F2621] mb-8"><T>{"Related Products"}</T></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((relatedProduct) => {
                const relatedImage = relatedProduct.featuredImage || relatedProduct.gallery[0] || null;
                const relatedLabel = relatedProduct.specs.veneerSpecies || relatedProduct.tags[0] || "Natural Wood Veneer";

                return (
                  <Link
                    key={relatedProduct.slug}
                    href={`/products/natural-wood-veneer/${relatedProduct.slug}`}
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
                        <span className="px-4 py-2 bg-white text-[#0F6B3A] rounded-lg font-medium text-sm"><T>{"View Details"}</T></span>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="inline-flex items-center rounded-full bg-[#F7F3EC] px-3 py-1 text-[11px] font-medium text-[#0F6B3A]">{relatedLabel}</span>
                      <h3 className="font-semibold text-[#1F2621] mt-3 mb-2 line-clamp-2"><T>{relatedProduct.name}</T></h3>
                      <p className="text-sm text-[#6b7280] line-clamp-3"><T>{relatedProduct.shortDesc}</T></p>
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
                    <span className="inline-flex items-center rounded-full bg-[#F7F3EC] px-3 py-1 text-[11px] font-medium text-[#0F6B3A]"><T>{"Natural Wood Veneer"}</T></span>
                    <h3 className="font-semibold text-[#1F2621] mt-3 mb-2 line-clamp-2"><T>{"Related Product"}</T></h3>
                    <p className="text-sm text-[#6b7280] line-clamp-3"><T>{"More natural wood veneer products will appear here."}</T></p>
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
            <h2 className="text-xl sm:text-2xl font-bold text-[#1F2621] mb-5"><T>{"Detailed Specifications"}</T></h2>
            <div className="rounded-xl overflow-hidden border border-[#E5E1D8] shadow-sm overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <tbody>
                  {[
                    { label: "Brand Name", value: "TONGLI" },
                    { label: "Product Name", value: "Natural Wood Veneer, Natural Veneer, Solid Wood Veneer, Real Wood Veneer, Genuine Wood Veneer, Sliced Natural Veneer, Rotary Cut Natural Veneer, Half-Round Natural Veneer, Peeled Natural Veneer, Natural Sliced Wood Veneer, Solid Veneer, Timber Veneer, Natural Plain Veneer, Natural Face Veneer, Natural Thin Veneer, Natural Thick Veneer" },
                    { label: "Veneer Types", value: "Red Oak / White Oak, Ash, Sapele, Teak, Maple, Cherry, Birch, Black Walnut, Wenge, Elm, etc." },
                    { label: "Veneer Grain", value: "Mainly C/C (Crown Cut) And Q/C (Quarter Cut)" },
                    { label: "Length", value: "2.5-3.8m" },
                    { label: "Width", value: "12-20cm" },
                    { label: "Thickness", value: "0.15mm-1mm (Mainly 0.4mm-0.45mm)" },
                    { label: "Veneer Grade", value: "AAA+ / AAA / AA" },
                    { label: "Usage", value: "Interior Walls, Ceilings, Furniture, Cabinet Doors, Wardrobes, Doors, Partitions, Hotel Decoration, Office Decoration, Home Decoration, Background Walls, Display Shelves, Decorative Lines, Commercial Space Decoration, Villa Decoration, Shopping Mall Decoration" },
                    { label: "Export Packing", value: "Palletized Packaging, Stretch Film Wrapping, Cardboard Box Packaging" },
                    { label: "Delivery Time", value: "Normally About 5 to 7 Days, Depends on Quantity and Requirement" },
                    { label: "Main Customer Group", value: "Wholesalers, Furniture Factories, Door Factories, Whole-House Customization Factories, Cabinet Factories, Hotel Construction and Decoration Projects, Real Estate Decoration Projects" },
                    { label: "Payment Term", value: "30% by TT as Deposit of Order, 70% by TT Before Loading or 70% by Irrevocable LC at Sight" },
                  ].map((row, index) => (
                    <tr
                      key={row.label}
                      className={`group transition-colors ${index % 2 === 0 ? "bg-[#FDFBF7]" : "bg-white/60"} hover:bg-[#0F6B3A]/5 border-b border-[#E5E1D8] last:border-b-0`}
                    >
                      <td className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-[#0F6B3A] w-32 sm:w-44 align-middle pr-3 sm:pr-4 border-r border-[#E5E1D8]">
                        <T>{row.label}</T>
                      </td>
                      <td className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm text-[#6b7280] align-top">
                        <T>{row.value}</T>
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
        {/* 01. Banner */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3"><T>{product.category}</T></p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3"><T>{"Natural Wood Veneer Manufacturer"}</T></h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic"><T>{"Supplying natural wood veneer sheets for furniture, doors, panels and interior projects."}</T></p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6"><T>{"Tongli Timber supplies natural wood veneer in a wide range of species, grains, grades and thickness options. From veneer slicing and grading to matching, packing and export delivery, we help furniture manufacturers, door factories, panel producers and interior project buyers source stable and beautiful veneer materials for production."}</T></p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-6 sm:mb-8">
                  {["Natural wood veneer sheets and rolls", "Multiple wood species and grain options", "Custom grade, thickness and matching methods", "Suitable for furniture, doors, panels and decoration projects", "Factory direct supply with export experience"].map((point) => (
                    <div key={point} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]"><T>{point}</T></span>
                    </div>
                  ))}
                </div>
                <button onClick={() => router.push("/contact")} className="px-8 py-4 bg-[#0F6B3A] text-white rounded-lg font-semibold hover:bg-[#124B34] transition-colors"><T>{"Request A Veneer Sample"}</T></button>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/products/products_natural wood veneer_detail page/1.Banner_wood veneer manufacturer.png"
                    alt="Natural Wood Veneer Manufacturer"
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

        {/* 02. Real Shots */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_natural wood veneer_detail page/2.natural wood veneer real shots.png" alt="Natural Wood Veneer Real Shots" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3"><T>{"Real Shots"}</T></p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3"><T>{"Real Natural Wood Veneer Sheets for Selection"}</T></h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic"><T>{"Clear grain, natural color variation and real material details before order confirmation."}</T></p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6"><T>{"Each natural wood veneer has its own unique grain, color and texture. Our real product photos help customers check veneer appearance, grain direction, sheet quality and color tone before placing orders. Whether you need oak, walnut, ash, teak, eucalyptus or other natural veneer species, we can provide sample photos, catalog references and physical samples for approval."}</T></p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Furniture surface decoration", "Door skin production", "Veneer plywood lamination", "Wall panel and cabinet manufacturing", "Sample confirmation before bulk order"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]"><T>{item}</T></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03. Application */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3"><T>{"Applications"}</T></p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3"><T>{"Natural Wood Veneer for High-end Interior Surfaces"}</T></h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic"><T>{"A flexible decorative material for furniture, wall panels, doors and custom interiors."}</T></p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6"><T>{"Natural wood veneer is widely used in furniture, wooden doors, cabinets, wardrobes, wall cladding, hotel interiors and full-house customization projects. It keeps the natural beauty of real wood while offering better material efficiency than solid wood. With different veneer species and matching methods, customers can create warm, elegant and customized interior surfaces."}</T></p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Furniture and cabinet surfaces", "Wooden doors and door skins", "Wall panels and background walls", "Hotel, apartment and commercial interiors", "Wardrobes, closets and customized decoration"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]"><T>{item}</T></span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_natural wood veneer_detail page/3.natural wood veneer application.png" alt="Natural Wood Veneer Application" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04. Custom Options */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_natural wood veneer_detail page/4.natural wood veneer custom option-v2.png" alt="Custom Options" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3"><T>{"Custom Options"}</T></p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3"><T>{"Custom Veneer Options for Different Design Requirements"}</T></h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic"><T>{"Choose the right grain, matching method, grade and thickness for your project."}</T></p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6"><T>{"We support customized natural wood veneer solutions according to your production and design needs. Customers can choose straight grain, crown cut, book match, slip match or mixed match. Different veneer grades and thickness options are also available to match budget, visual effect and processing requirements."}</T></p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Straight grain and mountain grain options", "Book match, slip match and mixed match", "AAA+, AAA and AA grade selection", "Thin veneer: around 0.15-0.3mm", "Thick veneer: around 0.4mm-1mm", "Custom matching for furniture, doors and panel projects"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]"><T>{item}</T></span>
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
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3"><T>{"About Us"}</T></p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3"><T>{"A Wood Veneer Supplier Since 1999"}</T></h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic"><T>{"Experienced manufacturer for veneer, veneer panels and decorative wood materials."}</T></p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6"><T>{"Dongguan Tongli Timber Products Co., Ltd. was established in 1999 and specializes in natural wood veneer, engineered veneer, veneer plywood, fancy plywood, UV coated veneer panels and 3D wood panels. With years of production experience and export service, we support global customers with stable material supply, customized processing and professional communication."}</T></p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Established in 1999", "Experienced in wood veneer and veneer panel production", "Factory facilities for veneer processing and lamination", "Support for samples, customization and bulk orders", "Serving furniture, door, panel and interior project customers worldwide"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]"><T>{item}</T></span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_natural wood veneer_detail page/5.natural wood veneer_Company Profile.png" alt="Company Profile" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06. Customer Feedback */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_natural wood veneer_detail page/6.natural wood veneer_custom feedback.png" alt="Customer Feedback" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3"><T>{"Testimonials"}</T></p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3"><T>{"Trusted by Overseas Buyers and Repeat Customers"}</T></h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic"><T>{"Quality, communication and reliable delivery are the foundation of long-term cooperation."}</T></p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6"><T>{"Many customers choose us again because of stable veneer quality, clear communication and practical support during sourcing. From sample checking to bulk order delivery, we help buyers confirm wood species, veneer thickness, grain matching, edge banding compatibility and packaging requirements."}</T></p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Consistent veneer quality", "Accurate sample confirmation", "Matched veneer and edge banding options", "Clear order communication", "Reliable packaging and delivery", "Support for repeat orders and long-term cooperation"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]"><T>{item}</T></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07. Certifications */}
        <section className="py-10 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3"><T>{"Certifications"}</T></p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3"><T>{"Certified Supplier Support for Global Buyers"}</T></h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic"><T>{"Product documents and compliance support for import, project and supplier evaluation."}</T></p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6"><T>{"For international buyers, certification and supplier documents are important for purchasing decisions. Tongli Timber can provide related certificates, test reports and company qualification documents according to different market and project requirements. This helps customers reduce sourcing risk and complete supplier review more efficiently."}</T></p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["SGS-related test reports", "FSC-related documentation", "CE / GMC certificate support", "Company qualification documents", "Export and project approval support"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]"><T>{item}</T></span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_natural wood veneer_detail page/7..natural wood veneer_Certification.png" alt="Certifications" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 08. Packaging Options */}
        <section className="py-10 sm:py-16 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="w-full rounded-2xl overflow-hidden">
                  <Image src="/images/products/products_natural wood veneer_detail page/8.natural wood veneer packaging.png" alt="Packaging Options" width={800} height={600} className="w-full h-auto" unoptimized />
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3"><T>{"Packaging"}</T></p>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3"><T>{"Safe Packaging for Samples, Small Orders and Bulk Shipments"}</T></h2>
                <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic"><T>{"Flexible packing methods for different order quantities and shipping needs."}</T></p>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6"><T>{"Natural wood veneer needs proper packaging to prevent damage, moisture and bending during transportation. We provide different packaging solutions for sample orders, small orders and bulk shipments. Veneer sheets can be packed in rolls, bundles, cartons, pallets or export containers according to customer requirements."}</T></p>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {["Sample brochure", "Stretch film wrapping", "Roll and bundle packing", "Pallet packaging", "Cardboard box packaging", "Custom export packaging available"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-[#6b7280]"><T>{item}</T></span>
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
              <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-widest mb-2 sm:mb-3"><T>{"FAQ"}</T></p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F2621]"><T>{"Frequently Asked Questions"}</T></h2>
              <div className="w-12 sm:w-16 h-1 bg-[#0F6B3A] mx-auto mt-3 sm:mt-4 rounded-full"></div>
              <p className="text-[#6b7280] mt-3 sm:mt-4 text-xs sm:text-sm"><T>{"Everything you need to know about our natural wood veneer"}</T></p>
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
                      <span className="text-[#1F2621] font-medium pr-4 leading-relaxed text-sm lg:text-base"><T>{faq.q}</T></span>
                    </div>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === index ? "bg-[#0F6B3A] border-[#0F6B3A] rotate-45" : "border-[#E5E1D8] group-hover:border-[#0F6B3A]/50"}`}>
                      <svg className={`w-4 h-4 transition-colors duration-300 ${openFaq === index ? "text-white" : "text-[#6b7280] group-hover:text-[#0F6B3A]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? "max-h-60" : "max-h-0"}`}>
                    <div className="px-4 sm:px-6 pb-5 sm:pb-6 ml-10 sm:ml-20 text-[#6b7280] leading-relaxed text-xs sm:text-sm border-t border-[#F7F3EC] pt-4">
                      <T>{faq.a}</T>
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

export default NaturalWoodVeneerDetailTemplate;
