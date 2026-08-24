"use client";

import T from "@/i18n/full-site-context";
import Link from "@/components/i18n/LocalizedLink";
import { useState } from "react";

// ============================================
// Hotel & Commercial 详情页数据
// ============================================

const buyerConcerns = [
  {
    title: "Project Consistency",
    description: "Maintaining uniform appearance across all project areas.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "Designer Sample Approval",
    description: "Getting approval from multiple stakeholders.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    title: "Delivery Schedule",
    description: "Meeting construction schedules and milestones.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Durable Surface",
    description: "Ensuring surfaces withstand daily use and traffic.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Export Packaging",
    description: "Safe arrival of materials at project site.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    title: "Multi-material Coordination",
    description: "Coordinating different material types across spaces.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z M4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z",
  },
];

const problemsSolutions = [
  {
    problem: "Projects require batch consistency",
    impact: "Hotels and commercial spaces use wood veneer across multiple areas.",
    solution: "Reserve same batch materials, implement strict batch tracking.",
  },
  {
    problem: "Multiple approval processes",
    impact: "Designers, owners, general contractors, and procurement all participate.",
    solution: "Provide multi-party approval samples with clear documentation.",
  },
  {
    problem: "Tight delivery schedules",
    impact: "Material delays affect construction milestones.",
    solution: "Production scheduling, inventory reservation, and on-time delivery.",
  },
  {
    problem: "High shipping damage risk",
    impact: "Overseas projects with poor packaging incur high costs.",
    solution: "Professional export packaging: wooden frame, bulk, custom options.",
  },
  {
    problem: "Multiple materials need unified style",
    impact: "Wall panels, doors, cabinets need coordination.",
    solution: "Help projects maintain unified wood grain, color, and surface language.",
  },
];

const tongliSolutions = [
  {
    title: "Project Material Combinations",
    description: "Combine Wood Veneer, Engineered, Melamine, 3D Panels by space.",
  },
  {
    title: "Sample Approval Process",
    description: "Confirm samples first, then arrange bulk production.",
  },
  {
    title: "Engineered for Projects",
    description: "Reduce natural veneer batch color variation risks.",
  },
  {
    title: "Export Packaging",
    description: "Wooden frame, bulk, custom packaging options.",
  },
  {
    title: "Multi-area Coordination",
    description: "Help projects maintain unified visual language.",
  },
];

const materialCombinations = [
  { type: "Hotel Lobby Wall", surface: "Wood Veneer Panel / 3D Wood Panel", substrate: "MDF / Plywood" },
  { type: "Guest Room Furniture", surface: "Engineered veneer / Melamine", substrate: "MDF / Particleboard" },
  { type: "Commercial Cabinets", surface: "Melamine Board", substrate: "Particleboard / MDF" },
  { type: "Restaurant Feature Wall", surface: "Smoked veneer / 3D panel", substrate: "MDF / Plywood" },
];

const orderChecklist = [
  "Product / Project Type",
  "Panel Size and Thickness",
  "Preferred Surface",
  "Sample Requirement",
  "Delivery Plan",
  "Multi-space Coordination",
  "Quantity and Area",
  "Reference Images / Drawings",
];

const relatedProducts = [
  { name: "Natural Wood Veneer", href: "/collections/natural-wood-veneer", description: "Premium natural texture" },
  { name: "Engineered Wood Veneer", href: "/collections/engineered-veneer", description: "Batch consistent option" },
  { name: "3D Wood Panels", href: "/products/3d-wood-panels", description: "Decorative feature walls" },
  { name: "Melamine Board", href: "/collections/melamine-board", description: "Cost-effective option" },
];

const faqs = [
  {
    q: "How do you handle multi-phase deliveries for large projects?",
    a: "We can divide production into phases matching your schedule, reserving same batch materials. We maintain detailed records to ensure each delivery matches approved samples.",
  },
  {
    q: "What sample types do you recommend for project approval?",
    a: "We recommend: 1) Material swatches, 2) Larger sample boards (600x400mm+), 3) Sample panels with edge banding, 4) Installation mockup if possible.",
  },
  {
    q: "Can you match materials across different areas?",
    a: "Yes, we can coordinate wall panels, doors, furniture, and millwork. We maintain color records and can reserve materials to ensure consistency.",
  },
  {
    q: "What export packaging options do you offer?",
    a: "We offer: 1) Wooden crate for fragile items, 2) Bulk packing for cost savings, 3) Custom packaging. All meet international shipping standards.",
  },
  {
    q: "Do you work with designers and architects?",
    a: "Yes, we regularly collaborate with design firms on commercial projects. We can participate in material selection and provide technical specifications.",
  },
  {
    q: "What is your typical lead time for project orders?",
    a: "Sample production: 1-2 weeks. Bulk production: 3-4 weeks after approval. We confirm timelines during order discussion.",
  },
];

