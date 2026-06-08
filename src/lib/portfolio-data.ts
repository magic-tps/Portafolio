export type IconKey =
  | "ai"
  | "vision"
  | "ocr"
  | "ml"
  | "fullstack"
  | "mvp"
  | "problem"
  | "frontend"
  | "backend"
  | "data"
  | "security"
  | "game";

export type ProjectTheme = "ml" | "landing" | "commerce" | "fashion" | "wine";

export const profile = {
  name: "Tomas Alonso Pastor Salazar",
  title: "Ciencias de la Computación | AI Engineer | Full Stack Developer",
  summary:
    "Perfil de Ciencias de la Computación en la UPC, noveno ciclo y Décimo Superior, con experiencia práctica creando soluciones web, analítica de datos y modelos de Machine Learning y Deep Learning aplicados a visión computacional, OCR y datos visuales.",
  location: "Lima, Perú",
  cycle: "Noveno ciclo",
  ranking: "Décimo Superior",
  currentGpa: "19.33",
  weightedGpa: "17.1",
  progress: "94.5%",
  english: "Inglés B2",
  email: "u201916314@upc.edu.pe",
  alternateEmail: "magictps972@gmail.com",
  phone: "960351653",
  githubUrl: "https://github.com/magic-tps",
  linkedInUrl:
    "https://www.linkedin.com/search/results/people/?keywords=Tomas%20Alonso%20Pastor%20Salazar",
  cvUrl: "Tomas-Alonso-Pastor-Salazar-CV.pdf",
};

export const navigation = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#stack", label: "Stack" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#ai-showcase", label: "AI Vision" },
  { href: "#contacto", label: "Contacto" },
];

export const heroBadges = [
  profile.location,
  profile.cycle,
  profile.ranking,
  `Promedio actual ${profile.currentGpa}`,
  profile.english,
];

export const aboutCards = [
  {
    icon: "ai" satisfies IconKey,
    title: "Inteligencia Artificial",
    body: "Diseño de prototipos inteligentes con criterio de producto, datos limpios y validación medible.",
  },
  {
    icon: "vision" satisfies IconKey,
    title: "Computer Vision",
    body: "Reconocimiento de imágenes, análisis de escenas y procesamiento visual orientado a casos reales.",
  },
  {
    icon: "ocr" satisfies IconKey,
    title: "OCR inteligente",
    body: "Extracción, limpieza y estructuración de información desde documentos, imágenes y flujos visuales.",
  },
  {
    icon: "ml" satisfies IconKey,
    title: "Machine Learning",
    body: "Modelos supervisados, evaluación con métricas y pipelines reproducibles construidos con Python.",
  },
  {
    icon: "fullstack" satisfies IconKey,
    title: "Full Stack",
    body: "Interfaces responsive y landing pages de alto impacto con React, Vite, JavaScript y buenas prácticas web.",
  },
  {
    icon: "data" satisfies IconKey,
    title: "Data Analytics",
    body: "Dashboards, SQL, Power BI y visualización para convertir datos en decisiones claras.",
  },
  {
    icon: "security" satisfies IconKey,
    title: "Ciberseguridad e IT",
    body: "Base sólida en Linux, redes, administración de sistemas y gestión de riesgos de seguridad.",
  },
];

export const techStack = [
  {
    icon: "ai" satisfies IconKey,
    category: "AI & Machine Learning",
    level: 90,
    items: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Matplotlib",
    ],
  },
  {
    icon: "ml" satisfies IconKey,
    category: "Entornos de datos",
    level: 88,
    items: ["Jupyter Notebook", "Google Colab", "Model testing", "Documentación"],
  },
  {
    icon: "frontend" satisfies IconKey,
    category: "Frontend",
    level: 90,
    items: ["React", "Vite", "Next.js", "TypeScript", "HTML", "CSS", "JavaScript"],
  },
  {
    icon: "data" satisfies IconKey,
    category: "Data & BI",
    level: 84,
    items: ["Power BI", "SQL", "Power Query", "DAX básico", "R"],
  },
  {
    icon: "security" satisfies IconKey,
    category: "Cybersecurity & IT",
    level: 76,
    items: ["Linux", "Redes", "IT Infrastructure", "Risk Management", "Python automation"],
  },
  {
    icon: "game" satisfies IconKey,
    category: "Game Development",
    level: 74,
    items: ["Unity", "2D/3D", "Level design", "Físicas", "Pixel art", "Low poly"],
  },
];

