// eslint.config.mjs

// Eslint Config
import { defineConfig, globalIgnores } from "eslint/config";

// Eslint plugins
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  // Next.js core
  ...nextVitals,

  // Global ignores
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  // Custom rules
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
]);
