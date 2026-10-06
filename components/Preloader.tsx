"use client";

import { useState, useEffect } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const minDisplayTime = 1500; 
    const removeDomTime = 2500; 

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, minDisplayTime);

    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, removeDomTime);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Si por algún error de React el estado no cambia, forzamos el ocultamiento
  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-deep-dark transition-opacity duration-1000 ease-in-out ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-8 relative z-10">
        
        {/* Icono Tecnológico Central Flotante */}
        <div className="animate-float-icon">
          <div className="relative w-20 h-20 flex items-center justify-center rounded-2xl border border-tech-cyan/20 bg-tech-cyan/5 backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <span className="absolute inset-0 rounded-2xl bg-tech-cyan/10 animate-pulse-slow"></span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
              <path d="M14 14L9 20L14 26" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26 14L31 20L26 26" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="22" y1="13" x2="18" y2="27" stroke="#A1A1AA" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Identidad Visual de la Marca */}
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-soft-white">
            Juan Diego{" "}
            <span className="text-tech-cyan-light">Mahecha</span>
          </h1>
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="h-[2px] w-8 bg-subtle-gold"></span>
            <span className="text-sm md:text-base tracking-[0.4em] text-elegant-gray font-medium uppercase">
              Novacode
            </span>
            <span className="h-[2px] w-8 bg-subtle-gold"></span>
          </div>
        </div>

        {/* Barra de Carga Fluida Minimalista */}
        <div className="w-48 h-[3px] bg-surface-dark rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full w-1/4 bg-tech-cyan rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-loading-bar"></div>
        </div>

      </div>
    </div>
  );
}