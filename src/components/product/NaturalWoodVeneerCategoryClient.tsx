"use client";

import Link from "next/link";
import type { NaturalWoodVeneerProduct } from "@/data/products/natural-wood-veneer-products";

interface NaturalWoodVeneerCategoryClientProps {
  products: NaturalWoodVeneerProduct[];
}

export function NaturalWoodVeneerCategoryClient({ products: _products }: NaturalWoodVeneerCategoryClientProps) {
  return (
    <>
      {/* CTA */}
      <section className="py-16 bg-[#8B5E3C]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Natural Wood Veneer?</h2>
            <p className="text-white/80 mb-8">Contact us for species availability, custom specifications, and sample requests.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact?type=sample" className="px-8 py-4 bg-white text-[#8B5E3C] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors">Request Samples</Link>
              <Link href="/contact?type=quote" className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">Request Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
