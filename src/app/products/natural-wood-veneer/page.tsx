import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { naturalWoodVeneerProducts } from "@/data/products/natural-wood-veneer-products";
import { NaturalWoodVeneerCategoryClient } from "@/components/product/NaturalWoodVeneerCategoryClient";
import { createPageMetadata } from "@/lib/seo/metadata";
import { ProductCategoryBanner } from "@/components/product/ProductCategoryBanner";

export const metadata: Metadata = createPageMetadata({
  title: "Natural Wood Veneer",
  description: "Authentic wood veneer sheets with natural grain patterns. Over 80 species including Oak, Walnut, Teak, Cherry, Maple, Ash, and more.",
  path: "/products/natural-wood-veneer",
});

export default function NaturalWoodVeneerPage() {
  return (
    <>
      {/* Hero Banner */}
      <ProductCategoryBanner
        title="Natural Wood Veneer"
        image="/images/products-page-banners/natural-wood-veneer.jpg"
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
            <span className="text-[#1F2621] font-medium">Natural Wood Veneer</span>
          </div>
        </div>
      </div>

      {/* Category Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-4">About Natural Wood Veneer</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Natural wood veneer is sliced from real hardwood logs, preserving the authentic grain patterns, color variations, and organic textures unique to each species. Each sheet is a one-of-a-kind piece of nature, making natural veneer ideal for premium furniture, interior decoration, and architectural applications.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2621]">Product Range</h2>
            <p className="text-[#6b7280] mt-4">Explore our natural wood veneer collection — authentic sliced veneer sheets with unique grain patterns from 80+ species</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {naturalWoodVeneerProducts.map((product) => {
              const productImage = product.featuredImage || product.gallery[0] || null;

              return (
                <Link 
                  key={product.slug} 
                  href={`/products/natural-wood-veneer/${product.slug}`}
                  className="group bg-white rounded-xl border border-[#E5E1D8] overflow-hidden hover:border-[#8B5E3C]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square bg-gradient-to-br from-[#D4C4B0] to-[#C4A77D] relative overflow-hidden">
                    {productImage ? (
                      <Image
                        src={productImage}
                        alt={product.imageAlt || product.name}
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
                    <div className="absolute inset-0 bg-[#8B5E3C]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 bg-white text-[#8B5E3C] rounded-lg font-medium text-sm">View Details</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-[#8B5E3C] font-mono">{product.code}</span>
                    <h3 className="font-semibold text-[#1F2621] mt-1 mb-2 line-clamp-1">{product.name}</h3>
                    <div className="text-xs text-[#6b7280] space-y-1">
                      <p>{product.specs.veneerSpecies} | {product.specs.cuttingMethod}</p>
                      <p>{product.specs.veneerThickness} thickness</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Components: CTA */}
      <NaturalWoodVeneerCategoryClient products={naturalWoodVeneerProducts} />
    </>
  );
}
