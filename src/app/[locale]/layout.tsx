import { localeDirections } from "@/i18n/config";
import { resolveLocalizedLocale } from "@/i18n/server";

type LocalizedLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function LocalizedLayout({
  children,
  params,
}: LocalizedLayoutProps) {
  const locale = await resolveLocalizedLocale(params);

  return (
    <div lang={locale} dir={localeDirections[locale]}>
      {children}
    </div>
  );
}
