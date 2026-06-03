"use client";

import Link from "next/link";
import { useState } from "react";
import type { NaturalWoodVeneerProduct } from "@/data/products/natural-wood-veneer-products";

interface NaturalWoodVeneerCategoryClientProps {
  products: NaturalWoodVeneerProduct[];
}

const features = [
  { 
    title: "80+ Wood Species", 
    description: "Oak, Walnut, Teak, Cherry, Maple, Ash, and more", 
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" 
  },
  { 
    title: "Natural Grains", 
    description: "Authentic wood grain patterns and textures", 
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
  },
  { 
    title: "Dyeable & Treatable", 
    description: "Available for staining, dyeing, and smoking", 
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" 
  },
  { 
    title: "Custom Thickness", 
    description: "0.15mm to 3mm available", 
    icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" 
  },
];

const applications = [
  { name: "Veneer Panels", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
  { name: "Furniture", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" },
  { name: "Doors", icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" },
  { name: "Wall Panels", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
];

const faqs = [
  { q: "What is the minimum order quantity?", a: "Standard MOQ is 100 sheets (approximately 50 sqm) per species. Sample orders of 5-10 sheets available for quality evaluation." },
  { q: "Can natural veneer be dyed or stained?", a: "Yes, natural wood veneer can be dyed, stained, and smoked. We also offer pre-treated options including smoked oak and dyed veneers." },
  { q: "What veneer thicknesses are available?", a: "Standard thicknesses range from 0.15mm to 3mm. Common thicknesses for lamination are 0.5mm and 0.6mm." },
  { q: "How should veneer be stored?", a: "Store flat in a climate-controlled environment (40-60% humidity) away from direct sunlight. Keep covered to prevent moisture changes." },
];

export function NaturalWoodVeneerCategoryClient({ products }: NaturalWoodVeneerCategoryClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1F2621]">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#FDFBF7] rounded-xl border border-[#E5E1D8] overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)} 
                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-[#1F2621] hover:text-[#8B5E3C] transition-colors"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <svg className={`w-5 h-5 text-[#8B5E3C] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-48' : 'max-h-0'}`}>
                    <div className="px-6 pb-6 text-[#6b7280] leading-relaxed">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
