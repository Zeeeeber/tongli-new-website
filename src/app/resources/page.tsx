"use client";

import { useState } from "react";

// Types
interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: "Product News" | "Industry News" | "Company News";
  date: string;
  author: string;
  image: string;
  isFeatured?: boolean;
}

// Mock data - In production, this would come from WordPress API
const articles: Article[] = [
  {
    id: 1,
    title: "Understanding Wood Veneer Panels: Types, Construction & Benefits",
    excerpt: "A comprehensive guide to wood veneer panels, covering engineered veneer, natural veneer, and how to choose the right panel for your furniture manufacturing needs.",
    category: "Product News",
    date: "May 10, 2026",
    author: "Tongli Timber",
    image: "/images/veneer-panels.jpg",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Natural Wood Veneer in Modern Interior Design Trends",
    excerpt: "Discover how natural wood veneer is transforming modern interiors with its warm aesthetics and sustainable appeal.",
    category: "Industry News",
    date: "May 8, 2026",
    author: "Tongli Timber",
    image: "/images/natural-veneer-interior.jpg",
    isFeatured: true,
  },
  {
    id: 3,
    title: "Inside Tongli Timber: Our Commitment to Quality & Sustainability",
    excerpt: "Learn about our manufacturing processes, quality control standards, and environmental certifications.",
    category: "Company News",
    date: "May 5, 2026",
    author: "Tongli Timber",
    image: "/images/factory.jpg",
    isFeatured: true,
  },
  {
    id: 4,
    title: "Natural Wood Veneer vs Engineered Veneer: Which Is Right for You?",
    excerpt: "Compare natural and engineered veneer to find the best option for your project requirements.",
    category: "Product News",
    date: "May 3, 2026",
    author: "Tongli Timber",
    image: "/images/veneer-comparison.jpg",
  },
  {
    id: 5,
    title: "Decorative Wood Panel Trends for Hotel Interiors",
    excerpt: "Explore the latest trends in decorative wood panels for hospitality interior design projects.",
    category: "Industry News",
    date: "April 28, 2026",
    author: "Tongli Timber",
    image: "/images/hotel-interior.jpg",
  },
  {
    id: 6,
    title: "How to Choose Veneer Panels for Furniture Manufacturing",
    excerpt: "Essential tips for selecting the right veneer panels based on substrate, finish, and application.",
    category: "Product News",
    date: "April 25, 2026",
    author: "Tongli Timber",
    image: "/images/furniture-veneer.jpg",
  },
  {
    id: 7,
    title: "Tongli Timber Expands Production Capacity with New Equipment",
    excerpt: "Our latest manufacturing investment ensures faster delivery and improved quality control.",
    category: "Company News",
    date: "April 20, 2026",
    author: "Tongli Timber",
    image: "/images/new-equipment.jpg",
  },
  {
    id: 8,
    title: "Wood Veneer Panel vs Melamine Board: A Complete Comparison",
    excerpt: "Understand the key differences between veneer panels and melamine boards for your projects.",
    category: "Product News",
    date: "April 15, 2026",
    author: "Tongli Timber",
    image: "/images/veneer-vs-melamine.jpg",
  },
  {
    id: 9,
    title: "Sustainable Wood Sourcing: Our Environmental Commitment",
    excerpt: "How Tongli Timber ensures responsible forest management and sustainable material sourcing.",
    category: "Industry News",
    date: "April 10, 2026",
    author: "Tongli Timber",
    image: "/images/sustainable-wood.jpg",
  },
];

const categories = ["All", "Product News", "Industry News", "Company News"] as const;

// Featured Article Card Component
function FeaturedCard({ article }: { article: Article }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-beige">
      <div className="aspect-[16/9] overflow-hidden">
        <div className="h-full w-full bg-gradient-to-br from-primary/10 to-primary-dark/20 flex items-center justify-center">
          <div className="text-center text-primary/40">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
            {article.category}
          </span>
          <span className="text-sm text-muted">{article.date}</span>
        </div>
        <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-muted text-sm mb-4 line-clamp-3">{article.excerpt}</p>
        <a
          href={`/resources/${article.title.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
        >
          Read More
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// Regular Article Card Component
function ArticleCard({ article }: { article: Article }) {
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
            {article.category}
          </span>
          <span className="text-xs text-muted">{article.date}</span>
        </div>
        <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-muted line-clamp-2 mb-3">{article.excerpt}</p>
        <a
          href={`/resources/${article.title.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors"
        >
          Read More
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// Inquiry Form Component
function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-primary-dark py-16">
      <div className="container-page">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help Choosing Materials?</h2>
          <p className="text-white/80 mb-8">
            Tell us your application, substrate, wood species, surface style and quantity. 
            Tongli can help recommend suitable veneer panel or decorative board options.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-dark font-semibold rounded-lg hover:bg-beige transition-colors"
            >
              Contact Tongli
            </a>
            <a
              href="/samples"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Request Samples
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const featuredArticles = articles.filter((a) => a.isFeatured).slice(0, 3);

  const filteredArticles = articles
    .filter((a) => !a.isFeatured)
    .filter((a) => activeCategory === "All" || a.category === activeCategory);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  return (
    <div className="bg-ivory min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-white/10 blur-3xl"></div>
        </div>
        
        <div className="container-page relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Wood Veneer Knowledge & Resources
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up animation-delay-100">
              Practical articles about wood veneer panels, natural veneer, engineered veneer, 
              decorative panels and related topics.
            </p>
            <a
              href="#articles"
              className="inline-flex items-center px-8 py-3 bg-white text-primary-dark font-semibold rounded-full hover:bg-beige transition-colors animate-fade-in-up animation-delay-200"
            >
              Browse Articles
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section id="articles" className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-beige py-4">
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
                {cat}
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
              <h2 className="text-2xl md:text-3xl font-bold text-charcoal">Featured Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredArticles.map((article) => (
                <FeaturedCard key={article.id} article={article} />
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
              {activeCategory === "All" ? "Latest Articles" : activeCategory}
            </h2>
          </div>
          
          {visibleArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
              
              {hasMore && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                    className="px-8 py-3 bg-white text-primary font-semibold rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    Load More Articles
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <InquiryForm />
    </div>
  );
}
