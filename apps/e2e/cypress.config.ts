import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    video: false,
    baseUrl: process.env.AFINA_PROMO_URL || "http://localhost:3000",
  },
  env: {
    backendUrl: process.env.AFINA_BACKEND_URL || "http://localhost:3001",
  },
});
