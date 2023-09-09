module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        "prettier",
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 11,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "prettier"],
    rules: { "prettier/prettier": "error" },
};
