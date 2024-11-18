import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

// Vite will automatically load environment variables with the VITE_ prefix

export default defineConfig({
  plugins: [react()],
  server: {},
});
