import type { Locale } from "./config";
import { expandLocalizedCopy, type ExistingLocale } from "./localized-copy";

export interface GlobalCopy {
  selectLanguage: string;
  nav: {
    home: string;
    products: string;
    collections: string;
    customSolutions: string;
    about: string;
    projects: string;
    resources: string;
    contact: string;
    inquireNow: string;
    viewAllProducts: string;
    viewAllResources: string;
  };
  productCategories: Array<{ name: string; description: string }>;
  resourceCategories: Array<{ name: string; description: string }>;
  footer: {
    products: string;
    company: string;
    contact: string;
    viewAll: string;
    aboutUs: string;
    projectCases: string;
    resources: string;
    contactUs: string;
    location: string;
    getQuote: string;
    privacy: string;
    terms: string;
    rights: string;
  };
  cookieConsent: {
    notice: string;
    title: string;
    description: string;
    detailsPrefix: string;
    privacyPolicy: string;
    decline: string;
    accept: string;
    ariaLabel: string;
  };
  pilotHome: {
    eyebrow: string;
    title: string;
    description: string;
    contactCta: string;
    englishCta: string;
  };
}

export interface ContactCopy {
  seoTitle: string;
  seoDescription: string;
  directContact: string;
  headingPrefix: string;
  intro: string;
  email: string;
  phone: string;
  mailSubject: string;
  whatsAppMessage: string;
  qrTitle: string;
  qrDescription: string;
  qrAlt: string;
  qrUnavailableTitle: string;
  qrUnavailableDescription: string;
  openWhatsApp: string;
  visitUs: string;
  factoryHeadingPrefix: string;
  factoryHeadingAccent: string;
  factoryHeadingSuffix: string;
  factoryIntro: string;
  locatedIn: string;
  city: string;
  factoryAddress: string;
  address: string;
  transportation: string;
  travelTimes: [string, string, string];
  workingHours: string;
  schedule: string;
  sunday: string;
  directions: string;
  trustedPartners: string;
  globalPartners: string;
  partnersDescription: string;
  learnMore: string;
}

