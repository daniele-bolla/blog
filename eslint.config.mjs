import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next", "plugin:mdx/recommended"],
    plugins: ["mdx", "prettier"],
    rules: {
      "no-unused-expressions": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
    },
    settings: {
      "mdx/ fichiers": [".md", ".mdx"],
    },
  }),
  // ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
