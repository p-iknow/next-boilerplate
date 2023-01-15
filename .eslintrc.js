module.exports = {
  plugins: ['prettier', 'testing-library'],
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
}
