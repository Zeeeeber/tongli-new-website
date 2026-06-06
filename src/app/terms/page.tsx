import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1c1c1c] via-[#2a2a2a] to-[#1c1c1c] py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Terms of Service
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
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 text-[#6b7280] leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4">Acceptance of Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms 
                  and provisions of this agreement. If you do not agree to abide by these terms, 
                  please do not use this website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4">Product Information</h2>
                <p>
                  We strive to display accurate product information, specifications, and pricing. 
                  However, we reserve the right to modify product details, specifications, and pricing 
                  without prior notice. Product images are for reference only; actual products may vary.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4">Orders and Quotations</h2>
                <p>
                  All quotations are valid for the period specified in the quotation. Orders are subject 
                  to our confirmation. We reserve the right to cancel or modify orders under certain 
                  circumstances.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4">Shipping and Delivery</h2>
                <p>
                  Delivery times are estimates only and may vary based on order quantity, customization 
                  requirements, and shipping destination. Shipping costs are calculated based on order 
                  volume and destination.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4">Payment Terms</h2>
                <p>
                  Standard payment terms are 30% deposit before production and 70% balance before shipment. 
                  Other payment methods including Letter of Credit (LC) may be available upon request.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4">Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and images, is the 
                  property of Tongli Timber or its content suppliers and is protected by copyright laws.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4">Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at{' '}
                  <a href="mailto:tonglitimber@tongli-dg.com" className="text-[#0F6B3A] hover:underline">
                    tonglitimber@tongli-dg.com
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