const globalCopyBase: Record<ExistingLocale, GlobalCopy> = {
  en: {
    selectLanguage: "Select language",
    nav: {
      home: "Home",
      products: "Products",
      collections: "Collections",
      customSolutions: "Custom Solutions",
      about: "About Tongli",
      projects: "Projects",
      resources: "Resources",
      contact: "Contact",
      inquireNow: "Inquire Now",
      viewAllProducts: "View All Products",
      viewAllResources: "View All Resources",
    },
    productCategories: [
      { name: "Wood Veneer Panels", description: "Plywood, MDF and particle board panels" },
      { name: "Natural Wood Veneer", description: "Oak, walnut, teak and 80+ species" },
      { name: "Engineered Wood Veneer", description: "300+ consistent patterns" },
      { name: "3D Wood Panels", description: "Decorative carved panels" },
      { name: "Veneer Edge Banding", description: "Matching veneer edge strips" },
      { name: "Melamine Board", description: "Melamine-faced boards" },
      { name: "Supporting Boards", description: "Plywood, blockboard and OSB cores" },
    ],
    resourceCategories: [
      { name: "Product News", description: "New products, technical guides and recommendations" },
      { name: "Industry News", description: "Market trends and design innovations" },
      { name: "Company News", description: "Company updates and certifications" },
    ],
    footer: {
      products: "Products",
      company: "Company",
      contact: "Contact",
      viewAll: "View All",
      aboutUs: "About Us",
      projectCases: "Project Cases",
      resources: "Resources",
      contactUs: "Contact Us",
      location: "Dongguan, Guangdong, China",
      getQuote: "Get a Quote",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved.",
    },
    cookieConsent: {
      notice: "Cookies Notice",
      title: "We use analytics cookies",
      description: "We use analytics cookies to understand how visitors use our website and improve our product information. You can accept or decline analytics cookies at any time. We do not use advertising cookies.",
      detailsPrefix: "For details, read our",
      privacyPolicy: "Privacy Policy",
      decline: "Decline",
      accept: "Accept Analytics",
      ariaLabel: "Analytics cookie preferences",
    },
    pilotHome: {
      eyebrow: "Multilingual pilot",
      title: "English is the primary website language",
      description: "The Contact page is now available in this language. Other pages will be added after the pilot is approved.",
      contactCta: "View Contact Page",
      englishCta: "Open English Website",
    },
  },
  es: {
    selectLanguage: "Seleccionar idioma",
    nav: {
      home: "Inicio",
      products: "Productos",
      collections: "Colecciones",
      customSolutions: "Soluciones a medida",
      about: "Sobre Tongli",
      projects: "Proyectos",
      resources: "Recursos",
      contact: "Contacto",
      inquireNow: "Solicitar información",
      viewAllProducts: "Ver todos los productos",
      viewAllResources: "Ver todos los recursos",
    },
    productCategories: [
      { name: "Paneles de chapa de madera", description: "Paneles de contrachapado, MDF y partículas" },
      { name: "Chapa de madera natural", description: "Roble, nogal, teca y más de 80 especies" },
      { name: "Chapa de madera reconstituida", description: "Más de 300 diseños uniformes" },
      { name: "Paneles de madera 3D", description: "Paneles decorativos tallados" },
      { name: "Cantos de chapa de madera", description: "Tiras de canto a juego" },
      { name: "Tablero de melamina", description: "Tableros revestidos de melamina" },
      { name: "Tableros de soporte", description: "Núcleos de contrachapado, alistonado y OSB" },
    ],
    resourceCategories: [
      { name: "Novedades de productos", description: "Productos, guías técnicas y recomendaciones" },
      { name: "Noticias del sector", description: "Tendencias del mercado e innovación" },
      { name: "Noticias de la empresa", description: "Actualizaciones y certificaciones" },
    ],
    footer: {
      products: "Productos",
      company: "Empresa",
      contact: "Contacto",
      viewAll: "Ver todo",
      aboutUs: "Quiénes somos",
      projectCases: "Proyectos",
      resources: "Recursos",
      contactUs: "Contáctenos",
      location: "Dongguan, Guangdong, China",
      getQuote: "Solicitar presupuesto",
      privacy: "Política de privacidad",
      terms: "Términos del servicio",
      rights: "Todos los derechos reservados.",
    },
    cookieConsent: {
      notice: "Aviso de cookies",
      title: "Utilizamos cookies de análisis",
      description: "Utilizamos cookies de análisis para comprender cómo se usa nuestro sitio y mejorar la información de nuestros productos. Puede aceptarlas o rechazarlas en cualquier momento. No utilizamos cookies publicitarias.",
      detailsPrefix: "Para más información, consulte nuestra",
      privacyPolicy: "Política de privacidad",
      decline: "Rechazar",
      accept: "Aceptar análisis",
      ariaLabel: "Preferencias de cookies de análisis",
    },
    pilotHome: {
      eyebrow: "Prueba multilingüe",
      title: "Sitio web de Tongli Timber en español",
      description: "La página de contacto ya está disponible en español. Añadiremos el resto de las páginas después de aprobar esta prueba.",
      contactCta: "Ver página de contacto",
      englishCta: "Abrir sitio en inglés",
    },
  },
  fr: {
    selectLanguage: "Choisir la langue",
    nav: {
      home: "Accueil",
      products: "Produits",
      collections: "Collections",
      customSolutions: "Solutions sur mesure",
      about: "À propos de Tongli",
      projects: "Projets",
      resources: "Ressources",
      contact: "Contact",
      inquireNow: "Demander des informations",
      viewAllProducts: "Voir tous les produits",
      viewAllResources: "Voir toutes les ressources",
    },
    productCategories: [
      { name: "Panneaux plaqués bois", description: "Panneaux contreplaqués, MDF et particules" },
      { name: "Placage bois naturel", description: "Chêne, noyer, teck et plus de 80 essences" },
      { name: "Placage bois reconstitué", description: "Plus de 300 motifs réguliers" },
      { name: "Panneaux bois 3D", description: "Panneaux décoratifs sculptés" },
      { name: "Bandes de chant en placage", description: "Bandes de chant assorties" },
      { name: "Panneaux mélaminés", description: "Panneaux revêtus de mélamine" },
      { name: "Panneaux supports", description: "Âmes contreplaqué, latté et OSB" },
    ],
    resourceCategories: [
      { name: "Actualités produits", description: "Produits, guides techniques et recommandations" },
      { name: "Actualités du secteur", description: "Tendances du marché et innovations" },
      { name: "Actualités de l’entreprise", description: "Mises à jour et certifications" },
    ],
    footer: {
      products: "Produits",
      company: "Entreprise",
      contact: "Contact",
      viewAll: "Tout voir",
      aboutUs: "À propos",
      projectCases: "Projets",
      resources: "Ressources",
      contactUs: "Nous contacter",
      location: "Dongguan, Guangdong, Chine",
      getQuote: "Demander un devis",
      privacy: "Politique de confidentialité",
      terms: "Conditions d’utilisation",
      rights: "Tous droits réservés.",
    },
    cookieConsent: {
      notice: "Avis relatif aux cookies",
      title: "Nous utilisons des cookies d’analyse",
      description: "Nous utilisons des cookies d’analyse pour comprendre l’utilisation de notre site et améliorer nos informations produits. Vous pouvez les accepter ou les refuser à tout moment. Nous n’utilisons pas de cookies publicitaires.",
      detailsPrefix: "Pour en savoir plus, consultez notre",
      privacyPolicy: "Politique de confidentialité",
      decline: "Refuser",
      accept: "Accepter l’analyse",
      ariaLabel: "Préférences relatives aux cookies d’analyse",
    },
    pilotHome: {
      eyebrow: "Projet pilote multilingue",
      title: "Site Tongli Timber en français",
      description: "La page Contact est maintenant disponible en français. Les autres pages seront ajoutées après validation de ce projet pilote.",
      contactCta: "Voir la page Contact",
      englishCta: "Ouvrir le site en anglais",
    },
  },
  ar: {
    selectLanguage: "اختيار اللغة",
    nav: {
      home: "الرئيسية",
      products: "المنتجات",
      collections: "المجموعات",
      customSolutions: "حلول مخصصة",
      about: "عن تونغلي",
      projects: "المشاريع",
      resources: "الموارد",
      contact: "اتصل بنا",
      inquireNow: "أرسل استفسارًا",
      viewAllProducts: "عرض جميع المنتجات",
      viewAllResources: "عرض جميع الموارد",
    },
    productCategories: [
      { name: "ألواح قشرة الخشب", description: "ألواح الخشب الرقائقي وMDF والحبيبي" },
      { name: "قشرة خشب طبيعية", description: "بلوط وجوز وساج وأكثر من 80 نوعًا" },
      { name: "قشرة خشب هندسية", description: "أكثر من 300 نمط متناسق" },
      { name: "ألواح خشبية ثلاثية الأبعاد", description: "ألواح زخرفية منحوتة" },
      { name: "شرائط حواف القشرة", description: "شرائط حواف متطابقة" },
      { name: "ألواح الميلامين", description: "ألواح مكسوة بالميلامين" },
      { name: "ألواح داعمة", description: "خشب رقائقي وبلوك بورد وOSB" },
    ],
    resourceCategories: [
      { name: "أخبار المنتجات", description: "منتجات وأدلة فنية وتوصيات" },
      { name: "أخبار الصناعة", description: "اتجاهات السوق وابتكارات التصميم" },
      { name: "أخبار الشركة", description: "تحديثات الشركة والشهادات" },
    ],
    footer: {
      products: "المنتجات",
      company: "الشركة",
      contact: "اتصل بنا",
      viewAll: "عرض الكل",
      aboutUs: "من نحن",
      projectCases: "المشاريع",
      resources: "الموارد",
      contactUs: "تواصل معنا",
      location: "دونغقوان، غوانغدونغ، الصين",
      getQuote: "اطلب عرض سعر",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      rights: "جميع الحقوق محفوظة.",
    },
    cookieConsent: {
      notice: "إشعار ملفات تعريف الارتباط",
      title: "نستخدم ملفات تعريف الارتباط التحليلية",
      description: "نستخدم ملفات تعريف الارتباط التحليلية لفهم كيفية استخدام الزوار لموقعنا وتحسين معلومات المنتجات. يمكنك قبولها أو رفضها في أي وقت، ولا نستخدم ملفات تعريف الارتباط الإعلانية.",
      detailsPrefix: "للمزيد من التفاصيل، اقرأ",
      privacyPolicy: "سياسة الخصوصية",
      decline: "رفض",
      accept: "قبول التحليلات",
      ariaLabel: "تفضيلات ملفات تعريف الارتباط التحليلية",
    },
    pilotHome: {
      eyebrow: "تجربة تعدد اللغات",
      title: "موقع تونغلي للأخشاب باللغة العربية",
      description: "صفحة الاتصال متاحة الآن باللغة العربية. ستتم إضافة بقية الصفحات بعد اعتماد هذه التجربة.",
      contactCta: "عرض صفحة الاتصال",
      englishCta: "فتح الموقع بالإنجليزية",
    },
  },
};

