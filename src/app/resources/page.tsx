import { Metadata } from "next";
import { articles } from "@/data/resources/articles";
import { ResourcesClient } from "@/components/resources/ResourcesClient";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Wood Veneer Knowledge & Resources",
  description: "Practical articles about wood veneer panels, natural veneer, engineered veneer, decorative panels and related topics.",
});

const categories = ["All", "Product News", "Industry News", "Company News"] as const;

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-white/10 blur-3xl"></div>
        </div>
        
        <div className="container-page relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Wood Veneer Knowledge & Resources
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Practical articles about wood veneer panels, natural veneer, engineered veneer, 
              decorative panels and related topics.
            </p>
            <a
              href="#articles"
              className="inline-flex items-center px-8 py-3 bg-white text-primary-dark font-semibold rounded-full hover:bg-beige transition-colors"
            >
              Browse Articles
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <div id="articles">
        <ResourcesClient articles={articles} categories={[...categories]} />
      </div>
    </>
  );
}
