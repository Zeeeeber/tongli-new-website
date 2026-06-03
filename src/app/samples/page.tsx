import Link from "next/link";

export default function SamplesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F6B3A] via-[#124B34] to-[#0F5C33] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-white/10 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Request Wood Veneer Samples
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Get free samples of our wood veneer panels, natural wood veneer, engineered veneer, and decorative boards. 
              Check quality before placing bulk orders.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact?type=sample"
                className="inline-flex items-center px-8 py-4 bg-white text-[#0F6B3A] font-semibold rounded-full hover:bg-beige transition-colors"
              >
                Contact Us for Samples
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Send Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-8 text-center">
              Sample Service Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#FDFBF7] rounded-2xl p-8 border border-[#E5E1D8]">
                <h3 className="text-lg font-bold text-[#1F2621] mb-4">Sample Types Available</h3>
                <ul className="space-y-3 text-[#6b7280]">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0F6B3A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Natural Wood Veneer Sheets
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0F6B3A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Engineered Wood Veneer
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0F6B3A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Wood Veneer Panels
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0F6B3A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Melamine Faced Boards
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0F6B3A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Veneer Edge Banding
                  </li>
                </ul>
              </div>

              <div className="bg-[#FDFBF7] rounded-2xl p-8 border border-[#E5E1D8]">
                <h3 className="text-lg font-bold text-[#1F2621] mb-4">How to Request</h3>
                <ol className="space-y-4 text-[#6b7280]">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#0F6B3A] text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0">1</span>
                    <span>Contact us with your requirements (product type, wood species, specifications)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#0F6B3A] text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0">2</span>
                    <span>We will prepare relevant samples based on your needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#0F6B3A] text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0">3</span>
                    <span>Samples will be sent to you via international express (shipping cost may apply)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#0F6B3A] text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0">4</span>
                    <span>Evaluate the samples and provide feedback</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-4">
              Ready to Request Samples?
            </h2>
            <p className="text-[#6b7280] mb-8">
              Tell us about your project requirements and we will help you select the right samples.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact?type=sample"
                className="inline-flex items-center px-8 py-4 bg-[#0F6B3A] text-white font-semibold rounded-full hover:bg-[#124B34] transition-colors"
              >
                Request Samples
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-4 border-2 border-[#0F6B3A] text-[#0F6B3A] font-semibold rounded-full hover:bg-[#0F6B3A] hover:text-white transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
