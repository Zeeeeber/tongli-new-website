import type { Locale } from "./config";
import { expandLocalizedCopy, type ExistingLocale } from "./localized-copy";

export type CorePageKey =
  | "home"
  | "about"
  | "products"
  | "collections"
  | "custom-solutions"
  | "projects"
  | "resources"
  | "applications"
  | "samples";

export const corePagePaths: Record<CorePageKey, string> = {
  home: "/",
  about: "/about",
  products: "/products",
  collections: "/collections",
  "custom-solutions": "/custom-solutions",
  projects: "/projects",
  resources: "/resources",
  applications: "/applications",
  samples: "/samples",
};

const coreSeoCopyBase: Record<ExistingLocale, Record<CorePageKey, { title: string; description: string }>> = {
  en: {
    home: { title: "Tongli Timber | Wood Veneer Panels & Decorative Plywood Manufacturer", description: "Tongli Timber manufactures natural and engineered wood veneer, veneer panels, 3D wood panels and decorative plywood for furniture and commercial interiors." },
    about: { title: "About Tongli Timber | Wood Veneer & Decorative Plywood Factory Since 1999", description: "Learn about Tongli Timber, a wood veneer and decorative plywood manufacturer established in 1999, serving furniture and interior clients worldwide." },
    products: { title: "Wood Veneer Panels & Decorative Boards | Tongli Timber", description: "Source wood veneer panels, natural and engineered veneer, edge banding, melamine boards and substrates for furniture, doors and commercial interiors." },
    collections: { title: "Wood Veneer Collections for Furniture, Doors & Interiors | Tongli Timber", description: "Browse natural wood veneer, engineered veneer, melamine and 3D wood surface collections for furniture manufacturing and interior decoration." },
    "custom-solutions": { title: "Custom Wood Veneer and Panel Solutions | Tongli Timber", description: "Custom veneer matching, panel construction, surface finishing and material solutions for furniture and interior projects." },
    projects: { title: "Wood Veneer Project Gallery | Tongli Timber", description: "Explore wood veneer and decorative panel applications across furniture, hospitality and commercial interior projects." },
    resources: { title: "Wood Veneer Knowledge & Resources | Tongli Timber", description: "Practical articles about wood veneer panels, natural veneer, engineered veneer, decorative panels and related topics." },
    applications: { title: "Wood Veneer Applications | Tongli Timber", description: "Explore wood veneer, decorative panel and supporting board solutions for furniture, doors, cabinets, hotels and interior projects." },
    samples: { title: "Request Wood Veneer Samples | Tongli Timber", description: "Request wood veneer, veneer panel and decorative surface samples for material evaluation and project selection." },
  },
  es: {
    home: { title: "Tongli Timber | Fabricante de paneles de chapa y contrachapado decorativo", description: "Tongli Timber fabrica chapa natural y reconstituida, paneles chapados, paneles de madera 3D y contrachapado decorativo para muebles e interiores comerciales." },
    about: { title: "Sobre Tongli Timber | Fábrica de chapas y contrachapado desde 1999", description: "Conozca Tongli Timber, fabricante de chapas de madera y contrachapado decorativo desde 1999 para clientes de mobiliario e interiorismo de todo el mundo." },
    products: { title: "Paneles de chapa y tableros decorativos | Tongli Timber", description: "Compre paneles chapados, chapa natural y reconstituida, cantos, tableros de melamina y soportes para muebles, puertas e interiores comerciales." },
    collections: { title: "Colecciones de chapas para muebles, puertas e interiores | Tongli Timber", description: "Explore colecciones de chapa natural, chapa reconstituida, melamina y superficies de madera 3D para mobiliario y decoración interior." },
    "custom-solutions": { title: "Soluciones personalizadas de chapa y paneles | Tongli Timber", description: "Combinación de chapas, construcción de paneles, acabados y soluciones de materiales a medida para muebles e interiores." },
    projects: { title: "Galería de proyectos con chapa de madera | Tongli Timber", description: "Explore aplicaciones de chapas y paneles decorativos en muebles, hoteles y proyectos de interiorismo comercial." },
    resources: { title: "Conocimientos y recursos sobre chapa de madera | Tongli Timber", description: "Artículos prácticos sobre paneles chapados, chapa natural y reconstituida, paneles decorativos y temas relacionados." },
    applications: { title: "Aplicaciones de chapa de madera | Tongli Timber", description: "Explore soluciones de chapa, paneles decorativos y tableros de soporte para muebles, puertas, armarios, hoteles e interiores." },
    samples: { title: "Solicitar muestras de chapa de madera | Tongli Timber", description: "Solicite muestras de chapa, paneles chapados y superficies decorativas para evaluar materiales y seleccionar productos." },
  },
  fr: {
    home: { title: "Tongli Timber | Fabricant de panneaux plaqués et contreplaqués décoratifs", description: "Tongli Timber fabrique des placages naturels et reconstitués, des panneaux plaqués, des panneaux bois 3D et des contreplaqués décoratifs pour le mobilier et les intérieurs commerciaux." },
    about: { title: "À propos de Tongli Timber | Usine de placages et contreplaqués depuis 1999", description: "Découvrez Tongli Timber, fabricant de placages bois et contreplaqués décoratifs depuis 1999 pour les professionnels du mobilier et de l’aménagement intérieur." },
    products: { title: "Panneaux plaqués bois et panneaux décoratifs | Tongli Timber", description: "Achetez des panneaux plaqués, placages naturels et reconstitués, bandes de chant, panneaux mélaminés et supports pour meubles, portes et intérieurs commerciaux." },
    collections: { title: "Collections de placages pour meubles, portes et intérieurs | Tongli Timber", description: "Découvrez nos collections de placages naturels, placages reconstitués, mélaminés et surfaces bois 3D pour le mobilier et la décoration intérieure." },
    "custom-solutions": { title: "Solutions sur mesure en placage et panneaux | Tongli Timber", description: "Appairage de placages, construction de panneaux, finitions et solutions matériaux sur mesure pour le mobilier et les projets d’intérieur." },
    projects: { title: "Galerie de projets en placage bois | Tongli Timber", description: "Découvrez des applications de placages et panneaux décoratifs dans le mobilier, l’hôtellerie et les aménagements commerciaux." },
    resources: { title: "Connaissances et ressources sur le placage bois | Tongli Timber", description: "Articles pratiques sur les panneaux plaqués, les placages naturels et reconstitués, les panneaux décoratifs et les sujets associés." },
    applications: { title: "Applications du placage bois | Tongli Timber", description: "Découvrez des solutions de placage, panneaux décoratifs et supports pour meubles, portes, armoires, hôtels et projets d’intérieur." },
    samples: { title: "Demander des échantillons de placage bois | Tongli Timber", description: "Demandez des échantillons de placages, panneaux plaqués et surfaces décoratives pour évaluer et sélectionner vos matériaux." },
  },
  ar: {
    home: { title: "تونغلي للأخشاب | مصنع ألواح القشرة والخشب الرقائقي الزخرفي", description: "تصنع تونغلي القشرة الطبيعية والهندسية وألواح القشرة والألواح الخشبية ثلاثية الأبعاد والخشب الرقائقي الزخرفي للأثاث والتصميمات الداخلية التجارية." },
    about: { title: "عن تونغلي للأخشاب | مصنع القشرة والخشب الرقائقي منذ 1999", description: "تعرّف على تونغلي، مصنع قشرة الخشب والخشب الرقائقي الزخرفي منذ عام 1999 لعملاء الأثاث والتصميم الداخلي حول العالم." },
    products: { title: "ألواح قشرة الخشب والألواح الزخرفية | تونغلي", description: "اشترِ ألواح القشرة والقشرة الطبيعية والهندسية وشرائط الحواف وألواح الميلامين والركائز للأثاث والأبواب والديكورات التجارية." },
    collections: { title: "مجموعات القشرة للأثاث والأبواب والديكورات | تونغلي", description: "تصفح مجموعات القشرة الطبيعية والهندسية والميلامين والأسطح الخشبية ثلاثية الأبعاد للأثاث والديكور الداخلي." },
    "custom-solutions": { title: "حلول مخصصة للقشرة والألواح | تونغلي", description: "مطابقة القشرة وبناء الألواح وتشطيب الأسطح وحلول المواد المخصصة لمشاريع الأثاث والتصميم الداخلي." },
    projects: { title: "معرض مشاريع قشرة الخشب | تونغلي", description: "استكشف تطبيقات القشرة والألواح الزخرفية في الأثاث والفنادق والمشاريع الداخلية التجارية." },
    resources: { title: "معرفة وموارد قشرة الخشب | تونغلي", description: "مقالات عملية عن ألواح القشرة والقشرة الطبيعية والهندسية والألواح الزخرفية والموضوعات المرتبطة بها." },
    applications: { title: "تطبيقات قشرة الخشب | تونغلي", description: "استكشف حلول القشرة والألواح الزخرفية والألواح الداعمة للأثاث والأبواب والخزائن والفنادق والديكورات الداخلية." },
    samples: { title: "اطلب عينات من قشرة الخشب | تونغلي", description: "اطلب عينات من القشرة وألواح القشرة والأسطح الزخرفية لتقييم المواد واختيارها لمشروعك." },
  },
};

