import T from "@/i18n/full-site-context";
import { Metadata } from "next";
import Image from "next/image";
import { ProductCategoryBanner } from "@/components/product/ProductCategoryBanner";
import Link from "@/components/i18n/LocalizedLink";
import { engineeredWoodVeneerProducts } from "@/data/products/engineered-wood-veneer-products";

export const metadata: Metadata = {
  title: "Engineered Wood Veneer | Reconstituted Veneer 300+ Patterns | Tongli Timber",
  description: "Reconstituted veneer with 300+ consistent patterns, stable colors, and uniform textures. Perfect for large-scale production requiring batch-to-batch consistency.",
};

export default function EngineeredWoodVeneerPage() {
  const products = engineeredWoodVeneerProducts;

  return (
    <>
      {/* Hero Banner */}
      <ProductCategoryBanner
        title="Engineered Wood Veneer"
        image="/images/products-page-banners/engineered-wood-veneer.jpg"
      />

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
            <span className="text-[#1F2621] font-medium"><T>{"Engineered Wood Veneer"}</T></span>
          </div>
        </div>
      </div>

      {/* Category Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-4"><T>{"About Engineered Wood Veneer"}</T></h2>
            <p className="text-[#6b7280] leading-relaxed">
              <T>{"Engineered wood veneer (also called reconstituted veneer) is manufactured from rapidly renewable tropical wood species. The logs are sliced into thin layers, dyed in controlled color tones, and then re-bonded into blocks that produce consistent grain patterns and colors when re-sliced. This process delivers 300+ design options with stable colors, uniform textures, and reliable batch-to-batch consistency — ideal for large-scale commercial production.\n            "}</T></p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2621]"><T>{"Product Range"}</T></h2>
            <p className="text-[#6b7280] mt-4">
              {products.length} <T>{"reconstituted veneer patterns available\n            "}</T></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => {
              const displayImage = product.featuredImage || null;
              return (
                <Link
                  key={product.slug}
                  href={`/products/engineered-wood-veneer/${product.slug}`}
                  className="group bg-white rounded-xl border border-[#E5E1D8] overflow-hidden hover:border-[#0F6B3A]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square bg-gradient-to-br from-[#F7F3EC] via-[#E8E4DB] to-[#D4CFC5] relative overflow-hidden">
                    {displayImage ? (
                      <Image
                        src={displayImage}
                        alt={product.imageAlt}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
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
                    <div className="absolute inset-0 bg-[#0F6B3A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 bg-white text-[#0F6B3A] rounded-lg font-medium text-sm">
                        <T>{"View Details\n                      "}</T></span>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-[#8B5E3C] font-medium">{product.code}</span>
                    <h3 className="font-semibold text-[#1F2621] mt-1 mb-2 line-clamp-2 group-hover:text-[#0F6B3A] transition-colors leading-snug text-sm">
                      {product.specs.pattern}
                    </h3>
                    <p className="text-xs text-[#6b7280] line-clamp-2 leading-relaxed"><T>{product.shortDesc}</T></p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F6B3A]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4"><T>{"Need Engineered Wood Veneer?"}</T></h2>
            <p className="text-white/80 mb-8"><T>{"Contact us for pattern availability, custom development, and sample requests."}</T></p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-[#0F6B3A] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"><T>{"Contact Us"}</T></Link>
              <Link href="/products" className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"><T>{"View All Products"}</T></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
