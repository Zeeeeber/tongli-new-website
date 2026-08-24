import T from "@/i18n/full-site-context";
import Link from "@/components/i18n/LocalizedLink";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1c1c1c] via-[#2a2a2a] to-[#1c1c1c] py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              <T>{"Terms of Service\n            "}</T></h1>
            <p className="text-white/70">
              <T>{"Last updated: May 2026\n            "}</T></p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 text-[#6b7280] leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4"><T>{"Acceptance of Terms"}</T></h2>
                <p>
                  <T>{"By accessing and using this website, you accept and agree to be bound by the terms \n                  and provisions of this agreement. If you do not agree to abide by these terms, \n                  please do not use this website.\n                "}</T></p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4"><T>{"Product Information"}</T></h2>
                <p>
                  <T>{"We strive to display accurate product information, specifications, and pricing. \n                  However, we reserve the right to modify product details, specifications, and pricing \n                  without prior notice. Product images are for reference only; actual products may vary.\n                "}</T></p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4"><T>{"Orders and Quotations"}</T></h2>
                <p>
                  <T>{"All quotations are valid for the period specified in the quotation. Orders are subject \n                  to our confirmation. We reserve the right to cancel or modify orders under certain \n                  circumstances.\n                "}</T></p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4"><T>{"Shipping and Delivery"}</T></h2>
                <p>
                  <T>{"Delivery times are estimates only and may vary based on order quantity, customization \n                  requirements, and shipping destination. Shipping costs are calculated based on order \n                  volume and destination.\n                "}</T></p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4"><T>{"Payment Terms"}</T></h2>
                <p>
                  <T>{"Standard payment terms are 30% deposit before production and 70% balance before shipment. \n                  Other payment methods including Letter of Credit (LC) may be available upon request.\n                "}</T></p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4"><T>{"Intellectual Property"}</T></h2>
                <p>
                  <T>{"All content on this website, including text, graphics, logos, and images, is the \n                  property of Tongli Timber or its content suppliers and is protected by copyright laws.\n                "}</T></p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4"><T>{"Contact Us"}</T></h2>
                <p>
                  <T>{"If you have any questions about these Terms of Service, please contact us at"}</T>{' '}
                  <a href="mailto:tonglitimber@tongli-dg.com" className="text-[#0F6B3A] hover:underline">
                    <T>{"tonglitimber@tongli-dg.com\n                  "}</T></a>
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
              <T>{"Have Questions?\n            "}</T></h2>
            <p className="text-[#6b7280] mb-6">
              <T>{"Our team is ready to help with any inquiries.\n            "}</T></p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#0F6B3A] text-white font-semibold rounded-full hover:bg-[#124B34] transition-colors"
            >
              <T>{"Contact Us\n            "}</T></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
