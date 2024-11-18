import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Remove the HTTPS configuration as it's not needed for local development
  server: {
  },
});
