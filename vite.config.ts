import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  test: {
    ...configDefaults,
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
  },
)
