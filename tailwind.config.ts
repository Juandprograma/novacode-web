import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Fondo oscuro profundo
        'deep-dark': '#0a0a0c',
        'surface-dark': '#111114',
        // Acentos cian tecnológico
        'tech-cyan': '#06b6d4',
        'tech-cyan-light': '#22d3ee',
        // Detalles dorados sutiles
        'subtle-gold': '#D4AF37',
        // Grises elegantes para textos
        'elegant-gray': '#A1A1AA',
        'soft-white': '#F4F4F5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-out': 'fadeOut 1s ease-in-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '1', visibility: 'visible' },
          '100%': { opacity: '0', visibility: 'hidden' },
        }
      }
    },
  },
  plugins: [],
};

export default config;