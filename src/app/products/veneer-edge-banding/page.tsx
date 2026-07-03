import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { veneerEdgeBandingProducts } from "@/data/products/veneer-edge-banding-products";
import { ProductCategoryBanner } from "@/components/product/ProductCategoryBanner";

export const metadata: Metadata = {
  title: "Veneer Edge Banding | Wood Veneer Edge Tape Supplier | Tongli Timber",
  description:
    "Wood veneer edge banding for furniture, cabinets, doors and decorative panels. Natural wood veneer edge tape and engineered wood veneer edge banding in multiple species.",
};

export default function VeneerEdgeBandingPage() {
  const productCount = veneerEdgeBandingProducts.length;

  return (
    <>
      {/* Hero Banner */}
      <ProductCategoryBanner
        title="Veneer Edge Banding"
        image="/images/products-page-banners/veneer-edge-banding.jpg"
      />

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
            <span className="text-[#1F2621] font-medium">Veneer Edge Banding</span>
          </div>
        </div>
      </div>

      {/* Category Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-4">
              About Veneer Edge Banding
            </h2>
            <p className="text-[#6b7280] leading-relaxed">
              Veneer edge banding is made from real wood veneer (natural or engineered) and is
              used to cover and finish the exposed edges of veneer-faced boards, furniture parts,
              cabinets, doors and decorative panels. Compared with PVC or plastic edge banding, real
              wood veneer edge banding provides a matching wood surface effect across panels and
              edges for a more refined and natural finish.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2621]">Product Range</h2>
            <p className="text-[#6b7280] mt-4">
              Showing <span className="font-medium text-[#1F2621]">{productCount}</span>{" "}
              veneer edge banding products in natural and engineered wood veneer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {veneerEdgeBandingProducts.map((product) => {
              const productImage = product.featuredImage || product.gallery[0] || null;

              return (
                <Link
                  key={product.slug}
                  href={`/products/veneer-edge-banding/${product.slug}`}
                  className="group bg-white rounded-xl border border-[#E5E1D8] overflow-hidden hover:border-[#8B5E3C]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square bg-gradient-to-br from-[#F7F3EC] to-[#E8E4DB] relative overflow-hidden">
                    {productImage ? (
                      <Image
                        src={productImage}
                        alt={product.imageAlt || product.name}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                          <svg
                            className="w-10 h-10 text-[#8B5E3C]/30"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-[#8B5E3C]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 bg-white text-[#8B5E3C] rounded-lg font-medium text-sm">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-[#8B5E3C] font-mono">{product.code}</span>
                    <h3 className="font-semibold text-[#1F2621] mt-1 mb-2 line-clamp-2 leading-snug">
                      {product.name}
                    </h3>
                    {product.tags && product.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {product.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 bg-[#F7F3EC] text-[#8B5E3C] rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#8B5E3C]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Veneer Edge Banding?</h2>
            <p className="text-white/80 mb-8">
              Contact us for species, width, backing and finishing options. Sample shipments can be
              arranged for evaluation before bulk orders.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-[#8B5E3C] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors">Contact Us</Link>
              <Link
                href="/products"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
