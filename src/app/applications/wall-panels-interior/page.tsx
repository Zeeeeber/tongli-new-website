"use client";

import T from "@/i18n/full-site-context";
import Link from "@/components/i18n/LocalizedLink";
import { useState } from "react";

// ============================================
// Wall Panels & Interior 详情页数据
// ============================================

const buyerConcerns = [
  {
    title: "Visual Effect",
    description: "Achieving the intended design impact and aesthetic quality.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Large-area Consistency",
    description: "Maintaining uniform appearance across large wall areas.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z",
  },
  {
    title: "Panel Flatness",
    description: "Ensuring panels are flat and suitable for installation.",
    icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4",
  },
  {
    title: "Sample Approval",
    description: "Getting approval from designers, owners, and contractors.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Surface Texture",
    description: "Creating desired tactile quality and surface feel.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.172 2.172a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    title: "Installation Stability",
    description: "Ensuring panels stay securely installed long-term.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  },
];

const problemsSolutions = [
  {
    problem: "Design effects hard to achieve",
    impact: "Designers envision texture and space effect, factories must translate into materials.",
    solution: "Provide professional consultation to match design intent with producible materials.",
  },
  {
    problem: "Large-area wall color difference",
    impact: "Wall areas are large, subtle color differences affect overall space.",
    solution: "Select same batch materials, conduct large-area color approval before production.",
  },
  {
    problem: "Uneven panels affect installation",
    impact: "Warping and thickness instability increase construction difficulty.",
    solution: "Strict flatness inspection, provide flatness-certified panels.",
  },
  {
    problem: "Complex sample approval process",
    impact: "Owners, designers, contractors all need to approve samples.",
    solution: "Provide multi-party approval samples, document all requirements.",
  },
  {
    problem: "Various special effects needed",
    impact: "Smoked, brushed, 3D, dark wood options require experience.",
    solution: "Professional consultation on smoked, brushed, dyed, 3D panel options.",
  },
];

const tongliSolutions = [
  {
    title: "Multiple Surface Options",
    description: "Natural / Engineered / Smoked / Dyed veneer and 3D Wood Panel.",
  },
  {
    title: "Project Sample Approval",
    description: "Confirm color, texture, surface and substrate through samples.",
  },
  {
    title: "Substrate & Thickness Advice",
    description: "Recommend based on wall panels, ceilings and installation.",
  },
  {
    title: "Splicing Method Consultation",
    description: "Recommend book, slip, random matching for visual effects.",
  },
  {
    title: "Flat + 3D Combination",
    description: "Wood Veneer Panels for flat, 3D Panels for decorative.",
  },
];

const materialCombinations = [
  { type: "Feature Wall", surface: "Smoked / Walnut / Engineered veneer", substrate: "MDF / Plywood" },
  { type: "Flat Wall Panels", surface: "Wood Veneer Panel", substrate: "MDF / Plywood" },
  { type: "Decorative Background Wall", surface: "3D Wood Panel", substrate: "Solid wood / MDF backing" },
  { type: "Commercial Interior Wall", surface: "Engineered veneer / Melamine", substrate: "MDF / Plywood" },
];

const orderChecklist = [
  "Product / Project Type",
  "Panel Size and Thickness",
  "Preferred Surface",
  "Installation Method",
  "Design Reference",
  "Area and Quantity",
  "Delivery Plan",
  "Special Requirements",
];

const relatedProducts = [
  { name: "Natural Wood Veneer", href: "/collections/natural-wood-veneer", description: "Authentic wood texture" },
  { name: "3D Wood Panels", href: "/products/3d-wood-panels", description: "Decorative 3D surfaces" },
  { name: "Smoked Veneer", href: "/collections/natural-wood-veneer", description: "Dark toned premium surfaces" },
  { name: "Engineered Wood Veneer", href: "/collections/engineered-veneer", description: "Batch consistent option" },
];

const faqs = [
  {
    q: "What veneer thickness is recommended for wall panels?",
    a: "For wall panels, we recommend 0.5-0.6mm veneer thickness on MDF or plywood substrates. Thicknesses below 0.5mm may be too fragile, while thicker work for special effects.",
  },
  {
    q: "How do you ensure large-area color consistency?",
    a: "We source from same batch, conduct color sorting, and can produce all panels in a single run. We recommend requesting a large sample board showing expected variation.",
  },
  {
    q: "What are the advantages of 3D wood panels?",
    a: "3D panels add visual depth and tactile interest. They work well as feature walls, reception areas, or accent panels. We offer wave, grid, and custom patterns.",
  },
  {
    q: "Can wall panels be used in humid environments?",
    a: "Yes, we offer moisture-resistant options and protective coatings. For bathrooms or exterior, we recommend specific substrate and finish combinations.",
  },
  {
    q: "What installation methods do you recommend?",
    a: "Installation depends on substrate and environment. We can recommend adhesive, mechanical fasteners, or hidden clip systems with detailed guidelines.",
  },
  {
    q: "Do you provide installation services?",
    a: "We primarily supply materials but can connect you with qualified installation partners. We provide detailed installation drawings and technical support.",
  },
];

export default function WallPanelsInteriorPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#F7F3EC] py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-[#6b7280]">
            <Link href="/" className="hover:text-[#0F6B3A]"><T>{"Home"}</T></Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/applications" className="hover:text-[#0F6B3A]"><T>{"Applications"}</T></Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1F2621] font-medium"><T>{"Wall Panels & Interior"}</T></span>
          </div>
        </div>
      </div>

      {/* ============================================
          Hero Section
      ============================================ */}
      <section className="relative bg-gradient-to-br from-[#4C8A68] via-[#3D7A5A] to-[#2D5A4A] py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="px-3 py-1 bg-white/20 rounded-full text-white/80 text-sm"><T>{"Wall Panels & Interior"}</T></span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                <T>{"Wood Veneer Panels for\n                "}</T><span className="block text-[#C4E0CC]"><T>{"Wall Panels & Interior"}</T></span>
              </h1>

              <p className="text-lg text-white/80 mb-6 max-w-2xl leading-relaxed">
                <T>{"Natural and decorative wood surface materials for wall panels, feature walls, ceilings and interior decoration projects.\n              "}</T></p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact?type=advice"
                  className="px-6 py-3 bg-white text-[#4C8A68] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
                >
                  <T>{"Request Material Advice\n                "}</T></Link>
                <Link
                  href="/contact?type=sample"
                  className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  <T>{"Request Samples\n                "}</T></Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <span className="text-white/70 text-sm text-center px-4">
                    <T>{"[Wall panels and interior decoration image]"}</T><br /><br />
                    <T>{"- Hotel wall panel installation"}</T><br />
                    <T>{"- Feature wall with wood veneer"}</T><br />
                    <T>{"- 3D panel decorative effect"}</T><br />
                    <T>{"- Large area interior application\n                  "}</T></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          What Buyers Usually Care About
      ============================================ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-[#4C8A68] text-sm font-semibold tracking-widest uppercase mb-4"><T>{"Key Concerns"}</T></span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4"><T>{"What Interior Designers Really Care About"}</T></h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              <T>{"We understand the priorities in wall panel and interior projects. Here is what matters most to our clients.\n            "}</T></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {buyerConcerns.map((concern, index) => (
              <div
                key={index}
                className="bg-[#F7F3EC] rounded-xl p-6 border border-[#E5E1D8] hover:border-[#4C8A68]/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#4C8A68]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#4C8A68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={concern.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F2621] mb-2"><T>{concern.title}</T></h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed"><T>{concern.description}</T></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Common Problems & Solutions
      ============================================ */}
      <section className="py-16 bg-[#F7F3EC]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-[#4C8A68] text-sm font-semibold tracking-widest uppercase mb-4"><T>{"Problem Analysis"}</T></span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4"><T>{"Common Problems in Wall Panel Projects"}</T></h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              <T>{"These are the real challenges wall panel projects face. Understanding them helps us provide better solutions.\n            "}</T></p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {problemsSolutions.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-[#E5E1D8]">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C94B3C]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#C94B3C] font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="text-xs text-[#C94B3C] font-medium uppercase tracking-wide"><T>{"Problem"}</T></span>
                      <p className="text-[#1F2621] font-semibold mt-0.5"><T>{item.problem}</T></p>
                      <p className="text-[#6b7280] text-sm mt-1"><T>{item.impact}</T></p>
                    </div>
                    <div className="bg-[#0F6B3A]/5 rounded-lg p-3">
                      <span className="text-xs text-[#0F6B3A] font-medium uppercase tracking-wide"><T>{"Tongli Solution"}</T></span>
                      <p className="text-[#1F2621] text-sm mt-0.5"><T>{item.solution}</T></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Tongli Practical Solution
      ============================================ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-[#4C8A68] text-sm font-semibold tracking-widest uppercase mb-4"><T>{"Our Solutions"}</T></span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4"><T>{"How Tongli Solves Your Wall Panel Challenges"}</T></h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              <T>{"Our practical solutions are backed by factory expertise and years of experience serving wall panel projects.\n            "}</T></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tongliSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-[#F7F3EC] rounded-xl p-6 border border-[#E5E1D8] hover:border-[#4C8A68]/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4C8A68] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#1F2621]"><T>{solution.title}</T></h3>
                </div>
                <p className="text-[#6b7280] text-sm leading-relaxed"><T>{solution.description}</T></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Recommended Material Combinations
      ============================================ */}
      <section className="py-16 bg-[#F7F3EC]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-[#4C8A68] text-sm font-semibold tracking-widest uppercase mb-4"><T>{"Material Guide"}</T></span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4"><T>{"Recommended Material Combinations"}</T></h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              <T>{"Select the right combination based on your wall panel type and requirements.\n            "}</T></p>
          </div>

          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#4C8A68] to-[#3D7A5A] text-white">
                  <th className="px-6 py-4 text-left text-sm font-bold"><T>{"Use Type"}</T></th>
                  <th className="px-6 py-4 text-left text-sm font-bold"><T>{"Recommended Surface"}</T></th>
                  <th className="px-6 py-4 text-left text-sm font-bold"><T>{"Recommended Substrate"}</T></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E1D8]">
                {materialCombinations.map((row, index) => (
                  <tr key={index} className="hover:bg-[#F7F3EC]/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-[#1F2621]"><T>{row.type}</T></td>
                    <td className="px-6 py-4 text-sm text-[#6b7280]"><T>{row.surface}</T></td>
                    <td className="px-6 py-4 text-sm text-[#6b7280]"><T>{row.substrate}</T></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================
          What to Confirm Before Ordering
      ============================================ */}
      <section className="py-16 bg-[#4C8A68]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 text-white">
              <span className="inline-block text-white/60 text-sm font-semibold tracking-widest uppercase mb-4"><T>{"Before Ordering"}</T></span>
              <h2 className="text-3xl font-bold mb-4"><T>{"What to Confirm Before Ordering"}</T></h2>
              <p className="text-white/80">
                <T>{"Preparing this information helps us give you more accurate recommendations and faster response.\n              "}</T></p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {orderChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-sm"><T>{item}</T></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ Section
      ============================================ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[#4C8A68] text-sm font-semibold tracking-widest uppercase mb-4"><T>{"FAQ"}</T></span>
              <h2 className="text-3xl font-bold text-[#1F2621]"><T>{"Frequently Asked Questions"}</T></h2>
              <p className="text-[#6b7280] mt-2"><T>{"Questions specific to wall panel and interior material sourcing."}</T></p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#F7F3EC] rounded-xl border border-[#E5E1D8] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-[#1F2621] hover:text-[#4C8A68] transition-colors"
                  >
                    <span className="pr-4"><T>{faq.q}</T></span>
                    <svg
                      className={`w-5 h-5 text-[#4C8A68] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-48' : 'max-h-0'}`}>
                    <div className="px-6 pb-6 text-[#6b7280] leading-relaxed">
                      <T>{faq.a}</T>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CTA Section
      ============================================ */}
      <section className="py-20 bg-gradient-to-br from-[#4C8A68] to-[#3D7A5A]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <T>{"Need Decorative Wood Surfaces for Wall Panels?\n            "}</T></h2>
            <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
              <T>{"Send us your space type, design reference, size, surface style and quantity.\n            "}</T></p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?type=advice"
                className="px-8 py-4 bg-white text-[#4C8A68] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
              >
                <T>{"Request Material Advice\n              "}</T></Link>
              <Link
                href="/contact?type=sample"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <T>{"Request Samples\n              "}</T></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-[#F7F3EC] border-t border-[#E5E1D8]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Link href="/products" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#4C8A68]"><T>{"View All Products"}</T></span>
            </Link>
            <Link href="/collections" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#4C8A68]"><T>{"Browse Collections"}</T></span>
            </Link>
            <Link href="/applications" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#4C8A68]"><T>{"All Applications"}</T></span>
            </Link>
            <Link href="/contact" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#4C8A68]"><T>{"Contact Us"}</T></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
