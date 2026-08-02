import { getBreadcrumbSchema } from "@/lib/seo/schema";
import { JsonLd } from "./JsonLd";

interface ProductBreadcrumbJsonLdProps {
  categoryName: string;
  categoryPath: string;
  productName: string;
  productPath: string;
}

export function ProductBreadcrumbJsonLd({
  categoryName,
  categoryPath,
  productName,
  productPath,
}: ProductBreadcrumbJsonLdProps) {
  return (
    <JsonLd
      data={getBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Products", url: "/products" },
        { name: categoryName, url: categoryPath },
        { name: productName, url: productPath },
      ])}
    />
  );
}
