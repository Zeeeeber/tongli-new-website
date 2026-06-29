"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ContactFormModal } from "@/components/contact/ContactFormModal";
import { woodVeneerPanelProducts, type WoodVeneerPanelProduct } from "@/data/products/wood-veneer-panel-products";

interface WoodVeneerPanelDetailTemplateProps {
  product: WoodVeneerPanelProduct;
  slug: string;
}

type WoodPanelSection = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  pointsLabel: string;
  points: string[];
  cta?: string;
  image: string;
  alt: string;
  reverse: boolean;
  bg: string;
};

const defaultFaqs = [
  { q: "What payment terms do you accept?", a: "Payment terms: TT in advance (30% of deposit before production and 70% balance before shipment), banktransfer, LC etc. Please note we do EXW/FOB/CNF/CIF/DDU/DDP." },
  { q: "What is the average lead time?", a: "It depends on the product type and order quantity. Usually we can ship within 7 days for normal orders after receiving full payment. But for large orders, we need about 15 to 20 days." },
  { q: "Can you supply the relevant documentation?", a: "Yes, we can provide most documentation including Certificate of Origin, Phytosanitary Certificate, Bill of Lading, Commercial Invoice, Packing List, etc." },
  { q: "What is your main customer group?", a: "Our main customers are fancy plywood wholesalers, furniture factories, door factories, whole-house customization factories, cabinet production enterprises, hotel construction and decoration / real estate decoration, and so on." },
  { q: "How can we make a deal easily if I have a specific sample in hand?", a: "You send us your sample abroad and tell us your specific requirements. Then we produce a relevant sample according to yours with quotation. And then we send you our sample to your country for your reference and confirmation." },
];

const defaultRelatedProducts = [
  {
    name: "Walnut Veneer Plywood",
    code: "WVP-WN-001",
    species: "Walnut Veneer",
    cut: "Wood Veneer Panel",
    href: "/products/wood-veneer-panels/walnut-veneer-plywood",
    gradient: "from-[#8B6F47] to-[#6B5337]",
  },
  {
    name: "Ash Veneer MDF Panel",
    code: "WVP-AS-001",
    species: "Ash Veneer",
    cut: "Wood Veneer Panel",
    href: "/products/wood-veneer-panels/ash-veneer-mdf-panel",
    gradient: "from-[#D8C4A8] to-[#B89D7C]",
  },
  {
    name: "Teak Veneer Decorative Panel",
    code: "WVP-TK-001",
    species: "Teak Veneer",
    cut: "Wood Veneer Panel",
    href: "/products/wood-veneer-panels/teak-veneer-decorative-panel",
    gradient: "from-[#B88A5A] to-[#8F6842]",
  },
  {
    name: "Sapele Veneer Plywood",
    code: "WVP-SP-001",
    species: "Sapele Veneer",
    cut: "Wood Veneer Panel",
    href: "/products/wood-veneer-panels/sapele-veneer-plywood",
    gradient: "from-[#A86F55] to-[#7E4F3B]",
  },
];

