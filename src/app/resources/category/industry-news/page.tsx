import T from "@/i18n/full-site-context";
import { Metadata } from "next";
import Link from "@/components/i18n/LocalizedLink";
import Image from "next/image";
import { getArticlesByCategory, type ArticleCategory } from "@/data/resources/articles";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Industry News",
  description: "Stay informed about wood industry trends, market updates, design innovations, and technical developments.",
  path: "/resources/category/industry-news",
});

const category: ArticleCategory = "Industry News";

export default function IndustryNewsPage() {
  const categoryArticles = getArticlesByCategory(category);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#F7F3EC] py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-[#6b7280]">
            <Link href="/" className="hover:text-[#0F6B3A]"><T>{"Home"}</T></Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/resources" className="hover:text-[#0F6B3A]"><T>{"Resources"}</T></Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1F2621] font-medium"><T>{"Industry News"}</T></span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#8B5E3C] via-[#6B4A2C] to-[#5C3D22] py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-white/10 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full text-sm text-white mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <T>{"Industry News\n            "}</T></span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              <T>{"Industry News\n            "}</T></h1>
            <p className="text-lg text-white/90">
              <T>{"Stay informed about wood industry trends, market updates, \n              design innovations, and technical developments.\n            "}</T></p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          {categoryArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryArticles.map((article, index) => (
                <article
                  key={article.id}
                  className={`group bg-white rounded-2xl overflow-hidden border border-[#E5E1D8] hover:shadow-lg transition-shadow ${
                    index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <Link href={`/resources/${article.slug}`}>
                    <div className="relative aspect-[16/10] bg-[#F7F3EC] overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-[#8B5E3C]/10 text-[#8B5E3C] text-xs font-medium rounded-full">
                          <T>{article.category}</T>
                        </span>
                        <span className="text-sm text-[#6b7280]">{article.date}</span>
                      </div>
                      <h2 className="text-xl font-bold text-[#1F2621] mb-3 group-hover:text-[#8B5E3C] transition-colors line-clamp-2">
                        <T>{article.title}</T>
                      </h2>
                      <p className="text-[#6b7280] text-sm line-clamp-3">
                        <T>{article.excerpt}</T>
                      </p>
                      <div className="mt-4 flex items-center text-[#8B5E3C] text-sm font-medium">
                        <T>{"Read More\n                        "}</T><svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#FDFBF7] rounded-2xl p-12 border border-[#E5E1D8] text-center">
                <svg className="w-16 h-16 text-[#8B5E3C]/40 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <h2 className="text-2xl font-bold text-[#1F2621] mb-4"><T>{"No Industry News Yet"}</T></h2>
                <p className="text-[#6b7280] mb-8 max-w-md mx-auto">
                  <T>{"We are preparing insightful articles about wood industry trends, \n                  market analysis, and design innovations.\n                "}</T></p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/resources" className="px-6 py-3 bg-[#8B5E3C] text-white rounded-full font-semibold hover:bg-[#6B4A2C] transition-colors">
                    <T>{"View All Resources\n                  "}</T></Link>
                  <Link href="/contact" className="px-6 py-3 border-2 border-[#8B5E3C] text-[#8B5E3C] rounded-full font-semibold hover:bg-[#8B5E3C] hover:text-white transition-colors">
                    <T>{"Contact Us\n                  "}</T></Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F7F3EC]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-4"><T>{"Want to Learn More?"}</T></h2>
            <p className="text-[#6b7280] mb-6">
              <T>{"Contact our team for product specifications, samples, or technical support.\n            "}</T></p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#8B5E3C] text-white rounded-full font-semibold hover:bg-[#6B4A2C] transition-colors"
            >
              <T>{"Contact Us\n            "}</T></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
