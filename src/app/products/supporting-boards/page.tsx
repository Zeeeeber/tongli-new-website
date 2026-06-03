import Link from "next/link";

export default function SupportingBoardsPage() {
  return (
    <div className="min-h-screen bg-white">
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
            <span className="text-[#1F2621] font-medium">Supporting Boards</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#5C6B5E] to-[#4A5A4D] py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-white/60 text-sm font-medium tracking-wider uppercase">Product Category</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">Supporting Boards</h1>
            <p className="text-white/80 text-lg leading-relaxed">
              High-quality substrate boards for veneer lamination and construction. 
              Available in Plywood, MDF, Particle Board, and OSB to meet various project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Board Types */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-12 text-center">
              Substrate Options
            </h2>

            <div className="space-y-8">
              <div className="bg-[#FDFBF7] rounded-2xl p-8 border border-[#E5E1D8]">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#0F6B3A]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2621] mb-2">Plywood</h3>
                    <p className="text-[#6b7280] mb-4">
                      Strong and stable multi-layer board, ideal for furniture manufacturing and construction. 
                      Available in various thicknesses and grades.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#0F6B3A]/10 text-[#0F6B3A] text-xs font-medium rounded-full">High Strength</span>
                      <span className="px-3 py-1 bg-[#0F6B3A]/10 text-[#0F6B3A] text-xs font-medium rounded-full">Good Stability</span>
                      <span className="px-3 py-1 bg-[#0F6B3A]/10 text-[#0F6B3A] text-xs font-medium rounded-full">Various Grades</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FDFBF7] rounded-2xl p-8 border border-[#E5E1D8]">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#0F6B3A]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2621] mb-2">MDF (Medium Density Fiberboard)</h3>
                    <p className="text-[#6b7280] mb-4">
                      Smooth surface ideal for painting, veneering, and profiling. 
                      Excellent for cabinet doors and flat panel applications.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#0F6B3A]/10 text-[#0F6B3A] text-xs font-medium rounded-full">Smooth Surface</span>
                      <span className="px-3 py-1 bg-[#0F6B3A]/10 text-[#0F6B3A] text-xs font-medium rounded-full">Easy Processing</span>
                      <span className="px-3 py-1 bg-[#0F6B3A]/10 text-[#0F6B3A] text-xs font-medium rounded-full">MR Available</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FDFBF7] rounded-2xl p-8 border border-[#E5E1D8]">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#0F6B3A]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2621] mb-2">Particle Board</h3>
                    <p className="text-[#6b7280] mb-4">
                      Cost-effective option for furniture production. Available in standard and moisture-resistant grades.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#0F6B3A]/10 text-[#0F6B3A] text-xs font-medium rounded-full">Cost-effective</span>
                      <span className="px-3 py-1 bg-[#0F6B3A]/10 text-[#0F6B3A] text-xs font-medium rounded-full">Stable Quality</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FDFBF7] rounded-2xl p-8 border border-[#E5E1D8]">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[#0F6B3A]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2621] mb-2">OSB (Oriented Strand Board)</h3>
                    <p className="text-[#6b7280] mb-4">
                      Strong structural board for construction and industrial applications. 
                      Excellent load-bearing capacity.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-[#0F6B3A]/10 text-[#0F6B3A] text-xs font-medium rounded-full">High Strength</span>
                      <span className="px-3 py-1 bg-[#0F6B3A]/10 text-[#0F6B3A] text-xs font-medium rounded-full">Structural Grade</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#5C6B5E]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Supporting Boards?</h2>
            <p className="text-white/80 mb-8">
              Contact us for specifications, pricing, and availability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-[#5C6B5E] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors">
                Contact Us
              </Link>
              <Link href="/products" className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
