"use client";

import Link from "@/components/i18n/LocalizedLink";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { globalCopy } from "@/i18n/copy";
import { getLocaleFromPathname, getSiteLink, localeDirections } from "@/i18n/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = globalCopy[locale];

  return (
    <footer className="bg-[#1c1c1c] text-white" lang={locale} dir={localeDirections[locale]}>
      <div className="h-[3px] bg-gradient-to-r from-[#c8a45a] via-[#d4b06a] to-[#c8a45a]" />

      <div className="container-page py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          <div className="lg:pr-8">
            <Link href={getSiteLink("/", locale)} className="inline-block mb-5">
              <Image
                src="/images/logo-full.png"
                alt="Tongli Timber"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/certifications/fsc.png"
                alt="FSC"
                width={32}
                height={32}
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/certifications/ce.png"
                alt="CE"
                width={32}
                height={32}
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/certifications/sgs.png"
                alt="SGS"
                width={32}
                height={32}
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Social Media Icons */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/tongliwood?igsh=ODdrNnc2YmpicWR3&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src="/images/social/icons8-instagram-50.svg"
                    alt="Instagram"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </a>
                <a
                  href="https://www.facebook.com/share/14kCoMrhpji/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src="/images/social/icons8-facebook.svg"
                    alt="Facebook"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </a>
                <a
                  href="https://pin.it/2IX8y7aCk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src="/images/social/icons8-pinterest-50.svg"
                    alt="Pinterest"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </a>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/tongli-timber-a23bb240a?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src="/images/social/icons8-linkedin-50.svg"
                    alt="LinkedIn"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </a>
                <a
                  href="https://youtube.com/@tongli_timber?si=b7nND_pbImU9-LKX"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src="/images/social/icons8-youtube-50.svg"
                    alt="YouTube"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </a>
                <a
                  href="https://wa.me/8615817587053?text=Hello%20Tongli%20Timber%2C%20I%20would%20like%20to%20ask%20about%20your%20wood%20veneer%20and%20decorative%20panel%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src="/images/social/icons8-whatsapp-50.svg"
                    alt="WhatsApp"
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">{copy.footer.products}</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href={getSiteLink("/products/wood-veneer-panels", locale)} className="hover:text-white transition-colors">{copy.productCategories[0].name}</Link></li>
              <li><Link href={getSiteLink("/products/natural-wood-veneer", locale)} className="hover:text-white transition-colors">{copy.productCategories[1].name}</Link></li>
              <li><Link href={getSiteLink("/products/engineered-wood-veneer", locale)} className="hover:text-white transition-colors">{copy.productCategories[2].name}</Link></li>
              <li><Link href={getSiteLink("/products/3d-wood-panels", locale)} className="hover:text-white transition-colors">{copy.productCategories[3].name}</Link></li>
              <li><Link href={getSiteLink("/products", locale)} className="text-[#c8a45a] hover:text-[#d4b06a] transition-colors">{copy.footer.viewAll}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">{copy.footer.company}</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href={getSiteLink("/about", locale)} className="hover:text-white transition-colors">{copy.footer.aboutUs}</Link></li>
              <li><Link href={getSiteLink("/projects", locale)} className="hover:text-white transition-colors">{copy.footer.projectCases}</Link></li>
              <li><Link href={getSiteLink("/resources", locale)} className="hover:text-white transition-colors">{copy.footer.resources}</Link></li>
              <li><Link href={getSiteLink("/contact", locale)} className="hover:text-white transition-colors">{copy.footer.contactUs}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">{copy.footer.contact}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#c8a45a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{copy.footer.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#c8a45a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:tonglitimber@tongli-dg.com" className="hover:text-white transition-colors">tonglitimber@tongli-dg.com</a>
              </li>
              <li className="pt-2">
                <Link
                  href={getSiteLink("/contact", locale)}
                  className="inline-flex items-center gap-2 text-[#c8a45a] hover:text-[#d4b06a] transition-colors font-medium"
                >
                  {copy.footer.getQuote}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-page py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-gray-500">
            <p>© {currentYear} Dongguan Tongli Timber Products Co., Ltd. {copy.footer.rights}</p>
            <div className="flex gap-5">
              <Link href={getSiteLink("/privacy", locale)} className="hover:text-white transition-colors">{copy.footer.privacy}</Link>
              <Link href={getSiteLink("/terms", locale)} className="hover:text-white transition-colors">{copy.footer.terms}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
