import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-surface-dark/30 border-t border-surface-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Columna 1: Marca y Descripción */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-soft-white tracking-tight">
                Juan Diego{" "}
                <span className="text-tech-cyan-light">Mahecha</span>
              </span>
              <span className="text-subtle-gold font-medium">| Novacode</span>
            </Link>
            <p className="text-elegant-gray max-w-md leading-relaxed">
              Desarrollo web y de software a medida en Bogotá. Soluciones digitales eficientes, código limpio y optimización de alto rendimiento (WPO) para impulsar tu negocio.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {/* Redes Profesionales */}
              <a href="https://github.com/Juandprograma" target="_blank" rel="noopener noreferrer" className="text-elegant-gray hover:text-tech-cyan-light transition-colors" aria-label="GitHub">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.37 1.23-3.21-.12-.3-.54-1.515.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.635.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.21 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://wa.me/573006779183" target="_blank" rel="noopener noreferrer" className="text-elegant-gray hover:text-tech-cyan-light transition-colors" aria-label="WhatsApp">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h3 className="text-sm font-semibold text-soft-white tracking-wider uppercase mb-4">Navegación</h3>
            <ul className="space-y-3">
              <li><Link href="#sobre-mi" className="text-elegant-gray hover:text-tech-cyan-light transition-colors">Sobre mí</Link></li>
              <li><Link href="#proyectos" className="text-elegant-gray hover:text-tech-cyan-light transition-colors">Proyectos</Link></li>
              <li><Link href="#stack" className="text-elegant-gray hover:text-tech-cyan-light transition-colors">Stack Tecnológico</Link></li>
              <li><Link href="#contacto" className="text-elegant-gray hover:text-tech-cyan-light transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Legal */}
          <div>
            <h3 className="text-sm font-semibold text-soft-white tracking-wider uppercase mb-4">Legal</h3>
            <ul className="space-y-3">
              {/* Enlaces no funcionales pero necesarios para Google */}
              <li><Link href="/politica-de-privacidad" className="text-elegant-gray hover:text-tech-cyan-light transition-colors">Política de Privacidad</Link></li>
              <li><Link href="/terminos-y-condiciones" className="text-elegant-gray hover:text-tech-cyan-light transition-colors">Términos y Condiciones</Link></li>
              <li><Link href="/politica-de-cookies" className="text-elegant-gray hover:text-tech-cyan-light transition-colors">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Línea Inferior */}
        <div className="pt-8 border-t border-surface-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-elegant-gray">
            &copy; {currentYear} Juan Diego Mahecha | Novacode. Todos los derechos reservados.
          </p>
          <p className="text-xs text-elegant-gray/60 font-mono">
            Diseñado y desarrollado con Next.js & Tailwind CSS en Bogotá, Colombia.
          </p>
        </div>
      </div>
    </footer>
  );
}