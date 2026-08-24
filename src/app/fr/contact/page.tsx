import ContactPageContent from "@/components/contact/ContactPageContent";
import { createContactMetadata } from "@/i18n/metadata";

export const metadata = createContactMetadata("fr");

export default function FrenchContactPage() {
  return <ContactPageContent locale="fr" />;
}
