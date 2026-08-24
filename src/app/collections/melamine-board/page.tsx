"use client";

import T from "@/i18n/full-site-context";
import Link from "@/components/i18n/LocalizedLink";
import Image from "next/image";
import { useMemo, useState } from "react";
import ImageModal from "@/components/ImageModal";
import stylesData from "./styles-data.json";

type Category =
  | "Light Wood"
  | "Warm Wood"
  | "Dark Wood"
  | "Grey Wood"
  | "Fabric / Solid"
  | "Stone / Marble";

interface StyleItem {
  code: string;
  image: string;
  category: Category;
}

const styles: StyleItem[] = stylesData as StyleItem[];

const categories: { key: "All" | Category; label: string }[] = [
  { key: "All", label: "All" },
  { key: "Light Wood", label: "Light Wood" },
  { key: "Warm Wood", label: "Warm Wood" },
  { key: "Dark Wood", label: "Dark Wood" },
  { key: "Grey Wood", label: "Grey Wood" },
  { key: "Fabric / Solid", label: "Fabric / Solid" },
  { key: "Stone / Marble", label: "Stone / Marble" },
];

export default function MelamineBoardPage() {
  const [active, setActive] = useState<"All" | Category>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? styles : styles.filter((s) => s.category === active)),
    [active]
  );

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: styles.length };
    for (const s of styles) c[s.category] = (c[s.category] || 0) + 1;
    return c;
  }, []);

  const openModal = (idx: number) => setSelectedIndex(idx);
  const closeModal = () => setSelectedIndex(null);

  return (
    <>
      <div className="bg-[#F7F3EC] py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-[#6b7280]">
            <Link href="/" className="hover:text-[#0F6B3A]"><T>{"Home"}</T></Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/collections" className="hover:text-[#0F6B3A]"><T>{"Collections"}</T></Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1F2621] font-medium"><T>{"Melamine Board"}</T></span>
          </div>
        </div>
      </div>

      <section className="relative bg-gradient-to-r from-[#124B34] to-[#0F6B3A] py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-white/60 text-sm font-medium tracking-wider uppercase"><T>{"Collection"}</T></span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-2 mb-4 text-white"><T>{"Melamine Board"}</T></h1>
            <p className="text-white/80 text-lg leading-relaxed">
              <T>{"Melamine-faced panels built for modern furniture and cabinetry. Wood grain, solid colors, fabric looks, and stone-inspired finishes share the same durable, low-maintenance surface.\n            "}</T></p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-thin">
            {categories.map((c) => {
              const isActive = active === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={[
                    "flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors border whitespace-nowrap",
                    isActive
                      ? "bg-[#0F6B3A] text-white border-[#0F6B3A]"
                      : "bg-white text-[#1F2621] border-[#E5E1D8] hover:border-[#0F6B3A]/40 hover:text-[#0F6B3A]",
                  ].join(" ")}
                >
                  <T>{c.label}</T>
                  <span
                    className={[
                      "ml-2 text-xs font-mono",
                      isActive ? "text-white/80" : "text-[#6b7280]",
                    ].join(" ")}
                  >
                    {counts[c.key] ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-sm text-[#6b7280] mb-6">
            <T>{"Showing "}</T>{filtered.length} <T>{filtered.length === 1 ? "style" : "styles"}</T>
            <T>{active !== "All" ? ` in ${active}` : ""}</T>
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center text-[#6b7280]">
              <T>{"No styles in this category.\n            "}</T></div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filtered.map((s) => {
                const realIndex = styles.findIndex((x) => x.code === s.code);
                return (
                  <div
                    key={s.code}
                    className="group bg-white rounded-xl border border-[#E5E1D8] overflow-hidden hover:border-[#0F6B3A]/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className="aspect-square relative cursor-pointer overflow-hidden bg-[#F5F0E8]"
                      onClick={() => openModal(realIndex)}
                    >
                      <Image
                        src={s.image}
                        alt={s.code}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-[#0F6B3A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <svg className="w-6 h-6 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="p-3">
                      <h3 className="font-semibold text-[#1F2621] text-sm mb-1.5">{s.code}</h3>
                      <span className="inline-block px-2 py-0.5 bg-[#F7F3EC] rounded text-xs text-[#6b7280]">
                        <T>{s.category}</T>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-[#124B34]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4"><T>{"Need Physical Samples?"}</T></h2>
            <p className="text-white/80 mb-8">
              <T>{"Request samples by code number to evaluate colors and finishes for your furniture production.\n            "}</T></p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?type=sample"
                className="px-8 py-4 bg-white text-[#124B34] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
              >
                <T>{"Request Samples\n              "}</T></Link>
            </div>
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={selectedIndex !== null}
        onClose={closeModal}
        images={selectedIndex !== null ? [styles[selectedIndex].image] : []}
        currentIndex={0}
        onNext={() => {}}
        onPrev={() => {}}
      />
    </>
  );
}