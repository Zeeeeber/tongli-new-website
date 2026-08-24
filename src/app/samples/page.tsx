import Link from "@/components/i18n/LocalizedLink";
import { getSiteLink, localeDirections, type Locale } from "@/i18n/config";
import { samplesPageCopy } from "@/i18n/core-page-copy";

export function SamplesPageContent({ locale }: { locale: Locale }) {
  const copy = samplesPageCopy[locale];
  const contactHref = getSiteLink("/contact", locale);

  return (
    <div className="min-h-screen bg-white" lang={locale} dir={localeDirections[locale]}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F6B3A] via-[#124B34] to-[#0F5C33] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-white/10 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {copy.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              {copy.intro}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`${contactHref}?type=sample`}
                className="inline-flex items-center px-8 py-4 bg-white text-[#0F6B3A] font-semibold rounded-full hover:bg-beige transition-colors"
              >
                {copy.contactSamples}
              </Link>
              <Link
                href={contactHref}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                {copy.sendInquiry}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-8 text-center">
              {copy.serviceInfo}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#FDFBF7] rounded-2xl p-8 border border-[#E5E1D8]">
                <h3 className="text-lg font-bold text-[#1F2621] mb-4">{copy.typesTitle}</h3>
                <ul className="space-y-3 text-[#6b7280]">
                  {copy.sampleTypes.map((sampleType) => (
                    <li key={sampleType} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#0F6B3A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {sampleType}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#FDFBF7] rounded-2xl p-8 border border-[#E5E1D8]">
                <h3 className="text-lg font-bold text-[#1F2621] mb-4">{copy.howToRequest}</h3>
                <ol className="space-y-4 text-[#6b7280]">
                  {copy.steps.map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-[#0F6B3A] text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0">{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
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
              {copy.ctaTitle}
            </h2>
            <p className="text-[#6b7280] mb-8">
              {copy.ctaDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={`${contactHref}?type=sample`}
                className="inline-flex items-center px-8 py-4 bg-[#0F6B3A] text-white font-semibold rounded-full hover:bg-[#124B34] transition-colors"
              >
                {copy.requestSamples}
              </Link>
              <Link
                href={getSiteLink("/products", locale)}
                className="inline-flex items-center px-8 py-4 border-2 border-[#0F6B3A] text-[#0F6B3A] font-semibold rounded-full hover:bg-[#0F6B3A] hover:text-white transition-colors"
              >
                {copy.viewProducts}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function SamplesPage() {
  return <SamplesPageContent locale="en" />;
}
