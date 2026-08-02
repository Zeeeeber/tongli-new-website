import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, getRelatedArticles } from "@/data/resources/articles";
import { JsonLd } from "@/components/seo/JsonLd";
import { createArticleMetadata } from "@/lib/seo/metadata";
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/site";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return createArticleMetadata({
    articleTitle: article.title,
    articleDescription: article.excerpt,
    articleImage: article.image,
    articleUrl: `/resources/${article.slug}`,
    author: article.author,
    publishedDate: article.date,
    category: article.category,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, 3);
  const articlePath = `/resources/${article.slug}`;
  const articleUrl = `${siteConfig.canonicalUrl}${articlePath}`;
  const structuredData = [
    getArticleSchema({
      headline: article.title,
      description: article.excerpt,
      image: `${siteConfig.canonicalUrl}${article.image}`,
      author: article.author,
      publishedDate: new Date(article.date).toISOString(),
      url: articleUrl,
    }),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Resources", url: "/resources" },
      { name: article.title, url: articlePath },
    ]),
  ];

  return (
    <>
      <JsonLd data={structuredData} />
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
            <span className="text-[#1F2621] font-medium truncate max-w-[200px]">{article.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <Link
              href={`/resources/category/${article.category.toLowerCase().replace(" ", "-")}`}
              className="inline-block px-4 py-1.5 bg-[#0F6B3A]/10 text-[#0F6B3A] text-sm font-medium rounded-full mb-6 hover:bg-[#0F6B3A]/20 transition-colors"
            >
              {article.category}
            </Link>

            {/* Title - H1 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2621] leading-tight mb-6">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#6b7280] mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{article.date}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#D1D5DB]"></span>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{article.author}</span>
              </div>
              {article.readTime && (
                <>
                  <span className="w-1 h-1 rounded-full bg-[#D1D5DB]"></span>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{article.readTime}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#F7F3EC]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg max-w-none prose-headings:text-[#1F2621] prose-headings:font-bold prose-p:text-[#4B5563] prose-p:leading-relaxed prose-a:text-[#0F6B3A] prose-a:no-underline hover:prose-a:underline prose-ul:text-[#4B5563] prose-li:text-[#4B5563] prose-strong:text-[#1F2621]"
              dangerouslySetInnerHTML={{ __html: article.content || article.excerpt }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-[#F7F3EC]">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-[#1F2621] mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  href={`/resources/${relatedArticle.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[16/10] bg-[#E8E4DB]">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block px-3 py-0.5 bg-[#0F6B3A]/10 text-[#0F6B3A] text-xs font-medium rounded-full mb-3">
                      {relatedArticle.category}
                    </span>
                    <h3 className="font-semibold text-[#1F2621] line-clamp-2 group-hover:text-[#0F6B3A] transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-[#6b7280] mt-2">{relatedArticle.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#8B5E3C] to-[#6B4A2C]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing Materials?</h2>
            <p className="text-white/80 mb-8">
              Our team of wood veneer experts is ready to help you find the perfect solution for your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-[#8B5E3C] rounded-lg font-semibold hover:bg-[#F7F3EC] transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
