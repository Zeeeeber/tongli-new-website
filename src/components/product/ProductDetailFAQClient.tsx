"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface ProductDetailClientProps {
  faqs: FAQItem[];
  accentColor?: string;
}

export function ProductDetailClient({ 
  faqs, 
  accentColor = "#0F6B3A" 
}: ProductDetailClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (faqs.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 bg-[#FDFBF7]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2 sm:mb-3" style={{ color: accentColor }}>
              FAQ
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F2621]">
              Frequently Asked Questions
            </h2>
            <div className="w-12 sm:w-16 h-1 mx-auto mt-3 sm:mt-4 rounded-full" style={{ backgroundColor: accentColor }}></div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-[#E5E1D8] overflow-hidden hover:border-opacity-50 transition-all duration-300"
                style={{ "--hover-border": accentColor } as React.CSSProperties}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-start justify-between gap-3 p-4 sm:p-6 text-left"
                >
                  <div className="flex items-start gap-4">
                    <span 
                      className="text-xs font-bold px-3 py-1.5 rounded-lg mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
                    >
                      0{index + 1}
                    </span>
                    <span className="text-[#1F2621] font-medium pr-4 leading-relaxed text-sm lg:text-base">
                      {faq.q}
                    </span>
                  </div>
                  <div 
                    className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                    style={{ 
                      backgroundColor: openFaq === index ? accentColor : "transparent",
                      borderColor: openFaq === index ? accentColor : "#E5E1D8"
                    }}
                  >
                    <svg 
                      className="w-4 h-4 transition-colors duration-300" 
                      style={{ color: openFaq === index ? "white" : "#6b7280" }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                    </svg>
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <div 
                    className="px-4 sm:px-6 pb-5 sm:pb-6 ml-10 sm:ml-20 text-[#6b7280] leading-relaxed text-xs sm:text-sm border-t pt-4"
                    style={{ borderColor: "#F7F3EC" }}
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
