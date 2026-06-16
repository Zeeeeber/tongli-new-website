import Image from "next/image";

type ProductCategoryBannerProps = {
  title: string;
  image: string;
};

export function ProductCategoryBanner({ title, image }: ProductCategoryBannerProps) {
  return (
    <section className="relative h-[280px] md:h-[420px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="relative z-10 text-white text-3xl md:text-5xl lg:text-6xl font-semibold text-center px-4 drop-shadow-lg">
          {title}
        </h1>
      </div>
    </section>
  );
}