const detailedSpecificationRows = [
  { label: "Brand Name", value: "TONGLI" },
  {
    label: "Product Name",
    value: "Wood Veneer Panels / Veneer Board / Veneer Faced Panels / Veneer Plywood / Veneer MDF / Wood Veneer Decorative Panels / Fancy Plywood / Veneer Wall Panels",
  },
  {
    label: "Face Veneer",
    value: [
      {
        index: "1.",
        title: "Natural Wood Veneer",
        description: "Poplar / Pine / Hardwood, Red Oak / White Oak, Ash, Sapele, Teak, Maple, Cherry, Birch, Black Walnut, Wenge, Elm, etc.",
      },
      {
        index: "2.",
        title: "Engineered Wood Veneer / Recon Wood Veneer",
        description: "Over 300 different kinds to choose.",
      },
      {
        index: "3.",
        title: "Dyed Wood Veneer",
        description: "All natural veneers can be dyed to the colors you want.",
      },
      {
        index: "4.",
        title: "Smoked Wood Veneer",
        description: "Smoked Oak, Smoked Eucalyptus, etc.",
      },
    ],
  },
  {
    label: "Panel Types",
    value: "Veneered Plain MDF / Veneered Moisture-resistant MDF / Veneered MR MDF / Veneered Flame Retardant MDF / Veneered FR MDF / Veneered Blockboard / Veneered Plywood",
  },
  {
    label: "Dimension",
    value: "4x8ft, 4x9ft, 4x10ft, 4x11ft, 4x12ft / 2440x1220mm, 2600x1220mm, 2800x1220mm, 3050x1220mm, 3200x1220mm, 3400x1220mm, 3600x1220mm",
  },
  { label: "Thickness", value: "2.5mm / 3.0mm / 3.6mm / 5mm / 9mm / 12mm / 15mm / 18mm / 25mm" },
  { label: "Surface Finish", value: "Closed Paint / Open Paint / Semi-open Paint / Water-based Paint Finishes" },
  { label: "Moisture", value: "7-12% (depends on the thickness)" },
  { label: "Formaldehyde Emission Grade", value: "ENF / E0 / E1 / P1 / P2" },
  {
    label: "Usage",
    value: "Interior walls, ceilings, furniture, cabinet doors, wardrobes, doors, partitions, hotel decoration, office decoration, home decoration, background walls, display shelves, decorative lines, commercial space decoration, villa decoration, shopping mall decoration",
  },
  { label: "Kinds of Export Packing", value: "Wooden frame packaging, in bulk, custom packaging." },
  { label: "Loading Quantity", value: "8 packages for 20'GP / 16 packages for 40'HQ" },
  { label: "Delivery Time", value: "Normally about 7 to 15 days, it depends on quantity and requirement." },
  {
    label: "Main Customer Group",
    value: "Wholesalers, furniture factories, door factories, whole-house customization factories, cabinet factories, hotel construction and decoration projects, real estate decoration projects",
  },
  {
    label: "Payment Term",
    value: "30% by TT as deposit of order, 70% by TT before loading or 70% by irrevocable LC at sight",
  },
];