export const experienceTimeline = [
  {
    date: "Abril 2025",
    type: "Laboral",
    title: "Landing Page - 5 Viñas",
    role: "Desarrollador web",
    body: "Diseño y desarrollo integral de una landing page para promocionar piscos y vinos artesanales de Ica.",
    highlights: [
      "Integración de WhatsApp, redes sociales y secciones de compra.",
      "Formulario de contacto conectado al canal de atención del administrador.",
      "Estructura visual enfocada en promociones, categorías e historia de marca.",
    ],
    technologies: ["Vite", "React", "HTML", "CSS", "JavaScript"],
    demo: "https://magic-tps.github.io/5vi-as/",
    github: "https://github.com/magic-tps/5vi-as",
  },
  {
    date: "Marzo 2025",
    type: "Laboral",
    title: "Landing Page - Urban Threads",
    role: "Desarrollador web",
    body: "Construcción de una landing page moderna y responsiva para marca de ropa, orientada a conversión y navegación por segmentos.",
    highlights: [
      "Secciones organizadas por público y categorías de producto.",
      "Enlaces interactivos hacia WhatsApp, redes sociales y compras.",
      "Experiencia multiplataforma con tiempos de carga rápidos.",
    ],
    technologies: ["Vite", "React", "HTML", "CSS", "JavaScript"],
    demo: "https://magic-tps.github.io/UrbanThreads/",
    github: "https://github.com/magic-tps/UrbanThreads",
  },
  {
    date: "Noviembre 2024",
    type: "Académica",
    title: "Predicción de supervivencia Titanic",
    role: "Desarrollador ML",
    body: "Aplicación web que estima probabilidades de supervivencia usando aprendizaje automático y evaluación comparativa de modelos.",
    highlights: [
      "Entrenamiento y comparación de Random Forest y KNN.",
      "Limpieza, codificación y escalado del dataset.",
      "Evaluación con precisión, recall y F1-score.",
    ],
    technologies: ["Python", "Scikit-learn", "Streamlit", "Random Forest", "KNN"],
    demo: "https://datamingexamenfinal.streamlit.app/",
    github: "https://github.com/magic-tps/EXAMEN_FINAL_DATA_MINING",
  },
  {
    date: "Setiembre 2024",
    type: "Académica",
    title: "Landing Page Squirle Box",
    role: "Desarrollador web",
    body: "Diseño y desarrollo de una landing page responsiva enfocada en captación de leads y comunicación con clientes.",
    highlights: [
      "Interfaz moderna con HTML, CSS y JavaScript.",
      "Optimización de navegación, recursos y tiempos de carga.",
      "Formulario de contacto preparado para notificar nuevos leads.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive design"],
    demo: "https://magic-tps.github.io/LP_SB/",
    github: "https://github.com/magic-tps/LP_SB",
  },
  {
    date: "Enero 2023",
    type: "Laboral",
    title: "Landing Page - Impresiones 3D",
    role: "Desarrollador web",
    body: "Desarrollo de una landing page comercial para un servicio de impresiones 3D.",
    highlights: [
      "Integración de enlaces a WhatsApp y redes sociales.",
      "Formulario funcional para captar mensajes de clientes.",
      "Implementación completa de interfaz e interacción.",
    ],
    technologies: ["Vite", "React", "HTML", "CSS", "JavaScript"],
    demo: "https://magic-tps.github.io/Impresiones3D/",
    github: "https://github.com/magic-tps/Impresiones3D",
  },
];

