"use client";

import Link from "next/link";
import { useState } from "react";

// ============================================
// Cabinets & Wardrobes 详情页数据
// ============================================

const buyerConcerns = [
  {
    title: "Surface Options",
    description: "Multiple surface options for different project requirements and budgets.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z",
  },
  {
    title: "Cost Control",
    description: "Balancing material quality with production cost efficiency.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Matching Edge Banding",
    description: "Ensuring visible edges match panel surfaces perfectly.",
    icon: "M4 6h16M4 12h16M4 18h16",
  },
  {
    title: "Stable Thickness",
    description: "Maintaining consistent thickness for smooth machining.",
    icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4",
  },
  {
    title: "Environmental Grade",
    description: "Meeting environmental standards for different markets.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Batch Consistency",
    description: "Ensuring same-batch materials across all components.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
];

const problemsSolutions = [
  {
    problem: "Multiple color systems, complex management",
    impact: "Cabinets, door panels, side panels need unified coordination.",
    solution: "Provide complete color system with coordinated veneer, melamine, and edge banding.",
  },
  {
    problem: "Panel surface and edge banding mismatch",
    impact: "Cabinet systems are very sensitive to edge details.",
    solution: "Offer matched veneer edge banding and corresponding decorative edge solutions.",
  },
  {
    problem: "Material cost pressure",
    impact: "Not all projects are suitable for natural veneer.",
    solution: "Provide dual material paths: Wood Veneer for high-end, Melamine for economic batch.",
  },
  {
    problem: "Environmental grade affects procurement",
    impact: "ENF/E0/E1/E2 may affect market access and customer choice.",
    solution: "Confirm ENF/E0/E1/E2 based on market requirements.",
  },
  {
    problem: "Batch stability requirement",
    impact: "Same set of whole-house cabinets need stable color and specs.",
    solution: "Batch tracking and same batch material reservation.",
  },
];

const tongliSolutions = [
  {
    title: "Dual Material Paths",
    description: "High-end: Wood Veneer Panels, Economic: Melamine Board.",
  },
  {
    title: "Matching Edge Banding",
    description: "Provide veneer Edge Banding or decorative edge solutions.",
  },
  {
    title: "Substrate Selection",
    description: "MDF, Particleboard, Plywood based on cost and structure.",
  },
  {
    title: "Color Library Support",
    description: "Collections help with systematic color selection.",
  },
  {
    title: "Environmental Grade",
    description: "Confirm ENF/E0/E1/E2 based on market requirements.",
  },
];

const materialCombinations = [
  { type: "Cabinet Doors", surface: "Melamine / Engineered / Natural veneer", substrate: "MDF / Particleboard" },
  { type: "Wardrobe Panels", surface: "Melamine Board", substrate: "Particleboard / MDF" },
  { type: "Premium Wardrobe Doors", surface: "Wood Veneer Panel", substrate: "MDF / Plywood" },
  { type: "Edge Finishing", surface: "Matching edge banding", substrate: "—" },
];

const orderChecklist = [
  "Product / Project Type",
  "Panel Size and Thickness",
  "Preferred Surface",
  "Substrate Requirement",
  "Environmental Grade",
  "Edge Banding Needs",
  "Quantity and Delivery Plan",
  "Reference Images / Drawings",
];

const relatedProducts = [
  { name: "Melamine Board", href: "/collections/melamine-board", description: "Economic batch production option" },
  { name: "Natural Wood Veneer", href: "/collections/natural-wood-veneer", description: "Premium surface option" },
  { name: "Veneer Edge Banding", href: "/products/veneer-edge-banding", description: "Matching edge solutions" },
  { name: "Engineered Wood Veneer", href: "/collections/engineered-veneer", description: "Consistent batch option" },
];

const faqs = [
  {
    q: "What's the difference between melamine and wood veneer?",
    a: "Melamine offers cost-effective batch production with consistent colors. Wood veneer provides authentic texture and premium appearance. We recommend based on project positioning.",
  },
  {
    q: "How do you ensure color consistency across components?",
    a: "We use same batch for all components, maintain color records, and can reserve materials for future additions.",
  },
  {
    q: "What environmental grades do you offer?",
    a: "We offer ENF, E0, E1, and E2 grade materials. ENF and E0 recommended for residential, especially children's rooms.",
  },
  {
    q: "Can you match edge banding to melamine boards?",
    a: "Yes, we offer matched edge banding in various colors: ABS, PVC, and veneer options.",
  },
  {
    q: "What substrates work best for cabinets?",
    a: "Particleboard is cost-effective. MDF offers better machining. Plywood provides superior strength. We recommend based on requirements.",
  },
  {
    q: "Do you offer pre-finished panels?",
    a: "Yes, we can provide pre-finished panels with various surface treatments.",
  },
];

export default function CabinetsWardrobesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            <Link href="/applications" className="hover:text-[#0F6B3A]">Applications</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1F2621] font-medium">Cabinets & Wardrobes</span>
          </div>
        </div>
      </div>

      {/* ============================================
          Hero Section
      ============================================ */}
      <section className="relative bg-gradient-to-br from-[#124B34] via-[#0F6B3A] to-[#0a1a12] py-16 lg:py-24 overflow-hidden">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
                <span className="px-3 py-1 bg-white/20 rounded-full text-white/80 text-sm">Cabinets & Wardrobes</span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Decorative Panels for
                <span className="block text-[#4C8A68]">Cabinets and Wardrobes</span>
              </h1>

              <p className="text-lg text-white/80 mb-6 max-w-2xl leading-relaxed">
                Coordinated veneer panels, melamine boards, substrates and matching edge banding for cabinet, wardrobe and storage system production.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact?type=advice"
                  className="px-6 py-3 bg-white text-[#0F6B3A] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
                >
                  Request Material Advice
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
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <span className="text-white/70 text-sm text-center px-4">
                    [Cabinets and wardrobes application image]<br /><br />
                    - Cabinet factory production<br />
                    - Color-matched panel systems<br />
                    - Edge banding matching<br />
                    - Finished cabinet products
                  </span>
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
            <span className="inline-block text-[#124B34] text-sm font-semibold tracking-widest uppercase mb-4">Key Concerns</span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4">What Cabinet Manufacturers Really Care About</h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              We understand the priorities in cabinet and wardrobe production. Here is what matters most to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {buyerConcerns.map((concern, index) => (
              <div
                key={index}
                className="bg-[#F7F3EC] rounded-xl p-6 border border-[#E5E1D8] hover:border-[#124B34]/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#124B34]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#124B34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={concern.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F2621] mb-2">{concern.title}</h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed">{concern.description}</p>
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
            <span className="inline-block text-[#124B34] text-sm font-semibold tracking-widest uppercase mb-4">Problem Analysis</span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4">Common Problems in Cabinet Production</h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              These are the real challenges cabinet factories face. Understanding them helps us provide better solutions.
            </p>
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
                      <span className="text-xs text-[#C94B3C] font-medium uppercase tracking-wide">Problem</span>
                      <p className="text-[#1F2621] font-semibold mt-0.5">{item.problem}</p>
                      <p className="text-[#6b7280] text-sm mt-1">{item.impact}</p>
                    </div>
                    <div className="bg-[#0F6B3A]/5 rounded-lg p-3">
                      <span className="text-xs text-[#0F6B3A] font-medium uppercase tracking-wide">Tongli Solution</span>
                      <p className="text-[#1F2621] text-sm mt-0.5">{item.solution}</p>
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
            <span className="inline-block text-[#124B34] text-sm font-semibold tracking-widest uppercase mb-4">Our Solutions</span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4">How Tongli Solves Your Cabinet Challenges</h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              Our practical solutions are backed by factory expertise and years of experience serving cabinet manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tongliSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-[#F7F3EC] rounded-xl p-6 border border-[#E5E1D8] hover:border-[#124B34]/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#124B34] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#1F2621]">{solution.title}</h3>
                </div>
                <p className="text-[#6b7280] text-sm leading-relaxed">{solution.description}</p>
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
            <span className="inline-block text-[#124B34] text-sm font-semibold tracking-widest uppercase mb-4">Material Guide</span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4">Recommended Material Combinations</h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              Select the right combination based on your cabinet type and production requirements.
            </p>
          </div>

          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#124B34] to-[#0F6B3A] text-white">
                  <th className="px-6 py-4 text-left text-sm font-bold">Use Type</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Recommended Surface</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Recommended Substrate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E1D8]">
                {materialCombinations.map((row, index) => (
                  <tr key={index} className="hover:bg-[#F7F3EC]/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-[#1F2621]">{row.type}</td>
                    <td className="px-6 py-4 text-sm text-[#6b7280]">{row.surface}</td>
                    <td className="px-6 py-4 text-sm text-[#6b7280]">{row.substrate}</td>
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
      <section className="py-16 bg-[#124B34]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 text-white">
              <span className="inline-block text-white/60 text-sm font-semibold tracking-widest uppercase mb-4">Before Ordering</span>
              <h2 className="text-3xl font-bold mb-4">What to Confirm Before Ordering</h2>
              <p className="text-white/80">
                Preparing this information helps us give you more accurate recommendations and faster response.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {orderChecklist.map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-sm">{item}</span>
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
              <span className="inline-block text-[#124B34] text-sm font-semibold tracking-widest uppercase mb-4">FAQ</span>
              <h2 className="text-3xl font-bold text-[#1F2621]">Frequently Asked Questions</h2>
              <p className="text-[#6b7280] mt-2">Questions specific to cabinet and wardrobe material sourcing.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#F7F3EC] rounded-xl border border-[#E5E1D8] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-[#1F2621] hover:text-[#124B34] transition-colors"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-[#124B34] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
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

      {/* ============================================
          CTA Section
      ============================================ */}
      <section className="py-20 bg-gradient-to-br from-[#124B34] to-[#0F6B3A]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Need Matching Decorative Boards for Cabinets?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
              Send us your color system, substrate, thickness and quantity. We will recommend the right materials for your cabinet production.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?type=advice"
                className="px-8 py-4 bg-white text-[#0F6B3A] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
              >
                Request Material Advice
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

      {/* Quick Links */}
      <section className="py-12 bg-[#F7F3EC] border-t border-[#E5E1D8]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Link href="/products" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#124B34]">View All Products</span>
            </Link>
            <Link href="/collections" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#124B34]">Browse Collections</span>
            </Link>
            <Link href="/applications" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#124B34]">All Applications</span>
            </Link>
            <Link href="/contact" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#124B34]">Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
