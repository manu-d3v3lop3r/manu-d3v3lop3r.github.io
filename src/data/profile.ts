/**
 * Single source of truth for the professional profile.
 * Home, About, Experience, Learning and CV pages all read from here,
 * so any change to the CV only needs to be made once.
 */
import type { Lang } from "../i18n/utils";
import type { localeRoutes } from "./locales";

type Localized<T = string> = Record<Lang, T>;

export const person = {
  name: "Manuel Jiménez",
  role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
  location: { es: "Madrid, España", en: "Madrid, Spain" },
  headline: {
    es: "Java · Spring Boot · PHP · JavaScript. Desarrollo web, APIs REST y automatización de procesos.",
    en: "Java · Spring Boot · PHP · JavaScript. Web development, REST APIs and process automation.",
  },
} as const;

/* -------------------------------------------------------------------------- */
/*                                 Experience                                 */
/* -------------------------------------------------------------------------- */

export interface ExperienceArea {
  title: Localized;
  items: Localized<string[]>;
}

export interface Experience {
  id: string;
  role: Localized;
  company: string;
  companyContext: Localized;
  contractType: Localized;
  contract: Localized;
  /** Human-readable dates, e.g. "ago. 2024 – ago. 2025". */
  period: Localized;
  duration: Localized;
  location: Localized;
  summary: Localized;
  areas: ExperienceArea[];
  technologies: string[];
  /** Keys of `localeRoutes` pointing to the related case studies. */
  relatedProjects: (keyof typeof localeRoutes)[];
}

