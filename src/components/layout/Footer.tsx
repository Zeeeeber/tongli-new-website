import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c1c1c] text-white">
      <div className="h-[3px] bg-gradient-to-r from-[#c8a45a] via-[#d4b06a] to-[#c8a45a]" />

      <div className="container-page py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          <div className="lg:pr-8">
            <Link href="/" className="inline-block mb-5">
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
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Products</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/products/wood-veneer-panels" className="hover:text-white transition-colors">Wood Veneer Panels</Link></li>
              <li><Link href="/products/natural-wood-veneer" className="hover:text-white transition-colors">Natural Wood Veneer</Link></li>
              <li><Link href="/products/engineered-wood-veneer" className="hover:text-white transition-colors">Engineered Wood Veneer</Link></li>
              <li><Link href="/products/3d-wood-panels" className="hover:text-white transition-colors">3D Wood Panels</Link></li>
              <li><Link href="/products" className="text-[#c8a45a] hover:text-[#d4b06a] transition-colors">View All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Project Cases</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#c8a45a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Dongguan, Guangdong, China</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#c8a45a] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:tonglitimber@tongli-dg.com" className="hover:text-white transition-colors">tonglitimber@tongli-dg.com</a>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#c8a45a] hover:text-[#d4b06a] transition-colors font-medium"
                >
                  Get a Quote
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
            <p>© {currentYear} Dongguan Tongli Timber Products Co., Ltd. All rights reserved.</p>
            <div className="flex gap-5">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
