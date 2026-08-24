import { articles } from "@/data/resources/articles";
import { localeDirections, type Locale } from "@/i18n/config";
import { resourcesPageCopy } from "@/i18n/core-page-copy";
import { ResourcesClient } from "./ResourcesClient";

const categories = ["All", "Product News", "Industry News", "Company News"] as const;

export function ResourcesPageContent({ locale }: { locale: Locale }) {
  const copy = resourcesPageCopy[locale];

  return (
    <div lang={locale} dir={localeDirections[locale]}>
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="container-page relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {copy.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              {copy.description}
            </p>
            <a
              href="#articles"
              className="inline-flex items-center px-8 py-3 bg-white text-primary-dark font-semibold rounded-full hover:bg-beige transition-colors"
            >
              {copy.browseArticles}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div id="articles">
        <ResourcesClient articles={articles} categories={[...categories]} locale={locale} />
      </div>
    </div>
  );
}
