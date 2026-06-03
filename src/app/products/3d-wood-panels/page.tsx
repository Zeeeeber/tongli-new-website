"use client";

import Link from "next/link";
import { useState } from "react";

// 3D Wood Panel products
const products = [
  { name: "Wave Pattern Panel", code: "3D-WP-001", pattern: "Wave", size: "1220×2440mm", thickness: "18mm" },
  { name: "Bamboo Weave Panel", code: "3D-BW-001", pattern: "Bamboo", size: "1220×2440mm", thickness: "15mm" },
  { name: "Diamond Pattern Panel", code: "3D-DP-001", pattern: "Diamond", size: "1220×2440mm", thickness: "18mm" },
  { name: "Hexagon Honeycomb", code: "3D-HH-001", pattern: "Hexagon", size: "1220×2440mm", thickness: "12mm" },
  { name: "Classic Flute Panel", code: "3D-CF-001", pattern: "Flute", size: "1220×2440mm", thickness: "18mm" },
  { name: "Geometric Grid", code: "3D-GG-001", pattern: "Grid", size: "1220×2440mm", thickness: "15mm" },
  { name: "Woven Texture Panel", code: "3D-WT-001", pattern: "Woven", size: "1220×2440mm", thickness: "18mm" },
  { name: "Linear Slat Panel", code: "3D-LS-001", pattern: "Slat", size: "1220×2440mm", thickness: "12mm" },
];

const features = [
  { title: "Custom Patterns", description: "Over 50 unique 3D patterns available", icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" },
  { title: "Easy Installation", description: "Simple tongue and groove system", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
  { title: "Designer Choice", description: "Preferred by interior designers", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { title: "Natural Material", description: "Solid wood construction", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
];

const applications = [
  { name: "Feature Walls", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { name: "Ceiling Design", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { name: "Door Panels", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
  { name: "Furniture Accents", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" },
  { name: "Commercial Spaces", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
];

export default function ThreeDWoodPanelsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "What materials are used in 3D wood panels?", a: "Our 3D wood panels are made from solid wood species including Paulownia, Poplar, and combination cores. These lightweight yet sturdy materials are ideal for decorative wall and ceiling applications." },
    { q: "What patterns are available?", a: "We offer over 50 unique 3D patterns including Wave, Bamboo, Diamond, Hexagon, Flute, Grid, Woven, and Linear Slat. Custom patterns can be developed for bulk orders." },
    { q: "How are panels installed?", a: "Panels feature a tongue and groove system for easy installation. They can be installed directly onto walls or ceilings using adhesive and/or finishing nails. Detailed installation guides are provided with each order." },
    { q: "Can panels be used in wet areas?", a: "Standard 3D panels are recommended for interior dry areas only. For moisture-prone areas like bathrooms, we recommend additional sealing treatment. Marine-grade options available for special applications." },
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
            <span className="text-[#1F2621] font-medium">3D Wood Panels</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-[#4C8A68] to-[#0F6B3A] py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <span className="text-white/60 text-sm font-medium tracking-wider uppercase">Product Category</span>
              <h1 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">3D Wood Panels</h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Decorative carved solid wood panels featuring distinctive 3D textures. Add depth and visual interest to walls, doors, ceilings, and furniture surfaces.
              </p>
              <div className="flex gap-4">
                <Link href="#products" className="px-6 py-3 bg-white text-[#4C8A68] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors">
                  View Products
                </Link>
                <Link href="/contact?type=sample" className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Request Samples
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white/40 text-sm">3D Pattern</span>
                </div>
                <div className="aspect-square bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center mt-8">
                  <span className="text-white/40 text-sm">Wall Application</span>
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
            <h2 className="text-2xl font-bold text-[#1F2621] mb-4">About 3D Wood Panels</h2>
            <p className="text-[#6b7280] leading-relaxed">
              3D wood panels are crafted from solid wood with precision carving to create stunning three-dimensional textures and patterns. These decorative panels add architectural interest and visual depth to any space, making them a favorite among interior designers for feature walls, ceiling treatments, and furniture accents.
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
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#4C8A68]/10 flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#4C8A68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <p className="text-[#6b7280] mt-4">Explore our 3D wood panel collection</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.code} className="group bg-white rounded-xl border border-[#E5E1D8] overflow-hidden hover:border-[#4C8A68]/30 hover:shadow-lg transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-[#C4A77D] to-[#A68B5B] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-10 h-10 text-[#4C8A68]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-[#4C8A68]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-4 py-2 bg-white text-[#4C8A68] rounded-lg font-medium text-sm">
                      Request Sample
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs text-[#4C8A68] font-mono">{product.code}</span>
                  <h3 className="font-semibold text-[#1F2621] mt-1 mb-2 line-clamp-1">{product.name}</h3>
                  <div className="text-xs text-[#6b7280] space-y-1">
                    <p>{product.pattern} Pattern</p>
                    <p>{product.size} | {product.thickness}</p>
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
            <h2 className="text-2xl font-bold text-[#1F2621] mb-2">Applications</h2>
            <p className="text-[#6b7280]">Perfect for decorative interior applications</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {applications.map((app) => (
              <Link key={app.name} href="/applications" className="group bg-white rounded-xl p-6 text-center hover:bg-[#4C8A68]/5 transition-colors">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[#F7F3EC] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#4C8A68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left font-semibold text-[#1F2621] hover:text-[#4C8A68] transition-colors">
                    <span className="pr-4">{faq.q}</span>
                    <svg className={`w-5 h-5 text-[#4C8A68] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section className="py-16 bg-[#4C8A68]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need 3D Wood Panels?</h2>
            <p className="text-white/80 mb-8">Contact us for pattern availability, custom development, and sample requests.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact?type=sample" className="px-8 py-4 bg-white text-[#4C8A68] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors">Request Samples</Link>
              <Link href="/contact?type=quote" className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Request Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