export interface SamplesPageCopy {
  title: string;
  intro: string;
  contactSamples: string;
  sendInquiry: string;
  serviceInfo: string;
  typesTitle: string;
  sampleTypes: string[];
  howToRequest: string;
  steps: string[];
  ctaTitle: string;
  ctaDescription: string;
  requestSamples: string;
  viewProducts: string;
}

const samplesPageCopyBase: Record<ExistingLocale, SamplesPageCopy> = {
  en: {
    title: "Request Wood Veneer Samples",
    intro: "Get free samples of our wood veneer panels, natural wood veneer, engineered veneer, and decorative boards. Check quality before placing bulk orders.",
    contactSamples: "Contact Us for Samples",
    sendInquiry: "Send Inquiry",
    serviceInfo: "Sample Service Information",
    typesTitle: "Sample Types Available",
    sampleTypes: ["Natural Wood Veneer Sheets", "Engineered Wood Veneer", "Wood Veneer Panels", "Melamine Faced Boards", "Veneer Edge Banding"],
    howToRequest: "How to Request",
    steps: ["Contact us with your requirements (product type, wood species, specifications)", "We will prepare relevant samples based on your needs", "Samples will be sent to you via international express (shipping cost may apply)", "Evaluate the samples and provide feedback"],
    ctaTitle: "Ready to Request Samples?",
    ctaDescription: "Tell us about your project requirements and we will help you select the right samples.",
    requestSamples: "Request Samples",
    viewProducts: "View Products",
  },
  es: {
    title: "Solicite muestras de chapa de madera",
    intro: "Obtenga muestras gratuitas de nuestros paneles chapados, chapas naturales y reconstituidas y tableros decorativos. Compruebe la calidad antes de realizar pedidos al por mayor.",
    contactSamples: "Contáctenos para solicitar muestras",
    sendInquiry: "Enviar consulta",
    serviceInfo: "Información del servicio de muestras",
    typesTitle: "Tipos de muestras disponibles",
    sampleTypes: ["Hojas de chapa de madera natural", "Chapa de madera reconstituida", "Paneles de chapa de madera", "Tableros revestidos de melamina", "Cantos de chapa de madera"],
    howToRequest: "Cómo solicitarlas",
    steps: ["Indíquenos sus requisitos: tipo de producto, especie de madera y especificaciones", "Prepararemos las muestras adecuadas según sus necesidades", "Enviaremos las muestras por mensajería internacional; pueden aplicarse gastos de envío", "Evalúe las muestras y envíenos sus comentarios"],
    ctaTitle: "¿Listo para solicitar muestras?",
    ctaDescription: "Cuéntenos las necesidades de su proyecto y le ayudaremos a seleccionar las muestras adecuadas.",
    requestSamples: "Solicitar muestras",
    viewProducts: "Ver productos",
  },
  fr: {
    title: "Demandez des échantillons de placage bois",
    intro: "Recevez gratuitement des échantillons de panneaux plaqués, placages naturels et reconstitués et panneaux décoratifs. Vérifiez la qualité avant toute commande en volume.",
    contactSamples: "Nous contacter pour des échantillons",
    sendInquiry: "Envoyer une demande",
    serviceInfo: "Informations sur le service d’échantillons",
    typesTitle: "Types d’échantillons disponibles",
    sampleTypes: ["Feuilles de placage bois naturel", "Placage bois reconstitué", "Panneaux plaqués bois", "Panneaux revêtus de mélamine", "Bandes de chant en placage"],
    howToRequest: "Comment faire une demande",
    steps: ["Indiquez-nous vos besoins : type de produit, essence et caractéristiques", "Nous préparerons les échantillons adaptés à vos besoins", "Les échantillons seront expédiés par transport express international ; des frais peuvent s’appliquer", "Évaluez les échantillons et transmettez-nous vos commentaires"],
    ctaTitle: "Prêt à demander des échantillons ?",
    ctaDescription: "Présentez-nous les besoins de votre projet et nous vous aiderons à choisir les bons échantillons.",
    requestSamples: "Demander des échantillons",
    viewProducts: "Voir les produits",
  },
  ar: {
    title: "اطلب عينات من قشرة الخشب",
    intro: "احصل على عينات مجانية من ألواح القشرة والقشرة الطبيعية والهندسية والألواح الزخرفية. تحقق من الجودة قبل تقديم طلبات الكميات الكبيرة.",
    contactSamples: "تواصل معنا لطلب العينات",
    sendInquiry: "إرسال استفسار",
    serviceInfo: "معلومات خدمة العينات",
    typesTitle: "أنواع العينات المتاحة",
    sampleTypes: ["صفائح قشرة الخشب الطبيعية", "قشرة الخشب الهندسية", "ألواح قشرة الخشب", "ألواح مكسوة بالميلامين", "شرائط حواف القشرة"],
    howToRequest: "كيفية الطلب",
    steps: ["أرسل إلينا متطلباتك: نوع المنتج ونوع الخشب والمواصفات", "سنجهز العينات المناسبة بناءً على احتياجاتك", "سنرسل العينات عبر الشحن الدولي السريع وقد تُطبق رسوم شحن", "قيّم العينات وأرسل ملاحظاتك"],
    ctaTitle: "هل أنت مستعد لطلب العينات؟",
    ctaDescription: "أخبرنا بمتطلبات مشروعك وسنساعدك في اختيار العينات المناسبة.",
    requestSamples: "طلب عينات",
    viewProducts: "عرض المنتجات",
  },
};

export interface ResourcesPageCopy {
  title: string;
  description: string;
  browseArticles: string;
  categoryLabels: Record<string, string>;
  featuredArticles: string;
  latestArticles: string;
  loadMore: string;
  noArticles: string;
  needHelp: string;
  helpDescription: string;
  contactTongli: string;
  requestSamples: string;
  readMore: string;
}

