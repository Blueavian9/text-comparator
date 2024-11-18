import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import dotenv from "dotenv";

// Load .env file
dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync("./key.pem"),
      cert: fs.readFileSync("./cert.pem"),
    },
  },
});
