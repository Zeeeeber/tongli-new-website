"use client";

import T from "@/i18n/full-site-context";
import Link from "@/components/i18n/LocalizedLink";
import { useState } from "react";

// ============================================
// Whole House Customization 详情页数据
// ============================================

const buyerConcerns = [
  {
    title: "Overall Matching",
    description: "Achieving unified visual effect across all spaces.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z",
  },
  {
    title: "Surface System",
    description: "Managing complex material systems efficiently.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    title: "Batch Stability",
    description: "Ensuring consistent quality across all batches.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Cost & E-grade",
    description: "Balancing quality with cost and environmental constraints.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Flexible Sizes",
    description: "Flexibility in sizes for different spaces.",
    icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4",
  },
  {
    title: "After-sales Risk",
    description: "Minimizing after-sales issues and callbacks.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

const problemsSolutions = [
  {
    problem: "Multi-space materials need unity",
    impact: "Cabinets, wall panels, doors must form overall style.",
    solution: "Provide systematic material solutions across all spaces.",
  },
  {
    problem: "Complex material systems",
    impact: "Wood veneer panels, melamine, substrates, edge banding need coordination.",
    solution: "Collections system for unified color and texture selection.",
  },
  {
    problem: "Cost and environmental balance",
    impact: "Different spaces have different material requirements.",
    solution: "Tiered recommendations: veneer for high-end, melamine for standard.",
  },
  {
    problem: "High batch supply stability",
    impact: "Long project cycles need consistent replenishment.",
    solution: "Batch tracking, material reservation, production records.",
  },
  {
    problem: "High after-sales risk",
    impact: "Color, specification, edge issues affect final acceptance.",
    solution: "Strict QC, sample confirmation, clear specifications.",
  },
];

const tongliSolutions = [
  {
    title: "Systematic Material Solutions",
    description: "Wood Veneer + Melamine + Edge Banding + Supporting Boards.",
  },
  {
    title: "Space-tiered Recommendations",
    description: "High-end: veneer, Batch: melamine.",
  },
  {
    title: "Collections Support",
    description: "Veneer/melamine color libraries for unified style.",
  },
  {
    title: "Substrate & Environmental",
    description: "Confirm ENF/E0/E1/E2 based on requirements.",
  },
  {
    title: "Sample to Bulk Control",
    description: "Reduce late additions and batch variation.",
  },
];

const materialCombinations = [
  { type: "Cabinet System", surface: "Melamine Board / Engineered veneer", substrate: "Particleboard / MDF" },
  { type: "Feature Wall", surface: "Wood Veneer Panel", substrate: "MDF / Plywood" },
  { type: "Door / Decorative Surface", surface: "Veneer panel / Engineered veneer", substrate: "MDF / Plywood" },
  { type: "Supporting Structure", surface: "Plywood / MDF / OSB", substrate: "Various" },
];

const orderChecklist = [
  "Product / Project Type",
  "Panel Size and Thickness",
  "Preferred Surface",
  "Substrate Requirement",
  "Space Plan",
  "Environmental Grade",
  "Quantity and Delivery",
  "Reference Images / Drawings",
];

const relatedProducts = [
  { name: "Natural Wood Veneer", href: "/collections/natural-wood-veneer", description: "Premium surface materials" },
  { name: "Melamine Board", href: "/collections/melamine-board", description: "Economic batch option" },
  { name: "Veneer Edge Banding", href: "/products/veneer-edge-banding", description: "Matching edge solutions" },
  { name: "Wood Veneer Panels", href: "/products/wood-veneer-panels", description: "Ready-to-use panels" },
];

const faqs = [
  {
    q: "How do you ensure consistency across multiple spaces?",
    a: "We create unified specification documents, use same batch materials, maintain detailed records, and can reserve materials for future additions.",
  },
  {
    q: "Can you provide materials for both high-end and standard spaces?",
    a: "Yes, we offer tiered solutions: wood veneer for feature areas, melamine boards for batch-produced cabinets. This balances impact with budget.",
  },
  {
    q: "How do you handle environmental grade requirements?",
    a: "We confirm requirements (ENF/E0/E1/E2) based on local standards, provide certifications, and can conduct third-party testing if required.",
  },
  {
    q: "What is your minimum order quantity?",
    a: "MOQ varies by material type. We can accommodate phased orders. For large projects, we reserve dedicated production capacity.",
  },
  {
    q: "Do you offer after-sales support?",
    a: "Yes, we maintain production records, provide material certificates, and offer technical support. We resolve issues promptly.",
  },
  {
    q: "Can you work with our design team?",
    a: "Yes, we regularly collaborate with design teams on wholehouse projects. We participate in material selection and coordinate with contractors.",
  },
];

export default function WholeHouseCustomizationPage() {
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
            <span className="text-[#1F2621] font-medium"><T>{"Whole House Custom"}</T></span>
          </div>
        </div>
      </div>

      {/* ============================================
          Hero Section
      ============================================ */}
      <section className="relative bg-gradient-to-br from-[#553C9A] via-[#44337A] to-[#322659] py-16 lg:py-24 overflow-hidden">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span className="px-3 py-1 bg-white/20 rounded-full text-white/80 text-sm"><T>{"Whole House Custom"}</T></span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                <T>{"Materials for\n                "}</T><span className="block text-[#D6BCFA]"><T>{"Whole House Customization"}</T></span>
              </h1>

              <p className="text-lg text-white/80 mb-6 max-w-2xl leading-relaxed">
                <T>{"Coordinated decorative panels, melamine boards, veneer surfaces and supporting boards for whole-house customization and real estate projects.\n              "}</T></p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact?type=advice"
                  className="px-6 py-3 bg-white text-[#553C9A] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
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
                    <T>{"[Whole house customization image]"}</T><br /><br />
                    <T>{"- Living room wood veneer feature wall"}</T><br />
                    <T>{"- Coordinated cabinet system"}</T><br />
                    <T>{"- Bedroom wardrobe materials"}</T><br />
                    <T>{"- Multi-space material coordination\n                  "}</T></span>
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
            <span className="inline-block text-[#553C9A] text-sm font-semibold tracking-widest uppercase mb-4"><T>{"Key Concerns"}</T></span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4"><T>{"What Project Developers Really Care About"}</T></h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              <T>{"We understand the priorities in whole house customization. Here is what matters most to our project developer clients.\n            "}</T></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {buyerConcerns.map((concern, index) => (
              <div
                key={index}
                className="bg-[#F7F3EC] rounded-xl p-6 border border-[#E5E1D8] hover:border-[#553C9A]/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#553C9A]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#553C9A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <span className="inline-block text-[#553C9A] text-sm font-semibold tracking-widest uppercase mb-4"><T>{"Problem Analysis"}</T></span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4"><T>{"Common Challenges in Whole House Projects"}</T></h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              <T>{"These are the real challenges whole house projects face. Understanding them helps us provide better solutions.\n            "}</T></p>
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
            <span className="inline-block text-[#553C9A] text-sm font-semibold tracking-widest uppercase mb-4"><T>{"Our Solutions"}</T></span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4"><T>{"How Tongli Supports Whole House Projects"}</T></h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              <T>{"Our practical solutions are backed by factory expertise and years of experience serving whole house projects.\n            "}</T></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tongliSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-[#F7F3EC] rounded-xl p-6 border border-[#E5E1D8] hover:border-[#553C9A]/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#553C9A] flex items-center justify-center flex-shrink-0">
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
            <span className="inline-block text-[#553C9A] text-sm font-semibold tracking-widest uppercase mb-4"><T>{"Material Guide"}</T></span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4"><T>{"Recommended Combinations"}</T></h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              <T>{"Select the right combination based on your project type and requirements.\n            "}</T></p>
          </div>

          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#553C9A] to-[#44337A] text-white">
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
      <section className="py-16 bg-[#553C9A]">
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
              <span className="inline-block text-[#553C9A] text-sm font-semibold tracking-widest uppercase mb-4"><T>{"FAQ"}</T></span>
              <h2 className="text-3xl font-bold text-[#1F2621]"><T>{"Frequently Asked Questions"}</T></h2>
              <p className="text-[#6b7280] mt-2"><T>{"Questions specific to whole house customization material sourcing."}</T></p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#F7F3EC] rounded-xl border border-[#E5E1D8] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-[#1F2621] hover:text-[#553C9A] transition-colors"
                  >
                    <span className="pr-4"><T>{faq.q}</T></span>
                    <svg
                      className={`w-5 h-5 text-[#553C9A] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
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
      <section className="py-20 bg-gradient-to-br from-[#553C9A] to-[#44337A]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <T>{"Need Coordinated Materials for Whole House Projects?\n            "}</T></h2>
            <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
              <T>{"Send us your space plan, surface style, substrate requirement and quantity.\n            "}</T></p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?type=advice"
                className="px-8 py-4 bg-white text-[#553C9A] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
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
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#553C9A]"><T>{"View All Products"}</T></span>
            </Link>
            <Link href="/collections" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#553C9A]"><T>{"Browse Collections"}</T></span>
            </Link>
            <Link href="/applications" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#553C9A]"><T>{"All Applications"}</T></span>
            </Link>
            <Link href="/contact" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#553C9A]"><T>{"Contact Us"}</T></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
