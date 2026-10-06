import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

// Optimización de fuentes a nivel de servidor (0 layout shift)
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Metadatos SEO optimizados
export const metadata: Metadata = {
  metadataBase: new URL("https://tu-dominio.com"), // Actualiza esto cuando tengas el dominio
  title: {
    default: "Juan Diego Mahecha | Novacode - Desarrollo Web y de Software en Bogotá",
    template: "%s | Novacode",
  },
  description:
    "Desarrollo web y de software a medida en Bogotá. Creo aplicaciones modernas, rápidas y escalables con tecnologías de vanguardia. Impulsa tu negocio con Novacode.",
  keywords: [
    "desarrollo web Bogotá",
    "desarrollo de software a medida",
    "programador Bogotá",
    "Novacode",
    "Juan Diego Mahecha",
    "aplicaciones web Colombia",
    "Next.js developer Colombia",
  ],
  authors: [{ name: "Juan Diego Mahecha" }],
  creator: "Juan Diego Mahecha",
  openGraph: {
    title: "Juan Diego Mahecha | Novacode",
    description:
      "Desarrollo web y de software a medida en Bogotá. Soluciones tecnológicas modernas y escalables.",
    type: "website",
    locale: "es_CO",
    siteName: "Novacode",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#0a0a0c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-deep-dark text-elegant-gray font-sans antialiased">
        {/* Estructura semántica y accesible */}
        <Preloader />
        {children}
      </body>
    </html>
  );
}