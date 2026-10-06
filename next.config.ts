import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permitir peticiones de desarrollo desde tu red local
  allowedDevOrigins: ['192.168.0.8', '192.168.0.*'],
};

export default nextConfig;
