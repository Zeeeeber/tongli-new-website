"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-[#FAFAFA]">
        <div className="max-w-md w-full bg-white rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0F6B3A]/10 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#0F6B3A]/10 to-transparent rounded-tr-full" />
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-[#0F6B3A] to-[#124B34] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#1F2621] mb-3">Thank You!</h2>
            <p className="text-[#6b7280] mb-6">
              Your inquiry has been submitted successfully. We will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 bg-[#0F6B3A] text-white rounded-full hover:bg-[#124B34] transition-all shadow-lg"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/contact-hero-bg.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F6B3A]/95 via-[#0F6B3A]/90 to-[#124B34]/95" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-[#4C8A68]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-20 w-80 h-80 bg-[#4C8A68]/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-sm mb-6 border border-white/20">
                <span className="w-2 h-2 bg-[#4C8A68] rounded-full animate-pulse" />
                24/7 Online Service
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Get Your <br />
                <span className="text-[#4C8A68]">Instant Free Quote</span> <br />
                Now
              </h1>
              <p className="text-white/80 text-lg mb-8 max-w-md leading-relaxed">
                Tell us your requirements and get a customized quotation from our wood veneer experts within 24 hours.
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Call us directly</p>
                      <a href="tel:+8613342688937" className="text-2xl font-bold text-white hover:text-[#4C8A68] transition-colors">+86 133 4268 8937</a>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#25D366]/20 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Chat on WhatsApp</p>
                      <a href="https://wa.me/8613342688937" className="text-lg font-semibold text-white hover:text-[#25D366] transition-colors">+86 133 4268 8937</a>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/15 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email us</p>
                      <a href="mailto:dgtongli@tongli-dg.com" className="text-lg font-semibold text-white hover:text-[#4C8A68] transition-colors">dgtongli@tongli-dg.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#0F6B3A]/5 to-transparent rounded-bl-full" />
              <div className="relative z-10">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-2">Contact Us</h2>
                  <p className="text-[#6b7280]">Fill in the form below and we will respond shortly.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs text-[#6b7280] font-semibold uppercase tracking-wide">Name *</label>
                      <input type="text" required value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} className="w-full px-4 py-3.5 bg-[#FAFAFA] border border-[#E5E1D8] rounded-xl focus:ring-2 focus:ring-[#0F6B3A]/20 focus:border-[#0F6B3A] outline-none transition-all placeholder:text-[#9CA3AF] text-[#1F2621]" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-[#6b7280] font-semibold uppercase tracking-wide">Phone *</label>
                      <input type="tel" required value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} className="w-full px-4 py-3.5 bg-[#FAFAFA] border border-[#E5E1D8] rounded-xl focus:ring-2 focus:ring-[#0F6B3A]/20 focus:border-[#0F6B3A] outline-none transition-all placeholder:text-[#9CA3AF] text-[#1F2621]" placeholder="+86 xxx xxxx xxxx" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-[#6b7280] font-semibold uppercase tracking-wide">Email *</label>
                    <input type="email" required value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} className="w-full px-4 py-3.5 bg-[#FAFAFA] border border-[#E5E1D8] rounded-xl focus:ring-2 focus:ring-[#0F6B3A]/20 focus:border-[#0F6B3A] outline-none transition-all placeholder:text-[#9CA3AF] text-[#1F2621]" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-[#6b7280] font-semibold uppercase tracking-wide">Subject</label>
                    <input type="text" value={formData.subject} onChange={(e) => handleInputChange("subject", e.target.value)} className="w-full px-4 py-3.5 bg-[#FAFAFA] border border-[#E5E1D8] rounded-xl focus:ring-2 focus:ring-[#0F6B3A]/20 focus:border-[#0F6B3A] outline-none transition-all placeholder:text-[#9CA3AF] text-[#1F2621]" placeholder="Quotation / Sample / Question" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-[#6b7280] font-semibold uppercase tracking-wide">Message</label>
                    <textarea rows={4} value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} className="w-full px-4 py-3.5 bg-[#FAFAFA] border border-[#E5E1D8] rounded-xl focus:ring-2 focus:ring-[#0F6B3A]/20 focus:border-[#0F6B3A] outline-none transition-all resize-none placeholder:text-[#9CA3AF] text-[#1F2621]" placeholder="Tell us about your requirements: product type, wood species, size, quantity, etc." />
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-[#0F6B3A] to-[#124B34] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry Now
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Location */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#0F6B3A]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#8B5E3C]/5 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px" style={{ background: "#8B5E3C" }} />
              <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "#8B5E3C" }}>Visit Us</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1F2621] mb-4 leading-tight">
              Our <span style={{ color: "#0F6B3A" }}>Factory</span><br />Location
            </h2>
            <p className="text-lg text-[#6b7280] leading-relaxed max-w-xl">
              Strategically positioned in the heart of China&apos;s manufacturing hub with seamless access to major logistics networks and international shipping routes.
            </p>
          </div>
        </div>
        <div className="w-full px-[12.5%] pb-16 lg:pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-8 items-stretch">
            <div className="relative h-[500px] lg:h-[700px]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0!2d113.85!3d22.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU3JzAwLjAiTiAxMTPCsDUxJzAwLjAiRQ!5e0!3m2!1sen!2scn!4v1600000000000!5m2!1sen!2scn" className="w-full h-full border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-6 py-4 shadow-xl flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0F6B3A 0%, #124B34 100%)" }}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-[#9CA3AF] uppercase tracking-wider">Located in</p>
                  <p className="font-bold text-[#1F2621] text-lg">Dongguan, China</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[500px] lg:h-[700px] space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E5E1D8] flex-1 flex flex-col justify-center">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #0F6B3A 0%, #124B34 100%)" }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F2621] text-xl mb-3">Factory Address</h3>
                    <p className="text-[#6b7280] leading-relaxed">No.655 Houjie Section, Huanguan Expressway, Houjie Town, Dongguan City, Guangdong Province, China</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E5E1D8] flex-1 flex flex-col justify-center">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "#0F6B3A15" }}>
                    <svg className="w-8 h-8" style={{ color: "#0F6B3A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F2621] text-xl mb-3">Transportation</h3>
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-3 text-[#6b7280]"><span className="w-2.5 h-2.5 rounded-full" style={{ background: "#0F6B3A" }} /><span className="text-base">30 min from Shenzhen City</span></div>
                      <div className="flex items-center gap-3 text-[#6b7280]"><span className="w-2.5 h-2.5 rounded-full" style={{ background: "#0F6B3A" }} /><span className="text-base">60 min from Guangzhou City</span></div>
                      <div className="flex items-center gap-3 text-[#6b7280]"><span className="w-2.5 h-2.5 rounded-full" style={{ background: "#0F6B3A" }} /><span className="text-base">90 min from Hong Kong</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E5E1D8] flex-1 flex flex-col justify-center">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "#0F6B3A15" }}>
                    <svg className="w-8 h-8" style={{ color: "#0F6B3A" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F2621] text-xl mb-2">Working Hours</h3>
                    <p className="text-[#6b7280] text-base mb-1">Mon - Sat: 8:30 AM - 6:00 PM</p>
                    <p className="text-sm text-[#9CA3AF]">Sunday by appointment only</p>
                  </div>
                </div>
              </div>
              <a href="https://maps.google.com/?q=No.655+Houjie+Section+Dongguan+China" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#0F6B3A] to-[#124B34] rounded-2xl flex items-center justify-center gap-3 py-5 text-white font-bold text-base hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 lg:py-16 bg-[#FAFAFA]">
        <div className="w-full px-4 lg:px-8 xl:px-12">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0F6B3A]/10 text-[#0F6B3A] text-xs font-medium rounded-full mb-3">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Trusted Partners
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-2">50+ Global Partners</h2>
            <p className="text-sm text-[#6b7280] max-w-xl mx-auto">Leading furniture manufacturers and distributors worldwide</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 lg:gap-4 w-full">
            {[
              { name: "Dinggu", src: "/images/partners/dinggu.png" },
              { name: "HIGOLD", src: "/images/partners/higold.png" },
              { name: "TUT", src: "/images/partners/tut.png" },
              { name: "JUSEN", src: "/images/partners/jusen.png" },
              { name: "GND", src: "/images/partners/gnd.png" },
              { name: "HUTLON", src: "/images/partners/hutlon.png" },
            ].map((partner) => (
              <div key={partner.name} className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#E5E1D8]">
                <div className="aspect-[3/2] relative flex items-center justify-center">
                  <Image src={partner.src} alt={partner.name} fill className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/about" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm border-2 border-[#0F6B3A] text-[#0F6B3A] font-semibold rounded-lg hover:bg-[#0F6B3A] hover:text-white transition-all">
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
