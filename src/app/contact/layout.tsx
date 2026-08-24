import { createContactMetadata } from "@/i18n/metadata";

export const metadata = createContactMetadata("en");

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
