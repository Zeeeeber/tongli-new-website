"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// ============================================
// Design System
// ============================================
const C = {
  primary:     "#0F6B3A",
  primaryDark:  "#124B34",
  primaryLight:"#4C8A68",
  accent:       "#8B5E3C",
  accentLight:  "#C9A87C",
  ivory:        "#F7F3EC",
  cream:        "#F5EFE4",
  white:        "#FFFFFF",
  charcoal:     "#1F2621",
  textBody:     "#6b5d4d",
  textMuted:    "#8a8075",
  border:       "#e8e3dc",
  problem:      "#C94B3C",
};

// ============================================
// Data
// ============================================
const buyerConcerns = [
  {
    title: "Consistent Color and Grain",
    description: "Same batch furniture parts must have coordinated appearance without obvious color differences.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.172 2.172a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    title: "Smooth Surface",
    description: "Surface must be suitable for sanding, painting, coating, or assembly processing.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Stable Substrate",
    description: "Reduce deformation during cutting, edge banding, processing, and assembly.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z M12 8v4m0 4h.01",
  },
  {
    title: "Matching Edge Banding",
    description: "Panel surface and side edges must have consistent visual appearance.",
    icon: "M4 6h16M4 12h16M4 18h16",
  },
  {
    title: "Suitable Thickness",
    description: "Meet different structural requirements for cabinet doors, table tops, side panels.",
    icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4",
  },
  {
    title: "Repeatable Supply",
    description: "After sample confirmation, bulk orders must maintain stability.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
];

const problemsSolutions = [
  {
    problem: "Sample looks good, bulk has color difference",
    impact: "Furniture has many parts, batch color difference directly affects entire product appearance.",
    solution: "Match veneer batches from same production lot, provide pre-production samples, control batch stability.",
    problemImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80",
    solutionImage: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&q=80",
  },
  {
    problem: "Inconsistent grain direction",
    impact: "Desktop, cabinet doors, side panels with inconsistent grain reduce finished product quality.",
    solution: "Select splicing methods like slip matching, book matching, or random match based on requirements.",
    problemImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop&q=80",
    solutionImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&h=400&fit=crop&q=80",
  },
  {
    problem: "Unstable substrate processing",
    impact: "Affects cutting, edge banding, assembly, and subsequent processing.",
    solution: "Recommend MDF, Plywood, or Particleboard based on furniture structure and processing needs.",
    problemImage: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&h=400&fit=crop&q=80",
    solutionImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&q=80",
  },
  {
    problem: "Surface not suitable for finishing",
    impact: "Increases rework costs and affects delivery schedule.",
    solution: "Provide options like sanded, brushed, UV coated based on finishing requirements.",
    problemImage: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=600&h=400&fit=crop&q=80",
    solutionImage: "https://images.unsplash.com/photo-1612831455350-970f8deb9c9f?w=600&h=400&fit=crop&q=80",
  },
  {
    problem: "Edge banding mismatch",
    impact: "Side color or texture inconsistency, customers immediately see cheap appearance.",
    solution: "Match with Veneer Edge Banding or corresponding decorative edge solutions.",
    problemImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop&q=80",
    solutionImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&q=80",
  },
];

const tongliSolutions = [
  {
    title: "Natural / Engineered Veneer",
    description: "Natural veneer for high-end appearance, engineered veneer for batch consistency.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=800&fit=crop&q=80",
  },
  {
    title: "Substrate Selection",
    description: "Recommend MDF, Plywood, or Particleboard based on furniture structure.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=800&fit=crop&q=80",
  },
  {
    title: "Surface Pre-treatment",
    description: "Options: sanded, brushed, UV coated as per requirements.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&h=800&fit=crop&q=80",
  },
  {
    title: "Matching Edge Banding",
    description: "Provide matching Veneer Edge Banding solutions for seamless panel edges.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop&q=80",
  },
  {
    title: "Sample Confirmation",
    description: "Confirm samples before bulk production to reduce appearance risks.",
    image: "https://images.unsplash.com/photo-1612831455350-970f8deb9c9f?w=600&h=800&fit=crop&q=80",
  },
];

const materialCombinations = [
  {
    type: "Cabinet / Wardrobe Doors",
    surface: "Natural / Engineered veneer / Melamine",
    substrate: "MDF / Plywood",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&q=80",
  },
  {
    type: "Table / Desk Tops",
    surface: "Natural veneer panel",
    substrate: "Plywood / MDF",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&h=400&fit=crop&q=80",
  },
  {
    type: "Batch Furniture",
    surface: "Engineered veneer / Melamine",
    substrate: "MDF / Particleboard",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&q=80",
  },
  {
    type: "Premium Furniture",
    surface: "Natural / Smoked veneer",
    substrate: "Plywood / MDF",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&q=80",
  },
];

const workflowSteps = [
  { step: "01", title: "Requirement Discussion", description: "Understand furniture type, substrate, size, quantity" },
  { step: "02", title: "Material Recommendation", description: "Recommend surface, substrate, edge banding combination" },
  { step: "03", title: "Sample Making", description: "Produce samples based on your specifications" },
  { step: "04", title: "Sample Confirmation", description: "Review color, texture, flatness, edge matching" },
  { step: "05", title: "Bulk Production", description: "Produce with batch tracking and quality control" },
  { step: "06", title: "QC & Packaging", description: "Final inspection, bundling, export packaging" },
];

const faqs = [
  {
    q: "What veneer splicing methods do you recommend?",
    a: "Slip matching for tabletops and large surfaces. Book matching for cabinet doors where symmetry matters. Random matching for decorative panels. We advise based on your design.",
  },
  {
    q: "How do you ensure sample-to-bulk consistency?",
    a: "We match veneer from the same batch, maintain production records, and conduct color checks at each stage. For large orders, we can reserve inventory to ensure consistency.",
  },
  {
    q: "What substrate do you recommend for painted furniture?",
    a: "MDF provides the smoothest surface for painting. Birch plywood offers excellent stability for natural veneer with clear coat. We consider your finishing method and cost requirements.",
  },
  {
    q: "Can you provide pre-finished panels?",
    a: "Yes, we offer pre-finished panels with UV coating, painting, or other surface treatments. This reduces your finishing needs and ensures consistent quality.",
  },
  {
    q: "What edge banding options do you offer?",
    a: "Veneer edge banding (real wood backing), PVC/ABS edge banding in various colors, and laser edge banding for seamless joints. We match to your specific veneer selection.",
  },
  {
    q: "What are your minimum order quantities?",
    a: "Standard orders start from 50-100 sheets per item. For custom specifications, we can discuss flexible arrangements. Sample orders start from 3-5 sheets.",
  },
];

// ============================================
// Utility Components
// ============================================
function WoodGrainTexture({ opacity = 0.04 }: { opacity?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ opacity }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="woodGrain" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 Q40 5 80 20" stroke={C.accent} strokeWidth="0.5" fill="none" />
            <path d="M0 40 Q40 25 80 40" stroke={C.accent} strokeWidth="0.5" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#woodGrain)" />
      </svg>
    </div>
  );
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className="inline-block text-xs font-semibold tracking-[0.25em] uppercase"
      style={{ color: light ? C.accentLight : C.accent }}
    >
      {children}
    </span>
  );
}

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [visible, setVisible] = useState(false);
  const ref = (node: HTMLDivElement | null) => {
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(node);
  };
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ============================================
// Main Page
// ============================================
export default function FurnitureManufacturingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: C.ivory, color: C.charcoal }}>

      {/* ============================================
          Breadcrumb
      ============================================ */}
      <div className="py-4 border-b" style={{ background: C.ivory, borderColor: C.border }}>
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm" style={{ color: C.textMuted }}>
            <Link href="/" className="hover:text-[#0F6B3A] transition-colors">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/applications" className="hover:text-[#0F6B3A] transition-colors">Applications</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span style={{ color: C.charcoal, fontWeight: 500 }}>Furniture Manufacturing</span>
          </div>
        </div>
      </div>

      {/* ============================================
          Section 1: Hero
      ============================================ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&h=900&fit=crop&q=80"
            alt="Furniture Manufacturing"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{ background: `linear-gradient(135deg, ${C.primaryDark}f0 0%, ${C.primary}bb 50%, ${C.primaryDark}dd 100%)` }}
        />
        <div className="absolute inset-0 z-10 opacity-10">
          <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          <div className="absolute top-0 left-[40%] w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="absolute top-0 left-[65%] w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 border-r-2 border-t-2 border-white/10 z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 border-l-2 border-b-2 border-white/10 z-10" />

        <div className="relative z-20 container mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <FadeUp>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                  </svg>
                </div>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-semibold tracking-wide">
                  Furniture Manufacturing
                </span>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-8">
                Wood Veneer Panels for
                <br />
                <span style={{ color: C.accentLight }}>Furniture Production</span>
              </h1>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="text-white/75 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
                For furniture factories that need stable veneer appearance, suitable substrates,
                smooth panel surfaces, and matching edge banding for repeatable production.
              </p>
            </FadeUp>

            <FadeUp delay={300}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact?type=advice"
                  className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-xl"
                  style={{ background: C.white, color: C.primary }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Request Material Advice
                </Link>
                <Link
                  href="/contact?type=sample"
                  className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold rounded-xl border-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 text-white"
                  style={{ borderColor: "rgba(255,255,255,0.35)" }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Request Samples
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ============================================
          Section 2: Buyer Key Concerns
      ============================================ */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f2ede5 0%, #ece6dc 100%)" }}>
        <div className="relative container mx-auto px-6 lg:px-8">
          {/* Editorial header */}
          <FadeUp>
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-end mb-12 lg:mb-16">
              <div>
                <SectionLabel>What Matters Most</SectionLabel>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2621] leading-tight">
                  What Furniture
                  <br />
                  <span style={{ color: C.accent }}>Manufacturers Need</span>
                </h2>
              </div>
              <div className="hidden lg:block w-px h-16 self-center" style={{ background: C.border }} />
              <p className="hidden lg:block text-sm leading-relaxed max-w-xs self-center" style={{ color: C.textBody }}>
                We understand the priorities in furniture production. Here is what matters most to our clients.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {buyerConcerns.map((concern, index) => (
              <FadeUp key={index} delay={index * 80}>
                <div
                  className="group bg-white rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ borderColor: C.border }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${C.accent}12` }}>
                      <svg className="w-5 h-5" fill="none" stroke={C.accent} viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d={concern.icon} />
                      </svg>
                    </div>
                    <h3 className="font-bold text-[#1F2621] text-base leading-tight pt-2">{concern.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: C.textBody }}>{concern.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 3: Problem vs Solution — Full-width rows
      ============================================ */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: C.ivory }}>
        <WoodGrainTexture opacity={0.02} />

        <div className="relative container mx-auto px-6 lg:px-8">
          {/* Editorial header */}
          <FadeUp>
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-end mb-12 lg:mb-16">
              <div>
                <SectionLabel>Common Challenges</SectionLabel>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2621] leading-tight">
                  Problems
                  <br />
                  <span style={{ color: C.accent }}>& How We Solve Them</span>
                </h2>
              </div>
              <div className="hidden lg:block w-px h-16 self-center" style={{ background: C.border }} />
              <p className="hidden lg:block text-sm leading-relaxed max-w-xs self-center" style={{ color: C.textBody }}>
                Understanding the real challenges helps us provide practical, factory-backed solutions.
              </p>
            </div>
          </FadeUp>

          {/* Problem-solution rows */}
          <div className="space-y-0">
            {problemsSolutions.map((item, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div
                  className="grid lg:grid-cols-2 rounded-3xl overflow-hidden border mb-0 transition-all duration-500 group"
                  style={{ borderColor: i % 2 === 0 ? "#f0c9c3" : `${C.primary}30`, marginBottom: "0" }}
                >
                  {/* Left: Problem */}
                  <div
                    className="relative overflow-hidden"
                    style={{ background: i % 2 === 0 ? "linear-gradient(135deg, #fff8f7 0%, #fdf2f0 100%)" : "linear-gradient(135deg, #fff 0%, #fafafa 100%)" }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={item.problemImage}
                        alt={item.problem}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%)" }} />
                      {/* Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-between p-5">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm" style={{ background: "rgba(201,75,60,0.85)" }}>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm px-2 py-0.5 rounded-full" style={{ background: "rgba(201,75,60,0.7)" }}>
                            The Problem
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-base leading-tight drop-shadow-lg">{item.problem}</h4>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: C.problem }} />
                    </div>
                    <div className="p-5">
                      <p className="text-sm leading-relaxed mb-3" style={{ color: C.textBody }}>{item.impact}</p>
                      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: C.problem }}>Impact</span>
                    </div>
                  </div>

                  {/* Connector arrow */}
                  {i % 2 === 0 && (
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110" style={{ background: `${C.accent}15`, border: `2px solid ${C.accent}30` }}>
                        <svg className="w-5 h-5" style={{ color: C.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Right: Solution */}
                  <div
                    className="relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #f0faf5 0%, #e8f5ee 100%)" }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={item.solutionImage}
                        alt={item.solution}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(15,107,58,0.45) 100%)" }} />
                      {/* Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-between p-5">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm" style={{ background: "rgba(15,107,58,0.9)" }}>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm px-2 py-0.5 rounded-full" style={{ background: "rgba(15,107,58,0.7)" }}>
                            Tongli Solution
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-base leading-tight drop-shadow-lg">{item.solution}</h4>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: C.primary }} />
                    </div>
                    <div className="p-5">
                      <p className="text-sm leading-relaxed" style={{ color: C.textBody }}>{item.solution}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 4: Tongli Solutions — 3:4 magazine cards
      ============================================ */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #ece6dc 0%, #e5dfd6 100%)" }}>
        <div className="relative container mx-auto px-6 lg:px-8">
          {/* Editorial header */}
          <FadeUp>
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-end mb-12 lg:mb-16">
              <div>
                <SectionLabel>What We Provide</SectionLabel>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2621] leading-tight">
                  Tongli&apos;s
                  <br />
                  <span style={{ color: C.accent }}>Solution Stack</span>
                </h2>
              </div>
              <div className="hidden lg:block w-px h-16 self-center" style={{ background: C.border }} />
              <p className="hidden lg:block text-sm leading-relaxed max-w-xs self-center" style={{ color: C.textBody }}>
                From veneer selection to bulk delivery — practical support backed by factory expertise.
              </p>
            </div>
          </FadeUp>

          {/* 3:4 magazine cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {tongliSolutions.map((item, i) => (
              <FadeUp key={i} delay={i * 100}>
                <Link
                  href="/contact?type=advice"
                  className="group block relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                  style={{ aspectRatio: "3/4" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Top badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ color: C.accent }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.accent }} />
                      Solution
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="w-8 h-0.5 mb-3 transition-all duration-300 group-hover:w-12" style={{ background: C.accentLight }} />
                    <h4 className="text-white font-bold text-base leading-tight mb-2">{item.title}</h4>
                    <p className="text-white/70 text-xs leading-relaxed line-clamp-3">{item.description}</p>
                  </div>

                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-white/20 pointer-events-none" />
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 5: Material Combinations — Editorial cards
      ============================================ */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f2ede5 0%, #ece6dc 100%)" }}>
        <div className="relative container mx-auto px-6 lg:px-8">
          {/* Editorial header */}
          <FadeUp>
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-end mb-12 lg:mb-16">
              <div>
                <SectionLabel>Material Guide</SectionLabel>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2621] leading-tight">
                  Recommended
                  <br />
                  <span style={{ color: C.accent }}>Combinations</span>
                </h2>
              </div>
              <div className="hidden lg:block w-px h-16 self-center" style={{ background: C.border }} />
              <p className="hidden lg:block text-sm leading-relaxed max-w-xs self-center" style={{ color: C.textBody }}>
                Select the right combination based on your furniture type and production requirements.
              </p>
            </div>
          </FadeUp>

          {/* Combination cards with images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {materialCombinations.map((item, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div
                  className="group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{ borderColor: C.border }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.type}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${C.primary}30 0%, transparent 60%)` }} />

                    {/* Type badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-bold" style={{ color: C.primary }}>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                        </svg>
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <div className="mb-3">
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: C.textMuted }}>Surface</p>
                        <p className="text-sm font-medium" style={{ color: C.charcoal }}>{item.surface}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: C.textMuted }}>Substrate</p>
                        <p className="text-sm font-medium" style={{ color: C.charcoal }}>{item.substrate}</p>
                      </div>
                    </div>
                    <Link
                      href="/contact?type=advice"
                      className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                      style={{ background: C.primary, color: "white" }}
                    >
                      Get Advice
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          Section 6: Sample to Bulk Workflow
      ============================================ */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: C.primaryDark }}>
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] rounded-full opacity-10 blur-3xl"
            style={{ background: C.primaryLight }}
          />
        </div>
        <div className="relative container mx-auto px-6 lg:px-8">
          {/* Editorial header */}
          <FadeUp>
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-end mb-12 lg:mb-16">
              <div>
                <SectionLabel light>How It Works</SectionLabel>
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  From Sample
                  <br />
                  <span style={{ color: C.accentLight }}>to Bulk Delivery</span>
                </h2>
              </div>
              <div className="hidden lg:block w-px h-16 self-center" style={{ background: "rgba(255,255,255,0.15)" }} />
              <p className="hidden lg:block text-sm leading-relaxed max-w-xs self-center text-white/50">
                A structured workflow that reduces your procurement risk from inquiry to delivery.
              </p>
            </div>
          </FadeUp>

          {/* Steps */}
          <FadeUp delay={100}>
            <div className="relative max-w-5xl mx-auto">
              {/* Connector line */}
              <div className="hidden lg:block absolute top-14 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.15) 8%, rgba(255,255,255,0.15) 92%, transparent)" }} />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-3">
                {workflowSteps.map((step, i) => (
                  <FadeUp key={i} delay={i * 80}>
                    <div className="relative flex flex-col items-center text-center group">
                      {/* Step number circle */}
                      <div
                        className="w-[88px] h-[88px] rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative z-10"
                        style={{
                          background: "white",
                          border: `3px solid rgba(255,255,255,0.2)`,
                          boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                        }}
                      >
                        <div
                          className="w-[68px] h-[68px] rounded-full flex flex-col items-center justify-center"
                          style={{ background: i === 0 ? C.primary : C.ivory }}
                        >
                          <span
                            className="text-2xl font-black leading-none mb-0.5"
                            style={{ color: i === 0 ? "white" : C.primary }}
                          >
                            {step.step}
                          </span>
                          <span
                            className="text-[9px] font-semibold uppercase tracking-widest leading-none"
                            style={{ color: i === 0 ? "rgba(255,255,255,0.7)" : C.textMuted }}
                          >
                            Step
                          </span>
                        </div>
                      </div>

                      <h4 className="font-bold text-white text-sm mb-1 leading-tight">{step.title}</h4>
                      <p className="text-white/50 text-xs leading-relaxed max-w-[120px]">{step.description}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* CTA */}
          <FadeUp delay={400}>
            <div className="mt-14 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-xl"
                style={{ background: C.white, color: C.primary }}
              >
                Start Your Project Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============================================
          Section 7: FAQ
      ============================================ */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f2ede5 0%, #ece6dc 100%)" }}>
        <div className="relative container mx-auto px-6 lg:px-8">
          <FadeUp>
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-end mb-12 lg:mb-16">
              <div>
                <SectionLabel>FAQ</SectionLabel>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2621] leading-tight">
                  Questions
                  <br />
                  <span style={{ color: C.accent }}>Answered</span>
                </h2>
              </div>
              <div className="hidden lg:block w-px h-16 self-center" style={{ background: C.border }} />
              <p className="hidden lg:block text-sm leading-relaxed max-w-xs self-center" style={{ color: C.textBody }}>
                Common questions about furniture material sourcing, answered by our team.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border overflow-hidden transition-shadow duration-300 hover:shadow-lg bg-white"
                  style={{ borderColor: C.border }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-[#1F2621] hover:text-[#0F6B3A] transition-colors"
                  >
                    <span className="pr-6 text-sm lg:text-base">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}
                      style={{ color: C.primary }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openFaq === index ? "500px" : "0px" }}
                  >
                    <div className="px-6 pb-6 text-sm leading-relaxed" style={{ color: C.textBody }}>
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============================================
          Section 8: Final CTA
      ============================================ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/cta-wood-bg.png" alt="" fill className="object-cover object-center" />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{ background: `linear-gradient(135deg, ${C.primaryDark}f0 0%, ${C.primary}cc 100%)` }}
        />
        <div className="absolute inset-0 z-10 opacity-10">
          <div className="absolute top-0 left-[25%] w-px h-full bg-gradient-to-b from-transparent via-white/40 to-transparent" />
          <div className="absolute top-0 left-[75%] w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 border-r-2 border-t-2 border-white/10 z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 border-l-2 border-b-2 border-white/10 z-10" />

        <div className="relative z-20 container mx-auto px-6 lg:px-8 text-center">
          <FadeUp>
            <SectionLabel light>Ready to Start?</SectionLabel>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-5">
              Need Stable Veneer Panels
              <br />
              <span style={{ color: C.accentLight }}>for Furniture Production?</span>
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Send us your product type, required size, surface style, and quantity.
              We will recommend the right materials for your furniture production.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?type=advice"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-xl"
                style={{ background: C.white, color: C.primary }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Request Material Advice
              </Link>
              <Link
                href="/contact?type=sample"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold rounded-xl border-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 text-white"
                style={{ borderColor: "rgba(255,255,255,0.35)" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Request Samples
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
