/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    "prettier",
  ],
  "prettier/prettier": [
    "error",
    {
      endOfLine: "auto",
    },
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
  },
};
