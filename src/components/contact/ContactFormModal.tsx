"use client";

import { useState } from "react";

export interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#FDFBF7] hover:bg-[#E5E1D8] transition-colors"
        >
          <svg className="w-5 h-5 text-[#1F2621]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-[#0F6B3A] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1F2621] mb-2">Thank You!</h3>
            <p className="text-[#6b7280] mb-4">Your inquiry has been submitted. We will respond within 24 hours.</p>
            <button onClick={onClose} className="px-6 py-2 bg-[#0F6B3A] text-white rounded-full hover:bg-[#124B34] transition-colors">
              Close
            </button>
          </div>
        ) : (
          <div className="p-8">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-2">Contact Us</h2>
            <p className="text-[#6b7280] mb-6">Fill in the form below and we will respond shortly.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1F2621] mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-[#E5E1D8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F6B3A] focus:border-transparent transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1F2621] mb-1">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-[#E5E1D8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F6B3A] focus:border-transparent transition-all text-sm"
                    placeholder="+86 ..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1F2621] mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E5E1D8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F6B3A] focus:border-transparent transition-all text-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1F2621] mb-1">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E5E1D8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F6B3A] focus:border-transparent transition-all text-sm"
                  placeholder="What's your inquiry about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1F2621] mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E5E1D8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0F6B3A] focus:border-transparent transition-all text-sm resize-none"
                  placeholder="Tell us your requirements..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#0F6B3A] text-white rounded-xl font-semibold hover:bg-[#124B34] transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : "Submit Inquiry"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