export default function HotelCommercialPage() {
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
            <span className="text-[#1F2621] font-medium"><T>{"Hotel & Commercial"}</T></span>
          </div>
        </div>
      </div>

      {/* ============================================
          Hero Section
      ============================================ */}
      <section className="relative bg-gradient-to-br from-[#8B6914] via-[#705012] to-[#503A0E] py-16 lg:py-24 overflow-hidden">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="px-3 py-1 bg-white/20 rounded-full text-white/80 text-sm"><T>{"Hotel & Commercial"}</T></span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                <T>{"Wood Materials for\n                "}</T><span className="block text-[#D4B896]"><T>{"Hotel & Commercial Interiors"}</T></span>
              </h1>

              <p className="text-lg text-white/80 mb-6 max-w-2xl leading-relaxed">
                <T>{"Project-ready decorative wood surface solutions with sample approval, batch consistency and export packaging support.\n              "}</T></p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact?type=advice"
                  className="px-6 py-3 bg-white text-[#8B6914] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
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
                    <T>{"[Hotel and commercial interiors image]"}</T><br /><br />
                    <T>{"- Hotel lobby with wood veneer"}</T><br />
                    <T>{"- Commercial space wall panels"}</T><br />
                    <T>{"- Restaurant feature wall"}</T><br />
                    <T>{"- Multi-area material coordination\n                  "}</T></span>
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
            <span className="inline-block text-[#8B6914] text-sm font-semibold tracking-widest uppercase mb-4"><T>{"Key Concerns"}</T></span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4"><T>{"What Project Managers Really Care About"}</T></h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              <T>{"We understand the priorities in commercial projects. Here is what matters most to our hotel and commercial clients.\n            "}</T></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {buyerConcerns.map((concern, index) => (
              <div
                key={index}
                className="bg-[#F7F3EC] rounded-xl p-6 border border-[#E5E1D8] hover:border-[#8B6914]/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#8B6914]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#8B6914]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <span className="inline-block text-[#8B6914] text-sm font-semibold tracking-widest uppercase mb-4"><T>{"Problem Analysis"}</T></span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4"><T>{"Common Challenges in Commercial Projects"}</T></h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              <T>{"These are the real challenges commercial projects face. Understanding them helps us provide better solutions.\n            "}</T></p>
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
            <span className="inline-block text-[#8B6914] text-sm font-semibold tracking-widest uppercase mb-4"><T>{"Our Solutions"}</T></span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4"><T>{"How Tongli Supports Commercial Projects"}</T></h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              <T>{"Our practical solutions are backed by factory expertise and years of experience serving hotel and commercial projects.\n            "}</T></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tongliSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-[#F7F3EC] rounded-xl p-6 border border-[#E5E1D8] hover:border-[#8B6914]/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#8B6914] flex items-center justify-center flex-shrink-0">
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
            <span className="inline-block text-[#8B6914] text-sm font-semibold tracking-widest uppercase mb-4"><T>{"Material Guide"}</T></span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4"><T>{"Recommended Combinations"}</T></h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              <T>{"Select the right combination based on your project type and requirements.\n            "}</T></p>
          </div>

          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#8B6914] to-[#705012] text-white">
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
      <section className="py-16 bg-[#8B6914]">
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
              <span className="inline-block text-[#8B6914] text-sm font-semibold tracking-widest uppercase mb-4"><T>{"FAQ"}</T></span>
              <h2 className="text-3xl font-bold text-[#1F2621]"><T>{"Frequently Asked Questions"}</T></h2>
              <p className="text-[#6b7280] mt-2"><T>{"Questions specific to hotel and commercial project material sourcing."}</T></p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#F7F3EC] rounded-xl border border-[#E5E1D8] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-[#1F2621] hover:text-[#8B6914] transition-colors"
                  >
                    <span className="pr-4"><T>{faq.q}</T></span>
                    <svg
                      className={`w-5 h-5 text-[#8B6914] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
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
      <section className="py-20 bg-gradient-to-br from-[#8B6914] to-[#705012]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <T>{"Need Project-Ready Wood Surface Materials?\n            "}</T></h2>
            <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
              <T>{"Send us your project type, sample requirement, surface style, delivery plan and quantity.\n            "}</T></p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?type=advice"
                className="px-8 py-4 bg-white text-[#8B6914] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
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
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#8B6914]"><T>{"View All Products"}</T></span>
            </Link>
            <Link href="/collections" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#8B6914]"><T>{"Browse Collections"}</T></span>
            </Link>
            <Link href="/applications" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#8B6914]"><T>{"All Applications"}</T></span>
            </Link>
            <Link href="/contact" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#8B6914]"><T>{"Contact Us"}</T></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
