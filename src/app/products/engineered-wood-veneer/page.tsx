"use client";

import Link from "next/link";
import { useState } from "react";

// Engineered Wood Veneer products
const products = [
  { name: "Oak Classic Engineered", code: "TLE-001", pattern: "Straight Grain", tone: "Light" },
  { name: "Walnut Elite Engineered", code: "TLE-002", pattern: "Straight Grain", tone: "Dark" },
  { name: "Oak Modern Engineered", code: "TLE-003", pattern: "Wavy Grain", tone: "Warm" },
  { name: "Ash Contemporary", code: "TLE-004", pattern: "Straight Grain", tone: "Light" },
  { name: "Maple Fresh Engineered", code: "TLE-005", pattern: "Straight Grain", tone: "Light" },
  { name: "Cherry Premium Engineered", code: "TLE-006", pattern: "Straight Grain", tone: "Warm" },
  { name: "Ebony Dark Engineered", code: "TLE-007", pattern: "Straight Grain", tone: "Dark" },
  { name: "Teak Natural Engineered", code: "TLE-008", pattern: "Wavy Grain", tone: "Warm" },
];

const features = [
  { title: "300+ Patterns", description: "Extensive library of consistent wood patterns", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
  { title: "Color Stable", description: "Consistent color across all sheets", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
  { title: "Batch Consistent", description: "Perfect uniformity for large-scale production", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { title: "Long Lengths", description: "Available in longer sheet lengths", icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" },
];

const applications = [
  { name: "Furniture Factories", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" },
  { name: "Door Manufacturers", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
  { name: "Cabinet Production", icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
  { name: "Commercial Projects", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
];

export default function EngineeredWoodVeneerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "What is engineered wood veneer?", a: "Engineered wood veneer (reconstituted veneer) is made from fast-growing wood species that are dyed, sliced, and reassembled to create consistent, repeatable patterns. It offers the aesthetic of natural wood with superior batch-to-batch consistency." },
    { q: "How many patterns are available?", a: "We offer 300+ patterns in various wood species, colors, and grain styles. New patterns are developed regularly to meet market trends and customer requirements." },
    { q: "What are the advantages over natural veneer?", a: "Engineered veneer provides consistent color and grain across batches, ideal for large-scale production. It offers more design flexibility with predictable patterns and can be produced in longer lengths without joint lines." },
    { q: "Can I get custom patterns?", a: "Yes, we offer custom pattern development and color matching for bulk orders. Contact our team with your reference samples or specifications." },
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
            <span className="text-[#1F2621] font-medium">Engineered Wood Veneer</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-[#0F6B3A] to-[#124B34] py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="text-white/60 text-sm font-medium tracking-wider uppercase">Product Category</span>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">Engineered Wood Veneer</h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Reconstituted veneer with 300+ consistent patterns, stable colors, and uniform textures. Perfect for large-scale production requiring batch-to-batch consistency.
              </p>
              <div className="flex gap-4">
                <Link href="/collections/engineered-veneer" className="px-6 py-3 bg-white text-[#0F6B3A] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors">
                  View Collections
                </Link>
                <Link href="/contact?type=sample" className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Request Samples
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-3 gap-3">
                {["#654321", "#8B7355", "#A0826D", "#C4A77D", "#E8D4B8", "#D4B896"].map((color, i) => (
                  <div key={i} className="aspect-square rounded-xl shadow-lg" style={{ backgroundColor: color }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-4">About Engineered Wood Veneer</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Engineered wood veneer (reconstituted veneer) is manufactured from fast-growing wood species through a specialized process of dyeing, slicing, and reassembling to create consistent, repeatable patterns. With 300+ styles available, it offers superior batch-to-batch consistency ideal for large-scale manufacturing and commercial projects.
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
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 border border-[#E5E1D8] text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#0F6B3A]/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2621]">Popular Patterns</h2>
            <p className="text-[#6b7280] mt-4">Explore our engineered veneer collection</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.code} className="group bg-white rounded-xl border border-[#E5E1D8] overflow-hidden hover:border-[#0F6B3A]/30 hover:shadow-lg transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-[#C4A77D] to-[#A68B5B] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-10 h-10 text-[#0F6B3A]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-[#0F6B3A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-4 py-2 bg-white text-[#0F6B3A] rounded-lg font-medium text-sm">
                      Request Sample
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs text-[#0F6B3A] font-mono">{product.code}</span>
                  <h3 className="font-semibold text-[#1F2621] mt-1 mb-2 line-clamp-1">{product.name}</h3>
                  <div className="text-xs text-[#6b7280] space-y-1">
                    <p>{product.pattern}</p>
                    <p>{product.tone} Tone</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-2">Ideal For</h2>
            <p className="text-[#6b7280]">Large-scale production and manufacturing</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {applications.map((app) => (
              <Link key={app.name} href="/applications" className="group bg-white rounded-xl p-6 text-center hover:bg-[#0F6B3A]/5 transition-colors">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[#F7F3EC] flex items-center justify-center">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1F2621]">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#FDFBF7] rounded-xl border border-[#E5E1D8] overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left font-semibold text-[#1F2621] hover:text-[#0F6B3A] transition-colors">
                    <span className="pr-4">{faq.q}</span>
                    <svg className={`w-5 h-5 text-[#0F6B3A] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-48' : 'max-h-0'}`}>
                    <div className="px-6 pb-6 text-[#6b7280] leading-relaxed">{faq.a}</div>
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
            <h2 className="text-3xl font-bold mb-4">Need Engineered Wood Veneer?</h2>
            <p className="text-white/80 mb-8">Contact us for pattern availability, custom development, and sample requests.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact?type=sample" className="px-8 py-4 bg-white text-[#0F6B3A] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors">Request Samples</Link>
              <Link href="/contact?type=quote" className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Request Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
