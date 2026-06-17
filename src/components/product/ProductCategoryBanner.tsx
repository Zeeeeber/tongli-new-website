import Image from "next/image";
import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type ProductCategoryBannerProps = {
  title: string;
  image: string;
  breadcrumb?: BreadcrumbItem[];
};

export function ProductCategoryBanner({
  title,
  image,
  breadcrumb,
}: ProductCategoryBannerProps) {
  const defaultBreadcrumb: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: title },
  ];
  const items = breadcrumb ?? defaultBreadcrumb;

  return (
    <section className="relative h-[517px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />

      {/* Breadcrumb overlay — sits at the top inside the banner */}
      {items.length > 0 && (
        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/50 to-transparent">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center gap-2 text-sm text-white/90">
              {items.map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && (
                    <svg
                      className="w-3.5 h-3.5 text-white/60 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white font-medium">{item.label}</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Title centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="relative z-10 text-white text-3xl md:text-5xl lg:text-6xl font-semibold text-center px-4 drop-shadow-lg">
          {title}
        </h1>
      </div>
    </section>
  );
}
