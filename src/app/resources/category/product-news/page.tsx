import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { articles, getArticlesByCategory, type ArticleCategory } from "@/data/resources/articles";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Product News",
  description: "Stay updated with our latest product releases, new wood species additions, technical guides, and product recommendations.",
  path: "/resources/category/product-news",
});

const category: ArticleCategory = "Product News";

export default function ProductNewsPage() {
  const categoryArticles = getArticlesByCategory(category);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#F7F3EC] py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-[#6b7280]">
            <Link href="/" className="hover:text-[#0F6B3A]">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/resources" className="hover:text-[#0F6B3A]">Resources</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1F2621] font-medium">Product News</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F6B3A] via-[#124B34] to-[#0F5C33] py-16 lg:py-20 overflow-hidden">
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
              Product News
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Product News
            </h1>
            <p className="text-lg text-white/90">
              Stay updated with our latest product releases, new wood species additions, 
              technical guides, and product recommendations.
            </p>
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
                        <span className="px-3 py-1 bg-[#0F6B3A]/10 text-[#0F6B3A] text-xs font-medium rounded-full">
                          {article.category}
                        </span>
                        <span className="text-sm text-[#6b7280]">{article.date}</span>
                      </div>
                      <h2 className="text-xl font-bold text-[#1F2621] mb-3 group-hover:text-[#0F6B3A] transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-[#6b7280] text-sm line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 flex items-center text-[#0F6B3A] text-sm font-medium">
                        Read More
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-16 h-16 text-[#0F6B3A]/40 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <h2 className="text-2xl font-bold text-[#1F2621] mb-4">No Product News Yet</h2>
                <p className="text-[#6b7280] mb-8 max-w-md mx-auto">
                  We are preparing valuable content about new products, wood species guides, 
                  and technical recommendations for you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/resources" className="px-6 py-3 bg-[#0F6B3A] text-white rounded-full font-semibold hover:bg-[#124B34] transition-colors">
                    View All Resources
                  </Link>
                  <Link href="/contact" className="px-6 py-3 border-2 border-[#0F6B3A] text-[#0F6B3A] rounded-full font-semibold hover:bg-[#0F6B3A] hover:text-white transition-colors">
                    Contact Us
                  </Link>
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
            <h2 className="text-2xl font-bold text-[#1F2621] mb-4">Want to Learn More?</h2>
            <p className="text-[#6b7280] mb-6">
              Contact our team for product specifications, samples, or technical support.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#0F6B3A] text-white rounded-full font-semibold hover:bg-[#124B34] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