const contentSections: WoodPanelSection[] = [
  {
    id: "01",
    eyebrow: "Wood Veneer Panels",
    title: "Professional Veneer Panels Supplier",
    subtitle: "One-stop wood veneer panel solutions for furniture, doors, wall panels and interior projects.",
    body: "Tongli Timber provides customized veneer panel solutions covering substrates, natural veneers, engineered veneers, lamination, UV coating and packaging. From material selection to finished panel delivery, we help manufacturers and project buyers get stable quality, flexible customization and reliable supply.",
    pointsLabel: "Key Points",
    points: [
      "Factory direct supply",
      "Custom veneer and substrate options",
      "Suitable for furniture, doors, cabinets and interior decoration",
      "Stable quality control from production to loading",
    ],
    cta: "Request A Veneer Panel Solution",
    image: "/images/products/products_wood veneer panel_detail page/1.Detail Page_Detail Page_Banner.png",
    alt: "Professional veneer panels supplier banner",
    reverse: false,
    bg: "bg-white",
  },
  {
    id: "02",
    eyebrow: "Product Features",
    title: "Stable Quality for Industrial Production",
    subtitle: "Designed for manufacturers who care about consistency, processing performance and surface appearance.",
    body: "Our veneer panels are produced with strict control over moisture content, thickness tolerance, surface smoothness and panel edge quality. Each board is processed to support stable cutting, laminating, sanding, painting and further manufacturing. This helps furniture factories, door factories and interior panel producers reduce material waste and improve production efficiency.",
    pointsLabel: "Highlights",
    points: [
      "Moisture content controlled at around 7%–12%",
      "Thickness tolerance can be controlled within ±0.2mm",
      "Smooth surface for painting, coating or further finishing",
      "Clean panel sides with fewer defects, knots and wormholes",
    ],
    image: "/images/products/products_wood veneer panel_detail page/2.Detail Page_PRODUCT FEATURES.jpg",
    alt: "Wood veneer panel product features",
    reverse: true,
    bg: "bg-[#FDFBF7]",
  },
  {
    id: "03",
    eyebrow: "Product Real Shots",
    title: "Real Product Details You Can Check Before Ordering",
    subtitle: "Clear surface texture, stable panel structure and multiple veneer options.",
    body: "We believe reliable B2B cooperation starts with visible product details. Our real product photos show the surface grain, panel thickness, edge structure and veneer finish from different angles. Whether you need natural wood texture, engineered veneer patterns or customized surface colors, we can provide samples and production references before bulk order confirmation.",
    pointsLabel: "Suitable For",
    points: [
      "Sample confirmation",
      "Color and grain selection",
      "Project material approval",
      "Bulk order quality reference",
    ],
    image: "/images/products/products_wood veneer panel_detail page/3.Detail Page_Products Real Shots.jpg",
    alt: "Wood veneer panel real product shots",
    reverse: false,
    bg: "bg-white",
  },
  {
    id: "04",
    eyebrow: "Product Application",
    title: "Made for Furniture, Doors and Interior Decoration Projects",
    subtitle: "A decorative panel solution for both manufacturing and commercial spaces.",
    body: "Tongli veneer panels are widely used in furniture production, wooden doors, wardrobes, cabinets, wall panels, hotel interiors, commercial spaces and residential decoration. With different veneer species, substrates and surface treatments available, our panels can meet both aesthetic and functional requirements for modern interior projects.",
    pointsLabel: "Applications",
    points: [
      "Furniture panels and cabinet doors",
      "Wooden doors and door skins",
      "Wall cladding and decorative panels",
      "Hotel, apartment and commercial interior projects",
      "Staircases, closets and full-house customization",
    ],
    image: "/images/products/products_wood veneer panel_detail page/4.Detail Page_PRODUCT APPLICATION.jpg",
    alt: "Wood veneer panel applications",
    reverse: true,
    bg: "bg-[#FDFBF7]",
  },
  {
    id: "05",
    eyebrow: "Company Profile",
    title: "A Veneer Panel Manufacturer Since 1999",
    subtitle: "Factory experience, stable production capacity and long-term export service.",
    body: "Dongguan Tongli Timber Products Co., Ltd. was established in 1999 and specializes in high-quality veneer plywood, fancy plywood, wood veneer, UV coated veneer panels and 3D wood panels. With modern production facilities, skilled workers and years of experience in wood-based decorative materials, we support global buyers with stable supply, custom processing and professional export service.",
    pointsLabel: "Why Work With Tongli",
    points: [
      "Over 20 years of wood industry experience",
      "Factory facilities covering large-scale production",
      "Rich experience in veneer lamination and panel processing",
      "Serving furniture, door, cabinet and interior project customers worldwide",
    ],
    image: "/images/products/products_wood veneer panel_detail page/5.Detail Page_Company Profile.png",
    alt: "Tongli company profile",
    reverse: false,
    bg: "bg-white",
  },
  {
    id: "06",
    eyebrow: "Certifications",
    title: "Certified Materials for Safer and More Reliable Supply",
    subtitle: "Quality documents available for export buyers and project approval.",
    body: "For overseas buyers, product compliance and documentation are essential. Tongli Timber can provide related certificates and test reports according to different market and project requirements, helping customers reduce sourcing risks and complete supplier evaluation more efficiently.",
    pointsLabel: "Available Support",
    points: [
      "SGS test reports",
      "FSC-related documentation",
      "CE / GMC / product compliance files",
      "Material documents for project or buyer review",
      "Export documentation support",
    ],
    image: "/images/products/products_wood veneer panel_detail page/6.Detail Page_Certification.png",
    alt: "Wood veneer panel certifications",
    reverse: true,
    bg: "bg-[#FDFBF7]",
  },
  {
    id: "07",
    eyebrow: "Customer Feedback",
    title: "Trusted by Long-term Overseas Customers",
    subtitle: "Real cooperation feedback from buyers, distributors and manufacturers.",
    body: "Our customers value stable quality, clear communication and reliable delivery. From sample confirmation to repeat orders, we focus on solving real sourcing problems for overseas buyers, including veneer matching, edge banding compatibility, packaging requirements and production schedule control.",
    pointsLabel: "What Customers Care About",
    points: [
      "Consistent veneer color and grain",
      "Good panel quality after delivery",
      "Matched edge banding options",
      "Smooth communication before and after shipment",
      "Reliable cooperation for repeat orders",
    ],
    image: "/images/products/products_wood veneer panel_detail page/7.Detail Page_Customer Feedback.png",
    alt: "Wood veneer panel customer feedback",
    reverse: false,
    bg: "bg-white",
  },
  {
    id: "08",
    eyebrow: "Production Process",
    title: "Controlled Production Process from Log to Finished Panel",
    subtitle: "Every step is managed to improve panel stability and final surface quality.",
    body: "Our veneer panel production covers slicing, veneer cutting, base plywood patching, gluing, laminating, cold pressing, hot pressing, sanding, grading, packaging and loading. By controlling each step, we help customers receive panels with better bonding strength, smoother surfaces and more consistent quality for further processing.",
    pointsLabel: "Process Includes",
    points: [
      "Veneer slicing and cutting",
      "Base panel preparation",
      "Glue application and lamination",
      "Cold pressing and hot pressing",
      "Sanding and grading",
      "Packaging and container loading",
    ],
    image: "/images/products/products_wood veneer panel_detail page/8.Detail Page_Production Process.png",
    alt: "Wood veneer panel production process",
    reverse: true,
    bg: "bg-[#FDFBF7]",
  },
  {
    id: "09",
    eyebrow: "Substrate & Size Options",
    title: "Flexible Substrate Options for Different Applications",
    subtitle: "Choose the right base board according to strength, cost, weight and usage scenario.",
    body: "Different projects require different substrates. We can produce veneer panels on plywood, MDF, particle board, OSB and other wood-based boards according to your application needs. Standard and extended sizes are available to support furniture production, door manufacturing, wall panels and customized interior projects.",
    pointsLabel: "Available Options",
    points: [
      "Plywood substrate",
      "MDF substrate",
      "Particle board substrate",
      "OSB and customized boards",
      "Standard size: 2440×1220mm",
      "Extended sizes available upon request",
      "Thickness options from 3mm to 25mm",
    ],
    image: "/images/products/products_wood veneer panel_detail page/9.Detail Page_Custom_Service_SUBSTRATE OPTIONS.png",
    alt: "Wood veneer panel substrate and size options",
    reverse: false,
    bg: "bg-white",
  },
  {
    id: "10",
    eyebrow: "Wood Veneer Options",
    title: "Wide Veneer Selection for Custom Decorative Panels",
    subtitle: "Natural veneer, engineered veneer, dyed veneer and smoked veneer options.",
    body: "We offer a wide range of wood veneer options to meet different design styles and market preferences. Buyers can choose from natural wood veneer, engineered veneer, dyed veneer and smoked veneer. Whether your project needs classic oak, walnut, ash, teak, basswood or customized colors, we can help match the right veneer solution.",
    pointsLabel: "Veneer Types",
    points: [
      "Natural wood veneer",
      "Engineered veneer",
      "Dyed veneer",
      "Smoked veneer",
      "Custom color and grain matching",
      "More than 300 engineered veneer styles available",
    ],
    image: "/images/products/products_wood veneer panel_detail page/10.Detail Page_Custom_Service_WOOD VENEER OPTIONS.png",
    alt: "Wood veneer options for decorative panels",
    reverse: true,
    bg: "bg-[#FDFBF7]",
  },
  {
    id: "11",
    eyebrow: "Veneer Grade, Grain, Matching & Thickness",
    title: "Custom Veneer Details for Better Visual Consistency",
    subtitle: "Control veneer grade, grain direction, matching method and thickness according to your design requirements.",
    body: "The final appearance of veneer panels depends heavily on veneer selection and matching. We provide different veneer grades, grain options, matching methods and thickness choices to help customers achieve consistent visual results for furniture, doors, cabinets and wall decoration.",
    pointsLabel: "Customization Details",
    points: [
      "Veneer grade: AAA+, AAA, AA",
      "Grain options: straight grain and mountain grain",
      "Matching methods: book match, slip match and mixed match",
      "Thick veneer: around 0.4mm",
      "Thin veneer: around 0.15–0.25mm",
      "Custom matching available for project orders",
    ],
    image: "/images/products/products_wood veneer panel_detail page/11.Detail Page_Custom_Service_WOOD VENEER Grade.png",
    alt: "Wood veneer grade and matching options",
    reverse: false,
    bg: "bg-white",
  },
  {
    id: "12",
    eyebrow: "Surface Treatment Options",
    title: "Multiple Surface Treatments for Different Finishing Effects",
    subtitle: "From raw sanding to UV coating, choose the finish that fits your production or project needs.",
    body: "Tongli Timber provides different surface treatment options including sanding, brushing, open paint, closed paint, semi-open paint, water-based paint and UV coating. These finishes help customers achieve different visual effects, touch feelings and processing requirements for furniture, doors and decorative panels.",
    pointsLabel: "Surface Options",
    points: [
      "Sanded surface",
      "Brushed texture",
      "Open paint finish",
      "Closed paint finish",
      "Semi-open paint finish",
      "Water-based paint",
      "UV coated finish",
    ],
    image: "/images/products/products_wood veneer panel_detail page/12.Detail Page_Custom_Service_SURFACE TREATMENT OPTIONS.png",
    alt: "Wood veneer panel surface treatment options",
    reverse: true,
    bg: "bg-[#FDFBF7]",
  },
  {
    id: "13",
    eyebrow: "Packaging Options",
    title: "Export Packaging for Samples, Bulk Orders and Project Delivery",
    subtitle: "Secure packaging helps protect panels during storage, handling and international shipping.",
    body: "We provide flexible packaging solutions for different order types. Small samples can be packed in cartons for easy checking, while bulk veneer panels can be shipped in bulk, wooden frame packaging or customized export packaging. Proper packaging helps reduce transportation damage and supports safer container loading.",
    pointsLabel: "Packaging Support",
    points: [
      "Sample packaging",
      "Bulk loading",
      "Customized packaging",
      "Wooden frame packaging",
      "Export container loading support",
      "Packaging can be adjusted according to customer requirements",
    ],
    image: "/images/products/products_wood veneer panel_detail page/13.Detail Page_Custom_Service_PACKAGING OPTIONS.png",
    alt: "Wood veneer panel packaging options",
    reverse: false,
    bg: "bg-white",
  },
];

