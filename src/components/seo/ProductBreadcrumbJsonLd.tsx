import { getBreadcrumbSchema, getProductSchema } from "@/lib/seo/schema";
import { JsonLd } from "./JsonLd";

interface ProductBreadcrumbJsonLdProps {
  categoryName: string;
  categoryPath: string;
  productName: string;
  productPath: string;
  productDescription?: string;
  productImage?: string;
  productSku?: string;
}

export function ProductBreadcrumbJsonLd({
  categoryName,
  categoryPath,
  productName,
  productPath,
  productDescription,
  productImage,
  productSku,
}: ProductBreadcrumbJsonLdProps) {
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: categoryName, url: categoryPath },
    { name: productName, url: productPath },
  ]);
  const product = productDescription
    ? getProductSchema({
        name: productName,
        description: productDescription,
        image: productImage,
        sku: productSku,
        category: categoryName,
        url: productPath,
      })
    : undefined;

  return (
    <JsonLd
      data={product ? [breadcrumb, product] : breadcrumb}
    />
  );
}
