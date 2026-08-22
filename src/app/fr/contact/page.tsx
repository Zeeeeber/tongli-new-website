import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacter Tongli Timber en Français | Wood Veneer & Panels",
  description:
    "Contactez Tongli Timber pour le bois placage, panneaux décoratifs, panneau mélaminé et solutions panneaux sur mesure.",
  robots: {
    index: false,
    follow: false,
  },
};

const EMAIL = "tonglitimber@tongli-dg.com";
const PHONE_DISPLAY = "+86 15817587053";
const MAILTO_HREF =
  "mailto:tonglitimber@tongli-dg.com?subject=Demande%20de%20Produit%20depuis%20Site%20Tongli";
const WHATSAPP_HREF =
  "https://wa.me/8615817587053?text=Bonjour%20Tongli%20Timber%2C%20je%20souhaiterais%20vous%20consulter%20au%20sujet%20de%20vos%20produits%20en%20bois%20placage%20et%20panneaux%20d%C3%A9coratifs.";
const TEL_HREF = "tel:+8615817587053";

export default function FrenchContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Direct Contact Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #faf7f1 0%, #f3eee2 60%, #ede5d2 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] bg-[#0F6B3A]/8 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 right-0 w-[26rem] h-[26rem] bg-[#8B5E3C]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 pt-16 pb-20 lg:pt-20 lg:pb-28 relative z-10">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px" style={{ background: "#8B5E3C" }} />
            <span
              className="text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: "#8B5E3C" }}
            >
              Contact Direct
            </span>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            {/* Left: title + copy + contact cards (60%) */}
            <div className="lg:col-span-3">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#1F2621] leading-tight mb-5">
                Contactez{" "}
                <span style={{ color: "#0F6B3A" }}>Tongli Timber</span>
              </h1>
              <p className="text-base text-[#6b7280] leading-relaxed max-w-2xl mb-10">
                Contactez Tongli Timber pour le bois placage, panneaux
                décoratifs, placage engineering, panneaux bois 3D, panneaux
                mélaminés et matériaux de panneaux supports. Envoyez-nous les
                dimensions, épaisseurs, finis de surface, substrats ou
                applications requis, et notre équipe vous conseillera les
                matériaux adaptés à votre projet.
              </p>

              <div className="space-y-4 max-w-xl">
                {/* Email */}
                <a
                  href={MAILTO_HREF}
                  className="group block bg-white rounded-2xl p-5 lg:p-6 border border-[#E5E1D8] shadow-sm hover:shadow-md hover:border-[#0F6B3A]/40 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#0F6B3A15" }}
                    >
                      <svg
                        className="w-7 h-7"
                        style={{ color: "#0F6B3A" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] font-semibold mb-1">
                        E-mail
                      </p>
                      <p className="text-lg font-semibold text-[#1F2621] group-hover:text-[#0F6B3A] transition-colors break-all">
                        {EMAIL}
                      </p>
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-2xl p-5 lg:p-6 border border-[#E5E1D8] shadow-sm hover:shadow-md hover:border-[#25D366]/40 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#25D36620" }}
                    >
                      <svg
                        className="w-7 h-7"
                        style={{ color: "#25D366" }}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] font-semibold mb-1">
                        WhatsApp
                      </p>
                      <p className="text-lg font-semibold text-[#1F2621] group-hover:text-[#25D366] transition-colors">
                        {PHONE_DISPLAY}
                      </p>
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={TEL_HREF}
                  className="group block bg-white rounded-2xl p-5 lg:p-6 border border-[#E5E1D8] shadow-sm hover:shadow-md hover:border-[#0F6B3A]/40 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#0F6B3A15" }}
                    >
                      <svg
                        className="w-7 h-7"
                        style={{ color: "#0F6B3A" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] font-semibold mb-1">
                        Téléphone
                      </p>
                      <p className="text-lg font-semibold text-[#1F2621] group-hover:text-[#0F6B3A] transition-colors">
                        {PHONE_DISPLAY}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: WhatsApp card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-7 lg:p-9 shadow-lg border border-[#E5E1D8] relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-40 h-40 rounded-bl-full pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(37,211,102,0.08) 0%, rgba(37,211,102,0) 100%)",
                  }}
                  aria-hidden
                />
                <div className="relative z-10">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
                    style={{ background: "#25D36615", color: "#128C5E" }}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      style={{ color: "#25D366" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-3 leading-tight">
                    Scannez pour discuter sur WhatsApp
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed mb-7">
                    Envoyez-nous vos exigences de produit, tailles, finition
                    superficielle ou détails du projet directement.
                  </p>

                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:shadow-md hover:-translate-y-0.5"
                    style={{ background: "#25D366" }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Ouvrir WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factory Location */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#0F6B3A]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#8B5E3C]/5 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px" style={{ background: "#8B5E3C" }} />
              <span
                className="text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: "#8B5E3C" }}
              >
                Visitez-nous
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1F2621] mb-4 leading-tight">
              Notre Emplacement<br />
              <span style={{ color: "#0F6B3A" }}>d&apos;Usine</span>
            </h2>
            <p className="text-lg text-[#6b7280] leading-relaxed max-w-xl">
              Situé au cœur de la zone manufacturière de Chine, avec un accès
              fluide aux principaux réseaux logistiques et aux routes
              d&apos;expédition internationale.
            </p>
          </div>
        </div>
        <div className="w-full px-[12.5%] pb-16 lg:pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-8 items-stretch">
            <div className="relative h-[500px] lg:h-[700px]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0!2d113.85!3d22.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU3JzAwLjAiTiAxMTPCsDUxJzAwLjAiRQ!5e0!3m2!1sen!2scn!4v1600000000000!5m2!1sen!2scn"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-6 py-4 shadow-xl flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #0F6B3A 0%, #124B34 100%)",
                  }}
                >
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#9CA3AF] uppercase tracking-wider">
                    Situé à
                  </p>
                  <p className="font-bold text-[#1F2621] text-lg">
                    Dongguan, Chine
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[500px] lg:h-[700px] space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E5E1D8] flex-1 flex flex-col justify-center">
                <div className="flex items-start gap-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #0F6B3A 0%, #124B34 100%)",
                    }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F2621] text-xl mb-3">
                      Adresse de l&apos;Usine
                    </h3>
                    <p className="text-[#6b7280] leading-relaxed">
                      No.655, Houjie Section, Huanguan Expressway, Houjie Town,
                      Dongguan City, Guangdong Province, Chine
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E5E1D8] flex-1 flex flex-col justify-center">
                <div className="flex items-start gap-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#0F6B3A15" }}
                  >
                    <svg
                      className="w-8 h-8"
                      style={{ color: "#0F6B3A" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F2621] text-xl mb-3">
                      Transport
                    </h3>
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-3 text-[#6b7280]">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: "#0F6B3A" }}
                        />
                        <span className="text-base">30 min de Shenzhen</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#6b7280]">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: "#0F6B3A" }}
                        />
                        <span className="text-base">
                          60 min de Guangzhou
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-[#6b7280]">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: "#0F6B3A" }}
                        />
                        <span className="text-base">90 min de Hong Kong</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E5E1D8] flex-1 flex flex-col justify-center">
                <div className="flex items-start gap-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#0F6B3A15" }}
                  >
                    <svg
                      className="w-8 h-8"
                      style={{ color: "#0F6B3A" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F2621] text-xl mb-2">
                      Horaires d&apos;Ouverture
                    </h3>
                    <p className="text-[#6b7280] text-base mb-1">
                      Lun - Sam : 8h30 - 18h00
                    </p>
                    <p className="text-sm text-[#9CA3AF]">
                      Dimanche sur rendez-vous
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=No.655+Houjie+Section+Dongguan+China"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#0F6B3A] to-[#124B34] rounded-2xl flex items-center justify-center gap-3 py-5 text-white font-bold text-base hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                Obtenir l&apos;Itinéraire
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 lg:py-16 bg-[#FAFAFA]">
        <div className="w-full px-4 lg:px-8 xl:px-12">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0F6B3A]/10 text-[#0F6B3A] text-xs font-medium rounded-full mb-3">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Partenaires de Confiance
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2621] mb-2">
              Plus de 50 Partenaires Mondiaux
            </h2>
            <p className="text-sm text-[#6b7280] max-w-xl mx-auto">
              Principaux fabricants de meubles et distributeurs du monde entier
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
