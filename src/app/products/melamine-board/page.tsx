"use client";

import Image from "next/image";
import Link from "next/link";
import { melamineBoardProducts } from "@/data/products/melamine-board-products";

export default function MelamineBoardPage() {
  const products = melamineBoardProducts;

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
            <span className="text-[#1F2621] font-medium">Melamine Board</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#6B4A2C] to-[#8B5E3C] py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-white/60 text-sm font-medium tracking-wider uppercase">Product Category</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">Melamine Board</h1>
            <p className="text-white/80 text-lg leading-relaxed">
              High-quality melamine faced boards with a wide selection of substrates, colors, wood grain patterns, and surface finishes. Ideal for furniture manufacturing, cabinet production, and interior decoration projects.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-4">
              Melamine Board Product Range
            </h2>
            <p className="text-[#6b7280]">Explore our melamine faced board collection</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.slug}
                className="group bg-white rounded-xl border border-[#E5E1D8] overflow-hidden hover:border-[#0F6B3A]/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Product Image */}
                <Link href={`/products/melamine-board/${product.slug}`} className="block aspect-square bg-gradient-to-br from-[#F7F3EC] to-[#E8E4DB] relative overflow-hidden">
                  {product.featuredImage ? (
                    <Image
                      src={product.featuredImage}
                      alt={product.imageAlt || product.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
                  <div className="absolute inset-0 bg-[#0F6B3A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-white text-[#0F6B3A] rounded-lg font-medium text-sm">
                      View Details
                    </span>
                  </div>
                </Link>

                {/* Product Info */}
                <div className="p-4">
                  <span className="text-xs text-[#8B5E3C] font-medium">{product.code}</span>
                  <h3 className="font-semibold text-[#1F2621] mt-1 mb-2 line-clamp-2 leading-snug">
                    <Link href={`/products/melamine-board/${product.slug}`} className="hover:text-[#0F6B3A] transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                  {product.shortDesc && (
                    <p className="text-xs text-[#6b7280] line-clamp-2 mb-3 leading-relaxed">{product.shortDesc}</p>
                  )}
                  {product.tags.length > 0 && (
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

      {/* Info Section */}
      <section className="py-16 lg:py-20 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-4">
              Melamine Faced Boards
            </h2>
            <p className="text-[#6b7280] leading-relaxed">
              Melamine boards offer excellent durability, scratch resistance, and a wide variety of surface finishes to match any design requirement. Available on various substrates including plywood, MDF, moisture-resistant MDF, and particle board.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[#E5E1D8] text-center">
              <div className="w-16 h-16 bg-[#0F6B3A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2621] mb-3">Various Substrates</h3>
              <p className="text-sm text-[#6b7280]">
                Available on Plywood, Plain MDF, Moisture-Resistant MDF, and Particle Board
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#E5E1D8] text-center">
              <div className="w-16 h-16 bg-[#0F6B3A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2621] mb-3">Color & Finish Options</h3>
              <p className="text-sm text-[#6b7280]">
                Solid colors, wood grains, high gloss, matte and custom decorative finishes
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[#E5E1D8] text-center">
              <div className="w-16 h-16 bg-[#0F6B3A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2621] mb-3">Durable Surface</h3>
              <p className="text-sm text-[#6b7280]">
                Scratch-resistant, easy to clean, and long-lasting decorative surface
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#6B4A2C]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Melamine Board?</h2>
            <p className="text-white/80 mb-8">
              Contact us for specifications, color options, custom sizes and pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-[#6B4A2C] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors">
                Contact Us
              </Link>
              <Link href="/products" className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
