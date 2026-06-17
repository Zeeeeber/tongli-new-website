import Link from "next/link";
import { ProductCategoryBanner } from "@/components/product/ProductCategoryBanner";

export const metadata = {
  title: "Veneer Edge Banding | Wood Veneer Edge Strips | Tongli Timber",
  description: "Premium veneer edge banding strips matching our wood veneer panels. Available in various wood species, thicknesses, and widths for furniture and cabinet production.",
};

export default function VeneerEdgeBandingPage() {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Info Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-4">
              Edge Banding Solutions
            </h2>
            <p className="text-[#6b7280] leading-relaxed">
              Our veneer edge banding provides a perfect finishing solution for veneer panels, 
              matching the face veneer for a seamless look on edges and sides.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FDFBF7] rounded-2xl p-8 border border-[#E5E1D8] text-center">
              <div className="w-16 h-16 bg-[#0F6B3A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2621] mb-3">Multiple Widths</h3>
              <p className="text-sm text-[#6b7280]">
                Available in various widths from 20mm to 100mm to match different panel thicknesses
              </p>
            </div>

            <div className="bg-[#FDFBF7] rounded-2xl p-8 border border-[#E5E1D8] text-center">
              <div className="w-16 h-16 bg-[#0F6B3A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2621] mb-3">Matched Veneer Species</h3>
              <p className="text-sm text-[#6b7280]">
                Wide range of wood species including Oak, Walnut, Ash, Cherry, and more
              </p>
            </div>

            <div className="bg-[#FDFBF7] rounded-2xl p-8 border border-[#E5E1D8] text-center">
              <div className="w-16 h-16 bg-[#0F6B3A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2621] mb-3">Quality Finish</h3>
              <p className="text-sm text-[#6b7280]">
                Smooth surface finish for easy application and durable edge protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8B5E3C]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Veneer Edge Banding?</h2>
            <p className="text-white/80 mb-8">
              Contact us for specifications, pricing, and sample availability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-white text-[#8B5E3C] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors">
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
