import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1c1c1c] via-[#2a2a2a] to-[#1c1c1c] py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/70">
              Last updated: May 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-8 text-[#6b7280] leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4">Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you request a quote, 
                  request samples, or contact us through our website. This may include your name, company name, 
                  email address, phone number, and project details.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4">How We Use Your Information</h2>
                <p>
                  We use the information we collect to respond to your inquiries, provide quotations, 
                  send sample materials, process orders, and improve our services. We may also use your 
                  information to communicate with you about products and services that may interest you.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4">Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy or as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:info@tonglitimber.com" className="text-[#0F6B3A] hover:underline">
                    info@tonglitimber.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-[#1F2621] mb-4">
              Have Questions?
            </h2>
            <p className="text-[#6b7280] mb-6">
              Our team is ready to help with any inquiries.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#0F6B3A] text-white font-semibold rounded-full hover:bg-[#124B34] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
