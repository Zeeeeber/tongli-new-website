"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { woodVeneerPanelProducts } from "@/data/products/wood-veneer-panel-products";

// Convert object to array for rendering - only products with featuredImage
const products = Object.values(woodVeneerPanelProducts).filter(
  (p) => p.featuredImage && p.featuredImage.length > 0
);

const applications = [
  { name: "Furniture", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" },
  { name: "Doors", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
  { name: "Cabinets", icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
  { name: "Wall Panels", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { name: "Hotel Interiors", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
];

export default function WoodVeneerPanelsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "What substrates are available for wood veneer panels?", a: "We offer wood veneer panels on various substrates including birch plywood, MDF, particle board, and OSB. The choice depends on your strength requirements, weight considerations, and cost preferences." },
    { q: "What is the minimum order quantity?", a: "Standard MOQ is 50 sheets per specification. Custom orders may have different MOQ requirements depending on the substrate, veneer, and size specifications." },
    { q: "Can I get samples before bulk order?", a: "Yes, sample orders are available. We can send 1-3 sheets per specification for your evaluation. Sample fees are typically refundable upon confirmation of bulk orders." },
    { q: "What surface finishes are available?", a: "Available finishes include sanded smooth (ready for your own finishing), UV lacquer, PU lacquer, and melamine coating. We can also supply panels in raw condition if you prefer." },
  ];

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
            <span className="text-[#1F2621] font-medium">Wood Veneer Panels</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-[#0F6B3A] to-[#124B34] py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="text-white/60 text-sm font-medium tracking-wider uppercase">Product Category</span>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">Wood Veneer Panels</h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Premium wood veneer panels combining natural or engineered veneer faces with quality substrates. Ideal for furniture, doors, cabinets, wall panels, and interior applications.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="#products" 
                  className="px-6 py-3 bg-white text-[#0F6B3A] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
                >
                  View Products
                </Link>
                <Link 
                  href="/contact?type=sample" 
                  className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Request Samples
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white/40 text-sm">Veneer Panel</span>
                </div>
                <div className="aspect-square bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center mt-8">
                  <span className="text-white/40 text-sm">Cross Section</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <p className="text-[#6b7280] mt-4">Explore our wood veneer panel collection</p>
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

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 border-2 border-[#E5E1D8] text-[#1F2621] rounded-lg font-semibold hover:border-[#0F6B3A] hover:text-[#0F6B3A] transition-colors">
              Load More Products
            </button>
          </div>
        </div>
      </section>

      {/* Available Options */}
      <section className="py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-8 text-center">Available Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-[#1F2621] mb-4">Substrates</h3>
                <div className="flex flex-wrap gap-2">
                  {["Birch Plywood", "MDF", "Particle Board", "OSB"].map((item) => (
                    <span key={item} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-sm text-[#1F2621]">{item}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-[#1F2621] mb-4">Thickness</h3>
                <div className="flex flex-wrap gap-2">
                  {["12mm", "15mm", "18mm", "21mm", "25mm"].map((item) => (
                    <span key={item} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-sm text-[#1F2621]">{item}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-[#1F2621] mb-4">Surface Finish</h3>
                <div className="flex flex-wrap gap-2">
                  {["Sanded", "UV Lacquer", "PU Lacquer", "Melamine"].map((item) => (
                    <span key={item} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-sm text-[#1F2621]">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-2">Suitable Applications</h2>
            <p className="text-[#6b7280]">Perfect for these interior and furniture applications</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {applications.map((app) => (
              <Link
                key={app.name}
                href="/applications"
                className="group bg-[#FDFBF7] rounded-xl p-6 text-center hover:bg-[#0F6B3A]/5 transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={app.icon} />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[#1F2621]">{app.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1F2621]">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-[#E5E1D8] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-[#1F2621] hover:text-[#0F6B3A] transition-colors"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <svg 
                      className={`w-5 h-5 text-[#0F6B3A] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-48' : 'max-h-0'}`}>
                    <div className="px-6 pb-6 text-[#6b7280] leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                href="/contact?type=quote" 
                className="px-8 py-4 bg-white text-[#0F6B3A] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
              >
                Request a Quote
              </Link>
              <Link 
                href="/contact?type=sample" 
                className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Request Samples
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
