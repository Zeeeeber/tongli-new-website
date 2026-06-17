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
});

export default function NaturalWoodVeneerPage() {
  return (
    <>
      {/* Hero Banner */}
      <ProductCategoryBanner
        title="Natural Wood Veneer"
        image="/images/products-page-banners/natural-wood-veneer.jpg"
      />

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

      {/* Key Features */}
      <section className="py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2621]">Key Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "80+ Wood Species", description: "Oak, Walnut, Teak, Cherry, Maple, Ash, and more", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" },
              { title: "Natural Grains", description: "Authentic wood grain patterns and textures", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
              { title: "Dyeable & Treatable", description: "Available for staining, dyeing, and smoking", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
              { title: "Custom Thickness", description: "0.15mm to 3mm available", icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" },
            ].map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 border border-[#E5E1D8] text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#8B5E3C]/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#8B5E3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-[#1F2621] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#6b7280]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2621]">Popular Species</h2>
            <p className="text-[#6b7280] mt-4">Explore our natural wood veneer collection</p>
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

      {/* Applications */}
      <section className="py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-2">Applications</h2>
            <p className="text-[#6b7280]">Perfect for these applications</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Veneer Panels", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
              { name: "Furniture", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" },
              { name: "Doors", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
              { name: "Wall Panels", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
            ].map((app) => (
              <Link key={app.name} href="/applications" className="group bg-white rounded-xl p-6 text-center hover:bg-[#8B5E3C]/5 transition-colors">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[#F7F3EC] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#8B5E3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={app.icon} />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#1F2621]">{app.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Components: FAQ and CTA */}
      <NaturalWoodVeneerCategoryClient products={naturalWoodVeneerProducts} />
    </>
  );
}
