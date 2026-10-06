export default function Hero() {
  // URLs configuradas para CRO
  const whatsappUrl = "https://wa.me/573006779183?text=Hola%20Juan%20Diego,%20quiero%20cotizar%20un%20proyecto%20de%20desarrollo%20web";
  const emailUrl = "mailto:desarrollswebj@gmail.com?subject=Contacto%20Profesional%20Novacode&body=Hola%20Juan%20Diego,%20me%20gustaría%20hablar%20sobre...";

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
    >
      {/* Efectos visuales de fondo (Blur shapes) para darle profundidad tecnológica */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-subtle-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Contenido Central */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Badge de disponibilidad (Ayuda a la conversión) */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-tech-cyan/30 bg-tech-cyan/5">
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-tech-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-tech-cyan-light"></span>
          </span>
          <span className="text-sm font-medium text-tech-cyan-light tracking-wide">
            Disponible para nuevos proyectos
          </span>
        </div>

        {/* Titular H1 (SEO + Impacto) */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-soft-white tracking-tight leading-tight mb-6">
          Desarrollo Web y de Software{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-tech-cyan-light">a medida</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 9C75 3 225 3 297 9" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>{" "}
          en Bogotá
        </h1>

        {/* Subtítulo Persuasivo */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-elegant-gray mb-12 leading-relaxed">
          Convierto tus ideas en soluciones digitales eficientes. Código limpio,
          alto rendimiento y <span className="text-soft-white font-semibold">atención personalizada</span> para impulsar tu negocio al siguiente nivel.
        </p>

        {/* Llamados a la Acción (CTAs) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* CTA Principal: WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-tech-cyan text-deep-dark font-bold py-4 px-8 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:scale-105"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 bg-subtle-gold opacity-20 group-hover:w-full group-hover:h-full"></span>
            {/* Icono de WhatsApp SVG inline */}
            <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span className="relative z-10">Cotizar por WhatsApp</span>
          </a>

          {/* CTA Secundario: Email */}
          <a
            href={emailUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-subtle-gold/40 text-soft-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-subtle-gold/10 hover:border-subtle-gold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Contactar por Email
          </a>
        </div>
      </div>
    </section>
  );
}