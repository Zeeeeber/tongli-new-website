"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectModal, { type Project, type ProductType } from "@/components/projects/ProjectModal";
import { projects } from "@/data/projects";

// ============================================
// Projects Data
// (Data is imported from @/data/projects)
// ============================================

const categories = [
  { id: "all", label: "All" },
  { id: "Wood Veneer Panel", label: "Wood Veneer Panel" },
  { id: "HPL", label: "HPL" },
  { id: "3D Wood Panel", label: "3D Wood Panel" },
  { id: "Natural Wood Veneer", label: "Natural Wood Veneer" },
  { id: "Engineered Wood Veneer", label: "Engineered Wood Veneer" },
  { id: "Melamine Board", label: "Melamine Board" },
  { id: "Wood Veneer Edge Banding", label: "Edge Banding" },
  { id: "Supporting Boards", label: "Supporting Boards" },
];

const aspectRatios = {
  short: "aspect-[4/3]",
  square: "aspect-square",
  medium: "aspect-[3/4]",
  tall: "aspect-[2/3]",
};

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

// ============================================
// Project Card
// ============================================
function ProjectCard({
  project,
  onHover,
  onLeave,
  onClick,
  isHovered,
}: {
  project: Project;
  onHover: (id: number) => void;
  onLeave: () => void;
  onClick: (project: Project) => void;
  isHovered: boolean;
}) {
  const mainImage = project.images[0];
  const spanClass = project.cols === 2 ? "md:col-span-2" : "";
  const aspectClass = aspectRatios[project.size ?? "medium"];

  return (
    <div
      className={`group relative break-inside-avoid overflow-hidden cursor-pointer bg-[#E9E0D2] rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.015] ${spanClass}`}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={onLeave}
      onClick={() => onClick(project)}
    >
      <div className={`relative ${aspectClass}`}>
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1 pr-3">
            <p className="text-white text-xs font-medium truncate">{project.name}</p>
            <p className="text-white/60 text-[10px] truncate">{project.location}</p>
          </div>
          <span
            className="shrink-0 px-2 py-0.5 rounded text-[9px] font-semibold text-white"
            style={{ backgroundColor: productTypeColors[project.productType] + "cc" }}
          >
            {project.productType}
          </span>
        </div>
      </div>

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 flex flex-col justify-center p-6 transition-all duration-400 ${
          isHovered
            ? "opacity-100 bg-gradient-to-br from-[#0F6B3A]/90 via-[#124B34]/85 to-[#0F6B3A]/90"
            : "opacity-0"
        }`}
      >
        <div className="space-y-3">
          <div>
            <p className="text-white/60 text-[10px] uppercase tracking-widest mb-0.5">Project</p>
            <h3 className="text-white font-bold text-base leading-tight">{project.name}</h3>
          </div>

          <div className="w-8 h-0.5 bg-white/30 rounded-full" />

          <div className="space-y-1.5">
            <p className="text-white/60 text-[10px]">
              <span className="uppercase tracking-wider">Location</span>
              <br />
              <span className="text-white font-medium text-xs">{project.location}</span>
            </p>
            <p className="text-white/60 text-[10px]">
              <span className="uppercase tracking-wider">Product</span>
              <br />
              <span className="text-white font-medium text-xs">{project.productType}</span>
            </p>
            <p className="text-white/60 text-[10px]">
              <span className="uppercase tracking-wider">Materials</span>
              <br />
              <span className="text-white/90 font-medium text-[10px] leading-relaxed">{project.products}</span>
            </p>
          </div>

          {project.images.length > 1 && (
            <div className="pt-1 flex items-center gap-2">
              <div className="flex items-center gap-1">
                {project.images.slice(0, Math.min(project.images.length, 4)).map((img, i) => (
                  <div key={i} className="w-5 h-5 rounded-sm border border-white/30 overflow-hidden">
                    <Image
                      src={img.src}
                      alt=""
                      width={20}
                      height={20}
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ))}
                {project.images.length > 4 && (
                  <span className="text-white/50 text-[10px]">+{project.images.length - 4}</span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
          <span className="text-white/40 text-[9px] tracking-widest uppercase">View Details</span>
          <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ============================================
// Main Page
// ============================================
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [galleryKey, setGalleryKey] = useState(0);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.productType === activeCategory);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setGalleryKey((k) => k + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-[#F7F3EC]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-8 left-[10%] w-px h-32 bg-[#0F6B3A]" />
          <div className="absolute top-8 left-[25%] w-px h-20 bg-[#0F6B3A]" />
          <div className="absolute top-8 right-[15%] w-px h-24 bg-[#0F6B3A]" />
          <div className="absolute bottom-8 left-[35%] w-px h-16 bg-[#0F6B3A]" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0F6B3A]/10 rounded-full mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0F6B3A]" />
            <span className="text-[#0F6B3A] text-xs font-semibold tracking-widest uppercase">Global Projects</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-[#1F2621] mb-4 leading-tight">
              Project Gallery
            </h1>
          <p className="text-[#6b7280] text-sm max-w-lg mx-auto">
            {projects.length} completed projects across {new Set(projects.map((p) => p.location.split(",").pop()?.trim() || p.location)).size} countries, showcasing our wood material expertise worldwide.
            </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-1.5 text-xs font-medium whitespace-nowrap rounded-full border transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-[#0F6B3A] text-white border-[#0F6B3A]"
                    : "text-[#6b7280] border-gray-200 hover:border-[#0F6B3A] hover:text-[#0F6B3A]"
                }`}
              >
                {cat.label}
              </button>
            ))}
            <div className="ml-auto shrink-0 text-[#6b7280] text-xs">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-6 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div key={galleryKey} className="columns-2 md:columns-2 lg:columns-3 gap-4 space-y-4 animate-fadeIn">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onHover={setHoveredProject}
                onLeave={() => setHoveredProject(null)}
                onClick={(p) => setSelectedProject(p)}
                isHovered={hoveredProject === project.id}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-24">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-[#6b7280]">No projects found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#F7F3EC]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">
            Start Your Next Project
                  </h2>
          <p className="text-[#6b7280] mb-8 text-sm max-w-md mx-auto">
            From concept to completion, our team delivers premium wood materials tailored to your specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0F6B3A] text-white rounded-xl font-medium hover:bg-[#124B34] transition-colors text-sm shadow-lg shadow-[#0F6B3A]/20"
                >
              <span>Request Material Advice</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#D4C9BC] text-[#1F2621] rounded-xl font-medium hover:border-[#0F6B3A] hover:text-[#0F6B3A] transition-colors text-sm"
              >
                <span>View Materials</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
