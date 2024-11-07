import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // Asegúrate de que apunte a la raíz del proyecto
  build: {
    outDir: "dist", // La carpeta de salida que Vercel utilizará para el despliegue
  },
});
