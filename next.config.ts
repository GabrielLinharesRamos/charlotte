import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Garante que o Turbopack use este diretório como raiz,
    // evitando conflito com package-lock.json em diretórios pai.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
