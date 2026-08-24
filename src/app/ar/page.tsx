import { HomePageContent } from "@/app/page";
import { createCorePageMetadata } from "@/i18n/metadata";

export const metadata = createCorePageMetadata("home", "ar");

export default function ArabicHomePage() {
  return <HomePageContent locale="ar" />;
}
