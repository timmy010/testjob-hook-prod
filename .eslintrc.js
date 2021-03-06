module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/airbnb", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "max-len": ["error", { code: 120 }],
    "linebreak-style": 0,
    "no-dynamic-require": 0,
    "global-require": 0,
    "prettier/prettier": ["error"],
  },
};
