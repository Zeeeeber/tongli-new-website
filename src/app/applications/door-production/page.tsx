"use client";

import Link from "next/link";
import { useState } from "react";

// ============================================
// Door Production 详情页数据
// ============================================

const buyerConcerns = [
  {
    title: "Large Surface Consistency",
    description: "Doors are larger than furniture parts, color inconsistency is more easily noticed.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z",
  },
  {
    title: "Veneer Grain Matching",
    description: "Proper veneer matching creates unified door appearance and premium visual effect.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z",
  },
  {
    title: "Panel Flatness",
    description: "Flat panels ensure smooth door surface and proper installation.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z",
  },
  {
    title: "Substrate Stability",
    description: "Stable substrate prevents warping, delamination, and processing issues.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    title: "Batch Supply",
    description: "Large projects require consistent supply from same production batches.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Decorative Effect",
    description: "Different door types require different surface effects and textures.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
];

const problemsSolutions = [
  {
    problem: "Large surface makes color difference obvious",
    impact: "Doors are larger than furniture parts, inconsistency is more visible.",
    solution: "Select consistent veneer batches, use engineered veneer for better uniformity.",
  },
  {
    problem: "Veneer blistering or delamination",
    impact: "Poor substrate, moisture, and pressing control affect stability.",
    solution: "Strict substrate inspection, moisture control, and pressing management.",
  },
  {
    problem: "Project batch inconsistency",
    impact: "Hundreds of doors in same project need uniform style.",
    solution: "Reserve same batch materials, implement batch tracking.",
  },
  {
    problem: "Texture splicing affects appearance",
    impact: "Book/slip matching selection affects door visual effect.",
    solution: "Recommend appropriate splicing methods based on door style.",
  },
  {
    problem: "Surface effect mismatch",
    impact: "High-end, project, and decorative doors have different needs.",
    solution: "Provide multiple options: natural, engineered, smoked, 3D panels.",
  },
];

const tongliSolutions = [
  {
    title: "Surface Material Selection",
    description: "Natural veneer for high-end doors, engineered veneer for batch consistency.",
  },
  {
    title: "Substrate Recommendation",
    description: "Recommend MDF, Plywood, or Blockboard based on door structure.",
  },
  {
    title: "Splicing Method Control",
    description: "Choose book, slip, or random match based on appearance effect.",
  },
  {
    title: "Batch Matching",
    description: "After sample confirmation, control texture and color by batch.",
  },
  {
    title: "3D Wood Panel Option",
    description: "Available for special decorative door panels or 3D effects.",
  },
];

const materialCombinations = [
  { type: "Interior Door Skin", surface: "Natural / Engineered veneer", substrate: "MDF / Plywood" },
  { type: "Project Doors", surface: "Engineered veneer", substrate: "MDF / Blockboard" },
  { type: "High-end Doors", surface: "Natural / Smoked veneer", substrate: "Plywood / MDF" },
  { type: "Decorative Door Panel", surface: "Veneer panel / 3D Wood Panel", substrate: "MDF / Plywood" },
];

const orderChecklist = [
  "Product / Project Type",
  "Panel Size and Thickness",
  "Preferred Surface / Wood Species",
  "Substrate Requirement",
  "Surface Finish",
  "Splicing Method Preference",
  "Quantity and Delivery Plan",
  "Reference Images / Drawings",
];

const workflowSteps = [
  { step: "01", title: "Requirement Discussion", description: "Understand door type, size, surface" },
  { step: "02", title: "Material Recommendation", description: "Recommend surface, substrate, splicing" },
  { step: "03", title: "Sample Making", description: "Produce door skin samples" },
  { step: "04", title: "Sample Confirmation", description: "Review texture, color, flatness" },
  { step: "05", title: "Bulk Production", description: "Produce with batch tracking" },
  { step: "06", title: "QC & Packaging", description: "Final inspection, export packaging" },
];

const relatedProducts = [
  { name: "Natural Wood Veneer", href: "/collections/natural-wood-veneer", description: "Natural texture for high-end doors" },
  { name: "Engineered Wood Veneer", href: "/collections/engineered-veneer", description: "Consistent batch production" },
  { name: "3D Wood Panels", href: "/products/3d-wood-panels", description: "Decorative door panel options" },
  { name: "Smoked Veneer", href: "/collections/natural-wood-veneer", description: "Dark toned premium surfaces" },
];

const faqs = [
  {
    q: "What splicing methods do you recommend for door panels?",
    a: "Book matching creates mirrored effect for high-end doors. Slip matching provides uniform grain. Random matching gives natural variation. We recommend based on your design.",
  },
  {
    q: "How do you ensure batch consistency for large projects?",
    a: "We reserve same batch materials, maintain detailed records, and implement batch tracking. For large projects, we can produce all doors in one run.",
  },
  {
    q: "What substrate is best for bathroom or exterior doors?",
    a: "For moisture areas, we recommend MR MDF or blockboard with proper edge sealing. Plywood offers excellent stability for high-end applications.",
  },
  {
    q: "Can you provide pre-finished door skins?",
    a: "Yes, we offer pre-finished door skins with sanding, priming, or full coating. This reduces finishing time and ensures consistent quality.",
  },
  {
    q: "Do you offer 3D textured door panels?",
    a: "Yes, our 3D Wood Panels are available for decorative door applications, creating unique visual depth for feature doors.",
  },
  {
    q: "What are your minimum order quantities?",
    a: "Standard door skins start from 100 pieces per specification. Sample orders start from 3-5 pieces for quality evaluation.",
  },
];

export default function DoorProductionPage() {
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
            <span className="text-[#1F2621] font-medium">Door Production</span>
          </div>
        </div>
      </div>

      {/* ============================================
          Hero Section
      ============================================ */}
      <section className="relative bg-gradient-to-br from-[#0F6B3A] via-[#124B34] to-[#0a1a12] py-16 lg:py-24 overflow-hidden">
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <span className="px-3 py-1 bg-white/20 rounded-full text-white/80 text-sm">Door Production</span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Wood Veneer Panels for
                <span className="block text-[#4C8A68]">Door Production</span>
              </h1>

              <p className="text-lg text-white/80 mb-6 max-w-2xl leading-relaxed">
                Stable decorative veneer surfaces for door skins, door panels and interior door production, with grain matching, substrate selection and batch consistency.
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
                    [Door production application image]<br /><br />
                    - Door factory production line<br />
                    - Door skins with wood veneer<br />
                    - Finished interior doors<br />
                    - Project door installation
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
            <span className="inline-block text-[#0F6B3A] text-sm font-semibold tracking-widest uppercase mb-4">Key Concerns</span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4">What Door Manufacturers Really Care About</h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              We understand the priorities in door production. Here is what matters most to our door manufacturing clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {buyerConcerns.map((concern, index) => (
              <div
                key={index}
                className="bg-[#F7F3EC] rounded-xl p-6 border border-[#E5E1D8] hover:border-[#0F6B3A]/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <span className="inline-block text-[#0F6B3A] text-sm font-semibold tracking-widest uppercase mb-4">Problem Analysis</span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4">Common Problems in Door Production</h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              These are the real challenges door factories face. Understanding them helps us provide better solutions.
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
            <span className="inline-block text-[#0F6B3A] text-sm font-semibold tracking-widest uppercase mb-4">Our Solutions</span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4">How Tongli Solves Your Door Challenges</h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              Our practical solutions are backed by factory expertise and years of experience serving door manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tongliSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-[#F7F3EC] rounded-xl p-6 border border-[#E5E1D8] hover:border-[#0F6B3A]/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0F6B3A] flex items-center justify-center flex-shrink-0">
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
            <span className="inline-block text-[#0F6B3A] text-sm font-semibold tracking-widest uppercase mb-4">Material Guide</span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4">Recommended Material Combinations</h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              Select the right combination based on your door type and production requirements.
            </p>
          </div>

          <div className="overflow-x-auto max-w-5xl mx-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[#0F6B3A] to-[#124B34] text-white">
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
      <section className="py-16 bg-[#0F6B3A]">
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
          Sample to Bulk Workflow
      ============================================ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-[#0F6B3A] text-sm font-semibold tracking-widest uppercase mb-4">Process</span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4">From Sample to Bulk Production</h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              Our systematic workflow ensures quality consistency throughout your order.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {workflowSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-[#F7F3EC] rounded-xl p-5 border border-[#E5E1D8] text-center h-full hover:border-[#0F6B3A]/30 transition-colors">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#0F6B3A] to-[#124B34] flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-[#1F2621] text-sm mb-2">{step.title}</h4>
                  <p className="text-[#6b7280] text-xs leading-relaxed">{step.description}</p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <svg className="w-4 h-4 text-[#E5E1D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Related Links
      ============================================ */}
      <section className="py-16 bg-[#F7F3EC]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-[#0F6B3A] text-sm font-semibold tracking-widest uppercase mb-4">Explore More</span>
            <h2 className="text-3xl font-bold text-[#1F2621] mb-4">Related Products & Collections</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {relatedProducts.map((product, index) => (
              <Link
                key={index}
                href={product.href}
                className="group bg-white rounded-xl p-6 border border-[#E5E1D8] hover:border-[#0F6B3A]/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F7F3EC] flex items-center justify-center mb-4 group-hover:bg-[#0F6B3A]/10 transition-colors">
                  <svg className="w-6 h-6 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h4 className="font-bold text-[#1F2621] mb-2 group-hover:text-[#0F6B3A] transition-colors">{product.name}</h4>
                <p className="text-[#6b7280] text-sm">{product.description}</p>
              </Link>
            ))}
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
              <span className="inline-block text-[#0F6B3A] text-sm font-semibold tracking-widest uppercase mb-4">FAQ</span>
              <h2 className="text-3xl font-bold text-[#1F2621]">Frequently Asked Questions</h2>
              <p className="text-[#6b7280] mt-2">Questions specific to door production material sourcing.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#F7F3EC] rounded-xl border border-[#E5E1D8] overflow-hidden"
                >
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

      {/* ============================================
          CTA Section
      ============================================ */}
      <section className="py-20 bg-gradient-to-br from-[#0F6B3A] to-[#124B34]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Need Veneer Surfaces for Door Production?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
              Tell us your door type, size, surface effect and batch quantity. We will recommend the right materials for your door production.
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
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#0F6B3A]">View All Products</span>
            </Link>
            <Link href="/collections" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#0F6B3A]">Browse Collections</span>
            </Link>
            <Link href="/applications" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#0F6B3A]">All Applications</span>
            </Link>
            <Link href="/contact" className="group">
              <span className="text-sm font-medium text-[#1F2621] group-hover:text-[#0F6B3A]">Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