export const experience: Experience[] = [
  {
    id: "uned",
    role: {
      es: "Técnico en Operaciones de Sistemas Informáticos",
      en: "IT Systems Operations Technician",
    },
    company: "UNED Madrid",
    companyContext: {
      es: "Red de centros asociados de una universidad pública de educación a distancia en la Comunidad de Madrid.",
      en: "Network of associated centres of a public distance-learning university in the Madrid region.",
    },
    contractType: { es: "Contrato formativo", en: "Training contract" },
    contract: {
      es: "Contrato formativo · Programa Primera Experiencia Profesional en las Administraciones Públicas (Next Generation EU)",
      en: "Training contract · First Professional Experience in Public Administration programme (Next Generation EU)",
    },
    period: { es: "ago. 2024 – ago. 2025", en: "Aug 2024 – Aug 2025" },
    duration: { es: "1 año y 1 mes", en: "1 yr 1 mo" },
    location: { es: "Madrid", en: "Madrid" },
    summary: {
      es: "Digitalización y automatización de procesos administrativos, migración del portal institucional y la intranet a Magnolia CMS, documentación técnica y soporte a plataformas corporativas.",
      en: "Digitalisation and automation of administrative processes, migration of the institutional website and intranet to Magnolia CMS, technical documentation and support for corporate platforms.",
    },
    areas: [
      {
        title: { es: "Automatización de procesos", en: "Process automation" },
        items: {
          es: [
            "Automatización de procesos administrativos con Microsoft Power Automate, Microsoft Forms y Microsoft Lists, reduciendo tareas manuales repetitivas.",
            "Análisis de flujos internos existentes y participación en proyectos de digitalización y mejora de procesos.",
          ],
          en: [
            "Automated administrative processes with Microsoft Power Automate, Microsoft Forms and Microsoft Lists, reducing repetitive manual work.",
            "Analysed existing internal workflows and took part in digitalisation and process-improvement projects.",
          ],
        },
      },
      {
        title: { es: "Web institucional y CMS", en: "Institutional website & CMS" },
        items: {
          es: [
            "Migración de la web institucional y la intranet de WordPress a Magnolia CMS, maquetando las páginas con los componentes y plantillas disponibles en la plataforma.",
            "Reorganización de contenidos, menús y navegación, y participación en mejoras de SEO técnico y estructura web.",
          ],
          en: [
            "Migrated the institutional website and intranet from WordPress to Magnolia CMS, building pages with the platform's existing components and templates.",
            "Reorganised content, menus and navigation, and contributed to technical SEO and site-structure improvements.",
          ],
        },
      },
      {
        title: { es: "Documentación y evaluación tecnológica", en: "Documentation & technology evaluation" },
        items: {
          es: [
            "Elaboración de documentación técnica y manuales de usuario para sistemas internos.",
            "Evaluación de herramientas tecnológicas orientadas a optimizar procesos de la organización.",
          ],
          en: [
            "Wrote technical documentation and user manuals for internal systems.",
            "Evaluated technology tools aimed at optimising the organisation's processes.",
          ],
        },
      },
      {
        title: { es: "Soporte técnico", en: "Technical support" },
        items: {
          es: [
            "Soporte técnico y mantenimiento de plataformas corporativas y resolución de incidencias.",
          ],
          en: [
            "Provided technical support and maintenance for corporate platforms and resolved incidents.",
          ],
        },
      },
    ],
    technologies: [
      "Power Automate",
      "Microsoft Forms",
      "Microsoft Lists",
      "Magnolia CMS",
      "WordPress",
      "SEO técnico",
      "Word",
      "PowerPoint",
    ],
    relatedProjects: ["power-automate", "magnolia"],
  },
  {
    id: "esmasa",
    role: { es: "Desarrollador de Aplicaciones Web", en: "Web Application Developer" },
    company: "ESMASA",
    companyContext: {
      es: "Empresa pública de servicios municipales: residuos, limpieza viaria, mantenimiento de instalaciones y otros servicios urbanos.",
      en: "Public municipal services company: waste management, street cleaning, facility maintenance and other city services.",
    },
    contractType: { es: "Prácticas", en: "Internship" },
    contract: {
      es: "Prácticas · FP de Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
      en: "Internship · Higher Vocational Diploma in Multiplatform Application Development",
    },
    period: { es: "abr. 2024 – jun. 2024", en: "Apr 2024 – Jun 2024" },
    duration: { es: "3 meses", en: "3 months" },
    location: { es: "Alcorcón (Madrid)", en: "Alcorcón (Madrid)" },
    summary: {
      es: "Desarrollo desde cero hasta producción de una aplicación web para digitalizar y gestionar documentación administrativa y legal.",
      en: "Built a web application from scratch to production to digitise and manage administrative and legal documentation.",
    },
    areas: [
      {
        title: { es: "Desarrollo de la aplicación", en: "Application development" },
        items: {
          es: [
            "Desarrollo de una aplicación web de gestión documental desde cero hasta su puesta en producción, en un equipo de dos personas.",
            "Diseño de la base de datos relacional en MySQL para clasificar, almacenar y consultar la documentación.",
            "Implementación de la subida y almacenamiento de documentos escaneados, integrando Google Drive mediante Google Apps Script.",
            "Desarrollo del frontend con Bootstrap, jQuery, DataTables y SweetAlert2: listados interactivos, formularios y confirmaciones.",
          ],
          en: [
            "Built a document management web application from scratch to production in a two-person team.",
            "Designed the relational MySQL database used to classify, store and query documents.",
            "Implemented the upload and storage of scanned documents, integrating Google Drive through Google Apps Script.",
            "Built the frontend with Bootstrap, jQuery, DataTables and SweetAlert2: interactive listings, forms and confirmations.",
          ],
        },
      },
      {
        title: { es: "Entorno y servidor", en: "Environment & server" },
        items: {
          es: [
            "Configuración y mantenimiento del entorno de desarrollo y del servidor local (Apache, PHP y MySQL con XAMPP), incluyendo red, puertos, usuarios y permisos.",
          ],
          en: [
            "Set up and maintained the development environment and the local server (Apache, PHP and MySQL with XAMPP), including networking, ports, users and permissions.",
          ],
        },
      },
    ],
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "DataTables",
      "SweetAlert2",
      "HTML",
      "CSS",
      "Google Apps Script",
      "Google Drive",
      "XAMPP",
    ],
    relatedProjects: ["document-management"],
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Education                                 */
/* -------------------------------------------------------------------------- */

export const education = [
  {
    title: {
      es: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      en: "Higher Vocational Diploma in Multiplatform Application Development (DAM)",
    },
    institution: "IES Gabriel García Márquez",
    period: { es: "sept. 2022 – jun. 2024", en: "Sep 2022 – Jun 2024" },
    detail: {
      es: "Título oficial · Formación Profesional de Grado Superior",
      en: "Official qualification · Higher Vocational Education (Spain)",
    },
    description: {
      es: "Programación (Java, Kotlin), bases de datos, desarrollo de interfaces, aplicaciones móviles Android, acceso a datos y servicios. Proyecto final: aplicación Android de turismo.",
      en: "Programming (Java, Kotlin), databases, interface development, Android mobile apps, data access and services. Final project: Android tourism app.",
    },
  },
  {
    title: {
      es: "Máster profesional en Full Stack Development",
      en: "Professional Master in Full Stack Development",
    },
    institution: "MasterD",
    period: { es: "ene. 2025 – nov. 2025", en: "Jan 2025 – Nov 2025" },
    detail: {
      es: "Título propio (no oficial)",
      en: "Private qualification (non-official degree)",
    },
    description: {
      es: "Desarrollo frontend y backend: JavaScript, frameworks SPA, Node.js, APIs REST y bases de datos.",
      en: "Frontend and backend development: JavaScript, SPA frameworks, Node.js, REST APIs and databases.",
    },
  },
] as const;

/* -------------------------------------------------------------------------- */
/*                               Certifications                               */
/* -------------------------------------------------------------------------- */

export interface Certification {
  title: Localized;
  provider: string;
}

export interface CertificationGroup {
  title: Localized;
  items: Certification[];
}

export const certifications: CertificationGroup[] = [
  {
    title: { es: "Programación", en: "Programming" },
    items: [
      {
        title: {
          es: "Java y Programación Orientada a Objetos desde cero",
          en: "Java & Object-Oriented Programming from scratch",
        },
        provider: "MoureDev",
      },
      { title: { es: "Python Essentials 1", en: "Python Essentials 1" }, provider: "Cisco" },
      { title: { es: "Python Essentials 2", en: "Python Essentials 2" }, provider: "Cisco" },
      { title: { es: "JavaScript Essentials 1", en: "JavaScript Essentials 1" }, provider: "Cisco" },
    ],
  },
  {
    title: { es: "Desarrollo web y móvil", en: "Web & mobile development" },
    items: [
      {
        title: {
          es: "Introducción al desarrollo web: HTML y CSS",
          en: "Introduction to Web Development: HTML & CSS",
        },
        provider: "Google",
      },
      {
        title: {
          es: "Introducción al desarrollo de apps móviles",
          en: "Introduction to Mobile App Development",
        },
        provider: "Google",
      },
    ],
  },
  {
    title: { es: "Inteligencia artificial", en: "Artificial intelligence" },
    items: [
      {
        title: {
          es: "IA Responsable y Prompt Engineering",
          en: "Responsible AI & Prompt Engineering",
        },
        provider: "Founderz",
      },
      { title: { es: "Prompt Engineering", en: "Prompt Engineering" }, provider: "ODILO" },
    ],
  },
  {
    title: { es: "Ciberseguridad y productividad", en: "Cybersecurity & productivity" },
    items: [
      {
        title: {
          es: "Protege tu negocio: ciberseguridad en el teletrabajo",
          en: "Protect your business: cybersecurity for remote work",
        },
        provider: "Google",
      },
      { title: { es: "Excel Avanzado", en: "Advanced Excel" }, provider: "ODILO" },
      { title: { es: "Excel Intermedio", en: "Intermediate Excel" }, provider: "ODILO" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                   Skills                                   */
/* -------------------------------------------------------------------------- */

export interface SkillGroup {
  id: string;
  title: Localized;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    id: "languages",
    title: { es: "Lenguajes", en: "Languages" },
    items: ["Java", "Kotlin", "JavaScript", "PHP", "Python", "SQL", "HTML5", "CSS", "XML", "PowerShell"],
  },
  {
    id: "frontend",
    title: { es: "Frontend", en: "Frontend" },
    items: [
      "React",
      "Vue.js",
      "Angular",
      "AngularJS",
      "jQuery",
      "Bootstrap",
      "Materialize",
      "DataTables",
      "SweetAlert2",
      "Responsive Design",
      "SPA",
    ],
  },
  {
    id: "backend",
    title: { es: "Backend y APIs", en: "Backend & APIs" },
    items: [
      "Spring Boot",
      "Spring Security",
      "JWT",
      "Spring Data JPA",
      "Hibernate",
      "MapStruct",
      "APIs REST",
      "OpenAPI / Swagger",
      "PHP",
      "Node.js",
      "Django",
      "AJAX",
      "JSON",
      "Apache",
    ],
  },
  {
    id: "data",
    title: { es: "Bases de datos", en: "Databases" },
    items: ["MySQL", "H2", "MySQL Workbench", "Firebase", "Google Sheets", "Excel"],
  },
  {
    id: "mobile",
    title: { es: "Móvil", en: "Mobile" },
    items: ["Android", "Kotlin", "Android Studio", "Google Maps API", "Firebase Auth"],
  },
  {
    id: "automation",
    title: { es: "Automatización", en: "Automation" },
    items: ["Power Automate", "Microsoft Lists", "Microsoft Forms", "Google Apps Script"],
  },
  {
    id: "cms",
    title: { es: "CMS y plataformas", en: "CMS & platforms" },
    items: ["Magnolia CMS", "WordPress", "Joomla!", "SharePoint"],
  },
  {
    id: "tools",
    title: { es: "Herramientas", en: "Tools" },
    items: [
      "Git",
      "GitHub",
      "Maven",
      "Postman",
      "VS Code",
      "IntelliJ IDEA",
      "Eclipse",
      "XAMPP",
      "VirtualBox",
      "ChatGPT / Gemini / Copilot",
    ],
  },
  {
    id: "practices",
    title: { es: "Testing y buenas prácticas", en: "Testing & practices" },
    items: [
      "JUnit 5",
      "Mockito",
      "MockMvc",
      "Arquitectura por capas",
      "MVC",
      "Scrum",
      "Debugging",
      "Documentación técnica",
      "SEO técnico",
      "UI/UX",
    ],
  },
];

/** Skill labels that need translating in English (everything else is a proper noun). */
const skillTranslations: Record<string, string> = {
  "APIs REST": "REST APIs",
  "Documentación técnica": "Technical documentation",
  "Arquitectura por capas": "Layered architecture",
  "SEO técnico": "Technical SEO",
};

export function skillLabel(item: string, lang: Lang): string {
  return lang === "en" ? (skillTranslations[item] ?? item) : item;
}

/* -------------------------------------------------------------------------- */
/*                                  Languages                                 */
/* -------------------------------------------------------------------------- */

export const spokenLanguages = [
  { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
  { name: { es: "Inglés", en: "English" }, level: { es: "B1", en: "B1 (intermediate)" } },
] as const;

/** Keywords for structured data (schema.org Person.knowsAbout). */
export const knowsAbout = [
  "Software Development",
  "Full Stack Web Development",
  "Process Automation",
  ...new Set(skills.flatMap((group) => group.items.map((item) => skillLabel(item, "en")))),
];
