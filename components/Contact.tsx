import ContactForm from "./ContactForm";

export default function Contact() {
  const whatsappUrl = "https://wa.me/573006779183?text=Hola%20Juan%20Diego,%20quiero%20cotizar%20un%20proyecto%20de%20desarrollo%20web";

  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-deep-dark overflow-hidden">
      {/* Fondo visual */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-tech-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Encabezado persuasivo */}
        <div className="text-center mb-16 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[2px] w-10 bg-subtle-gold"></span>
            <span className="text-sm tracking-[0.3em] uppercase text-tech-cyan-light font-medium">
              Hablemos
            </span>
            <span className="h-[2px] w-10 bg-subtle-gold"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-soft-white tracking-tight max-w-4xl mx-auto">
            Démosle vida a tu próximo <span className="text-tech-cyan">proyecto tecnológico</span>
          </h2>
          <p className="text-elegant-gray max-w-2xl mx-auto text-lg mt-6">
            Atención 100% personalizada. Sin intermediarios, sin plantillas genéricas. Solo código limpio, alto rendimiento y soluciones a medida en Bogotá.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Columna Izquierda: CTAs Directos */}
          <div className="flex flex-col gap-6">
            <div className="bg-surface-dark/40 border border-surface-dark rounded-2xl p-8">
              <h3 className="text-xl font-bold text-soft-white mb-6">Acción Directa (Preferido para cotizaciones rápidas)</h3>
              
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full bg-tech-cyan/10 border border-tech-cyan text-tech-cyan-light hover:bg-tech-cyan hover:text-deep-dark px-6 py-4 rounded-xl font-semibold transition-all duration-300 mb-4"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                  Escríbeme por WhatsApp
                </span>
                <span className="text-sm hidden sm:block">+57 300 677 9183</span>
              </a>

              <a 
                href="mailto:desarrollswebj@gmail.com?subject=Contacto%20Profesional%20Novacode"
                className="group flex items-center justify-between w-full bg-transparent border border-subtle-gold/40 text-soft-white hover:bg-subtle-gold/10 hover:border-subtle-gold px-6 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  Envíame un Correo
                </span>
                <span className="text-sm hidden sm:block truncate ml-4">desarrollswebj@gmail.com</span>
              </a>
            </div>
            
            <div className="mt-4 p-6 border-l-2 border-tech-cyan bg-surface-dark/20 rounded-r-lg">
              <p className="text-elegant-gray text-sm leading-relaxed">
                <span className="font-bold text-soft-white">Tiempo de respuesta:</span> Normalmente respondo en menos de 2 horas en horario laboral. Si tienes un proyecto urgente, el canal de WhatsApp es el más efectivo.
              </p>
            </div>
          </div>

          {/* Columna Derecha: Formulario Web3Forms */}
          <div className="bg-surface-dark/40 backdrop-blur-sm border border-surface-dark rounded-2xl p-8">
             <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}