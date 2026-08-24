import type { Metadata } from "next";
import { ProjectsPageContent } from "@/app/projects/page";
import { createCorePageMetadata } from "@/i18n/metadata";
import {
  generateLocalizedParams,
  resolveLocalizedLocale,
  type LocalizedPageProps,
} from "@/i18n/server";

export const generateStaticParams = generateLocalizedParams;

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  return createCorePageMetadata("projects", await resolveLocalizedLocale(params));
}

export default async function LocalizedProjectsPage({ params }: LocalizedPageProps) {
  return <ProjectsPageContent locale={await resolveLocalizedLocale(params)} />;
}
