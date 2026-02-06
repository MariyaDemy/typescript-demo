import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    ignores: ["**/*.js"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "@stylistic": stylistic,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "@stylistic/indent": ["error", "tab"],
      "@stylistic/no-tabs": ["error", { allowIndentationTabs: true }],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": ["error", "double", { allowTemplateLiterals: "always" }],
      "no-var": "error",
      "@stylistic/no-trailing-spaces": "error",
      "@typescript-eslint/consistent-type-assertions": "off",
      "@stylistic/no-trailing-spaces": "off",
      "sort-keys": "off",
      "no-empty": "off",
      "no-bitwise": "error",
      "@stylistic/eol-last": "off",
      "@stylistic/comma-dangle": ["error", "never"],
      "object-shorthand": "off",
      "curly": "error",
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/prefer-for-of": "off",
      "guard-for-in": "off",
      "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "@stylistic/arrow-parens": ["error", "as-needed"],
      "@typescript-eslint/naming-convention": "error",
      "@typescript-eslint/explicit-member-accessibility": "off",
      "prefer-arrow-callback": "off",
      "@typescript-eslint/prefer-function-type": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "@typescript-eslint/no-empty-function": ["error", { "allow": ["methods"] }]
    }
  }
);