const resourcesPageCopyBase: Record<ExistingLocale, ResourcesPageCopy> = {
  en: {
    title: "Wood Veneer Knowledge & Resources",
    description: "Practical articles about wood veneer panels, natural veneer, engineered veneer, decorative panels and related topics.",
    browseArticles: "Browse Articles",
    categoryLabels: { All: "All", "Product News": "Product News", "Industry News": "Industry News", "Company News": "Company News" },
    featuredArticles: "Featured Articles",
    latestArticles: "Latest Articles",
    loadMore: "Load More Articles",
    noArticles: "No articles found in this category.",
    needHelp: "Need Help Choosing Materials?",
    helpDescription: "Tell us your application, substrate, wood species, surface style and quantity. Tongli can help recommend suitable veneer panel or decorative board options.",
    contactTongli: "Contact Tongli",
    requestSamples: "Request Samples",
    readMore: "Read More",
  },
  es: {
    title: "Conocimientos y recursos sobre chapa de madera",
    description: "Artículos prácticos sobre paneles chapados, chapa natural y reconstituida, paneles decorativos y temas relacionados.",
    browseArticles: "Explorar artículos",
    categoryLabels: { All: "Todos", "Product News": "Novedades de productos", "Industry News": "Noticias del sector", "Company News": "Noticias de la empresa" },
    featuredArticles: "Artículos destacados",
    latestArticles: "Últimos artículos",
    loadMore: "Cargar más artículos",
    noArticles: "No hay artículos en esta categoría.",
    needHelp: "¿Necesita ayuda para elegir materiales?",
    helpDescription: "Indíquenos la aplicación, el sustrato, la especie de madera, el estilo de superficie y la cantidad. Tongli le recomendará paneles chapados o tableros decorativos adecuados.",
    contactTongli: "Contactar con Tongli",
    requestSamples: "Solicitar muestras",
    readMore: "Leer más",
  },
  fr: {
    title: "Connaissances et ressources sur le placage bois",
    description: "Articles pratiques sur les panneaux plaqués, les placages naturels et reconstitués, les panneaux décoratifs et les sujets associés.",
    browseArticles: "Parcourir les articles",
    categoryLabels: { All: "Tous", "Product News": "Actualités produits", "Industry News": "Actualités du secteur", "Company News": "Actualités de l’entreprise" },
    featuredArticles: "Articles à la une",
    latestArticles: "Derniers articles",
    loadMore: "Afficher plus d’articles",
    noArticles: "Aucun article dans cette catégorie.",
    needHelp: "Besoin d’aide pour choisir vos matériaux ?",
    helpDescription: "Indiquez-nous l’application, le support, l’essence, le style de surface et la quantité. Tongli vous recommandera les panneaux plaqués ou décoratifs adaptés.",
    contactTongli: "Contacter Tongli",
    requestSamples: "Demander des échantillons",
    readMore: "Lire la suite",
  },
  ar: {
    title: "معرفة وموارد قشرة الخشب",
    description: "مقالات عملية عن ألواح القشرة والقشرة الطبيعية والهندسية والألواح الزخرفية والموضوعات المرتبطة بها.",
    browseArticles: "تصفح المقالات",
    categoryLabels: { All: "الكل", "Product News": "أخبار المنتجات", "Industry News": "أخبار الصناعة", "Company News": "أخبار الشركة" },
    featuredArticles: "مقالات مميزة",
    latestArticles: "أحدث المقالات",
    loadMore: "عرض المزيد من المقالات",
    noArticles: "لا توجد مقالات في هذه الفئة.",
    needHelp: "هل تحتاج إلى مساعدة في اختيار المواد؟",
    helpDescription: "أخبرنا بالاستخدام والركيزة ونوع الخشب ونمط السطح والكمية. ستساعدك تونغلي في اختيار ألواح القشرة أو الألواح الزخرفية المناسبة.",
    contactTongli: "تواصل مع تونغلي",
    requestSamples: "طلب عينات",
    readMore: "اقرأ المزيد",
  },
};

export interface ProjectsPageCopy {
  globalProjects: string;
  title: string;
  completedProjects: string;
  across: string;
  countries: string;
  showcase: string;
  categoryLabels: Record<string, string>;
  productTypeLabels: Record<string, string>;
  project: string;
  location: string;
  product: string;
  materials: string;
  viewDetails: string;
  projectSingular: string;
  projectPlural: string;
  empty: string;
  ctaTitle: string;
  ctaDescription: string;
  requestAdvice: string;
  viewMaterials: string;
  clickToEnlarge: string;
  productType: string;
  materialsUsed: string;
  requestSimilar: string;
  close: string;
  previousImage: string;
  nextImage: string;
}

const projectCategoryLabels = {
  en: { all: "All", "Wood Veneer Panel": "Wood Veneer Panel", HPL: "HPL", "3D Wood Panel": "3D Wood Panel", "Natural Wood Veneer": "Natural Wood Veneer", "Engineered Wood Veneer": "Engineered Wood Veneer", "Melamine Board": "Melamine Board", "Wood Veneer Edge Banding": "Edge Banding", "Supporting Boards": "Supporting Boards" },
  es: { all: "Todos", "Wood Veneer Panel": "Panel chapado", HPL: "HPL", "3D Wood Panel": "Panel de madera 3D", "Natural Wood Veneer": "Chapa natural", "Engineered Wood Veneer": "Chapa reconstituida", "Melamine Board": "Tablero de melamina", "Wood Veneer Edge Banding": "Cantos de chapa", "Supporting Boards": "Tableros de soporte" },
  fr: { all: "Tous", "Wood Veneer Panel": "Panneau plaqué", HPL: "HPL", "3D Wood Panel": "Panneau bois 3D", "Natural Wood Veneer": "Placage naturel", "Engineered Wood Veneer": "Placage reconstitué", "Melamine Board": "Panneau mélaminé", "Wood Veneer Edge Banding": "Bandes de chant", "Supporting Boards": "Panneaux supports" },
  ar: { all: "الكل", "Wood Veneer Panel": "لوح قشرة خشب", HPL: "HPL", "3D Wood Panel": "لوح خشبي ثلاثي الأبعاد", "Natural Wood Veneer": "قشرة خشب طبيعية", "Engineered Wood Veneer": "قشرة خشب هندسية", "Melamine Board": "لوح ميلامين", "Wood Veneer Edge Banding": "شرائط حواف القشرة", "Supporting Boards": "ألواح داعمة" },
} satisfies Record<ExistingLocale, Record<string, string>>;