export const projects = [
  {
    theme: "ml" satisfies ProjectTheme,
    title: "Predicción de Supervivencia Titanic",
    description:
      "Aplicación web que estima probabilidades de supervivencia con Random Forest y KNN, después de limpiar, codificar y evaluar el dataset.",
    technologies: ["Python", "Scikit-Learn", "Streamlit", "Random Forest", "KNN"],
    demo: "https://datamingexamenfinal.streamlit.app/",
    github: "https://github.com/magic-tps/EXAMEN_FINAL_DATA_MINING",
    metrics: [
      { label: "Modelos", value: "2" },
      { label: "Stack ML", value: "5" },
      { label: "Demo", value: "Live" },
    ],
  },
  {
    theme: "landing" satisfies ProjectTheme,
    title: "Landing Page Squirle Box",
    description:
      "Landing page responsiva con formulario de contacto y flujo de notificación para captar usuarios interesados.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
    demo: "https://magic-tps.github.io/LP_SB/",
    github: "https://github.com/magic-tps/LP_SB",
    metrics: [
      { label: "Objetivo", value: "Leads" },
      { label: "UX", value: "Landing" },
      { label: "Deploy", value: "Pages" },
    ],
  },
  {
    theme: "commerce" satisfies ProjectTheme,
    title: "Impresiones 3D",
    description:
      "Landing page comercial con enlaces a WhatsApp, redes sociales y formulario funcional para captar clientes.",
    technologies: ["Vite", "React", "HTML", "CSS", "JavaScript"],
    demo: "https://magic-tps.github.io/Impresiones3D/",
    github: "https://github.com/magic-tps/Impresiones3D",
    metrics: [
      { label: "Sector", value: "3D" },
      { label: "CTA", value: "Ventas" },
      { label: "UI", value: "Comercial" },
    ],
  },
  {
    theme: "fashion" satisfies ProjectTheme,
    title: "Urban Threads",
    description:
      "Landing page para marca de ropa con navegación por categorías, enfoque mobile y llamadas a conversión.",
    technologies: ["Vite", "React", "HTML", "CSS", "JavaScript"],
    demo: "https://magic-tps.github.io/UrbanThreads/",
    github: "https://github.com/magic-tps/UrbanThreads",
    metrics: [
      { label: "Marca", value: "Retail" },
      { label: "Look", value: "Moda" },
      { label: "Mobile", value: "First" },
    ],
  },
  {
    theme: "wine" satisfies ProjectTheme,
    title: "5 Viñas",
    description:
      "Landing page promocional para vinos y piscos artesanales, con secciones de compra, marca e historia.",
    technologies: ["Vite", "React", "HTML", "CSS", "JavaScript"],
    demo: "https://magic-tps.github.io/5vi-as/",
    github: "https://github.com/magic-tps/5vi-as",
    metrics: [
      { label: "Producto", value: "Vinos" },
      { label: "Tono", value: "Premium" },
      { label: "CTA", value: "Promo" },
    ],
  },
];

export const aiRoadmap = [
  {
    title: "Detección de objetos con YOLO",
    body: "Entrenamiento, inferencia y despliegue de modelos para escenas reales.",
  },
  {
    title: "Estimación de profundidad",
    body: "Mapas de profundidad para interpretar distancia, escala y contexto espacial.",
  },
  {
    title: "Medición de distancias",
    body: "Visión computacional aplicada a mediciones útiles y repetibles.",
  },
  {
    title: "OCR inteligente",
    body: "Lectura, limpieza y estructuración de texto desde imágenes y documentos.",
  },
  {
    title: "Deep Learning",
    body: "Experimentación con arquitecturas modernas y evaluación robusta.",
  },
];

export const certifications = [
  "IBM Artificial Intelligence Fundamentals",
  "Cisco AI Fundamentals with IBM SkillsBuild",
  "Introduction to Modern AI",
  "Introduction to Data Science",
  "Análisis de Datos con Power BI",
  "Power BI: Transformación y limpieza de datos con Power Query",
  "SQL for Data Science",
  "Foundations of Cybersecurity",
  "Tools of the Trade: Linux and SQL",
  "Automate Cybersecurity Tasks with Python",
  "Hacking Ético: Protege y Penetra Redes",
  "Python for Everybody",
  "Python Data Structures",
];

export const educationTimeline = [
  {
    label: "Universidad Peruana de Ciencias Aplicadas (UPC)",
    value: "Ciencias de la Computación",
  },
  {
    label: "Estado académico",
    value: "Noveno ciclo",
  },
  {
    label: "Avance curricular",
    value: "94.5%",
  },
  {
    label: "Rendimiento",
    value: "Promedio actual 19.33 - Ponderado 17.1 - Décimo Superior",
  },
  {
    label: "Idiomas",
    value: "Español nativo - Inglés B2",
  },
  {
    label: "Enfoque",
    value: "IA, visión computacional, OCR, datos y desarrollo web",
  },
];
