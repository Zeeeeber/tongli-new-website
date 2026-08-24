"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "@/components/i18n/LocalizedLink";
import { getSiteLink, type Locale } from "@/i18n/config";
import { projectsPageCopy } from "@/i18n/core-page-copy";

/**
 * Shared types for project data.
 * Must stay in sync with src/app/projects/page.tsx
 */
export type ProductType =
  | "Wood Veneer Panel"
  | "HPL"
  | "3D Wood Panel"
  | "Natural Wood Veneer"
  | "Engineered Wood Veneer"
  | "Melamine Board"
  | "Wood Veneer Edge Banding"
  | "Supporting Boards";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: number;
  name: string;
  location: string;
  productType: ProductType;
  products: string;
  images: ProjectImage[];
  size?: "tall" | "medium" | "short" | "square";
  cols?: 1 | 2;
}

const productTypeColors: Record<ProductType, string> = {
  "Wood Veneer Panel": "#0F6B3A",
  HPL: "#8B5E3C",
  "3D Wood Panel": "#1F2621",
  "Natural Wood Veneer": "#4A6741",
  "Engineered Wood Veneer": "#5C4033",
  "Melamine Board": "#6B7280",
  "Wood Veneer Edge Banding": "#9B7E52",
  "Supporting Boards": "#4B5563",
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  /** Whether to show the "Request Similar Materials" CTA and details */
  showDetails?: boolean;
  locale?: Locale;
}

