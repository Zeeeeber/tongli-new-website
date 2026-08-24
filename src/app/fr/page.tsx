import { HomePageContent } from "@/app/page";
import { createCorePageMetadata } from "@/i18n/metadata";

export const metadata = createCorePageMetadata("home", "fr");

export default function FrenchHomePage() {
  return <HomePageContent locale="fr" />;
}
