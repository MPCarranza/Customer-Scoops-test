import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Esto asegura que Vite genera los archivos optimizados en la carpeta 'dist'
    rollupOptions: {
      input: "/public/index.html", // Asegúrate de que Vite sepa que el archivo principal es 'index.html' en 'public'
    },
  },
});