export default function ProjectModal({
  project,
  onClose,
  showDetails = true,
  locale = "en",
}: ProjectModalProps) {
  const copy = projectsPageCopy[locale];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
      setIsZoomed(false);
    }, 300);
  }, [onClose]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((i) => (i - 1 + project.images.length) % project.images.length);
  }, [project.images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % project.images.length);
  }, [project.images.length]);

  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [handleClose, handleNext, handlePrev]);

  const currentImage = project.images[currentIndex] ?? project.images[0];

  // ==========================================
  // MODE 1: Fullscreen Lightbox (zoom mode)
  // ==========================================
  if (isZoomed) {
    return (
      <div
        className={`fixed inset-0 z-[60] flex items-center justify-center bg-black transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsZoomed(false)}
      >
        <div className="relative w-full h-full">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain"
            sizes="100vw"
            unoptimized
            quality={100}
            priority
          />
        </div>

        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 bg-gradient-to-b from-black/60 to-transparent">
          <div className="flex items-center gap-3">
            <button
              aria-label={copy.close}
              className="text-white/80 hover:text-white transition-colors p-2 bg-white/10 rounded-full backdrop-blur-sm"
              onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-white text-sm font-medium">{currentImage.alt}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/60 text-xs">
              {currentIndex + 1} / {project.images.length}
            </span>
            <button
              aria-label={copy.previousImage}
              className="text-white/80 hover:text-white transition-colors p-2 bg-white/10 rounded-full backdrop-blur-sm"
              onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {project.images.length > 1 && (
          <>
            <button
              aria-label={copy.nextImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {project.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 max-w-full px-4 overflow-x-auto scrollbar-hide">
            {project.images.map((img, i) => (
              <button
                key={i}
                className={`relative w-14 h-10 rounded overflow-hidden border-2 transition-all flex-shrink-0 ${
                  i === currentIndex
                    ? "border-white scale-110 shadow-lg"
                    : "border-white/30 opacity-50 hover:opacity-100"
                }`}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="56px"
                  unoptimized
                />
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ==========================================
  // MODE 2: Split View (default)
  // ==========================================
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? "bg-black/80 backdrop-blur-sm" : "bg-transparent pointer-events-none"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: "90vh" }}
      >
        <button
          aria-label={copy.close}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 z-20 bg-black/30 rounded-full backdrop-blur-sm"
          onClick={handleClose}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Section — click to zoom */}
        <div className="relative lg:w-3/5 bg-black flex-shrink-0 group">
          <div
            className="relative w-full cursor-zoom-in"
            style={{ height: "50vh", maxHeight: "500px" }}
            onClick={() => setIsZoomed(true)}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 60vw"
              unoptimized
              quality={90}
              priority
            />
          </div>
          <div className="absolute bottom-3 right-3 transition-opacity duration-200 group-hover:opacity-100 opacity-0">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-black/50 rounded-full text-white/80 text-[10px] backdrop-blur-sm">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
              {copy.clickToEnlarge}
            </div>
          </div>

          {project.images.length > 1 && (
            <>
              <button
                aria-label={copy.previousImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all p-2 bg-black/30 rounded-full backdrop-blur-sm hover:bg-black/50"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                aria-label={copy.nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all p-2 bg-black/30 rounded-full backdrop-blur-sm hover:bg-black/50"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span
              className="px-3 py-1 rounded-full text-white text-[11px] font-semibold backdrop-blur-sm"
              style={{ backgroundColor: productTypeColors[project.productType] + "dd" }}
            >
              {copy.productTypeLabels[project.productType] ?? project.productType}
            </span>
            {project.images.length > 1 && (
              <span className="px-2 py-1 rounded-full bg-black/40 text-white text-[10px] backdrop-blur-sm">
                {currentIndex + 1} / {project.images.length}
              </span>
            )}
          </div>

          {project.images.length > 1 && (
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
              {project.images.map((img, i) => (
                <button
                  key={i}
                  className={`relative w-12 h-8 rounded overflow-hidden border-2 transition-all flex-shrink-0 ${
                    i === currentIndex
                      ? "border-white scale-105 shadow-lg"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                >
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="lg:w-2/5 flex flex-col overflow-y-auto">
          <div className="p-6 lg:p-8 flex-1">
            <div className="mb-6">
              <p className="text-[#0F6B3A] text-xs font-semibold uppercase tracking-widest mb-2">
                {copy.project} #{String(project.id).padStart(3, "0")}
              </p>
              <h2 className="text-xl lg:text-2xl font-bold text-[#1F2621] mb-1 leading-tight">
                {project.name}
              </h2>
              <div className="flex items-center gap-1.5 mt-1.5">
                <svg className="w-3.5 h-3.5 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-[#6b7280] text-sm">{project.location}</p>
              </div>
            </div>

            {showDetails && (
              <>
                <div className="bg-[#F7F3EC] rounded-xl p-5 mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0F6B3A]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#6b7280] text-[11px] uppercase tracking-widest mb-0.5">{copy.productType}</p>
                      <p className="text-[#1F2621] text-sm font-medium">{copy.productTypeLabels[project.productType] ?? project.productType}</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-[#D4C9BC]/50" />
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0F6B3A]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#6b7280] text-[11px] uppercase tracking-widest mb-0.5">{copy.materialsUsed}</p>
                      <p className="text-[#1F2621] text-sm font-medium leading-relaxed">{project.products}</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-[#D4C9BC]/50" />
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0F6B3A]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#6b7280] text-[11px] uppercase tracking-widest mb-0.5">{copy.location}</p>
                      <p className="text-[#1F2621] text-sm font-medium">{project.location}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Link
                    href={getSiteLink("/contact", locale)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0F6B3A] text-white rounded-xl font-medium hover:bg-[#124B34] transition-all duration-200 text-sm shadow-lg shadow-[#0F6B3A]/20 hover:shadow-xl hover:shadow-[#0F6B3A]/30 hover:-translate-y-0.5"
                    onClick={handleClose}
                  >
                    <span>{copy.requestSimilar}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <button
                    onClick={handleClose}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-[#6b7280] rounded-xl font-medium hover:bg-gray-50 transition-all duration-200 text-sm"
                  >
                    {copy.close}
                  </button>
                </div>
              </>
            )}

            {!showDetails && (
              <div className="flex flex-col gap-2">
                <Link
                  href={getSiteLink("/contact", locale)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0F6B3A] text-white rounded-xl font-medium hover:bg-[#124B34] transition-all duration-200 text-sm shadow-lg shadow-[#0F6B3A]/20 hover:shadow-xl hover:shadow-[#0F6B3A]/30 hover:-translate-y-0.5"
                  onClick={handleClose}
                >
                  <span>{copy.requestSimilar}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <button
                  onClick={handleClose}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-[#6b7280] rounded-xl font-medium hover:bg-gray-50 transition-all duration-200 text-sm"
                >
                  {copy.close}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
