// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:solid/recommended",
  ],
  plugins: ["@typescript-eslint/eslint-plugin", "import"],
  rules: {
    "prettier/prettier": "warn",
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "sort-imports": [
      "warn",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],
    "import/newline-after-import": ["warn", { count: 1 }],
    "import/no-cycle": "error",
    "prefer-const": "warn",
    "@typescript-eslint/no-namespace": "off",
  },
};

module.exports = config;
