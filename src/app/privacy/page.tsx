import T from "@/i18n/full-site-context";
import Link from "@/components/i18n/LocalizedLink";
import { AnalyticsConsentSettings } from "@/components/analytics/AnalyticsConsentSettings";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1c1c1c] via-[#2a2a2a] to-[#1c1c1c] py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              <T>{"Privacy Policy\n            "}</T></h1>
            <p className="text-white/70">
              <T>{"Last updated: August 2026\n            "}</T></p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-8 text-[#6b7280] leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4"><T>{"Information We Collect"}</T></h2>
                <p>
                  <T>{"We collect information you choose to provide when you contact us by email, phone, or WhatsApp. This may include your name, company name, email address, phone number, and project details. The Tongli Timber website does not currently use an online inquiry form.\n                "}</T></p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4"><T>{"Analytics and Cookies"}</T></h2>
                <p>
                  <T>{"With your permission, we use Google Analytics to understand which pages and product categories visitors find useful. We measure page visits and clicks on email, phone, WhatsApp, and sample-request links. We do not send your contact details, message text, or inquiry content to Google Analytics. Analytics does not load unless you accept analytics cookies.\n                "}</T></p>
                <AnalyticsConsentSettings />
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4"><T>{"How We Use Your Information"}</T></h2>
                <p>
                  <T>{"We use the information we collect to respond to your inquiries, provide quotations, \n                  send sample materials, process orders, and improve our services. We may also use your \n                  information to communicate with you about products and services that may interest you.\n                "}</T></p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4"><T>{"Information Sharing"}</T></h2>
                <p>
                  <T>{"We do not sell, trade, or otherwise transfer your personal information to third parties \n                  without your consent, except as described in this policy or as required by law.\n                "}</T></p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4"><T>{"Data Security"}</T></h2>
                <p>
                  <T>{"We implement appropriate security measures to protect your personal information against \n                  unauthorized access, alteration, disclosure, or destruction.\n                "}</T></p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#1F2621] mb-4"><T>{"Contact Us"}</T></h2>
                <p>
                  <T>{"If you have any questions about this Privacy Policy, please contact us at"}</T>{' '}
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
