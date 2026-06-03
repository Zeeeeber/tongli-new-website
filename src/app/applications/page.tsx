"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const WoodMaterialViewer3D = dynamic(() => import("@/components/product/WoodMaterialViewer3D"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-10" />,
});

// ============================================
// Design System — Tongli Timber B2B
// ============================================
const C = {
  primary:     "#0F6B3A",
  primaryDark:  "#124B34",
  primaryLight:"#4C8A68",
  accent:       "#8B5E3C",
  accentLight:  "#C9A87C",
  ivory:        "#F7F3EC",
  cream:        "#F5EFE4",
  beige:        "#E9E0D2",
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

const applicationScenarios = [
  {
    id: "furniture-manufacturing",
    name: "Furniture Manufacturing",
    buyer: "Furniture factories, OEM manufacturers",
    pain: "Bulk color matching, surface processing, substrate stability",
    tags: ["Color Consistency", "Substrate Stability", "Edge Matching"],
    href: "/applications/furniture-manufacturing",
    label: "Furniture",
  },
  {
    id: "door-production",
    name: "Door Production",
    buyer: "Door factories, door panel processors",
    pain: "Large surface flatness, grain matching, project batch consistency",
    tags: ["Flatness", "Grain Matching", "Batch Uniformity"],
    href: "/applications/door-production",
    label: "Doors",
  },
  {
    id: "cabinets-wardrobes",
    name: "Cabinets & Wardrobes",
    buyer: "Cabinet factories, wardrobe makers, whole-house customization factories",
    pain: "Panel-edge matching, color system management, environmental compliance",
    tags: ["Edge Matching", "Color System", "Cost Control"],
    href: "/applications/cabinets-wardrobes",
    label: "Cabinets",
  },
  {
    id: "wall-panels-interior",
    name: "Wall Panels & Interior",
    buyer: "Wall panel manufacturers, interior contractors, wood veneer installers",
    pain: "Large-area color consistency, design effect implementation, installation flatness",
    tags: ["Design Effect", "Visual Impact", "Stability"],
    href: "/applications/wall-panels-interior",
    label: "Wall Panels",
  },
  {
    id: "hotel-commercial",
    name: "Hotel & Commercial",
    buyer: "Hotel fit-out contractors, commercial space developers, material buyers",
    pain: "Sample-bulk matching, delivery reliability, multi-space consistency",
    tags: ["Project Consistency", "Export Support", "Multi-space Matching"],
    href: "/applications/hotel-commercial",
    label: "Hotel & Commercial",
  },
  {
    id: "whole-house",
    name: "Whole House Customization",
    buyer: "Custom integrators, real estate developers, joinery system suppliers",
    pain: "Multi-product coordination, system compatibility, long-term supply",
    tags: ["System Matching", "One-Stop Solution", "Cost Optimization"],
    href: "/applications/whole-house-customization",
    label: "Whole House",
  },
];

const commonProblems = [
  {
    title: "Color Difference",
    subtitle: "Sample vs Bulk",
    description: "Sample looks great, but bulk order has visible color or grain variation.",
    icon: "M6 18L18 6M6 6l12 12",
  },
  {
    title: "Unstable Substrate",
    subtitle: "Warpage & Deformation",
    description: "Panel warping, deformation, or thickness inconsistency affecting your processing.",
    icon: "M4 8v8m8-8v8M12 4v16m0-16h.01M20 12h.01",
  },
  {
    title: "Inconsistent Grain",
    subtitle: "Matching Issues",
    description: "Veneer grain direction and matching style not coordinated, reducing product grade.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z",
  },
  {
    title: "Surface Finishing Issues",
    subtitle: "Primer & Coating",
    description: "Surface not compatible with your subsequent sanding, painting, or UV coating process.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    title: "Mismatched Edge Banding",
    subtitle: "Color & Grain Off",
    description: "Panel surface and edge banding clearly different in color or grain — looks unfinished.",
    icon: "M4 6h16M4 12h16M4 18h16",
  },
  {
    title: "Export Packaging Risk",
    subtitle: "Shipping Damage",
    description: "Panels arrive with corner damage, moisture marks, or breakage during overseas shipping.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
];

const supportServices = [
  {
    title: "Material Recommendation",
    description: "By application — furniture, doors, cabinets, wall panels, hotel projects.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "Substrate Selection",
    description: "Plywood, MDF, Particleboard, Blockboard, OSB — matched to your process.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    title: "Veneer Matching",
    description: "Natural, engineered, dyed, smoked veneer or melamine for visual consistency.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z",
  },
  {
    title: "Edge Banding Support",
    description: "Matching veneer edge banding or decorative edge solutions for consistent finish.",
    icon: "M4 6h16M4 12h16M4 18h16",
  },
  {
    title: "Sample Confirmation",
    description: "Confirm material, color, and quality before bulk to reduce procurement risk.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Export Packaging",
    description: "Wood frame, bulk, or custom packaging to minimize overseas shipping damage.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
];

const problemImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=400&fit=crop&q=80",
];

const solutionImages = [
  "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1612831455350-970f8deb9c9f?w=600&h=400&fit=crop&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&q=80",
];

const productionSteps = [
  { step: "01", title: "Requirement Discussion", subtitle: "Understand your application & needs" },
  { step: "02", title: "Material Solution", subtitle: "Recommend materials & prepare samples" },
  { step: "03", title: "Sample Approval", subtitle: "Confirm color, grain, and quality" },
  { step: "04", title: "Bulk Production", subtitle: "Professional production with inline QC" },
  { step: "05", title: "Packaging & Inspection", subtitle: "Secure packing & final quality check" },
  { step: "06", title: "Delivery & Tracking", subtitle: "On-time delivery with documentation" },
];

// ============================================
// Hooks
// ============================================

function useInView(threshold = 0.15) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isInView };
}

