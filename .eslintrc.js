module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "prettier/@typescript-eslint",
  ],
  plugins: ["@typescript-eslint", "jest", "prettier", "react"],
  settings: {
    react: {
      version: "detect",
    },
  },
};

// To debug ES Lint configuration execute: `npx eslint --print-config .eslintrc.js`
// This command prints all rules which are effective after applying all `extends`
