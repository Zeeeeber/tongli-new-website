import ContactPageContent from "@/components/contact/ContactPageContent";
import { createContactMetadata } from "@/i18n/metadata";

export const metadata = createContactMetadata("ar");

export default function ArabicContactPage() {
  return <ContactPageContent locale="ar" />;
}
