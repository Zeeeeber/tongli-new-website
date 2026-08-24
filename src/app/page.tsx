"use client";

import Link from "@/components/i18n/LocalizedLink";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { featuredProducts } from "@/data/featured-products";
import ProjectModal, { type Project } from "@/components/projects/ProjectModal";
import { projects as allProjects } from "@/data/projects";
import { getSiteLink, localeDirections, type Locale } from "@/i18n/config";
import { getCoreTextTranslator } from "@/i18n/core-text";
import { projectsPageCopy } from "@/i18n/core-page-copy";

const homeResourceCards = [
  {
    category: "Buying Guide",
    title: "How to Choose Wood Veneer Panels for Furniture Manufacturing",
    excerpt: "Learn the key factors to consider when selecting veneer panels for your furniture production line.",
    date: "Apr 25, 2026",
    readTime: "8 min read",
    href: "/resources/choose-veneer-panels-furniture",
  },
  {
    category: "Product Comparison",
    title: "Natural vs Engineered Wood Veneer Guide",
    excerpt: "Compare grain variation, consistency, cost, matching and ideal uses before choosing a veneer.",
    date: "Updated Aug 17, 2026",
    readTime: "7 min read",
    href: "/resources/natural-vs-engineered-veneer",
  },
  {
    category: "Technical Guide",
    title: "Wood Veneer Panels: Types & Uses",
    excerpt: "Understand veneer types, core materials, benefits and selection factors for furniture and interiors.",
    date: "Updated Aug 17, 2026",
    readTime: "8 min read",
    href: "/resources/understanding-wood-veneer-panels",
  },
] as const;

const prioritySourcingLinks = [
  { label: "Wood Veneer Panels", href: "/products/wood-veneer-panels" },
  { label: "Fire Rated MDF Board", href: "/products/supporting-boards/fireproof-mdf-flame-retardant" },
  { label: "Burma Teak Veneer", href: "/products/natural-wood-veneer/natural-burma-teak-wood-veneer-sheets" },
  { label: "Teak Edge Banding", href: "/products/veneer-edge-banding/natural-teak-wood-veneer-edge-banding" },
  { label: "Okoume Edge Banding", href: "/products/veneer-edge-banding/okoume-wood-veneer-edge-banding" },
  { label: "All Wood Products", href: "/products" },
] as const;

// Horizontal scroll hook for project gallery
function useHorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  return { scrollRef, scroll };
}

// Animated counter hook with smooth spring-like easing
function useCountUp(end: number, duration: number = 2000, start: number = 0, isVisible: boolean = false, delay: number = 0) {
  const [count, setCount] = useState(start);
  const frameRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isVisible) {
      startRef.current = null;
      startedRef.current = false;
      const frame = requestAnimationFrame(() => setCount(start));
      return () => cancelAnimationFrame(frame);
    }

    const animate = (currentTime: number) => {
      if (!startedRef.current) {
        startRef.current = currentTime;
        startedRef.current = true;
      }

      if (startRef.current === null) {
        return;
      }
      const elapsed = currentTime - startRef.current;

      if (elapsed < delay) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      const actualElapsed = elapsed - delay;
      const progress = Math.min(actualElapsed / duration, 1);

      // Smooth spring-like easing
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const bounce = progress < 0.7
        ? easeOutExpo
        : progress < 0.85
          ? easeOutExpo + (1 - easeOutExpo) * Math.sin((progress - 0.7) * Math.PI / 0.15) * 0.03
          : 1 - Math.pow(2, -15 * (1 - progress)) * (1 - progress);

      const current = start + (end - start) * Math.min(bounce, 1);
      setCount(Math.round(current));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, start, isVisible, delay]);

  return count;
}

// Intersection Observer hook
function useInView(threshold: number = 0.3) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

// Animated Stats Section
function AnimatedStats({ locale }: { locale: Locale }) {
  const t = getCoreTextTranslator(locale);
  const { ref, isInView } = useInView(0.3);

  const stats = [
    { value: 1999, suffix: "", label: t("Established"), sublabel: t("Years of Excellence") },
    { value: 18, suffix: ",000㎡", label: t("Factory Area"), sublabel: t("Production Capacity") },
    { value: 100, suffix: "+", label: t("Skilled Workers"), sublabel: t("Expert Team") },
    { value: 380, suffix: ",000+", label: t("Sheets/Year"), sublabel: t("Annual Output") },
  ];

  return (
    <div ref={ref}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#E9E0D2]">
        {stats.map((stat, index) => (
          <StatItem
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            sublabel={stat.sublabel}
            delay={index * 200}
            isVisible={isInView}
          />
        ))}
      </div>
      {/* About Page Link */}
      <div className="text-center mt-8">
        <Link 
          href={getSiteLink("/about", locale)}
          className="group inline-flex items-center gap-2 text-sm font-medium text-[#8B5E3C] hover:text-[#0F6B3A] transition-colors"
        >
          <span>{t("Learn more about our factory and capabilities")}</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function StatItem({ value, suffix, label, sublabel, delay, isVisible }: {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  delay: number;
  isVisible: boolean;
}) {
  const count = useCountUp(value, 2000, 0, isVisible, delay);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShow(true), 100);
      return () => clearTimeout(timer);
    } else {
      const frame = requestAnimationFrame(() => setShow(false));
      return () => cancelAnimationFrame(frame);
    }
  }, [isVisible]);

  const displayValue = count.toString();

  return (
    <div className={`text-center py-8 px-4 lg:px-8 transition-all duration-700 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="relative inline-block">
        <div className="relative">
          <span
            className="text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#0F6B3A] via-[#124B34] to-[#0F6B3A] tracking-tight tabular-nums"
            style={{ letterSpacing: '-0.02em' }}
          >
            {displayValue}
          </span>
          <span className="text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#0F6B3A] to-[#4C8A68] ml-1 tabular-nums">
            {suffix}
          </span>
        </div>
        <div
          className={`absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8B5E3C] via-[#C9A87C] to-[#8B5E3C] rounded-full transition-all duration-1000 ease-out ${show ? 'scale-x-100' : 'scale-x-0'}`}
          style={{ transformOrigin: 'center' }}
        />
      </div>
      <p className="text-base lg:text-lg font-bold text-[#1F2621] mt-6 tracking-tight">{label}</p>
      <p className="text-sm text-[#6b7280] mt-1">{sublabel}</p>
    </div>
  );
}

