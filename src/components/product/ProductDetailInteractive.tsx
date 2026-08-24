"use client";

import Link from "@/components/i18n/LocalizedLink";
import { useState } from "react";
import { ContactFormModal } from "@/components/contact/ContactFormModal";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQClientProps {
  faqs: FAQItem[];
  accentColor?: string;
}

export function FAQClient({ faqs, accentColor = "#0F6B3A" }: FAQClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 bg-[#FDFBF7]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2 sm:mb-3" style={{ color: accentColor }}>FAQ</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F2621]">Frequently Asked Questions</h2>
            <div className="w-12 sm:w-16 h-1 mx-auto mt-3 sm:mt-4 rounded-full" style={{ backgroundColor: accentColor }}></div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-white rounded-2xl border border-[#E5E1D8] overflow-hidden hover:border-[#0F6B3A]/30 transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-start justify-between gap-3 p-4 sm:p-6 text-left"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-lg mt-0.5 flex-shrink-0" style={{ backgroundColor: `${accentColor}15`, color: accentColor }}>
                      0{index + 1}
                    </span>
                    <span className="text-[#1F2621] font-medium pr-4 leading-relaxed text-sm lg:text-base">{faq.q}</span>
                  </div>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === index ? "rotate-45" : ""}`}
                    style={{ backgroundColor: openFaq === index ? accentColor : "transparent", borderColor: openFaq === index ? accentColor : "#E5E1D8" }}>
                    <svg className={`w-4 h-4 transition-colors duration-300 ${openFaq === index ? "text-white" : "text-[#6b7280]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? "max-h-60" : "max-h-0"}`}>
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 ml-10 sm:ml-20 text-[#6b7280] leading-relaxed text-xs sm:text-sm border-t border-[#F7F3EC] pt-4">
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

interface ImageGalleryClientProps {
  accentColor?: string;
}

export function ImageGalleryClient({ accentColor = "#0F6B3A" }: ImageGalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <div className="aspect-video sm:aspect-square bg-gradient-to-br from-[#F7F3EC] to-[#E8E4DB] rounded-2xl overflow-hidden mb-4 flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center mb-4">
            <svg className="w-16 h-16" style={{ color: `${accentColor}4D` }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-sm" style={{ color: `${accentColor}80` }}>Product Image {selectedImage + 1}</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            onClick={() => setSelectedImage(i)}
            className={`aspect-square rounded-lg flex items-center justify-center ${selectedImage === i ? "ring-2 ring-offset-1" : "bg-gradient-to-br from-[#F7F3EC] to-[#E8E4DB]"}`}
          >
            <svg className="w-6 h-6" style={{ color: `${accentColor}4D` }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        ))}
      </div>
    </>
  );
}

interface ContactActionsClientProps {
  productName: string;
}

export function ContactActionsClient({ productName }: ContactActionsClientProps) {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/contact"
          className="flex-1 min-w-[120px] px-4 py-3 text-white text-center rounded-lg font-semibold transition-colors"
          style={{ backgroundColor: "#0F6B3A" }}
        >
          CONTACT US
        </Link>
        <a
          href="https://wa.me/message/2DMHTU2VVZTKC1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[120px] px-4 py-3 text-white text-center rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
          style={{ backgroundColor: "#25D366" }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WHATSAPP
        </a>
      </div>
      <ContactFormModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </>
  );
}