const projectsPageCopyBase: Record<ExistingLocale, ProjectsPageCopy> = {
  en: {
    globalProjects: "Global Projects", title: "Project Gallery", completedProjects: "completed projects", across: "across", countries: "countries", showcase: "showcasing our wood material expertise worldwide.",
    categoryLabels: projectCategoryLabels.en, productTypeLabels: projectCategoryLabels.en,
    project: "Project", location: "Location", product: "Product", materials: "Materials", viewDetails: "View Details", projectSingular: "project", projectPlural: "projects", empty: "No projects found in this category",
    ctaTitle: "Start Your Next Project", ctaDescription: "From concept to completion, our team delivers premium wood materials tailored to your specifications.", requestAdvice: "Request Material Advice", viewMaterials: "View Materials",
    clickToEnlarge: "Click to enlarge", productType: "Product Type", materialsUsed: "Materials Used", requestSimilar: "Request Similar Materials", close: "Close", previousImage: "Previous image", nextImage: "Next image",
  },
  es: {
    globalProjects: "Proyectos internacionales", title: "Galería de proyectos", completedProjects: "proyectos terminados", across: "en", countries: "países", showcase: "que muestran nuestra experiencia internacional en materiales de madera.",
    categoryLabels: projectCategoryLabels.es, productTypeLabels: projectCategoryLabels.es,
    project: "Proyecto", location: "Ubicación", product: "Producto", materials: "Materiales", viewDetails: "Ver detalles", projectSingular: "proyecto", projectPlural: "proyectos", empty: "No hay proyectos en esta categoría",
    ctaTitle: "Comience su próximo proyecto", ctaDescription: "Desde el concepto hasta la entrega, nuestro equipo suministra materiales de madera de alta calidad adaptados a sus especificaciones.", requestAdvice: "Solicitar asesoramiento", viewMaterials: "Ver materiales",
    clickToEnlarge: "Pulse para ampliar", productType: "Tipo de producto", materialsUsed: "Materiales utilizados", requestSimilar: "Solicitar materiales similares", close: "Cerrar", previousImage: "Imagen anterior", nextImage: "Imagen siguiente",
  },
  fr: {
    globalProjects: "Projets internationaux", title: "Galerie de projets", completedProjects: "projets réalisés", across: "dans", countries: "pays", showcase: "illustrant notre expertise mondiale des matériaux bois.",
    categoryLabels: projectCategoryLabels.fr, productTypeLabels: projectCategoryLabels.fr,
    project: "Projet", location: "Lieu", product: "Produit", materials: "Matériaux", viewDetails: "Voir les détails", projectSingular: "projet", projectPlural: "projets", empty: "Aucun projet dans cette catégorie",
    ctaTitle: "Lancez votre prochain projet", ctaDescription: "De la conception à la livraison, notre équipe fournit des matériaux bois haut de gamme adaptés à vos spécifications.", requestAdvice: "Demander conseil", viewMaterials: "Voir les matériaux",
    clickToEnlarge: "Cliquer pour agrandir", productType: "Type de produit", materialsUsed: "Matériaux utilisés", requestSimilar: "Demander des matériaux similaires", close: "Fermer", previousImage: "Image précédente", nextImage: "Image suivante",
  },
  ar: {
    globalProjects: "مشاريع عالمية", title: "معرض المشاريع", completedProjects: "مشروعًا مكتملًا", across: "في", countries: "دولة", showcase: "تعرض خبرتنا في مواد الأخشاب حول العالم.",
    categoryLabels: projectCategoryLabels.ar, productTypeLabels: projectCategoryLabels.ar,
    project: "المشروع", location: "الموقع", product: "المنتج", materials: "المواد", viewDetails: "عرض التفاصيل", projectSingular: "مشروع", projectPlural: "مشاريع", empty: "لا توجد مشاريع في هذه الفئة",
    ctaTitle: "ابدأ مشروعك القادم", ctaDescription: "من الفكرة حتى التسليم، يوفر فريقنا مواد خشبية عالية الجودة مصممة حسب مواصفاتك.", requestAdvice: "اطلب استشارة المواد", viewMaterials: "عرض المواد",
    clickToEnlarge: "اضغط للتكبير", productType: "نوع المنتج", materialsUsed: "المواد المستخدمة", requestSimilar: "اطلب مواد مماثلة", close: "إغلاق", previousImage: "الصورة السابقة", nextImage: "الصورة التالية",
  },
};

export interface CollectionsPageCopy {
  home: string;
  collections: string;
  materialLibrary: string;
  heroTitle: string;
  heroAccent: string;
  heroDescription: string;
  exploreCollections: string;
  overviewTitle: string;
  overviewDescription: string;
  viewAll: string;
  moreStyles: string;
  explore: string;
  moreOptions: string;
  materialPreview: string;
  sampleTitle: string;
  sampleDescription: string;
  requestSamples: string;
  sendInquiry: string;
  collectionDetails: Record<string, { shortName: string; description: string; features: string[] }>;
}

