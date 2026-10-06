"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Enlaces de navegación principales
const navLinks = [
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Stack", href: "#stack" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para cambiar el fondo del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-deep-dark/80 backdrop-blur-md border-b border-surface-dark py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* CONTENEDOR PRINCIPAL: Flexbox relative para anclar el centro matemático */}
      <div className="max-w-6xl mx-auto px-6 w-full relative flex justify-between items-center">
        
        {/* 1. Lado Izquierdo: Logo */}
        <Link href="/" className="flex items-center gap-2 group z-20">
          <span className="text-xl font-bold text-soft-white tracking-tight">
            Juan Diego{" "}
            <span className="text-tech-cyan-light">Mahecha</span>
          </span>
          <span className="hidden sm:block text-subtle-gold font-medium">
            | Novacode
          </span>
        </Link>

        {/* 2. Centro Exacto: Enlaces Absolutos */}
        {/* Se oculta en móvil (hidden md:flex) y se ancla al 50% exacto de la barra */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center gap-8 z-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-medium text-elegant-gray hover:text-tech-cyan-light transition-colors duration-300 tracking-wide"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* 3. Lado Derecho: Botón CTA Desktop */}
        <a
          href="https://wa.me/573006779183?text=Hola%20Juan%20Diego,%20quiero%20cotizar%20un%20proyecto%20de%20desarrollo%20web"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-tech-cyan/10 border border-tech-cyan text-tech-cyan-light px-4 py-2 rounded-lg text-sm font-semibold hover:bg-tech-cyan hover:text-deep-dark transition-all duration-300 z-20"
        >
          Cotizar Proyecto
        </a>

        {/* 4. Lado Derecho (Móvil): Botón Hamburguesa */}
        {/* Reemplaza al botón CTA en pantallas pequeñas */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <span
            className={`block w-6 h-0.5 bg-soft-white transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-soft-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-soft-white transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Menú Desplegable Móvil (Mantiene su lógica intacta) */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-deep-dark/95 backdrop-blur-lg border-b border-surface-dark transition-all duration-500 ease-in-out origin-top ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-elegant-gray hover:text-tech-cyan-light transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/573006779183?text=Hola%20Juan%20Diego,%20quiero%20cotizar%20un%20proyecto%20de%20desarrollo%20web"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 bg-tech-cyan text-deep-dark px-6 py-3 rounded-lg text-base font-bold hover:bg-tech-cyan-light transition-colors"
            >
              Cotizar por WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}