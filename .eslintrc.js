module.exports = {
    parser: "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    extends: [
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier/@typescript-eslint",
      "plugin:prettier/recommended"
    ],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module"
  }
};