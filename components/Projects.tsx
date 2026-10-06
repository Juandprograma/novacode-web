import Link from "next/link";

// Tipado estricto para los proyectos
type Project = {
  name: string;
  domain: string;
  description: string;
  tags: string[];
  url: string;
};

// Datos: Bloque 1 (Personales / Emprendimientos)
// Reordenados y sin MiSubsidioYa
const personalProjects: Project[] = [
  {
    name: "NextNurseGo",
    domain: "nextnursego.com",
    description: "Plataforma de salud con arquitectura optimizada (WPO) y alta escalabilidad. Enfoque en velocidad de carga y SEO técnico.",
    tags: ["Next.js", "WordPress", "PostgreSQL", "WPO"],
    url: "https://nextnursego.com",
  },
  {
    name: "Novacode 3D Experience",
    domain: "novacode.jdmcx.com",
    description: "Aplicación web 3D interactiva de alto rendimiento. Desarrollo visual avanzado, optimización de gráficos (WebGL) y diseño de alto impacto.",
    tags: ["Three.js", "React Three Fiber", "Next.js", "WebGL"],
    url: "https://novacode.jdmcx.com/",
  },
  {
    name: "ShopDukes",
    domain: "shopdukes.com",
    description: "E-commerce especializado y ultra-rápido. Integración de pagos y catálogo dinámico construido sobre WordPress.",
    tags: ["WordPress", "WooCommerce", "PHP", "E-commerce"],
    url: "https://shopdukes.com",
  }
];

// Datos: Bloque 2 (Agencia España - DigitalYa)
const agencyProjects: Project[] = [
  {
    name: "Benestar Animal Integratiu",
    domain: "benestaranimalintegratiu.com",
    description: "Sitio institucional para clínica veterinaria. Diseño accesible, enfocado en la conversión de citas y estructura semántica.",
    tags: ["WordPress", "SEO", "UI/UX", "DigitalYa"],
    url: "https://benestaranimalintegratiu.com",
  },
  {
    name: "Alvaro Zulategui",
    domain: "alvarozulategui.com",
    description: "Portafolio corporativo y blog profesional. Enfoque en rendimiento técnico, velocidad de carga y estructura de contenido impecable.",
    tags: ["WordPress", "Elementor", "SEO", "DigitalYa"],
    url: "https://alvarozulategui.com",
  },
  {
    name: "Coverdry",
    domain: "b11929320.es",
    description: "Plataforma corporativa B2B para soluciones de secado industrial. Desarrollo multilenguaje y diseño corporativo elegante.",
    tags: ["WordPress", "CSS3", "Responsive", "DigitalYa"],
    url: "https://b11929320.es",
  }
];

// Componente interno reutilizable: Toda la tarjeta es un enlace
const ProjectCard = ({ project }: { project: Project }) => (
  <Link 
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative block cursor-pointer bg-surface-dark/40 backdrop-blur-sm border border-surface-dark rounded-2xl overflow-hidden transition-all duration-500 hover:border-tech-cyan/40 hover:-translate-y-2"
  >
    
    {/* Simulación de ventana de navegador (macOS style) */}
    <div className="border-b border-surface-dark p-4 flex items-center gap-2 bg-surface-dark/50">
      <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
      <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
      <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
      <span className="ml-3 text-xs text-elegant-gray font-mono truncate group-hover:text-tech-cyan-light transition-colors duration-300">
        {project.domain}
      </span>
    </div>

    {/* Cuerpo de la tarjeta */}
    <div className="p-6 flex flex-col h-full">
      <h3 className="text-2xl font-bold text-soft-white mb-3 group-hover:text-tech-cyan-light transition-colors duration-300">
        {project.name}
      </h3>
      <p className="text-elegant-gray text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      {/* Etiquetas de tecnología (Estrictamente cyan) */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2.5 py-1 bg-tech-cyan/5 border border-tech-cyan/20 text-tech-cyan-light rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Indicador visual de acción (Ahora sin ser un enlace anidado, respeta HTML5) */}
      <div className="flex items-center gap-2 text-sm font-semibold text-soft-white group-hover:text-tech-cyan-light transition-colors duration-300">
        Visitar Sitio Web
        <svg
          className="w-4 h-4 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>

    {/* Efecto de glow inferior */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-tech-cyan/0 via-tech-cyan/50 to-tech-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  </Link>
);

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-24 md:py-32 bg-deep-dark overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-tech-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Encabezado principal de la sección */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-10 bg-subtle-gold"></span>
              <span className="text-sm tracking-[0.3em] uppercase text-tech-cyan-light font-medium">
                Portafolio
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-soft-white tracking-tight max-w-xl">
              Proyectos en <span className="text-tech-cyan">Producción</span>
            </h2>
          </div>
          <p className="text-elegant-gray max-w-md text-lg">
            Soluciones reales, desplegadas y optimizadas para generar impacto comercial y técnico.
          </p>
        </div>

        {/* BLOQUE 1: Proyectos Personales / Emprendimientos */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-soft-white mb-8 flex items-center gap-3">
            <span className="text-tech-cyan-light font-mono text-sm">01.</span> 
            Proyectos trabajados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>

        {/* BLOQUE 2: Experiencia en Agencia España (DigitalYa) */}
        <div>
          <h3 className="text-xl font-bold text-soft-white mb-8 flex items-center gap-3">
            <span className="text-tech-cyan-light font-mono text-sm">02.</span> 
            Experiencia en Agencia España (DigitalYa)
          </h3>
          <p className="text-elegant-gray text-sm mb-8 max-w-2xl">
            Proyectos comerciales y de agencia. Desarrollo de plataformas corporativas, sitios institucionales y portafolios profesionales bajo estándares internacionales.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agencyProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}