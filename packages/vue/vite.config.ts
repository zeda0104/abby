/// <reference types="vitest" />

import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
    typecheck: {
      enabled: true,
      include: ["tests/**/*.{test,spec}.ts", "tests/**/*.{test,spec}-d.ts"],
    },
  },
});