const collectionsPageCopyBase: Record<ExistingLocale, CollectionsPageCopy> = {
  en: {
    home: "Home", collections: "Collections", materialLibrary: "Material Library", heroTitle: "Wood Veneer & Decorative", heroAccent: "Surface Collections", heroDescription: "Browse our material library of natural wood veneer, engineered veneer, melamine and 3D wood surfaces. Compare colors, grains, textures and finishes for your next project.", exploreCollections: "Explore Collections", overviewTitle: "Our Material Collections", overviewDescription: "Our collections help buyers, designers and manufacturers compare wood grains, colors, textures and decorative surfaces before production. Select your preferred materials and request physical samples for your project.", viewAll: "View All", moreStyles: "+93 More Styles", explore: "Explore", moreOptions: "More Options", materialPreview: "Material Preview", sampleTitle: "Need Samples for Your Project?", sampleDescription: "Request physical material samples to evaluate colors, grains and textures before placing your order.", requestSamples: "Request Samples", sendInquiry: "Send Inquiry",
    collectionDetails: {
      "natural-wood-veneer": { shortName: "Natural Wood", description: "Authentic wood veneer sheets with natural grain patterns, color variations and organic textures from real wood species.", features: ["Natural Grain", "Unique Patterns", "Color Variation"] },
      "engineered-veneer": { shortName: "Engineered", description: "Reconstituted veneer with more than 300 consistent patterns, stable colors and uniform textures for large-scale production.", features: ["300+ Patterns", "Color Stable", "Batch Consistent"] },
      "melamine-board": { shortName: "Melamine", description: "Modern melamine-faced surfaces in wood grain, solid colors and contemporary textures for cabinets and furniture.", features: ["Modern Finishes", "Durable Surface", "Cost Effective"] },
      "3d-wood-panels": { shortName: "3D Wood", description: "Carved 3D decorative wood wall panels with fluted, geometric, wave and organic patterns for interiors, hotels and commercial spaces.", features: ["Solid Wood", "Custom Sizes", "Various Finishes"] },
    },
  },
  es: {
    home: "Inicio", collections: "Colecciones", materialLibrary: "Biblioteca de materiales", heroTitle: "Chapas de madera y", heroAccent: "colecciones de superficies", heroDescription: "Explore nuestra biblioteca de chapas naturales y reconstituidas, melamina y superficies de madera 3D. Compare colores, vetas, texturas y acabados para su próximo proyecto.", exploreCollections: "Explorar colecciones", overviewTitle: "Nuestras colecciones de materiales", overviewDescription: "Nuestras colecciones ayudan a compradores, diseñadores y fabricantes a comparar vetas, colores, texturas y superficies antes de producir. Seleccione sus materiales y solicite muestras físicas.", viewAll: "Ver todo", moreStyles: "+93 estilos más", explore: "Explorar", moreOptions: "Más opciones", materialPreview: "Vista previa del material", sampleTitle: "¿Necesita muestras para su proyecto?", sampleDescription: "Solicite muestras físicas para evaluar colores, vetas y texturas antes de realizar el pedido.", requestSamples: "Solicitar muestras", sendInquiry: "Enviar consulta",
    collectionDetails: {
      "natural-wood-veneer": { shortName: "Madera natural", description: "Hojas de chapa auténtica con vetas naturales, variaciones de color y texturas orgánicas de especies de madera reales.", features: ["Veta natural", "Diseños únicos", "Variación de color"] },
      "engineered-veneer": { shortName: "Reconstituida", description: "Chapa reconstituida con más de 300 diseños uniformes, colores estables y texturas constantes para producción a gran escala.", features: ["Más de 300 diseños", "Color estable", "Lotes uniformes"] },
      "melamine-board": { shortName: "Melamina", description: "Superficies melamínicas modernas con vetas de madera, colores lisos y texturas actuales para armarios y muebles.", features: ["Acabados modernos", "Superficie duradera", "Rentable"] },
      "3d-wood-panels": { shortName: "Madera 3D", description: "Paneles murales decorativos tallados con diseños acanalados, geométricos, ondulados y orgánicos para interiores y espacios comerciales.", features: ["Madera maciza", "Medidas a medida", "Varios acabados"] },
    },
  },
  fr: {
    home: "Accueil", collections: "Collections", materialLibrary: "Bibliothèque de matériaux", heroTitle: "Placages bois et", heroAccent: "collections de surfaces", heroDescription: "Parcourez notre bibliothèque de placages naturels et reconstitués, mélaminés et surfaces bois 3D. Comparez couleurs, veinages, textures et finitions pour votre prochain projet.", exploreCollections: "Explorer les collections", overviewTitle: "Nos collections de matériaux", overviewDescription: "Nos collections permettent aux acheteurs, designers et fabricants de comparer veinages, couleurs, textures et surfaces avant production. Sélectionnez vos matériaux et demandez des échantillons physiques.", viewAll: "Tout voir", moreStyles: "+93 autres styles", explore: "Explorer", moreOptions: "Plus d’options", materialPreview: "Aperçu du matériau", sampleTitle: "Besoin d’échantillons pour votre projet ?", sampleDescription: "Demandez des échantillons physiques pour évaluer couleurs, veinages et textures avant de commander.", requestSamples: "Demander des échantillons", sendInquiry: "Envoyer une demande",
    collectionDetails: {
      "natural-wood-veneer": { shortName: "Bois naturel", description: "Feuilles de placage authentiques aux veinages naturels, variations de couleur et textures organiques issues de véritables essences de bois.", features: ["Veinage naturel", "Motifs uniques", "Variation de couleur"] },
      "engineered-veneer": { shortName: "Reconstitué", description: "Placage reconstitué proposant plus de 300 motifs réguliers, des couleurs stables et des textures uniformes pour la grande série.", features: ["Plus de 300 motifs", "Couleur stable", "Lots homogènes"] },
      "melamine-board": { shortName: "Mélaminé", description: "Surfaces mélaminées modernes en décors bois, couleurs unies et textures contemporaines pour meubles et agencements.", features: ["Finitions modernes", "Surface durable", "Économique"] },
      "3d-wood-panels": { shortName: "Bois 3D", description: "Panneaux muraux décoratifs sculptés aux motifs rainurés, géométriques, ondulés et organiques pour intérieurs et espaces commerciaux.", features: ["Bois massif", "Dimensions sur mesure", "Finitions variées"] },
    },
  },
  ar: {
    home: "الرئيسية", collections: "المجموعات", materialLibrary: "مكتبة المواد", heroTitle: "قشرة الخشب والأسطح", heroAccent: "الزخرفية", heroDescription: "تصفح مكتبتنا من القشرة الطبيعية والهندسية والميلامين والأسطح الخشبية ثلاثية الأبعاد. قارن الألوان والعروق والملمس والتشطيبات لمشروعك القادم.", exploreCollections: "استكشف المجموعات", overviewTitle: "مجموعات المواد لدينا", overviewDescription: "تساعد مجموعاتنا المشترين والمصممين والمصنعين على مقارنة عروق الخشب والألوان والملمس والأسطح قبل الإنتاج. اختر المواد واطلب عينات فعلية لمشروعك.", viewAll: "عرض الكل", moreStyles: "+93 نمطًا إضافيًا", explore: "استكشف", moreOptions: "خيارات إضافية", materialPreview: "معاينة المادة", sampleTitle: "هل تحتاج إلى عينات لمشروعك؟", sampleDescription: "اطلب عينات فعلية لتقييم الألوان والعروق والملمس قبل تقديم طلبك.", requestSamples: "طلب عينات", sendInquiry: "إرسال استفسار",
    collectionDetails: {
      "natural-wood-veneer": { shortName: "خشب طبيعي", description: "صفائح قشرة أصلية بعروق طبيعية وتفاوتات لونية وملمس عضوي من أنواع الخشب الحقيقي.", features: ["عروق طبيعية", "أنماط فريدة", "تفاوت لوني"] },
      "engineered-veneer": { shortName: "قشرة هندسية", description: "قشرة معاد تكوينها بأكثر من 300 نمط متناسق وألوان ثابتة وملمس موحد للإنتاج واسع النطاق.", features: ["أكثر من 300 نمط", "لون ثابت", "تناسق الدفعات"] },
      "melamine-board": { shortName: "ميلامين", description: "أسطح ميلامين حديثة بعروق خشبية وألوان موحدة وملمس معاصر للخزائن والأثاث.", features: ["تشطيبات حديثة", "سطح متين", "اقتصادي"] },
      "3d-wood-panels": { shortName: "خشب ثلاثي الأبعاد", description: "ألواح جدران زخرفية منحوتة بأنماط مخددة وهندسية ومموجة وعضوية للديكورات والفنادق والمساحات التجارية.", features: ["خشب صلب", "مقاسات مخصصة", "تشطيبات متنوعة"] },
    },
  },
};

export interface ProductsPageCopy {
  heroLabel: string;
  heroTitle: string;
  heroAccent: string;
  heroDescription: string;
  requestSamples: string;
  aboutFactory: string;
  categoriesTitle: string;
  categoryLabels: Record<string, string>;
  showing: string;
  productSingular: string;
  productPlural: string;
  noProducts: string;
  viewDetails: string;
  emptyTitle: string;
  emptyDescription: string;
  viewCategory: string;
  loadMore: string;
  customTitle: string;
  customDescription: string;
  customSolutions: string;
  contactUs: string;
  whyTitle: string;
  whyDescription: string;
  features: Array<{ title: string; description: string }>;
}

