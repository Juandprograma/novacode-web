export default function About() {
  return (
    <section
      id="sobre-mi"
      className="relative py-24 md:py-32 overflow-hidden bg-deep-dark"
    >
      {/* Efecto de fondo sutil tecnológico */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tech-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Columna Izquierda: Copywriting y Filosofía */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-subtle-gold"></span>
              <span className="text-sm tracking-[0.3em] uppercase text-tech-cyan-light font-medium">
                Sobre Mí
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-soft-white leading-tight tracking-tight">
              Tu aliado estratégico en{" "}
              <span className="text-tech-cyan">Ingeniería de Software</span>
            </h2>

            <p className="text-base md:text-lg text-elegant-gray leading-relaxed">
              Soy <span className="text-soft-white font-semibold">Juan Diego Mahecha</span>, desarrollador full-stack y estudiante de último semestre de Ingeniería en Sistemas en Bogotá. No me dedico solo a "escribir código"; construyo soluciones digitales robustas, diseñadas para escalar y generar resultados medubles.
            </p>

            <p className="text-base md:text-lg text-elegant-gray leading-relaxed">
              Mi experiencia abarca desde la ejecución de proyectos internacionales de alto impacto en la agencia <span className="text-soft-white font-semibold">DigitalYa</span>, hasta el liderazgo y arquitectura de software bajo mi propia marca, <span className="text-soft-white font-semibold">Novacode</span>. Conozco las exigencias del mercado global y aplico esos estándares en cada desarrollo.
            </p>

            {/* Filosofía de Trabajo (CRO: Diferenciación) */}
            <div className="mt-4 p-5 sm:p-6 border border-surface-dark rounded-xl bg-surface-dark/30 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-semibold text-soft-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-subtle-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Mi Filosofía de Desarrollo
              </h3>
              <p className="text-sm md:text-base text-elegant-gray leading-relaxed mb-4">
                Cero dependencia innecesaria de plugins de terceros o plataformas restrictivas. Tu código será 100% tuyo, limpio y mantenido.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-center gap-2 text-sm text-elegant-gray">
                  <span className="text-tech-cyan">✦</span> Arquitectura optimizada (WPO)
                </li>
                <li className="flex items-center gap-2 text-sm text-elegant-gray">
                  <span className="text-tech-cyan">✦</span> SEO Técnico puro
                </li>
                <li className="flex items-center gap-2 text-sm text-elegant-gray">
                  <span className="text-tech-cyan">✦</span> Código limpio y escalable
                </li>
                <li className="flex items-center gap-2 text-sm text-elegant-gray">
                  <span className="text-tech-cyan">✦</span> Cero dependencias (No-Plugins)
                </li>
              </ul>
            </div>
          </div>

          {/* Columna Derecha: Tarjetas de Estadísticas y Autoridad */}
          {/* Grid responsivo: 1 columna en móvil, 2 en sm hacia arriba */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            
            {/* Tarjeta 1: Experiencia Internacional */}
            <div className="group relative bg-surface-dark p-4 sm:p-8 rounded-2xl border border-surface-dark hover:border-tech-cyan/40 transition-all duration-300 hover:-translate-y-2 overflow-hidden break-words">
              <div className="absolute inset-0 bg-tech-cyan/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 flex items-center justify-center bg-tech-cyan/10 rounded-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-tech-cyan-light" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 009-9c0-1.05-.17-2.05-.5-3H3.5A9 9 0 003 12a9 9 0 009 9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.5L12 6l3-2.5M3 12h18" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-soft-white mb-1 break-words">Global</h3>
                <p className="text-sm sm:text-base text-elegant-gray leading-relaxed">Experiencia internacional liderando desarrollos en DigitalYa.</p>
              </div>
            </div>

            {/* Tarjeta 2: Académica */}
            {/* El margen superior (mt-12) solo se aplica desde sm hacia arriba para mantener la simetría escalonada en desktop */}
            <div className="group relative bg-surface-dark p-4 sm:p-8 rounded-2xl border border-surface-dark hover:border-tech-cyan/40 transition-all duration-300 hover:-translate-y-2 overflow-hidden break-words mt-0 sm:mt-12">
              <div className="absolute inset-0 bg-tech-cyan/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 flex items-center justify-center bg-tech-cyan/10 rounded-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-tech-cyan-light" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.58a8.94 8.94 0 000 5.82M19.74 10.58a8.94 8.94 0 010 5.82M9.41 19.74a8.94 8.94 0 005.18 0M9.41 4.26a8.94 8.94 0 015.18 0M12 12h.01M4.5 4.5L3 3m18 1.5L19.5 4.5M4.5 19.5L3 21m18-1.5L19.5 19.5" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-soft-white mb-1 break-words">Ing. Sistemas</h3>
                <p className="text-sm sm:text-base text-elegant-gray leading-relaxed">Último semestre. Pensamiento analítico aplicado a la arquitectura.</p>
              </div>
            </div>

            {/* Tarjeta 3: Novacode Liderazgo */}
            <div className="group relative bg-surface-dark p-4 sm:p-8 rounded-2xl border border-surface-dark hover:border-tech-cyan/40 transition-all duration-300 hover:-translate-y-2 overflow-hidden break-words">
              <div className="absolute inset-0 bg-tech-cyan/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 flex items-center justify-center bg-tech-cyan/10 rounded-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-tech-cyan-light" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-soft-white mb-1 break-words">Novacode</h3>
                <p className="text-sm sm:text-base text-elegant-gray leading-relaxed">Liderazgo de proyectos full-stack a medida y de alto rendimiento.</p>
              </div>
            </div>

            {/* Tarjeta 4: Filosofía 0 Plugins */}
            <div className="group relative bg-surface-dark p-4 sm:p-8 rounded-2xl border border-surface-dark hover:border-tech-cyan/40 transition-all duration-300 hover:-translate-y-2 overflow-hidden break-words mt-0 sm:mt-12">
              <div className="absolute inset-0 bg-tech-cyan/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 flex items-center justify-center bg-tech-cyan/10 rounded-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-tech-cyan-light" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.251.751.964 1.05 2.21.6 3.48-.45 1.27-1.45 2.18-2.66 2.58.06 1.2-.42 2.39-1.35 3.24-.93.85-2.17 1.2-3.4 1.02-.6 1.07-1.71 1.79-2.99 1.79-1.28 0-2.39-.72-2.99-1.79-1.23.18-2.47-.17-3.4-1.02-.93-.85-1.41-2.04-1.35-3.24-1.21-.4-2.21-1.31-2.66-2.58-.45-1.27-.15-2.516.6-3.48C3.63 14.39 3 13.268 3 12c0-1.268.63-2.39 1.593-3.251-.751-.964-1.05-2.21-.6-3.48.45-1.27 1.45-2.18 2.66-2.58-.06-1.2.42-2.39 1.35-3.24.93-.85 2.17-1.2 3.4-1.02.6-1.07 1.71-1.79 2.99-1.79 1.28 0 2.39.72 2.99 1.79 1.23-.18 2.47.17 3.4 1.02.93.85 1.41 2.04 1.35 3.24 1.21.4 2.21 1.31 2.66 2.58.45 1.27.15 2.516-.6 3.48C20.37 9.61 21 10.732 21 12z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-soft-white mb-1 break-words">0% Plugins</h3>
                <p className="text-sm sm:text-base text-elegant-gray leading-relaxed">Independencia total. Soluciones desde cero, sin dependencias de terceros.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}