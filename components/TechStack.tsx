// Lista de tecnologías con un identificador para el SVG
const techs = [
  { name: "Next.js", focus: "A. Framework", icon: "next" },
  { name: "React", focus: "UI Library", icon: "react" },
  { name: "Tailwind CSS", focus: "Styling", icon: "tailwind" },
  { name: "Node.js", focus: "Backend", icon: "node" },
  { name: "PostgreSQL", focus: "Database", icon: "postgres" },
  { name: "WooCommerce", focus: "E-commerce", icon: "woo" },
];

// Función para renderizar los logos (usando paths genéricos de alta gama para evitar dependencias)
const renderIcon = (icon: string) => {
  const className = "w-8 h-8 text-elegant-gray group-hover:text-tech-cyan-light transition-colors duration-300";
  switch (icon) {
    case "next":
      return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.61.48-3.1 1.3-4.35l10.65 10.65C14.7 19.2 13.38 20 12 20z"/></svg>;
    case "react":
      return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 9.86c-1.18 0-2.14.96-2.14 2.14 0 1.18.96 2.14 2.14 2.14 1.18 0 2.14-.96 2.14-2.14 0-1.18-.96-2.14-2.14-2.14zm-6.22 7.36c-.52-.27-.83-1.04-.79-2.1.04-1.13.49-2.52 1.27-4.03.78-1.51 1.69-2.77 2.59-3.55.84-.73 1.61-1.05 2.15-.79.52.27.83 1.04.79 2.1-.04 1.13-.49 2.52-1.27 4.03-.78 1.51-1.69 2.77-2.59 3.55-.84.73-1.61 1.05-2.15.79zm12.44 0c-.54.26-1.31-.06-2.15-.79-.9-.78-1.81-2.04-2.59-3.55-.78-1.51-1.23-2.9-1.27-4.03-.04-1.06.27-1.83.79-2.1.54-.26 1.31.06 2.15.79.9.78 1.81 2.04 2.59 3.55.78 1.51 1.23 2.9 1.27 4.03.04 1.06-.27 1.83-.79 2.1z"/></svg>;
    case "tailwind":
      return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.09 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35-.98-1-2.09-2.15-4.6-2.15zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.09 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35-.98-1-2.09-2.15-4.6-2.15z"/></svg>;
    case "node":
      return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 1.85c-.27 0-.53.07-.76.2L2.05 7.4c-.47.27-.76.77-.76 1.32v6.56c0 .55.29 1.05.76 1.32l9.19 5.31c.23.13.49.2.76.2s.53-.07.76-.2l9.19-5.31c.47-.27.76-.77.76-1.32V8.72c0-.55-.29-1.05-.76-1.32l-9.19-5.31c-.23-.13-.49-.2-.76-.2zM12 4.4l7.5 4.33-7.5 4.33L4.5 8.73 12 4.4z"/></svg>;
    case "postgres":
      return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M23.56 11.15c-.16-.34-.48-.54-.84-.54-.15 0-.3.03-.44.1-.23.11-.4.29-.5.51-.18.4-.37 1.02-.37 1.02s-.24-.72-.46-1.06c-.24-.38-.6-.62-1.03-.62-.15 0-.3.04-.43.1-.26.12-.43.33-.52.57-.26.7-.46 2.16-.46 2.16s-.15-.62-.35-1.08c-.25-.58-.68-.88-1.2-.88-.17 0-.33.04-.48.1-.28.12-.48.35-.58.62-.3.8-.53 2.4-.53 2.4s-.2-.84-.47-1.32c-.3-.55-.76-.84-1.32-.84-.18 0-.35.04-.5.1-.32.13-.55.38-.67.68-.36.9-.64 2.7-.64 2.7s-.18-.95-.43-1.56c-.3-.72-.83-1.1-1.5-1.1-.2 0-.4.05-.57.13-.38.17-.66.47-.8.84-.42 1.1-.78 3.18-.78 3.18s-.16-1.18-.42-2.02c-.3-.96-.83-1.5-1.56-1.5-.22 0-.44.06-.63.16-.43.22-.74.6-.88 1.06-.42 1.36-.78 3.92-.78 3.92s-.05-2.1-.28-3.4c-.28-1.56-.86-2.32-1.74-2.32-.24 0-.48.07-.68.2-.47.3-.76.78-.83 1.33-.14 1.1-.28 2.96-.28 2.96L.56 11.7c-.2-.2-.46-.3-.72-.3-.16 0-.32.04-.46.12-.3.18-.48.5-.48.84 0 .2.07.4.2.55l2.32 2.6c.2.22.5.35.8.35.16 0 .31-.04.45-.1.32-.15.55-.43.62-.76.1-.48.2-1.1.2-1.1s.1 1.5.4 2.36c.3.86.86 1.36 1.6 1.36.24 0 .48-.07.68-.2.47-.3.76-.78.83-1.33.14-1.1.28-2.96.28-2.96s.05 2.1.28 3.4c.28 1.56.86 2.32 1.74 2.32.24 0 .48-.07.68-.2.47-.3.76-.78.83-1.33.14-1.1.28-2.96.28-2.96s.05 2.1.28 3.4c.28 1.56.86 2.32 1.74 2.32.24 0 .48-.07.68-.2.47-.3.76-.78.83-1.33.14-1.1.28-2.96.28-2.96s.05 2.1.28 3.4c.28 1.56.86 2.32 1.74 2.32.24 0 .48-.07.68-.2.47-.3.76-.78.83-1.33.14-1.1.28-2.96.28-2.96s.05 2.1.28 3.4c.28 1.56.86 2.32 1.74 2.32.24 0 .48-.07.68-.2.47-.3.76-.78.83-1.33.14-1.1.28-2.96.28-2.96z"/></svg>;
    case "woo":
      return <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M3 5h18a1 1 0 011 1v8a1 1 0 01-1 1h-5l-2.5 2.5a.5.5 0 01-.7 0L10 15H3a1 1 0 01-1-1V6a1 1 0 011-1zm3.5 3.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5zm0 1c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5zM15.5 8.5c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-.5h-1v.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v.5h1V10c0-.83-.67-1.5-1.5-1.5z"/></svg>;
    default:
      return <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c-.311.27-.58.566-.81.883a3 3 0 0 1-.81-.883M12 3v18M5.25 6.087c.311.27.58.566.81.883m0 0c.311.27.58.566.81.883M5.25 17.913c.311-.27.58-.566.81-.883m0 0c.311-.27.58-.566.81-.883m0 0c.311-.27.58-.566.81-.883m0 0c.311.27.58.566.81.883" /></svg>;
  }
};

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24 md:py-32 bg-surface-dark/30 border-y border-surface-dark overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tech-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-10 bg-subtle-gold"></span>
            <span className="text-sm tracking-[0.3em] uppercase text-tech-cyan-light font-medium">
              Stack Tecnológico
            </span>
            <span className="h-[2px] w-10 bg-subtle-gold"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-soft-white tracking-tight">
            Herramientas de <span className="text-tech-cyan">Alto Rendimiento</span>
          </h2>
          <p className="text-elegant-gray max-w-2xl mx-auto text-lg mt-6">
            No sigo modas pasajeras, utilizo el stack moderno más robusto para garantizar velocidad, seguridad y escalabilidad.
          </p>
        </div>

        {/* Grid de Tecnologías */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="group relative flex flex-col items-center justify-center p-6 bg-deep-dark rounded-xl border border-surface-dark hover:border-tech-cyan/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)]"
            >
              <div className="mb-4">
                {renderIcon(tech.icon)}
              </div>
              <h3 className="text-base font-semibold text-soft-white mb-1 group-hover:text-tech-cyan-light transition-colors duration-300">
                {tech.name}
              </h3>
              <p className="text-xs text-elegant-gray font-mono">
                {tech.focus}
              </p>
            </div>
          ))}
        </div>

        {/* Mensaje de cierre de sección */}
        <div className="mt-16 text-center">
          <p className="text-elegant-gray text-lg">
            ¿Listo para construir algo robusto?{" "}
            <a href="#contacto" className="text-tech-cyan-light font-semibold underline-offset-4 hover:underline">
              Hablemos de tu proyecto.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}