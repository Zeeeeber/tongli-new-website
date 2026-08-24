"use client";

import Link from "@/components/i18n/LocalizedLink";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { globalCopy } from "@/i18n/copy";
import {
  getLocaleFromPathname,
  getSiteLink,
  stripLocaleFromPathname,
} from "@/i18n/config";

const mainNavItems = [
  { key: "home", href: "/", hasDropdown: false },
  { key: "products", href: "/products", hasDropdown: true },
  { key: "collections", href: "/collections", hasDropdown: false },
  // { label: "Applications", href: "/applications" }, // TODO: hidden temporarily
  { key: "customSolutions", href: "/custom-solutions", hasDropdown: false },
  { key: "about", href: "/about", hasDropdown: false },
  { key: "projects", href: "/projects", hasDropdown: false },
  { key: "resources", href: "/resources", hasDropdown: true },
  { key: "contact", href: "/contact", hasDropdown: false },
] as const;

const productCategoryHrefs = [
  "/products/wood-veneer-panels",
  "/products/natural-wood-veneer",
  "/products/engineered-wood-veneer",
  "/products/3d-wood-panels",
  "/products/veneer-edge-banding",
  "/products/melamine-board",
  "/products/supporting-boards",
] as const;

const resourceCategoryHrefs = [
  "/resources/category/product-news",
  "/resources/category/industry-news",
  "/resources/category/company-news",
] as const;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = globalCopy[locale];
  const contentPath = stripLocaleFromPathname(pathname);
  const productCategories = copy.productCategories.map((category, index) => ({
    ...category,
    href: productCategoryHrefs[index],
  }));
  const resourceCategories = copy.resourceCategories.map((category, index) => ({
    ...category,
    href: resourceCategoryHrefs[index],
  }));

  const isActive = (href: string) => {
    if (href === "/") return contentPath === "/";
    return contentPath.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={getSiteLink("/", locale)} className="flex items-center flex-shrink-0 group">
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
                    if (item.key === "products") setProductsOpen(true);
                    if (item.key === "resources") setResourcesOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.key === "products") setProductsOpen(false);
                    if (item.key === "resources") setResourcesOpen(false);
                  }}
                >
                  <Link
                    href={getSiteLink(item.href, locale)}
                    className={`relative flex items-center gap-1.5 h-20 px-4 text-sm font-bold tracking-wide uppercase transition-all duration-200 rounded-lg ${
                      isActive(item.href)
                        ? "text-[#0F6B3A] bg-[#0F6B3A]/5"
                        : "text-gray-800 hover:text-[#0F6B3A] hover:bg-[#0F6B3A]/5"
                    }`}
                  >
                    <span className="text-[13px]">{copy.nav[item.key]}</span>
                    {item.hasDropdown && (
                      <svg
                        className={`w-3 h-3 transition-all duration-200 ${isActive(item.href) || (item.key === "products" && productsOpen) || (item.key === "resources" && resourcesOpen) ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Products Dropdown */}
                  {item.hasDropdown && item.key === "products" && productsOpen && (
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
                              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{category.description}</p>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-gray-100 mt-5 pt-5">
                          <Link
                            href={getSiteLink("/products", locale)}
                            className="flex items-center justify-center gap-2 text-white font-bold text-sm py-4 bg-gradient-to-r from-[#0F6B3A] to-[#124B34] rounded-xl hover:shadow-lg hover:shadow-[#0F6B3A]/20 transition-all duration-200"
                          >
                            {copy.nav.viewAllProducts}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Resources Dropdown */}
                  {item.hasDropdown && item.key === "resources" && resourcesOpen && (
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
                              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{category.description}</p>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-gray-100 mt-4 pt-4">
                          <Link
                            href={getSiteLink("/resources", locale)}
                            className="flex items-center justify-center gap-2 text-white font-bold text-sm py-4 bg-gradient-to-r from-[#0F6B3A] to-[#124B34] rounded-xl hover:shadow-lg hover:shadow-[#0F6B3A]/20 transition-all duration-200"
                          >
                            {copy.nav.viewAllResources}
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
          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            <Link
              href={getSiteLink("/contact", locale)}
              className="hidden sm:flex items-center gap-2 px-6 py-3 bg-[#0F6B3A] text-white text-sm font-bold uppercase tracking-wide rounded-full hover:bg-[#124B34] hover:shadow-lg hover:shadow-[#0F6B3A]/20 transition-all duration-200"
            >
              <span>{copy.nav.inquireNow}</span>
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
                  href={getSiteLink(item.href, locale)}
                  className={`flex items-center justify-between py-4 px-4 text-sm font-bold uppercase tracking-wide rounded-xl transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-[#0F6B3A] bg-[#0F6B3A]/5"
                      : "text-gray-800 hover:text-[#0F6B3A] hover:bg-[#0F6B3A]/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{copy.nav[item.key]}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <Link
                href={getSiteLink("/contact", locale)}
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#0F6B3A] text-white font-bold uppercase tracking-wide rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{copy.nav.inquireNow}</span>
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
