module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prefer-arrow", "unicorn", "react-native"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
      },
    },
  ],
};
