// @ts-check

/** @type {import("prettier").Config} */
const config = {
  bracketSpacing: true,
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  semi: true,
  printWidth: 80,
  plugins: [require("prettier-plugin-tailwindcss")],
};

module.exports = config;
