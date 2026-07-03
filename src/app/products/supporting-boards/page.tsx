import Image from "next/image";
import Link from "next/link";
import { supportingBoardsProducts } from "@/data/products/supporting-boards-products";
import { ProductCategoryBanner } from "@/components/product/ProductCategoryBanner";

export default function SupportingBoardsPage() {
  const products = supportingBoardsProducts;

  return (
    <>
      {/* Hero Banner */}
      <ProductCategoryBanner
        title="Supporting Boards"
        image="/images/products-page-banners/supporting-boards.jpg"
      />

      {/* Category Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-4">
              About Supporting Boards
            </h2>
            <p className="text-[#6b7280] leading-relaxed">
              Supporting boards serve as the structural core substrate for furniture, cabinets, doors and interior panels. Available in plywood, MDF, moisture-resistant MDF, fireproof MDF and particle board — each type offers different strength, surface quality and moisture-resistance characteristics to match specific application requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2621]">Product Range</h2>
            <p className="text-[#6b7280] mt-4">Explore our supporting board product range — plywood, MDF, moisture-resistant MDF, fireproof MDF and particle board options</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              const productImage = product.featuredImage || product.gallery[0] || null;

              return (
                <Link
                  key={product.slug}
                  href={`/products/supporting-boards/${product.slug}`}
                  className="group bg-white rounded-xl border border-[#E5E1D8] overflow-hidden hover:border-[#0F6B3A]/30 hover:shadow-lg transition-all duration-300"
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
                              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-[#0F6B3A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 bg-white text-[#0F6B3A] rounded-lg font-medium text-sm">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-[#8B5E3C] font-mono">{product.code}</span>
                    <h3 className="font-semibold text-[#1F2621] mt-1 mb-2 line-clamp-2 leading-snug">
                      {product.name}
                    </h3>
                    {product.shortDesc && (
                      <p className="text-xs text-[#6b7280] line-clamp-2 mb-3 leading-relaxed">
                        {product.shortDesc}
                      </p>
                    )}
                    {product.subCategory && (
                      <div className="flex flex-wrap gap-1">
                        <span className="text-[10px] px-2 py-0.5 bg-[#F7F3EC] text-[#8B5E3C] rounded-full">
                          {product.subCategory}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#5C6B5E]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Supporting Boards?</h2>
            <p className="text-white/80 mb-8">
              Contact us for specifications, pricing, thickness options and availability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-[#5C6B5E] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
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
