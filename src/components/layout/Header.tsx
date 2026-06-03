"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const mainNavItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Collections", href: "/collections" },
  // { label: "Applications", href: "/applications" }, // TODO: hidden temporarily
  { label: "Custom Solutions", href: "/custom-solutions" },
  { label: "About Tongli", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "/resources", hasDropdown: true },
  { label: "Contact", href: "/contact" },
];

const productCategories = [
  { name: "Wood Veneer Panels", href: "/products/wood-veneer-panels", desc: "Plywood, MDF, Particle Board panels" },
  { name: "Natural Wood Veneer", href: "/products/natural-wood-veneer", desc: "Oak, Walnut, Teak, 80+ species" },
  { name: "Engineered Wood Veneer", href: "/products/engineered-wood-veneer", desc: "300+ consistent patterns" },
  { name: "3D Wood Panels", href: "/products/3d-wood-panels", desc: "Decorative carved panels" },
  { name: "Veneer Edge Banding", href: "/products/veneer-edge-banding", desc: "Matching edge strips" },
  { name: "Melamine Board", href: "/products/melamine-board", desc: "Melamine faced boards" },
  { name: "Supporting Boards", href: "/products/supporting-boards", desc: "Plywood, Blockboard, OSB cores" },
];

const resourceCategories = [
  { name: "Product News", href: "/resources/category/product-news", desc: "New products, technical guides, and recommendations" },
  { name: "Industry News", href: "/resources/category/industry-news", desc: "Market trends and design innovations" },
  { name: "Company News", href: "/resources/category/company-news", desc: "Company updates and certifications" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 group">
            <div className="w-12 h-12 relative">
              <Image 
                src="/logo.png" 
                alt="Tongli Timber Logo" 
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center h-full">
            <div className="flex items-center h-full -mx-2">
              {mainNavItems.map((item) => (
                <div
                  key={item.href}
                  className="relative px-2"
                  onMouseEnter={() => {
                    if (item.label === "Products") setProductsOpen(true);
                    if (item.label === "Resources") setResourcesOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.label === "Products") setProductsOpen(false);
                    if (item.label === "Resources") setResourcesOpen(false);
                  }}
                >
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1.5 h-20 px-4 text-sm font-bold tracking-wide uppercase transition-all duration-200 rounded-lg ${
                      isActive(item.href)
                        ? "text-[#0F6B3A] bg-[#0F6B3A]/5"
                        : "text-gray-800 hover:text-[#0F6B3A] hover:bg-[#0F6B3A]/5"
                    }`}
                  >
                    <span className="text-[13px]">{item.label}</span>
                    {item.hasDropdown && (
                      <svg 
                        className={`w-3 h-3 transition-all duration-200 ${isActive(item.href) || (item.label === "Products" && productsOpen) || (item.label === "Resources" && resourcesOpen) ? "rotate-180" : ""}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Products Dropdown */}
                  {item.hasDropdown && item.label === "Products" && productsOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      onMouseEnter={() => setProductsOpen(true)}
                      onMouseLeave={() => setProductsOpen(false)}
                    >
                      <div className="w-[580px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
                        <div className="grid grid-cols-2 gap-3">
                          {productCategories.map((category) => (
                            <Link
                              key={category.name}
                              href={category.href}
                              className="group p-4 rounded-xl hover:bg-gradient-to-br hover:from-[#0F6B3A]/8 hover:to-[#124B34]/5 transition-all duration-200 border border-transparent hover:border-[#0F6B3A]/10"
                            >
                              <h4 className="font-bold text-[#1F2621] text-sm group-hover:text-[#0F6B3A] transition-colors">
                                {category.name}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{category.desc}</p>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-gray-100 mt-5 pt-5">
                          <Link
                            href="/products"
                            className="flex items-center justify-center gap-2 text-white font-bold text-sm py-4 bg-gradient-to-r from-[#0F6B3A] to-[#124B34] rounded-xl hover:shadow-lg hover:shadow-[#0F6B3A]/20 transition-all duration-200"
                          >
                            View All Products
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Resources Dropdown */}
                  {item.hasDropdown && item.label === "Resources" && resourcesOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      onMouseEnter={() => setResourcesOpen(true)}
                      onMouseLeave={() => setResourcesOpen(false)}
                    >
                      <div className="w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5">
                        <div className="grid grid-cols-1 gap-2">
                          {resourceCategories.map((category) => (
                            <Link
                              key={category.name}
                              href={category.href}
                              className="group p-4 rounded-xl hover:bg-gradient-to-br hover:from-[#0F6B3A]/8 hover:to-[#124B34]/5 transition-all duration-200 border border-transparent hover:border-[#0F6B3A]/10"
                            >
                              <h4 className="font-bold text-[#1F2621] text-sm group-hover:text-[#0F6B3A] transition-colors">
                                {category.name}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{category.desc}</p>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-gray-100 mt-4 pt-4">
                          <Link
                            href="/resources"
                            className="flex items-center justify-center gap-2 text-white font-bold text-sm py-4 bg-gradient-to-r from-[#0F6B3A] to-[#124B34] rounded-xl hover:shadow-lg hover:shadow-[#0F6B3A]/20 transition-all duration-200"
                          >
                            View All Resources
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 px-6 py-3 bg-[#0F6B3A] text-white text-sm font-bold uppercase tracking-wide rounded-full hover:bg-[#124B34] hover:shadow-lg hover:shadow-[#0F6B3A]/20 transition-all duration-200"
            >
              <span>Inquire Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <button
              type="button"
              className="xl:hidden p-2.5 text-gray-700 hover:text-[#0F6B3A] hover:bg-[#0F6B3A]/5 rounded-lg transition-all duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-6">
            <nav className="space-y-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between py-4 px-4 text-sm font-bold uppercase tracking-wide rounded-xl transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-[#0F6B3A] bg-[#0F6B3A]/5"
                      : "text-gray-800 hover:text-[#0F6B3A] hover:bg-[#0F6B3A]/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#0F6B3A] text-white font-bold uppercase tracking-wide rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Inquire Now</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
