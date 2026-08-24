"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { localizeHref } from "@/i18n/config";
import { useSiteLocale } from "@/i18n/site-locale-context";

type LocalizedLinkProps = ComponentProps<typeof NextLink>;

export default function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const locale = useSiteLocale();
  const localizedHref = typeof href === "string" ? localizeHref(href, locale) : href;

  return <NextLink href={localizedHref} {...props} />;
}