const productsPageCopyBase: Record<ExistingLocale, ProductsPageCopy> = {
  en: {
    heroLabel: "Wood Material Solutions", heroTitle: "Premium Wood Products", heroAccent: "for Every Project", heroDescription: "Discover our comprehensive range of wood veneer panels, natural and engineered veneer, 3D panels and quality substrates for furniture, doors and interior applications.", requestSamples: "Request Samples", aboutFactory: "About Factory", categoriesTitle: "Product Categories",
    categoryLabels: { "All Products": "All Products", "Wood Veneer Panels": "Wood Veneer Panels", "Natural Wood Veneer": "Natural Wood Veneer", "Engineered Wood Veneer": "Engineered Wood Veneer", "3D Wood Panels": "3D Wood Panels", "Veneer Edge Banding": "Veneer Edge Banding", "Melamine Board": "Melamine Board", "Supporting Boards": "Supporting Boards", "Commercial Plywood": "Commercial Plywood", "Basswood Plywood": "Basswood Plywood", "Birch Plywood": "Birch Plywood", "Raw MDF": "Raw MDF", "Fireproof MDF": "Fireproof MDF", "MR MDF": "MR MDF", "Particle Board": "Particle Board" },
    showing: "Showing", productSingular: "product", productPlural: "products", noProducts: "No products listed yet", viewDetails: "View Details", emptyTitle: "Products will be updated soon.", emptyDescription: "Explore this category page for available options, materials and customization details.", viewCategory: "View Category", loadMore: "Load More Products", customTitle: "Can't Find What You Need?", customDescription: "We offer custom manufacturing for specific substrate, veneer, size and surface requirements. Contact our team for personalized solutions.", customSolutions: "Custom Solutions", contactUs: "Contact Us", whyTitle: "Why Choose Tongli Products", whyDescription: "Professional quality and reliable service to support your business growth worldwide",
    features: [{ title: "Strict Selection", description: "Strict selection and grading ensure consistent color, grain and performance." }, { title: "Custom Solutions", description: "OEM/ODM support with flexible sizes, cores and surface options." }, { title: "Wide Range", description: "From natural veneers to engineered panels and supporting boards." }, { title: "Export Packaging", description: "Strong packaging for sea transport and long-distance delivery." }, { title: "Fast Samples", description: "Samples ready in 3-7 days to help you win projects faster." }],
  },
  es: {
    heroLabel: "Soluciones en materiales de madera", heroTitle: "Productos de madera premium", heroAccent: "para cada proyecto", heroDescription: "Descubra nuestra gama de paneles chapados, chapas naturales y reconstituidas, paneles 3D y sustratos de calidad para muebles, puertas e interiores.", requestSamples: "Solicitar muestras", aboutFactory: "Conocer la fábrica", categoriesTitle: "Categorías de productos",
    categoryLabels: { "All Products": "Todos los productos", "Wood Veneer Panels": "Paneles de chapa de madera", "Natural Wood Veneer": "Chapa de madera natural", "Engineered Wood Veneer": "Chapa de madera reconstituida", "3D Wood Panels": "Paneles de madera 3D", "Veneer Edge Banding": "Cantos de chapa", "Melamine Board": "Tablero de melamina", "Supporting Boards": "Tableros de soporte", "Commercial Plywood": "Contrachapado comercial", "Basswood Plywood": "Contrachapado de tilo", "Birch Plywood": "Contrachapado de abedul", "Raw MDF": "MDF crudo", "Fireproof MDF": "MDF ignífugo", "MR MDF": "MDF resistente a la humedad", "Particle Board": "Tablero de partículas" },
    showing: "Mostrando", productSingular: "producto", productPlural: "productos", noProducts: "Todavía no hay productos publicados", viewDetails: "Ver detalles", emptyTitle: "Los productos se actualizarán próximamente.", emptyDescription: "Consulte la página de esta categoría para conocer opciones, materiales y posibilidades de personalización.", viewCategory: "Ver categoría", loadMore: "Cargar más productos", customTitle: "¿No encuentra lo que necesita?", customDescription: "Fabricamos a medida según el sustrato, la chapa, las dimensiones y la superficie requeridos. Contacte con nuestro equipo para obtener una solución personalizada.", customSolutions: "Soluciones a medida", contactUs: "Contáctenos", whyTitle: "Por qué elegir los productos Tongli", whyDescription: "Calidad profesional y servicio fiable para impulsar su negocio en todo el mundo",
    features: [{ title: "Selección rigurosa", description: "La selección y clasificación estrictas garantizan uniformidad de color, veta y rendimiento." }, { title: "Soluciones a medida", description: "Servicio OEM/ODM con dimensiones, núcleos y superficies flexibles." }, { title: "Amplia gama", description: "Desde chapas naturales hasta paneles reconstituidos y tableros de soporte." }, { title: "Embalaje para exportación", description: "Embalaje resistente para transporte marítimo y entregas de larga distancia." }, { title: "Muestras rápidas", description: "Muestras listas en 3-7 días para acelerar sus proyectos." }],
  },
  fr: {
    heroLabel: "Solutions en matériaux bois", heroTitle: "Produits bois haut de gamme", heroAccent: "pour chaque projet", heroDescription: "Découvrez notre gamme complète de panneaux plaqués, placages naturels et reconstitués, panneaux 3D et supports de qualité pour meubles, portes et aménagements intérieurs.", requestSamples: "Demander des échantillons", aboutFactory: "Découvrir l’usine", categoriesTitle: "Catégories de produits",
    categoryLabels: { "All Products": "Tous les produits", "Wood Veneer Panels": "Panneaux plaqués bois", "Natural Wood Veneer": "Placage bois naturel", "Engineered Wood Veneer": "Placage bois reconstitué", "3D Wood Panels": "Panneaux bois 3D", "Veneer Edge Banding": "Bandes de chant", "Melamine Board": "Panneau mélaminé", "Supporting Boards": "Panneaux supports", "Commercial Plywood": "Contreplaqué commercial", "Basswood Plywood": "Contreplaqué tilleul", "Birch Plywood": "Contreplaqué bouleau", "Raw MDF": "MDF brut", "Fireproof MDF": "MDF ignifuge", "MR MDF": "MDF hydrofuge", "Particle Board": "Panneau de particules" },
    showing: "Affichage de", productSingular: "produit", productPlural: "produits", noProducts: "Aucun produit publié pour le moment", viewDetails: "Voir les détails", emptyTitle: "Les produits seront bientôt mis à jour.", emptyDescription: "Consultez la page de cette catégorie pour découvrir les options, matériaux et possibilités de personnalisation.", viewCategory: "Voir la catégorie", loadMore: "Afficher plus de produits", customTitle: "Vous ne trouvez pas ce qu’il vous faut ?", customDescription: "Nous fabriquons sur mesure selon vos exigences de support, placage, dimensions et surface. Contactez notre équipe pour une solution personnalisée.", customSolutions: "Solutions sur mesure", contactUs: "Nous contacter", whyTitle: "Pourquoi choisir les produits Tongli", whyDescription: "Une qualité professionnelle et un service fiable pour accompagner votre croissance internationale",
    features: [{ title: "Sélection rigoureuse", description: "Une sélection et un classement stricts garantissent couleur, veinage et performances réguliers." }, { title: "Solutions sur mesure", description: "Support OEM/ODM avec dimensions, âmes et surfaces flexibles." }, { title: "Large gamme", description: "Des placages naturels aux panneaux reconstitués et panneaux supports." }, { title: "Emballage export", description: "Emballage robuste pour le transport maritime et les longues distances." }, { title: "Échantillons rapides", description: "Échantillons prêts sous 3 à 7 jours pour accélérer vos projets." }],
  },
  ar: {
    heroLabel: "حلول مواد الأخشاب", heroTitle: "منتجات خشبية عالية الجودة", heroAccent: "لكل مشروع", heroDescription: "اكتشف مجموعتنا الشاملة من ألواح القشرة والقشرة الطبيعية والهندسية والألواح ثلاثية الأبعاد والركائز عالية الجودة للأثاث والأبواب والديكورات الداخلية.", requestSamples: "طلب عينات", aboutFactory: "تعرف على المصنع", categoriesTitle: "فئات المنتجات",
    categoryLabels: { "All Products": "جميع المنتجات", "Wood Veneer Panels": "ألواح قشرة الخشب", "Natural Wood Veneer": "قشرة خشب طبيعية", "Engineered Wood Veneer": "قشرة خشب هندسية", "3D Wood Panels": "ألواح خشبية ثلاثية الأبعاد", "Veneer Edge Banding": "شرائط حواف القشرة", "Melamine Board": "ألواح الميلامين", "Supporting Boards": "ألواح داعمة", "Commercial Plywood": "خشب رقائقي تجاري", "Basswood Plywood": "خشب رقائقي من الزيزفون", "Birch Plywood": "خشب رقائقي من البتولا", "Raw MDF": "MDF خام", "Fireproof MDF": "MDF مقاوم للحريق", "MR MDF": "MDF مقاوم للرطوبة", "Particle Board": "لوح حبيبي" },
    showing: "عرض", productSingular: "منتج", productPlural: "منتجات", noProducts: "لا توجد منتجات منشورة بعد", viewDetails: "عرض التفاصيل", emptyTitle: "سيتم تحديث المنتجات قريبًا.", emptyDescription: "استكشف صفحة هذه الفئة لمعرفة الخيارات والمواد وتفاصيل التخصيص المتاحة.", viewCategory: "عرض الفئة", loadMore: "عرض المزيد من المنتجات", customTitle: "لم تجد ما تحتاج إليه؟", customDescription: "نوفر تصنيعًا مخصصًا حسب الركيزة والقشرة والمقاس ومتطلبات السطح. تواصل مع فريقنا للحصول على حل يناسبك.", customSolutions: "حلول مخصصة", contactUs: "تواصل معنا", whyTitle: "لماذا تختار منتجات تونغلي؟", whyDescription: "جودة احترافية وخدمة موثوقة لدعم نمو أعمالك عالميًا",
    features: [{ title: "اختيار دقيق", description: "يضمن الاختيار والتصنيف الدقيقان ثبات اللون والعروق والأداء." }, { title: "حلول مخصصة", description: "دعم OEM وODM مع مقاسات وركائز وخيارات سطح مرنة." }, { title: "مجموعة واسعة", description: "من القشرة الطبيعية إلى الألواح الهندسية والألواح الداعمة." }, { title: "تغليف للتصدير", description: "تغليف قوي للنقل البحري والتسليم لمسافات طويلة." }, { title: "عينات سريعة", description: "عينات جاهزة خلال 3-7 أيام لتسريع إنجاز مشاريعك." }],
  },
};