// ============================================
// Sub-components
// ============================================

function FadeUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isInView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className="inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-4"
      style={{ color: light ? C.accentLight : C.accent }}
    >
      {children}
    </span>
  );
}

function SectionHeading({ title, subtitle, light = false, centered = true }: {
  title: string; subtitle?: string; light?: boolean; centered?: boolean
}) {
  const textColor = light ? "text-white" : "text-[#1F2621]";
  const subColor = light ? "text-white/70" : "text-[#6b5d4d]";
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className={`text-3xl lg:text-4xl font-bold ${textColor} leading-tight`}>{title}</h2>
      {subtitle && (
        <p className={`mt-3 text-base lg:text-lg max-w-2xl ${subColor} ${centered ? "mx-auto" : ""}`}>{subtitle}</p>
      )}
      <div
        className={`mt-5 w-12 h-0.5 rounded-full ${light ? "bg-white/40" : "bg-[#8B5E3C]"} ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}

// Wood grain SVG texture for backgrounds
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

// ============================================
// Problem Card
// ============================================
function ProblemCard({ item, index }: { item: typeof commonProblems[0]; index: number }) {
  return (
    <FadeUp delay={index * 80}>
      <div
        className="group relative bg-white rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
        style={{ borderColor: "#f5cdc7" }}
      >
        <div className="h-1 w-full" style={{ background: C.problem }} />
        <div className="p-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#FDF2F0" }}>
              <svg className="w-5 h-5" fill="none" stroke={C.problem} viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d={item.icon} />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-0.5" style={{ color: C.problem }}>{item.subtitle}</p>
              <h4 className="font-bold text-[#1F2621] text-base leading-tight">{item.title}</h4>
            </div>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: C.textBody }}>{item.description}</p>
        </div>
        <div className="px-7 pb-6 flex items-center gap-2 text-xs font-semibold" style={{ color: C.problem }}>
          <span>Mitigated with proper material selection</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </FadeUp>
  );
}

// ============================================
// Support Card
// ============================================
function SupportCard({ item, index }: { item: typeof supportServices[0]; index: number }) {
  return (
    <FadeUp delay={index * 80}>
      <div
        className="group relative bg-white rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
        style={{ borderColor: C.border }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${C.primary}12` }}>
            <svg className="w-5 h-5" fill="none" stroke={C.primary} viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d={item.icon} />
            </svg>
          </div>
          <h4 className="font-bold text-[#1F2621] text-base leading-tight">{item.title}</h4>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: C.textBody }}>{item.description}</p>
      </div>
    </FadeUp>
  );
}

// ============================================
// Application Scenario Card
// ============================================
const scenarioImageMap: Record<string, string> = {
  "furniture-manufacturing": "/images/applications/furniture.png",
  "door-production": "/images/applications/doors.png",
  "cabinets-wardrobes": "/images/applications/customization.png",
  "wall-panels-interior": "/images/applications/hotel.png",
  "hotel-commercial": "/images/applications/commercial.png",
  "whole-house": "/images/applications/wholesaler.png",
};

