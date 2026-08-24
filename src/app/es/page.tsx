import { HomePageContent } from "@/app/page";
import { createCorePageMetadata } from "@/i18n/metadata";

export const metadata = createCorePageMetadata("home", "es");

export default function SpanishHomePage() {
  return <HomePageContent locale="es" />;
}
