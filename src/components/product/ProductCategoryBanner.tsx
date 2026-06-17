import Image from "next/image";

export type ProductCategoryBannerProps = {
  title: string;
  image: string;
};

export function ProductCategoryBanner({
  title,
  image,
}: ProductCategoryBannerProps) {
  return (
    <section className="relative w-full overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={1920}
        height={517}
        priority
        className="block w-full h-auto"
      />

      {/* Title centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-center text-white text-4xl md:text-6xl font-semibold px-4 drop-shadow-lg">
          {title}
        </h1>
      </div>
    </section>
  );
}
