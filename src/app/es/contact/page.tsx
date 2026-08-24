import ContactPageContent from "@/components/contact/ContactPageContent";
import { createContactMetadata } from "@/i18n/metadata";

export const metadata = createContactMetadata("es");

export default function SpanishContactPage() {
  return <ContactPageContent locale="es" />;
}
