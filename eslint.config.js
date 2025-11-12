// eslint.config.js (root directory)
import { defineConfig } from "vitest/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import importPlugin from "eslint-plugin-import";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: ["dist/**", "node_modules/**", "coverage/**"],
  },
  {
    // General configuration for all JS/JSX files
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "no-console": "off",
      "simple-import-sort/imports": "error", // This will show an error if imports are not sorted
      "simple-import-sort/exports": "error", // This will show an error if exports are not sorted
      "import/order": "off", // Disable import/order because simple-import-sort is used
    },
  },

  ...tseslint.configs.recommended,
  eslintConfigPrettier,
]);