function ScenarioCard({ item, index }: { item: typeof applicationScenarios[0]; index: number }) {
  return (
    <FadeUp delay={index * 100}>
      <Link
        href={item.href}
        className="group block relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl"
        style={{
          aspectRatio: "3/4",
        }}
      >
        {/* Full-bleed image */}
        <Image
          src={scenarioImageMap[item.id]}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

        {/* Top label */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest" style={{ color: C.accent }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.accent }} />
            {item.label}
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          {/* Title */}
          <h3 className="text-white font-bold text-xl lg:text-2xl leading-tight mb-2 group-hover:translate-y-[-2px] transition-transform duration-300">
            {item.name}
          </h3>

          {/* Divider line */}
          <div className="w-8 h-0.5 mb-3 transition-all duration-300 group-hover:w-12" style={{ background: C.accentLight }} />

          {/* Buyer info */}
          <p className="text-white/60 text-xs mb-3 font-medium">{item.buyer}</p>

          {/* Pain point */}
          <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">{item.pain}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold backdrop-blur-sm"
                style={{ background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.9)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <span className="text-white text-sm font-bold group-hover:gap-3 transition-all duration-300 flex items-center gap-2">
              Explore Solution
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>

        {/* Accent border on hover */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-white/20 pointer-events-none" />
      </Link>
    </FadeUp>
  );
}

// ============================================
// Production Step
// ============================================
function ProductionStep({ step, isLast }: { step: typeof productionSteps[0]; isLast: boolean }) {
  return (
    <div className="flex flex-col items-center text-center relative">
      {!isLast && (
        <div className="hidden lg:block absolute top-6 left-[55%] right-[-5%] h-px bg-white/20" />
      )}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base mb-4 relative z-10 shadow-xl"
        style={{ background: C.primaryLight, boxShadow: `0 0 0 5px ${C.primaryDark}50` }}
      >
        {step.step}
      </div>
      <h4 className="font-bold text-white text-sm mb-1 leading-tight">{step.title}</h4>
      <p className="text-white/55 text-xs leading-relaxed max-w-[120px]">{step.subtitle}</p>
    </div>
  );
}

// ============================================
// Main Page
// ============================================
export default function ApplicationsPage() {
  return (
    <div style={{ background: C.ivory, color: C.charcoal }}>
      {/* ============================================
          Section 1: Hero
      ============================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/cta-wood-bg.png" alt="" fill className="object-cover object-center" priority />
        </div>
        <div
          className="absolute inset-0 z-10"
          style={{ background: `linear-gradient(135deg, ${C.primaryDark}f0 0%, ${C.primary}cc 50%, ${C.primaryDark}dd 100%)` }}
        />
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          <div className="absolute top-0 left-[38%] w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <div className="absolute top-0 left-[62%] w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          <div className="absolute top-0 left-[85%] w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>

        {/* 3D Wood Material Viewer */}
        <div className="absolute right-0 top-0 w-1/2 h-full z-30">
          <WoodMaterialViewer3D
            diffuseMap="/images/applications/698283_abe71a316aa531ead650c9ee7c1f9207/3d66Mat-698283-maps-1.jpg"
            mapsImage="/images/applications/698283_abe71a316aa531ead650c9ee7c1f9207/3d66Mat-698283-maps-2.jpg"
            woodName="3D Wood Material Preview"
          />
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 border-r-2 border-t-2 border-white/10 z-40" />
        <div className="absolute bottom-0 left-0 w-96 h-96 border-l-2 border-b-2 border-white/10 z-40" />

        <div className="relative z-40 container mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-xl">
            <FadeUp>
              <SectionLabel light>Material Solutions</SectionLabel>
            </FadeUp>
            <FadeUp delay={100}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6">
                Choose the Right
                <br />
                <span style={{ color: C.accentLight }}>Decorative Wood Material</span>
                <br />
                for Your Application
              </h1>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="text-white/75 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
                Different applications require different substrates, veneer types, surface treatments,
                and matching methods. Tongli helps manufacturers and project buyers choose the right
                wood solutions — from sample to bulk.
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?type=advice"
                  className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-xl"
                  style={{ background: C.white, color: C.primary }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Request Material Advice
                </Link>
                <Link href="/contact?type=sample"
                  className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold rounded-xl border-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 text-white"
                  style={{ borderColor: "rgba(255,255,255,0.35)" }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Request Samples
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20" style={{ animation: "bounce 2s ease-in-out infinite" }}>
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ============================================
          Section 2: Pain vs Solution — Unified Contrast Block
      ============================================ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f7f3ec 0%, #f2ede5 50%, #f7f3ec 100%)" }}>
        {/* Decorative top border */}
        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${C.problem}, ${C.primary})` }} />

        {/* Section header */}
        <div className="container mx-auto px-6 lg:px-8 pt-12 pb-6 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5" style={{ background: `${C.accent}12` }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: C.accent }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: C.accent }}>Procurement Challenge</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2621] leading-tight mb-3">
              From Sample Risk to Bulk Confidence
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: C.textBody }}>
              See the gap — and the Tongli solution that closes it.
            </p>
          </FadeUp>
        </div>

        {/* Full-width contrast rows */}
        <div className="container mx-auto px-6 lg:px-8 pb-16 space-y-0">
          {commonProblems.map((problem, i) => {
            const solution = supportServices[i];
            return (
              <FadeUp key={i} delay={i * 100}>
                <div
                  className="grid lg:grid-cols-2 rounded-3xl overflow-hidden border mb-0 transition-all duration-500 group"
                  style={{ borderColor: i % 2 === 0 ? "#f0c9c3" : `${C.primary}30`, marginBottom: "0" }}
                >
                  {/* Left: Problem card */}
                  <div
                    className="relative overflow-hidden"
                    style={{ background: i % 2 === 0 ? "linear-gradient(135deg, #fff8f7 0%, #fdf2f0 100%)" : "linear-gradient(135deg, #fff 0%, #fafafa 100%)" }}
                  >
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={problemImages[i]}
                        alt={problem.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%)" }} />
                      {/* Overlay content */}
                      <div className="absolute inset-0 flex flex-col justify-between p-5">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm" style={{ background: "rgba(201,75,60,0.85)" }}>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d={problem.icon} />
                            </svg>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm px-2 py-0.5 rounded-full" style={{ background: "rgba(201,75,60,0.7)" }}>
                            {problem.subtitle}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-base leading-tight drop-shadow-lg">{problem.title}</h4>
                        </div>
                      </div>
                      {/* Red accent bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: C.problem }} />
                    </div>
                    {/* Content */}
                    <div className="p-5">
                      <p className="text-sm leading-relaxed" style={{ color: C.textBody }}>{problem.description}</p>
                    </div>
                  </div>

                  {/* Right: Solution card */}
                  <div
                    className="relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #f0faf5 0%, #e8f5ee 100%)", borderTop: i % 2 !== 0 ? "none" : undefined }}
                  >
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={solutionImages[i]}
                        alt={solution.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(15,107,58,0.45) 100%)" }} />
                      {/* Overlay content */}
                      <div className="absolute inset-0 flex flex-col justify-between p-5">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm" style={{ background: "rgba(15,107,58,0.9)" }}>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d={solution.icon} />
                            </svg>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm px-2 py-0.5 rounded-full" style={{ background: "rgba(15,107,58,0.7)" }}>
                            Tongli Solution
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-base leading-tight drop-shadow-lg">{solution.title}</h4>
                        </div>
                      </div>
                      {/* Green accent bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: C.primary }} />
                    </div>
                    {/* Content */}
                    <div className="p-5">
                      <p className="text-sm leading-relaxed" style={{ color: C.textBody }}>{solution.description}</p>
                    </div>
                  </div>

                  {/* Connector arrow — between columns on desktop */}
                  {i % 2 === 0 && (
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110" style={{ background: `${C.accent}15`, border: `2px solid ${C.accent}30` }}>
                        <svg className="w-5 h-5" style={{ color: C.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </FadeUp>
            );
          })}
        </div>
      </section>

      {/* ============================================
          Section 5: Application Scenarios
      ============================================ */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f2ede5 0%, #ece6dc 100%)" }}>
        <div className="relative z-20 container mx-auto px-6 lg:px-8">
          {/* Editorial header */}
          <FadeUp>
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-end mb-12 lg:mb-16">
              <div className="lg:text-left">
                <SectionLabel>Applications</SectionLabel>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2621] leading-tight">
                  Find Your
                  <br />
                  <span style={{ color: C.accent }}>Industry Solution</span>
                </h2>
              </div>
              <div className="hidden lg:block w-px h-16 self-center" style={{ background: C.border }} />
              <p className="hidden lg:block text-sm leading-relaxed max-w-xs self-center" style={{ color: C.textBody }}>
                Whether you are a furniture manufacturer, interior designer, or project buyer — Tongli has a material solution built for your workflow.
              </p>
            </div>
          </FadeUp>

          {/* Magazine-style grid: 2 large + 4 standard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {applicationScenarios.map((item, i) => (
              <ScenarioCard
                key={item.id}
                item={item}
                index={i}
              />
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
                A structured workflow that reduces your procurement risk — from the first inquiry to final delivery.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-3">
                {productionSteps.map((step, i) => (
                  <ProductionStep key={i} step={step} isLast={i === productionSteps.length - 1} />
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <div className="text-center mt-16">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-xl"
                style={{ background: C.white, color: C.primary }}>
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
          Section 7: What to Confirm Before Ordering
      ============================================ */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f2ede5 0%, #ece6dc 100%)" }}>
        <div className="relative container mx-auto px-6 lg:px-8">
          {/* Unified editorial header */}
          <FadeUp>
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-end mb-12 lg:mb-16">
              <div>
                <SectionLabel>Before You Order</SectionLabel>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2621] leading-tight">
                  What We Need
                  <br />
                  <span style={{ color: C.accent }}>From You</span>
                </h2>
              </div>
              <div className="hidden lg:block w-px h-16 self-center" style={{ background: C.border }} />
              <p className="hidden lg:block text-sm leading-relaxed max-w-xs self-center" style={{ color: C.textBody }}>
                The more detail you provide, the more precise our recommendation will be. Our team responds within 1 business day.
              </p>
            </div>
          </FadeUp>

          {/* Info cards with images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop&q=80",
                title: "Product Details",
                description: "Final product type, panel size, quantity, and delivery schedule.",
                number: "01",
              },
              {
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop&q=80",
                title: "Surface Material",
                description: "Natural veneer, engineered veneer, dyed, smoked, melamine, or 3D panel.",
                number: "02",
              },
              {
                image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=800&fit=crop&q=80",
                title: "Substrate & Finish",
                description: "Plywood, MDF, OSB, or particleboard. Sanded, brushed, UV coated, or paint-ready.",
                number: "03",
              },
              {
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=800&fit=crop&q=80",
                title: "Reference Files",
                description: "Product photos, design drawings, or sample images — any visual reference helps.",
                number: "04",
              },
            ].map((item, i) => (
              <FadeUp key={item.number} delay={i * 100}>
                <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  {/* 3:4 Image */}
                  <div className="relative" style={{ aspectRatio: "3/4" }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Number badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
                      <span className="text-white text-xs font-black">{item.number}</span>
                    </div>

                    {/* Content overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h4 className="text-white font-bold text-base leading-tight mb-2">{item.title}</h4>
                      <p className="text-white/70 text-xs leading-relaxed line-clamp-3">{item.description}</p>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: C.accent }} />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Additional checklist row */}
          <FadeUp delay={400}>
            <div className="mt-10 p-6 lg:p-8 rounded-2xl" style={{ background: "white", border: `1px solid ${C.border}` }}>
              <h4 className="font-bold text-[#1F2621] text-sm mb-4">Also helpful to know:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Target delivery date & shipping destination",
                  "Whether you need matching edge banding strips",
                  "Preferred surface treatment or finishing process",
                  "Any quality standards or testing requirements",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0" style={{ background: `${C.primary}12` }}>
                      <svg className="w-3 h-3" fill="none" stroke={C.primary} viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-xs leading-relaxed" style={{ color: C.textBody }}>{item}</p>
                  </div>
                ))}
              </div>
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
              Tell Us Your Application.
              <br />
              <span style={{ color: C.accentLight }}>We&apos;ll Recommend the Right Material.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you need samples, a material recommendation, or a full project quote —
              our team responds within 1 business day.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact?type=advice"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-xl"
                style={{ background: C.white, color: C.primary }}>
                Request Material Advice
              </Link>
              <Link href="/contact?type=sample"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded-xl border-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 text-white"
                style={{ borderColor: "rgba(255,255,255,0.35)" }}>
                Request Samples
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
