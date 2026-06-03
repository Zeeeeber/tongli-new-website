/**
 * Resources/Articles Data
 * 
 * This file contains article data for the Resources/Blog section.
 * Data format is compatible with WordPress REST API response structure.
 * 
 * Future: Replace with WordPress API fetch when CMS is integrated.
 */

export type ArticleCategory = "Product News" | "Industry News" | "Company News";

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  category: ArticleCategory;
  date: string;
  author: string;
  image: string;
  slug: string;
  isFeatured?: boolean;
  readTime?: string;
}

export interface ResourceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

/**
 * Resource categories
 */
export const resourceCategories: ResourceCategory[] = [
  {
    id: "1",
    name: "Product News",
    slug: "product-news",
    description: "New products, technical guides, and recommendations",
  },
  {
    id: "2",
    name: "Industry News",
    slug: "industry-news",
    description: "Market trends and design innovations",
  },
  {
    id: "3",
    name: "Company News",
    slug: "company-news",
    description: "Company updates and certifications",
  },
];

/**
 * Articles
 */
export const articles: Article[] = [
  {
    id: 1,
    title: "Understanding Wood Veneer Panels: Types, Construction & Benefits",
    excerpt: "A comprehensive guide to wood veneer panels, covering engineered veneer, natural veneer, and how to choose the right panel for your furniture manufacturing needs.",
    category: "Product News",
    date: "May 10, 2026",
    author: "Tongli Timber",
    image: "/images/veneer-panels.jpg",
    slug: "understanding-wood-veneer-panels",
    isFeatured: true,
    readTime: "8 min read",
    content: `<p>Wood veneer panels are a cornerstone of modern furniture manufacturing, offering the beauty of natural wood at a fraction of the cost. This comprehensive guide covers everything you need to know about veneer panels.</p>

<h2>What Are Wood Veneer Panels?</h2>
<p>Wood veneer panels consist of a thin layer of real wood (veneer) bonded to a core material such as plywood, MDF, or particle board. This construction combines the aesthetic appeal of natural wood with the stability and cost-effectiveness of engineered substrates.</p>

<h2>Types of Wood Veneer</h2>
<p>There are two main categories of wood veneer used in panel construction:</p>
<ul>
<li><strong>Natural Wood Veneer:</strong> Sliced from real hardwood logs, featuring unique grain patterns and natural color variations.</li>
<li><strong>Engineered Wood Veneer:</strong> Produced by reconstituting wood fibers, offering consistent patterns and colors across sheets.</li>
</ul>

<h2>Benefits of Using Veneer Panels</h2>
<p>Veneer panels offer numerous advantages for furniture manufacturers and interior designers:</p>
<ul>
<li>Cost-effective alternative to solid wood</li>
<li>Environmental sustainability through efficient wood usage</li>
<li>Consistent quality and appearance</li>
<li>Excellent stability and resistance to warping</li>
<li>Wide variety of wood species and finishes</li>
</ul>

<h2>Choosing the Right Panel</h2>
<p>When selecting veneer panels for your project, consider factors such as the substrate type, veneer species, thickness, and finish requirements. Our team can help you find the perfect solution for your specific needs.</p>`,
  },
  {
    id: 2,
    title: "Natural Wood Veneer in Modern Interior Design Trends",
    excerpt: "Discover how natural wood veneer is transforming modern interiors with its warm aesthetics and sustainable appeal.",
    category: "Industry News",
    date: "May 8, 2026",
    author: "Tongli Timber",
    image: "/images/natural-veneer-interior.jpg",
    slug: "natural-wood-veneer-modern-interior-design",
    isFeatured: true,
    readTime: "6 min read",
    content: `<p>Natural wood veneer has emerged as a defining material in contemporary interior design, bringing warmth and organic beauty to spaces while supporting sustainable building practices.</p>

<h2>The Rise of Natural Materials</h2>
<p>As biophilic design principles gain prominence, designers increasingly incorporate natural wood veneer to create spaces that connect occupants with nature. The unique grain patterns and warm tones of natural veneer bring authenticity that synthetic materials cannot replicate.</p>

<h2>Popular Applications</h2>
<p>Natural wood veneer is being used in innovative ways across residential and commercial interiors:</p>
<ul>
<li>Feature walls and accent panels</li>
<li>Ceiling treatments and architectural elements</li>
<li>Furniture pieces and built-in cabinetry</li>
<li>Hospitality spaces creating warm, inviting atmospheres</li>
</ul>

<h2>Trending Wood Species</h2>
<p>Several wood species are particularly popular in current design trends:</p>
<ul>
<li><strong>White Oak:</strong> Versatile with subtle grain patterns</li>
<li><strong>Walnut:</strong> Rich, dark tones for luxury applications</li>
<li><strong>Ash:</strong> Light colors with distinctive grain</li>
<li><strong>Teak:</strong> Exceptional durability with golden hues</li>
</ul>

<h2>Sustainability Considerations</h2>
<p>Choosing FSC-certified natural wood veneer ensures responsible forest management while achieving the desired aesthetic. Our commitment to sustainable sourcing supports both environmental goals and project certifications.</p>`,
  },
  {
    id: 3,
    title: "Inside Tongli Timber: Our Commitment to Quality & Sustainability",
    excerpt: "Learn about our manufacturing processes, quality control standards, and environmental certifications.",
    category: "Company News",
    date: "May 5, 2026",
    author: "Tongli Timber",
    image: "/images/factory.jpg",
    slug: "tongli-timber-quality-sustainability",
    isFeatured: true,
    readTime: "5 min read",
    content: `<p>Since 1999, Tongli Timber has been dedicated to producing premium wood veneer panels while maintaining the highest standards of quality and environmental responsibility.</p>

<h2>Our Manufacturing Excellence</h2>
<p>Our state-of-the-art facility in Dongguan, China features advanced production lines for veneer slicing, lamination, and finishing. Every step of our manufacturing process is carefully controlled to ensure consistent quality.</p>

<h2>Quality Control Systems</h2>
<p>We implement comprehensive quality control at each stage:</p>
<ul>
<li>Raw material inspection and selection</li>
<li>In-process quality checks during production</li>
<li>Final product testing and certification</li>
<li>Continuous improvement based on feedback</li>
</ul>

<h2>Environmental Certifications</h2>
<p>Tongli Timber maintains several important certifications:</p>
<ul>
<li><strong>FSC Certification:</strong> Ensuring responsible forest management</li>
<li><strong>CE Marking:</strong> Meeting European safety and environmental standards</li>
<li><strong>SGS Testing:</strong> Independent verification of product quality</li>
</ul>

<h2>Our Promise</h2>
<p>We are committed to delivering premium wood veneer products that meet the exacting standards of our global customer base while minimizing our environmental footprint.</p>`,
  },
  {
    id: 4,
    title: "Natural Wood Veneer vs Engineered Veneer: Which Is Right for You?",
    excerpt: "Compare natural and engineered veneer to find the best option for your project requirements.",
    category: "Product News",
    date: "May 3, 2026",
    author: "Tongli Timber",
    image: "/images/veneer-comparison.jpg",
    slug: "natural-vs-engineered-veneer",
    readTime: "7 min read",
    content: `<p>Choosing between natural and engineered wood veneer is a fundamental decision for any furniture or interior project. Understanding the characteristics of each type helps make the right choice.</p>

<h2>Natural Wood Veneer Characteristics</h2>
<p>Natural veneer is sliced directly from hardwood logs, preserving the unique grain patterns and color variations that occur in nature. Each sheet is one-of-a-kind.</p>

<h3>Advantages:</h3>
<ul>
<li>Authentic wood grain and texture</li>
<li>Unique patterns in every sheet</li>
<li>Can be refinished multiple times</li>
<li>Premium aesthetic appeal</li>
</ul>

<h3>Considerations:</h3>
<ul>
<li>Color and pattern variations between sheets</li>
<li>Requires skilled handling and matching</li>
<li>Higher cost than engineered alternatives</li>
</ul>

<h2>Engineered Wood Veneer Characteristics</h2>
<p>Engineered veneer is manufactured by reconstituting wood fibers with pigments and binders, creating consistent patterns across all sheets.</p>

<h3>Advantages:</h3>
<ul>
<li>Uniform appearance throughout the project</li>
<li>Consistent color matching</li>
<li>More affordable pricing</li>
<li>Excellent for large-scale projects</li>
</ul>

<h3>Considerations:</h3>
<ul>
<li>Less authentic than natural veneer</li>
<li>Limited refinishing capability</li>
<li>Pattern repetition may be visible</li>
</ul>

<h2>Making the Choice</h2>
<p>Consider your project's specific needs: premium aesthetics may favor natural veneer, while large-scale commercial projects often benefit from the consistency of engineered veneer.</p>`,
  },
  {
    id: 5,
    title: "Decorative Wood Panel Trends for Hotel Interiors",
    excerpt: "Explore the latest trends in decorative wood panels for hospitality interior design projects.",
    category: "Industry News",
    date: "April 28, 2026",
    author: "Tongli Timber",
    image: "/images/hotel-interior.jpg",
    slug: "wood-panel-trends-hotel-interiors",
    readTime: "5 min read",
    content: `<p>The hospitality industry continues to embrace wood paneling as a key design element, creating warm and inviting spaces that guests remember.</p>

<h2>Current Design Directions</h2>
<p>Hotel interiors are seeing a blend of traditional craftsmanship and contemporary design, with wood panels playing a central role in creating distinctive atmospheres.</p>

<h2>Popular Applications</h2>
<p>Decorative wood panels are being used in various hotel applications:</p>
<ul>
<li><strong>Lobby feature walls:</strong> Creating dramatic first impressions</li>
<li><strong>Headboards:</strong> Adding texture and warmth to guest rooms</li>
<li><strong>Corridors:</strong> Guiding guests with natural aesthetics</li>
<li><strong>Restaurant and bar areas:</strong> Establishing brand identity</li>
</ul>

<h2>Trending Finishes</h2>
<p>Several finish options are particularly popular in hospitality design:</p>
<ul>
<li><strong>Smoked finishes:</strong> Creating rich, dramatic tones</li>
<li><strong>Natural oil finishes:</strong> Emphasizing wood's authentic beauty</li>
<li><strong>Matte lacquers:</strong> For contemporary, understated elegance</li>
<li><strong>3D textured panels:</strong> Adding visual depth and interest</li>
</ul>

<h2>Durability Requirements</h2>
<p>Hotel applications require panels that can withstand high traffic and maintain appearance over time. Our engineered panels are designed to meet these demanding requirements.</p>`,
  },
  {
    id: 6,
    title: "How to Choose Veneer Panels for Furniture Manufacturing",
    excerpt: "Essential tips for selecting the right veneer panels based on substrate, finish, and application.",
    category: "Product News",
    date: "April 25, 2026",
    author: "Tongli Timber",
    image: "/images/furniture-veneer.jpg",
    slug: "choose-veneer-panels-furniture",
    readTime: "6 min read",
    content: `<p>Selecting the appropriate veneer panel is crucial for furniture manufacturing success. Consider these key factors when making your selection.</p>

<h2>Understanding Substrate Options</h2>
<p>The core material beneath the veneer significantly impacts the panel's performance characteristics:</p>
<ul>
<li><strong>Plywood:</strong> Excellent stability and screw-holding capacity</li>
<li><strong>MDF:</strong> Smooth surface ideal for painting and thin veneer</li>
<li><strong>Particle Board:</strong> Cost-effective for flat-pack furniture</li>
<li><strong>Blockboard:</strong> Best for large panels requiring dimensional stability</li>
</ul>

<h2>Veneer Thickness Considerations</h2>
<p>Veneer thickness affects both appearance and durability:</p>
<ul>
<li><strong>0.5mm - 0.6mm:</strong> Standard for most applications</li>
<li><strong>0.6mm - 1.0mm:</strong> Better for edge finishing and refinishing</li>
<li><strong>Over 1.0mm:</strong> Specialty applications requiring heavy wear</li>
</ul>

<h2>Matching to Application</h2>
<p>Different furniture pieces have different requirements:</p>
<ul>
<li><strong>Cabinet doors:</strong> Focus on visual appeal and edge quality</li>
<li><strong>Table tops:</strong> Prioritize durability and scratch resistance</li>
<li><strong>Drawer sides:</strong> Balance cost and quality</li>
</ul>

<h2>Working with Suppliers</h2>
<p>Build relationships with suppliers who understand your quality requirements and can provide consistent product over time.</p>`,
  },
  {
    id: 7,
    title: "Tongli Timber Expands Production Capacity with New Equipment",
    excerpt: "Our latest manufacturing investment ensures faster delivery and improved quality control.",
    category: "Company News",
    date: "April 20, 2026",
    author: "Tongli Timber",
    image: "/images/new-equipment.jpg",
    slug: "tongli-timber-production-expansion",
    readTime: "4 min read",
    content: `<p>Tongli Timber is pleased to announce a significant expansion of our manufacturing capabilities with the installation of new production equipment.</p>

<h2>Investment Details</h2>
<p>Our latest investment includes state-of-the-art machinery for veneer processing and panel lamination, designed to increase capacity while maintaining our quality standards.</p>

<h2>Production Improvements</h2>
<p>The new equipment brings several key improvements:</p>
<ul>
<li><strong>Increased throughput:</strong> 30% higher production capacity</li>
<li><strong>Enhanced precision:</strong> Improved thickness control and consistency</li>
<li><strong>Faster turnaround:</strong> Reduced lead times for standard orders</li>
<li><strong>Better quality:</strong> More consistent finished products</li>
</ul>

<h2>Environmental Benefits</h2>
<p>The new machinery also features improved energy efficiency and reduced waste, supporting our sustainability commitments.</p>

<h2>What This Means for Customers</h2>
<p>Our expanded capabilities mean we can better serve our growing customer base with faster delivery times and improved product quality. Contact our sales team to discuss your upcoming project requirements.</p>`,
  },
  {
    id: 8,
    title: "Wood Veneer Panel vs Melamine Board: A Complete Comparison",
    excerpt: "Understand the key differences between veneer panels and melamine boards for your projects.",
    category: "Product News",
    date: "April 15, 2026",
    author: "Tongli Timber",
    image: "/images/veneer-vs-melamine.jpg",
    slug: "veneer-panel-vs-melamine-board",
    readTime: "6 min read",
    content: `<p>Both wood veneer panels and melamine boards offer distinct advantages for furniture and interior applications. Understanding these differences helps make informed project decisions.</p>

<h2>Material Composition</h2>
<p><strong>Veneer Panels:</strong> Feature a layer of real wood veneer bonded to a substrate, preserving natural wood's authentic appearance and texture.</p>
<p><strong>Melamine Boards:</strong> Have a paper-based decorative layer impregnated with melamine resin, fused to the substrate under heat and pressure.</p>

<h2>Aesthetic Considerations</h2>
<p>Veneer panels offer:</p>
<ul>
<li>Authentic wood grain and natural texture</li>
<li>Unique patterns in each sheet</li>
<li>Premium, high-end appearance</li>
<li>Can be refinished if damaged</li>
</ul>

<p>Melamine boards provide:</p>
<ul>
<li>Consistent color and pattern</li>
<li>Wide range of solid colors and designs</li>
<li>Excellent color matching across large projects</li>
<li>No natural wood variations</li>
</ul>

<h2>Durability and Maintenance</h2>
<p>Veneer panels may require occasional maintenance but can be refinished. Melamine surfaces are highly durable and easy to clean but cannot be refinished if damaged.</p>

<h2>Cost Considerations</h2>
<p>Veneer panels generally have a higher material cost but offer premium aesthetics. Melamine boards are more economical and work well for budget-conscious projects.</p>

<h2>Making the Right Choice</h2>
<p>Consider your project's priorities: premium aesthetics favor veneer, while consistency and budget may point to melamine.</p>`,
  },
  {
    id: 9,
    title: "Sustainable Wood Sourcing: Our Environmental Commitment",
    excerpt: "How Tongli Timber ensures responsible forest management and sustainable material sourcing.",
    category: "Industry News",
    date: "April 10, 2026",
    author: "Tongli Timber",
    image: "/images/sustainable-wood.jpg",
    slug: "sustainable-wood-sourcing",
    readTime: "5 min read",
    content: `<p>Environmental responsibility is central to Tongli Timber's operations. We are committed to sustainable wood sourcing and responsible manufacturing practices.</p>

<h2>Our Sourcing Principles</h2>
<p>We work exclusively with suppliers who share our commitment to environmental stewardship, prioritizing FSC-certified sources and legally harvested timber.</p>

<h2>FSC Certification</h2>
<p>Our FSC certification ensures:</p>
<ul>
<li>Wood sourced from responsibly managed forests</li>
<li>Protection of biodiversity and wildlife habitats</li>
<li>Support for forest worker rights and communities</li>
<li>Traceability throughout the supply chain</li>
</ul>

<h2>Manufacturing Efficiency</h2>
<p>Our production processes are designed to minimize waste and maximize resource utilization:</p>
<ul>
<li>Efficient cutting patterns reduce material waste</li>
<li>Wood byproducts are recycled into other products</li>
<li>Energy-efficient equipment reduces carbon footprint</li>
<li>Water recycling systems minimize consumption</li>
</ul>

<h2>Supporting Green Building</h2>
<p>Our products contribute to green building certifications such as LEED and BREEAM, helping your projects achieve environmental standards.</p>

<h2>Continuous Improvement</h2>
<p>We regularly review and improve our environmental practices, setting targets for reduced consumption and waste across all operations.</p>`,
  },
];

/**
 * Get articles by category
 */
export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter((a) => a.category === category);
}

/**
 * Get featured articles
 */
export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.isFeatured);
}

/**
 * Get article by slug
 */
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/**
 * Get related articles (excluding current article)
 */
export function getRelatedArticles(currentSlug: string, limit: number = 3): Article[] {
  return articles
    .filter((a) => a.slug !== currentSlug)
    .slice(0, limit);
}

/**
 * Get all article slugs (for sitemap)
 */
export function getAllArticleSlugs(): string[] {
  return articles.map((a) => `/resources/${a.slug}`);
}
