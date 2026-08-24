import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePageContent } from "@/app/resources/[slug]/page";
import { articles, getArticleBySlug } from "@/data/resources/articles";
import { createFullSiteMetadata } from "@/i18n/metadata";
import { nonDefaultLocales, resolveLocalizedLocale } from "@/i18n/server";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return nonDefaultLocales.flatMap((locale) =>
    articles.map((article) => ({ locale, slug: article.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeValue, slug } = await params;
  const locale = await resolveLocalizedLocale(Promise.resolve({ locale: localeValue }));
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return createFullSiteMetadata({
    locale,
    path: `/resources/${article.slug}`,
    title: article.title,
    description: article.excerpt,
    image: article.image,
    type: "article",
  });
}

export default async function LocalizedArticlePage({ params }: PageProps) {
  const { locale: localeValue, slug } = await params;
  const locale = await resolveLocalizedLocale(Promise.resolve({ locale: localeValue }));
  if (!getArticleBySlug(slug)) notFound();
  return <ArticlePageContent slug={slug} locale={locale} />;
}