export interface CustomSolutionsPageCopy {
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  stats: string[];
  viewDetails: string;
  sections: Record<string, { title: string; subtitle: string; description: string; features: string[] }>;
  productLabels: Record<string, string>;
  ctaBadge: string;
  ctaTitle: string;
  ctaAccent: string;
  ctaDescription: string;
  getQuote: string;
  requestSamples: string;
  viewAllProducts: string;
  browseCollections: string;
  applications: string;
  contactUs: string;
}

const customSolutionsPageCopyBase: Record<ExistingLocale, CustomSolutionsPageCopy> = {
  en: {
    heroBadge: "Premium Wood Solutions", heroTitle: "Custom Solutions", heroDescription: "Tailored wood panel solutions for furniture, doors, cabinets and interior applications. Every detail customized to your project needs.", stats: ["Wood Species", "Projects Done", "Countries"], viewDetails: "View Details",
    sections: {
      "surface-finish": { title: "Surface Finish", subtitle: "01 Surface Treatment", description: "UV coating, paint and lacquer for protection and decoration. Choose from closed, open, semi-open and water-based paint finishes.", features: ["Closed Paint", "Open Paint", "Semi-Open Paint", "Water-based Paint"] },
      "veneer-species": { title: "Veneer Species", subtitle: "02 Wood Selection", description: "More than 150 wood species including oak, walnut, teak and ash. Natural, engineered, dyed and smoked options are available.", features: ["Natural Veneer", "Engineered Veneer", "Dyed Veneer", "Smoked Veneer"] },
      "veneer-matching": { title: "Veneer Matching", subtitle: "03 Pattern Design", description: "Book match, slip match and mix match create distinctive visual patterns. Choose quarter cut or crown cut for different grain effects.", features: ["Book Match", "Slip Match", "Mix Match", "Quarter Cut"] },
      substrate: { title: "Substrate", subtitle: "04 Core Board", description: "MDF, plywood, OSB and blockboard with different densities and properties. Fire-resistant and moisture-resistant options are available.", features: ["Standard MDF", "Plywood", "OSB Board", "Blockboard"] },
      "size-thickness": { title: "Size & Thickness", subtitle: "05 Dimensions", description: "Custom lengths from 2440 to 3600 mm and thicknesses from 3 to 45 mm. E1, E0 and ENF emission grades are available.", features: ["E1 / E0 / ENF", "2440-3600 mm Length", "3-45 mm Thickness", "0.2-3 mm Veneer"] },
      packaging: { title: "Packaging", subtitle: "06 Delivery", description: "Sample packaging, bulk packaging, custom labels and wooden frames for safe delivery worldwide.", features: ["Sample Pack", "Bulk Pack", "Custom Labels", "Wooden Frame"] },
    },
    productLabels: {}, ctaBadge: "Let's Work Together", ctaTitle: "Ready to Start Your", ctaAccent: "Custom Project?", ctaDescription: "Contact our team for tailored recommendations, samples and quotations for your specific requirements.", getQuote: "Get Custom Quote", requestSamples: "Request Samples", viewAllProducts: "View All Products", browseCollections: "Browse Collections", applications: "Applications", contactUs: "Contact Us",
  },
  es: {
    heroBadge: "Soluciones premium en madera", heroTitle: "Soluciones a medida", heroDescription: "Paneles de madera a medida para muebles, puertas, armarios e interiores. Personalizamos cada detalle según las necesidades de su proyecto.", stats: ["Especies de madera", "Proyectos realizados", "Países"], viewDetails: "Ver detalles",
    sections: {
      "surface-finish": { title: "Acabado de superficie", subtitle: "01 Tratamiento de superficie", description: "Recubrimiento UV, pintura y laca para proteger y decorar. Elija acabados cerrados, abiertos, semiabiertos o al agua.", features: ["Pintura cerrada", "Pintura a poro abierto", "Pintura semiabierta", "Pintura al agua"] },
      "veneer-species": { title: "Especies de chapa", subtitle: "02 Selección de madera", description: "Más de 150 especies, entre ellas roble, nogal, teca y fresno. Disponemos de chapa natural, reconstituida, teñida y ahumada.", features: ["Chapa natural", "Chapa reconstituida", "Chapa teñida", "Chapa ahumada"] },
      "veneer-matching": { title: "Composición de chapas", subtitle: "03 Diseño del patrón", description: "Las composiciones book match, slip match y mixtas crean patrones visuales únicos. Elija corte a la malla o a la plana para distintos efectos de veta.", features: ["Book match", "Slip match", "Composición mixta", "Corte a la malla"] },
      substrate: { title: "Sustrato", subtitle: "04 Tablero base", description: "MDF, contrachapado, OSB y alistonado con diferentes densidades y propiedades. Disponemos de opciones ignífugas y resistentes a la humedad.", features: ["MDF estándar", "Contrachapado", "Tablero OSB", "Tablero alistonado"] },
      "size-thickness": { title: "Medidas y grosor", subtitle: "05 Dimensiones", description: "Longitudes personalizadas de 2440 a 3600 mm y grosores de 3 a 45 mm. Disponibles grados de emisión E1, E0 y ENF.", features: ["E1 / E0 / ENF", "Longitud 2440-3600 mm", "Grosor 3-45 mm", "Chapa 0,2-3 mm"] },
      packaging: { title: "Embalaje", subtitle: "06 Entrega", description: "Embalaje de muestras y a granel, etiquetas personalizadas y bastidores de madera para una entrega segura en todo el mundo.", features: ["Paquete de muestras", "Embalaje a granel", "Etiquetas personalizadas", "Bastidor de madera"] },
    },
    productLabels: { Natural: "Natural", Engineered: "Reconstituida", Dyed: "Teñida", Smoked: "Ahumada", Standard: "Estándar", Custom: "Personalizado", Bulk: "A granel", Frame: "Bastidor", "Closed Paint": "Pintura cerrada", "Open Paint": "Poro abierto", "Semi-Open Paint": "Semiabierta", "Water-based Paint": "Pintura al agua", "Formaldehyde Emission": "Emisión de formaldehído", "Substrate Size": "Medida del sustrato", "Substrate Thickness": "Grosor del sustrato", "Veneer Thickness": "Grosor de la chapa" },
    ctaBadge: "Trabajemos juntos", ctaTitle: "¿Listo para comenzar su", ctaAccent: "proyecto a medida?", ctaDescription: "Contacte con nuestro equipo para recibir recomendaciones, muestras y presupuestos adaptados a sus requisitos.", getQuote: "Solicitar presupuesto", requestSamples: "Solicitar muestras", viewAllProducts: "Ver todos los productos", browseCollections: "Explorar colecciones", applications: "Aplicaciones", contactUs: "Contáctenos",
  },
  fr: {
    heroBadge: "Solutions bois haut de gamme", heroTitle: "Solutions sur mesure", heroDescription: "Des panneaux bois sur mesure pour meubles, portes, rangements et aménagements intérieurs. Chaque détail est adapté aux besoins de votre projet.", stats: ["Essences de bois", "Projets réalisés", "Pays"], viewDetails: "Voir les détails",
    sections: {
      "surface-finish": { title: "Finition de surface", subtitle: "01 Traitement de surface", description: "Revêtement UV, peinture et laque pour protéger et décorer. Choisissez une finition fermée, ouverte, semi-ouverte ou à base d’eau.", features: ["Finition fermée", "Finition pores ouverts", "Finition semi-ouverte", "Peinture à l’eau"] },
      "veneer-species": { title: "Essences de placage", subtitle: "02 Sélection du bois", description: "Plus de 150 essences dont chêne, noyer, teck et frêne. Placages naturels, reconstitués, teintés et fumés disponibles.", features: ["Placage naturel", "Placage reconstitué", "Placage teinté", "Placage fumé"] },
      "veneer-matching": { title: "Appairage des placages", subtitle: "03 Conception du motif", description: "Les appairages en livre, glissés et mixtes créent des motifs distinctifs. Choisissez un débit sur quartier ou sur dosse pour varier le veinage.", features: ["Appairage en livre", "Appairage glissé", "Appairage mixte", "Débit sur quartier"] },
      substrate: { title: "Support", subtitle: "04 Panneau support", description: "MDF, contreplaqué, OSB et latté de différentes densités et propriétés. Options ignifuges et hydrofuges disponibles.", features: ["MDF standard", "Contreplaqué", "Panneau OSB", "Panneau latté"] },
      "size-thickness": { title: "Dimensions et épaisseur", subtitle: "05 Dimensions", description: "Longueurs sur mesure de 2440 à 3600 mm et épaisseurs de 3 à 45 mm. Classes d’émission E1, E0 et ENF disponibles.", features: ["E1 / E0 / ENF", "Longueur 2440-3600 mm", "Épaisseur 3-45 mm", "Placage 0,2-3 mm"] },
      packaging: { title: "Emballage", subtitle: "06 Livraison", description: "Emballage d’échantillons ou en vrac, étiquettes personnalisées et cadres en bois pour une livraison sûre dans le monde entier.", features: ["Lot d’échantillons", "Emballage en vrac", "Étiquettes personnalisées", "Cadre en bois"] },
    },
    productLabels: { Natural: "Naturel", Engineered: "Reconstitué", Dyed: "Teinté", Smoked: "Fumé", Standard: "Standard", Custom: "Sur mesure", Bulk: "En vrac", Frame: "Cadre", "Closed Paint": "Finition fermée", "Open Paint": "Pores ouverts", "Semi-Open Paint": "Semi-ouverte", "Water-based Paint": "Peinture à l’eau", "Formaldehyde Emission": "Émission de formaldéhyde", "Substrate Size": "Dimensions du support", "Substrate Thickness": "Épaisseur du support", "Veneer Thickness": "Épaisseur du placage" },
    ctaBadge: "Travaillons ensemble", ctaTitle: "Prêt à lancer votre", ctaAccent: "projet sur mesure ?", ctaDescription: "Contactez notre équipe pour des recommandations, échantillons et devis adaptés à vos exigences.", getQuote: "Demander un devis", requestSamples: "Demander des échantillons", viewAllProducts: "Voir tous les produits", browseCollections: "Parcourir les collections", applications: "Applications", contactUs: "Nous contacter",
  },
  ar: {
    heroBadge: "حلول خشبية عالية الجودة", heroTitle: "حلول مخصصة", heroDescription: "حلول ألواح خشبية مخصصة للأثاث والأبواب والخزائن والديكورات الداخلية. نخصص كل تفصيل حسب احتياجات مشروعك.", stats: ["نوعًا من الخشب", "مشروع منجز", "دولة"], viewDetails: "عرض التفاصيل",
    sections: {
      "surface-finish": { title: "تشطيب السطح", subtitle: "01 معالجة السطح", description: "طلاء بالأشعة فوق البنفسجية ودهان ولاكيه للحماية والزخرفة. اختر التشطيب المغلق أو المفتوح أو شبه المفتوح أو الدهان المائي.", features: ["دهان مغلق", "دهان مفتوح المسام", "دهان شبه مفتوح", "دهان مائي"] },
      "veneer-species": { title: "أنواع القشرة", subtitle: "02 اختيار الخشب", description: "أكثر من 150 نوعًا تشمل البلوط والجوز والساج والرماد. تتوفر قشرة طبيعية وهندسية ومصبوغة ومدخنة.", features: ["قشرة طبيعية", "قشرة هندسية", "قشرة مصبوغة", "قشرة مدخنة"] },
      "veneer-matching": { title: "مطابقة القشرة", subtitle: "03 تصميم النمط", description: "تنتج المطابقة الكتابية والانزلاقية والمختلطة أنماطًا بصرية مميزة. اختر القطع الربعي أو التاجي للحصول على تأثيرات عروق مختلفة.", features: ["مطابقة كتابية", "مطابقة انزلاقية", "مطابقة مختلطة", "قطع ربعي"] },
      substrate: { title: "الركيزة", subtitle: "04 اللوح الأساسي", description: "ألواح MDF وخشب رقائقي وOSB وبلوك بورد بكثافات وخصائص مختلفة. تتوفر خيارات مقاومة للحريق والرطوبة.", features: ["MDF قياسي", "خشب رقائقي", "لوح OSB", "بلوك بورد"] },
      "size-thickness": { title: "المقاس والسماكة", subtitle: "05 الأبعاد", description: "أطوال مخصصة من 2440 إلى 3600 مم وسماكات من 3 إلى 45 مم. تتوفر درجات انبعاث E1 وE0 وENF.", features: ["E1 / E0 / ENF", "طول 2440-3600 مم", "سماكة 3-45 مم", "قشرة 0.2-3 مم"] },
      packaging: { title: "التغليف", subtitle: "06 التسليم", description: "تغليف للعينات والكميات الكبيرة وملصقات مخصصة وإطارات خشبية للتسليم الآمن حول العالم.", features: ["حزمة عينات", "تغليف بالجملة", "ملصقات مخصصة", "إطار خشبي"] },
    },
    productLabels: { Natural: "طبيعي", Engineered: "هندسي", Dyed: "مصبوغ", Smoked: "مدخن", Standard: "قياسي", Custom: "مخصص", Bulk: "بالجملة", Frame: "إطار", "Closed Paint": "دهان مغلق", "Open Paint": "مسام مفتوحة", "Semi-Open Paint": "شبه مفتوح", "Water-based Paint": "دهان مائي", "Formaldehyde Emission": "انبعاث الفورمالديهايد", "Substrate Size": "مقاس الركيزة", "Substrate Thickness": "سماكة الركيزة", "Veneer Thickness": "سماكة القشرة" },
    ctaBadge: "لنعمل معًا", ctaTitle: "هل أنت مستعد لبدء", ctaAccent: "مشروعك المخصص؟", ctaDescription: "تواصل مع فريقنا للحصول على توصيات وعينات وعروض أسعار مصممة وفق متطلباتك.", getQuote: "احصل على عرض سعر", requestSamples: "طلب عينات", viewAllProducts: "عرض جميع المنتجات", browseCollections: "تصفح المجموعات", applications: "التطبيقات", contactUs: "تواصل معنا",
  },
};

export const coreSeoCopy = expandLocalizedCopy(coreSeoCopyBase);
export const samplesPageCopy = expandLocalizedCopy(samplesPageCopyBase);
export const resourcesPageCopy = expandLocalizedCopy(resourcesPageCopyBase);
export const projectsPageCopy = expandLocalizedCopy(projectsPageCopyBase);
export const collectionsPageCopy = expandLocalizedCopy(collectionsPageCopyBase);
export const productsPageCopy = expandLocalizedCopy(productsPageCopyBase);
export const customSolutionsPageCopy = expandLocalizedCopy(customSolutionsPageCopyBase);