export default function WoodVeneerPanelDetailTemplate({
  product,
}: WoodVeneerPanelDetailTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showContactModal, setShowContactModal] = useState(false);

  const faqs = product.faqs && product.faqs.length > 0 ? product.faqs : defaultFaqs;

  // Get related products from real data source, excluding current product
  const allWvpProducts = Object.values(woodVeneerPanelProducts).filter(
    (p) => p.featuredImage && p.featuredImage.length > 0
  );
  const relatedWvpProducts = allWvpProducts
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4)
    .map((p) => ({
      name: p.name,
      code: p.code,
      species: p.name,
      cut: "Wood Veneer Panel",
      href: `/products/wood-veneer-panels/${p.slug}`,
      image: p.featuredImage || (p.gallery[0] ?? null),
      gradient: [
        "from-[#C8A97E] to-[#A68B5E]",
        "from-[#B88A5A] to-[#8F6842]",
        "from-[#D8C4A8] to-[#B89D7C]",
        "from-[#A86F55] to-[#7E4F3B]",
      ][Math.floor(Math.random() * 4)],
    }));

  return (
    <>
      <div className="bg-[#F7F3EC] py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-[#6b7280]">
            <Link href="/" className="hover:text-[#0F6B3A]">Home</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products" className="hover:text-[#0F6B3A]">Products</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/products/wood-veneer-panels" className="hover:text-[#0F6B3A]">Wood Veneer Panels</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1F2621] font-medium truncate max-w-[200px]">{product.name}</span>
          </div>
        </div>
      </div>

      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6">
            <aside className="hidden md:block md:w-64 flex-shrink-0">
              <div className="bg-[#FDFBF7] rounded-2xl border border-[#E5E1D8] overflow-hidden sticky top-24">
                <div className="px-5 py-4 border-b border-[#E5E1D8]">
                  <h3 className="font-bold text-[#1F2621]">Product Categories</h3>
                </div>
                <nav className="py-2">
                  {[
                    { name: "Wood Veneer Panels", href: "/products/wood-veneer-panels", active: true },
                    { name: "Natural Wood Veneer", href: "/products/natural-wood-veneer" },
                    { name: "Engineered Wood Veneer", href: "/products/engineered-wood-veneer" },
                    { name: "3D Wood Panels", href: "/products/3d-wood-panels" },
                    { name: "Melamine Board", href: "/products/melamine-board" },
                    { name: "Veneer Edge Banding", href: "/products/veneer-edge-banding" },
                    {
                      name: "Supporting Boards",
                      href: "/products/supporting-boards",
                      sub: [
                        { name: "Plywood", href: "/products" },
                        { name: "MDF", href: "/products" },
                        { name: "OSB", href: "/products" },
                        { name: "Particle Board", href: "/products" },
                      ],
                    },
                  ].map((cat) => (
                    <div key={cat.name}>
                      {cat.sub ? (
                        <button
                          onClick={() => {
                            const btn = document.getElementById(`cat-${cat.name.replace(/\s+/g, "-")}`);
                            if (btn) btn.classList.toggle("hidden");
                          }}
                          className="w-full flex items-center justify-between px-5 py-3 text-sm text-[#6b7280] hover:bg-[#E5E1D8]/50 hover:text-[#1F2621] transition-colors"
                        >
                          <span>{cat.name}</span>
                          <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      ) : (
                        <Link
                          href={cat.href}
                          className={`flex items-center justify-between px-5 py-3 text-sm transition-colors ${
                            cat.active
                              ? "bg-[#0F6B3A]/10 text-[#0F6B3A] font-semibold border-r-2 border-[#0F6B3A]"
                              : "text-[#6b7280] hover:bg-[#E5E1D8]/50 hover:text-[#1F2621]"
                          }`}
                        >
                          {cat.name}
                        </Link>
                      )}
                      <div id={`cat-${cat.name.replace(/\s+/g, "-")}`} className="hidden bg-[#F7F3EC]">
                        {cat.sub && cat.sub.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block pl-8 pr-5 py-2.5 text-sm text-[#6b7280] hover:text-[#1F2621] transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="relative aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-[#F7F3EC] to-[#E8E4DB] rounded-2xl overflow-hidden mb-4 flex items-center justify-center">
                    {product.gallery && product.gallery.length > 0 ? (
                      <Image
                        src={product.gallery[selectedImage] || product.featuredImage}
                        alt={product.imageAlt || product.name}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                        priority
                      />
                    ) : product.featuredImage ? (
                      <Image
                        src={product.featuredImage}
                        alt={product.imageAlt || product.name}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                        priority
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center mb-4">
                          <svg className="w-16 h-16 text-[#8B5E3C]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-sm text-[#8B5E3C]/50">No Image Available</span>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-3 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {product.gallery && product.gallery.length > 0 ? (
                      product.gallery.slice(0, 4).map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedImage(i)}
                          className={`relative h-20 w-20 sm:h-24 sm:w-24 flex-none rounded-lg overflow-hidden ${selectedImage === i ? "ring-2 ring-[#0F6B3A]" : ""}`}
                        >
                          <Image
                            src={img}
                            alt={`${product.name} - Image ${i + 1}`}
                            fill
                            sizes="100px"
                            className="object-cover"
                          />
                        </button>
                      ))
                    ) : product.featuredImage ? (
                      <div className="h-20 w-20 sm:h-24 sm:w-24 flex-none rounded-lg bg-gradient-to-br from-[#F7F3EC] to-[#E8E4DB] flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#8B5E3C]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    ) : (
                      [0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-20 w-20 sm:h-24 sm:w-24 flex-none rounded-lg bg-gradient-to-br from-[#F7F3EC] to-[#E8E4DB] flex items-center justify-center"
                        >
                          <svg className="w-6 h-6 text-[#8B5E3C]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <span className="text-sm text-[#8B5E3C] font-medium">{product.category}</span>
                    <span className="mx-2 text-[#E5E1D8]">|</span>
                    <span className="text-sm text-[#6b7280]">Code: {product.code}</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2621] mb-4">{product.name}</h1>
                  <p className="text-[#6b7280] leading-relaxed mb-6">{product.shortDesc}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#F7F3EC] rounded-full text-xs font-medium text-[#1F2621]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mb-8 space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#1F2621] mb-3 flex items-center gap-2">
                        <svg className="w-5 h-5 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <Link href="/about" className="hover:text-[#0F6B3A] transition-colors">
                          About Us
                        </Link>
                      </h3>
                      <p className="text-sm text-[#6b7280] leading-relaxed">
                        We are a 25+ year manufacturer specializing in producing wooden products of veneer plywood, veneer mdf, commercial plywood and wood veneer sheets with more than 95% repurchase rate.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => setShowContactModal(true)}
                      className="flex-1 min-w-[120px] px-4 py-3 bg-[#0F6B3A] text-white text-center rounded-lg font-semibold hover:bg-[#124B34] transition-colors"
                    >
                      CONTACT US
                    </button>
                    <a
                      href="https://wa.me/message/2DMHTU2VVZTKC1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[120px] px-4 py-3 bg-[#25D366] text-white text-center rounded-lg font-semibold hover:bg-[#20BD5A] transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      WHATSAPP
                    </a>
                  </div>


                  <ContactFormModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1F2621] mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedWvpProducts.length > 0 ? relatedWvpProducts.map((rp) => (
              <Link
                key={rp.code}
                href={rp.href}
                className="group bg-white rounded-xl border border-[#E5E1D8] overflow-hidden hover:border-[#0F6B3A]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-[#F7F3EC] to-[#E8E4DB] relative overflow-hidden">
                  {rp.image ? (
                    <Image
                      src={rp.image}
                      alt={rp.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                        <svg className="w-10 h-10 text-[#8B5E3C]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[#0F6B3A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-white text-[#0F6B3A] rounded-lg font-medium text-sm">View Details</span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs text-[#0F6B3A] font-mono">{rp.code}</span>
                  <h3 className="font-semibold text-[#1F2621] mt-1 mb-2 line-clamp-1">{rp.name}</h3>
                  <div className="text-xs text-[#6b7280]">
                    <p>Wood Veneer Panel</p>
                  </div>
                </div>
              </Link>
            )) : (
              <div className="col-span-full text-center py-12 text-[#6b7280]">
                No related products available.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1F2621] mb-5">Detailed Specifications</h2>
            <div className="rounded-xl overflow-hidden border border-[#E5E1D8] shadow-sm overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <tbody>
                  {detailedSpecificationRows.map((row, index) => (
                    <tr
                      key={row.label}
                      className={`group transition-colors ${index % 2 === 0 ? "bg-[#FDFBF7]" : "bg-white/60"} hover:bg-[#0F6B3A]/5 border-b border-[#E5E1D8] last:border-b-0`}
                    >
                      <td className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-[#0F6B3A] w-32 sm:w-44 align-middle pr-3 sm:pr-4 border-r border-[#E5E1D8]">
                        {row.label}
                      </td>
                      <td className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm text-[#6b7280] align-top whitespace-pre-line">
                        {Array.isArray(row.value) ? (
                          <div className="space-y-3">
                            {row.value.map((item) => (
                              <p key={item.index}>
                                <span className="mr-1">{item.index}</span>
                                <strong>{item.title}</strong>: {item.description}
                              </p>
                            ))}
                          </div>
                        ) : (
                          row.value
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <div>
        {contentSections.map((section) => (
          <section key={section.id} className={`py-10 sm:py-16 ${section.bg}`}>
            <div className="container mx-auto px-4 sm:px-6">
              <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${section.reverse ? "" : ""}`}>
                <div className={`w-full md:w-1/2 ${section.reverse ? "order-2 md:order-1" : "order-2 md:order-2"}`}>
                  <div className="w-full rounded-2xl overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                      unoptimized
                    />
                  </div>
                </div>
                <div className={`flex-1 ${section.reverse ? "order-1 md:order-2" : "order-1 md:order-1"}`}>
                  <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-wider mb-2 sm:mb-3">{section.eyebrow}</p>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3">{section.title}</h2>
                  <p className="text-sm text-[#8B5E3C] mb-4 sm:mb-6 italic">{section.subtitle}</p>
                  <p className="text-[#6b7280] text-sm leading-relaxed mb-4 sm:mb-6">{section.body}</p>
                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {section.points.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#0F6B3A]/10 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-[#0F6B3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-[#6b7280]">{item}</span>
                      </div>
                    ))}
                  </div>
                  {section.cta ? (
                    <button
                      onClick={() => setShowContactModal(true)}
                      className="mt-6 px-8 py-4 bg-[#0F6B3A] text-white rounded-lg font-semibold hover:bg-[#124B34] transition-colors"
                    >
                      {section.cta}
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="py-12 sm:py-16 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-[10px] sm:text-xs font-semibold text-[#0F6B3A] uppercase tracking-widest mb-2 sm:mb-3">FAQ</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1F2621]">Frequently Asked Questions</h2>
              <div className="w-12 sm:w-16 h-1 bg-[#0F6B3A] mx-auto mt-3 sm:mt-4 rounded-full"></div>
              <p className="text-[#6b7280] mt-3 sm:mt-4 text-xs sm:text-sm">Everything you need to know about our wood veneer panels</p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-[#E5E1D8] overflow-hidden hover:border-[#0F6B3A]/30 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-start justify-between gap-3 p-4 sm:p-6 text-left"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-bold text-[#0F6B3A] bg-[#0F6B3A]/10 px-3 py-1.5 rounded-lg mt-0.5 flex-shrink-0">
                        0{index + 1}
                      </span>
                      <span className="text-[#1F2621] font-medium pr-4 leading-relaxed text-sm lg:text-base">{faq.q}</span>
                    </div>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === index ? "bg-[#0F6B3A] border-[#0F6B3A] rotate-45" : "border-[#E5E1D8] group-hover:border-[#0F6B3A]/50"}`}>
                      <svg className={`w-4 h-4 transition-colors duration-300 ${openFaq === index ? "text-white" : "text-[#6b7280] group-hover:text-[#0F6B3A]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? "max-h-60" : "max-h-0"}`}>
                    <div className="px-4 sm:px-6 pb-5 sm:pb-6 ml-10 sm:ml-20 text-[#6b7280] leading-relaxed text-xs sm:text-sm border-t border-[#F7F3EC] pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
