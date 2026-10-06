"use client";

import { useState, useRef } from "react";

export default function ContactForm() {
  const [result, setResult] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  // Referencia directa y segura al elemento <form> en el DOM
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Enviando mensaje...");

    // Validación de seguridad para TypeScript
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    formData.append("access_key", "1092246a-c53e-4be8-81b4-fd8f78a43fe3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
        // Limpieza segura usando la referencia
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        setResult(data.message || "Ocurrió un error al enviar el mensaje.");
      }
    } catch (error) {
      console.error(error);
      setResult("Error de conexión. Inténtalo de nuevo más tarde.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className="w-full max-w-xl mx-auto space-y-6 text-soft-white">
      
      {/* Nombre Completo */}
      <div>
        <label className="block text-sm font-medium mb-2 text-elegant-gray">Nombre Completo</label>
        <input 
          type="text" 
          name="name" 
          required 
          placeholder="Ej. Juan Pérez"
          className="w-full bg-deep-dark border border-surface-dark rounded-lg px-4 py-3 text-soft-white placeholder-elegant-gray/50 focus:outline-none focus:border-tech-cyan focus:ring-2 focus:ring-tech-cyan/20 transition-all"
        />
      </div>

      {/* Correo Electrónico */}
      <div>
        <label className="block text-sm font-medium mb-2 text-elegant-gray">Correo Electrónico</label>
        <input 
          type="email" 
          name="email" 
          required 
          placeholder="tu@correo.com"
          className="w-full bg-deep-dark border border-surface-dark rounded-lg px-4 py-3 text-soft-white placeholder-elegant-gray/50 focus:outline-none focus:border-tech-cyan focus:ring-2 focus:ring-tech-cyan/20 transition-all"
        />
      </div>

      {/* Tipo de Proyecto */}
      <div>
        <label className="block text-sm font-medium mb-2 text-elegant-gray">Tipo de Proyecto</label>
        <select 
          name="project_type"
          className="w-full bg-deep-dark border border-surface-dark rounded-lg px-4 py-3 text-soft-white focus:outline-none focus:border-tech-cyan focus:ring-2 focus:ring-tech-cyan/20 transition-all"
        >
          <option value="Desarrollo Web">Desarrollo Web</option>
          <option value="Software a Medida">Software a Medida</option>
          <option value="E-commerce">E-commerce</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      {/* Objetivos / Mensaje */}
      <div>
        <label className="block text-sm font-medium mb-2 text-elegant-gray">Objetivos / Mensaje</label>
        <textarea 
          name="message" 
          required 
          rows={4}
          placeholder="Cuéntame brevemente qué necesitas, plazos y presupuesto estimado."
          className="w-full bg-deep-dark border border-surface-dark rounded-lg px-4 py-3 text-soft-white placeholder-elegant-gray/50 focus:outline-none focus:border-tech-cyan focus:ring-2 focus:ring-tech-cyan/20 transition-all resize-none"
        ></textarea>
      </div>

      {/* Botón de Enviar */}
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-tech-cyan hover:bg-tech-cyan-light text-deep-dark font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensaje ➔"}
      </button>

      {/* Resultado de la petición */}
      {result && (
        <p className={`text-center text-sm mt-4 ${result.includes("éxito") ? "text-tech-cyan-light" : "text-subtle-gold"}`}>
          {result}
        </p>
      )}
    </form>
  );
}