const contactCopyBase: Record<ExistingLocale, ContactCopy> = {
  en: {
    seoTitle: "Contact Tongli Timber | Wood Veneer & Decorative Panel Supplier",
    seoDescription: "Contact Tongli Timber for wood veneer panels, natural veneer, engineered veneer, 3D wood panels and decorative plywood sourcing, samples and B2B project inquiries.",
    directContact: "Direct Contact",
    headingPrefix: "Contact",
    intro: "Contact Tongli Timber for wood veneer, decorative panels, engineered veneer, 3D wood panels, melamine boards and supporting board materials. Send us your required size, thickness, surface finish, substrate or application, and our team will help recommend suitable materials for your project.",
    email: "Email",
    phone: "Phone",
    mailSubject: "Product Inquiry from Tongli Website",
    whatsAppMessage: "Hello Tongli Timber, I would like to ask about your wood veneer and decorative panel products.",
    qrTitle: "Scan to Chat on WhatsApp",
    qrDescription: "Send us your product requirements, sizes, surface finish or project details directly.",
    qrAlt: "WhatsApp QR code for Tongli Timber",
    qrUnavailableTitle: "WhatsApp QR Code Coming Soon",
    qrUnavailableDescription: "Tap the WhatsApp card on the left to chat with us directly.",
    openWhatsApp: "Open WhatsApp",
    visitUs: "Visit Us",
    factoryHeadingPrefix: "Our",
    factoryHeadingAccent: "Factory",
    factoryHeadingSuffix: "Location",
    factoryIntro: "Strategically positioned in the heart of China’s manufacturing hub with seamless access to major logistics networks and international shipping routes.",
    locatedIn: "Located in",
    city: "Dongguan, China",
    factoryAddress: "Factory Address",
    address: "No. 655 Houjie Section, Huanguan Expressway, Houjie Town, Dongguan City, Guangdong Province, China",
    transportation: "Transportation",
    travelTimes: ["30 min from Shenzhen City", "60 min from Guangzhou City", "90 min from Hong Kong"],
    workingHours: "Working Hours",
    schedule: "Mon - Sat: 8:30 AM - 6:00 PM",
    sunday: "Sunday by appointment only",
    directions: "Get Directions",
    trustedPartners: "Trusted Partners",
    globalPartners: "50+ Global Partners",
    partnersDescription: "Leading furniture manufacturers and distributors worldwide",
    learnMore: "Learn More About Us",
  },
  es: {
    seoTitle: "Contactar con Tongli Timber | Proveedor de chapas y paneles",
    seoDescription: "Contacte con Tongli Timber para comprar paneles de chapa de madera, chapa natural y reconstituida, paneles 3D y contrachapado decorativo.",
    directContact: "Contacto directo",
    headingPrefix: "Contacte con",
    intro: "Contacte con Tongli Timber para chapas de madera, paneles decorativos, chapa reconstituida, paneles de madera 3D, tableros de melamina y materiales de soporte. Envíenos las medidas, el grosor, el acabado, el sustrato o la aplicación que necesita y nuestro equipo le recomendará los materiales adecuados para su proyecto.",
    email: "Correo electrónico",
    phone: "Teléfono",
    mailSubject: "Consulta de producto desde el sitio web de Tongli",
    whatsAppMessage: "Hola Tongli Timber, me gustaría consultar sus chapas de madera y paneles decorativos.",
    qrTitle: "Escanee para chatear por WhatsApp",
    qrDescription: "Envíenos directamente los requisitos, medidas, acabado o detalles de su proyecto.",
    qrAlt: "Código QR de WhatsApp de Tongli Timber",
    qrUnavailableTitle: "El código QR estará disponible próximamente",
    qrUnavailableDescription: "Pulse la tarjeta de WhatsApp de la izquierda para hablar directamente con nosotros.",
    openWhatsApp: "Abrir WhatsApp",
    visitUs: "Visítenos",
    factoryHeadingPrefix: "Ubicación de",
    factoryHeadingAccent: "nuestra fábrica",
    factoryHeadingSuffix: "",
    factoryIntro: "Estamos en el corazón industrial de China, con acceso directo a las principales redes logísticas y rutas marítimas internacionales.",
    locatedIn: "Situada en",
    city: "Dongguan, China",
    factoryAddress: "Dirección de la fábrica",
    address: "N.º 655, tramo de Houjie, autopista Huanguan, Houjie, Dongguan, Guangdong, China",
    transportation: "Transporte",
    travelTimes: ["A 30 min de Shenzhen", "A 60 min de Guangzhou", "A 90 min de Hong Kong"],
    workingHours: "Horario de atención",
    schedule: "Lun - Sáb: 8:30 - 18:00",
    sunday: "Domingo únicamente con cita previa",
    directions: "Cómo llegar",
    trustedPartners: "Socios de confianza",
    globalPartners: "Más de 50 socios internacionales",
    partnersDescription: "Fabricantes de muebles y distribuidores líderes de todo el mundo",
    learnMore: "Conozca mejor nuestra empresa",
  },
  fr: {
    seoTitle: "Contacter Tongli Timber | Fournisseur de placages et panneaux",
    seoDescription: "Contactez Tongli Timber pour vos panneaux plaqués bois, placages naturels et reconstitués, panneaux 3D et contreplaqués décoratifs.",
    directContact: "Contact direct",
    headingPrefix: "Contactez",
    intro: "Contactez Tongli Timber pour vos placages bois, panneaux décoratifs, placages reconstitués, panneaux bois 3D, panneaux mélaminés et supports. Indiquez-nous les dimensions, l’épaisseur, la finition, le support ou l’application recherchés : notre équipe vous recommandera les matériaux adaptés à votre projet.",
    email: "E-mail",
    phone: "Téléphone",
    mailSubject: "Demande de produit depuis le site Tongli",
    whatsAppMessage: "Bonjour Tongli Timber, je souhaite obtenir des informations sur vos placages bois et panneaux décoratifs.",
    qrTitle: "Scannez pour discuter sur WhatsApp",
    qrDescription: "Envoyez-nous directement vos dimensions, finitions et informations de projet.",
    qrAlt: "Code QR WhatsApp de Tongli Timber",
    qrUnavailableTitle: "Le code QR sera bientôt disponible",
    qrUnavailableDescription: "Touchez la carte WhatsApp à gauche pour discuter directement avec nous.",
    openWhatsApp: "Ouvrir WhatsApp",
    visitUs: "Nous rendre visite",
    factoryHeadingPrefix: "Notre",
    factoryHeadingAccent: "usine",
    factoryHeadingSuffix: "et sa localisation",
    factoryIntro: "Notre usine est implantée au cœur du bassin industriel chinois et bénéficie d’un accès direct aux grands réseaux logistiques et aux routes maritimes internationales.",
    locatedIn: "Située à",
    city: "Dongguan, Chine",
    factoryAddress: "Adresse de l’usine",
    address: "N° 655, section de Houjie, autoroute Huanguan, Houjie, Dongguan, Guangdong, Chine",
    transportation: "Accès",
    travelTimes: ["À 30 min de Shenzhen", "À 60 min de Guangzhou", "À 90 min de Hong Kong"],
    workingHours: "Horaires",
    schedule: "Lun - Sam : 8 h 30 - 18 h 00",
    sunday: "Dimanche uniquement sur rendez-vous",
    directions: "Obtenir l’itinéraire",
    trustedPartners: "Partenaires de confiance",
    globalPartners: "Plus de 50 partenaires internationaux",
    partnersDescription: "Des fabricants de meubles et distributeurs de premier plan dans le monde entier",
    learnMore: "En savoir plus sur notre entreprise",
  },
  ar: {
    seoTitle: "تواصل مع تونغلي للأخشاب | مورد القشرة والألواح الزخرفية",
    seoDescription: "تواصل مع تونغلي للأخشاب لشراء ألواح قشرة الخشب والقشرة الطبيعية والهندسية والألواح ثلاثية الأبعاد والخشب الرقائقي الزخرفي.",
    directContact: "اتصال مباشر",
    headingPrefix: "تواصل مع",
    intro: "تواصل مع تونغلي للأخشاب للحصول على قشرة الخشب والألواح الزخرفية والقشرة الهندسية والألواح الخشبية ثلاثية الأبعاد وألواح الميلامين ومواد الألواح الداعمة. أرسل إلينا المقاس والسماكة والتشطيب والركيزة أو الاستخدام المطلوب، وسيساعدك فريقنا في اختيار المواد المناسبة لمشروعك.",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    mailSubject: "استفسار عن منتج من موقع تونغلي",
    whatsAppMessage: "مرحبًا تونغلي للأخشاب، أود الاستفسار عن منتجات قشرة الخشب والألواح الزخرفية.",
    qrTitle: "امسح الرمز للتواصل عبر واتساب",
    qrDescription: "أرسل متطلبات المنتج والمقاسات والتشطيب أو تفاصيل المشروع مباشرة.",
    qrAlt: "رمز واتساب QR الخاص بتونغلي للأخشاب",
    qrUnavailableTitle: "سيتم توفير رمز واتساب قريبًا",
    qrUnavailableDescription: "اضغط على بطاقة واتساب للتواصل معنا مباشرة.",
    openWhatsApp: "فتح واتساب",
    visitUs: "تفضل بزيارتنا",
    factoryHeadingPrefix: "موقع",
    factoryHeadingAccent: "مصنعنا",
    factoryHeadingSuffix: "",
    factoryIntro: "يقع مصنعنا في قلب المركز الصناعي في الصين، مع وصول مباشر إلى شبكات الخدمات اللوجستية الرئيسية وخطوط الشحن الدولية.",
    locatedIn: "نحن في",
    city: "دونغقوان، الصين",
    factoryAddress: "عنوان المصنع",
    address: "رقم 655، قسم هوجي، طريق هوانغوان السريع، هوجي، دونغقوان، غوانغدونغ، الصين",
    transportation: "الوصول إلى المصنع",
    travelTimes: ["30 دقيقة من شنتشن", "60 دقيقة من غوانغتشو", "90 دقيقة من هونغ كونغ"],
    workingHours: "ساعات العمل",
    schedule: "الاثنين - السبت: 8:30 صباحًا - 6:00 مساءً",
    sunday: "الأحد بموعد مسبق فقط",
    directions: "الحصول على الاتجاهات",
    trustedPartners: "شركاء موثوقون",
    globalPartners: "أكثر من 50 شريكًا حول العالم",
    partnersDescription: "مصنعو أثاث وموزعون رائدون حول العالم",
    learnMore: "اعرف المزيد عن شركتنا",
  },
};

export const globalCopy = expandLocalizedCopy(globalCopyBase);
const expandedContactCopy = expandLocalizedCopy(contactCopyBase);

export const contactCopy: Record<Locale, ContactCopy> = {
  ...expandedContactCopy,
  ms: {
    ...expandedContactCopy.ms,
    factoryHeadingPrefix: "Lokasi",
    factoryHeadingAccent: "Kilang Kami",
    factoryHeadingSuffix: "",
  },
  id: {
    ...expandedContactCopy.id,
    factoryHeadingPrefix: "Lokasi",
    factoryHeadingAccent: "Pabrik Kami",
    factoryHeadingSuffix: "",
  },
  pt: {
    ...expandedContactCopy.pt,
    factoryHeadingPrefix: "Localização da",
    factoryHeadingAccent: "Nossa Fábrica",
    factoryHeadingSuffix: "",
  },
};