export function HomePageContent({ locale }: { locale: Locale }) {
  const t = getCoreTextTranslator(locale);
  const projectCopy = projectsPageCopy[locale];
  const [loaded, setLoaded] = useState(false);
  const { scrollRef, scroll } = useHorizontalScroll();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Featured projects for home page gallery (IDs: 19, 3, 5, 14, 16, 15, 26, 24)
  const homeProjects = allProjects.filter((p) =>
    [19, 3, 5, 14, 16, 15, 26, 24].includes(p.id)
  );

  useEffect(() => {
    const frame = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div lang={locale} dir={localeDirections[locale]}>
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with banner image */}
        <div className="absolute inset-0">
        <Image
            src="/banner.jpg"
            alt={t("Tongli Timber - Premium Wood Materials")}
            fill
            className="object-cover object-center"
          priority
        />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a12]/80 via-[#0a1a12]/60 to-transparent z-10" />
        </div>

        {/* Content - Left aligned like Vorrath */}
        <div className="container-page relative z-20">
          <div className={`max-w-4xl transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Certifications - Inline with subtitle */}
            <div className={`flex items-center gap-4 mb-6 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Image
                  src="/certifications/fsc.png"
                  alt="FSC Certified"
                  width={36}
                  height={36}
                  className="h-9 w-auto"
                />
                <Image
                  src="/certifications/ce.png"
                  alt="CE Certified"
                  width={36}
                  height={36}
                  className="h-9 w-auto"
                />
                <Image
                  src="/certifications/sgs.png"
                  alt="SGS Certified"
                  width={36}
                  height={36}
                  className="h-9 w-auto"
                />
              </div>
            </div>

            {/* Welcome tag */}
            <p className="text-white/40 text-xs tracking-[0.4em] uppercase mb-8">
              {t("Factory Direct • Since 1999")}
            </p>

            {/* Main heading */}
            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold text-white leading-[0.9] tracking-tight mb-8">
              {t("Wood Veneer Panel")}<br />
              <span className="text-[#4C8A68]">{t("& Wood Veneer")}</span>
          </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-white/50 mb-10 font-light leading-relaxed max-w-xl">
              {t("Crafting premium natural and engineered wood veneer panels from our state-of-the-art manufacturing facility. Trusted by architects and designers worldwide.")}
            </p>

            {/* Divider line */}
            <div className="w-16 h-px bg-[#4C8A68] mb-10" />

            {/* CTA Links - Refined B2B Navigation (consistent with header) */}
            <div className={`flex flex-wrap gap-x-8 gap-y-3 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {/* Products Link */}
              <Link
                href={getSiteLink("/products", locale)}
                className="group relative flex items-center gap-3 py-2 px-1 border-b-2 border-transparent hover:border-primary transition-all duration-300"
              >
                <span className="text-sm font-bold text-white/90 group-hover:text-white transition-colors duration-300">
                  {t("Products")}
                </span>
                <svg className="w-4 h-4 text-primary-light group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              {/* Divider */}
              <span className="text-white/20 self-center">|</span>
              
              {/* About Link */}
              <Link
                href={getSiteLink("/about", locale)}
                className="group relative flex items-center gap-3 py-2 px-1 border-b-2 border-transparent hover:border-white/40 transition-all duration-300"
              >
                <span className="text-sm font-bold text-white/50 group-hover:text-white/80 transition-colors duration-300">
                  {t("About")}
                </span>
                <svg className="w-4 h-4 text-white/30 group-hover:translate-x-2 group-hover:text-white/50 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              {/* Divider */}
              <span className="text-white/20 self-center">|</span>
              
              {/* Contact Link */}
              <Link
                href={getSiteLink("/contact", locale)}
                className="group relative flex items-center gap-3 py-2 px-1 border-b-2 border-transparent hover:border-white/40 transition-all duration-300"
              >
                <span className="text-sm font-bold text-white/50 group-hover:text-white/80 transition-colors duration-300">
                  {t("Contact")}
                </span>
                <svg className="w-4 h-4 text-white/30 group-hover:translate-x-2 group-hover:text-white/50 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </Link>
              
              {/* Request Quote CTA */}
              <div className="ml-4 pl-4 border-l border-white/20">
                <Link
                  href={getSiteLink("/contact", locale)}
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-primary border border-white/20 hover:border-primary rounded-full text-sm font-bold text-white transition-all duration-300 backdrop-blur-sm"
                >
                  <span>{t("Request Quote")}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Simple down arrow */}
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="relative w-6 h-10">
            <div className="absolute inset-0 flex flex-col items-center justify-start">
              <svg 
                className="w-5 h-5 text-white/40 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Animations */}
      <section className="relative bg-white">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F6B3A] via-[#4C8A68] to-[#8B5E3C]" />

        <div className="container-page py-4">
          <AnimatedStats locale={locale} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E9E0D2] to-transparent" />
      </section>

      {/* Product Categories - Magazine Layout */}
      <section className="py-12 md:py-16 lg:py-28 bg-[#F7F3EC]">
        <div className="mx-auto px-4 sm:px-6 lg:px-[6.25%] xl:px-[8.33%] relative z-10">
          {/* Section Header - Consistent Layout */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
            <div>
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4" style={{ color: "#0F6B3A" }}>
                {t("Our Products")}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#1F2621] mb-4 sm:mb-6 leading-tight">{t("Comprehensive Wood")}<br className="hidden sm:block" /> {t("Surface Solutions")}</h2>
              <p className="text-base sm:text-lg lg:text-xl text-[#6b7280] max-w-3xl">{t("Premium materials crafted for furniture, doors, cabinetry, and interior applications worldwide")}</p>
            </div>
            <Link href={getSiteLink("/products", locale)} className="group inline-flex items-center gap-2 text-[#0F6B3A] hover:text-[#124B34] font-semibold transition-colors text-sm sm:text-base self-start lg:self-auto">
              <span>{t("View All Products")}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile: Stacked Cards */}
          <div className="flex flex-col gap-4 sm:hidden">
            {/* Mobile: Wood Veneer Panels Card */}
            <Link
              href="/products/wood-veneer-panels"
              className="group relative overflow-hidden rounded-2xl"
              style={{ minHeight: '280px' }}
            >
              <Image
                src="/images/products/wood_veneer_panels.png"
                alt={t("Wood Veneer Panels")}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 sm:px-4 sm:py-1.5 bg-[#0F6B3A] text-white text-xs sm:text-sm font-bold rounded-full">{t("Core Product")}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-[#4C8A68] transition-colors">{t("Wood Veneer Panels")}</h3>
                <p className="text-white/70 text-sm sm:text-base line-clamp-2">{t("Natural & engineered veneer pressed onto plywood, MDF, particleboard and blockboard substrates")}</p>
              </div>
            </Link>

            {/* Mobile: Natural Wood Veneer Card */}
            <Link
              href="/products/natural-wood-veneer"
              className="group relative overflow-hidden rounded-2xl"
              style={{ minHeight: '200px' }}
            >
              <Image
                src="/images/products/natural_wood_veneer.png"
                alt="Natural Wood Veneer"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#8B5E3C] text-white text-xs font-semibold rounded-full">{t("Natural")}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-[#C9A87C] transition-colors">{t("Natural Wood Veneer")}</h3>
                <p className="text-white/60 text-sm">{t("Oak, Walnut, Teak, 80+ species")}</p>
              </div>
            </Link>

            {/* Mobile: Engineered Veneer Card */}
            <Link
              href="/products/engineered-wood-veneer"
              className="group relative overflow-hidden rounded-2xl"
              style={{ minHeight: '200px' }}
            >
              <Image
                src="/images/products/engineered_veneer.png"
                alt="Engineered Veneer"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#4C8A68] text-white text-xs font-semibold rounded-full">{t("Engineered")}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-[#6db88a] transition-colors">{t("Engineered Veneer")}</h3>
                <p className="text-white/60 text-sm">{t("300+ consistent patterns")}</p>
              </div>
            </Link>

            {/* Mobile: Secondary Products Grid */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {/* 3D Wood Panels */}
              <Link
                href="/products/3d-wood-panels"
                className="group relative overflow-hidden rounded-xl"
                style={{ aspectRatio: '1/1' }}
              >
                <Image
                  src="/images/products/3d_wood_panel.png"
                  alt="3D Wood Panels"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-base font-bold text-white group-hover:text-[#4C8A68] transition-colors">{t("3D Wood Panels")}</h3>
                </div>
              </Link>

              {/* Veneer Edge Banding */}
              <Link
                href="/products/veneer-edge-banding"
                className="group relative overflow-hidden rounded-xl"
                style={{ aspectRatio: '1/1' }}
              >
                <Image
                  src="/images/products/veneer_edge_banding.png"
                  alt="Veneer Edge Banding"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-base font-bold text-white group-hover:text-[#4C8A68] transition-colors">{t("Veneer Edge Banding")}</h3>
                </div>
              </Link>

              {/* Melamine Board */}
              <Link
                href="/products/melamine-board"
                className="group relative overflow-hidden rounded-xl"
                style={{ aspectRatio: '1/1' }}
              >
                <Image
                  src="/images/products/melamine_board.png"
                  alt="Melamine Board"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-base font-bold text-white group-hover:text-[#C9A87C] transition-colors">{t("Melamine Board")}</h3>
                </div>
              </Link>

              {/* Supporting Boards */}
              <Link
                href="/products/supporting-boards"
                className="group relative overflow-hidden rounded-xl"
                style={{ aspectRatio: '1/1' }}
              >
                <Image
                  src="/images/products/supporting_boards.png"
                  alt="Supporting Boards"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-base font-bold text-white group-hover:text-[#4C8A68] transition-colors">{t("Supporting Boards")}</h3>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop/Tablet: Magazine Grid Layout */}
          <div className="hidden sm:grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Left Column - Wood Veneer Panels (Hero) */}
            <Link
              href="/products/wood-veneer-panels"
              className="lg:col-span-7 group relative overflow-hidden rounded-2xl lg:rounded-3xl"
              style={{ aspectRatio: '16/10' }}
            >
              <Image
                src="/images/products/wood_veneer_panels.png"
                alt="Wood Veneer Panels"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute top-6 lg:top-8 left-6 lg:left-8">
                <span className="px-4 py-1.5 lg:px-5 lg:py-2 bg-[#0F6B3A] text-white text-sm font-bold rounded-full">{t("Core Product")}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 lg:mb-4 group-hover:text-[#4C8A68] transition-colors">{t("Wood Veneer Panels")}</h3>
                <p className="text-white/80 text-base lg:text-xl max-w-2xl line-clamp-2 lg:line-clamp-none">{t("Natural & engineered veneer pressed onto plywood, MDF, particleboard and blockboard substrates")}</p>
                <div className="mt-4 lg:mt-6 flex items-center gap-2 lg:gap-3 text-[#4C8A68] font-bold text-base lg:text-lg">
                  <span>{t("Explore Collection")}</span>
                  <svg className="w-5 lg:w-6 h-5 lg:h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Right Column - Stacked Natural & Engineered */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
              {/* Natural Wood Veneer */}
              <Link
                href="/products/natural-wood-veneer"
                className="group relative overflow-hidden rounded-2xl lg:rounded-3xl flex-1"
                style={{ minHeight: '200px' }}
              >
                <Image
                  src="/images/products/natural_wood_veneer.png"
                  alt="Natural Wood Veneer"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-4 lg:top-6 left-4 lg:left-6">
                  <span className="px-3 py-1 lg:px-4 lg:py-1.5 bg-[#8B5E3C] text-white text-xs lg:text-sm font-semibold rounded-full">{t("Natural")}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-8">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 lg:mb-2 group-hover:text-[#C9A87C] transition-colors">{t("Natural Wood Veneer")}</h3>
                  <p className="text-white/70 text-sm lg:text-base">{t("Oak, Walnut, Teak, 80+ species")}</p>
                </div>
              </Link>

              {/* Engineered Veneer */}
              <Link
                href="/products/engineered-wood-veneer"
                className="group relative overflow-hidden rounded-2xl lg:rounded-3xl flex-1"
                style={{ minHeight: '200px' }}
              >
                <Image
                  src="/images/products/engineered_veneer.png"
                  alt="Engineered Veneer"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-4 lg:top-6 left-4 lg:left-6">
                  <span className="px-3 py-1 lg:px-4 lg:py-1.5 bg-[#4C8A68] text-white text-xs lg:text-sm font-semibold rounded-full">{t("Engineered")}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-8">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 lg:mb-2 group-hover:text-[#6db88a] transition-colors">{t("Engineered Veneer")}</h3>
                  <p className="text-white/70 text-sm lg:text-base">{t("300+ consistent patterns")}</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop: Secondary Products Row */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-6 lg:mt-8">
            {/* 3D Wood Panels */}
            <Link
              href="/products/3d-wood-panels"
              className="group relative overflow-hidden rounded-xl lg:rounded-2xl"
              style={{ aspectRatio: '1/1' }}
            >
              <Image
                src="/images/products/3d_wood_panel.png"
                alt="3D Wood Panels"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <span className="px-2 py-0.5 lg:px-3 lg:py-1 bg-[#124B34] text-white text-xs font-medium rounded mb-2 block">{t("Decorative")}</span>
                <h3 className="text-base lg:text-xl font-bold text-white group-hover:text-[#4C8A68] transition-colors">{t("3D Wood Panels")}</h3>
              </div>
            </Link>

            {/* Veneer Edge Banding */}
            <Link
              href="/products/veneer-edge-banding"
              className="group relative overflow-hidden rounded-xl lg:rounded-2xl"
              style={{ aspectRatio: '1/1' }}
            >
              <Image
                src="/images/products/veneer_edge_banding.png"
                alt="Veneer Edge Banding"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <h3 className="text-base lg:text-xl font-bold text-white group-hover:text-[#4C8A68] transition-colors">{t("Veneer Edge Banding")}</h3>
              </div>
            </Link>

            {/* Melamine Board */}
            <Link
              href="/products/melamine-board"
              className="group relative overflow-hidden rounded-xl lg:rounded-2xl"
              style={{ aspectRatio: '1/1' }}
            >
              <Image
                src="/images/products/melamine_board.png"
                alt="Melamine Board"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <h3 className="text-base lg:text-xl font-bold text-white group-hover:text-[#C9A87C] transition-colors">{t("Melamine Board")}</h3>
              </div>
            </Link>

            {/* Supporting Boards */}
            <Link
              href="/products/supporting-boards"
              className="group relative overflow-hidden rounded-xl lg:rounded-2xl"
              style={{ aspectRatio: '1/1' }}
            >
              <Image
                src="/images/products/supporting_boards.png"
                alt="Supporting Boards"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                <h3 className="text-base lg:text-xl font-bold text-white group-hover:text-[#4C8A68] transition-colors">{t("Supporting Boards")}</h3>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 md:py-16 lg:py-28 bg-gradient-to-b from-[#F7F3EC] to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0F6B3A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B5E3C]/5 rounded-full blur-3xl" />
        
        <div className="mx-auto px-4 sm:px-6 lg:px-[6.25%] xl:px-[8.33%] relative z-10">
          {/* Section Header - Consistent Layout */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-14">
            <div>
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4" style={{ color: "#0F6B3A" }}>
                {t("Applications")}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#1F2621] mb-4 sm:mb-6 leading-tight">{t("Find Materials for")}<br className="hidden sm:block" /> {t("Your Project")}</h2>
              <p className="text-base sm:text-lg lg:text-xl text-[#6b7280] max-w-3xl">{t("Select your application to discover suitable wood materials")}</p>
            </div>
            <Link href={getSiteLink("/applications", locale)} className="group inline-flex items-center gap-2 text-[#0F6B3A] hover:text-[#124B34] font-semibold transition-colors text-sm sm:text-base self-start lg:self-auto">
              <span>{t("View All Applications")}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile: 2 Column Cards */}
          <div className="grid grid-cols-2 gap-4 sm:hidden">
            {[
              { 
                name: "Furniture Factory", 
                description: "High-quality panels for modern furniture",
                image: "/images/applications/furniture.png",
                color: "#0F6B3A",
              },
              { 
                name: "Hotel Projects", 
                description: "Premium materials for luxury interiors",
                image: "/images/applications/hotel.png",
                color: "#8B5E3C",
              },
              { 
                name: "Door Factory", 
                description: "Durable solutions for door production",
                image: "/images/applications/doors.png",
                color: "#124B34",
              },
              { 
                name: "Commercial Spaces", 
                description: "Professional-grade for offices",
                image: "/images/applications/commercial.png",
                color: "#4C8A68",
              },
            ].map((app, index) => (
              <Link 
                key={app.name} 
                href={getSiteLink("/applications", locale)}
                className="group relative overflow-hidden rounded-xl"
                style={{ aspectRatio: '3/4' }}
              >
                <Image
                  src={app.image}
                  alt={t(app.name)}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <div 
                    className="w-8 h-0.5 rounded-full mb-3"
                    style={{ backgroundColor: app.color }}
                  />
                  <h3 className="text-base font-bold text-white mb-1">{t(app.name)}</h3>
                  <p className="text-white/70 text-xs line-clamp-2">{t(app.description)}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Tablet/Desktop: Large Cards Grid */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                name: "For Furniture Factory", 
                description: "High-quality wood veneer panels for modern furniture manufacturing",
                image: "/images/applications/furniture.png",
                color: "#0F6B3A",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              },
              { 
                name: "For Hotel Projects", 
                description: "Premium materials for luxury hotel interiors and lobbies",
                image: "/images/applications/hotel.png",
                color: "#8B5E3C",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              },
              { 
                name: "For Door Factory", 
                description: "Durable wood veneer solutions for door production",
                image: "/images/applications/doors.png",
                color: "#124B34",
                icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              },
              { 
                name: "For Commercial Spaces", 
                description: "Professional-grade materials for office and retail interiors",
                image: "/images/applications/commercial.png",
                color: "#4C8A68",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              },
              { 
                name: "For High-end Customization", 
                description: "Custom wood solutions for bespoke interior projects",
                image: "/images/applications/customization.png",
                color: "#0F6B3A",
                icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
              },
              { 
                name: "For Wholesaler", 
                description: "Bulk supply solutions with competitive pricing",
                image: "/images/applications/wholesaler.png",
                color: "#8B5E3C",
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              },
            ].map((app, index) => (
              <Link 
                key={app.name} 
                href={getSiteLink("/applications", locale)}
                className="group relative overflow-hidden rounded-2xl lg:rounded-3xl block"
                style={{ aspectRatio: '3/4' }}
              >
                <Image
                  src={app.image}
                  alt={t(app.name)}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Top corner decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-30 transition-all duration-500 transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                    <circle cx="100" cy="0" r="80" fill="currentColor" opacity="0.3"/>
                  </svg>
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between">
                  {/* Top - Icon */}
                  <div className="flex justify-end">
                    <div className="w-12 lg:w-14 h-12 lg:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <svg className="w-6 lg:w-7 h-6 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={app.icon} />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Bottom */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div 
                      className="w-12 h-1 rounded-full mb-4 lg:mb-6 transition-all duration-500 group-hover:w-24"
                      style={{ backgroundColor: app.color }}
                    />
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 lg:mb-3">{t(app.name)}</h3>
                    <p className="text-white/80 text-sm lg:text-base mb-4 lg:mb-6 line-clamp-2 lg:line-clamp-none">{t(app.description)}</p>
                    
                    {/* Explore button */}
                    <div className="flex items-center gap-2 text-white text-sm lg:text-base font-medium">
                      <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 font-bold">{t("Explore")}</span>
                      <svg className="w-5 lg:w-6 h-5 lg:h-6 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-150" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Border glow on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 2px ${app.color}` }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Veneer Panel Options - Redesigned */}
      <section className="py-16 md:py-20 lg:py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #F7F3EC 0%, #FDFBF7 50%, #F7F3EC 100%)" }}>
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0F6B3A]/5 to-transparent" />
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-[#0F6B3A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-[400px] h-[400px] bg-[#8B5E3C]/5 rounded-full blur-3xl" />
        
        <div className="mx-auto px-4 sm:px-6 lg:px-[6.25%] xl:px-[8.33%] relative z-10">
          {/* Header - Consistent with other sections */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 lg:mb-16">
            <div>
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4" style={{ color: "#0F6B3A" }}>
                {t("Customization")}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#1F2621] mb-4 sm:mb-6 leading-tight">{t("Build Your")}<br className="hidden sm:block" /> {t("Veneer Panel")}</h2>
              <p className="text-base sm:text-lg lg:text-xl text-[#6b7280] max-w-3xl">{t("Every detail tailored — substrate, veneer, size, finish and packaging — to your project needs")}</p>
            </div>
            <Link href={getSiteLink("/custom-solutions", locale)} className="group inline-flex items-center gap-2 text-[#0F6B3A] hover:text-[#124B34] font-semibold transition-colors text-sm sm:text-base self-start lg:self-auto">
              <span>{t("View All Options")}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Process Flow - Enhanced Steps */}
          <div className="mb-12 lg:mb-20">
            {/* Mobile: Vertical stepper */}
            <div className="lg:hidden">
              <div className="relative pl-12">
                {/* Vertical connecting line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#0F6B3A] via-[#0F6B3A]/50 to-[#0F6B3A]/20" />
                
                {[
                  { step: "01", title: "Choose Substrate", desc: "Plywood, MDF, OSB, Blockboard" },
                  { step: "02", title: "Select Veneer", desc: "Natural, Engineered, Dyed, Smoked" },
                  { step: "03", title: "Confirm Specs", desc: "Size, thickness, glue grade" },
                  { step: "04", title: "Surface Treatment", desc: "Sand, Brush, UV, Paint" },
                  { step: "05", title: "Packaging", desc: "Sample, Bulk, Custom crates" },
                ].map((item, index) => (
                  <div key={item.step} className="relative mb-6 last:mb-0 group">
                    {/* Step number */}
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#0F6B3A] to-[#124B34] flex items-center justify-center z-10 shadow-lg shadow-[#0F6B3A]/30 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                      <span className="text-white font-bold text-xs">{item.step}</span>
                    </div>
                    {/* Content */}
                    <div className="bg-white rounded-xl p-4 border border-[#E5E1D8] group-hover:border-[#0F6B3A]/50 group-hover:shadow-lg transition-all duration-300 ml-4">
                      <h3 className="font-semibold text-[#1F2621] text-sm group-hover:text-[#0F6B3A] transition-colors">{t(item.title)}</h3>
                      <p className="text-xs text-[#6b7280] mt-0.5">{t(item.desc)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Enhanced Horizontal steps */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Background track */}
                <div className="absolute top-10 left-[5%] right-[5%] h-1 bg-gradient-to-r from-[#0F6B3A]/10 via-[#0F6B3A]/30 to-[#0F6B3A]/10 rounded-full" />
                
                {/* Progress line */}
                <div className="absolute top-10 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#0F6B3A] via-[#0F6B3A]/50 to-[#0F6B3A] rounded-full shadow-lg shadow-[#0F6B3A]/20" />

                <div className="flex justify-between items-start">
                  {[
                    { step: "01", title: "Choose Substrate", desc: "Plywood, MDF, OSB, Blockboard" },
                    { step: "02", title: "Select Veneer", desc: "Natural, Engineered, Dyed, Smoked" },
                    { step: "03", title: "Confirm Specs", desc: "Size, thickness, glue grade" },
                    { step: "04", title: "Surface Treatment", desc: "Sand, Brush, UV, Paint" },
                    { step: "05", title: "Packaging", desc: "Sample, Bulk, Custom crates" },
                  ].map((item, index) => (
                    <div key={item.step} className="relative flex-1 max-w-[180px] text-center group cursor-pointer">
                      {/* Step number circle */}
                      <div className="relative mx-auto mb-8">
                        <div className="w-20 h-20 rounded-full bg-white border-4 border-[#0F6B3A]/20 flex items-center justify-center relative z-10 transition-all duration-500 group-hover:border-[#0F6B3A] group-hover:bg-gradient-to-br group-hover:from-[#0F6B3A] group-hover:to-[#124B34] group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#0F6B3A]/30">
                          <span className="text-[#0F6B3A] font-black text-lg group-hover:text-white transition-colors duration-300">{item.step}</span>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 w-20 h-20 rounded-full bg-[#0F6B3A]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 mx-auto" />
                      </div>
                      
                      {/* Content */}
                      <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                        <h3 className="font-bold text-[#1F2621] mb-2 group-hover:text-[#0F6B3A] transition-colors text-lg">{t(item.title)}</h3>
                        <p className="text-sm text-[#6b7280] group-hover:text-[#4C8A68] transition-colors">{t(item.desc)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Customization Categories - Enhanced Cards */}
          <div className="mb-12 lg:mb-16">
            <div className="flex items-center justify-center gap-6 mb-10 lg:mb-16">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#E5E1D8]" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1F2621] text-center">{t("What Can Be Customized")}</h3>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#E5E1D8]" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {[
                { 
                  title: "Substrate", 
                  description: "Plywood, MDF, HDF, Particle Board, Blockboard, OSB — each optimized for specific applications",
                  image: "/images/custom-solutions/Custom Substrate.png",
                  icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                },
                { 
                  title: "Wood Veneer", 
                  description: "80+ natural species, 300+ engineered styles. Natural, Dyed, and Smoked options available",
                  image: "/images/custom-solutions/Veneer Species.jpg",
                  icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                },
                { 
                  title: "Size & Thickness", 
                  description: "Length: 2600-3600mm | Width: 1220mm | Thickness: 3-25mm — customized to your specifications",
                  image: "/images/custom-solutions/Custom Size.jpg",
                  icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                },
                { 
                  title: "Surface Treatment", 
                  description: "Sanded, Brushed, UV Coated, Open/Closed Paint, Semi-Open, Water-based options",
                  image: "/images/custom-solutions/custom-paint.png",
                  icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                },
                { 
                  title: "Matching Method", 
                  description: "Book Match, Slip Match, Mix Match — for consistent or symmetrical grain patterns",
                  image: "/images/custom-solutions/Veneer Matching.png",
                  icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                },
                { 
                  title: "Packaging", 
                  description: "Sample packaging, Bulk packaging, Custom branding, Export-standard wooden frames",
                  image: "/images/custom-solutions/custom-packaging.png",
                  icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                },
              ].map((item, index) => (
                <div 
                  key={item.title} 
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E5E1D8] hover:border-[#0F6B3A]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0F6B3A]/10 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image Section */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={t(item.title)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-5 lg:p-6">
                    <h4 className="font-bold text-[#1F2621] mb-3 text-lg lg:text-xl group-hover:text-[#0F6B3A] transition-colors">{t(item.title)}</h4>
                    <p className="text-sm lg:text-base text-[#6b7280] leading-relaxed line-clamp-2">{t(item.description)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-12 md:py-16 lg:py-28 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E5E1D8] to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0F6B3A]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B5E3C]/5 rounded-full blur-3xl" />
        
        <div className="mx-auto px-4 sm:px-6 lg:px-[6.25%] xl:px-[8.33%] relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 lg:mb-12">
            <div>
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4" style={{ color: "#0F6B3A" }}>
                {t("Project Gallery")}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#1F2621] mb-2 sm:mb-4 leading-tight">{t("Our Projects")}</h2>
              <p className="text-base sm:text-lg text-[#6b7280] max-w-2xl">{t("See how our wood veneer panels are used in real-world applications")}</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href={getSiteLink("/projects", locale)} className="group inline-flex items-center gap-2 text-[#0F6B3A] hover:text-[#124B34] font-semibold transition-colors text-sm sm:text-base self-start lg:self-auto">
                <span>{t("View All Projects")}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full bg-white border border-[#E5E1D8] shadow-md flex items-center justify-center hover:bg-[#0F6B3A] hover:text-white hover:border-[#0F6B3A] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full bg-[#0F6B3A] text-white shadow-md flex items-center justify-center hover:bg-[#124B34] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Horizontal Scroll Gallery */}
        <div className="relative mt-8">
          <div 
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-6 px-4 sm:px-6 lg:px-[6.25%] xl:px-[8.33%] snap-x snap-mandatory scrollbar-hide"
          >
            {/* Project Cards */}
            {homeProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group flex-shrink-0 w-[260px] md:w-[300px] lg:w-[340px] snap-start text-left bg-transparent border-none p-0 cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="340px"
                    unoptimized
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0F6B3A] text-xs font-semibold rounded-full shadow">
                      {projectCopy.productTypeLabels[project.productType] ?? project.productType}
                    </span>
                  </div>

                  {/* Hover Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-white/60 text-sm mb-1">{t(project.location)}</div>
                    <h3 className="text-white font-bold text-lg mb-1">{t(project.name)}</h3>
                    <p className="text-white/80 text-sm line-clamp-1">{t(project.products)}</p>

                    {/* View Photo Arrow */}
                    <div className="mt-3 flex items-center gap-2 text-[#C9A87C] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span>{t("View Photo")}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Case Preview - Redesigned */}
      <section className="py-12 md:py-16 lg:py-28 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-[6.25%] xl:px-[8.33%] relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 lg:mb-12">
            <div>
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4" style={{ color: "#0F6B3A" }}>
                {t("Our Products")}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#1F2621] mb-2 sm:mb-4 leading-tight">{t("Featured Products")}</h2>
              <p className="text-base sm:text-lg text-[#6b7280] max-w-2xl">{t("Explore our premium wood veneer panels, engineered veneers, melamine boards, and more")}</p>
            </div>
            <Link href={getSiteLink("/products", locale)} className="group inline-flex items-center gap-2 text-[#0F6B3A] hover:text-[#124B34] font-semibold transition-colors text-sm sm:text-base">
              <span>{t("View All Products")}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product) => {
              return (
                <Link
                  key={product.slug}
                  href={product.href}
                  className="group relative overflow-hidden rounded-2xl lg:rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#0F6B3A]/10 via-[#F7F3EC] to-[#E9E0D2] p-4">
                    <Image
                      src={product.featuredImage}
                      alt={product.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F2621]/75 via-[#1F2621]/15 to-transparent" />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 lg:px-4 py-1.5 lg:py-2 bg-[#0F6B3A]/10 text-[#0F6B3A] text-sm lg:text-base font-medium rounded">{t("Natural Wood Veneer")}</span>
                      <span className="text-sm lg:text-base text-[#6b7280]">{t(product.cuttingMethod)}</span>
                    </div>
                    <h3 className="font-bold text-[#1F2621] mb-3 text-lg lg:text-xl group-hover:text-[#0F6B3A] transition-colors line-clamp-2">{t(product.name)}</h3>
                    <p className="text-base lg:text-lg text-[#6b7280]">{t(product.veneerSpecies)}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA - Redesigned */}
      <section className="py-16 md:py-20 lg:py-28 relative overflow-hidden">
        {/* Background Image with Wood Pattern */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/cta-wood-bg.png" 
            alt="" 
            fill 
            className="object-cover object-center"
          />
        </div>
        
        {/* Elegant Dark Overlay */}
        <div className="absolute inset-0 z-10" 
          style={{
            background: "linear-gradient(135deg, rgba(20, 15, 10, 0.88) 0%, rgba(30, 22, 15, 0.82) 40%, rgba(25, 18, 12, 0.75) 100%)"
          }} 
        />
        
        {/* Decorative Wood Grain Elements */}
        <div className="absolute top-0 left-0 w-full h-full z-10 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#C9A87C]/30 to-transparent" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-[#C9A87C]/20 to-transparent" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[#C9A87C]/25 to-transparent" />
        </div>
        
        {/* Accent Corner Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 border-l-2 border-t-2 border-[#C9A87C]/30 z-10" />
        <div className="absolute bottom-0 right-0 w-48 h-48 border-r-2 border-b-2 border-[#C9A87C]/30 z-10" />
        
        {/* Content */}
        <div className="mx-auto px-4 sm:px-6 lg:px-[6.25%] xl:px-[8.33%] relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Decorative badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A87C]/20 backdrop-blur-sm rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-[#C9A87C] animate-pulse" />
              <span className="text-[#C9A87C] text-sm font-medium tracking-wide">{t("Premium Quality • Factory Direct")}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
              {t("Looking for Wood Veneer Panels")}<br className="hidden sm:block" /> {t("or Veneer Materials?")}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("Tell us your product type, substrate, wood species, thickness, finish and application. Tongli will help you recommend the right material solution.")}
            </p>
            
            {/* Buttons with Wood Accent */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={getSiteLink("/contact", locale)} className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#C9A87C] to-[#A68B5B] text-[#1F2621] hover:from-[#D4B896] hover:to-[#B89B6B] rounded-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-0.5">
                <span>{t("Request a Quote")}</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href={`${getSiteLink("/contact", locale)}?type=sample`} className="group inline-flex items-center justify-center px-8 py-4 border-2 border-[#C9A87C]/50 text-white hover:bg-[#C9A87C]/20 hover:border-[#C9A87C]/70 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5">
                <span>{t("Request Samples")}</span>
                <svg className="w-5 h-5 ml-2 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>{t("FSC Certified")}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t("Since 1999")}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t("18,000m² Factory")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources / Knowledge Section - Redesigned */}
      <section className="py-12 md:py-16 lg:py-28 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-[6.25%] xl:px-[8.33%] relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 lg:mb-12">
            <div>
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4" style={{ color: "#0F6B3A" }}>
                {t("Knowledge Hub")}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#1F2621] mb-2 sm:mb-4 leading-tight">{t("Wood Veneer Knowledge")}<br className="hidden sm:block" /> {t("Insights")}</h2>
              <p className="text-base sm:text-lg text-[#6b7280] max-w-2xl">{t("Expert guides and industry updates to help you make informed decisions")}</p>
            </div>
            <Link href={getSiteLink("/resources", locale)} className="group inline-flex items-center gap-2 text-[#0F6B3A] hover:text-[#124B34] font-semibold transition-colors text-sm sm:text-base">
              <span>{t("View All Resources")}</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {homeResourceCards.map((article) => (
              <Link key={article.href} href={article.href} className="group block bg-[#F7F3EC] rounded-2xl lg:rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-[#0F6B3A]/10 to-[#4C8A68]/10 flex items-center justify-center">
                  <svg className="w-16 lg:w-20 h-16 lg:h-20 text-[#4C8A68]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 lg:px-4 py-1.5 lg:py-2 bg-[#0F6B3A] text-white text-sm lg:text-base font-medium rounded">{t(article.category)}</span>
                    <span className="text-sm lg:text-base text-[#6b7280]">{t(article.readTime)}</span>
                  </div>
                  <h3 className="font-bold text-[#1F2621] mb-3 text-lg lg:text-xl line-clamp-2 group-hover:text-[#0F6B3A] transition-colors">{t(article.title)}</h3>
                  <p className="text-base lg:text-lg text-[#6b7280] mb-6 line-clamp-2">{t(article.excerpt)}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm lg:text-base text-[#6b7280]">{t(article.date)}</span>
                    <span className="text-base lg:text-lg font-medium text-[#0F6B3A] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">{t("Read More")} <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <nav aria-label="Popular sourcing pages" className="mt-8 lg:mt-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#6b7280]">
              {t("Popular sourcing pages")}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {prioritySourcingLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-[#0F6B3A]/20 bg-white px-4 py-2 text-sm font-medium text-[#124B34] transition-colors hover:border-[#0F6B3A] hover:bg-[#0F6B3A] hover:text-white"
                >
                  {t(item.label)}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {/* Project Image Lightbox */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          locale={locale}
        />
      )}
    </div>
  );
}

export default function HomePage() {
  return <HomePageContent locale="en" />;
}
