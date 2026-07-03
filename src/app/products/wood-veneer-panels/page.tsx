"use client";

import Link from "next/link";
import Image from "next/image";
import { ProductCategoryBanner } from "@/components/product/ProductCategoryBanner";
import { woodVeneerPanelProducts } from "@/data/products/wood-veneer-panel-products";

// Convert object to array for rendering - only products with featuredImage
const products = Object.values(woodVeneerPanelProducts).filter(
  (p) => p.featuredImage && p.featuredImage.length > 0
);

export default function WoodVeneerPanelsPage() {
  return (
    <>
      {/* Hero Banner */}
      <ProductCategoryBanner
        title="Wood Veneer Panels"
        image="/images/products-page-banners/wood-veneer-panels.jpg"
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
            <span className="text-[#1F2621] font-medium">Wood Veneer Panels</span>
          </div>
        </div>
      </div>

      {/* Category Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-4">About Wood Veneer Panels</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Wood veneer panels are manufactured by laminating natural or engineered wood veneer onto various substrates including plywood, MDF, particle board, and OSB. This combination provides the aesthetic beauty of real wood with the structural stability and cost-effectiveness of engineered panels.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2621]">Product Range</h2>
            <p className="text-[#6b7280] mt-4">Explore our wood veneer panel collection — ready-to-use wood veneer sheets pre-bonded to balanced substrate</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div 
                key={product.slug}
                className="group bg-white rounded-xl border border-[#E5E1D8] overflow-hidden hover:border-[#0F6B3A]/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Product Image */}
                <Link href={`/products/wood-veneer-panels/${product.slug}`} className="block aspect-square bg-gradient-to-br from-[#F7F3EC] to-[#E8E4DB] relative overflow-hidden">
                  {product.featuredImage ? (
                    <Image
                      src={product.featuredImage}
                      alt={product.imageAlt || product.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-10 h-10 text-[#8B5E3C]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0F6B3A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <span className="px-4 py-2 bg-white text-[#0F6B3A] rounded-lg font-medium text-sm">
                      View Details
                    </span>
                  </div>
                </Link>
                
                {/* Product Info */}
                <div className="p-4">
                  <span className="text-xs text-[#8B5E3C] font-medium">{product.code}</span>
                  <h3 className="font-semibold text-[#1F2621] mt-1 mb-2 line-clamp-2 leading-snug">
                    <Link href={`/products/wood-veneer-panels/${product.slug}`} className="hover:text-[#0F6B3A] transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                  {product.tags && product.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {product.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 bg-[#F7F3EC] text-[#8B5E3C] rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F6B3A]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Wood Veneer Panels?</h2>
            <p className="text-white/80 mb-8">
              Contact Tongli for product inquiries, custom specifications, or sample requests.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-[#0F6B3A] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
              >
                Contact Us
              </Link>
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
