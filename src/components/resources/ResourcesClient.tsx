"use client";

import { useState } from "react";
import Link from "@/components/i18n/LocalizedLink";
import type { Article } from "@/data/resources/articles";
import { getSiteLink, type Locale } from "@/i18n/config";
import { resourcesPageCopy } from "@/i18n/core-page-copy";

interface ResourcesClientProps {
  articles: Article[];
  categories: string[];
  locale: Locale;
}

export function ResourcesClient({ articles, categories, locale }: ResourcesClientProps) {
  const copy = resourcesPageCopy[locale];
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const featuredArticles = articles.filter((a) => a.isFeatured).slice(0, 3);

  const filteredArticles = articles
    .filter((a) => !a.isFeatured)
    .filter((a) => activeCategory === "All" || a.category === activeCategory);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  return (
    <div className="bg-ivory min-h-screen">
      {/* Category Tabs */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-beige py-4">
        <div className="container-page">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 md:px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-charcoal border border-beige hover:border-primary hover:text-primary"
                }`}
              >
                {copy.categoryLabels[cat] ?? cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {activeCategory === "All" && (
        <section className="py-12 md:py-16">
          <div className="container-page">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-primary rounded-full"></span>
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">{copy.featuredArticles}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} locale={locale} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles */}
      <section className="pb-16">
        <div className="container-page">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1 h-8 bg-primary rounded-full"></span>
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal">
              {activeCategory === "All" ? copy.latestArticles : (copy.categoryLabels[activeCategory] ?? activeCategory)}
            </h2>
          </div>
          
          {visibleArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} locale={locale} />
                ))}
              </div>
              
              {hasMore && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="px-8 py-3 bg-white text-primary font-semibold rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    {copy.loadMore}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted text-lg">{copy.noArticles}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark py-16">
        <div className="container-page">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{copy.needHelp}</h2>
            <p className="text-white/80 mb-8">
              {copy.helpDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={getSiteLink("/contact", locale)}
                className="inline-flex items-center px-6 py-3 bg-white text-primary-dark font-semibold rounded-lg hover:bg-beige transition-colors"
              >
                {copy.contactTongli}
              </Link>
              <Link
                href={getSiteLink("/samples", locale)}
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                {copy.requestSamples}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArticleCard({ article, locale }: { article: Article; locale: Locale }) {
  const copy = resourcesPageCopy[locale];
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-beige">
      <div className="aspect-[16/10] overflow-hidden">
        <div className="h-full w-full bg-gradient-to-br from-primary/10 to-primary-dark/20 flex items-center justify-center">
          <div className="text-center text-primary/40">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
            {copy.categoryLabels[article.category] ?? article.category}
          </span>
          <span className="text-xs text-muted">{article.date}</span>
        </div>
        <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-muted line-clamp-2 mb-3">{article.excerpt}</p>
        <Link
          href={`/resources/${article.slug}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors"
        >
          {copy.readMore}
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
